(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-about-about-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/mainmenu/pages/about/about.page.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/core/features/mainmenu/pages/about/about.page.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n    <ion-toolbar mode=\"ios\">\n        <!-- <ion-buttons slot=\"start\">\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\n        </ion-buttons> -->\n        <ion-title>\n            <img src=\"/assets/img/logo-header-light.svg\" role=\"presentation\">\n\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <!-- <h1>About ORIBU</h1> -->\n    <h1>About ORI</h1>\n\n\n    <div class=\"about-container\">\n        <ion-label>\n            The Orthopaedic Research Institute (ORI) of Bournemouth University works across Dorset and on a National scale to improve the outcomes of patients with osteoarthritis and related diseases. We work with hospitals, industry partners and academia to produce high quality research and educational outputs that have a proven impact for patients, clinicians and society.\n        </ion-label>\n        <ion-label>\n            A particular area of expertise for ORI is osteoarthritis – a condition which clinicians in Dorset are frequently faced with, owing to the high numbers of older people living in the region. By producing high quality research and teaching in this area, ORI has the potential to make a real impact on local and national practice.\n        </ion-label>\n        <ion-label>\n            We are driven by the needs of our patients, clinical colleagues and wider society to produce high quality academic and patient outcomes across the fields of orthopaedic surgery, related diseases, treatments, technologies and devices. Our research informs our education programmes, that are designed to disseminate evidence-based care for osteoarthritis to patients, students and clinicians.\n        </ion-label>\n        <!-- <ion-label>\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n            A beatae eveniet ex incidunt inventore itaque laudantium mollitia nihil praesentium,\n            quasi quibusdam sint veritatis voluptatibus? Blanditiis laudantium nesciunt nobis tempore velit.\n        </ion-label>\n        <ion-label>\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n            A beatae eveniet ex incidunt inventore itaque laudantium mollitia nihil praesentium,\n            quasi quibusdam sint veritatis voluptatibus? Blanditiis laudantium nesciunt nobis tempore velit.\n        </ion-label>\n        <ion-label>\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n            A beatae eveniet ex incidunt inventore itaque laudantium mollitia nihil praesentium,\n            quasi quibusdam sint veritatis voluptatibus? Blanditiis laudantium nesciunt nobis tempore velit.\n        </ion-label>\n        <img src=\"/assets/img/About.jpg\" alt=\"About\">\n        <ion-label>\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n            A beatae eveniet ex incidunt inventore itaque laudantium mollitia nihil praesentium,\n            quasi quibusdam sint veritatis voluptatibus? Blanditiis laudantium nesciunt nobis tempore velit.\n        </ion-label>\n        <ion-label>\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n            A beatae eveniet ex incidunt inventore itaque laudantium mollitia nihil praesentium,\n            quasi quibusdam sint veritatis voluptatibus? Blanditiis laudantium nesciunt nobis tempore velit.\n        </ion-label>\n        <ion-label>\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n            A beatae eveniet ex incidunt inventore itaque laudantium mollitia nihil praesentium,\n            quasi quibusdam sint veritatis voluptatibus? Blanditiis laudantium nesciunt nobis tempore velit.\n        </ion-label>\n        <ion-label>\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n            A beatae eveniet ex incidunt inventore itaque laudantium mollitia nihil praesentium,\n            quasi quibusdam sint veritatis voluptatibus? Blanditiis laudantium nesciunt nobis tempore velit.\n        </ion-label>\n        <ion-label>\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n            A beatae eveniet ex incidunt inventore itaque laudantium mollitia nihil praesentium,\n            quasi quibusdam sint veritatis voluptatibus? Blanditiis laudantium nesciunt nobis tempore velit.\n        </ion-label> -->\n    </div>\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/settings/pages/about/about.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/core/features/settings/pages/about/about.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\n        </ion-buttons>\n        <h1>\n            {{ 'core.settings.about' | translate}}\n        </h1>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-item class=\"ion-text-wrap\">\n        <ion-label><h2>{{ appName }} {{ versionName }}</h2></ion-label>\n    </ion-item>\n    <ion-item button class=\"ion-text-wrap\" (click)=\"openPage('deviceinfo')\" detail=\"true\">\n        <ion-icon name=\"fas-mobile\" slot=\"start\" aria-hidden=\"true\"></ion-icon>\n        <ion-label>{{ 'core.settings.deviceinfo' | translate }}</ion-label>\n    </ion-item>\n    <ion-item button class=\"ion-text-wrap\" (click)=\"openPage('licenses')\" detail=\"true\">\n        <ion-icon name=\"far-copyright\" slot=\"start\" aria-hidden=\"true\"></ion-icon>\n        <ion-label>{{ 'core.settings.opensourcelicenses' | translate }}</ion-label>\n    </ion-item>\n    <ion-item\n        *ngIf=\"privacyPolicy\"\n        class=\"ion-text-wrap\"\n        button core-link auto-login=\"no\" [href]=\"privacyPolicy\"\n        detail=\"true\" detailIcon=\"open-outline\"\n    >\n        <ion-icon name=\"fas-user-shield\" slot=\"start\" aria-hidden=\"true\"></ion-icon>\n        <ion-label>{{ 'core.settings.privacypolicy' | translate }}</ion-label>\n    </ion-item>\n    <ion-item\n        *ngIf=\"feedbackFormUrl\"\n        class=\"ion-text-wrap\"\n        button core-link [href]=\"feedbackFormUrl\"\n        detail=\"true\" detailIcon=\"open-outline\"\n    >\n        <ion-icon name=\"fas-bullhorn\" slot=\"start\" aria-hidden=\"true\"></ion-icon>\n        <ion-label>{{ 'core.settings.helpusimprove' | translate }}</ion-label>\n    </ion-item>\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/user/pages/about/about.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/core/features/user/pages/about/about.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\n        </ion-buttons>\n        <h1 *ngIf=\"title\">{{ title }}</h1>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n    <ion-refresher slot=\"fixed\" [disabled]=\"!userLoaded\" (ionRefresh)=\"refreshUser($event.target)\">\n        <ion-refresher-content pullingText=\"{{ 'core.pulltorefresh' | translate }}\"></ion-refresher-content>\n    </ion-refresher>\n    <core-loading [hideUntil]=\"userLoaded\">\n        <ion-list *ngIf=\"user\">\n            <ion-item-group *ngIf=\"hasContact\">\n                <ion-item-divider><ion-label><h2>{{ 'core.user.contact' | translate}}</h2></ion-label></ion-item-divider>\n                <ion-item class=\"ion-text-wrap\" *ngIf=\"user.email\">\n                    <ion-label>\n                        <h2>{{ 'core.user.email' | translate }}</h2>\n                        <p><a class=\"core-anchor\" href=\"mailto:{{user.email}}\" core-link auto-login=\"no\">\n                            {{ user.email }}\n                        </a></p>\n                    </ion-label>\n                </ion-item>\n                <ion-item class=\"ion-text-wrap\" *ngIf=\"user.phone1\">\n                    <ion-label>\n                        <h2>{{ 'core.user.phone1' | translate}}</h2>\n                        <p><a class=\"core-anchor\" href=\"tel:{{user.phone1}}\" core-link auto-login=\"no\">\n                            {{ user.phone1 }}\n                        </a></p>\n                    </ion-label>\n                </ion-item>\n                <ion-item class=\"ion-text-wrap\" *ngIf=\"user.phone2\">\n                    <ion-label>\n                        <h2>{{ 'core.user.phone2' | translate}}</h2>\n                        <p><a class=\"core-anchor\" href=\"tel:{{user.phone2}}\" core-link auto-login=\"no\">\n                            {{ user.phone2 }}\n                        </a></p>\n                    </ion-label>\n                </ion-item>\n                <ion-item class=\"ion-text-wrap\" *ngIf=\"formattedAddress\">\n                    <ion-label>\n                        <h2>{{ 'core.user.address' | translate}}</h2>\n                        <p><a class=\"core-anchor\" [href]=\"encodedAddress\" core-link auto-login=\"no\">\n                            {{ formattedAddress }}\n                        </a></p>\n                    </ion-label>\n                </ion-item>\n                <ion-item class=\"ion-text-wrap\" *ngIf=\"user.city && !formattedAddress\">\n                    <ion-label>\n                        <h2>{{ 'core.user.city' | translate}}</h2>\n                        <p>{{ user.city }}</p>\n                    </ion-label>\n                </ion-item>\n                <ion-item class=\"ion-text-wrap\" *ngIf=\"user.country && !formattedAddress\">\n                    <ion-label>\n                        <h2>{{ 'core.user.country' | translate}}</h2>\n                        <p>{{ user.country }}</p>\n                    </ion-label>\n                </ion-item>\n            </ion-item-group>\n            <ion-item-group *ngIf=\"hasDetails\">\n                <ion-item-divider><ion-label><h2>{{ 'core.userdetails' | translate}}</h2></ion-label></ion-item-divider>\n                <ion-item class=\"ion-text-wrap\" *ngIf=\"user.url\">\n                    <ion-label>\n                        <h2>{{ 'core.user.webpage' | translate}}</h2>\n                        <p><a class=\"core-anchor\" href=\"{{user.url}}\" core-link>\n                            {{ user.url }}\n                        </a></p>\n                    </ion-label>\n                </ion-item>\n                <ion-item class=\"ion-text-wrap\" *ngIf=\"user.interests\">\n                    <ion-label>\n                        <h2>{{ 'core.user.interests' | translate}}</h2>\n                        <p>{{ user.interests }}</p>\n                    </ion-label>\n                </ion-item>\n                <core-user-profile-field *ngFor=\"let field of user.customfields\" [field]=\"field\" contextLevel=\"course\"\n                    [contextInstanceId]=\"courseId\" [courseId]=\"courseId\">\n                </core-user-profile-field>\n            </ion-item-group>\n            <ion-item-group *ngIf=\"user.description\">\n                <ion-item-divider><ion-label><h2>{{ 'core.user.description' | translate}}</h2></ion-label></ion-item-divider>\n                <ion-item class=\"ion-text-wrap\">\n                    <ion-label>\n                        <p><core-format-text [text]=\"user.description\" contextLevel=\"user\" [contextInstanceId]=\"user.id\">\n                        </core-format-text></p>\n                    </ion-label>\n                </ion-item>\n            </ion-item-group>\n        </ion-list>\n\n        <core-empty-box *ngIf=\"!user || (!hasContact && !hasDetails && !user.description)\" icon=\"fas-user\"\n            [message]=\" 'core.user.detailsnotavailable' | translate\">\n        </core-empty-box>\n    </core-loading>\n</ion-content>\n");

