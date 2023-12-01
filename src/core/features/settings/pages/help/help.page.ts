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

import { Component, OnInit } from '@angular/core';
import {CoreConfig} from "@services/config";
import {CoreConstants} from "@/core/constants";
// import {CoreConstants} from "../../../../../shared/constants/main-constants";
// import {CoreStorageProvider} from "../../../../../shared/providers/storage.service";

@Component({
  selector: 'app-help',
  templateUrl: './help.page.html',
  styleUrls: ['./help.page.scss'],
})
export class HelpPage {

  public colorScheme?: string;

  public ionViewWillEnter() {
    this.setColorScheme();
  }

  public async setColorScheme(): Promise<void> {
    this.colorScheme = await CoreConfig.get(CoreConstants.SETTINGS_COLOR_SCHEME).catch((er) => 'light') as string;
  }
}
