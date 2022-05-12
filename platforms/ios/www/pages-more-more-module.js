(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-more-more-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/mainmenu/pages/more/more.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/core/features/mainmenu/pages/more/more.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\n        </ion-buttons>\n\n        <!-- <h1><core-format-text [text]=\"siteName\" contextLevel=\"system\" [contextInstanceId]=\"0\"></core-format-text></h1> -->\n        <ion-title>\n            <img src=\"/assets/img/logo-header-light.svg\" role=\"presentation\">\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n\n\n\n<!-- <ion-content>\n    <h1>More</h1>\n    <core-loading [hideUntil]=\"!loggedOut\">\n        <ion-list>\n           <ion-item button *ngIf=\"siteInfo\" class=\"ion-text-wrap\" core-user-link [userId]=\"siteInfo.userid\" detail=\"true\">\n                <core-user-avatar [user]=\"siteInfo\" slot=\"start\"></core-user-avatar>\n                <ion-label>\n                    <p class=\"item-heading\">{{siteInfo.fullname}}</p>\n                    <p class=\"core-moremenu-siteinfo core-moremenu-sitename\">\n                        <core-format-text [text]=\"siteName\" contextLevel=\"system\" [contextInstanceId]=\"0\" [wsNotFiltered]=\"true\">\n                        </core-format-text>\n                    </p>\n                    <p class=\"core-moremenu-siteinfo core-moremenu-siteurl\">{{ siteUrl }}</p>\n                </ion-label>\n            </ion-item> \n            <!-- <core-spacer></core-spacer> -->\n            <!-- <ion-item class=\"ion-text-center\" *ngIf=\"(!handlers || !handlers.length) && !handlersLoaded\">\n                <ion-label><ion-spinner [attr.aria-label]=\"'core.loading' | translate\"></ion-spinner></ion-label>\n            </ion-item> -->\n\n\n            <!-- <ion-item button *ngFor=\"let handler of handlers\" [ngClass]=\"['core-moremenu-handler', handler.class || '']\"\n                (click)=\"openHandler(handler)\" [attr.aria-label]=\"handler.title | translate\" detail=\"true\">\n                <ion-icon [name]=\"handler.icon\" slot=\"start\" aria-hidden=\"true\"></ion-icon>\n                <ion-label>\n                    <p class=\"item-heading\">{{ handler.title | translate}}</p>\n                </ion-label>\n                <ion-badge slot=\"end\" *ngIf=\"handler.showBadge\" [hidden]=\"handler.loading || !handler.badge\" aria-hidden=\"true\">\n                    {{handler.badge}}\n                </ion-badge>\n                <span *ngIf=\"handler.showBadge && handler.badge && handler.badgeA11yText\" class=\"sr-only\">\n                    {{ handler.badgeA11yText | translate: {$a : handler.badge } }}\n                </span>\n                <ion-spinner slot=\"end\" *ngIf=\"handler.showBadge && handler.loading\" [attr.aria-label]=\"'core.loading' | translate\">\n                </ion-spinner>\n            </ion-item> -->\n            <!-- <ng-container *ngFor=\"let item of customItems\">\n                <ion-item button *ngIf=\"item.type != 'embedded'\" [href]=\"item.url\" [attr.aria-label]=\"item.label\" core-link\n                    [capture]=\"item.type == 'app'\" [inApp]=\"item.type == 'inappbrowser'\" class=\"core-moremenu-customitem\" detail=\"true\"\n                    [detailIcon]=\"item.type == 'browser' ? 'open-outline' : 'chevron-forward'\">\n                    <ion-icon [name]=\"item.icon\" slot=\"start\" aria-hidden=\"true\"></ion-icon>\n                    <ion-label>\n                        <p class=\"item-heading\">{{item.label}}</p>\n                    </ion-label>\n                </ion-item>\n                <ion-item button *ngIf=\"item.type == 'embedded'\" (click)=\"openItem(item)\" [attr.aria-label]=\"item.label\"\n                    class=\"core-moremenu-customitem\" detail=\"true\">\n                    <ion-icon [name]=\"item.icon\" slot=\"start\" aria-hidden=\"true\"></ion-icon>\n                    <ion-label>\n                        <p class=\"item-heading\">{{item.label}}</p>\n                    </ion-label>\n                </ion-item>\n            </ng-container> -->\n\n            <!-- <ion-item button *ngIf=\"showScanQR\" (click)=\"scanQR()\" detail=\"true\">\n                <ion-icon name=\"fas-qrcode\" slot=\"start\" aria-hidden=\"true\"></ion-icon>\n                <ion-label>\n                    <p class=\"item-heading\">{{ 'core.scanqr' | translate }}</p>\n                </ion-label>\n            </ion-item> -->\n\n\n            <!-- <ion-item button class=\"ion-text-wrap\" core-user-link [userId]=\"siteInfo.userid\" detail=\"true\">\n                <img src=\"/assets/more/profile-icon-light.svg\" width=\"31\" slot=\"start\" aria-hidden=\"true\"/>\n                <ion-label>\n                    <p class=\"item-heading\">Profile</p>\n                </ion-label>\n            </ion-item>\n\n\n            <ion-item button *ngIf=\"showWeb && siteInfo\" [href]=\"siteInfo.siteurl\" core-link autoLogin=\"yes\"\n                [attr.aria-label]=\"'core.mainmenu.website' | translate\" detail=\"true\" >\n                <ion-icon name=\"fas-globe\" slot=\"start\" aria-hidden=\"true\"></ion-icon>\n                <ion-label>\n                    <p class=\"item-heading\">ORI BU Website</p>\n                </ion-label>\n            </ion-item>\n\n            <ion-item button *ngIf=\"showHelp\" [href]=\"docsUrl\" core-link autoLogin=\"no\"\n                [attr.aria-label]=\"'core.mainmenu.help' | translate\" detail=\"true\" >\n                <ion-icon name=\"far-life-ring\" slot=\"start\" aria-hidden=\"true\"></ion-icon>\n                <ion-label>\n                    <p class=\"item-heading\">Help/FAQs</p>\n                </ion-label>\n            </ion-item>\n\n            <ion-item button (click)=\"openPreferences()\" [attr.aria-label]=\"'core.settings.preferences' | translate\" detail=\"true\">\n                <ion-icon name=\"fas-wrench\" slot=\"start\" aria-hidden=\"true\"></ion-icon>\n                <ion-label>\n                    <p class=\"item-heading\">Accessibility settings</p>\n                </ion-label>\n            </ion-item>\n\n            <ion-item button (click)=\"logout()\" [attr.aria-label]=\"logoutLabel | translate\" detail=\"true\">\n                <ion-icon name=\"fas-sign-out-alt\" slot=\"start\" aria-hidden=\"true\"></ion-icon>\n                <ion-label>\n                    <p class=\"item-heading\">{{ logoutLabel | translate }}</p>\n                </ion-label>\n            </ion-item>\n            <!-- <core-spacer></core-spacer> -->\n            <!-- <ion-item button (click)=\"openSettings()\" [attr.aria-label]=\"'core.settings.appsettings' | translate\" detail=\"true\">\n                <ion-icon name=\"fas-cogs\" slot=\"start\" aria-hidden=\"true\"></ion-icon>\n                <ion-label>\n                    <p class=\"item-heading\">{{ 'core.settings.appsettings' | translate }}</p>\n                </ion-label>\n            </ion-item> -->\n        <!-- </ion-list>\n    </core-loading>\n</ion-content>  --> -->\n\n\n\n<ion-content class=\"he-page\">\n \n    <core-loading [hideUntil]=\"!loggedOut\">\n        <h1>MORE</h1>\n        <div class=\"he-table\">\n            <div class=\"he-table-group\">\n                <div class=\"he-table-row\" core-user-link [userId]=\"siteInfo.userid\">\n                    <div class=\"he-table-icon\">\n                        <img src=\"/assets/more/profile-icon-light.svg\" height=\"32\"/>\n                    </div>\n                    <div class=\"he-table-title\"><p>Profile</p></div>\n                    <div class=\"he-table-accessory\">\n                        <img src=\"/assets/more/arrow-icon-light.svg\" width=\"11\"/>\n                    </div>\n                </div>\n                <div class=\"he-table-row\" *ngIf=\"biometricsAvailible\">\n                    <div class=\"he-table-icon\">\n                        <img src=\"/assets/more/faceid-icon-light.svg\" height=\"31\"/>\n                    </div>\n                    <div class=\"he-table-title\"><p>Face ID/finger print log in</p></div>\n                    <div class=\"he-table-accessory\">\n                        <app-toggle [value]=\"biometricsEnabled\" (onState)=\"biometricsChanged($event)\"></app-toggle>\n                    </div>\n                </div>\n                <div class=\"he-table-row\" (click)=\"openSettings()\" [attr.aria-label]=\"'core.settings.appsettings' | translate\" detail=\"true\">\n                    <div class=\"he-table-icon\">\n                        <img src=\"/assets/more/accessibility-icon-light.svg\" width=\"28\"/>\n                    </div>\n                    <div class=\"he-table-title\"><p>Accessibility settings</p></div>\n                    <div class=\"he-table-accessory\">\n                        <img src=\"/assets/more/arrow-icon-light.svg\" width=\"11\"/>\n                    </div>\n                </div>\n\n\n            \n\n                    <div class=\"he-table-row\" [href]=\"siteInfo.siteurl\" core-link autoLogin=\"yes\"\n                    [attr.aria-label]=\"'core.mainmenu.website' | translate\" detail=\"true\">\n                        <div class=\"he-table-icon\" (click)=\"openLink('https://microsites.bournemouth.ac.uk/ori/')\">\n                            <img src=\"/assets/more/thr-icon-light.svg\" width=\"27\"/>\n                        </div>\n                        <div class=\"he-table-title\"><p>ORI BU Website</p></div>\n                        <div class=\"he-table-accessory\">\n                            <img src=\"/assets/more/arrow-icon-light.svg\" width=\"11\"/>\n                        </div>\n                    </div>\n\n\n\n                <!-- </a> -->\n                <!--<div *ngIf=\"false\" class=\"he-table-row\" (click)=\"openHandler('AddonMoreTermsPage')\">-->\n                    <!--<div class=\"he-table-icon\">-->\n                        <!--<img src=\"/assets/more/terms-icon-light.svg\" width=\"27\"/>-->\n                    <!--</div>-->\n                    <!--<div class=\"he-table-title\"><p>Terms and conditions</p></div>-->\n                    <!--<div class=\"he-table-accessory\">-->\n                        <!--<img src=\"/assets/more/arrow-icon-light.svg\" width=\"11\"/>-->\n                    <!--</div>-->\n                <!--</div>-->\n                <div class=\"he-table-row\" routerLink=\"/tabs/more/term\" (click)=\"openTerm()\">\n                    <div class=\"he-table-icon\">\n                        <img src=\"/assets/more/terms-icon-light.svg\" width=\"27\"/>\n                    </div>\n                    <div class=\"he-table-title\"><p>Terms and conditions</p></div>\n                    <div class=\"he-table-accessory\">\n                        <img src=\"/assets/more/arrow-icon-light.svg\" width=\"11\"/>\n                    </div>\n                </div>\n                <div class=\"he-table-row\" routerLink=\"/tabs/more/help\" (click)=\"openHelp()\" > \n                    <!-- (click)=\"openLink('https://icshealth.co.uk/lcd/app-faqs/')\"  -->\n                    <div class=\"he-table-icon\">\n                        <img src=\"/assets/more/help-icon-light.svg\" width=\"30\"/>\n                    </div>\n                    <div class=\"he-table-title\"><p>Help/FAQs</p></div>\n                    <div class=\"he-table-accessory\">\n                        <img src=\"/assets/more/arrow-icon-light.svg\" width=\"11\"/>\n                    </div>\n                </div>\n            </div>\n            <div class=\"he-table-group\">\n                <div class=\"he-table-row\" (click)=\"logout()\" [attr.aria-label]=\"logoutLabel | translate\" detail=\"true\">\n                    <div class=\"he-table-icon\">\n                        <img src=\"/assets/more/signout-icon-light.svg\" width=\"30\"/>\n                    </div>\n                    <div class=\"he-table-title\"><p>Sign out</p></div>\n                    <div class=\"he-table-accessory\">\n                            <img src=\"/assets/more/arrow-icon-light.svg\" width=\"11\"/>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <!-- <p class=\"he-more-appversion\">App version v{{ versionNumber }}</p> -->\n    </core-loading>\n</ion-content>\n\n\n\n");