/***/ }),

/***/ "./src/core/features/mainmenu/pages/about/about.module.ts":
/*!****************************************************************!*\
  !*** ./src/core/features/mainmenu/pages/about/about.module.ts ***!
  \****************************************************************/
/*! exports provided: AboutPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageModule", function() { return AboutPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _about_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about.page */ "./src/core/features/mainmenu/pages/about/about.page.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");







let AboutPageModule = class AboutPageModule {
};
AboutPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild([{ path: '', component: _about_page__WEBPACK_IMPORTED_MODULE_5__["AboutPage"] }])
        ],
        declarations: [_about_page__WEBPACK_IMPORTED_MODULE_5__["AboutPage"]]
    })
], AboutPageModule);



/***/ }),

/***/ "./src/core/features/mainmenu/pages/about/about.page.scss":
/*!****************************************************************!*\
  !*** ./src/core/features/mainmenu/pages/about/about.page.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h1 {\n  text-transform: unset;\n  font-weight: 600;\n  padding-left: 15px;\n}\n\n.about-container {\n  display: flex;\n  flex-direction: column;\n  background: var(--background);\n  margin: 2rem 0;\n  padding: 1rem 1rem 0;\n}\n\n.about-container ion-label {\n  font-size: 1.2rem;\n  font-weight: 400;\n  line-height: 1.4;\n  margin-bottom: 2rem;\n  color: var(--light-black-text);\n}\n\n.about-container img {\n  margin-bottom: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb3JlL2ZlYXR1cmVzL21haW5tZW51L3BhZ2VzL2Fib3V0L2Fib3V0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7QUFDRjs7QUFBRTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFFSjs7QUFBRTtFQUNFLG1CQUFBO0FBRUoiLCJmaWxlIjoic3JjL2NvcmUvZmVhdHVyZXMvbWFpbm1lbnUvcGFnZXMvYWJvdXQvYWJvdXQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDEge1xuICB0ZXh0LXRyYW5zZm9ybTogdW5zZXQ7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbn1cblxuLmFib3V0LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQpO1xuICBtYXJnaW46IDJyZW0gMDtcbiAgcGFkZGluZzogMXJlbSAxcmVtIDA7XG4gIGlvbi1sYWJlbCB7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBsaW5lLWhlaWdodDogMS40O1xuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gICAgY29sb3I6IHZhcigtLWxpZ2h0LWJsYWNrLXRleHQpO1xuICB9XG4gIGltZyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgfVxufVxuIl19 */");

