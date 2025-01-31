// (C) Copyright 2015 Moodle Pty Ltd.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { Component, OnDestroy, OnInit } from '@angular/core';
import { IonRefresher } from '@ionic/angular';
import { Md5 } from 'ts-md5/dist/md5';

import { CoreApp } from '@services/app';
import { CoreSites } from '@services/sites';
import { CoreDomUtils } from '@services/utils/dom';
import { CoreTextUtils } from '@services/utils/text';
import { Translate } from '@singletons';
import { CoreEventObserver, CoreEvents } from '@singletons/events';
import {
    AddonPrivateFiles,
    AddonPrivateFilesProvider,
    AddonPrivateFilesFile,
    AddonPrivateFilesGetUserInfoWSResult,
    AddonPrivateFilesGetFilesWSParams,
} from '@/addons/privatefiles/services/privatefiles';
import { AddonPrivateFilesHelper } from '@/addons/privatefiles/services/privatefiles-helper';
import { CoreUtils } from '@services/utils/utils';
import { CoreNavigator } from '@services/navigator';
import {CoreConfig} from "@services/config";
import {CoreConstants} from "@/core/constants";

/**
 * Page that displays the list of files.
 */
@Component({
    selector: 'page-addon-privatefiles-index',
    templateUrl: 'index.html',
})
export class AddonPrivateFilesIndexPage implements OnInit, OnDestroy {

    public colorScheme?: string;

    title!: string; // Page title.
    root?: 'my' | 'site'; // The root of the files loaded: 'my' or 'site'.
    path?: AddonPrivateFilesGetFilesWSParams; // The path of the directory being loaded. If empty path it means load the root.
    showPrivateFiles!: boolean; // Whether the user can view private files.
    showSiteFiles!: boolean; // Whether the user can view site files.
    showUpload!: boolean; // Whether the user can upload files.
    userQuota?: number; // The user quota (in bytes).
    filesInfo?: AddonPrivateFilesGetUserInfoWSResult; // Info about private files (size, number of files, etc.).
    spaceUsed?: string; // Space used in a readable format.
    userQuotaReadable?: string; // User quota in a readable format.
    files?: AddonPrivateFilesFile[]; // List of files.
    component!: string; // Component to link the file downloads to.
    filesLoaded = false; // Whether the files are loaded.

    protected updateSiteObserver: CoreEventObserver;

    constructor() {
        // Update visibility if current site info is updated.
        this.updateSiteObserver = CoreEvents.on(CoreEvents.SITE_UPDATED, () => {
            this.setVisibility();
        }, CoreSites.getCurrentSiteId());
    }

    /**
     * Component being initialized.
     */
    ngOnInit(): void {
        this.root = CoreNavigator.getRouteParam('root');
        const contextId = CoreNavigator.getRouteNumberParam('contextid');

        if (contextId) {
            // Loading a certain folder.
            this.path = {
                contextid: contextId,
                component: CoreNavigator.getRouteParam<string>('component')!,
                filearea: CoreNavigator.getRouteParam<string>('filearea')!,
                itemid: CoreNavigator.getRouteNumberParam('itemid')!,
                filepath: CoreNavigator.getRouteParam<string>('filepath')!,
                filename: CoreNavigator.getRouteParam<string>('filename')!,
            };
        }

        this.title = this.path?.filename || Translate.instant('addon.privatefiles.files');

        this.setVisibility();
        this.userQuota = CoreSites.getCurrentSite()?.getInfo()?.userquota;

        if (!this.root) {
            // Load private files by default.
            if (this.showPrivateFiles) {
                this.root = 'my';
            } else if (this.showSiteFiles) {
                this.root = 'site';
            }
        }

        if (this.root) {
            this.rootChanged(this.root);
        } else {
            this.filesLoaded = true;
        }
    }

    public ionViewWillEnter() {
        this.setColorScheme();
    }

    public async setColorScheme(): Promise<void> {
        this.colorScheme = await CoreConfig.get(CoreConstants.SETTINGS_COLOR_SCHEME).catch((er) => 'light') as string;
    }

    /**
     * Set visibility of some items based on site data.
     */
    protected setVisibility(): void {
        this.showPrivateFiles = AddonPrivateFiles.canViewPrivateFiles();
        this.showSiteFiles = AddonPrivateFiles.canViewSiteFiles();
        this.showUpload = AddonPrivateFiles.canUploadFiles();
    }