/***/ }),

/***/ "./src/core/features/mainmenu/pages/more/more.module.ts":
/*!**************************************************************!*\
  !*** ./src/core/features/mainmenu/pages/more/more.module.ts ***!
  \**************************************************************/
/*! exports provided: CoreMainMenuMorePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreMainMenuMorePageModule", function() { return CoreMainMenuMorePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _more__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./more */ "./src/core/features/mainmenu/pages/more/more.ts");
/* harmony import */ var _features_mainmenu_mainmenu_tab_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @features/mainmenu/mainmenu-tab-routing.module */ "./src/core/features/mainmenu/mainmenu-tab-routing.module.ts");
/* harmony import */ var _features_mainmenu_services_mainmenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @features/mainmenu/services/mainmenu */ "./src/core/features/mainmenu/services/mainmenu.ts");
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







let CoreMainMenuMorePageModule = class CoreMainMenuMorePageModule {
};
CoreMainMenuMorePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _core_shared_module__WEBPACK_IMPORTED_MODULE_3__["CoreSharedModule"],
        ],
        providers: [
            {
                provide: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ROUTES"],
                multi: true,
                deps: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]],
                useFactory: (injector) => Object(_features_mainmenu_mainmenu_tab_routing_module__WEBPACK_IMPORTED_MODULE_5__["buildTabMainRoutes"])(injector, {
                    component: _more__WEBPACK_IMPORTED_MODULE_4__["CoreMainMenuMorePage"],
                    data: {
                        mainMenuTabRoot: _features_mainmenu_services_mainmenu__WEBPACK_IMPORTED_MODULE_6__["CoreMainMenuProvider"].MORE_PAGE_NAME,
                    },
                }),
            },
        ],
        declarations: [
            _more__WEBPACK_IMPORTED_MODULE_4__["CoreMainMenuMorePage"],
        ],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
        ],
    })
], CoreMainMenuMorePageModule);



