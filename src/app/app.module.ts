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

import { APP_INITIALIZER, COMPILER_OPTIONS, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { IonicModule, IonicRouteStrategy, iosTransitionAnimation } from '@ionic/angular';

import { CoreModule } from '@/core/core.module';
import { AddonsModule } from '@/addons/addons.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { JitCompilerFactory } from '@angular/platform-browser-dynamic';
import { CoreCronDelegate } from '@services/cron';
import { CoreSiteInfoCronHandler } from '@services/handlers/site-info-cron';
import { CoreAppProvider } from '@services/app';

// For translate loader. AoT requires an exported function for factories.
export function createTranslateLoader(http: HttpClient): TranslateHttpLoader {
    return new TranslateHttpLoader(http, './assets/lang/', '.json');
}

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        IonicModule.forRoot(
            {
                navAnimation: iosTransitionAnimation,
            },
        ),
        HttpClientModule, // HttpClient is used to make JSON requests. It fails for HEAD requests because there is no content.
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: (createTranslateLoader),
                deps: [HttpClient],
            },
        }),
        AppRoutingModule,
        CoreModule,
        AddonsModule,
    ],
    providers: [
        { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
        { provide: COMPILER_OPTIONS, useValue: {}, multi: true },
        { provide: JitCompilerFactory, useClass: JitCompilerFactory, deps: [COMPILER_OPTIONS] },
        {
            provide: APP_INITIALIZER,
            multi: true,
            deps: [CoreAppProvider],
            useFactory: () => () => {
                CoreCronDelegate.register(CoreSiteInfoCronHandler.instance);
            },
        },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