    /**
     * Refresh the data.
     *
     * @param refresher Refresher.
     */
    refreshData(event?: IonRefresher): void {
        this.refreshFiles().finally(() => {
            event?.complete();
        });
    }

    /**
     * Function called when the root has changed.
     *
     * @param root New root.
     */
    rootChanged(root: 'my' | 'site'): void {
        this.root = root;

        this.filesLoaded = false;
        this.component = this.root == 'my' ? AddonPrivateFilesProvider.PRIVATE_FILES_COMPONENT :
            AddonPrivateFilesProvider.SITE_FILES_COMPONENT;

        this.fetchFiles().finally(() => {
            this.filesLoaded = true;
        });
    }

    /**
     * Upload a new file.
     */
    async uploadFile(): Promise<void> {
        const canUpload = await AddonPrivateFiles.versionCanUploadFiles();

        if (!canUpload) {
            CoreDomUtils.showAlertTranslated('core.notice', 'addon.privatefiles.erroruploadnotworking');

            return;
        }

        if (!CoreApp.isOnline()) {
            CoreDomUtils.showErrorModal('core.fileuploader.errormustbeonlinetoupload', true);

            return;
        }

        try {
            await AddonPrivateFilesHelper.uploadPrivateFile(this.filesInfo);

            // File uploaded, refresh the list.
            this.filesLoaded = false;

            await CoreUtils.ignoreErrors(this.refreshFiles());

            this.filesLoaded = true;
        } catch (error) {
            CoreDomUtils.showErrorModalDefault(error, 'core.fileuploader.errorwhileuploading', true);
        }
    }

    /**
     * Fetch the files.
     *
     * @return Promise resolved when done.
     */
    protected async fetchFiles(): Promise<void> {
        try {
            if (this.path) {
                // Path is set, serve the files the user requested.
                this.files = await AddonPrivateFiles.getFiles(this.path);

                return;
            }

            // The path is unknown, the user must be requesting a root.
            if (this.root == 'site') {
                this.title = Translate.instant('addon.privatefiles.sitefiles');

                this.files = await AddonPrivateFiles.getSiteFiles();
            } else if (this.root == 'my') {
                this.title = Translate.instant('addon.privatefiles.files');

                this.files = await AddonPrivateFiles.getPrivateFiles();

                if (this.showUpload && AddonPrivateFiles.canGetPrivateFilesInfo() && this.userQuota &&
                    this.userQuota > 0) {
                    // Get the info to calculate the available size.
                    this.filesInfo = await AddonPrivateFiles.getPrivateFilesInfo();

                    this.spaceUsed = CoreTextUtils.bytesToSize(this.filesInfo.filesizewithoutreferences, 1);
                    this.userQuotaReadable = CoreTextUtils.bytesToSize(this.userQuota, 1);
                } else {
                    // User quota isn't useful, delete it.
                    delete this.userQuota;
                }
            } else {
                // Unknown root.
                CoreDomUtils.showErrorModal('addon.privatefiles.couldnotloadfiles', true);
            }
        } catch (error) {
            CoreDomUtils.showErrorModalDefault(error, 'addon.privatefiles.couldnotloadfiles', true);
        }
    }

    /**
     * Refresh the displayed files.
     *
     * @return Promise resolved when done.
     */
    protected async refreshFiles(): Promise<void> {
        try {
            await Promise.all([
                AddonPrivateFiles.invalidateDirectory(this.root, this.path),
                AddonPrivateFiles.invalidatePrivateFilesInfoForUser(),
            ]);
        } finally {
            await this.fetchFiles();
        }
    }

    /**
     * Open a folder.
     *
     * @param folder Folder to open.
     */
    openFolder(folder: AddonPrivateFilesFile): void {
        const params = {
            contextid: folder.contextid,
            component: folder.component || '',
            filearea: folder.filearea || '',
            itemid: folder.itemid || 0,
            filepath: folder.filepath || '',
            filename: folder.filename || '',
        };

        if (folder.component) {
            // Delete unused elements that may break the request.
            params.filename = '';
        }

        const hash = <string> Md5.hashAsciiStr(JSON.stringify(params));

        CoreNavigator.navigate(`../${hash}`, { params });
    }

    /**
     * Page destroyed.
     */
    ngOnDestroy(): void {
        this.updateSiteObserver?.off();
    }

}