/***/ }),

/***/ "./src/core/features/mainmenu/pages/more/more.scss":
/*!*********************************************************!*\
  !*** ./src/core/features/mainmenu/pages/more/more.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".he-table {\n  margin-top: -0.6rem;\n}\n.he-table .he-table-group {\n  margin-top: 2.5rem;\n}\n.he-table .he-table-group .he-table-row {\n  min-height: 61px;\n  background: var(--menu-tile-background);\n  display: flex;\n  flex-direction: row;\n  text-decoration: none;\n  border-radius: 5px;\n  margin-left: 14px;\n}\n.he-table .he-table-group .he-table-row .he-table-icon {\n  display: flex;\n  width: 3.2rem;\n  align-items: center;\n  justify-content: center;\n}\n.he-table .he-table-group .he-table-row .he-table-title {\n  display: flex;\n  flex: 1;\n  align-items: center;\n  padding-left: 10px;\n}\n.he-table .he-table-group .he-table-row .he-table-title p {\n  font-size: 1.2rem;\n  font-weight: 400;\n  color: var(--light-black-text);\n  margin: 0;\n}\n.he-table .he-table-group .he-table-row .he-table-accessory {\n  width: 2.5rem;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  padding-right: 1.1rem;\n}\n.he-more-appversion {\n  margin: 3.2rem 1.25rem;\n  font-size: 1.4rem;\n  color: var(--version-text);\n}\nh1 {\n  font-size: 1.8rem;\n  margin-top: 0.4rem;\n  padding-left: 1.2rem;\n  color: var(--black-text);\n  text-transform: uppercase;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb3JlL2ZlYXR1cmVzL21haW5tZW51L3BhZ2VzL21vcmUvbW9yZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNDQTtFQUNJLG1CQUFBO0FBckNKO0FBc0NJO0VBQ0Usa0JBQUE7QUFwQ047QUFxQ007RUFDRSxnQkFBQTtFQUNBLHVDQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUdBLGlCQUFBO0FBckNSO0FBc0NRO0VBQ0UsYUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBcENWO0FBc0NRO0VBQ0UsYUFBQTtFQUNBLE9BQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBcENWO0FBcUNVO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLDhCQUFBO0VBQ0EsU0FBQTtBQW5DWjtBQXNDUTtFQUNFLGFBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0FBcENWO0FBMENFO0VBQ0Usc0JBQUE7RUFDQSxpQkFBQTtFQUNBLDBCQUFBO0FBdkNKO0FBeUNFO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0Esd0JBQUE7RUFDQSx5QkFBQTtBQXRDSiIsImZpbGUiOiJzcmMvY29yZS9mZWF0dXJlcy9tYWlubWVudS9wYWdlcy9tb3JlL21vcmUuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEBpbXBvcnQgXCJ+dGhlbWUvZ2xvYmFsc1wiO1xuXG4vLyBpb24taXRlbSB7XG4vLyBcdC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1jb3JlLW1vcmUtaXRlbS1ib3JkZXIsXG4vLyAgICAgICAgIHZhcigtLWlvbi1pdGVtLWJvcmRlci1jb2xvcixcbi8vICAgICAgICAgdmFyKC0taW9uLWJvcmRlci1jb2xvcixcbi8vICAgICAgICAgdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwLFxuLy8gICAgICAgICByZ2JhKDAsIDAsIDAsIDAuMTMpKSkpKTtcblxuLy8gICAgIGlvbi1pY29uIHtcbi8vICAgICAgICAgY29sb3I6IHZhcigtLWNvcmUtbW9yZS1pY29uLCBpbmhlcml0KTtcblxuLy8gICAgIH1cbi8vIH1cblxuLy8gOmhvc3QtY29udGV4dChpb24tYXBwLmlvcykge1xuLy8gICAgIGlvbi1pdGVtIGlvbi1pY29uIHtcbi8vICAgICAgICAgY29sb3I6IHZhcigtLWNvcmUtbW9yZS1pY29uLCBpbmhlcml0KTtcbi8vICAgICB9XG4vLyB9XG5cbi8vIEBpZiAoJGNvcmUtbW9yZS1oaWRlLXNpdGVpbmZvKSB7XG4vLyAgICAgLmNvcmUtbW9yZW1lbnUtc2l0ZWluZm8ge1xuLy8gICAgICAgICBkaXNwbGF5OiBub25lO1xuLy8gICAgIH1cbi8vIH1cblxuLy8gQGlmICgkY29yZS1tb3JlLWhpZGUtc2l0ZW5hbWUpIHtcbi8vICAgICAuY29yZS1tb3JlbWVudS1zaXRlbmFtZSB7XG4vLyAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4vLyAgICAgfVxuLy8gfVxuXG4vLyBAaWYgKCRjb3JlLW1vcmUtaGlkZS1zaXRldXJsKSB7XG4vLyAgICAgLmNvcmUtbW9yZW1lbnUtc2l0ZXVybCB7XG4vLyAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4vLyAgICAgfVxuLy8gfVxuLmhlLXRhYmxlIHtcbiAgICBtYXJnaW4tdG9wOiAtMC42cmVtO1xuICAgIC5oZS10YWJsZS1ncm91cCB7XG4gICAgICBtYXJnaW4tdG9wOiAyLjVyZW07XG4gICAgICAuaGUtdGFibGUtcm93IHtcbiAgICAgICAgbWluLWhlaWdodDogNjFweDtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tbWVudS10aWxlLWJhY2tncm91bmQpO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgLy8gd2lkdGg6IGNhbGMoMTAwJSAtIDIuNHJlbSk7XG4gICAgICAgIC8vIG1hcmdpbjogMXJlbSBhdXRvIDA7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNHB4O1xuICAgICAgICAuaGUtdGFibGUtaWNvbiB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICB3aWR0aDogMy4ycmVtO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLmhlLXRhYmxlLXRpdGxlIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgcCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICBjb2xvcjp2YXIoLS1saWdodC1ibGFjay10ZXh0KTtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLmhlLXRhYmxlLWFjY2Vzc29yeSB7XG4gICAgICAgICAgd2lkdGg6IDIuNXJlbTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxLjFyZW07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgXG4gIC5oZS1tb3JlLWFwcHZlcnNpb24ge1xuICAgIG1hcmdpbjogMy4ycmVtIDEuMjVyZW07XG4gICAgZm9udC1zaXplOiAxLjRyZW07XG4gICAgY29sb3I6IHZhcigtLXZlcnNpb24tdGV4dCk7XG4gIH1cbiAgaDEge1xuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xuICAgIG1hcmdpbi10b3A6IDAuNHJlbTtcbiAgICBwYWRkaW5nLWxlZnQ6IDEuMnJlbTtcbiAgICBjb2xvcjogdmFyKC0tYmxhY2stdGV4dCk7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/core/features/mainmenu/pages/more/more.ts":
/*!*******************************************************!*\
  !*** ./src/core/features/mainmenu/pages/more/more.ts ***!
  \*******************************************************/