/***/ }),

/***/ "./src/core/features/mainmenu/pages/about/about.page.ts":
/*!**************************************************************!*\
  !*** ./src/core/features/mainmenu/pages/about/about.page.ts ***!
  \**************************************************************/
/*! exports provided: AboutPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPage", function() { return AboutPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let AboutPage = class AboutPage {
    constructor() {
    }
    ngOnInit() {
    }
};
AboutPage.ctorParameters = () => [];
AboutPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./about.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/mainmenu/pages/about/about.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./about.page.scss */ "./src/core/features/mainmenu/pages/about/about.page.scss")).default]
    })
], AboutPage);



/***/ }),

/***/ "./src/core/features/settings/pages/about/about.module.ts":
/*!****************************************************************!*\
  !*** ./src/core/features/settings/pages/about/about.module.ts ***!
  \****************************************************************/
/*! exports provided: CoreSettingsAboutPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreSettingsAboutPageModule", function() { return CoreSettingsAboutPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about */ "./src/core/features/settings/pages/about/about.ts");
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





const routes = [
    {
        path: '',
        component: _about__WEBPACK_IMPORTED_MODULE_4__["CoreSettingsAboutPage"],
    },
];
let CoreSettingsAboutPageModule = class CoreSettingsAboutPageModule {
};
CoreSettingsAboutPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _core_shared_module__WEBPACK_IMPORTED_MODULE_3__["CoreSharedModule"],
        ],
        declarations: [
            _about__WEBPACK_IMPORTED_MODULE_4__["CoreSettingsAboutPage"],
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CoreSettingsAboutPageModule);



/***/ }),

/***/ "./src/core/features/settings/pages/about/about.ts":
/*!*********************************************************!*\
  !*** ./src/core/features/settings/pages/about/about.ts ***!
  \*********************************************************/
/*! exports provided: CoreSettingsAboutPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreSettingsAboutPage", function() { return CoreSettingsAboutPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/core/constants */ "./src/core/constants.ts");
/* harmony import */ var _services_sites__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/sites */ "./src/core/services/sites.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
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
 * App settings about menu page.
 */
let CoreSettingsAboutPage = class CoreSettingsAboutPage {
    constructor() {
        var _a;
        this.feedbackFormUrl = (_a = _core_constants__WEBPACK_IMPORTED_MODULE_2__["CoreConstants"].CONFIG.feedbackFormUrl) !== null && _a !== void 0 ? _a : 'https://feedback.moodle.org/mobileapp';
        const currentSite = _services_sites__WEBPACK_IMPORTED_MODULE_3__["CoreSites"].getCurrentSite();
        this.appName = _core_constants__WEBPACK_IMPORTED_MODULE_2__["CoreConstants"].CONFIG.appname;
        this.versionName = _core_constants__WEBPACK_IMPORTED_MODULE_2__["CoreConstants"].CONFIG.versionname;
        // Calculate the privacy policy to use.
        this.privacyPolicy = (currentSite && (currentSite.getStoredConfig('tool_mobile_apppolicy') ||
            currentSite.getStoredConfig('sitepolicy'))) || _core_constants__WEBPACK_IMPORTED_MODULE_2__["CoreConstants"].CONFIG.privacypolicy;
    }
    /**
     * Opens a page.
     *
     * @param page The component deeplink name you want to push onto the navigation stack.
     */
    openPage(page) {
        // const navCtrl = this.svComponent ? this.svComponent.getMasterNav() : this.navCtrl;
        // navCtrl.push(page);
        _services_navigator__WEBPACK_IMPORTED_MODULE_4__["CoreNavigator"].navigate(page);
    }
};
CoreSettingsAboutPage.ctorParameters = () => [];
CoreSettingsAboutPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-core-app-settings-about',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./about.html */ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/settings/pages/about/about.html")).default,
    })
], CoreSettingsAboutPage);



/***/ }),

/***/ "./src/core/features/user/pages/about/about.module.ts":
/*!************************************************************!*\
  !*** ./src/core/features/user/pages/about/about.module.ts ***!
  \************************************************************/
/*! exports provided: CoreUserAboutPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreUserAboutPageModule", function() { return CoreUserAboutPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _features_user_components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @features/user/components/components.module */ "./src/core/features/user/components/components.module.ts");
/* harmony import */ var _about_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about.page */ "./src/core/features/user/pages/about/about.page.ts");
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