/*! exports provided: CoreMainMenuMorePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreMainMenuMorePage", function() { return CoreMainMenuMorePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_sites__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/sites */ "./src/core/services/sites.ts");
/* harmony import */ var _services_utils_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/utils/utils */ "./src/core/services/utils/utils.ts");
/* harmony import */ var _features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @features/login/services/login-helper */ "./src/core/features/login/services/login-helper.ts");
/* harmony import */ var _services_mainmenu_delegate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/mainmenu-delegate */ "./src/core/features/mainmenu/services/mainmenu-delegate.ts");
/* harmony import */ var _services_mainmenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/mainmenu */ "./src/core/features/mainmenu/services/mainmenu.ts");
/* harmony import */ var _singletons_events__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @singletons/events */ "./src/core/singletons/events.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _services_urlschemes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @services/urlschemes */ "./src/core/services/urlschemes.ts");
/* harmony import */ var _features_contentlinks_services_contentlinks_helper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @features/contentlinks/services/contentlinks-helper */ "./src/core/features/contentlinks/services/contentlinks-helper.ts");
/* harmony import */ var _services_utils_text__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @services/utils/text */ "./src/core/services/utils/text.ts");
/* harmony import */ var _singletons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @singletons */ "./src/core/singletons/index.ts");
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