const routes = [
    {
        path: '',
        component: _about_page__WEBPACK_IMPORTED_MODULE_5__["CoreUserAboutPage"],
    },
];
let CoreUserAboutPageModule = class CoreUserAboutPageModule {
};
CoreUserAboutPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _core_shared_module__WEBPACK_IMPORTED_MODULE_3__["CoreSharedModule"],
            _features_user_components_components_module__WEBPACK_IMPORTED_MODULE_4__["CoreUserComponentsModule"],
        ],
        declarations: [
            _about_page__WEBPACK_IMPORTED_MODULE_5__["CoreUserAboutPage"],
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CoreUserAboutPageModule);



/***/ }),

/***/ "./src/core/features/user/pages/about/about.page.ts":
/*!**********************************************************!*\
  !*** ./src/core/features/user/pages/about/about.page.ts ***!
  \**********************************************************/
/*! exports provided: CoreUserAboutPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreUserAboutPage", function() { return CoreUserAboutPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_sites__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/sites */ "./src/core/services/sites.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _services_utils_text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/utils/text */ "./src/core/services/utils/text.ts");
/* harmony import */ var _services_utils_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/utils/utils */ "./src/core/services/utils/utils.ts");
/* harmony import */ var _singletons_events__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @singletons/events */ "./src/core/singletons/events.ts");
/* harmony import */ var _features_user_services_user__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @features/user/services/user */ "./src/core/features/user/services/user.ts");
/* harmony import */ var _features_user_services_user_helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @features/user/services/user-helper */ "./src/core/features/user/services/user-helper.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
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
 * Page that displays info about a user.
 */
let CoreUserAboutPage = class CoreUserAboutPage {
    constructor() {
        this.userLoaded = false;
        this.hasContact = false;
        this.hasDetails = false;
        this.siteId = _services_sites__WEBPACK_IMPORTED_MODULE_2__["CoreSites"].getCurrentSiteId();
    }
    /**
     * On init.
     *
     * @return Promise resolved when done.
     */
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.userId = _services_navigator__WEBPACK_IMPORTED_MODULE_9__["CoreNavigator"].getRouteNumberParam('userId') || 0;
            this.courseId = _services_navigator__WEBPACK_IMPORTED_MODULE_9__["CoreNavigator"].getRouteNumberParam('courseId') || 0;
            this.fetchUser().finally(() => {
                this.userLoaded = true;
            });
        });
    }
    /**
     * Fetches the user data.
     *
     * @return Promise resolved when done.
     */
    fetchUser() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const user = yield _features_user_services_user__WEBPACK_IMPORTED_MODULE_7__["CoreUser"].getProfile(this.userId, this.courseId);
                if (user.address) {
                    this.formattedAddress = _features_user_services_user_helper__WEBPACK_IMPORTED_MODULE_8__["CoreUserHelper"].formatAddress(user.address, user.city, user.country);
                    this.encodedAddress = _services_utils_text__WEBPACK_IMPORTED_MODULE_4__["CoreTextUtils"].buildAddressURL(this.formattedAddress);
                }
                this.hasContact = !!(user.email || user.phone1 || user.phone2 || user.city || user.country || user.address);
                this.hasDetails = !!(user.url || user.interests || (user.customfields && user.customfields.length > 0));
                this.user = user;
                this.title = user.fullname;
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_3__["CoreDomUtils"].showErrorModalDefault(error, 'core.user.errorloaduser', true);
            }
        });
    }
    /**
     * Refresh the user data.
     *
     * @param event Event.
     * @return Promise resolved when done.
     */
    refreshUser(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_5__["CoreUtils"].ignoreErrors(_features_user_services_user__WEBPACK_IMPORTED_MODULE_7__["CoreUser"].invalidateUserCache(this.userId));
            yield this.fetchUser();
            event === null || event === void 0 ? void 0 : event.complete();
            if (this.user) {
                _singletons_events__WEBPACK_IMPORTED_MODULE_6__["CoreEvents"].trigger(_features_user_services_user__WEBPACK_IMPORTED_MODULE_7__["CoreUserProvider"].PROFILE_REFRESHED, {
                    courseId: this.courseId,
                    userId: this.userId,
                    user: this.user,
                }, this.siteId);
            }
        });
    }
};
CoreUserAboutPage.ctorParameters = () => [];
CoreUserAboutPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-core-user-about',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./about.html */ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/user/pages/about/about.html")).default,
    })
], CoreUserAboutPage);



/***/ })

}]);
//# sourceMappingURL=pages-about-about-module.js.map