/**
 * Page that displays the main menu of the app.
 */
let CoreMainMenuMorePage = class CoreMainMenuMorePage {
    constructor() {
        var _a;
        this.handlersLoaded = false;
        this.logoutLabel = 'core.mainmenu.changesite';
        this.loggedOut = false;
        this.langObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_7__["CoreEvents"].on(_singletons_events__WEBPACK_IMPORTED_MODULE_7__["CoreEvents"].LANGUAGE_CHANGED, this.loadSiteInfo.bind(this));
        this.updateSiteObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_7__["CoreEvents"].on(_singletons_events__WEBPACK_IMPORTED_MODULE_7__["CoreEvents"].SITE_UPDATED, this.loadSiteInfo.bind(this), _services_sites__WEBPACK_IMPORTED_MODULE_2__["CoreSites"].getCurrentSiteId());
        this.loadSiteInfo();
        this.showScanQR = _services_utils_utils__WEBPACK_IMPORTED_MODULE_3__["CoreUtils"].canScanQR() &&
            !((_a = _services_sites__WEBPACK_IMPORTED_MODULE_2__["CoreSites"].getCurrentSite()) === null || _a === void 0 ? void 0 : _a.isFeatureDisabled('CoreMainMenuDelegate_QrReader'));
    }
    /**
     * Initialize component.
     */
    ngOnInit() {
        // Load the handlers.
        this.subscription = _services_mainmenu_delegate__WEBPACK_IMPORTED_MODULE_5__["CoreMainMenuDelegate"].getHandlersObservable().subscribe((handlers) => {
            this.allHandlers = handlers;
            this.initHandlers();
        });
        window.addEventListener('resize', this.initHandlers.bind(this));
    }
    /**
     * Page destroyed.
     */
    ngOnDestroy() {
        var _a, _b, _c;
        window.removeEventListener('resize', this.initHandlers.bind(this));
        (_a = this.langObserver) === null || _a === void 0 ? void 0 : _a.off();
        (_b = this.updateSiteObserver) === null || _b === void 0 ? void 0 : _b.off();
        (_c = this.subscription) === null || _c === void 0 ? void 0 : _c.unsubscribe();
    }
    /**
     * Init handlers on change (size or handlers).
     */
    initHandlers() {
        if (!this.allHandlers) {
            return;
        }
        // Calculate the main handlers not to display them in this view.
        const mainHandlers = this.allHandlers
            .filter((handler) => !handler.onlyInMore)
            .slice(0, _services_mainmenu__WEBPACK_IMPORTED_MODULE_6__["CoreMainMenu"].getNumItems());
        // Get only the handlers that don't appear in the main view.
        this.handlers = this.allHandlers.filter((handler) => mainHandlers.indexOf(handler) == -1);
        this.handlersLoaded = _services_mainmenu_delegate__WEBPACK_IMPORTED_MODULE_5__["CoreMainMenuDelegate"].areHandlersLoaded();
    }
    /**
     * Load the site info required by the view.
     */
    loadSiteInfo() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const currentSite = _services_sites__WEBPACK_IMPORTED_MODULE_2__["CoreSites"].getCurrentSite();
            if (!currentSite) {
                return;
            }
            this.siteInfo = currentSite.getInfo();
            this.siteName = currentSite.getSiteName();
            this.siteUrl = currentSite.getURL();
            this.logoutLabel = _features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_4__["CoreLoginHelper"].getLogoutLabel(currentSite);
            this.showWeb = !currentSite.isFeatureDisabled('CoreMainMenuDelegate_website');
            this.showHelp = !currentSite.isFeatureDisabled('CoreMainMenuDelegate_help');
            this.docsUrl = yield currentSite.getDocsUrl();
            this.customItems = yield _services_mainmenu__WEBPACK_IMPORTED_MODULE_6__["CoreMainMenu"].getCustomMenuItems();
        });
    }
    /**
     * Open a handler.
     *
     * @param handler Handler to open.
     */
    openHandler(handler) {
        const params = handler.pageParams;
        _services_navigator__WEBPACK_IMPORTED_MODULE_8__["CoreNavigator"].navigateToSitePath(handler.page, { params });
    }
    /**
     * Open an embedded custom item.
     *
     * @param item Item to open.
     */
    openItem(item) {
        _services_navigator__WEBPACK_IMPORTED_MODULE_8__["CoreNavigator"].navigateToSitePath('viewer/iframe', { params: { title: item.label, url: item.url } });
    }
    /**
     * Open preferences.
     */
    openPreferences() {
        _services_navigator__WEBPACK_IMPORTED_MODULE_8__["CoreNavigator"].navigateToSitePath('preferences');
    }
    /**
     * Open Help.
     */
    openHelp() {
        _services_navigator__WEBPACK_IMPORTED_MODULE_8__["CoreNavigator"].navigateToSitePath('settings/help');
    }
    /**
     * Open Term.
     */
    openTerm() {
        _services_navigator__WEBPACK_IMPORTED_MODULE_8__["CoreNavigator"].navigateToSitePath('settings/term');
    }
    /**
     * Scan and treat a QR code.
     */
    scanQR() {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Scan for a QR code.
            const text = yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_3__["CoreUtils"].scanQR();
            if (!text) {
                return;
            }
            if (_services_urlschemes__WEBPACK_IMPORTED_MODULE_9__["CoreCustomURLSchemes"].isCustomURL(text)) {
                // Is a custom URL scheme, handle it.
                _services_urlschemes__WEBPACK_IMPORTED_MODULE_9__["CoreCustomURLSchemes"].handleCustomURL(text).catch((error) => {
                    _services_urlschemes__WEBPACK_IMPORTED_MODULE_9__["CoreCustomURLSchemes"].treatHandleCustomURLError(error);
                });
            }
            else if (/^[^:]{2,}:\/\/[^ ]+$/i.test(text)) { // Check if it's a URL.
                // Check if the app can handle the URL.
                const treated = yield _features_contentlinks_services_contentlinks_helper__WEBPACK_IMPORTED_MODULE_10__["CoreContentLinksHelper"].handleLink(text, undefined, true, true);
                if (!treated) {
                    // Can't handle it, open it in browser.
                    (_a = _services_sites__WEBPACK_IMPORTED_MODULE_2__["CoreSites"].getCurrentSite()) === null || _a === void 0 ? void 0 : _a.openInBrowserWithAutoLoginIfSameSite(text);
                }
            }
            else {
                // It's not a URL, open it in a modal so the user can see it and copy it.
                _services_utils_text__WEBPACK_IMPORTED_MODULE_11__["CoreTextUtils"].viewText(_singletons__WEBPACK_IMPORTED_MODULE_12__["Translate"].instant('core.qrscanner'), text, {
                    displayCopyButton: true,
                });
            }
        });
    }
    /**
     * Logout the user.
     */
    logout() {
        this.loggedOut = true;
        _services_sites__WEBPACK_IMPORTED_MODULE_2__["CoreSites"].logout();
    }
};
CoreMainMenuMorePage.ctorParameters = () => [];
CoreMainMenuMorePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-core-mainmenu-more',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./more.html */ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/mainmenu/pages/more/more.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./more.scss */ "./src/core/features/mainmenu/pages/more/more.scss")).default]
    })
], CoreMainMenuMorePage);



/***/ })

}]);
//# sourceMappingURL=pages-more-more-module.js.map