(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-discussion-discussion-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/addons/messages/components/conversation-info/conversation-info.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/addons/messages/components/conversation-info/conversation-info.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <h2>{{ 'addon.messages.groupinfo' | translate }}</h2>\n        <ion-buttons slot=\"end\">\n            <ion-button fill=\"clear\" (click)=\"closeModal()\" [attr.aria-label]=\"'core.close' | translate\">\n                <ion-icon name=\"fas-times\" slot=\"icon-only\" aria-hidden=\"true\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n    <ion-refresher slot=\"fixed\" [disabled]=\"!loaded\" (ionRefresh)=\"refreshData($event.target)\">\n        <ion-refresher-content pullingText=\"{{ 'core.pulltorefresh' | translate }}\"></ion-refresher-content>\n    </ion-refresher>\n\n    <core-loading [hideUntil]=\"loaded\">\n        <ion-item class=\"ion-text-center\" *ngIf=\"conversation\">\n            <ion-label>\n                <div class=\"large-avatar\">\n                    <img class=\"avatar\" [src]=\"conversation!.imageurl\" core-external-content [alt]=\"conversation!.name\"\n                    onError=\"this.src='assets/img/group-avatar.png'\">\n                </div>\n                <h2>\n                    <core-format-text [text]=\"conversation!.name\" contextLevel=\"system\" [contextInstanceId]=\"0\"></core-format-text>\n                </h2>\n                <p>\n                    <core-format-text *ngIf=\"conversation!.subname\" [text]=\"conversation!.subname\" contextLevel=\"system\"\n                        [contextInstanceId]=\"0\">\n                    </core-format-text>\n                </p>\n                <p>{{ 'addon.messages.numparticipants' | translate:{$a: conversation!.membercount} }}</p>\n            </ion-label>\n        </ion-item>\n\n        <ion-item class=\"ion-text-wrap addon-messages-conversation-item\" *ngFor=\"let member of members\"\n            (click)=\"closeModal(member.id)\" detail=\"true\" button>\n            <core-user-avatar [user]=\"member\" [linkProfile]=\"false\" [checkOnline]=\"member.showonlinestatus\" slot=\"start\">\n            </core-user-avatar>\n            <ion-label>\n                <p class=\"item-heading\">\n                    {{ member.fullname }}\n                    <ion-icon name=\"fas-user-slash\" *ngIf=\"member.isblocked\"\n                        [attr.aria-label]=\"'addon.messages.contactblocked' | translate\">\n                    </ion-icon>\n                </p>\n            </ion-label>\n        </ion-item>\n\n        <core-infinite-loading [enabled]=\"canLoadMore\" (action)=\"loadMoreMembers($event)\" [error]=\"loadMoreError\">\n        </core-infinite-loading>\n    </core-loading>\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/addons/messages/pages/discussion/discussion.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/addons/messages/pages/discussion/discussion.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\n        </ion-buttons>\n        <h1>\n            <img *ngIf=\"loaded && !otherMember && conversationImage\" class=\"core-bar-button-image\" [src]=\"conversationImage\"\n                alt=\"\" onError=\"this.src='assets/img/group-avatar.png'\" core-external-content role=\"presentation\"\n                [siteId]=\"siteId || null\">\n            <core-user-avatar *ngIf=\"loaded && otherMember\" class=\"core-bar-button-image\" [user]=\"otherMember\"\n                [linkProfile]=\"false\" [checkOnline]=\"otherMember.showonlinestatus\">\n            </core-user-avatar>\n            <core-format-text [text]=\"title\" contextLevel=\"system\" [contextInstanceId]=\"0\"></core-format-text>\n            <ion-icon *ngIf=\"conversation && conversation.isfavourite\" name=\"fas-star\"\n                [attr.aria-label]=\"'core.favourites' | translate\">\n            </ion-icon>\n            <ion-icon *ngIf=\"conversation && conversation.ismuted\" name=\"fas-bell-slash\"\n                [attr.aria-label]=\"'addon.messages.mutedconversation' | translate\">\n            </ion-icon>\n        </h1>\n        <ion-buttons slot=\"end\"></ion-buttons>\n    </ion-toolbar>\n    <core-navbar-buttons slot=\"end\">\n        <core-context-menu [attr.aria-label]=\"'addon.messages.conversationactions' | translate\">\n            <core-context-menu-item [hidden]=\"isSelf || !showInfo || isGroup\" [priority]=\"1000\"\n                [content]=\"'addon.messages.info' | translate\" (action)=\"viewInfo()\"\n                iconAction=\"fas-info-circle\"></core-context-menu-item>\n            <core-context-menu-item [hidden]=\"isSelf || !showInfo || !isGroup\" [priority]=\"1000\"\n                [content]=\"'addon.messages.groupinfo' | translate\" (action)=\"viewInfo()\"\n                iconAction=\"fas-info-circle\"></core-context-menu-item>\n            <core-context-menu-item [hidden]=\"!groupMessagingEnabled || !conversation\" [priority]=\"800\"\n                [content]=\"(conversation && conversation.isfavourite ? 'addon.messages.removefromfavourites' :\n                'addon.messages.addtofavourites') | translate\"\n                (action)=\"changeFavourite($event)\" [closeOnClick]=\"false\" [iconAction]=\"favouriteIcon\"\n                [iconSlash]=\"favouriteIconSlash\"></core-context-menu-item>\n            <core-context-menu-item [hidden]=\"isSelf || !otherMember || otherMember.isblocked\" [priority]=\"700\"\n                [content]=\"'addon.messages.blockuser' | translate\" (action)=\"blockUser()\" [iconAction]=\"blockIcon\">\n            </core-context-menu-item>\n            <core-context-menu-item [hidden]=\"isSelf || !otherMember || !otherMember.isblocked\" [priority]=\"700\"\n                [content]=\"'addon.messages.unblockuser' | translate\" (action)=\"unblockUser()\" [iconAction]=\"blockIcon\">\n            </core-context-menu-item>\n            <core-context-menu-item [hidden]=\"isSelf || !muteEnabled || !conversation\" [priority]=\"600\"\n                [content]=\"(conversation && conversation.ismuted ? 'addon.messages.unmuteconversation' :\n                'addon.messages.muteconversation') | translate\" (action)=\"changeMute($event)\" [closeOnClick]=\"false\"\n                [iconAction]=\"muteIcon\"></core-context-menu-item>\n            <core-context-menu-item [hidden]=\"!canDelete || !messages || !messages.length\" [priority]=\"400\"\n                [content]=\"'addon.messages.showdeletemessages' | translate\" (action)=\"toggleDelete()\"\n                [iconAction]=\"(showDelete ? 'far-check-square' : 'far-square')\"></core-context-menu-item>\n            <core-context-menu-item [hidden]=\"!groupMessagingEnabled || !conversationId || isGroup || !messages || !messages.length\"\n                [priority]=\"200\" [content]=\"'addon.messages.deleteconversation' | translate\" (action)=\"deleteConversation($event)\"\n                [closeOnClick]=\"false\" [iconAction]=\"deleteIcon\"></core-context-menu-item>\n            <core-context-menu-item\n                [hidden]=\"isSelf || !otherMember || otherMember.iscontact || requestContactSent || requestContactReceived\"\n                [priority]=\"100\" [content]=\"'addon.messages.addtoyourcontacts' | translate\" (action)=\"createContactRequest()\"\n                [iconAction]=\"addRemoveIcon\"></core-context-menu-item>\n            <core-context-menu-item [hidden]=\"isSelf || !otherMember || !otherMember.iscontact\" [priority]=\"100\"\n                [content]=\"'addon.messages.removefromyourcontacts' | translate\" (action)=\"removeContact()\"\n                [iconAction]=\"addRemoveIcon\" [iconSlash]=\"true\"></core-context-menu-item>\n        </core-context-menu>\n    </core-navbar-buttons>\n</ion-header>\n<ion-content class=\"has-footer\" (ionScroll)=\"scrollFunction()\">\n    <core-loading [hideUntil]=\"loaded\" class=\"safe-area-page\">\n        <!-- Load previous messages. -->\n        <core-infinite-loading [enabled]=\"canLoadMore\" (action)=\"loadPrevious($event)\" position=\"top\" [error]=\"loadMoreError\">\n        </core-infinite-loading>\n\n        <ng-container *ngIf=\"isSelf && !canLoadMore\">\n            <p class=\"ion-text-center\">{{ 'addon.messages.selfconversation' | translate }}</p>\n            <p class=\"ion-text-center\"><i>{{ 'addon.messages.selfconversationdefaultmessage' | translate }}</i></p>\n        </ng-container>\n\n        <h2 class=\"sr-only\">{{ title }}</h2>\n\n        <ion-list class=\"addon-messages-discussion-container\" [class.addon-messages-discussion-group]=\"isGroup\"\n            [attr.aria-live]=\"'polite'\">\n            <ng-container *ngFor=\"let message of messages; index as index; last as last\">\n                <h3 class=\"ion-text-center addon-messages-date\" *ngIf=\"message.showDate\">\n                    {{ message.timecreated | coreFormatDate: \"strftimedayshort\" }}\n                </h3>\n\n                <ion-chip class=\"addon-messages-unreadfrom\" *ngIf=\"unreadMessageFrom && message.id == unreadMessageFrom\"\n                    color=\"light\">\n                    <ion-label>{{ 'addon.messages.newmessages' | translate }}</ion-label>\n                    <ion-icon name=\"fas-arrow-down\" aria-hidden=\"true\"></ion-icon>\n                </ion-chip>\n\n                <ion-item class=\"ion-text-wrap addon-message\" (longPress)=\"copyMessage(message)\"\n                    [class.addon-message-mine]=\"message.useridfrom == currentUserId\"\n                    [class.addon-message-not-mine]=\"message.useridfrom != currentUserId\"\n                    [class.addon-message-no-user]=\"!message.showUserData\"\n                    [@coreSlideInOut]=\"message.useridfrom == currentUserId ? '' : 'fromLeft'\">\n                    <ion-label>\n                        <!-- User data. -->\n                        <div *ngIf=\"message.showUserData\" class=\"item-heading addon-message-user\">\n                            <core-user-avatar slot=\"start\" [user]=\"members[message.useridfrom]\" [linkProfile]=\"false\"\n                                aria-hidden=\"true\">\n                            </core-user-avatar>\n                            <div>{{ members[message.useridfrom].fullname }}</div>\n                        </div>\n                        <div *ngIf=\"!message.showUserData\" class=\"sr-only\">\n                            {{ message.useridfrom == currentUserId\n                            ? ('addon.messages.you' | translate)\n                            : members[message.useridfrom].fullname }}\n                        </div>\n\n                        <!-- Some messages have <p> and some others don't. Add a <p> so they all have same styles. -->\n                        <p class=\"addon-message-text\">\n                            <core-format-text (afterRender)=\"last && scrollToBottom()\" [text]=\"message.text\" contextLevel=\"system\"\n                                [contextInstanceId]=\"0\"></core-format-text>\n                        </p>\n                    </ion-label>\n                    <ion-note *ngIf=\"!message.pending\" slot=\"end\">{{ message.timecreated | coreFormatDate: \"strftimetime\" }}</ion-note>\n                    <ion-note *ngIf=\"message.pending\" slot=\"end\">\n                        <ion-icon name=\"fas-clock\" [attr.aria-label]=\"'core.notsent' | translate\" role=\"status\"></ion-icon>\n                    </ion-note>\n                    <ion-button fill=\"clear\" *ngIf=\"!message.sending && showDelete\" (click)=\"deleteMessage(message, index)\"\n                        class=\"addon-messages-delete-button\" [@coreSlideInOut]=\"'fromRight'\"\n                        [attr.aria-label]=\" 'addon.messages.deletemessage' | translate\" slot=\"end\">\n                        <ion-icon name=\"fas-trash\" color=\"danger\" slot=\"icon-only\" aria-hidden=\"true\"></ion-icon>\n                    </ion-button>\n\n                    <div class=\"tail\" *ngIf=\"message.showTail\"></div>\n                </ion-item>\n            </ng-container>\n        </ion-list>\n\n        <core-empty-box *ngIf=\"!messages || messages.length <= 0\" icon=\"far-comments\"\n            [message]=\"'addon.messages.nomessagesfound' | translate\"></core-empty-box>\n    </core-loading>\n    <!-- Scroll bottom. -->\n    <ion-fab slot=\"fixed\" core-fab vertical=\"bottom\" horizontal=\"end\" *ngIf=\"loaded && newMessages > 0\">\n        <ion-fab-button size=\"small\" (click)=\"scrollToFirstUnreadMessage()\" color=\"light\"\n            [attr.aria-label]=\"'addon.messages.newmessages' | translate\">\n            <ion-icon name=\"fas-arrow-down\" aria-hidden=\"true\"></ion-icon>\n            <span class=\"sr-only\">{{ 'addon.messages.newmessages' | translate }}</span>\n            <span class=\"core-discussion-messages-badge\">{{ newMessages }}</span>\n        </ion-fab-button>\n    </ion-fab>\n</ion-content>\n<ion-footer color=\"light\" class=\"footer-adjustable\" *ngIf=\"loaded && (!conversationId || conversation)\">\n    <ion-toolbar color=\"light\">\n        <p *ngIf=\"footerType == 'unable'\" class=\"ion-text-center ion-margin-horizontal\">\n            {{ 'addon.messages.unabletomessage' | translate }}\n        </p>\n        <div *ngIf=\"footerType == 'blocked'\" class=\"ion-padding-horizontal\">\n            <p class=\"ion-text-center\">{{ 'addon.messages.youhaveblockeduser' | translate }}</p>\n            <ion-button expand=\"block\" class=\"ion-text-wrap ion-margin-bottom\" (click)=\"unblockUser()\">\n                {{ 'addon.messages.unblockuser' | translate }}\n            </ion-button>\n        </div>\n        <div *ngIf=\"footerType == 'requiresContact' && otherMember\" class=\"ion-padding-horizontal\">\n            <p class=\"ion-text-center\">\n                <strong>{{ 'addon.messages.isnotinyourcontacts' | translate: {$a: otherMember.fullname} }}</strong>\n            </p>\n            <p class=\"ion-text-center\">{{ 'addon.messages.requirecontacttomessage' | translate: {$a: otherMember.fullname} }}</p>\n            <ion-button expand=\"block\" class=\"ion-text-wrap ion-margin-bottom\" (click)=\"createContactRequest()\">\n                {{ 'addon.messages.sendcontactrequest' | translate }}\n            </ion-button>\n        </div>\n        <div *ngIf=\"footerType == 'requestReceived' && otherMember\" class=\"ion-padding-horizontal\">\n            <p class=\"ion-text-center\">{{ 'addon.messages.userwouldliketocontactyou' | translate: {$a: otherMember.fullname} }}</p>\n            <ion-button expand=\"block\" class=\"ion-text-wrap ion-margin-bottom\" (click)=\"confirmContactRequest()\">\n                {{ 'addon.messages.acceptandaddcontact' | translate }}\n            </ion-button>\n            <ion-button expand=\"block\" class=\"ion-text-wrap ion-margin-bottom\" color=\"light\" (click)=\"declineContactRequest()\">\n                {{ 'addon.messages.decline' | translate }}\n            </ion-button>\n        </div>\n        <div *ngIf=\"footerType == 'requestSent' || (footerType == 'message' && requestContactSent)\" class=\"ion-padding-horizontal\">\n            <p class=\"ion-text-center\"><strong>{{ 'addon.messages.contactrequestsent' | translate }}</strong></p>\n            <p class=\"ion-text-center\" *ngIf=\"otherMember\">\n                {{ 'addon.messages.yourcontactrequestpending' | translate: {$a: otherMember.fullname} }}\n            </p>\n        </div>\n        <core-send-message-form *ngIf=\"footerType == 'message'\" (onSubmit)=\"sendMessage($event)\" [showKeyboard]=\"showKeyboard\"\n            [placeholder]=\"'addon.messages.newmessage' | translate\"></core-send-message-form>\n    </ion-toolbar>\n</ion-footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/forum/pages/discussion/discussion.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/forum/pages/discussion/discussion.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\n        </ion-buttons>\n        <h1 *ngIf=\"startingPost\">\n            <core-format-text contextLevel=\"module\" [text]=\"startingPost.subject\" [contextInstanceId]=\"cmId\" [courseId]=\"courseId\">\n            </core-format-text>\n        </h1>\n        <ion-buttons slot=\"end\">\n            <!-- The context menu will be added in here. -->\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n<core-navbar-buttons slot=\"end\">\n    <core-context-menu>\n        <core-context-menu-item *ngIf=\"discussionLoaded && !postHasOffline && isOnline\"\n            [priority]=\"650\" [content]=\"'addon.mod_forum.refreshposts' | translate\" [iconAction]=\"refreshIcon\" [closeOnClick]=\"false\"\n            (action)=\"doRefresh(null, $event)\">\n        </core-context-menu-item>\n        <core-context-menu-item *ngIf=\"discussionLoaded && isMobile && postHasOffline && isOnline\"\n            [priority]=\"550\" [content]=\"'core.settings.synchronizenow' | translate\" [iconAction]=\"syncIcon\" [closeOnClick]=\"false\"\n            (action)=\"doRefresh(null, $event, true)\">\n        </core-context-menu-item>\n        <core-context-menu-item [hidden]=\"sort == 'flat-oldest'\"\n            [priority]=\"500\" [content]=\"'addon.mod_forum.modeflatoldestfirst' | translate\" iconAction=\"fas-arrow-down\"\n            (action)=\"changeSort('flat-oldest')\">\n        </core-context-menu-item>\n        <core-context-menu-item [hidden]=\"sort == 'flat-newest'\"\n            [priority]=\"450\" [content]=\"'addon.mod_forum.modeflatnewestfirst' | translate\" iconAction=\"fas-arrow-up\"\n            (action)=\"changeSort('flat-newest')\">\n        </core-context-menu-item>\n        <core-context-menu-item [hidden]=\"sort == 'nested'\"\n            [priority]=\"400\" [content]=\"'addon.mod_forum.modenested' | translate\" iconAction=\"fas-exchange-alt\"\n            (action)=\"changeSort('nested')\">\n        </core-context-menu-item>\n        <core-context-menu-item [hidden]=\"!discussion || !discussion.canlock || discussion.locked\"\n            [priority]=\"300\" [content]=\"'addon.mod_forum.lockdiscussion' | translate\" iconAction=\"fas-lock\"\n            (action)=\"setLockState(true)\">\n        </core-context-menu-item>\n        <core-context-menu-item [hidden]=\"!discussion || !discussion.canlock || !discussion.locked\"\n            [priority]=\"300\" [content]=\"'addon.mod_forum.unlockdiscussion' | translate\" iconAction=\"fas-unlock\"\n            (action)=\"setLockState(false)\">\n        </core-context-menu-item>\n        <core-context-menu-item [hidden]=\"!discussion || !canPin || discussion.pinned\"\n            [priority]=\"250\" [content]=\"'addon.mod_forum.pindiscussion' | translate\" iconAction=\"fas-map-pin\"\n            (action)=\"setPinState(true)\">\n        </core-context-menu-item>\n        <core-context-menu-item [hidden]=\"!discussion || !canPin || !discussion.pinned\"\n            [priority]=\"250\" [content]=\"'addon.mod_forum.unpindiscussion' | translate\" [iconSlash]=\"true\" iconAction=\"fas-map-pin\"\n            (action)=\"setPinState(false)\">\n        </core-context-menu-item>\n        <core-context-menu-item [hidden]=\"!discussion || !discussion.canfavourite || discussion.starred\"\n            [priority]=\"200\" [content]=\"'addon.mod_forum.addtofavourites' | translate\" iconAction=\"fas-star\"\n            (action)=\"toggleFavouriteState(true)\">\n        </core-context-menu-item>\n        <core-context-menu-item [hidden]=\"!discussion || !discussion.canfavourite || !discussion.starred\"\n            [priority]=\"200\" [content]=\"'addon.mod_forum.removefromfavourites' | translate\" iconAction=\"fas-star\" [iconSlash]=\"true\"\n            (action)=\"toggleFavouriteState(false)\">\n        </core-context-menu-item>\n    </core-context-menu>\n</core-navbar-buttons>\n<ion-content>\n    <ion-refresher slot=\"fixed\" [disabled]=\"!discussionLoaded\" (ionRefresh)=\"doRefresh($event.target)\">\n        <ion-refresher-content pullingText=\"{{ 'core.pulltorefresh' | translate }}\"></ion-refresher-content>\n    </ion-refresher>\n\n    <core-loading [hideUntil]=\"discussionLoaded\">\n        <!-- Discussion replies found to be synchronized -->\n        <ion-card class=\"core-warning-card\" *ngIf=\"postHasOffline || hasOfflineRatings\">\n            <ion-item>\n                <ion-icon name=\"fas-exclamation-triangle\" slot=\"start\" aria-hidden=\"true\"></ion-icon>\n                <ion-label>{{ 'core.hasdatatosync' | translate:{$a: discussionStr} }}</ion-label>\n            </ion-item>\n        </ion-card>\n\n        <!-- Cut-off date or due date message -->\n        <ion-card class=\"core-info-card\" *ngIf=\"availabilityMessage\">\n            <ion-item>\n                <ion-icon name=\"fas-info-circle\" slot=\"start\" aria-hidden=\"true\"></ion-icon>\n                <ion-label>{{ availabilityMessage }}</ion-label>\n            </ion-item>\n        </ion-card>\n\n        <ion-card class=\"core-info-card\" *ngIf=\"discussion && discussion.locked\">\n            <ion-item>\n                <ion-icon name=\"fas-lock\" slot=\"start\" aria-hidden=\"true\"></ion-icon>\n                <ion-label>{{ 'addon.mod_forum.discussionlocked' | translate }}</ion-label>\n            </ion-item>\n        </ion-card>\n\n        <div *ngIf=\"startingPost\" class=\"ion-margin-bottom\">\n            <addon-mod-forum-post\n                [post]=\"startingPost\" [discussion]=\"discussion\" [courseId]=\"courseId\" [highlight]=\"true\"\n                [discussionId]=\"discussionId\" [component]=\"component\" [componentId]=\"cmId\"\n                [replyData]=\"replyData\" [originalData]=\"originalData\" [forum]=\"forum\" [accessInfo]=\"accessInfo\"\n                [trackPosts]=\"trackPosts\" [ratingInfo]=\"ratingInfo\" [leavingPage]=\"leavingPage\"\n                (onPostChange)=\"postListChanged()\">\n            </addon-mod-forum-post>\n        </div>\n\n        <ion-card *ngIf=\"sort != 'nested'\">\n            <ng-container *ngFor=\"let post of posts; first as first\">\n                <core-spacer *ngIf=\"!first\"></core-spacer>\n                <addon-mod-forum-post\n                    [post]=\"post\" [courseId]=\"courseId\" [discussionId]=\"discussionId\"\n                    [component]=\"component\" [componentId]=\"cmId\" [replyData]=\"replyData\"\n                    [originalData]=\"originalData\" [parentSubject]=\"postSubjects[post.parentid]\"\n                    [forum]=\"forum\" [accessInfo]=\"accessInfo\" [trackPosts]=\"trackPosts\" [ratingInfo]=\"ratingInfo\"\n                    [leavingPage]=\"leavingPage\"\n                    (onPostChange)=\"postListChanged()\">\n                </addon-mod-forum-post>\n            </ng-container>\n        </ion-card>\n\n        <ng-container *ngIf=\"sort == 'nested'\">\n            <ng-container *ngFor=\"let post of posts\">\n                <ng-container *ngTemplateOutlet=\"nestedPosts; context: {post: post}\"></ng-container>\n            </ng-container>\n        </ng-container>\n\n        <ng-template #nestedPosts let-post=\"post\">\n            <ion-card>\n                <addon-mod-forum-post\n                    [post]=\"post\" [courseId]=\"courseId\" [discussionId]=\"discussionId\" [component]=\"component\"\n                    [componentId]=\"cmId\" [replyData]=\"replyData\" [originalData]=\"originalData\"\n                    [parentSubject]=\"postSubjects[post.parentid]\" [forum]=\"forum\" [accessInfo]=\"accessInfo\"\n                    [trackPosts]=\"trackPosts\" [ratingInfo]=\"ratingInfo\" [leavingPage]=\"leavingPage\"\n                    (onPostChange)=\"postListChanged()\">\n                </addon-mod-forum-post>\n            </ion-card>\n            <div class=\"ion-padding-start\" *ngIf=\"post.children && post.children.length && post.children[0].subject\">\n                <ng-container *ngFor=\"let child of post.children\">\n                    <ng-container *ngTemplateOutlet=\"nestedPosts; context: {post: child}\"></ng-container>\n                </ng-container>\n            </div>\n        </ng-template>\n    </core-loading>\n</ion-content>\n");

/***/ }),

/***/ "./src/addons/messages/components/components.module.ts":
/*!*************************************************************!*\
  !*** ./src/addons/messages/components/components.module.ts ***!
  \*************************************************************/
/*! exports provided: AddonMessagesComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonMessagesComponentsModule", function() { return AddonMessagesComponentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _conversation_info_conversation_info__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./conversation-info/conversation-info */ "./src/addons/messages/components/conversation-info/conversation-info.ts");
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




let AddonMessagesComponentsModule = class AddonMessagesComponentsModule {
};
AddonMessagesComponentsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _conversation_info_conversation_info__WEBPACK_IMPORTED_MODULE_3__["AddonMessagesConversationInfoComponent"],
        ],
        imports: [
            _core_shared_module__WEBPACK_IMPORTED_MODULE_2__["CoreSharedModule"],
        ],
    })
], AddonMessagesComponentsModule);



/***/ }),

/***/ "./src/addons/messages/components/conversation-info/conversation-info.ts":
/*!*******************************************************************************!*\
  !*** ./src/addons/messages/components/conversation-info/conversation-info.ts ***!
  \*******************************************************************************/
/*! exports provided: AddonMessagesConversationInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonMessagesConversationInfoComponent", function() { return AddonMessagesConversationInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/messages */ "./src/addons/messages/services/messages.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _singletons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @singletons */ "./src/core/singletons/index.ts");
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
 * Component that displays the list of conversations, including group conversations.
 */
let AddonMessagesConversationInfoComponent = class AddonMessagesConversationInfoComponent {
    constructor(route) {
        this.route = route;
        this.conversationId = 0;
        this.loaded = false;
        this.members = [];
        this.canLoadMore = false;
        this.loadMoreError = false;
    }
    /**
     * Component loaded.
     */
    ngOnInit() {
        this.fetchData().finally(() => {
            this.loaded = true;
        });
    }
    /**
     * Fetch the required data.
     *
     * @return Promise resolved when done.
     */
    fetchData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Get the conversation data first.
            try {
                const conversation = yield _services_messages__WEBPACK_IMPORTED_MODULE_2__["AddonMessages"].getConversation(this.conversationId, false, true, 0, 0);
                this.conversation = conversation;
                // Now get the members.
                yield this.fetchMembers();
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_3__["CoreDomUtils"].showErrorModalDefault(error, 'Error getting members.');
            }
        });
    }
    /**
     * Get conversation members.
     *
     * @param loadingMore Whether we are loading more data or just the first ones.
     * @return Promise resolved when done.
     */
    fetchMembers(loadingMore) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loadMoreError = false;
            const limitFrom = loadingMore ? this.members.length : 0;
            const data = yield _services_messages__WEBPACK_IMPORTED_MODULE_2__["AddonMessages"].getConversationMembers(this.conversationId, limitFrom);
            if (loadingMore) {
                this.members = this.members.concat(data.members);
            }
            else {
                this.members = data.members;
            }
            this.canLoadMore = data.canLoadMore;
        });
    }
    /**
     * Function to load more members.
     *
     * @param infiniteComplete Infinite scroll complete function. Only used from core-infinite-loading.
     * @return Resolved when done.
     */
    loadMoreMembers(infiniteComplete) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield this.fetchMembers(true);
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_3__["CoreDomUtils"].showErrorModalDefault(error, 'Error getting members.');
                this.loadMoreError = true;
            }
            finally {
                infiniteComplete && infiniteComplete();
            }
        });
    }
    /**
     * Refresh the data.
     *
     * @param refresher Refresher.
     * @return Promise resolved when done.
     */
    refreshData(refresher) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const promises = [];
            promises.push(_services_messages__WEBPACK_IMPORTED_MODULE_2__["AddonMessages"].invalidateConversation(this.conversationId));
            promises.push(_services_messages__WEBPACK_IMPORTED_MODULE_2__["AddonMessages"].invalidateConversationMembers(this.conversationId));
            yield Promise.all(promises);
            yield this.fetchData().finally(() => {
                refresher === null || refresher === void 0 ? void 0 : refresher.complete();
            });
        });
    }
    /**
     * Close modal.
     *
     * @param userId User conversation to load.
     */
    closeModal(userId) {
        _singletons__WEBPACK_IMPORTED_MODULE_5__["ModalController"].dismiss(userId);
    }
};
AddonMessagesConversationInfoComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
AddonMessagesConversationInfoComponent.propDecorators = {
    conversationId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
AddonMessagesConversationInfoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-addon-messages-conversation-info',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./conversation-info.html */ "./node_modules/raw-loader/dist/cjs.js!./src/addons/messages/components/conversation-info/conversation-info.html")).default,
    })
], AddonMessagesConversationInfoComponent);



/***/ }),

/***/ "./src/addons/messages/pages/discussion/discussion.module.ts":
/*!*******************************************************************!*\
  !*** ./src/addons/messages/pages/discussion/discussion.module.ts ***!
  \*******************************************************************/
/*! exports provided: AddonMessagesDiscussionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonMessagesDiscussionPageModule", function() { return AddonMessagesDiscussionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _discussion_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./discussion.page */ "./src/addons/messages/pages/discussion/discussion.page.ts");
/* harmony import */ var _addons_messages_components_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @addons/messages/components/components.module */ "./src/addons/messages/components/components.module.ts");
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
        component: _discussion_page__WEBPACK_IMPORTED_MODULE_4__["AddonMessagesDiscussionPage"],
    },
];
let AddonMessagesDiscussionPageModule = class AddonMessagesDiscussionPageModule {
};
AddonMessagesDiscussionPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _core_shared_module__WEBPACK_IMPORTED_MODULE_3__["CoreSharedModule"],
            _addons_messages_components_components_module__WEBPACK_IMPORTED_MODULE_5__["AddonMessagesComponentsModule"],
        ],
        declarations: [
            _discussion_page__WEBPACK_IMPORTED_MODULE_4__["AddonMessagesDiscussionPage"],
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddonMessagesDiscussionPageModule);



/***/ }),

/***/ "./src/addons/messages/pages/discussion/discussion.page.ts":
/*!*****************************************************************!*\
  !*** ./src/addons/messages/pages/discussion/discussion.page.ts ***!
  \*****************************************************************/
/*! exports provided: AddonMessagesDiscussionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonMessagesDiscussionPage", function() { return AddonMessagesDiscussionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _singletons_events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @singletons/events */ "./src/core/singletons/events.ts");
/* harmony import */ var _services_sites__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/sites */ "./src/core/services/sites.ts");
/* harmony import */ var _services_messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/messages */ "./src/addons/messages/services/messages.ts");
/* harmony import */ var _services_messages_offline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/messages-offline */ "./src/addons/messages/services/messages-offline.ts");
/* harmony import */ var _services_messages_sync__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/messages-sync */ "./src/addons/messages/services/messages-sync.ts");
/* harmony import */ var _features_user_services_user__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @features/user/services/user */ "./src/core/features/user/services/user.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _services_utils_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @services/utils/utils */ "./src/core/services/utils/utils.ts");
/* harmony import */ var _services_utils_text__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @services/utils/text */ "./src/core/services/utils/text.ts");
/* harmony import */ var _singletons_logger__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @singletons/logger */ "./src/core/singletons/logger.ts");
/* harmony import */ var _services_app__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @services/app */ "./src/core/services/app.ts");
/* harmony import */ var _components_infinite_loading_infinite_loading__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @components/infinite-loading/infinite-loading */ "./src/core/components/infinite-loading/infinite-loading.ts");
/* harmony import */ var ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ts-md5/dist/md5 */ "./node_modules/ts-md5/dist/md5.js");
/* harmony import */ var ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _components_animations__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @components/animations */ "./src/core/components/animations.ts");
/* harmony import */ var _classes_errors_error__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @classes/errors/error */ "./src/core/classes/errors/error.ts");
/* harmony import */ var _singletons__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @singletons */ "./src/core/singletons/index.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_conversation_info_conversation_info__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../components/conversation-info/conversation-info */ "./src/addons/messages/components/conversation-info/conversation-info.ts");
/* harmony import */ var _core_constants__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @/core/constants */ "./src/core/constants.ts");
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
 * Page that displays a message discussion page.
 */
let AddonMessagesDiscussionPage = class AddonMessagesDiscussionPage {
    constructor(route, elementRef) {
        this.route = route;
        this.elementRef = elementRef;
        this.fetching = false;
        this.messagesBeingSent = 0;
        this.pagesLoaded = 1;
        this.lastMessage = { text: '', timecreated: 0 };
        this.keepMessageMap = {};
        this.oldContentHeight = 0;
        this.scrollBottom = true;
        this.viewDestroyed = false;
        this.showLoadingModal = false; // Whether to show a loading modal while fetching data.
        this.showInfo = false;
        this.loaded = false;
        this.showKeyboard = false;
        this.canLoadMore = false;
        this.loadMoreError = false;
        this.messages = [];
        this.showDelete = false;
        this.canDelete = false;
        this.isGroup = false;
        this.members = {}; // Members that wrote a message, indexed by ID.
        this.favouriteIcon = 'fa-star';
        this.deleteIcon = 'fas-trash';
        this.blockIcon = 'fas-user-lock';
        this.addRemoveIcon = 'fas-user-plus';
        this.muteIcon = 'fas-bell-slash';
        this.favouriteIconSlash = false;
        this.muteEnabled = false;
        this.footerType = 'unable';
        this.requestContactSent = false;
        this.requestContactReceived = false;
        this.isSelf = false;
        this.newMessages = 0;
        this.unreadMessageFrom = 0;
        this.initialized = false;
        this.hostElement = elementRef.nativeElement;
        this.siteId = _services_sites__WEBPACK_IMPORTED_MODULE_4__["CoreSites"].getCurrentSiteId();
        this.currentUserId = _services_sites__WEBPACK_IMPORTED_MODULE_4__["CoreSites"].getCurrentSiteUserId();
        this.groupMessagingEnabled = _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].isGroupMessagingEnabled();
        this.muteEnabled = _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].isMuteConversationEnabled();
        this.logger = _singletons_logger__WEBPACK_IMPORTED_MODULE_12__["CoreLogger"].getInstance('AddonMessagesDiscussionPage');
        // Refresh data if this discussion is synchronized automatically.
        this.syncObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_3__["CoreEvents"].on(_services_messages_sync__WEBPACK_IMPORTED_MODULE_7__["AddonMessagesSyncProvider"].AUTO_SYNCED, (data) => {
            if ((data.userId && data.userId == this.userId) ||
                (data.conversationId && data.conversationId == this.conversationId)) {
                // Fetch messages.
                this.fetchMessages();
                // Show first warning if any.
                if (data.warnings && data.warnings[0]) {
                    _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showErrorModal(data.warnings[0]);
                }
            }
        }, this.siteId);
        // Refresh data if info of a mamber of the conversation have changed.
        this.memberInfoObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_3__["CoreEvents"].on(_services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessagesProvider"].MEMBER_INFO_CHANGED_EVENT, (data) => {
            if (data.userId && (this.members[data.userId] || this.otherMember && data.userId == this.otherMember.id)) {
                this.fetchData();
            }
        }, this.siteId);
        // Recalculate footer position when keyboard is shown or hidden.
        this.keyboardObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_3__["CoreEvents"].on(_singletons_events__WEBPACK_IMPORTED_MODULE_3__["CoreEvents"].KEYBOARD_CHANGE, () => {
            // @todo probably not needed.
            // this.content.resize();
        });
    }
    /**
     * Runs when the page has loaded. This event only happens once per page being created.
     * If a page leaves but is cached, then this event will not fire again on a subsequent viewing.
     * Setup code for the page.
     */
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.route.queryParams.subscribe((params) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const oldConversationId = this.conversationId;
                const oldUserId = this.userId;
                let forceScrollToBottom = false;
                this.conversationId = _services_navigator__WEBPACK_IMPORTED_MODULE_20__["CoreNavigator"].getRouteNumberParam('conversationId', { params }) || undefined;
                this.userId = _services_navigator__WEBPACK_IMPORTED_MODULE_20__["CoreNavigator"].getRouteNumberParam('userId', { params }) || undefined;
                this.showInfo = !params.hideInfo;
                if (oldConversationId != this.conversationId || oldUserId != this.userId) {
                    // Showing reload again can break animations.
                    this.loaded = false;
                    this.initialized = false;
                    forceScrollToBottom = true;
                }
                this.showKeyboard = _services_navigator__WEBPACK_IMPORTED_MODULE_20__["CoreNavigator"].getRouteBooleanParam('showKeyboard', { params }) || false;
                yield this.fetchData();
                this.scrollToBottom(forceScrollToBottom);
            }));
        });
    }
    /**
     * View has been initialized.
     */
    ngAfterViewInit() {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.scrollElement = yield ((_a = this.content) === null || _a === void 0 ? void 0 : _a.getScrollElement());
        });
    }
    /**
     * Adds a new message to the message list.
     *
     * @param message Message to be added.
     * @param keep If set the keep flag or not.
     * @return If message is not mine and was recently added.
     */
    addMessage(message, keep = true) {
        /* Create a hash to identify the message. The text of online messages isn't reliable because it can have random data
           like VideoJS ID. Try to use id and fallback to text for offline messages. */
        const id = 'id' in message ? message.id : '';
        message.hash = ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_15__["Md5"].hashAsciiStr(String(id || message.text || '')) + '#' + message.timecreated + '#' +
            message.useridfrom;
        let added = false;
        if (typeof this.keepMessageMap[message.hash] === 'undefined') {
            // Message not added to the list. Add it now.
            this.messages.push(message);
            added = message.useridfrom != this.currentUserId;
        }
        // Message needs to be kept in the list.
        this.keepMessageMap[message.hash] = keep;
        return added;
    }
    /**
     * Remove a message if it shouldn't be in the list anymore.
     *
     * @param hash Hash of the message to be removed.
     */
    removeMessage(hash) {
        if (this.keepMessageMap[hash]) {
            // Selected to keep it, clear the flag.
            this.keepMessageMap[hash] = false;
            return;
        }
        delete this.keepMessageMap[hash];
        const position = this.messages.findIndex((message) => message.hash == hash);
        if (position >= 0) {
            this.messages.splice(position, 1);
        }
    }
    /**
     * Convenience function to fetch the conversation data.
     *
     * @return Resolved when done.
     */
    fetchData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let loader;
            if (this.showLoadingModal) {
                loader = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showModalLoading();
            }
            if (!this.groupMessagingEnabled && this.userId) {
                // Get the user profile to retrieve the user fullname and image.
                _features_user_services_user__WEBPACK_IMPORTED_MODULE_8__["CoreUser"].getProfile(this.userId, undefined, true).then((user) => {
                    if (!this.title) {
                        this.title = user.fullname;
                    }
                    this.conversationImage = user.profileimageurl;
                    this.members[user.id] = user;
                    return;
                }).catch(() => {
                    // Ignore errors.
                });
            }
            // Synchronize messages if needed.
            try {
                const syncResult = yield _services_messages_sync__WEBPACK_IMPORTED_MODULE_7__["AddonMessagesSync"].syncDiscussion(this.conversationId, this.userId);
                if (syncResult.warnings && syncResult.warnings[0]) {
                    _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showErrorModal(syncResult.warnings[0]);
                }
            }
            catch (_a) {
                // Ignore errors;
            }
            try {
                const promises = [];
                if (this.groupMessagingEnabled) {
                    // Get the conversation ID if it exists and we don't have it yet.
                    const exists = yield this.getConversation(this.conversationId, this.userId);
                    if (exists) {
                        // Fetch the messages for the first time.
                        promises.push(this.fetchMessages());
                    }
                    if (this.userId) {
                        // Get the member info. Invalidate first to make sure we get the latest status.
                        promises.push(_services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].invalidateMemberInfo(this.userId).then(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            this.otherMember = yield _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].getMemberInfo(this.userId);
                            if (!exists && this.otherMember) {
                                this.conversationImage = this.otherMember.profileimageurl;
                                this.title = this.otherMember.fullname;
                            }
                            this.blockIcon = this.otherMember.isblocked ? 'fas-user-check' : 'fas-user-lock';
                            return;
                        })));
                    }
                    else {
                        this.otherMember = undefined;
                    }
                }
                else {
                    if (this.userId) {
                        // Fake the user member info.
                        promises.push(_features_user_services_user__WEBPACK_IMPORTED_MODULE_8__["CoreUser"].getProfile(this.userId).then((user) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            this.otherMember = {
                                id: user.id,
                                fullname: user.fullname,
                                profileurl: '',
                                profileimageurl: user.profileimageurl || '',
                                profileimageurlsmall: user.profileimageurlsmall || '',
                                isonline: false,
                                showonlinestatus: false,
                                isblocked: false,
                                iscontact: false,
                                isdeleted: false,
                                canmessageevenifblocked: true,
                                canmessage: true,
                                requirescontact: false,
                            };
                            this.otherMember.isblocked = yield _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].isBlocked(this.userId);
                            this.otherMember.iscontact = yield _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].isContact(this.userId);
                            this.blockIcon = this.otherMember.isblocked ? 'fas-user-check' : 'fas-user-lock';
                            return;
                        })));
                    }
                    // Fetch the messages for the first time.
                    promises.push(this.fetchMessages().then(() => {
                        if (!this.title && this.messages.length) {
                            // Didn't receive the fullname via argument. Try to get it from messages.
                            // It's possible that name cannot be resolved when no messages were yet exchanged.
                            const firstMessage = this.messages[0];
                            if ('usertofullname' in firstMessage) {
                                if (firstMessage.useridto != this.currentUserId) {
                                    this.title = firstMessage.usertofullname || '';
                                }
                                else {
                                    this.title = firstMessage.userfromfullname || '';
                                }
                            }
                        }
                        return;
                    }));
                }
                yield Promise.all(promises);
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showErrorModalDefault(error, 'addon.messages.errorwhileretrievingmessages', true);
            }
            finally {
                this.checkCanDelete();
                this.loaded = true;
                this.setPolling(); // Make sure we're polling messages.
                this.setContactRequestInfo();
                this.setFooterType();
                loader && loader.dismiss();
            }
        });
    }
    /**
     * Runs when the page has fully entered and is now the active page.
     * This event will fire, whether it was the first load or a cached page.
     */
    ionViewDidEnter() {
        this.setPolling();
    }
    /**
     * Runs when the page is about to leave and no longer be the active page.
     */
    ionViewWillLeave() {
        this.unsetPolling();
    }
    /**
     * Convenience function to fetch messages.
     *
     * @param messagesAreNew If messages loaded are new messages.
     * @return Resolved when done.
     */
    fetchMessages(messagesAreNew = true) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loadMoreError = false;
            if (this.messagesBeingSent > 0) {
                // We do not poll while a message is being sent or we could confuse the user.
                // Otherwise, his message would disappear from the list, and he'd have to wait for the interval to check for messages.
                return;
            }
            else if (this.fetching) {
                // Already fetching.
                return;
            }
            else if (this.groupMessagingEnabled && !this.conversationId) {
                // Don't have enough data to fetch messages.
                throw new _classes_errors_error__WEBPACK_IMPORTED_MODULE_18__["CoreError"]('No enough data provided to fetch messages');
            }
            if (this.conversationId) {
                this.logger.debug(`Polling new messages for conversation '${this.conversationId}'`);
            }
            else if (this.userId) {
                this.logger.debug(`Polling new messages for discussion with user '${this.userId}'`);
            }
            else {
                // Should not happen.
                throw new _classes_errors_error__WEBPACK_IMPORTED_MODULE_18__["CoreError"]('No enough data provided to fetch messages');
            }
            this.fetching = true;
            try {
                // Wait for synchronization process to finish.
                yield _services_messages_sync__WEBPACK_IMPORTED_MODULE_7__["AddonMessagesSync"].waitForSyncConversation(this.conversationId, this.userId);
                let messages = [];
                // Fetch messages. Invalidate the cache before fetching.
                if (this.groupMessagingEnabled) {
                    yield _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].invalidateConversationMessages(this.conversationId);
                    messages = yield this.getConversationMessages(this.pagesLoaded);
                }
                else {
                    yield _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].invalidateDiscussionCache(this.userId);
                    messages = yield this.getDiscussionMessages(this.pagesLoaded);
                }
                this.loadMessages(messages, messagesAreNew);
            }
            finally {
                this.fetching = false;
            }
        });
    }
    /**
     * Format and load a list of messages into the view.
     *
     * @param messagesAreNew If messages loaded are new messages.
     * @param messages Messages to load.
     */
    loadMessages(messages, messagesAreNew = true) {
        var _a, _b;
        if (this.viewDestroyed) {
            return;
        }
        // Don't use domUtils.getScrollHeight because it gives an outdated value after receiving a new message.
        const scrollHeight = this.scrollElement ? this.scrollElement.scrollHeight : 0;
        // Check if we are at the bottom to scroll it after render.
        // Use a 5px error margin because in iOS there is 1px difference for some reason.
        this.scrollBottom = Math.abs(scrollHeight - (((_a = this.scrollElement) === null || _a === void 0 ? void 0 : _a.scrollTop) || 0) -
            (((_b = this.scrollElement) === null || _b === void 0 ? void 0 : _b.clientHeight) || 0)) < 5;
        if (this.messagesBeingSent > 0) {
            // Ignore polling due to a race condition.
            return;
        }
        // Add new messages to the list and mark the messages that should still be displayed.
        const newMessages = messages.reduce((val, message) => val + (this.addMessage(message) ? 1 : 0), 0);
        // Set the new badges message if we're loading new messages.
        if (messagesAreNew) {
            this.setNewMessagesBadge(this.newMessages + newMessages);
        }
        // Remove messages that shouldn't be in the list anymore.
        for (const hash in this.keepMessageMap) {
            this.removeMessage(hash);
        }
        // Sort the messages.
        _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].sortMessages(this.messages);
        // Calculate which messages need to display the date or user data.
        this.messages.forEach((message, index) => {
            message.showDate = this.showDate(message, this.messages[index - 1]);
            message.showUserData = this.showUserData(message, this.messages[index - 1]);
            message.showTail = this.showTail(message, this.messages[index + 1]);
        });
        // If we received a new message while using group messaging, force mark messages as read.
        const last = this.messages[this.messages.length - 1];
        const forceMark = this.groupMessagingEnabled && last && last.useridfrom != this.currentUserId && this.lastMessage.text != ''
            && (last.text !== this.lastMessage.text || last.timecreated !== this.lastMessage.timecreated);
        // Notify that there can be a new message.
        this.notifyNewMessage();
        // Mark retrieved messages as read if they are not.
        this.markMessagesAsRead(forceMark);
    }
    /**
     * Set the new message badge number and set scroll listener if needed.
     *
     * @param addMessages NUmber of messages still to be read.
     */
    setNewMessagesBadge(addMessages) {
        if (this.newMessages == 0 && addMessages > 0) {
            // Setup scrolling.
            this.content.scrollEvents = true;
            this.scrollFunction();
        }
        else if (this.newMessages > 0 && addMessages == 0) {
            // Remove scrolling.
            this.content.scrollEvents = false;
        }
        this.newMessages = addMessages;
    }
    /**
     * The scroll was moved. Update new messages count.
     */
    scrollFunction() {
        var _a, _b, _c, _d;
        if (this.newMessages > 0) {
            const scrollBottom = (((_a = this.scrollElement) === null || _a === void 0 ? void 0 : _a.scrollTop) || 0) + (((_b = this.scrollElement) === null || _b === void 0 ? void 0 : _b.clientHeight) || 0);
            const scrollHeight = (((_c = this.scrollElement) === null || _c === void 0 ? void 0 : _c.scrollHeight) || 0);
            if (scrollBottom > scrollHeight - 40) {
                // At the bottom, reset.
                this.setNewMessagesBadge(0);
                return;
            }
            const scrollElRect = (_d = this.scrollElement) === null || _d === void 0 ? void 0 : _d.getBoundingClientRect();
            const scrollBottomPos = (scrollElRect && scrollElRect.bottom) || 0;
            if (scrollBottomPos == 0) {
                return;
            }
            const messages = Array.from(this.hostElement.querySelectorAll('.addon-message-not-mine'))
                .slice(-this.newMessages)
                .reverse();
            const newMessagesUnread = messages.findIndex((message) => {
                const elementRect = message.getBoundingClientRect();
                if (!elementRect) {
                    return false;
                }
                return elementRect.bottom <= scrollBottomPos;
            });
            if (newMessagesUnread > 0 && newMessagesUnread < this.newMessages) {
                this.setNewMessagesBadge(newMessagesUnread);
            }
        }
    }
    /**
     * Get the conversation.
     *
     * @param conversationId Conversation ID.
     * @param userId User ID.
     * @return Promise resolved with a boolean: whether the conversation exists or not.
     */
    getConversation(conversationId, userId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let fallbackConversation;
            // Try to get the conversationId if we don't have it.
            if (!conversationId && userId) {
                try {
                    if (userId == this.currentUserId && _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].isSelfConversationEnabled()) {
                        fallbackConversation = yield _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].getSelfConversation();
                    }
                    else {
                        fallbackConversation = yield _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].getConversationBetweenUsers(userId, undefined, true);
                    }
                    conversationId = fallbackConversation.id;
                }
                catch (error) {
                    // Probably conversation does not exist or user is offline. Try to load offline messages.
                    this.isSelf = userId == this.currentUserId;
                    const messages = yield _services_messages_offline__WEBPACK_IMPORTED_MODULE_6__["AddonMessagesOffline"].getMessages(userId);
                    if (messages && messages.length) {
                        // We have offline messages, this probably means that the conversation didn't exist. Don't display error.
                        messages.forEach((message) => {
                            message.pending = true;
                            message.text = message.smallmessage;
                        });
                        this.loadMessages(messages);
                    }
                    else if (error.errorcode != 'errorconversationdoesnotexist') {
                        // Display the error.
                        throw error;
                    }
                    return false;
                }
            }
            // Retrieve the conversation. Invalidate data first to get the right unreadcount.
            yield _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].invalidateConversation(conversationId);
            try {
                this.conversation = yield _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].getConversation(conversationId, undefined, true);
            }
            catch (error) {
                // Get conversation failed, use the fallback one if we have it.
                if (fallbackConversation) {
                    this.conversation = fallbackConversation;
                }
                else {
                    throw error;
                }
            }
            if (this.conversation) {
                this.conversationId = this.conversation.id;
                this.title = this.conversation.name;
                this.conversationImage = this.conversation.imageurl;
                this.isGroup = this.conversation.type == _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessagesProvider"].MESSAGE_CONVERSATION_TYPE_GROUP;
                this.favouriteIcon = 'fas-star';
                this.favouriteIconSlash = this.conversation.isfavourite;
                this.muteIcon = this.conversation.ismuted ? 'fas-bell' : 'fas-bell-slash';
                if (!this.isGroup) {
                    this.userId = this.conversation.userid;
                }
                this.isSelf = this.conversation.type == _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessagesProvider"].MESSAGE_CONVERSATION_TYPE_SELF;
                return true;
            }
            else {
                return false;
            }
        });
    }
    /**
     * Get the messages of the conversation. Used if group messaging is supported.
     *
     * @param pagesToLoad Number of "pages" to load.
     * @param offset Offset for message list.
     * @return Promise resolved with the list of messages.
     */
    getConversationMessages(pagesToLoad, offset = 0) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.conversationId) {
                return [];
            }
            const excludePending = offset > 0;
            const result = yield _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].getConversationMessages(this.conversationId, {
                excludePending: excludePending,
                limitFrom: offset,
            });
            pagesToLoad--;
            // Treat members. Don't use CoreUtilsProvider.arrayToObject because we don't want to override the existing object.
            if (result.members) {
                result.members.forEach((member) => {
                    this.members[member.id] = member;
                });
            }
            const messages = result.messages;
            if (pagesToLoad > 0 && result.canLoadMore) {
                offset += _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessagesProvider"].LIMIT_MESSAGES;
                // Get more messages.
                const nextMessages = yield this.getConversationMessages(pagesToLoad, offset);
                return messages.concat(nextMessages);
            }
            // No more messages to load, return them.
            this.canLoadMore = !!result.canLoadMore;
            return messages;
        });
    }
    /**
     * Get a discussion. Can load several "pages".
     *
     * @param pagesToLoad Number of pages to load.
     * @param lfReceivedUnread Number of unread received messages already fetched, so fetch will be done from this.
     * @param lfReceivedRead Number of read received messages already fetched, so fetch will be done from this.
     * @param lfSentUnread Number of unread sent messages already fetched, so fetch will be done from this.
     * @param lfSentRead Number of read sent messages already fetched, so fetch will be done from this.
     * @return Resolved when done.
     */
    getDiscussionMessages(pagesToLoad, lfReceivedUnread = 0, lfReceivedRead = 0, lfSentUnread = 0, lfSentRead = 0) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Only get offline messages if we're loading the first "page".
            const excludePending = lfReceivedUnread > 0 || lfReceivedRead > 0 || lfSentUnread > 0 || lfSentRead > 0;
            // Get next messages.
            const result = yield _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].getDiscussion(this.userId, excludePending, lfReceivedUnread, lfReceivedRead, lfSentUnread, lfSentRead);
            pagesToLoad--;
            if (pagesToLoad > 0 && result.canLoadMore) {
                // More pages to load. Calculate new limit froms.
                result.messages.forEach((message) => {
                    if (!message.pending && 'read' in message) {
                        if (message.useridfrom == this.userId) {
                            if (message.read) {
                                lfReceivedRead++;
                            }
                            else {
                                lfReceivedUnread++;
                            }
                        }
                        else {
                            if (message.read) {
                                lfSentRead++;
                            }
                            else {
                                lfSentUnread++;
                            }
                        }
                    }
                });
                // Get next messages.
                const nextMessages = yield this.getDiscussionMessages(pagesToLoad, lfReceivedUnread, lfReceivedRead, lfSentUnread, lfSentRead);
                return result.messages.concat(nextMessages);
            }
            else {
                // No more messages to load, return them.
                this.canLoadMore = result.canLoadMore;
                return result.messages;
            }
        });
    }
    /**
     * Mark messages as read.
     */
    markMessagesAsRead(forceMark) {
        var _a, _b;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let readChanged = false;
            if (_services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].isMarkAllMessagesReadEnabled()) {
                let messageUnreadFound = false;
                // Mark all messages at a time if there is any unread message.
                if (forceMark) {
                    messageUnreadFound = true;
                }
                else if (this.groupMessagingEnabled) {
                    messageUnreadFound = !!((((_a = this.conversation) === null || _a === void 0 ? void 0 : _a.unreadcount) && ((_b = this.conversation) === null || _b === void 0 ? void 0 : _b.unreadcount) > 0) &&
                        (this.conversationId && this.conversationId > 0));
                }
                else {
                    // If an unread message is found, mark all messages as read.
                    messageUnreadFound = this.messages.some((message) => message.useridfrom != this.currentUserId && ('read' in message && !message.read));
                }
                if (messageUnreadFound) {
                    this.setUnreadLabelPosition();
                    if (this.groupMessagingEnabled) {
                        yield _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].markAllConversationMessagesRead(this.conversationId);
                    }
                    else {
                        yield _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].markAllMessagesRead(this.userId);
                        // Mark all messages as read.
                        this.messages.forEach((message) => {
                            if ('read' in message) {
                                message.read = true;
                            }
                        });
                    }
                    readChanged = true;
                }
            }
            else {
                this.setUnreadLabelPosition();
                const promises = [];
                // Mark each message as read one by one.
                this.messages.forEach((message) => {
                    // If the message is unread, call AddonMessages.markMessageRead.
                    if (message.useridfrom != this.currentUserId && 'read' in message && !message.read) {
                        promises.push(_services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].markMessageRead(message.id).then(() => {
                            readChanged = true;
                            message.read = true;
                            return;
                        }));
                    }
                });
                yield Promise.all(promises);
            }
            if (readChanged) {
                _singletons_events__WEBPACK_IMPORTED_MODULE_3__["CoreEvents"].trigger(_services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessagesProvider"].READ_CHANGED_EVENT, {
                    conversationId: this.conversationId,
                    userId: this.userId,
                }, this.siteId);
            }
        });
    }
    /**
     * Notify the last message found so discussions list controller can tell if last message should be updated.
     */
    notifyNewMessage() {
        var _a, _b;
        const last = this.messages[this.messages.length - 1];
        let trigger = false;
        if (!last) {
            this.lastMessage = { text: '', timecreated: 0 };
            trigger = true;
        }
        else if (last.text !== this.lastMessage.text || last.timecreated !== this.lastMessage.timecreated) {
            this.lastMessage = { text: last.text || '', timecreated: last.timecreated };
            trigger = true;
        }
        if (trigger) {
            // Update discussions last message.
            _singletons_events__WEBPACK_IMPORTED_MODULE_3__["CoreEvents"].trigger(_services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessagesProvider"].NEW_MESSAGE_EVENT, {
                conversationId: this.conversationId,
                userId: this.userId,
                message: this.lastMessage.text,
                timecreated: this.lastMessage.timecreated,
                isfavourite: !!((_a = this.conversation) === null || _a === void 0 ? void 0 : _a.isfavourite),
                type: (_b = this.conversation) === null || _b === void 0 ? void 0 : _b.type,
            }, this.siteId);
            // Update navBar links and buttons.
            const newCanDelete = (last && 'id' in last && last.id && this.messages.length == 1) || this.messages.length > 1;
            if (this.canDelete != newCanDelete) {
                this.checkCanDelete();
            }
        }
    }
    /**
     * Set the place where the unread label position has to be.
     */
    setUnreadLabelPosition() {
        var _a, _b;
        if (this.unreadMessageFrom != 0) {
            return;
        }
        if (this.groupMessagingEnabled) {
            // Use the unreadcount from the conversation to calculate where should the label be placed.
            if (this.conversation && (((_a = this.conversation) === null || _a === void 0 ? void 0 : _a.unreadcount) && ((_b = this.conversation) === null || _b === void 0 ? void 0 : _b.unreadcount) > 0) && this.messages) {
                // Iterate over messages to find the right message using the unreadcount. Skip offline messages and own messages.
                let found = 0;
                for (let i = this.messages.length - 1; i >= 0; i--) {
                    const message = this.messages[i];
                    if (!message.pending && message.useridfrom != this.currentUserId && 'id' in message) {
                        found++;
                        if (found == this.conversation.unreadcount) {
                            this.unreadMessageFrom = Number(message.id);
                            break;
                        }
                    }
                }
            }
        }
        else {
            let previousMessageRead = false;
            for (const x in this.messages) {
                const message = this.messages[x];
                if (message.useridfrom != this.currentUserId && 'read' in message) {
                    const unreadFrom = !message.read && previousMessageRead;
                    if (unreadFrom) {
                        // Save where the label is placed.
                        this.unreadMessageFrom = Number(message.id);
                        break;
                    }
                    previousMessageRead = !!message.read;
                }
            }
        }
        // Do not update the message unread from label on next refresh.
        if (this.unreadMessageFrom == 0) {
            // Using negative to indicate the label is not placed but should not be placed.
            this.unreadMessageFrom = -1;
        }
    }
    /**
     * Check if there's any message in the list that can be deleted.
     */
    checkCanDelete() {
        // All messages being sent should be at the end of the list.
        const first = this.messages[0];
        this.canDelete = first && !first.sending;
    }
    /**
     * Hide unread label when sending messages.
     */
    hideUnreadLabel() {
        if (this.unreadMessageFrom > 0) {
            this.unreadMessageFrom = -1;
        }
    }
    /**
     * Wait until fetching is false.
     *
     * @return Resolved when done.
     */
    waitForFetch() {
        if (!this.fetching) {
            return Promise.resolve();
        }
        const deferred = _services_utils_utils__WEBPACK_IMPORTED_MODULE_10__["CoreUtils"].promiseDefer();
        setTimeout(() => this.waitForFetch().finally(() => {
            deferred.resolve();
        }), 400);
        return deferred.promise;
    }
    /**
     * Set a polling to get new messages every certain time.
     */
    setPolling() {
        if (this.groupMessagingEnabled && !this.conversationId) {
            // Don't have enough data to poll messages.
            return;
        }
        if (!this.polling) {
            // Start polling.
            this.polling = window.setInterval(() => {
                this.fetchMessages().catch(() => {
                    // Ignore errors.
                });
            }, _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessagesProvider"].POLL_INTERVAL);
        }
    }
    /**
     * Unset polling.
     */
    unsetPolling() {
        if (this.polling) {
            this.logger.debug(`Cancelling polling for conversation with user '${this.userId}'`);
            clearInterval(this.polling);
            this.polling = undefined;
        }
    }
    /**
     * Copy message to clipboard.
     *
     * @param message Message to be copied.
     */
    copyMessage(message) {
        const text = 'smallmessage' in message ? message.smallmessage || message.text || '' : message.text || '';
        _services_utils_utils__WEBPACK_IMPORTED_MODULE_10__["CoreUtils"].copyToClipboard(_services_utils_text__WEBPACK_IMPORTED_MODULE_11__["CoreTextUtils"].decodeHTMLEntities(text));
    }
    /**
     * Function to delete a message.
     *
     * @param message Message object to delete.
     * @param index Index where the message is to delete it from the view.
     */
    deleteMessage(message, index) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const canDeleteAll = this.conversation && this.conversation.candeletemessagesforallusers;
            const langKey = message.pending || canDeleteAll || this.isSelf ? 'core.areyousure' :
                'addon.messages.deletemessageconfirmation';
            const options = {};
            if (canDeleteAll && !message.pending) {
                // Show delete for all checkbox.
                options.inputs = [{
                        type: 'checkbox',
                        name: 'deleteforall',
                        checked: false,
                        value: true,
                        label: _singletons__WEBPACK_IMPORTED_MODULE_19__["Translate"].instant('addon.messages.deleteforeveryone'),
                    }];
            }
            try {
                const data = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showConfirm(_singletons__WEBPACK_IMPORTED_MODULE_19__["Translate"].instant(langKey), undefined, undefined, undefined, options);
                const modal = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showModalLoading('core.deleting', true);
                try {
                    yield _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].deleteMessage(message, data && data[0]);
                    // Remove message from the list without having to wait for re-fetch.
                    this.messages.splice(index, 1);
                    this.removeMessage(message.hash);
                    this.notifyNewMessage();
                    this.fetchMessages(); // Re-fetch messages to update cached data.
                }
                finally {
                    modal.dismiss();
                }
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showErrorModalDefault(error, 'addon.messages.errordeletemessage', true);
            }
        });
    }
    /**
     * Function to load previous messages.
     *
     * @param infiniteComplete Infinite scroll complete function. Only used from core-infinite-loading.
     * @return Resolved when done.
     */
    loadPrevious(infiniteComplete) {
        var _a, _b, _c, _d;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.initialized) {
                // Don't load previous if the view isn't fully initialized.
                // Don't put the initialized condition in the "enabled" input because then the load more is hidden and
                // the scroll height changes when it appears.
                infiniteComplete && infiniteComplete();
                return;
            }
            let infiniteHeight = ((_a = this.infinite) === null || _a === void 0 ? void 0 : _a.hostElement.getBoundingClientRect().height) || 0;
            const scrollHeight = (((_b = this.scrollElement) === null || _b === void 0 ? void 0 : _b.scrollHeight) || 0);
            // If there is an ongoing fetch, wait for it to finish.
            try {
                yield this.waitForFetch();
            }
            finally {
                this.pagesLoaded++;
                try {
                    yield this.fetchMessages(false);
                    // Try to keep the scroll position.
                    const scrollBottom = scrollHeight - (((_c = this.scrollElement) === null || _c === void 0 ? void 0 : _c.scrollTop) || 0);
                    const height = ((_d = this.infinite) === null || _d === void 0 ? void 0 : _d.hostElement.getBoundingClientRect().height) || 0;
                    if (this.canLoadMore && infiniteHeight && this.infinite) {
                        // The height of the infinite is different while spinner is shown. Add that difference.
                        infiniteHeight = infiniteHeight - height;
                    }
                    else if (!this.canLoadMore) {
                        // Can't load more, take into account the full height of the infinite loading since it will disappear now.
                        infiniteHeight = infiniteHeight || height;
                    }
                    this.keepScroll(scrollHeight, scrollBottom, infiniteHeight);
                }
                catch (error) {
                    this.loadMoreError = true; // Set to prevent infinite calls with infinite-loading.
                    this.pagesLoaded--;
                    _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showErrorModalDefault(error, 'addon.messages.errorwhileretrievingmessages', true);
                }
                finally {
                    infiniteComplete && infiniteComplete();
                }
            }
        });
    }
    /**
     * Keep scroll position after loading previous messages.
     */
    keepScroll(oldScrollHeight, oldScrollBottom, infiniteHeight, retries = 0) {
        setTimeout(() => {
            var _a;
            const newScrollHeight = (((_a = this.scrollElement) === null || _a === void 0 ? void 0 : _a.scrollHeight) || 0);
            if (newScrollHeight == oldScrollHeight) {
                // Height hasn't changed yet. Retry if max retries haven't been reached.
                if (retries <= 10) {
                    this.keepScroll(oldScrollHeight, oldScrollBottom, infiniteHeight, retries + 1);
                }
                return;
            }
            // Scroll has changed, but maybe it hasn't reached the full height yet.
            setTimeout(() => {
                var _a;
                const newScrollHeight = (((_a = this.scrollElement) === null || _a === void 0 ? void 0 : _a.scrollHeight) || 0);
                const scrollTo = newScrollHeight - oldScrollBottom + infiniteHeight;
                this.content.scrollToPoint(0, scrollTo, 0);
            }, 30);
        }, 30);
    }
    /**
     * Scroll bottom when render has finished.
     *
     * @param force Whether to force scroll to bottom.
     */
    scrollToBottom(force = false) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Check if scroll is at bottom. If so, scroll bottom after rendering since there might be something new.
            if (this.scrollBottom || force) {
                this.scrollBottom = false;
                // Reset the badge.
                this.setNewMessagesBadge(0);
                // Leave time for the view to be rendered.
                yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_10__["CoreUtils"].nextTicks(5);
                if (!this.viewDestroyed) {
                    this.content.scrollToBottom(0);
                }
                if (force) {
                    this.initialized = true;
                }
            }
        });
    }
    /**
     * Scroll to the first new unread message.
     */
    scrollToFirstUnreadMessage() {
        if (this.newMessages > 0) {
            const messages = Array.from(this.hostElement.querySelectorAll('.addon-message-not-mine'));
            _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].scrollToElement(this.content, messages[messages.length - this.newMessages]);
        }
    }
    /**
     * Sends a message to the server.
     *
     * @param text Message text.
     */
    sendMessage(text) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.hideUnreadLabel();
            this.showDelete = false;
            this.scrollBottom = true;
            this.setNewMessagesBadge(0);
            const message = {
                id: -1,
                pending: true,
                sending: true,
                useridfrom: this.currentUserId,
                smallmessage: text,
                text: text,
                timecreated: new Date().getTime(),
            };
            message.showDate = this.showDate(message, this.messages[this.messages.length - 1]);
            this.addMessage(message, false);
            this.messagesBeingSent++;
            // If there is an ongoing fetch, wait for it to finish.
            // Otherwise, if a message is sent while fetching it could disappear until the next fetch.
            try {
                yield this.waitForFetch();
            }
            finally {
                try {
                    let data;
                    if (this.conversationId) {
                        data = yield _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].sendMessageToConversation(this.conversation, text);
                    }
                    else {
                        data = yield _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].sendMessage(this.userId, text);
                    }
                    this.messagesBeingSent--;
                    let failure = false;
                    if (data.sent) {
                        try {
                            if (!this.conversationId && data.message && 'conversationid' in data.message) {
                                // Message sent to a new conversation, try to load the conversation.
                                yield this.getConversation(data.message.conversationid, this.userId);
                                // Now fetch messages.
                                try {
                                    yield this.fetchMessages();
                                }
                                finally {
                                    // Start polling messages now that the conversation exists.
                                    this.setPolling();
                                }
                            }
                            else {
                                // Message was sent, fetch messages right now.
                                yield this.fetchMessages();
                            }
                        }
                        catch (_a) {
                            failure = true;
                        }
                    }
                    if (failure || !data.sent) {
                        // Fetch failed or is offline message, mark the message as sent.
                        // If fetch is successful there's no need to mark it because the fetch will already show the message received.
                        message.sending = false;
                        if (data.sent) {
                            // Message sent to server, not pending anymore.
                            message.pending = false;
                        }
                        else if (data.message) {
                            message.timecreated = data.message.timecreated || 0;
                        }
                        this.notifyNewMessage();
                    }
                }
                catch (error) {
                    this.messagesBeingSent--;
                    // Only close the keyboard if an error happens.
                    // We want the user to be able to send multiple messages without the keyboard being closed.
                    _services_app__WEBPACK_IMPORTED_MODULE_13__["CoreApp"].closeKeyboard();
                    _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showErrorModalDefault(error, 'addon.messages.messagenotsent', true);
                    this.removeMessage(message.hash);
                }
            }
        });
    }
    /**
     * Check date should be shown on message list for the current message.
     * If date has changed from previous to current message it should be shown.
     *
     * @param message Current message where to show the date.
     * @param prevMessage Previous message where to compare the date with.
     * @return If date has changed and should be shown.
     */
    showDate(message, prevMessage) {
        if (!prevMessage) {
            // First message, show it.
            return true;
        }
        // Check if day has changed.
        return !moment__WEBPACK_IMPORTED_MODULE_16___default()(message.timecreated).isSame(prevMessage.timecreated, 'day');
    }
    /**
     * Check if the user info should be displayed for the current message.
     * User data is only displayed for group conversations if the previous message was from another user.
     *
     * @param message Current message where to show the user info.
     * @param prevMessage Previous message.
     * @return Whether user data should be shown.
     */
    showUserData(message, prevMessage) {
        return this.isGroup && message.useridfrom != this.currentUserId && this.members[(message.useridfrom || 0)] &&
            (!prevMessage || prevMessage.useridfrom != message.useridfrom || !!message.showDate);
    }
    /**
     * Check if a css tail should be shown.
     *
     * @param message Current message where to show the user info.
     * @param nextMessage Next message.
     * @return Whether user data should be shown.
     */
    showTail(message, nextMessage) {
        return !nextMessage || nextMessage.useridfrom != message.useridfrom || !!nextMessage.showDate;
    }
    /**
     * Toggles delete state.
     */
    toggleDelete() {
        this.showDelete = !this.showDelete;
    }
    /**
     * View info. If it's an individual conversation, go to the user profile.
     * If it's a group conversation, view info about the group.
     */
    viewInfo() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.isGroup) {
                // Display the group information.
                const userId = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].openSideModal({
                    component: _components_conversation_info_conversation_info__WEBPACK_IMPORTED_MODULE_22__["AddonMessagesConversationInfoComponent"],
                    componentProps: {
                        conversationId: this.conversationId,
                    },
                });
                if (typeof userId != 'undefined') {
                    const splitViewLoaded = _services_navigator__WEBPACK_IMPORTED_MODULE_20__["CoreNavigator"].isCurrentPathInTablet('**/messages/**/discussion');
                    // Open user conversation.
                    if (splitViewLoaded) {
                        // Notify the left pane to load it, this way the right conversation will be highlighted.
                        _singletons_events__WEBPACK_IMPORTED_MODULE_3__["CoreEvents"].trigger(_services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessagesProvider"].OPEN_CONVERSATION_EVENT, { userId }, this.siteId);
                    }
                    else {
                        // Open the discussion in a new view.
                        _services_navigator__WEBPACK_IMPORTED_MODULE_20__["CoreNavigator"].navigateToSitePath('/messages/discussion', { params: { userId } });
                    }
                }
            }
            else {
                // Open the user profile.
                _services_navigator__WEBPACK_IMPORTED_MODULE_20__["CoreNavigator"].navigateToSitePath('/user/profile', { params: { userId: this.userId } });
            }
        });
    }
    /**
     * Change the favourite state of the current conversation.
     *
     * @param done Function to call when done.
     */
    changeFavourite(done) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.conversation) {
                return;
            }
            this.favouriteIcon = _core_constants__WEBPACK_IMPORTED_MODULE_23__["CoreConstants"].ICON_LOADING;
            try {
                yield _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].setFavouriteConversation(this.conversation.id, !this.conversation.isfavourite);
                this.conversation.isfavourite = !this.conversation.isfavourite;
                // Get the conversation data so it's cached. Don't block the user for this.
                _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].getConversation(this.conversation.id, undefined, true);
                _singletons_events__WEBPACK_IMPORTED_MODULE_3__["CoreEvents"].trigger(_services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessagesProvider"].UPDATE_CONVERSATION_LIST_EVENT, {
                    conversationId: this.conversation.id,
                    action: 'favourite',
                    value: this.conversation.isfavourite,
                }, this.siteId);
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showErrorModalDefault(error, 'Error changing favourite state.');
            }
            finally {
                this.favouriteIcon = 'fas-star';
                this.favouriteIconSlash = this.conversation.isfavourite;
                done && done();
            }
        });
    }
    /**
     * Change the mute state of the current conversation.
     *
     * @param done Function to call when done.
     */
    changeMute(done) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.conversation) {
                return;
            }
            this.muteIcon = _core_constants__WEBPACK_IMPORTED_MODULE_23__["CoreConstants"].ICON_LOADING;
            try {
                yield _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].muteConversation(this.conversation.id, !this.conversation.ismuted);
                this.conversation.ismuted = !this.conversation.ismuted;
                // Get the conversation data so it's cached. Don't block the user for this.
                _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].getConversation(this.conversation.id, undefined, true);
                _singletons_events__WEBPACK_IMPORTED_MODULE_3__["CoreEvents"].trigger(_services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessagesProvider"].UPDATE_CONVERSATION_LIST_EVENT, {
                    conversationId: this.conversation.id,
                    action: 'mute',
                    value: this.conversation.ismuted,
                }, this.siteId);
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showErrorModalDefault(error, 'Error changing muted state.');
            }
            finally {
                this.muteIcon = this.conversation.ismuted ? 'fas-bell' : 'fas-bell-slash';
                done && done();
            }
        });
    }
    /**
     * Calculate whether there are pending contact requests.
     */
    setContactRequestInfo() {
        var _a, _b;
        this.requestContactSent = false;
        this.requestContactReceived = false;
        if (this.otherMember && !this.otherMember.iscontact) {
            this.requestContactSent = !!((_a = this.otherMember.contactrequests) === null || _a === void 0 ? void 0 : _a.some((request) => request.userid == this.currentUserId && request.requesteduserid == this.otherMember.id));
            this.requestContactReceived = !!((_b = this.otherMember.contactrequests) === null || _b === void 0 ? void 0 : _b.some((request) => request.userid == this.otherMember.id && request.requesteduserid == this.currentUserId));
        }
    }
    /**
     * Calculate what to display in the footer.
     */
    setFooterType() {
        if (!this.otherMember) {
            // Group conversation or group messaging not available.
            this.footerType = 'message';
        }
        else if (this.otherMember.isblocked) {
            this.footerType = 'blocked';
        }
        else if (this.requestContactReceived) {
            this.footerType = 'requestReceived';
        }
        else if (this.otherMember.canmessage) {
            this.footerType = 'message';
        }
        else if (this.requestContactSent) {
            this.footerType = 'requestSent';
        }
        else if (this.otherMember.requirescontact) {
            this.footerType = 'requiresContact';
        }
        else {
            this.footerType = 'unable';
        }
    }
    /**
     * Displays a confirmation modal to block the user of the individual conversation.
     *
     * @return Promise resolved when user is blocked or dialog is cancelled.
     */
    blockUser() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.otherMember) {
                // Should never happen.
                throw new _classes_errors_error__WEBPACK_IMPORTED_MODULE_18__["CoreError"]('No member selected to be blocked.');
            }
            if (this.otherMember.canmessageevenifblocked) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showErrorModal(_singletons__WEBPACK_IMPORTED_MODULE_19__["Translate"].instant('addon.messages.cantblockuser', { $a: this.otherMember.fullname }));
                return;
            }
            const template = _singletons__WEBPACK_IMPORTED_MODULE_19__["Translate"].instant('addon.messages.blockuserconfirm', { $a: this.otherMember.fullname });
            const okText = _singletons__WEBPACK_IMPORTED_MODULE_19__["Translate"].instant('addon.messages.blockuser');
            try {
                yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showConfirm(template, undefined, okText);
                this.blockIcon = _core_constants__WEBPACK_IMPORTED_MODULE_23__["CoreConstants"].ICON_LOADING;
                const modal = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showModalLoading('core.sending', true);
                this.showLoadingModal = true;
                try {
                    try {
                        yield _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].blockContact(this.otherMember.id);
                    }
                    finally {
                        modal.dismiss();
                        this.showLoadingModal = false;
                    }
                }
                catch (error) {
                    _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showErrorModalDefault(error, 'core.error', true);
                }
                finally {
                    this.blockIcon = this.otherMember.isblocked ? 'fas-user-check' : 'fas-user-lock';
                }
            }
            catch (_a) {
                // User cancelled.
            }
        });
    }
    /**
     * Delete the conversation.
     *
     * @param done Function to call when done.
     */
    deleteConversation(done) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.conversation) {
                return;
            }
            const confirmMessage = 'addon.messages.' + (this.isSelf ? 'deleteallselfconfirm' : 'deleteallconfirm');
            try {
                yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showDeleteConfirm(confirmMessage);
                this.deleteIcon = _core_constants__WEBPACK_IMPORTED_MODULE_23__["CoreConstants"].ICON_LOADING;
                try {
                    try {
                        yield _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].deleteConversation(this.conversation.id);
                        _singletons_events__WEBPACK_IMPORTED_MODULE_3__["CoreEvents"].trigger(_services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessagesProvider"].UPDATE_CONVERSATION_LIST_EVENT, {
                            conversationId: this.conversation.id,
                            action: 'delete',
                        }, this.siteId);
                        this.messages = [];
                    }
                    finally {
                        done && done();
                    }
                }
                catch (error) {
                    _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showErrorModalDefault(error, 'Error deleting conversation.');
                }
                finally {
                    this.deleteIcon = 'fas-trash';
                }
            }
            catch (_a) {
                // User cancelled.
            }
        });
    }
    /**
     * Displays a confirmation modal to unblock the user of the individual conversation.
     *
     * @return Promise resolved when user is unblocked or dialog is cancelled.
     */
    unblockUser() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.otherMember) {
                // Should never happen.
                throw new _classes_errors_error__WEBPACK_IMPORTED_MODULE_18__["CoreError"]('No member selected to be unblocked.');
            }
            const template = _singletons__WEBPACK_IMPORTED_MODULE_19__["Translate"].instant('addon.messages.unblockuserconfirm', { $a: this.otherMember.fullname });
            const okText = _singletons__WEBPACK_IMPORTED_MODULE_19__["Translate"].instant('addon.messages.unblockuser');
            try {
                yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showConfirm(template, undefined, okText);
                this.blockIcon = _core_constants__WEBPACK_IMPORTED_MODULE_23__["CoreConstants"].ICON_LOADING;
                const modal = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showModalLoading('core.sending', true);
                this.showLoadingModal = true;
                try {
                    try {
                        yield _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].unblockContact(this.otherMember.id);
                    }
                    finally {
                        modal.dismiss();
                        this.showLoadingModal = false;
                    }
                }
                catch (error) {
                    _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showErrorModalDefault(error, 'core.error', true);
                }
                finally {
                    this.blockIcon = this.otherMember.isblocked ? 'fas-user-check' : 'fas-user-lock';
                }
            }
            catch (_a) {
                // User cancelled.
            }
        });
    }
    /**
     * Displays a confirmation modal to send a contact request to the other user of the individual conversation.
     *
     * @return Promise resolved when the request is sent or the dialog is cancelled.
     */
    createContactRequest() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.otherMember) {
                // Should never happen.
                throw new _classes_errors_error__WEBPACK_IMPORTED_MODULE_18__["CoreError"]('No member selected to be requested.');
            }
            const template = _singletons__WEBPACK_IMPORTED_MODULE_19__["Translate"].instant('addon.messages.addcontactconfirm', { $a: this.otherMember.fullname });
            const okText = _singletons__WEBPACK_IMPORTED_MODULE_19__["Translate"].instant('core.add');
            try {
                yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showConfirm(template, undefined, okText);
                this.addRemoveIcon = _core_constants__WEBPACK_IMPORTED_MODULE_23__["CoreConstants"].ICON_LOADING;
                const modal = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showModalLoading('core.sending', true);
                this.showLoadingModal = true;
                try {
                    try {
                        yield _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].createContactRequest(this.otherMember.id);
                    }
                    finally {
                        modal.dismiss();
                        this.showLoadingModal = false;
                    }
                }
                catch (error) {
                    _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showErrorModalDefault(error, 'core.error', true);
                }
                finally {
                    this.addRemoveIcon = 'fas-user-plus';
                }
            }
            catch (_a) {
                // User cancelled.
            }
        });
    }
    /**
     * Confirms the contact request of the other user of the individual conversation.
     *
     * @return Promise resolved when the request is confirmed.
     */
    confirmContactRequest() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.otherMember) {
                // Should never happen.
                throw new _classes_errors_error__WEBPACK_IMPORTED_MODULE_18__["CoreError"]('No member selected to be confirmed.');
            }
            const modal = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showModalLoading('core.sending', true);
            this.showLoadingModal = true;
            try {
                try {
                    yield _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].confirmContactRequest(this.otherMember.id);
                }
                finally {
                    modal.dismiss();
                    this.showLoadingModal = false;
                }
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showErrorModalDefault(error, 'core.error', true);
            }
        });
    }
    /**
     * Declines the contact request of the other user of the individual conversation.
     *
     * @return Promise resolved when the request is confirmed.
     */
    declineContactRequest() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.otherMember) {
                // Should never happen.
                throw new _classes_errors_error__WEBPACK_IMPORTED_MODULE_18__["CoreError"]('No member selected to be declined.');
            }
            const modal = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showModalLoading('core.sending', true);
            this.showLoadingModal = true;
            try {
                try {
                    yield _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].declineContactRequest(this.otherMember.id);
                }
                finally {
                    modal.dismiss();
                    this.showLoadingModal = false;
                }
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showErrorModalDefault(error, 'core.error', true);
            }
        });
    }
    /**
     * Displays a confirmation modal to remove the other user of the conversation from contacts.
     *
     * @return Promise resolved when the request is sent or the dialog is cancelled.
     */
    removeContact() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.otherMember) {
                // Should never happen.
                throw new _classes_errors_error__WEBPACK_IMPORTED_MODULE_18__["CoreError"]('No member selected to be removed.');
            }
            const template = _singletons__WEBPACK_IMPORTED_MODULE_19__["Translate"].instant('addon.messages.removecontactconfirm', { $a: this.otherMember.fullname });
            const okText = _singletons__WEBPACK_IMPORTED_MODULE_19__["Translate"].instant('core.remove');
            try {
                yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showConfirm(template, undefined, okText);
                this.addRemoveIcon = _core_constants__WEBPACK_IMPORTED_MODULE_23__["CoreConstants"].ICON_LOADING;
                const modal = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showModalLoading('core.sending', true);
                this.showLoadingModal = true;
                try {
                    try {
                        yield _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].removeContact(this.otherMember.id);
                    }
                    finally {
                        modal.dismiss();
                        this.showLoadingModal = false;
                    }
                }
                catch (error) {
                    _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showErrorModalDefault(error, 'core.error', true);
                }
                finally {
                    this.addRemoveIcon = 'fas-user-plus';
                }
            }
            catch (_a) {
                // User cancelled.
            }
        });
    }
    /**
     * Page destroyed.
     */
    ngOnDestroy() {
        var _a, _b, _c;
        // Unset again, just in case.
        this.unsetPolling();
        (_a = this.syncObserver) === null || _a === void 0 ? void 0 : _a.off();
        (_b = this.keyboardObserver) === null || _b === void 0 ? void 0 : _b.off();
        (_c = this.memberInfoObserver) === null || _c === void 0 ? void 0 : _c.off();
        this.viewDestroyed = true;
    }
};
AddonMessagesDiscussionPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_21__["ActivatedRoute"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
AddonMessagesDiscussionPage.propDecorators = {
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"],] }],
    infinite: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_components_infinite_loading_infinite_loading__WEBPACK_IMPORTED_MODULE_14__["CoreInfiniteLoadingComponent"],] }]
};
AddonMessagesDiscussionPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-addon-messages-discussion',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./discussion.html */ "./node_modules/raw-loader/dist/cjs.js!./src/addons/messages/pages/discussion/discussion.html")).default,
        animations: [_components_animations__WEBPACK_IMPORTED_MODULE_17__["CoreAnimations"].SLIDE_IN_OUT],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./discussion.scss */ "./src/addons/messages/pages/discussion/discussion.scss")).default]
    })
], AddonMessagesDiscussionPage);



/***/ }),

/***/ "./src/addons/messages/pages/discussion/discussion.scss":
/*!**************************************************************!*\
  !*** ./src/addons/messages/pages/discussion/discussion.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*\n * App Global variables SCSS\n * ----------------------------------------------------------------------------\n * Place here the different files you should import to use global variables.\n */\n/*\n * App custom mixins for SCSS\n * ----------------------------------------------------------------------------\n * Place here our custom mixins.\n */\n/*\n * Imported ionic mixins for SCSS\n * ----------------------------------------------------------------------------\n * Place here our custom mixins.\n * Extracted from ionic.mixins.scss\n * https://github.com/ionic-team/ionic-framework/blob/master/core/src/themes/ionic.mixins.scss\n */\n/*\n * App Custom App variables SCSS\n * ----------------------------------------------------------------------------\n * Place here all custom app variables.\n */\n/*\n * App Global variables SCSS\n * ----------------------------------------------------------------------------\n * Place here all global variables.\n */\n/**\n * Layout Breakpoints\n *\n * https://ionicframework.com/docs/layout/grid#default-breakpoints\n */\nion-header {\n  background: var(--header-background);\n  box-shadow: 0 3px 6px 0 var(--tab-bar-shadow);\n}\nion-header ion-toolbar {\n  --background: var(--header-background);\n  display: flex;\n  align-items: center;\n  margin-top: var(--ion-safe-area-top, 0);\n  padding-top: 0 !important;\n}\nion-header ion-toolbar ion-title {\n  line-height: 36px;\n  font-size: 30px;\n}\nion-header ion-toolbar ion-title img {\n  width: 100px;\n}\nion-header ion-toolbar ion-button {\n  --color: var(--brand-color);\n  --padding-start: 0;\n  --padding-end: 0;\n}\nion-header ion-toolbar ion-button ion-icon {\n  font-size: 26px;\n}\nion-header .green-line {\n  height: 10px;\n  background: linear-gradient(0.25turn, #257C2D 10%, #2AB135 30%);\n}\n:host ion-content {\n  --background: var(--background-alternative);\n}\n:host ion-content::part(scroll) {\n  padding-bottom: 0 !important;\n}\n:host .addon-messages-discussion-container {\n  display: flex;\n  flex-direction: column;\n  padding-bottom: 15px;\n  background: var(--background-alternative);\n}\n:host .addon-messages-date {\n  font-weight: normal;\n  font-size: 0.9rem;\n}\n:host ion-item.addon-message {\n  border: 0;\n  border-radius: 4px;\n  padding: 0 8px 0 8px;\n  margin: 10px 8px 0 8px;\n  --background: var(--addon-messages-message-bg);\n  background: var(--background);\n  align-self: flex-start;\n  width: 90%;\n  max-width: 90%;\n  --min-height: var(--a11y-min-target-size);\n  position: relative;\n  transition: width 500ms ease-in-out;\n  overflow: visible;\n}\n:host ion-item.addon-message::part(native) {\n  --inner-border-width: 0;\n  --inner-padding-end: 0;\n  padding: 0;\n  margin: 0;\n}\n:host ion-item.addon-message core-format-text > p:only-child {\n  display: inline;\n}\n:host ion-item.addon-message .addon-message-user {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 0.5rem;\n  margin-top: 0;\n  color: var(--ion-text-color);\n}\n:host ion-item.addon-message .addon-message-user core-user-avatar {\n  display: block;\n  --core-avatar-size: var(--addon-messages-avatar-size);\n  margin: 0;\n}\n:host ion-item.addon-message .addon-message-user div {\n  font-weight: 500;\n  flex-grow: 1;\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  :host ion-item.addon-message .addon-message-user div {\n    padding-left: unset;\n    padding-right: unset;\n    -webkit-padding-start: 0.5rem;\n    padding-inline-start: 0.5rem;\n    -webkit-padding-end: 0.5rem;\n    padding-inline-end: 0.5rem;\n  }\n}\n:host ion-item.addon-message ion-note {\n  color: var(--addon-messages-message-note-text);\n  font-size: var(--addon-messages-message-note-font-size);\n  margin: 0;\n  padding: 0 0 8px 0;\n  align-self: flex-end;\n}\n:host ion-item.addon-message[tappable]:active {\n  --background: var(--addon-messages-message-activated-bg);\n}\n:host ion-item.addon-message ion-label {\n  margin: 0;\n  padding: 8px 0;\n}\n:host ion-item.addon-message .addon-message-text {\n  display: inline-flex;\n}\n:host ion-item.addon-message .addon-message-text * {\n  color: var(--ion-text-color);\n}\n:host ion-item.addon-message .tail {\n  content: \"\";\n  width: 0;\n  height: 0;\n  border: 0.5rem solid transparent;\n  position: absolute;\n  touch-action: none;\n  bottom: 0;\n}\n:host ion-item.addon-message.addon-message-mine {\n  --background: var(--addon-messages-message-mine-bg);\n  align-self: flex-end;\n}\n:host ion-item.addon-message.addon-message-mine[tappable]:active {\n  --background: var(--addon-messages-message-mine-activated-bg);\n}\n:host ion-item.addon-message.addon-message-mine .spinner {\n  float: right;\n  margin-left: 5px;\n  margin-right: -3px;\n  margin-top: 2px;\n  margin-bottom: -2px;\n}\n[dir=rtl] :host ion-item.addon-message.addon-message-mine .spinner {\n  float: left;\n}\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  :host ion-item.addon-message.addon-message-mine .spinner {\n    margin-left: unset;\n    margin-right: unset;\n    -webkit-margin-start: 5px;\n    margin-inline-start: 5px;\n    -webkit-margin-end: -3px;\n    margin-inline-end: -3px;\n  }\n}\n:host ion-item.addon-message.addon-message-mine .spinner svg {\n  width: 16px;\n  height: 16px;\n}\n:host ion-item.addon-message.addon-message-mine .tail {\n  right: -8px;\n  margin-right: -0.5rem;\n  border-bottom-color: var(--addon-messages-message-mine-bg);\n}\n[dir=rtl] :host ion-item.addon-message.addon-message-mine .tail {\n  left: unset;\n  right: unset;\n  left: -8px;\n}\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  :host ion-item.addon-message.addon-message-mine .tail {\n    margin-right: unset;\n    -webkit-margin-end: -0.5rem;\n    margin-inline-end: -0.5rem;\n  }\n}\n:host ion-item.addon-message.addon-message-mine[tappable]:active .tail {\n  border-bottom-color: var(--addon-messages-message-mine-activated-bg);\n}\n:host ion-item.addon-message.addon-message-not-mine .tail {\n  border-bottom-color: var(--addon-messages-message-bg);\n  left: -8px;\n  margin-left: -0.5rem;\n}\n[dir=rtl] :host ion-item.addon-message.addon-message-not-mine .tail {\n  left: unset;\n  right: unset;\n  right: -8px;\n}\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  :host ion-item.addon-message.addon-message-not-mine .tail {\n    margin-left: unset;\n    -webkit-margin-start: -0.5rem;\n    margin-inline-start: -0.5rem;\n  }\n}\n:host ion-item.addon-message[tappable].addon-message-not-mine.activated .tail {\n  border-bottom-color: var(--addon-messages-message-activated-bg);\n}\n:host ion-item.addon-message .addon-messages-delete-button {\n  min-height: initial;\n  line-height: initial;\n  margin-top: 0;\n  margin-bottom: 0;\n  height: var(--a11y-min-target-size) !important;\n  align-self: flex-end;\n}\n:host ion-item.addon-message .addon-messages-delete-button ion-icon {\n  font-size: 1.4em;\n  line-height: initial;\n  color: var(--ion-color-danger);\n}\n:host ion-item.addon-message.addon-message-no-user {\n  margin-top: 8px;\n}\n:host ion-item.addon-message.addon-message-mine + ion-item.addon-message.addon-message-no-user.addon-message-mine,\n:host ion-item.addon-message.addon-message-not-mine + ion-item.addon-message.addon-message-no-user.addon-message-not-mine {\n  padding-top: 0;\n}\n:host ion-item.addon-message.addon-message-mine + ion-item.addon-message.addon-message-no-user.addon-message-mine .item-heading,\n:host ion-item.addon-message.addon-message-not-mine + ion-item.addon-message.addon-message-no-user.addon-message-not-mine .item-heading {\n  margin-bottom: 0;\n}\n:host-context(.ios) ion-footer .toolbar:last-child {\n  padding-bottom: 4px;\n  min-height: 0;\n}\n/*\n * App Global variables SCSS\n * ----------------------------------------------------------------------------\n * Place here the different files you should import to use global variables.\n */\n/*\n * App custom mixins for SCSS\n * ----------------------------------------------------------------------------\n * Place here our custom mixins.\n */\n/*\n * Imported ionic mixins for SCSS\n * ----------------------------------------------------------------------------\n * Place here our custom mixins.\n * Extracted from ionic.mixins.scss\n * https://github.com/ionic-team/ionic-framework/blob/master/core/src/themes/ionic.mixins.scss\n */\n/*\n * App Custom App variables SCSS\n * ----------------------------------------------------------------------------\n * Place here all custom app variables.\n */\n/*\n * App Global variables SCSS\n * ----------------------------------------------------------------------------\n * Place here all global variables.\n */\n/**\n * Layout Breakpoints\n *\n * https://ionicframework.com/docs/layout/grid#default-breakpoints\n */\nion-header {\n  background: var(--header-background);\n  box-shadow: 0 3px 6px 0 var(--tab-bar-shadow);\n}\nion-header ion-toolbar {\n  --background: var(--header-background);\n  display: flex;\n  align-items: center;\n  margin-top: var(--ion-safe-area-top, 0);\n  padding-top: 0 !important;\n}\nion-header ion-toolbar ion-title {\n  line-height: 36px;\n  font-size: 30px;\n}\nion-header ion-toolbar ion-title img {\n  width: 100px;\n}\nion-header ion-toolbar ion-button {\n  --color: var(--brand-color);\n  --padding-start: 0;\n  --padding-end: 0;\n}\nion-header ion-toolbar ion-button ion-icon {\n  font-size: 26px;\n}\nion-header .green-line {\n  height: 10px;\n  background: linear-gradient(0.25turn, #257C2D 10%, #2AB135 30%);\n}\n:host .addon-messages-unreadfrom {\n  color: var(--ion-color-primary);\n  background-color: transparent;\n  margin-top: 6px;\n  margin-left: auto;\n  margin-right: auto;\n}\n:host .addon-messages-unreadfrom ion-icon {\n  color: var(--ion-color-primary);\n  background-color: transparent;\n}\n:host .has-fab .scroll-content {\n  padding-bottom: 0;\n}\n:host ion-fab ion-fab-button::part(native) {\n  contain: unset;\n  overflow: visible;\n}\n:host ion-fab ion-fab-button .core-discussion-messages-badge {\n  position: absolute;\n  border-radius: 50%;\n  color: var(--addon-messages-discussion-badge-text);\n  background-color: var(--addon-messages-discussion-badge);\n  display: block;\n  line-height: 20px;\n  height: 20px;\n  width: 20px;\n  right: -6px;\n  top: -6px;\n}\n[dir=rtl] :host ion-fab ion-fab-button .core-discussion-messages-badge {\n  left: unset;\n  right: unset;\n  left: -6px;\n}\n:host ion-header ion-toolbar h1 {\n  display: flex;\n  align-items: center;\n  padding: 0;\n}\n:host ion-header ion-toolbar h1 .core-bar-button-image {\n  margin-right: 6px;\n}\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  :host ion-header ion-toolbar h1 .core-bar-button-image {\n    margin-right: unset;\n    -webkit-margin-end: 6px;\n    margin-inline-end: 6px;\n  }\n}\n:host ion-header ion-toolbar h1 core-format-text {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  flex-shrink: 1;\n}\n:host ion-header ion-toolbar h1 ion-icon {\n  margin-left: 6px;\n}\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  :host ion-header ion-toolbar h1 ion-icon {\n    margin-left: unset;\n    -webkit-margin-start: 6px;\n    margin-inline-start: 6px;\n  }\n}\n:host-context(.ios) ion-header ion-toolbar h1 {\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90aGVtZS9nbG9iYWxzLnNjc3MiLCJzcmMvdGhlbWUvZ2xvYmFscy5taXhpbnMuc2NzcyIsInNyYy90aGVtZS9nbG9iYWxzLm1peGlucy5pb25pYy5zY3NzIiwic3JjL3RoZW1lL2dsb2JhbHMuY3VzdG9tLnNjc3MiLCJzcmMvdGhlbWUvZ2xvYmFscy52YXJpYWJsZXMuc2NzcyIsInNyYy9hZGRvbnMvbWVzc2FnZXMvcGFnZXMvZGlzY3Vzc2lvbi9kaXNjdXNzaW9uLnNjc3MiLCJzcmMvdGhlbWUvY29tcG9uZW50cy9kaXNjdXNzaW9uLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7RUFBQTtBQ0FBOzs7O0VBQUE7QUNBQTs7Ozs7O0VBQUE7QUNBQTs7OztFQUFBO0FDQUE7Ozs7RUFBQTtBQXlGQTs7OztFQUFBO0FKM0VBO0VBQ0ksb0NBQUE7RUFDQSw2Q0FBQTtBS21CSjtBTGxCSTtFQUNFLHNDQUFBO0VBRUEsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUNBQUE7RUFDQSx5QkFBQTtBS21CTjtBTGpCTTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtBS21CUjtBTGxCUTtFQUNFLFlBQUE7QUtvQlY7QUxqQk07RUFDRSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUttQlI7QUxsQlE7RUFDRSxlQUFBO0FLb0JWO0FMZkk7RUFDRSxZQUFBO0VBQ0EsK0RBQUE7QUtpQk47QUMxREk7RUFDSSwyQ0FBQTtBRDZEUjtBQzNEUTtFQUNJLDRCQUFBO0FENkRaO0FDekRJO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSx5Q0FBQTtBRDJEUjtBQ3hESTtFQUNJLG1CQUFBO0VBQ0EsaUJBQUE7QUQwRFI7QUN0REk7RUFDSSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLHNCQUFBO0VBQ0EsOENBQUE7RUFDQSw2QkFBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSx5Q0FBQTtFQUNBLGtCQUFBO0VMTEosbUNBQUE7RUtRSSxpQkFBQTtBRDJEUjtBQ3pEUTtFQUNJLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBRDJEWjtBQ3hEUTtFQUNJLGVBQUE7QUQwRFo7QUN2RFE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBQ0EsNEJBQUE7QUR5RFo7QUN2RFk7RUFDSSxjQUFBO0VBQ0EscURBQUE7RUFDQSxTQUFBO0FEeURoQjtBQ3REWTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtFSjJQUixvQkkxUG9DO0VKMlBwQyxxQkkzUG9DO0VBQzVCLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBRHlEaEI7QUhrTVk7RUFDSTtJQUVRLG1CQUFBO0lBR0Esb0JBQUE7SUFHSiw2Qkl2UXdCO0lKd1F4Qiw0Qkl4UXdCO0lKeVF4QiwyQkl6UXdCO0lKMFF4QiwwQkkxUXdCO0VEcUUxQztBQUNGO0FDL0RRO0VBQ0ksOENBQUE7RUFDQSx1REFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0FEaUVaO0FDOURRO0VBQ0ksd0RBQUE7QURnRVo7QUM3RFE7RUFDSSxTQUFBO0VBQ0EsY0FBQTtBRCtEWjtBQzVEUTtFQUNJLG9CQUFBO0FEOERaO0FDN0RZO0VBQ0ksNEJBQUE7QUQrRGhCO0FDM0RRO0VBQ0ksV0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtBRDZEWjtBQ3pEUTtFQUNJLG1EQUFBO0VBQ0Esb0JBQUE7QUQyRFo7QUN6RFk7RUFDSSw2REFBQTtBRDJEaEI7QUN4RFk7RUo0WEEsWUFBQTtFQXBMSixnQkl0TXlDO0VKdU16QyxrQkl2TTZCO0VKdU9qQyxlSXZPNEI7RUp3TzVCLG1CSXhPdUM7QUQ2RDNDO0FId0ZRO0VBd09JLFdBQUE7QUc3VFo7QUgwSVk7RUFDSTtJQUVRLGtCQUFBO0lBR0EsbUJBQUE7SUFHSix5QkluTjZCO0lKb043Qix3QklwTjZCO0lKcU43Qix3QklyTmlCO0lKc05qQix1Qkl0TmlCO0VEMEVuQztBQUNGO0FDekVnQjtFQUNJLFdBQUE7RUFDQSxZQUFBO0FEMkVwQjtBQ3ZFWTtFSm9SQSxXSW5SNEI7RUo4TGhDLHFCSTdMeUM7RUFDakMsMERBQUE7QUR5RWhCO0FIaUVRO0VBMElJLFdBQUE7RUFDQSxZQUFBO0VBRUEsVUl6UjRCO0FEZ0Z4QztBSGlIWTtFQUNJO0lBS1EsbUJBQUE7SUFLSiwyQkkzTTZCO0lKNE03QiwwQkk1TTZCO0VEc0YvQztBQUNGO0FDbkZZO0VBQ0ksb0VBQUE7QURxRmhCO0FDakZRO0VBQ0kscURBQUE7RUp1UUEsVUl0UW9DO0VKaUx4QyxvQkloTCtCO0FEbUZ2QztBSDRDUTtFQTBJSSxXQUFBO0VBQ0EsWUFBQTtFQUdBLFdJOVFvQztBRHlGaEQ7QUg0Rlk7RUFDSTtJQUVRLGtCQUFBO0lBTUosNkJJN0xtQjtJSjhMbkIsNEJJOUxtQjtFRCtGckM7QUFDRjtBQzdGUTtFQUNJLCtEQUFBO0FEK0ZaO0FDNUZRO0VBQ0ksbUJBQUE7RUFDQSxvQkFBQTtFSndNUixhSXZNd0I7RUp3TXhCLGdCSXhNaUM7RUFDekIsOENBQUE7RUFDQSxvQkFBQTtBRCtGWjtBQzdGWTtFQUNJLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSw4QkFBQTtBRCtGaEI7QUMzRlE7RUFDSSxlQUFBO0FENkZaO0FDekZJOztFQUtJLGNBQUE7QUR3RlI7QUMzRlE7O0VBQ0ksZ0JBQUE7QUQ4Rlo7QUN0Rkk7RUFDSSxtQkFBQTtFQUNBLGFBQUE7QUR5RlI7QUwvUUE7Ozs7RUFBQTtBQ0FBOzs7O0VBQUE7QUNBQTs7Ozs7O0VBQUE7QUNBQTs7OztFQUFBO0FDQUE7Ozs7RUFBQTtBQXlGQTs7OztFQUFBO0FKM0VBO0VBQ0ksb0NBQUE7RUFDQSw2Q0FBQTtBS29TSjtBTG5TSTtFQUNFLHNDQUFBO0VBRUEsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUNBQUE7RUFDQSx5QkFBQTtBS29TTjtBTGxTTTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtBS29TUjtBTG5TUTtFQUNFLFlBQUE7QUtxU1Y7QUxsU007RUFDRSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUtvU1I7QUxuU1E7RUFDRSxlQUFBO0FLcVNWO0FMaFNJO0VBQ0UsWUFBQTtFQUNBLCtEQUFBO0FLa1NOO0FBelVJO0VBQ0ksK0JBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBNFVSO0FBM1VRO0VBQ0ksK0JBQUE7RUFDQSw2QkFBQTtBQTZVWjtBQXpVRztFQUNLLGlCQUFBO0FBMlVSO0FBdlVRO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0FBeVVaO0FBdFVRO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtEQUFBO0VBQ0Esd0RBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFSGtYQSxXR2pYd0I7RUhxWWhDLFNHclkwQjtBQXlVOUI7QUgvRlE7RUEwSUksV0FBQTtFQUNBLFlBQUE7RUFFQSxVR3ZYd0I7QUE4VXBDO0FBMVVJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtBQTZVUjtBQTNVUTtFSG1SQSxpQkdsUnFDO0FBNlU3QztBSHhEWTtFQUNJO0lBS1EsbUJBQUE7SUFLSix1QkdoU3lCO0lIaVN6QixzQkdqU3lCO0VBbVYzQztBQUNGO0FBalZRO0VBQ0ksZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQW1WWjtBQWhWUTtFSHVRQSxnQkd0UStCO0FBa1Z2QztBSHhFWTtFQUNJO0lBRVEsa0JBQUE7SUFNSix5QkduUm1CO0lIb1JuQix3QkdwUm1CO0VBd1ZyQztBQUNGO0FBblZJO0VBQ0ksdUJBQUE7QUFzVlIiLCJmaWxlIjoic3JjL2FkZG9ucy9tZXNzYWdlcy9wYWdlcy9kaXNjdXNzaW9uL2Rpc2N1c3Npb24uc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBBcHAgR2xvYmFsIHZhcmlhYmxlcyBTQ1NTXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBQbGFjZSBoZXJlIHRoZSBkaWZmZXJlbnQgZmlsZXMgeW91IHNob3VsZCBpbXBvcnQgdG8gdXNlIGdsb2JhbCB2YXJpYWJsZXMuXG4gKi9cblxuJGZvbnQtcGF0aDogXCIuLi9hc3NldHMvZm9udHNcIjtcbiRhc3NldHMtcGF0aDogXCIuLi9hc3NldHNcIjtcbkBpbXBvcnQgXCIuL2dsb2JhbHMubWl4aW5zLnNjc3NcIjtcbkBpbXBvcnQgXCIuL2dsb2JhbHMubWl4aW5zLmlvbmljLnNjc3NcIjtcbkBpbXBvcnQgXCIuL2dsb2JhbHMuY3VzdG9tLnNjc3NcIjtcbkBpbXBvcnQgXCIuL2dsb2JhbHMudmFyaWFibGVzLnNjc3NcIjtcblxuXG5pb24taGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1oZWFkZXItYmFja2dyb3VuZCk7XG4gICAgYm94LXNoYWRvdzogMCAzcHggNnB4IDAgdmFyKC0tdGFiLWJhci1zaGFkb3cpO1xuICAgIGlvbi10b29sYmFyIHtcbiAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taGVhZGVyLWJhY2tncm91bmQpO1xuICAgICAgLy9taW4taGVpZ2h0OiA5MHB4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBtYXJnaW4tdG9wOiB2YXIoLS1pb24tc2FmZS1hcmVhLXRvcCwwKTtcbiAgICAgIHBhZGRpbmctdG9wOjAhaW1wb3J0YW50O1xuICBcbiAgICAgIGlvbi10aXRsZSB7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzNnB4O1xuICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgIGltZ3tcbiAgICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlvbi1idXR0b24ge1xuICAgICAgICAtLWNvbG9yOiB2YXIoLS1icmFuZC1jb2xvcik7XG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogMDtcbiAgICAgICAgLS1wYWRkaW5nLWVuZDogMDtcbiAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjZweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgXG4gICAgLmdyZWVuLWxpbmV7XG4gICAgICBoZWlnaHQ6IDEwcHg7XG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMC4yNXR1cm4sICMyNTdDMkQgMTAlLCAjMkFCMTM1IDMwJSlcbiAgICB9XG4gIH1cbiAgIiwiLypcbiAqIEFwcCBjdXN0b20gbWl4aW5zIGZvciBTQ1NTXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBQbGFjZSBoZXJlIG91ciBjdXN0b20gbWl4aW5zLlxuICovXG5cbiBAbWl4aW4gY29yZS1mb2N1cygpIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAmOjphZnRlciB7XG4gICAgICAgIEBpbmNsdWRlIHBvc2l0aW9uKDAsIDAsIDAsIDApO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgIEBpbmNsdWRlIGNvcmUtZm9jdXMtc3R5bGUoKTtcbiAgICB9XG4gfVxuXG4gQG1peGluIGNvcmUtZm9jdXMtc3R5bGUoKSB7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIHZhcigtLWExMXktZm9jdXMtd2lkdGgpIDFweCB2YXIoLS1hMTF5LWZvY3VzLWNvbG9yKTtcbiAgICAvLyBUaGlja2VyIG9wdGlvbjpcbiAgICAvLyBib3JkZXI6IHZhcigtLWExMXktZm9jdXMtd2lkdGgpIHNvbGlkIHZhcigtLWExMXktZm9jdXMtY29sb3IpO1xufVxuXG5AbWl4aW4gY29yZS10cmFuc2l0aW9uKCR3aGVyZTogYWxsLCAkdGltZTogNTAwbXMpIHtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246ICR3aGVyZSAkdGltZSBlYXNlLWluLW91dDtcbiAgICAtbW96LXRyYW5zaXRpb246ICR3aGVyZSAkdGltZSBlYXNlLWluLW91dDtcbiAgICAtbXMtdHJhbnNpdGlvbjogJHdoZXJlICR0aW1lIGVhc2UtaW4tb3V0O1xuICAgIC1vLXRyYW5zaXRpb246ICR3aGVyZSAkdGltZSBlYXNlLWluLW91dDtcbiAgICB0cmFuc2l0aW9uOiAkd2hlcmUgJHRpbWUgZWFzZS1pbi1vdXQ7XG59XG5cbkBtaXhpbiBwdXNoLWFycm93LWNvbG9yKCRjb2xvcjogZGVkZWRlLCAkZmxpcC1ydGw6IGZhbHNlKSB7XG4gICAgJHN2ZzogXCI8c3ZnJTIweG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyUyMHZpZXdCb3g9JzAlMjAwJTIwMTIlMjAyMCc+PHBhdGglMjBkPSdNMiwyMGwtMi0ybDgtOEwwLDJsMi0ybDEwLDEwTDIsMjB6JyUyMGZpbGw9JyUyMyN7JGNvbG9yfScvPjwvc3ZnPlwiO1xuICAgIEBpZiAkZmxpcC1ydGwgIT0gdHJ1ZSB7XG4gICAgICAgIEBpbmNsdWRlIG11bHRpLWRpcigpIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0Zi04LCN7JHN2Z31cIik7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIHtcbiAgICAgICAgJGZsaXBwZWQtc3ZnOiBcIjxzdmclMjB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTIwdmlld0JveD0nMCUyMDAlMjAxMiUyMDIwJz48cGF0aCUyMHRyYW5zZm9ybT0ndHJhbnNsYXRlKDIwLCUyMDApJTIwc2NhbGUoLTEsJTIwMSknJTIwZD0nTTIsMjBsLTItMmw4LThMMCwybDItMmwxMCwxMEwyLDIweiclMjBmaWxsPSclMjMjeyRjb2xvcn0nLz48L3N2Zz5cIjtcblxuICAgICAgICBAaW5jbHVkZSBsdHIgKCkge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmLTgsI3skc3ZnfVwiKTtcbiAgICAgICAgfVxuICAgICAgICBAaW5jbHVkZSBydGwoKSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGYtOCwjeyRmbGlwcGVkLXN2Z31cIik7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBtaXhpbiBib3JkZXItc3RhcnQoJHB4LCAkdHlwZTogbnVsbCwgJGNvbG9yOiBudWxsKSB7XG4gICAgQGluY2x1ZGUgbHRyKCkge1xuICAgICAgICBib3JkZXItbGVmdDogJHB4ICR0eXBlICRjb2xvcjtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBydGwoKSB7XG4gICAgICAgIGJvcmRlci1yaWdodDogJHB4ICR0eXBlICRjb2xvcjtcbiAgICB9XG59XG5cblxuQG1peGluIGJvcmRlci1lbmQoJHB4LCAkdHlwZTogbnVsbCwgJGNvbG9yOiBudWxsKSB7XG4gICAgQGluY2x1ZGUgbHRyKCkge1xuICAgICAgICBib3JkZXItcmlnaHQ6ICRweCAkdHlwZSAkY29sb3I7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgcnRsKCkge1xuICAgICAgICBib3JkZXItbGVmdDogJHB4ICR0eXBlICRjb2xvcjtcbiAgICB9XG59XG5cbkBtaXhpbiBzYWZlLWFyZWEtYm9yZGVyLXN0YXJ0KCRweCwgJHR5cGUsICRjb2xvcikge1xuICAgICRzYWZlLWFyZWEtcG9zaXRpb246IGNhbGMoY29uc3RhbnQoc2FmZS1hcmVhLWluc2V0LWxlZnQpICsgI3skcHh9KTtcbiAgICAkc2FmZS1hcmVhLXBvc2l0aW9uLWVudjogY2FsYyhlbnYoc2FmZS1hcmVhLWluc2V0LWxlZnQpICsgI3skcHh9KTtcblxuICAgIEBpbmNsdWRlIGJvcmRlci1zdGFydCgkcHgsICR0eXBlLCAkY29sb3IpO1xuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG4gICAgICAgIEBpbmNsdWRlIGJvcmRlci1zdGFydCgkc2FmZS1hcmVhLXBvc2l0aW9uLCAkdHlwZSwgJGNvbG9yKTtcbiAgICAgICAgQGluY2x1ZGUgYm9yZGVyLXN0YXJ0KCRzYWZlLWFyZWEtcG9zaXRpb24tZW52LCAkdHlwZSwgJGNvbG9yKTtcbiAgICB9XG59XG5cbkBtaXhpbiBzYWZlLWFyZWEtYm9yZGVyLWVuZCgkcHgsICR0eXBlLCAkY29sb3IpIHtcbiAgICAkc2FmZS1hcmVhLXBvc2l0aW9uOiBjYWxjKGNvbnN0YW50KHNhZmUtYXJlYS1pbnNldC1yaWdodCkgKyAjeyRweH0pO1xuICAgICRzYWZlLWFyZWEtcG9zaXRpb24tZW52OiBjYWxjKGVudihzYWZlLWFyZWEtaW5zZXQtcmlnaHQpICsgI3skcHh9KTtcblxuICAgIEBpbmNsdWRlIGJvcmRlci1lbmQoJHB4LCAkdHlwZSwgJGNvbG9yKTtcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICAgICAgICBAaW5jbHVkZSBib3JkZXItZW5kKCRzYWZlLWFyZWEtcG9zaXRpb24sICR0eXBlLCAkY29sb3IpO1xuICAgICAgICBAaW5jbHVkZSBib3JkZXItZW5kKCRzYWZlLWFyZWEtcG9zaXRpb24tZW52LCAkdHlwZSwgJGNvbG9yKTtcbiAgICB9XG59XG5cbkBtaXhpbiBzYWZlLWFyZWEtbWFyZ2luLWhvcml6b250YWwoJHN0YXJ0LCAkZW5kOiAkc3RhcnQpIHtcbiAgICAkc2FmZS1hcmVhLWVuZDogbnVsbDtcbiAgICAkc2FmZS1hcmVhLXN0YXJ0OiBudWxsO1xuICAgICRzYWZlLWFyZWEtc3RhcnQtZW52OiBudWxsO1xuICAgICRzYWZlLWFyZWEtZW5kLWVudjogbnVsbDtcblxuICAgIEBpZiAoJGVuZCkge1xuICAgICAgICAkc2FmZS1hcmVhLWVuZDogY2FsYyhjb25zdGFudChzYWZlLWFyZWEtaW5zZXQtcmlnaHQpICsgI3skZW5kfSk7XG4gICAgICAgICRzYWZlLWFyZWEtZW5kLWVudjogY2FsYyhlbnYoc2FmZS1hcmVhLWluc2V0LXJpZ2h0KSArICN7JGVuZH0pO1xuICAgIH1cbiAgICBAaWYgKCRzdGFydCkge1xuICAgICAgICAkc2FmZS1hcmVhLXN0YXJ0OiBjYWxjKGNvbnN0YW50KHNhZmUtYXJlYS1pbnNldC1sZWZ0KSArICN7JHN0YXJ0fSk7XG4gICAgICAgICRzYWZlLWFyZWEtc3RhcnQtZW52OiBjYWxjKGVudihzYWZlLWFyZWEtaW5zZXQtbGVmdCkgKyAjeyRzdGFydH0pO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIG1hcmdpbi1ob3Jpem9udGFsKCRzdGFydCwgJGVuZCk7XG5cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICAgICAgICBAaW5jbHVkZSBtYXJnaW4taG9yaXpvbnRhbCgkc2FmZS1hcmVhLXN0YXJ0LCAkc2FmZS1hcmVhLWVuZCk7XG4gICAgICAgIEBpbmNsdWRlIG1hcmdpbi1ob3Jpem9udGFsKCRzYWZlLWFyZWEtc3RhcnQtZW52LCAkc2FmZS1hcmVhLWVuZC1lbnYpO1xuICAgIH1cbn1cblxuQG1peGluIHNhZmUtYXJlYS1wYWRkaW5nLXN0YXJ0KCRzdGFydCwgJGVuZCkge1xuICAgICRzYWZlLWFyZWEtc3RhcnQ6IGNhbGMoY29uc3RhbnQoc2FmZS1hcmVhLWluc2V0LWxlZnQpICsgI3skc3RhcnR9KTtcbiAgICAkc2FmZS1hcmVhLXN0YXJ0LWVudjogY2FsYyhlbnYoc2FmZS1hcmVhLWluc2V0LWxlZnQpICsgI3skc3RhcnR9KTtcblxuICAgIEBpbmNsdWRlIHBhZGRpbmctaG9yaXpvbnRhbCgkc3RhcnQsICRlbmQpO1xuXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcbiAgICAgICAgQGluY2x1ZGUgcGFkZGluZy1ob3Jpem9udGFsKCRzYWZlLWFyZWEtc3RhcnQsICRlbmQpO1xuICAgICAgICBAaW5jbHVkZSBwYWRkaW5nLWhvcml6b250YWwoJHNhZmUtYXJlYS1zdGFydC1lbnYsICRlbmQpO1xuICAgIH1cbn1cblxuQG1peGluIHNhZmUtYXJlYS1wYWRkaW5nLWVuZCgkc3RhcnQsICRlbmQpIHtcbiAgICAkc2FmZS1hcmVhLWVuZDogY2FsYyhjb25zdGFudChzYWZlLWFyZWEtaW5zZXQtcmlnaHQpICsgI3skZW5kfSk7XG4gICAgJHNhZmUtYXJlYS1lbmQtZW52OiBjYWxjKGVudihzYWZlLWFyZWEtaW5zZXQtcmlnaHQpICsgI3skZW5kfSk7XG5cbiAgICBAaW5jbHVkZSBwYWRkaW5nLWhvcml6b250YWwoJHN0YXJ0LCAkZW5kKTtcblxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG4gICAgICAgIEBpbmNsdWRlIHBhZGRpbmctaG9yaXpvbnRhbCgkc3RhcnQsICRzYWZlLWFyZWEtZW5kKTtcbiAgICAgICAgQGluY2x1ZGUgcGFkZGluZy1ob3Jpem9udGFsKCRzdGFydCwgJHNhZmUtYXJlYS1lbmQtZW52KTtcbiAgICB9XG59XG5cbkBtaXhpbiBzYWZlLWFyZWEtcG9zaXRpb24oJHRvcDogbnVsbCwgJGVuZDogbnVsbCwgJGJvdHRvbTogbnVsbCwgJHN0YXJ0OiBudWxsKSB7XG4gICAgQGluY2x1ZGUgcG9zaXRpb24taG9yaXpvbnRhbCgkc3RhcnQsICRlbmQpO1xuICAgIEBpbmNsdWRlIHNhZmUtcG9zaXRpb24taG9yaXpvbnRhbCgkc3RhcnQsICRlbmQpO1xuICAgIHRvcDogJHRvcDtcbiAgICBib3R0b206ICRib3R0b207XG59XG5cbkBtaXhpbiBjb3JlLWhlYWRpbmdzKCkge1xuICAgIGgxIHtcbiAgICAgICAgZm9udC1zaXplOiAyNnB4O1xuICAgIH1cbiAgICBoMiwgLml0ZW0taGVhZGluZyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICB9XG4gICAgaDMge1xuICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgfVxuICAgIGg0IHtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgIH1cbiAgICBoNSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICB9XG4gICAgaDYge1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgfVxufVxuXG5AbWl4aW4gY29yZS1hcy1pdGVtcygpIHtcbiAgICAuaXRlbS1tZC5pdGVtLWJsb2NrID4gLml0ZW0taW5uZXIge1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJGxpc3QtbWQtYm9yZGVyLWNvbG9yO1xuICAgIH1cblxuICAgIC5pdGVtLWlvcy5pdGVtLWJsb2NrID4gLml0ZW0taW5uZXIge1xuICAgICAgICBib3JkZXItYm90dG9tOiAkaGFpcmxpbmVzLXdpZHRoIHNvbGlkICRsaXN0LWlvcy1ib3JkZXItY29sb3I7XG4gICAgfVxuXG4gICAgJjpsYXN0LWNoaWxkIC5pdGVtID4gLml0ZW0taW5uZXIge1xuICAgICAgICBib3JkZXItYm90dG9tOiAwO1xuICAgIH1cbn1cblxuQG1peGluIGNvcmUtaXRlbXMoKSB7XG4gICAgJi5pdGVtLW1kLml0ZW0tYmxvY2sgPiAuaXRlbS1pbm5lciB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkbGlzdC1tZC1ib3JkZXItY29sb3I7XG4gICAgfVxuXG4gICAgJi5pdGVtLWlvcy5pdGVtLWJsb2NrID4gLml0ZW0taW5uZXIge1xuICAgICAgICBib3JkZXItYm90dG9tOiAkaGFpcmxpbmVzLXdpZHRoIHNvbGlkICRsaXN0LWlvcy1ib3JkZXItY29sb3I7XG4gICAgfVxuXG4gICAgJi5pdGVtLWJsb2NrOmxhc3QtY2hpbGQgPiAuaXRlbS1pbm5lciB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDA7XG4gICAgfVxufVxuXG5AbWl4aW4gZGFya21vZGUoKSB7XG4gICAgJHJvb3Q6ICN7Jn07XG5cbiAgICBAYXQtcm9vdCBib2R5LmRhcmsge1xuICAgICAgICAjeyRyb290fSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1peGluIGhvcml6b250YWxfc2Nyb2xsX2l0ZW0oJHdpZHRoLCAkbWluLXdpZHRoLCAkbWF4LXdpZHRoKSB7XG4gICAgZmxleDogMCAwICR3aWR0aDtcbiAgICBtaW4td2lkdGg6ICRtaW4td2lkdGg7XG4gICAgbWF4LXdpZHRoOiAkbWF4LXdpZHRoO1xuICAgIGFsaWduLXNlbGY6IHN0cmV0Y2g7XG4gICAgZGlzcGxheTogYmxvY2s7XG5cbiAgICBpb24tY2FyZCB7XG4gICAgICAgIC0tdmVydGljYWwtbWFyZ2luOiAxMHB4O1xuICAgICAgICAtLWhvcml6b250YWwtbWFyZ2luOiAxMHB4O1xuXG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSB2YXIoLS12ZXJ0aWNhbC1tYXJnaW4pIC0gdmFyKC0tdmVydGljYWwtbWFyZ2luKSk7XG4gICAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gdmFyKC0tdmVydGljYWwtbWFyZ2luKSAtIHZhcigtLXZlcnRpY2FsLW1hcmdpbikpO1xuICAgICAgICBtYXJnaW46IHZhcigtLXZlcnRpY2FsLW1hcmdpbikgdmFyKC0taG9yaXpvbnRhbC1tYXJnaW4pO1xuXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAzNjBweCkge1xuICAgICAgICAgICAgLS1ob3Jpem9udGFsLW1hcmdpbjogNnB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmlvbi10ZXh0LXdyYXAgaW9uLWxhYmVsIHtcbiAgICAgICAgLml0ZW0taGVhZGluZywgaDIsIHAge1xuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG4vLyBDb2xvciBtaXhpbnMuXG5AZnVuY3Rpb24gZ2V0X2JyaWdodG5lc3MoJGNvbG9yKSB7XG4gICAgQHJldHVybiAocmVkKCRjb2xvcikgKyBncmVlbigkY29sb3IpICsgYmx1ZSgkY29sb3IpKSAvIDM7XG59XG5cbkBmdW5jdGlvbiBnZXRfY29udHJhc3RfY29sb3IoJGNvbG9yKSB7XG4gICAgJGJyaWdodG5lc3M6IGdldF9icmlnaHRuZXNzKCRjb2xvcik7XG5cbiAgICBAcmV0dXJuIGlmKCRicmlnaHRuZXNzIDwgMTI3LCB3aGl0ZSwgYmxhY2spO1xufVxuIiwiLypcbiAqIEltcG9ydGVkIGlvbmljIG1peGlucyBmb3IgU0NTU1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogUGxhY2UgaGVyZSBvdXIgY3VzdG9tIG1peGlucy5cbiAqIEV4dHJhY3RlZCBmcm9tIGlvbmljLm1peGlucy5zY3NzXG4gKiBodHRwczovL2dpdGh1Yi5jb20vaW9uaWMtdGVhbS9pb25pYy1mcmFtZXdvcmsvYmxvYi9tYXN0ZXIvY29yZS9zcmMvdGhlbWVzL2lvbmljLm1peGlucy5zY3NzXG4gKi9cblxuLy8gUmVzcG9uc2l2ZSBNaXhpbnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBDcmVhdGVzIGEgZml4ZWQgd2lkdGggZm9yIHRoZSBncmlkIGJhc2VkIG9uIHRoZSBzY3JlZW4gc2l6ZVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AbWl4aW4gbWFrZS1ncmlkLXdpZHRocygkd2lkdGhzOiAkZ3JpZC13aWR0aHMsICRicmVha3BvaW50czogJHNjcmVlbi1icmVha3BvaW50cykge1xuICBAZWFjaCAkYnJlYWtwb2ludCwgJHdpZHRoIGluICR3aWR0aHMge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoJGJyZWFrcG9pbnQsICRicmVha3BvaW50cykge1xuICAgICAgd2lkdGg6ICR3aWR0aDtcbiAgICB9XG4gIH1cblxuICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cbi8vIEFkZHMgcGFkZGluZyB0byB0aGUgZWxlbWVudCBiYXNlZCBvbiBicmVha3BvaW50c1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AbWl4aW4gbWFrZS1icmVha3BvaW50LXBhZGRpbmcoJHBhZGRpbmdzKSB7XG4gIEBlYWNoICRicmVha3BvaW50IGluIG1hcC1rZXlzKCRwYWRkaW5ncykge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoJGJyZWFrcG9pbnQpIHtcbiAgICAgICRwYWRkaW5nOiBtYXAtZ2V0KCRwYWRkaW5ncywgJGJyZWFrcG9pbnQpO1xuXG4gICAgICBAaW5jbHVkZSBwYWRkaW5nKCRwYWRkaW5nKTtcbiAgICB9XG4gIH1cbn1cblxuLy8gR2V0cyB0aGUgYWN0aXZlIGNvbG9yJ3MgY3NzIHZhcmlhYmxlIGZyb20gYSB2YXJpYXRpb24uIEFscGhhIGlzIG9wdGlvbmFsLlxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEV4YW1wbGUgdXNhZ2U6XG4vLyBjdXJyZW50LWNvbG9yKGJhc2UpID0+IHZhcigtLWlvbi1jb2xvci1iYXNlKVxuLy8gY3VycmVudC1jb2xvcihjb250cmFzdCwgMC4xKSA9PiByZ2JhKHZhcigtLWlvbi1jb2xvci1jb250cmFzdC1yZ2IpLCAwLjEpXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuQGZ1bmN0aW9uIGN1cnJlbnQtY29sb3IoJHZhcmlhdGlvbiwgJGFscGhhOiBudWxsKSB7XG4gIEBpZiAkYWxwaGEgPT0gbnVsbCB7XG4gICAgQHJldHVybiB2YXIoLS1pb24tY29sb3ItI3skdmFyaWF0aW9ufSk7XG4gIH0gQGVsc2Uge1xuICAgIEByZXR1cm4gcmdiYSh2YXIoLS1pb24tY29sb3ItI3skdmFyaWF0aW9ufS1yZ2IpLCAjeyRhbHBoYX0pO1xuICB9XG59XG5cbi8vIE1peGVzIGEgY29sb3Igd2l0aCBibGFjayB0byBjcmVhdGUgaXRzIHNoYWRlLlxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkBmdW5jdGlvbiBnZXQtY29sb3Itc2hhZGUoJGNvbG9yKSB7XG4gIEByZXR1cm4gbWl4KCMwMDAsICRjb2xvciwgMTIlKTtcbn1cblxuLy8gTWl4ZXMgYSBjb2xvciB3aXRoIHdoaXRlIHRvIGNyZWF0ZSBpdHMgdGludC5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AZnVuY3Rpb24gZ2V0LWNvbG9yLXRpbnQoJGNvbG9yKSB7XG4gIEByZXR1cm4gbWl4KCNmZmYsICRjb2xvciwgMTAlKTtcbn1cblxuLy8gQ29udmVydHMgYSBjb2xvciB0byBhIGNvbW1hIHNlcGFyYXRlZCByZ2IuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuQGZ1bmN0aW9uIGNvbG9yLXRvLXJnYi1saXN0KCRjb2xvcikge1xuICBAcmV0dXJuICN7cmVkKCRjb2xvcil9LCN7Z3JlZW4oJGNvbG9yKX0sI3tibHVlKCRjb2xvcil9O1xufVxuXG5cbiAvLyBJb25pYyBDb2xvcnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBHZW5lcmF0ZXMgdGhlIGNvbG9yIGNsYXNzZXMgYW5kIHZhcmlhYmxlcyBiYXNlZCBvbiB0aGVcbi8vIGNvbG9ycyBtYXBcblxuQG1peGluIGdlbmVyYXRlLWNvbG9yKCRjb2xvci1uYW1lLCAkY29sb3JzKSB7XG4gICAgJGJhc2U6IG1hcC1nZXQoJGNvbG9ycywgJGNvbG9yLW5hbWUpO1xuXG4gICAgJGNvbnRyYXN0OiBnZXRfY29udHJhc3RfY29sb3IoJGJhc2UpO1xuICAgICRzaGFkZTogZ2V0LWNvbG9yLXNoYWRlKCRiYXNlKTtcbiAgICAkdGludDogZ2V0LWNvbG9yLXRpbnQoJGJhc2UpO1xuXG4gICAgLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX06IHZhcigtLSN7JGNvbG9yLW5hbWV9LCAjeyRiYXNlfSk7XG4gICAgLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX0tYmFzZTogdmFyKC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9KTtcbiAgICAtLWlvbi1jb2xvci0jeyRjb2xvci1uYW1lfS1yZ2I6ICN7Y29sb3ItdG8tcmdiLWxpc3QoJGJhc2UpfTtcbiAgICAtLWlvbi1jb2xvci0jeyRjb2xvci1uYW1lfS1jb250cmFzdDogI3skY29udHJhc3R9O1xuICAgIC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9LWNvbnRyYXN0LXJnYjogI3tjb2xvci10by1yZ2ItbGlzdCgkY29udHJhc3QpfTtcbiAgICAtLWlvbi1jb2xvci0jeyRjb2xvci1uYW1lfS1zaGFkZTogI3skc2hhZGV9O1xuICAgIC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9LXRpbnQ6ICN7JHRpbnR9O1xuXG4gICAgLmlvbi1jb2xvci0jeyRjb2xvci1uYW1lfSB7XG4gICAgICAgIC0taW9uLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX0pO1xuICAgICAgICAtLWlvbi1jb2xvci1iYXNlOiB2YXIoLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX0tYmFzZSk7XG4gICAgICAgIC0taW9uLWNvbG9yLXJnYjogdmFyKC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9LXJnYik7XG4gICAgICAgIC0taW9uLWNvbG9yLWNvbnRyYXN0OiB2YXIoLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX0tY29udHJhc3QpO1xuICAgICAgICAtLWlvbi1jb2xvci1jb250cmFzdC1yZ2I6IHZhcigtLWlvbi1jb2xvci0jeyRjb2xvci1uYW1lfS1jb250cmFzdC1yZ2IpO1xuICAgICAgICAtLWlvbi1jb2xvci1zaGFkZTogdmFyKC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9LXNoYWRlKTtcbiAgICAgICAgLS1pb24tY29sb3ItdGludDogdmFyKC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9LXRpbnQpO1xuICAgIH1cbn1cblxuQG1peGluIGlucHV0LWNvdmVyKCkge1xuICAgIEBpbmNsdWRlIHBvc2l0aW9uKDAsIG51bGwsIG51bGwsIDApO1xuICAgIEBpbmNsdWRlIG1hcmdpbigwKTtcblxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcblxuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcblxuICAgIGJvcmRlcjogMDtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgIG91dGxpbmU6IG5vbmU7XG5cbiAgICAmOjotbW96LWZvY3VzLWlubmVyIHtcbiAgICAgICAgYm9yZGVyOiAwO1xuICAgIH1cbn1cblxuQG1peGluIHRleHQtaW5oZXJpdCgpIHtcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XG4gICAgZm9udC1zdHlsZTogaW5oZXJpdDtcbiAgICBmb250LXdlaWdodDogaW5oZXJpdDtcbiAgICBsZXR0ZXItc3BhY2luZzogaW5oZXJpdDtcbiAgICB0ZXh0LWRlY29yYXRpb246IGluaGVyaXQ7XG4gICAgdGV4dC1pbmRlbnQ6IGluaGVyaXQ7XG4gICAgdGV4dC1vdmVyZmxvdzogaW5oZXJpdDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogaW5oZXJpdDtcbiAgICB0ZXh0LWFsaWduOiBpbmhlcml0O1xuICAgIHdoaXRlLXNwYWNlOiBpbmhlcml0O1xuICAgIGNvbG9yOiBpbmhlcml0O1xufVxuXG5AbWl4aW4gYnV0dG9uLXN0YXRlKCkge1xuICAgIEBpbmNsdWRlIHBvc2l0aW9uKDAsIDAsIDAsIDApO1xuXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuXG4gICAgY29udGVudDogXCJcIjtcblxuICAgIG9wYWNpdHk6IDA7XG59XG5cbi8vIEZvbnQgc21vb3RoaW5nXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5AbWl4aW4gZm9udC1zbW9vdGhpbmcoKSB7XG4gICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbn1cblxuLy8gR2V0IHRoZSBrZXkgZnJvbSBhIG1hcCBiYXNlZCBvbiB0aGUgaW5kZXhcbkBmdW5jdGlvbiBpbmRleC10by1rZXkoJG1hcCwgJGluZGV4KSB7XG4gICAgJGtleXM6IG1hcC1rZXlzKCRtYXApO1xuXG4gICAgQHJldHVybiBudGgoJGtleXMsICRpbmRleCk7XG59XG5cblxuLy8gQnJlYWtwb2ludCBNaXhpbnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyBCcmVha3BvaW50IHZpZXdwb3J0IHNpemVzIGFuZCBtZWRpYSBxdWVyaWVzLlxuLy9cbi8vIEJyZWFrcG9pbnRzIGFyZSBkZWZpbmVkIGFzIGEgbWFwIG9mIChuYW1lOiBtaW5pbXVtIHdpZHRoKSwgb3JkZXIgZnJvbSBzbWFsbCB0byBsYXJnZTpcbi8vXG4vLyAgICAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpXG4vL1xuLy8gVGhlIG1hcCBkZWZpbmVkIGluIHRoZSBgJHNjcmVlbi1icmVha3BvaW50c2AgZ2xvYmFsIHZhcmlhYmxlIGlzIHVzZWQgYXMgdGhlIGAkYnJlYWtwb2ludHNgIGFyZ3VtZW50IGJ5IGRlZmF1bHQuXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyBNaW5pbXVtIGJyZWFrcG9pbnQgd2lkdGguIE51bGwgZm9yIHRoZSBzbWFsbGVzdCAoZmlyc3QpIGJyZWFrcG9pbnQuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1taW4oc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICA1NzZweFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRzY3JlZW4tYnJlYWtwb2ludHMpIHtcbiAgICAkbWluOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJG5hbWUpO1xuXG4gICAgQHJldHVybiBpZigkbmFtZSAhPSBpbmRleC10by1rZXkoJGJyZWFrcG9pbnRzLCAxKSwgJG1pbiwgbnVsbCk7XG59XG5cbi8vIFJldHVybnMgYSBibGFuayBzdHJpbmcgaWYgc21hbGxlc3QgYnJlYWtwb2ludCwgb3RoZXJ3aXNlIHJldHVybnMgdGhlIG5hbWUgd2l0aCBhIGRhc2ggaW5mcm9udC5cbi8vIFVzZWZ1bCBmb3IgbWFraW5nIHJlc3BvbnNpdmUgdXRpbGl0aWVzLlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtaW5maXgoeHMsICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBcIlwiICAoUmV0dXJucyBhIGJsYW5rIHN0cmluZylcbi8vICAgID4+IGJyZWFrcG9pbnQtaW5maXgoc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBcIi1zbVwiXG5AZnVuY3Rpb24gYnJlYWtwb2ludC1pbmZpeCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkc2NyZWVuLWJyZWFrcG9pbnRzKSB7XG4gICAgQHJldHVybiBpZihicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKSA9PSBudWxsLCBcIlwiLCBcIi0jeyRuYW1lfVwiKTtcbn1cblxuLy8gTWVkaWEgb2YgYXQgbGVhc3QgdGhlIG1pbmltdW0gYnJlYWtwb2ludCB3aWR0aC4gTm8gcXVlcnkgZm9yIHRoZSBzbWFsbGVzdCBicmVha3BvaW50LlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50IGFuZCB3aWRlci5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LXVwKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRzY3JlZW4tYnJlYWtwb2ludHMpIHtcbiAgICAkbWluOiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgICBAaWYgJG1pbiB7XG4gICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2Uge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG5cbi8vIE5hbWUgb2YgdGhlIG5leHQgYnJlYWtwb2ludCwgb3IgbnVsbCBmb3IgdGhlIGxhc3QgYnJlYWtwb2ludC5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20pXG4vLyAgICBtZFxuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgbWRcbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSwgJGJyZWFrcG9pbnQtbmFtZXM6ICh4cyBzbSBtZCBsZyB4bCkpXG4vLyAgICBtZFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbmV4dCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkc2NyZWVuLWJyZWFrcG9pbnRzLCAkYnJlYWtwb2ludC1uYW1lczogbWFwLWtleXMoJGJyZWFrcG9pbnRzKSkge1xuICAgICRuOiBpbmRleCgkYnJlYWtwb2ludC1uYW1lcywgJG5hbWUpO1xuICAgIEByZXR1cm4gaWYoJG4gPCBsZW5ndGgoJGJyZWFrcG9pbnQtbmFtZXMpLCBudGgoJGJyZWFrcG9pbnQtbmFtZXMsICRuICsgMSksIG51bGwpO1xufVxuXG4vLyBNYXhpbXVtIGJyZWFrcG9pbnQgd2lkdGguIE51bGwgZm9yIHRoZSBzbWFsbGVzdCAoZmlyc3QpIGJyZWFrcG9pbnQuXG4vLyBUaGUgbWF4aW11bSB2YWx1ZSBpcyByZWR1Y2VkIGJ5IDAuMDJweCB0byB3b3JrIGFyb3VuZCB0aGUgbGltaXRhdGlvbnMgb2Zcbi8vIGBtaW4tYCBhbmQgYG1heC1gIHByZWZpeGVzIGFuZCB2aWV3cG9ydHMgd2l0aCBmcmFjdGlvbmFsIHdpZHRocy5cbi8vXG4vLyBTZWUgaHR0cHM6Ly93d3cudzMub3JnL1RSL21lZGlhcXVlcmllcy00LyNtcS1taW4tbWF4XG4vLyBVc2VzIDAuMDJweCByYXRoZXIgdGhhbiAwLjAxcHggdG8gd29yayBhcm91bmQgYSBjdXJyZW50IHJvdW5kaW5nIGJ1ZyBpbiBTYWZhcmkuXHQvLyBVc2VzIDAuMDJweCByYXRoZXIgdGhhbiAwLjAxcHggdG8gd29yayBhcm91bmQgYSBjdXJyZW50IHJvdW5kaW5nIGJ1ZyBpbiBTYWZhcmkuXG4vLyBTZWUgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE3ODI2MVx0Ly8gU2VlIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xNzgyNjFcbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW1heChtZCwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIDc2Ny45OHB4XG5AZnVuY3Rpb24gYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50czogJHNjcmVlbi1icmVha3BvaW50cykge1xuICAgICRtYXg6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkbmFtZSk7XG4gICAgQHJldHVybiBpZigkbWF4IGFuZCAkbWF4ID4gMCwgJG1heCAtIC4wMiwgbnVsbCk7XG59XG5cbi8vIE1lZGlhIG9mIGF0IG1vc3QgdGhlIG1heGltdW0gYnJlYWtwb2ludCB3aWR0aC4gTm8gcXVlcnkgZm9yIHRoZSBsYXJnZXN0IGJyZWFrcG9pbnQuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQgYW5kIG5hcnJvd2VyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkbmFtZSwgJGJyZWFrcG9pbnRzOiAkc2NyZWVuLWJyZWFrcG9pbnRzKSB7XG4gICAgJG1heDogYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50cyk7XG4gICAgQGlmICRtYXgge1xuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufVxuXG5cbi8vIFRleHQgRGlyZWN0aW9uIC0gbHRyIC8gcnRsXG4vL1xuLy8gQ1NTIGRlZmF1bHRzIHRvIHVzZSB0aGUgbHRyIGNzcywgYW5kIGFkZHMgW2Rpcj1ydGxdIHNlbGVjdG9yc1xuLy8gdG8gb3ZlcnJpZGUgbHRyIGRlZmF1bHRzLlxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5AbWl4aW4gbXVsdGktZGlyKCkge1xuICAgIEBjb250ZW50O1xuXG4gICAgLy8gJHJvb3Q6ICN7Jn07XG4gICAgLy8gQGF0LXJvb3QgW2Rpcl0ge1xuICAgIC8vICAgI3skcm9vdH0ge1xuICAgIC8vICAgICBAY29udGVudDtcbiAgICAvLyAgIH1cbiAgICAvLyB9XG59XG5cbkBtaXhpbiBydGwoKSB7XG4gICAgJHJvb3Q6ICN7Jn07XG5cbiAgICBAYXQtcm9vdCBbZGlyPXJ0bF0ge1xuICAgICAgICAjeyRyb290fSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1peGluIGx0cigpIHtcbiAgICBAY29udGVudDtcbn1cblxuXG4vLyBTVkcgQmFja2dyb3VuZCBJbWFnZSBNaXhpblxuLy8gQHBhcmFtIHtzdHJpbmd9ICRzdmdcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkBtaXhpbiBzdmctYmFja2dyb3VuZC1pbWFnZSgkc3ZnLCAkZmxpcC1ydGw6IGZhbHNlKSB7XG4gICAgJHVybDogdXJsLWVuY29kZSgkc3ZnKTtcbiAgICAkdmlld0JveDogc3RyLXNwbGl0KHN0ci1leHRyYWN0KCRzdmcsIFwidmlld0JveD0nXCIsIFwiJ1wiKSwgXCIgXCIpO1xuXG4gICAgQGlmICRmbGlwLXJ0bCAhPSB0cnVlIG9yICR2aWV3Qm94ID09IG51bGwge1xuICAgICAgICBAaW5jbHVkZSBtdWx0aS1kaXIoKSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGYtOCwjeyR1cmx9XCIpO1xuICAgICAgICB9XG4gICAgfSBAZWxzZSB7XG4gICAgICAgICR0cmFuc2Zvcm06IFwidHJhbnNmb3JtPSd0cmFuc2xhdGUoI3tudGgoJHZpZXdCb3gsIDMpfSwgMCkgc2NhbGUoLTEsIDEpJ1wiO1xuICAgICAgICAkZmxpcHBlZC11cmw6ICRzdmc7XG4gICAgICAgICRmbGlwcGVkLXVybDogc3RyLXJlcGxhY2UoJGZsaXBwZWQtdXJsLCBcIjxwYXRoXCIsIFwiPHBhdGggI3skdHJhbnNmb3JtfVwiKTtcbiAgICAgICAgJGZsaXBwZWQtdXJsOiBzdHItcmVwbGFjZSgkZmxpcHBlZC11cmwsIFwiPGxpbmVcIiwgXCI8bGluZSAjeyR0cmFuc2Zvcm19XCIpO1xuICAgICAgICAkZmxpcHBlZC11cmw6IHN0ci1yZXBsYWNlKCRmbGlwcGVkLXVybCwgXCI8cG9seWdvblwiLCBcIjxwb2x5Z29uICN7JHRyYW5zZm9ybX1cIik7XG4gICAgICAgICRmbGlwcGVkLXVybDogdXJsLWVuY29kZSgkZmxpcHBlZC11cmwpO1xuXG4gICAgICAgIEBpbmNsdWRlIGx0ciAoKSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGYtOCwjeyR1cmx9XCIpO1xuICAgICAgICB9XG4gICAgICAgIEBpbmNsdWRlIHJ0bCgpIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0Zi04LCN7JGZsaXBwZWQtdXJsfVwiKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gQWRkIHByb3BlcnR5IGhvcml6b250YWxcbi8vIEBwYXJhbSB7c3RyaW5nfSAkc3RhcnRcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZW5kXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AbWl4aW4gcHJvcGVydHktaG9yaXpvbnRhbCgkcHJvcCwgJHN0YXJ0LCAkZW5kOiAkc3RhcnQpIHtcbiAgICBAaWYgJHN0YXJ0ID09IDAgYW5kICRlbmQgPT0gMCB7XG4gICAgICAgICN7JHByb3B9LWxlZnQ6ICRzdGFydDtcbiAgICAgICAgI3skcHJvcH0tcmlnaHQ6ICRlbmQ7XG5cbiAgICB9IEBlbHNlIHtcbiAgICAgICAgI3skcHJvcH0tbGVmdDogJHN0YXJ0O1xuICAgICAgICAjeyRwcm9wfS1yaWdodDogJGVuZDtcblxuICAgICAgICBAYXQtcm9vdCB7XG4gICAgICAgICAgICBAc3VwcG9ydHMgKChtYXJnaW4taW5saW5lLXN0YXJ0OiAwKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6IDApKSB7XG4gICAgICAgICAgICAgICAgJiB7XG4gICAgICAgICAgICAgICAgICAgIEBpZiAkc3RhcnQgIT0gbnVsbCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAjeyRwcm9wfS1sZWZ0OiB1bnNldDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBAaWYgJGVuZCAhPSBudWxsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICN7JHByb3B9LXJpZ2h0OiB1bnNldDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtI3skcHJvcH0tc3RhcnQ6ICRzdGFydDtcbiAgICAgICAgICAgICAgICAgICAgI3skcHJvcH0taW5saW5lLXN0YXJ0OiAkc3RhcnQ7XG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtI3skcHJvcH0tZW5kOiAkZW5kO1xuICAgICAgICAgICAgICAgICAgICAjeyRwcm9wfS1pbmxpbmUtZW5kOiAkZW5kO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gQWRkIHByb3BlcnR5IGZvciBhbGwgZGlyZWN0aW9uc1xuLy8gQHBhcmFtIHtzdHJpbmd9ICRwcm9wXG4vLyBAcGFyYW0ge3N0cmluZ30gJHRvcFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRlbmRcbi8vIEBwYXJhbSB7c3RyaW5nfSAkYm90dG9tXG4vLyBAcGFyYW0ge3N0cmluZ30gJHN0YXJ0XG4vLyBAcGFyYW0ge2Jvb2xlYW59ICRjb250ZW50IGluY2x1ZGUgY29udGVudCBvciB1c2UgZGVmYXVsdFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuQG1peGluIHByb3BlcnR5KCRwcm9wLCAkdG9wLCAkZW5kOiAkdG9wLCAkYm90dG9tOiAkdG9wLCAkc3RhcnQ6ICRlbmQpIHtcbiAgICBAaW5jbHVkZSBwcm9wZXJ0eS1ob3Jpem9udGFsKCRwcm9wLCAkc3RhcnQsICRlbmQpO1xuICAgICN7JHByb3B9LXRvcDogJHRvcDtcbiAgICAjeyRwcm9wfS1ib3R0b206ICRib3R0b207XG59XG5cbi8vIEFkZCBwYWRkaW5nIGhvcml6b250YWxcbi8vIEBwYXJhbSB7c3RyaW5nfSAkc3RhcnRcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZW5kXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AbWl4aW4gcGFkZGluZy1ob3Jpem9udGFsKCRzdGFydCwgJGVuZDogJHN0YXJ0KSB7XG4gICAgQGluY2x1ZGUgcHJvcGVydHktaG9yaXpvbnRhbChwYWRkaW5nLCAkc3RhcnQsICRlbmQpO1xufVxuXG4vLyBBZGQgcGFkZGluZyBmb3IgYWxsIGRpcmVjdGlvbnNcbi8vIEBwYXJhbSB7c3RyaW5nfSAkdG9wXG4vLyBAcGFyYW0ge3N0cmluZ30gJGVuZFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRib3R0b21cbi8vIEBwYXJhbSB7c3RyaW5nfSAkc3RhcnRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkBtaXhpbiBwYWRkaW5nKCR0b3AsICRlbmQ6ICR0b3AsICRib3R0b206ICR0b3AsICRzdGFydDogJGVuZCkge1xuICAgIEBpbmNsdWRlIHByb3BlcnR5KHBhZGRpbmcsICR0b3AsICRlbmQsICRib3R0b20sICRzdGFydCk7XG59XG5cbi8vIEFkZCBtYXJnaW4gaG9yaXpvbnRhbFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRzdGFydFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRlbmRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkBtaXhpbiBtYXJnaW4taG9yaXpvbnRhbCgkc3RhcnQsICRlbmQ6ICRzdGFydCkge1xuICAgIEBpbmNsdWRlIHByb3BlcnR5LWhvcml6b250YWwobWFyZ2luLCAkc3RhcnQsICRlbmQpO1xufVxuXG4vLyBBZGQgbWFyZ2luIGZvciBhbGwgZGlyZWN0aW9uc1xuLy8gQHBhcmFtIHtzdHJpbmd9ICR0b3Bcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZW5kXG4vLyBAcGFyYW0ge3N0cmluZ30gJGJvdHRvbVxuLy8gQHBhcmFtIHtzdHJpbmd9ICRzdGFydFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuQG1peGluIG1hcmdpbigkdG9wLCAkZW5kOiAkdG9wLCAkYm90dG9tOiAkdG9wLCAkc3RhcnQ6ICRlbmQpIHtcbiAgICBAaW5jbHVkZSBwcm9wZXJ0eShtYXJnaW4sICR0b3AsICRlbmQsICRib3R0b20sICRzdGFydCk7XG59XG5cbi8vIEFkZCBwb3NpdGlvbiBob3Jpem9udGFsXG4vLyBAcGFyYW0ge3N0cmluZ30gJHN0YXJ0IC0gYW1vdW50IHRvIHBvc2l0aW9uIHN0YXJ0XG4vLyBAcGFyYW0ge3N0cmluZ30gJGVuZCAtIGFtb3VudCB0byBsZWZ0OiAwOyBlbmRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkBtaXhpbiBwb3NpdGlvbi1ob3Jpem9udGFsKCRzdGFydDogbnVsbCwgJGVuZDogbnVsbCkge1xuICAgIEBpZiAkc3RhcnQgPT0gJGVuZCB7XG4gICAgICAgIEBpbmNsdWRlIG11bHRpLWRpcigpIHtcbiAgICAgICAgICAgIGxlZnQ6ICRzdGFydDtcbiAgICAgICAgICAgIHJpZ2h0OiAkZW5kO1xuICAgICAgICB9XG4gICAgfSBAZWxzZSB7XG4gICAgICAgIEBpbmNsdWRlIGx0cigpIHtcbiAgICAgICAgICAgIGxlZnQ6ICRzdGFydDtcbiAgICAgICAgICAgIHJpZ2h0OiAkZW5kO1xuICAgICAgICB9XG4gICAgICAgIEBpbmNsdWRlIHJ0bCgpIHtcbiAgICAgICAgICAgIGxlZnQ6IHVuc2V0O1xuICAgICAgICAgICAgcmlnaHQ6IHVuc2V0O1xuXG4gICAgICAgICAgICBsZWZ0OiAkZW5kO1xuICAgICAgICAgICAgcmlnaHQ6ICRzdGFydDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gQWRkIHBvc2l0aW9uIGZvciBhbGwgZGlyZWN0aW9uc1xuLy8gQHBhcmFtIHtzdHJpbmd9ICR0b3Bcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZW5kXG4vLyBAcGFyYW0ge3N0cmluZ30gJGJvdHRvbVxuLy8gQHBhcmFtIHtzdHJpbmd9ICRzdGFydFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuQG1peGluIHBvc2l0aW9uKCR0b3A6IG51bGwsICRlbmQ6IG51bGwsICRib3R0b206IG51bGwsICRzdGFydDogbnVsbCkge1xuICAgIEBpbmNsdWRlIHBvc2l0aW9uLWhvcml6b250YWwoJHN0YXJ0LCAkZW5kKTtcbiAgICB0b3A6ICR0b3A7XG4gICAgYm90dG9tOiAkYm90dG9tO1xufVxuXG4vLyBBZGQgYm9yZGVyIGZvciBhbGwgZGlyZWN0aW9uc1xuLy8gQHBhcmFtIHtzdHJpbmd9ICR0b3Bcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZW5kXG4vLyBAcGFyYW0ge3N0cmluZ30gJGJvdHRvbVxuLy8gQHBhcmFtIHtzdHJpbmd9ICRzdGFydFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuQG1peGluIGJvcmRlcigkdG9wLCAkZW5kOiAkdG9wLCAkYm90dG9tOiAkdG9wLCAkc3RhcnQ6ICRlbmQpIHtcbiAgICBAaW5jbHVkZSBwcm9wZXJ0eShib3JkZXIsICR0b3AsICRlbmQsICRib3R0b20sICRzdGFydCk7XG59XG5cbi8vIEFkZCBib3JkZXIgcmFkaXVzIGZvciBhbGwgZGlyZWN0aW9uc1xuLy8gQHBhcmFtIHtzdHJpbmd9ICR0b3Atc3RhcnRcbi8vIEBwYXJhbSB7c3RyaW5nfSAkdG9wLWVuZFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRib3R0b20tZW5kXG4vLyBAcGFyYW0ge3N0cmluZ30gJGJvdHRvbS1zdGFydFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuQG1peGluIGJvcmRlci1yYWRpdXMoJHRvcC1zdGFydCwgJHRvcC1lbmQ6ICR0b3Atc3RhcnQsICRib3R0b20tZW5kOiAkdG9wLXN0YXJ0LCAkYm90dG9tLXN0YXJ0OiAkdG9wLWVuZCkge1xuICAgIEBpZiAkdG9wLXN0YXJ0ID09ICR0b3AtZW5kIGFuZCAkdG9wLXN0YXJ0ID09ICRib3R0b20tZW5kIGFuZCAkdG9wLXN0YXJ0ID09ICRib3R0b20tc3RhcnQge1xuICAgICAgICBAaW5jbHVkZSBtdWx0aS1kaXIoKSB7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAkdG9wLXN0YXJ0O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSB7XG4gICAgICAgIEBpbmNsdWRlIGx0cigpIHtcbiAgICAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6ICR0b3Atc3RhcnQ7XG4gICAgICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogJHRvcC1lbmQ7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogJGJvdHRvbS1lbmQ7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAkYm90dG9tLXN0YXJ0O1xuICAgICAgICB9XG5cbiAgICAgICAgQGluY2x1ZGUgcnRsKCkge1xuICAgICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogJHRvcC1lbmQ7XG4gICAgICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogJHRvcC1zdGFydDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAkYm90dG9tLXN0YXJ0O1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogJGJvdHRvbS1lbmQ7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vIEFkZCBkaXJlY3Rpb24gZm9yIGFsbCBkaXJlY3Rpb25zXG4vLyBAcGFyYW0ge3N0cmluZ30gJGRpciAtIERpcmVjdGlvbiBvbiBMVFJcbkBtaXhpbiBkaXJlY3Rpb24oJGRpcikge1xuICAgICRvdGhlci1kaXI6IG51bGw7XG5cbiAgICBAaWYgJGRpciA9PSBsdHIge1xuICAgICAgICAkb3RoZXItZGlyOiBydGw7XG4gICAgfSBAZWxzZSB7XG4gICAgICAgICRvdGhlci1kaXI6IGx0cjtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBsdHIoKSB7XG4gICAgICAgIGRpcmVjdGlvbjogJGRpcjtcbiAgICB9XG4gICAgQGluY2x1ZGUgcnRsKCkge1xuICAgICAgICBkaXJlY3Rpb246ICRvdGhlci1kaXI7XG4gICAgfVxufVxuXG4vLyBBZGQgZmxvYXQgZm9yIGFsbCBkaXJlY3Rpb25zXG4vLyBAcGFyYW0ge3N0cmluZ30gJHNpZGVcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZGVjb3JhdG9yIC0gIWltcG9ydGFudFxuQG1peGluIGZsb2F0KCRzaWRlLCAkZGVjb3JhdG9yOiBudWxsKSB7XG4gICAgQGlmICRzaWRlID09IHN0YXJ0IHtcbiAgICAgICAgQGluY2x1ZGUgbHRyKCkge1xuICAgICAgICAgICAgZmxvYXQ6IGxlZnQgJGRlY29yYXRvcjtcbiAgICAgICAgfVxuICAgICAgICBAaW5jbHVkZSBydGwoKSB7XG4gICAgICAgICAgICBmbG9hdDogcmlnaHQgJGRlY29yYXRvcjtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJHNpZGUgPT0gZW5kIHtcbiAgICAgICAgQGluY2x1ZGUgbHRyKCkge1xuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0ICRkZWNvcmF0b3I7XG4gICAgICAgIH1cbiAgICAgICAgQGluY2x1ZGUgcnRsKCkge1xuICAgICAgICAgICAgZmxvYXQ6IGxlZnQgJGRlY29yYXRvcjtcbiAgICAgICAgfVxuICAgIH0gQGVsc2Uge1xuICAgICAgICBAaW5jbHVkZSBtdWx0aS1kaXIoKSB7XG4gICAgICAgICAgICBmbG9hdDogJHNpZGUgJGRlY29yYXRvcjtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1peGluIGJhY2tncm91bmQtcG9zaXRpb24oJGhvcml6b250YWwsICRob3Jpem9udGFsLWFtb3VudDogbnVsbCwgJHZlcnRpY2FsOiBudWxsLCAkdmVydGljYWwtYW1vdW50OiBudWxsKSB7XG4gICAgQGlmICRob3Jpem9udGFsID09IHN0YXJ0IG9yICRob3Jpem9udGFsID09IGVuZCB7XG4gICAgICAgICRob3Jpem9udGFsLWx0cjogbnVsbDtcbiAgICAgICAgJGhvcml6b250YWwtcnRsOiBudWxsO1xuICAgICAgICBAaWYgJGhvcml6b250YWwgPT0gc3RhcnQge1xuICAgICAgICAgICAgJGhvcml6b250YWwtbHRyOiBsZWZ0O1xuICAgICAgICAgICAgJGhvcml6b250YWwtcnRsOiByaWdodDtcbiAgICAgICAgfSBAZWxzZSB7XG4gICAgICAgICAgICAkaG9yaXpvbnRhbC1sdHI6IHJpZ2h0O1xuICAgICAgICAgICAgJGhvcml6b250YWwtcnRsOiBsZWZ0O1xuICAgICAgICB9XG5cbiAgICAgICAgQGluY2x1ZGUgbHRyKCkge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogJGhvcml6b250YWwtbHRyICRob3Jpem9udGFsLWFtb3VudCAkdmVydGljYWwgJHZlcnRpY2FsLWFtb3VudDtcbiAgICAgICAgfVxuICAgICAgICBAaW5jbHVkZSBydGwoKSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAkaG9yaXpvbnRhbC1ydGwgJGhvcml6b250YWwtYW1vdW50ICR2ZXJ0aWNhbCAkdmVydGljYWwtYW1vdW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSB7XG4gICAgICAgIEBpbmNsdWRlIG11bHRpLWRpcigpIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246ICRob3Jpem9udGFsICRob3Jpem9udGFsLWFtb3VudCAkdmVydGljYWwgJHZlcnRpY2FsLWFtb3VudDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1peGluIHRyYW5zZm9ybS1vcmlnaW4oJHgtYXhpcywgJHktYXhpczogbnVsbCkge1xuICAgIEBpZiAkeC1heGlzID09IHN0YXJ0IHtcbiAgICAgICAgQGluY2x1ZGUgbHRyKCkge1xuICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCAkeS1heGlzO1xuICAgICAgICB9XG4gICAgICAgIEBpbmNsdWRlIHJ0bCgpIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0ICR5LWF4aXM7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICR4LWF4aXMgPT0gZW5kIHtcbiAgICAgICAgQGluY2x1ZGUgbHRyKCkge1xuICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgJHktYXhpcztcbiAgICAgICAgfVxuICAgICAgICBAaW5jbHVkZSBydGwoKSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0ICR5LWF4aXM7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICR4LWF4aXMgPT0gbGVmdCBvciAkeC1heGlzID09IHJpZ2h0IHtcbiAgICAgICAgQGluY2x1ZGUgbXVsdGktZGlyKCkge1xuICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogJHgtYXhpcyAkeS1heGlzO1xuICAgICAgICB9XG4gICAgfSBAZWxzZSB7XG4gICAgICAgIEBpbmNsdWRlIGx0cigpIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46ICR4LWF4aXMgJHktYXhpcztcbiAgICAgICAgfVxuICAgICAgICBAaW5jbHVkZSBydGwoKSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjYWxjKDEwMCUgLSAjeyR4LWF4aXN9KSAkeS1heGlzO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyBBZGQgdHJhbnNmb3JtIGZvciBhbGwgZGlyZWN0aW9uc1xuLy8gQHBhcmFtIHtzdHJpbmd9ICR0cmFuc2Zvcm1zIC0gY29tbWEgc2VwYXJhdGVkIGxpc3Qgb2YgdHJhbnNmb3Jtc1xuQG1peGluIHRyYW5zZm9ybSgkdHJhbnNmb3Jtcy4uLikge1xuICAgICRleHRyYTogbnVsbDtcblxuICAgICR4OiBudWxsO1xuICAgICRsdHItdHJhbnNsYXRlOiBudWxsO1xuICAgICRydGwtdHJhbnNsYXRlOiBudWxsO1xuXG4gICAgQGVhY2ggJHRyYW5zZm9ybSBpbiAkdHJhbnNmb3JtcyB7XG4gICAgICAgIEBpZiAoc3RyLWluZGV4KCR0cmFuc2Zvcm0sIHRyYW5zbGF0ZTNkKSkge1xuICAgICAgICAgICAgJHRyYW5zZm9ybTogc3RyLXJlcGxhY2UoJHRyYW5zZm9ybSwgJ3RyYW5zbGF0ZTNkKCcpO1xuICAgICAgICAgICAgJHRyYW5zZm9ybTogc3RyLXJlcGxhY2UoJHRyYW5zZm9ybSwgJyknKTtcblxuICAgICAgICAgICAgJGNvb3JkaW5hdGVzOiBzdHItc3BsaXQoJHRyYW5zZm9ybSwgJywnKTtcblxuICAgICAgICAgICAgJHg6IG50aCgkY29vcmRpbmF0ZXMsIDEpO1xuICAgICAgICAgICAgJHk6IG50aCgkY29vcmRpbmF0ZXMsIDIpO1xuICAgICAgICAgICAgJHo6IG50aCgkY29vcmRpbmF0ZXMsIDMpO1xuXG4gICAgICAgICAgICAkbHRyLXRyYW5zbGF0ZTogdHJhbnNsYXRlM2QoJHgsICR5LCAkeik7XG4gICAgICAgICAgICAkcnRsLXRyYW5zbGF0ZTogdHJhbnNsYXRlM2QoY2FsYygtMSAqICN7JHh9KSwgJHksICR6KTtcbiAgICAgICAgfSBAZWxzZSB7XG4gICAgICAgICAgICBAaWYgJGV4dHJhID09IG51bGwge1xuICAgICAgICAgICAgICAgICRleHRyYTogJHRyYW5zZm9ybTtcbiAgICAgICAgICAgIH0gQGVsc2Uge1xuICAgICAgICAgICAgICAgICRleHRyYTogJGV4dHJhICR0cmFuc2Zvcm07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBAaWYgJHggPT0gJzAnIG9yICR4ID09IG51bGwge1xuICAgICAgICBAaW5jbHVkZSBtdWx0aS1kaXIoKSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06ICRsdHItdHJhbnNsYXRlICRleHRyYTtcbiAgICAgICAgfVxuICAgIH0gQGVsc2Uge1xuICAgICAgICBAaW5jbHVkZSBsdHIoKSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06ICRsdHItdHJhbnNsYXRlICRleHRyYTtcbiAgICAgICAgfVxuXG4gICAgICAgIEBpbmNsdWRlIHJ0bCgpIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogJHJ0bC10cmFuc2xhdGUgJGV4dHJhO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiLypcbiAqIEFwcCBDdXN0b20gQXBwIHZhcmlhYmxlcyBTQ1NTXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBQbGFjZSBoZXJlIGFsbCBjdXN0b20gYXBwIHZhcmlhYmxlcy5cbiAqL1xuIiwiLypcbiAqIEFwcCBHbG9iYWwgdmFyaWFibGVzIFNDU1NcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIFBsYWNlIGhlcmUgYWxsIGdsb2JhbCB2YXJpYWJsZXMuXG4gKi9cblxuJGJsYWNrOiAgICAgICAgICAgIzI4MjgyOCAhZGVmYXVsdDsgLy8gSGVhZGluZ3MsIHN0YW5kYXJkIHRleHQuXG4kZ3JheS1kYXJrZXI6ICAgICAjNjg2NTY2ICFkZWZhdWx0O1xuJGdyYXktZGFyazogICAgICAgIzllOWU5ZSAhZGVmYXVsdDtcbiRncmF5OiAgICAgICAgICAgICNkZGRkZGQgIWRlZmF1bHQ7XG4kZ3JheS1saWdodDogICAgICAjZTllOWU5ICFkZWZhdWx0OyAvLyBCYWNrZ3JvdW5kLlxuJGdyYXktbGlnaHRlcjogICAgI2Y1ZjVmNSAhZGVmYXVsdDtcbiR3aGl0ZTogICAgICAgICAgICNmZmZmZmYgIWRlZmF1bHQ7IC8vIEJhY2tncm91bmQsIHJldmVyc2VkIHRleHQuXG5cbiRibHVlOiAgICAgICAgICAgICMwMDY0ZDIgIWRlZmF1bHQ7IC8vIExpbmssIGJhY2tncm91bmQuXG4kYmx1ZS1saWdodDogICAgICBtaXgoJGJsdWUsIHdoaXRlLCAyMCUpICFkZWZhdWx0OyAvLyBCYWNrZ3JvdW5kLlxuJGJsdWUtZGFyazogICAgICAgZGFya2VuKCRibHVlLCAxMCUpICFkZWZhdWx0O1xuXG4kZ3JlZW46ICAgICAgICAgICAjNWU4MTAwICFkZWZhdWx0OyAvLyBBY2NlbnQuXG4kZ3JlZW4tbGlnaHQ6ICAgICBtaXgoJGdyZWVuLCB3aGl0ZSwgMjAlKSAhZGVmYXVsdDtcbiRncmVlbi1kYXJrOiAgICAgIGRhcmtlbigkZ3JlZW4sIDEwJSkgIWRlZmF1bHQ7XG5cbiRyZWQ6ICAgICAgICAgICAgICNjYjNkNGQgIWRlZmF1bHQ7XG4kcmVkLWxpZ2h0OiAgICAgICBtaXgoJHJlZCwgd2hpdGUsIDIwJSkgIWRlZmF1bHQ7XG4kcmVkLWRhcms6ICAgICAgICBkYXJrZW4oJHJlZCwgMTAlKSAhZGVmYXVsdDtcblxuJHllbGxvdzogICAgICAgICAgI2ZiYWQxYSAhZGVmYXVsdDsgLy8gQWNjZW50IChuZXZlciB0ZXh0KS5cbiR5ZWxsb3ctbGlnaHQ6ICAgIG1peCgkeWVsbG93LCB3aGl0ZSwgMjAlKSAhZGVmYXVsdDtcbiR5ZWxsb3ctZGFyazogICAgIG1peCgkeWVsbG93LCBibGFjaywgNDAlKSAhZGVmYXVsdDtcblxuLy8gJGJyYW5kLWNvbG9yOiAgICAjZjk4MDEyICFkZWZhdWx0OyNlMDAwNmRcbiRicmFuZC1jb2xvcjogICAgI2UwMDA2ZCAhZGVmYXVsdDtcblxuXG4kdGV4dC1jb2xvcjogICAgICAgICAgICAgICAkYmxhY2sgIWRlZmF1bHQ7XG4kdGV4dC1jb2xvci1yZ2I6ICAgICAgICAgICBjb2xvci10by1yZ2ItbGlzdCgkdGV4dC1jb2xvcikgIWRlZmF1bHQ7XG4kdGV4dC1jb2xvci1kYXJrOiAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kdGV4dC1jb2xvci1kYXJrLXJnYjogICAgICBjb2xvci10by1yZ2ItbGlzdCgkdGV4dC1jb2xvci1kYXJrKSAhZGVmYXVsdDtcblxuJGJhY2tncm91bmQtY29sb3I6ICAgICAgICAgICRncmF5LWxpZ2h0ICFkZWZhdWx0O1xuJGJhY2tncm91bmQtY29sb3ItcmdiOiAgICAgIGNvbG9yLXRvLXJnYi1saXN0KCRiYWNrZ3JvdW5kLWNvbG9yKSAhZGVmYXVsdDtcbiRiYWNrZ3JvdW5kLWNvbG9yLWRhcms6ICAgICBtaXgoI2ZmZmZmZiwgIzAwMDAwMCwgMTAlKSAhZGVmYXVsdDsgLy8gIzFhMWExYVxuJGJhY2tncm91bmQtY29sb3ItZGFyay1yZ2I6IGNvbG9yLXRvLXJnYi1saXN0KCRiYWNrZ3JvdW5kLWNvbG9yLWRhcmspICFkZWZhdWx0O1xuXG4kaW9uLWl0ZW0tYmFja2dyb3VuZDogICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kaW9uLWl0ZW0tYmFja2dyb3VuZC1yZ2I6ICBjb2xvci10by1yZ2ItbGlzdCgkaW9uLWl0ZW0tYmFja2dyb3VuZCkgIWRlZmF1bHQ7XG4kaW9uLWl0ZW0tYmFja2dyb3VuZC1kYXJrOiBtaXgoI2ZmZmZmZiwgIzAwMDAwMCwgMjAlKSAhZGVmYXVsdDsgLy8gIzMzMzMzM1xuJGlvbi1pdGVtLWJhY2tncm91bmQtZGFyay1yZ2I6IGNvbG9yLXRvLXJnYi1saXN0KCRpb24taXRlbS1iYWNrZ3JvdW5kLWRhcmspICFkZWZhdWx0O1xuXG4kcHJpbWFyeTogICAgJGJyYW5kLWNvbG9yICFkZWZhdWx0O1xuJGRhbmdlcjogICAgICRyZWQgIWRlZmF1bHQ7XG4kd2FybmluZzogICAgJHllbGxvdyAhZGVmYXVsdDtcbiRzdWNjZXNzOiAgICAkZ3JlZW4gIWRlZmF1bHQ7XG4kaW5mbzogICAgICAgJGJsdWUgIWRlZmF1bHQ7XG4kbGlnaHQ6ICAgICAgJGdyYXktbGlnaHRlciAhZGVmYXVsdDtcbiRtZWRpdW06ICAgICAkZ3JheS1saWdodCAhZGVmYXVsdDtcbiRkYXJrOiAgICAgICAkYmxhY2sgIWRlZmF1bHQ7XG5cbiRjb2xvcnM6ICAoXG4gICAgcHJpbWFyeTogJHByaW1hcnksXG4gICAgc3VjY2VzczogJHN1Y2Nlc3MsXG4gICAgd2FybmluZzogJHdhcm5pbmcsXG4gICAgZGFuZ2VyOiAgJGRhbmdlcixcbiAgICBpbmZvOiAkaW5mbyxcbiAgICBsaWdodDogJGxpZ2h0LFxuICAgIG1lZGl1bTogJG1lZGl1bSxcbiAgICBkYXJrOiAkZGFya1xuKSAhZGVmYXVsdDtcblxuJHByaW1hcnktZGFyazogICAgJGJyYW5kLWNvbG9yICFkZWZhdWx0O1xuJGRhbmdlci1kYXJrOiAgICAgbWl4KCRyZWQsIHdoaXRlLCA0MCUpICFkZWZhdWx0O1xuJHdhcm5pbmctZGFyazogICAgbWl4KCR5ZWxsb3csIHdoaXRlLCA0MCUpICFkZWZhdWx0O1xuJHN1Y2Nlc3MtZGFyazogICAgbWl4KCRncmVlbiwgd2hpdGUsIDQwJSkgIWRlZmF1bHQ7XG4kaW5mby1kYXJrOiAgICAgICBtaXgoJGJsdWUsIHdoaXRlLCA0MCUpICFkZWZhdWx0O1xuJGxpZ2h0LWRhcms6ICAgICAgJGRhcmsgIWRlZmF1bHQ7XG4kbWVkaXVtLWRhcms6ICAgICAkZ3JheS1saWdodCAhZGVmYXVsdDtcbiRkYXJrLWRhcms6ICAgICAgICRsaWdodCAhZGVmYXVsdDtcblxuJGNvbG9ycy1kYXJrOiAgKFxuICAgIHByaW1hcnk6ICRwcmltYXJ5LWRhcmssXG4gICAgc3VjY2VzczogJHN1Y2Nlc3MtZGFyayxcbiAgICB3YXJuaW5nOiAkd2FybmluZy1kYXJrLFxuICAgIGRhbmdlcjogJGRhbmdlci1kYXJrLFxuICAgIGluZm86ICRpbmZvLWRhcmssXG4gICAgbGlnaHQ6ICRsaWdodC1kYXJrLFxuICAgIG1lZGl1bTogJG1lZGl1bS1kYXJrLFxuICAgIGRhcms6ICRkYXJrLWRhcmssXG4pICFkZWZhdWx0O1xuXG4vKipcbiAqIExheW91dCBCcmVha3BvaW50c1xuICpcbiAqIGh0dHBzOi8vaW9uaWNmcmFtZXdvcmsuY29tL2RvY3MvbGF5b3V0L2dyaWQjZGVmYXVsdC1icmVha3BvaW50c1xuICovXG5cbi8vIFRoZSBtaW5pbXVtIGRpbWVuc2lvbnMgYXQgd2hpY2ggeW91ciBsYXlvdXQgd2lsbCBjaGFuZ2UsXG4vLyBhZGFwdGluZyB0byBkaWZmZXJlbnQgc2NyZWVuIHNpemVzLCBmb3IgdXNlIGluIG1lZGlhIHF1ZXJpZXNcbiRzY3JlZW4tYnJlYWtwb2ludHM6IChcbiAgICB4czogMCxcbiAgICBzbTogNTc2cHgsXG4gICAgbWQ6IDc2OHB4LFxuICAgIGxnOiA5OTJweCxcbiAgICB0YWJsZXQ6IDk5MnB4LFxuICAgIHhsOiAxMjAwcHhcbikgIWRlZmF1bHQ7XG5cbiRjb3JlLWNvdXJzZS1pbWFnZS1iYWNrZ3JvdW5kOiAjODFlY2VjLCAjNzRiOWZmLCAjYTI5YmZlLCAjZGZlNmU5LCAjMDBiODk0LCAjMDk4NGUzLCAjYjJiZWMzLCAjZmRjYjZlLCAjZmQ3OWE4LCAjNmM1Y2U3ICFkZWZhdWx0O1xuJGNvcmUtZGQtcXVlc3Rpb24tY29sb3JzOiAjRkZGRkZGLCAjQjBDNERFLCAjRENEQ0RDLCAjRDhCRkQ4LCAjODdDRUZBLCAjREFBNTIwLCAjRkZENzAwLCAjRjBFNjhDICFkZWZhdWx0O1xuJGNvcmUtdGV4dC1oaWdodGxpZ2h0LWJhY2tncm91bmQtY29sb3I6IGxpZ2h0ZW4oJGJsdWUsIDQwJSkgIWRlZmF1bHQ7XG5cbiRjb3JlLWZpeGVkLXVybDogZmFsc2UgIWRlZmF1bHQ7XG4kY29yZS1kYXNoYm9hcmQtbG9nbzogZmFsc2UgIWRlZmF1bHQ7XG4kY29yZS1hbHdheXMtc2hvdy1tYWluLW1lbnU6IGZhbHNlICFkZWZhdWx0O1xuJGNvcmUtZm9ybWF0LXRleHQtbmV2ZXItc2hvcnRlbjogZmFsc2UgIWRlZmF1bHQ7XG5cbiRjb3JlLXNob3ctY291cnNlaW1hZ2Utb24tY291cnNlOiBmYWxzZSAhZGVmYXVsdDtcbiRjb3JlLWhpZGUtcHJvZ3Jlc3Mtb24tY291cnNlOiBmYWxzZSAhZGVmYXVsdDtcbiRjb3JlLWhpZGUtcHJvZ3Jlc3Mtb24tc2VjdGlvbi1zZWxlY3RvcjogZmFsc2UgIWRlZmF1bHQ7XG5cbiRjb3JlLWNvdXJzZS1oaWRlLXRodW1iLW9uLWNhcmRzOiBmYWxzZSAhZGVmYXVsdDtcbiRjb3JlLWNvdXJzZS10aHVtYi1vbi1jYXJkcy1iYWNrZ3JvdW5kOiBudWxsICFkZWZhdWx0O1xuJGNvcmUtY291cnNlLWhpZGUtcHJvZ3Jlc3Mtb24tY2FyZHM6IGZhbHNlICFkZWZhdWx0O1xuXG4vLyBDb25maWd1cmF0aW9uIG9wdGlvbnMgZm9yIGxvZ2luIHBhZ2UuXG4kY29yZS1sb2dpbi1idXR0b24tb3V0bGluZTogZmFsc2UgIWRlZmF1bHQ7XG4kY29yZS1sb2dpbi1idXR0b24tb3V0bGluZS1kYXJrOiAkY29yZS1sb2dpbi1idXR0b24tb3V0bGluZSAhZGVmYXVsdDtcbiRjb3JlLWxvZ2luLWxvYWRpbmctY29sb3I6IGZhbHNlICFkZWZhdWx0O1xuJGNvcmUtbG9naW4tbG9hZGluZy1jb2xvci1kYXJrOiAkdGV4dC1jb2xvci1kYXJrICFkZWZhdWx0O1xuJGNvcmUtbG9naW4taGlkZS1mb3Jnb3QtcGFzc3dvcmQ6IGZhbHNlICFkZWZhdWx0O1xuJGNvcmUtbG9naW4taGlkZS1uZWVkLWhlbHA6IGZhbHNlICFkZWZhdWx0O1xuXG4vLyBDb25maWd1cmF0aW9uIG9wdGlvbnMgZm9yIG1vcmUgcGFnZS5cbiRjb3JlLW1vcmUtaGlkZS1zaXRlaW5mbzogZmFsc2UgIWRlZmF1bHQ7XG4kY29yZS1tb3JlLWhpZGUtc2l0ZW5hbWU6IGZhbHNlICFkZWZhdWx0O1xuJGNvcmUtbW9yZS1oaWRlLXNpdGV1cmw6IGZhbHNlICFkZWZhdWx0O1xuIiwiQGltcG9ydCBcIn50aGVtZS9jb21wb25lbnRzL2Rpc2N1c3Npb24uc2Nzc1wiO1xuQGltcG9ydCBcIn50aGVtZS9nbG9iYWxzLnNjc3NcIjtcblxuOmhvc3Qge1xuXG4gICAgLmFkZG9uLW1lc3NhZ2VzLXVucmVhZGZyb20ge1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgbWFyZ2luLXRvcDogNnB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgIC5oYXMtZmFiIC5zY3JvbGwtY29udGVudCB7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xuICAgIH1cblxuICAgIGlvbi1mYWIgaW9uLWZhYi1idXR0b24ge1xuICAgICAgICAmOjpwYXJ0KG5hdGl2ZSkge1xuICAgICAgICAgICAgY29udGFpbjogdW5zZXQ7XG4gICAgICAgICAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb3JlLWRpc2N1c3Npb24tbWVzc2FnZXMtYmFkZ2Uge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWFkZG9uLW1lc3NhZ2VzLWRpc2N1c3Npb24tYmFkZ2UtdGV4dCk7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hZGRvbi1tZXNzYWdlcy1kaXNjdXNzaW9uLWJhZGdlKTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgICAgIEBpbmNsdWRlIHBvc2l0aW9uKC02cHgsIC02cHgsIG51bGwsIG51bGwpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaW9uLWhlYWRlciBpb24tdG9vbGJhciBoMSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmc6IDA7XG5cbiAgICAgICAgLmNvcmUtYmFyLWJ1dHRvbi1pbWFnZSB7XG4gICAgICAgICAgICBAaW5jbHVkZSBtYXJnaW4taG9yaXpvbnRhbChudWxsLCA2cHgpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29yZS1mb3JtYXQtdGV4dCB7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgICAgZmxleC1zaHJpbms6IDE7XG4gICAgICAgIH1cblxuICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICBAaW5jbHVkZSBtYXJnaW4taG9yaXpvbnRhbCg2cHgsIG51bGwpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG46aG9zdC1jb250ZXh0KC5pb3MpIHtcbiAgICBpb24taGVhZGVyIGlvbi10b29sYmFyIGgxIHtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgfVxufVxuIiwiQGltcG9ydCBcIn50aGVtZS9nbG9iYWxzLnNjc3NcIjtcblxuOmhvc3Qge1xuICAgIGlvbi1jb250ZW50IHtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLWFsdGVybmF0aXZlKTtcblxuICAgICAgICAmOjpwYXJ0KHNjcm9sbCkge1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDAgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5hZGRvbi1tZXNzYWdlcy1kaXNjdXNzaW9uLWNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLWFsdGVybmF0aXZlKTtcbiAgICB9XG5cbiAgICAuYWRkb24tbWVzc2FnZXMtZGF0ZSB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgIH1cblxuICAgIC8vIE1lc3NhZ2UgaXRlbS5cbiAgICBpb24taXRlbS5hZGRvbi1tZXNzYWdlIHtcbiAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgIHBhZGRpbmc6IDAgOHB4IDAgOHB4O1xuICAgICAgICBtYXJnaW46IDEwcHggOHB4IDAgOHB4O1xuICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWFkZG9uLW1lc3NhZ2VzLW1lc3NhZ2UtYmcpO1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kKTtcbiAgICAgICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgbWF4LXdpZHRoOiA5MCU7XG4gICAgICAgIC0tbWluLWhlaWdodDogdmFyKC0tYTExeS1taW4tdGFyZ2V0LXNpemUpO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIEBpbmNsdWRlIGNvcmUtdHJhbnNpdGlvbih3aWR0aCk7XG4gICAgICAgIC8vIFRoaXMgaXMgbmVlZGVkIHRvIGRpc3BsYXkgYnViYmxlIHRhaWxzLlxuICAgICAgICBvdmVyZmxvdzogdmlzaWJsZTtcblxuICAgICAgICAmOjpwYXJ0KG5hdGl2ZSkge1xuICAgICAgICAgICAgLS1pbm5lci1ib3JkZXItd2lkdGg6IDA7XG4gICAgICAgICAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvcmUtZm9ybWF0LXRleHQgPiBwOm9ubHktY2hpbGQge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lO1xuICAgICAgICB9XG5cbiAgICAgICAgLmFkZG9uLW1lc3NhZ2UtdXNlciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAuNXJlbTtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLXRleHQtY29sb3IpO1xuXG4gICAgICAgICAgICBjb3JlLXVzZXItYXZhdGFyIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAtLWNvcmUtYXZhdGFyLXNpemU6IHZhcigtLWFkZG9uLW1lc3NhZ2VzLWF2YXRhci1zaXplKTtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRpdiB7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgcGFkZGluZy1ob3Jpem9udGFsKC41cmVtKTtcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpb24tbm90ZSB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tYWRkb24tbWVzc2FnZXMtbWVzc2FnZS1ub3RlLXRleHQpO1xuICAgICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1hZGRvbi1tZXNzYWdlcy1tZXNzYWdlLW5vdGUtZm9udC1zaXplKTtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMCA4cHggMDtcbiAgICAgICAgICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICAgICAgICB9XG5cbiAgICAgICAgJlt0YXBwYWJsZV06YWN0aXZlIHtcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0tYWRkb24tbWVzc2FnZXMtbWVzc2FnZS1hY3RpdmF0ZWQtYmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDhweCAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLmFkZG9uLW1lc3NhZ2UtdGV4dCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgICAgICoge1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tdGV4dC1jb2xvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAudGFpbCB7XG4gICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgIHdpZHRoOiAwO1xuICAgICAgICAgICAgaGVpZ2h0OiAwO1xuICAgICAgICAgICAgYm9yZGVyOiAwLjVyZW0gc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3VjaC1hY3Rpb246IG5vbmU7XG4gICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBEZWZpbmVzIHdoZW4gYW4gaXRlbS1tZXNzYWdlIGlzIHRoZSB1c2VyJ3MuXG4gICAgICAgICYuYWRkb24tbWVzc2FnZS1taW5lIHtcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0tYWRkb24tbWVzc2FnZXMtbWVzc2FnZS1taW5lLWJnKTtcbiAgICAgICAgICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuXG4gICAgICAgICAgICAmW3RhcHBhYmxlXTphY3RpdmUge1xuICAgICAgICAgICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0tYWRkb24tbWVzc2FnZXMtbWVzc2FnZS1taW5lLWFjdGl2YXRlZC1iZyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5zcGlubmVyIHtcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSBmbG9hdChlbmQpO1xuICAgICAgICAgICAgICAgIEBpbmNsdWRlIG1hcmdpbigycHgsIC0zcHgsIC0ycHgsIDVweCk7XG5cbiAgICAgICAgICAgICAgICBzdmcge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTZweDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxNnB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnRhaWwge1xuICAgICAgICAgICAgICAgIEBpbmNsdWRlIHBvc2l0aW9uKG51bGwsIC04cHgsIG51bGwsIG51bGwpO1xuICAgICAgICAgICAgICAgIEBpbmNsdWRlIG1hcmdpbi1ob3Jpem9udGFsKG51bGwsIC0wLjVyZW0pO1xuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHZhcigtLWFkZG9uLW1lc3NhZ2VzLW1lc3NhZ2UtbWluZS1iZyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICZbdGFwcGFibGVdOmFjdGl2ZSAudGFpbCB7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdmFyKC0tYWRkb24tbWVzc2FnZXMtbWVzc2FnZS1taW5lLWFjdGl2YXRlZC1iZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAmLmFkZG9uLW1lc3NhZ2Utbm90LW1pbmUgLnRhaWwge1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdmFyKC0tYWRkb24tbWVzc2FnZXMtbWVzc2FnZS1iZyk7XG4gICAgICAgICAgICBAaW5jbHVkZSBwb3NpdGlvbihudWxsLCBudWxsLCBudWxsLCAtOHB4KTtcbiAgICAgICAgICAgIEBpbmNsdWRlIG1hcmdpbi1ob3Jpem9udGFsKC0wLjVyZW0sIG51bGwpO1xuICAgICAgICB9XG5cbiAgICAgICAgJlt0YXBwYWJsZV0uYWRkb24tbWVzc2FnZS1ub3QtbWluZS5hY3RpdmF0ZWQgLnRhaWwge1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdmFyKC0tYWRkb24tbWVzc2FnZXMtbWVzc2FnZS1hY3RpdmF0ZWQtYmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgLmFkZG9uLW1lc3NhZ2VzLWRlbGV0ZS1idXR0b24ge1xuICAgICAgICAgICAgbWluLWhlaWdodDogaW5pdGlhbDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiBpbml0aWFsO1xuICAgICAgICAgICAgQGluY2x1ZGUgbWFyZ2luKDAsIG51bGwsIDAsIG51bGwpO1xuICAgICAgICAgICAgaGVpZ2h0OiB2YXIoLS1hMTF5LW1pbi10YXJnZXQtc2l6ZSkgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuXG4gICAgICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjRlbTtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogaW5pdGlhbDtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAmLmFkZG9uLW1lc3NhZ2Utbm8tdXNlciB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpb24taXRlbS5hZGRvbi1tZXNzYWdlLmFkZG9uLW1lc3NhZ2UtbWluZSArIGlvbi1pdGVtLmFkZG9uLW1lc3NhZ2UuYWRkb24tbWVzc2FnZS1uby11c2VyLmFkZG9uLW1lc3NhZ2UtbWluZSxcbiAgICBpb24taXRlbS5hZGRvbi1tZXNzYWdlLmFkZG9uLW1lc3NhZ2Utbm90LW1pbmUgKyBpb24taXRlbS5hZGRvbi1tZXNzYWdlLmFkZG9uLW1lc3NhZ2Utbm8tdXNlci5hZGRvbi1tZXNzYWdlLW5vdC1taW5lIHtcbiAgICAgICAgLml0ZW0taGVhZGluZyB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICB9XG4gICAgICAgIHBhZGRpbmctdG9wOiAwO1xuICAgIH1cblxufVxuXG46aG9zdC1jb250ZXh0KC5pb3MpIHtcbiAgICBpb24tZm9vdGVyIC50b29sYmFyOmxhc3QtY2hpbGQge1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNHB4O1xuICAgICAgICBtaW4taGVpZ2h0OiAwO1xuICAgIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/addons/mod/forum/pages/discussion/discussion.module.ts":
/*!********************************************************************!*\
  !*** ./src/addons/mod/forum/pages/discussion/discussion.module.ts ***!
  \********************************************************************/
/*! exports provided: AddonForumDiscussionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonForumDiscussionPageModule", function() { return AddonForumDiscussionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _addons_mod_forum_components_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @addons/mod/forum/components/components.module */ "./src/addons/mod/forum/components/components.module.ts");
/* harmony import */ var _guards_can_leave__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @guards/can-leave */ "./src/core/guards/can-leave.ts");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _discussion_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./discussion.page */ "./src/addons/mod/forum/pages/discussion/discussion.page.ts");
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







const routes = [{
        path: '',
        component: _discussion_page__WEBPACK_IMPORTED_MODULE_6__["AddonModForumDiscussionPage"],
        canDeactivate: [_guards_can_leave__WEBPACK_IMPORTED_MODULE_4__["CanLeaveGuard"]],
    }];
let AddonForumDiscussionPageModule = class AddonForumDiscussionPageModule {
};
AddonForumDiscussionPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _core_shared_module__WEBPACK_IMPORTED_MODULE_5__["CoreSharedModule"],
            _addons_mod_forum_components_components_module__WEBPACK_IMPORTED_MODULE_3__["AddonModForumComponentsModule"],
        ],
        declarations: [
            _discussion_page__WEBPACK_IMPORTED_MODULE_6__["AddonModForumDiscussionPage"],
        ],
    })
], AddonForumDiscussionPageModule);



/***/ }),

/***/ "./src/addons/mod/forum/pages/discussion/discussion.page.ts":
/*!******************************************************************!*\
  !*** ./src/addons/mod/forum/pages/discussion/discussion.page.ts ***!
  \******************************************************************/
/*! exports provided: AddonModForumDiscussionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModForumDiscussionPage", function() { return AddonModForumDiscussionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _core_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/core/constants */ "./src/core/constants.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _components_split_view_split_view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/split-view/split-view */ "./src/core/components/split-view/split-view.ts");
/* harmony import */ var _features_fileuploader_services_fileuploader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @features/fileuploader/services/fileuploader */ "./src/core/features/fileuploader/services/fileuploader.ts");
/* harmony import */ var _features_rating_services_rating__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @features/rating/services/rating */ "./src/core/features/rating/services/rating.ts");
/* harmony import */ var _features_rating_services_rating_offline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @features/rating/services/rating-offline */ "./src/core/features/rating/services/rating-offline.ts");
/* harmony import */ var _features_rating_services_rating_sync__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @features/rating/services/rating-sync */ "./src/core/features/rating/services/rating-sync.ts");
/* harmony import */ var _features_user_services_user__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @features/user/services/user */ "./src/core/features/user/services/user.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _services_app__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @services/app */ "./src/core/services/app.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _services_screen__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @services/screen */ "./src/core/services/screen.ts");
/* harmony import */ var _services_sites__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @services/sites */ "./src/core/services/sites.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _services_utils_utils__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @services/utils/utils */ "./src/core/services/utils/utils.ts");
/* harmony import */ var _singletons__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @singletons */ "./src/core/singletons/index.ts");
/* harmony import */ var _singletons_array__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @singletons/array */ "./src/core/singletons/array.ts");
/* harmony import */ var _singletons_events__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @singletons/events */ "./src/core/singletons/events.ts");
/* harmony import */ var _services_forum__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../services/forum */ "./src/addons/mod/forum/services/forum.ts");
/* harmony import */ var _services_forum_helper__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../services/forum-helper */ "./src/addons/mod/forum/services/forum-helper.ts");
/* harmony import */ var _services_forum_offline__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../services/forum-offline */ "./src/addons/mod/forum/services/forum-offline.ts");
/* harmony import */ var _services_forum_sync__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../services/forum-sync */ "./src/addons/mod/forum/services/forum-sync.ts");
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
 * Page that displays a forum discussion.
 */
let AddonModForumDiscussionPage = class AddonModForumDiscussionPage {
    constructor(splitView, elementRef) {
        this.splitView = splitView;
        this.elementRef = elementRef;
        this.forum = {};
        this.accessInfo = {};
        this.discussionLoaded = false;
        this.sort = 'nested';
        this.replyData = {
            replyingTo: 0,
            isEditing: false,
            subject: '',
            message: null,
            files: [],
            isprivatereply: false,
        };
        this.originalData = {
            subject: null,
            message: null,
            files: [],
            isprivatereply: false,
        };
        this.refreshIcon = _core_constants__WEBPACK_IMPORTED_MODULE_1__["CoreConstants"].ICON_LOADING;
        this.syncIcon = _core_constants__WEBPACK_IMPORTED_MODULE_1__["CoreConstants"].ICON_LOADING;
        this.discussionStr = '';
        this.component = _services_forum__WEBPACK_IMPORTED_MODULE_19__["AddonModForumProvider"].COMPONENT;
        this.canPin = false;
        this.availabilityMessage = null;
        this.leavingPage = false;
        this.hasOfflineRatings = false;
    }
    get isMobile() {
        return _services_screen__WEBPACK_IMPORTED_MODULE_12__["CoreScreen"].isMobile;
    }
    ngOnInit() {
        this.courseId = _services_navigator__WEBPACK_IMPORTED_MODULE_11__["CoreNavigator"].getRouteNumberParam('courseId');
        this.cmId = _services_navigator__WEBPACK_IMPORTED_MODULE_11__["CoreNavigator"].getRouteNumberParam('cmId');
        this.forumId = _services_navigator__WEBPACK_IMPORTED_MODULE_11__["CoreNavigator"].getRouteNumberParam('forumId');
        this.discussion = _services_navigator__WEBPACK_IMPORTED_MODULE_11__["CoreNavigator"].getRouteParam('discussion');
        this.discussionId = this.discussion
            ? this.discussion.discussion
            : _services_navigator__WEBPACK_IMPORTED_MODULE_11__["CoreNavigator"].getRouteNumberParam('discussionId');
        this.trackPosts = _services_navigator__WEBPACK_IMPORTED_MODULE_11__["CoreNavigator"].getRouteBooleanParam('trackPosts');
        this.postId = _services_navigator__WEBPACK_IMPORTED_MODULE_11__["CoreNavigator"].getRouteNumberParam('postId');
        this.parent = _services_navigator__WEBPACK_IMPORTED_MODULE_11__["CoreNavigator"].getRouteNumberParam('parent');
        this.isOnline = _services_app__WEBPACK_IMPORTED_MODULE_10__["CoreApp"].isOnline();
        this.onlineObserver = _singletons__WEBPACK_IMPORTED_MODULE_16__["Network"].onChange().subscribe(() => {
            // Execute the callback in the Angular zone, so change detection doesn't stop working.
            _singletons__WEBPACK_IMPORTED_MODULE_16__["NgZone"].run(() => {
                this.isOnline = _services_app__WEBPACK_IMPORTED_MODULE_10__["CoreApp"].isOnline();
            });
        });
        this.discussionStr = _singletons__WEBPACK_IMPORTED_MODULE_16__["Translate"].instant('addon.mod_forum.discussion');
    }
    /**
     * View loaded.
     */
    ngAfterViewInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.parent) {
                this.sort = 'nested'; // Force nested order.
            }
            else {
                this.sort = yield this.getUserSort();
            }
            yield this.fetchPosts(true, false, true);
            const scrollTo = this.postId || this.parent;
            if (scrollTo) {
                // Scroll to the post.
                setTimeout(() => {
                    _services_utils_dom__WEBPACK_IMPORTED_MODULE_14__["CoreDomUtils"].scrollToElementBySelector(this.elementRef.nativeElement, this.content, '#addon-mod_forum-post-' + scrollTo);
                });
            }
        });
    }
    /**
     * User entered the page that contains the component.
     */
    ionViewDidEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.syncObserver) {
                // Already setup.
                return;
            }
            // The discussion object was not passed as parameter.
            if (!this.discussion) {
                yield this.loadDiscussion(this.forumId, this.cmId, this.discussionId);
            }
            // Refresh data if this discussion is synchronized automatically.
            this.syncObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_18__["CoreEvents"].on(_services_forum_sync__WEBPACK_IMPORTED_MODULE_22__["AddonModForumSyncProvider"].AUTO_SYNCED, data => {
                if (data.forumId == this.forumId && this.discussionId == data.discussionId
                    && data.userId == _services_sites__WEBPACK_IMPORTED_MODULE_13__["CoreSites"].getCurrentSiteUserId()) {
                    // Refresh the data.
                    this.discussionLoaded = false;
                    this.refreshPosts();
                }
            }, _services_sites__WEBPACK_IMPORTED_MODULE_13__["CoreSites"].getCurrentSiteId());
            // Refresh data if this forum discussion is synchronized from discussions list.
            this.syncManualObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_18__["CoreEvents"].on(_services_forum_sync__WEBPACK_IMPORTED_MODULE_22__["AddonModForumSyncProvider"].MANUAL_SYNCED, data => {
                if (data.source != 'discussion' && data.forumId == this.forumId &&
                    data.userId == _services_sites__WEBPACK_IMPORTED_MODULE_13__["CoreSites"].getCurrentSiteUserId()) {
                    // Refresh the data.
                    this.discussionLoaded = false;
                    this.refreshPosts();
                }
            }, _services_sites__WEBPACK_IMPORTED_MODULE_13__["CoreSites"].getCurrentSiteId());
            // Invalidate discussion list if it was not read.
            if (this.discussion.numunread > 0) {
                _services_forum__WEBPACK_IMPORTED_MODULE_19__["AddonModForum"].invalidateDiscussionsList(this.forumId);
            }
            // Listen for offline ratings saved and synced.
            this.ratingOfflineObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_18__["CoreEvents"].on(_features_rating_services_rating__WEBPACK_IMPORTED_MODULE_5__["CoreRatingProvider"].RATING_SAVED_EVENT, (data) => {
                if (data.component == 'mod_forum' && data.ratingArea == 'post' && data.contextLevel == "module" /* MODULE */ &&
                    data.instanceId == this.cmId && data.itemSetId == this.discussionId) {
                    this.hasOfflineRatings = true;
                }
            });
            this.ratingSyncObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_18__["CoreEvents"].on(_features_rating_services_rating_sync__WEBPACK_IMPORTED_MODULE_7__["CoreRatingSyncProvider"].SYNCED_EVENT, (data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (data.component == 'mod_forum' && data.ratingArea == 'post' && data.contextLevel == "module" /* MODULE */ &&
                    data.instanceId == this.cmId && data.itemSetId == this.discussionId) {
                    this.hasOfflineRatings = false;
                }
            }));
            this.changeDiscObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_18__["CoreEvents"].on(_services_forum__WEBPACK_IMPORTED_MODULE_19__["AddonModForumProvider"].CHANGE_DISCUSSION_EVENT, data => {
                if ((this.forumId && this.forumId === data.forumId) || data.cmId === this.cmId) {
                    _services_forum__WEBPACK_IMPORTED_MODULE_19__["AddonModForum"].invalidateDiscussionsList(this.forumId).finally(() => {
                        var _a, _b;
                        if (typeof data.locked != 'undefined') {
                            this.discussion.locked = data.locked;
                        }
                        if (typeof data.pinned != 'undefined') {
                            this.discussion.pinned = data.pinned;
                        }
                        if (typeof data.starred != 'undefined') {
                            this.discussion.starred = data.starred;
                        }
                        if (typeof data.deleted != 'undefined' && data.deleted) {
                            if (!((_a = data.post) === null || _a === void 0 ? void 0 : _a.parentid)) {
                                if ((_b = this.splitView) === null || _b === void 0 ? void 0 : _b.outletActivated) {
                                    _services_navigator__WEBPACK_IMPORTED_MODULE_11__["CoreNavigator"].navigate('../');
                                }
                                else {
                                    _services_navigator__WEBPACK_IMPORTED_MODULE_11__["CoreNavigator"].back();
                                }
                            }
                            else {
                                this.discussionLoaded = false;
                                this.refreshPosts();
                            }
                        }
                    });
                }
            });
        });
    }
    /**
     * Check if we can leave the page or not.
     *
     * @return Resolved if we can leave it, rejected if not.
     */
    canLeave() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (_services_forum_helper__WEBPACK_IMPORTED_MODULE_20__["AddonModForumHelper"].hasPostDataChanged(this.replyData, this.originalData)) {
                // Show confirmation if some data has been modified.
                yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_14__["CoreDomUtils"].showConfirm(_singletons__WEBPACK_IMPORTED_MODULE_16__["Translate"].instant('core.confirmcanceledit'));
            }
            // Delete the local files from the tmp folder.
            _features_fileuploader_services_fileuploader__WEBPACK_IMPORTED_MODULE_4__["CoreFileUploader"].clearTmpFiles(this.replyData.files);
            this.leavingPage = true;
            return true;
        });
    }
    /**
     * Runs when the page is about to leave and no longer be the active page.
     */
    ionViewWillLeave() {
        this.syncObserver && this.syncObserver.off();
        this.syncManualObserver && this.syncManualObserver.off();
        this.ratingOfflineObserver && this.ratingOfflineObserver.off();
        this.ratingSyncObserver && this.ratingSyncObserver.off();
        this.changeDiscObserver && this.changeDiscObserver.off();
        delete this.syncObserver;
    }
    /**
     * Page destroyed.
     */
    ngOnDestroy() {
        this.onlineObserver && this.onlineObserver.unsubscribe();
    }
    /**
     * Get sort type configured by the current user.
     *
     * @return Promise resolved with the sort type.
     */
    getUserSort() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const value = yield _services_sites__WEBPACK_IMPORTED_MODULE_13__["CoreSites"].getCurrentSite().getLocalSiteConfig('AddonModForumDiscussionSort');
                return value;
            }
            catch (error) {
                try {
                    const value = yield _features_user_services_user__WEBPACK_IMPORTED_MODULE_8__["CoreUser"].getUserPreference('forum_displaymode');
                    switch (Number(value)) {
                        case 1:
                            return 'flat-oldest';
                        case -1:
                            return 'flat-newest';
                        case 3:
                            return 'nested';
                        case 2: // Threaded not implemented.
                        default:
                        // Not set, use default sort.
                        // @TODO add fallback to $CFG->forum_displaymode.
                    }
                }
                catch (error) {
                    // Ignore errors.
                }
            }
            return 'flat-oldest';
        });
    }
    /**
     * Convenience function to get the forum.
     *
     * @return Promise resolved with the forum.
     */
    fetchForum() {
        if (this.courseId && this.cmId) {
            return _services_forum__WEBPACK_IMPORTED_MODULE_19__["AddonModForum"].getForum(this.courseId, this.cmId);
        }
        if (this.courseId && this.forumId) {
            return _services_forum__WEBPACK_IMPORTED_MODULE_19__["AddonModForum"].getForumById(this.courseId, this.forumId);
        }
        throw new Error('Cannot get the forum');
    }
    /**
     * Convenience function to get the posts.
     *
     * @param sync Whether to try to synchronize the discussion.
     * @param showErrors Whether to show errors in a modal.
     * @param forceMarkAsRead Whether to mark all posts as read.
     * @return Promise resolved when done.
     */
    fetchPosts(sync, showErrors, forceMarkAsRead) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let onlinePosts = [];
            const offlineReplies = [];
            let hasUnreadPosts = false;
            try {
                if (sync) {
                    // Try to synchronize the forum.
                    yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_15__["CoreUtils"].ignoreErrors(this.syncDiscussion(!!showErrors));
                }
                const response = yield _services_forum__WEBPACK_IMPORTED_MODULE_19__["AddonModForum"].getDiscussionPosts(this.discussionId, { cmId: this.cmId });
                const replies = yield _services_forum_offline__WEBPACK_IMPORTED_MODULE_21__["AddonModForumOffline"].getDiscussionReplies(this.discussionId);
                this.ratingInfo = response.ratinginfo;
                onlinePosts = response.posts;
                this.courseId = response.courseid || this.courseId;
                this.forumId = response.forumid || this.forumId;
                // Check if there are responses stored in offline.
                this.postHasOffline = !!replies.length;
                const convertPromises = [];
                // Index posts to allow quick access. Also check unread field.
                const onlinePostsMap = {};
                onlinePosts.forEach((post) => {
                    onlinePostsMap[post.id] = post;
                    hasUnreadPosts = hasUnreadPosts || !!post.unread;
                });
                replies.forEach((offlineReply) => {
                    // If we don't have forumId and courseId, get it from the post.
                    if (!this.forumId) {
                        this.forumId = offlineReply.forumid;
                    }
                    if (!this.courseId) {
                        this.courseId = offlineReply.courseid;
                    }
                    convertPromises.push(_services_forum_helper__WEBPACK_IMPORTED_MODULE_20__["AddonModForumHelper"].instance
                        .convertOfflineReplyToOnline(offlineReply)
                        .then((reply) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        offlineReplies.push(reply);
                        // Disable reply of the parent. Reply in offline to the same post is not allowed, edit instead.
                        onlinePostsMap[reply.parentid].capabilities.reply = false;
                        return;
                    })));
                });
                yield Promise.all(convertPromises);
                // Convert back to array.
                onlinePosts = _services_utils_utils__WEBPACK_IMPORTED_MODULE_15__["CoreUtils"].objectToArray(onlinePostsMap);
                let posts = offlineReplies.concat(onlinePosts);
                this.startingPost = _services_forum__WEBPACK_IMPORTED_MODULE_19__["AddonModForum"].extractStartingPost(posts);
                // If sort type is nested, normal sorting is disabled and nested posts will be displayed.
                if (this.sort == 'nested') {
                    // Sort first by creation date to make format tree work.
                    _services_forum__WEBPACK_IMPORTED_MODULE_19__["AddonModForum"].sortDiscussionPosts(posts, 'ASC');
                    const rootId = this.startingPost ? this.startingPost.id : (this.discussion ? this.discussion.id : 0);
                    posts = _services_utils_utils__WEBPACK_IMPORTED_MODULE_15__["CoreUtils"].formatTree(posts, 'parentid', 'id', rootId);
                }
                else {
                    // Set default reply subject.
                    const direction = this.sort == 'flat-newest' ? 'DESC' : 'ASC';
                    _services_forum__WEBPACK_IMPORTED_MODULE_19__["AddonModForum"].sortDiscussionPosts(posts, direction);
                }
                try {
                    // Now try to get the forum.
                    const forum = yield this.fetchForum();
                    // "forum.istracked" is more reliable than "trackPosts".
                    if (typeof forum.istracked != 'undefined') {
                        this.trackPosts = forum.istracked;
                    }
                    this.forumId = forum.id;
                    this.cmId = forum.cmid;
                    this.courseId = forum.course;
                    this.forum = forum;
                    this.availabilityMessage = _services_forum_helper__WEBPACK_IMPORTED_MODULE_20__["AddonModForumHelper"].getAvailabilityMessage(forum);
                    const promises = [];
                    promises.push(_services_forum__WEBPACK_IMPORTED_MODULE_19__["AddonModForum"].instance
                        .getAccessInformation(this.forumId, { cmId: this.cmId })
                        .then((accessInfo) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        this.accessInfo = accessInfo;
                        // Disallow replying if cut-off date is reached and the user has not the capability to override it.
                        // Just in case the posts were fetched from WS when the cut-off date was not reached but it is now.
                        if (_services_forum_helper__WEBPACK_IMPORTED_MODULE_20__["AddonModForumHelper"].isCutoffDateReached(forum) && !accessInfo.cancanoverridecutoff) {
                            posts.forEach((post) => {
                                post.capabilities.reply = false;
                            });
                        }
                        return;
                    })));
                    // The discussion object was not passed as parameter and there is no starting post.
                    if (!this.discussion) {
                        promises.push(this.loadDiscussion(this.forumId, this.cmId, this.discussionId));
                    }
                    yield Promise.all(promises);
                }
                catch (error) {
                    // Ignore errors.
                }
                if (!this.discussion && !this.startingPost) {
                    // The discussion object was not passed as parameter and there is no starting post. Should not happen.
                    throw new Error('Invalid forum discussion.');
                }
                if (this.startingPost && this.startingPost.author && this.forum.type == 'single') {
                    // Hide author and groups for first post and type single.
                    delete this.startingPost.author.fullname;
                    delete this.startingPost.author.groups;
                }
                this.posts = posts;
                this.postSubjects = this.getAllPosts().reduce((postSubjects, post) => {
                    postSubjects[post.id] = post.subject;
                    return postSubjects;
                }, this.startingPost
                    ? { [this.startingPost.id]: this.startingPost.subject }
                    : {});
                if (_services_forum__WEBPACK_IMPORTED_MODULE_19__["AddonModForum"].isSetPinStateAvailableForSite()) {
                    // Use the canAddDiscussion WS to check if the user can pin discussions.
                    try {
                        const response = yield _services_forum__WEBPACK_IMPORTED_MODULE_19__["AddonModForum"].canAddDiscussionToAll(this.forumId, { cmId: this.cmId });
                        this.canPin = !!response.canpindiscussions;
                    }
                    catch (error) {
                        this.canPin = false;
                    }
                }
                else {
                    this.canPin = false;
                }
                this.hasOfflineRatings =
                    yield _features_rating_services_rating_offline__WEBPACK_IMPORTED_MODULE_6__["CoreRatingOffline"].hasRatings('mod_forum', 'post', "module" /* MODULE */, this.cmId, this.discussionId);
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_14__["CoreDomUtils"].showErrorModal(error);
            }
            finally {
                this.discussionLoaded = true;
                this.refreshIcon = _core_constants__WEBPACK_IMPORTED_MODULE_1__["CoreConstants"].ICON_REFRESH;
                this.syncIcon = _core_constants__WEBPACK_IMPORTED_MODULE_1__["CoreConstants"].ICON_SYNC;
                if (forceMarkAsRead || (hasUnreadPosts && this.trackPosts)) {
                    // // Add log in Moodle and mark unread posts as readed.
                    _services_forum__WEBPACK_IMPORTED_MODULE_19__["AddonModForum"].logDiscussionView(this.discussionId, this.forumId || -1, this.forum.name).catch(() => {
                        // Ignore errors.
                    }).finally(() => {
                        // Trigger mark read posts.
                        _singletons_events__WEBPACK_IMPORTED_MODULE_18__["CoreEvents"].trigger(_services_forum__WEBPACK_IMPORTED_MODULE_19__["AddonModForumProvider"].MARK_READ_EVENT, {
                            courseId: this.courseId,
                            moduleId: this.cmId,
                        }, _services_sites__WEBPACK_IMPORTED_MODULE_13__["CoreSites"].getCurrentSiteId());
                    });
                }
            }
        });
    }
    /**
     * Convenience function to load discussion.
     *
     * @param forumId Forum ID.
     * @param cmId Forum cmid.
     * @param discussionId Discussion ID.
     * @return Promise resolved when done.
     */
    loadDiscussion(forumId, cmId, discussionId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Fetch the discussion if not passed as parameter.
            if (this.discussion || !forumId) {
                return;
            }
            try {
                const discussion = yield _services_forum_helper__WEBPACK_IMPORTED_MODULE_20__["AddonModForumHelper"].getDiscussionById(forumId, cmId, discussionId);
                this.discussion = discussion;
                this.discussionId = this.discussion.discussion;
            }
            catch (error) {
                // Ignore errors.
            }
        });
    }
    /**
     * Tries to synchronize the posts discussion.
     *
     * @param showErrors Whether to show errors in a modal.
     * @return Promise resolved when done.
     */
    syncDiscussion(showErrors) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const promises = [];
            promises.push(_services_forum_sync__WEBPACK_IMPORTED_MODULE_22__["AddonModForumSync"].instance
                .syncDiscussionReplies(this.discussionId)
                .then((result) => {
                if (result.warnings && result.warnings.length) {
                    _services_utils_dom__WEBPACK_IMPORTED_MODULE_14__["CoreDomUtils"].showErrorModal(result.warnings[0]);
                }
                if (result && result.updated) {
                    // Sync successful, send event.
                    _singletons_events__WEBPACK_IMPORTED_MODULE_18__["CoreEvents"].trigger(_services_forum_sync__WEBPACK_IMPORTED_MODULE_22__["AddonModForumSyncProvider"].MANUAL_SYNCED, {
                        forumId: this.forumId,
                        userId: _services_sites__WEBPACK_IMPORTED_MODULE_13__["CoreSites"].getCurrentSiteUserId(),
                        source: 'discussion',
                    }, _services_sites__WEBPACK_IMPORTED_MODULE_13__["CoreSites"].getCurrentSiteId());
                }
                return;
            }));
            promises.push(_services_forum_sync__WEBPACK_IMPORTED_MODULE_22__["AddonModForumSync"].instance
                .syncRatings(this.cmId, this.discussionId)
                .then((result) => {
                if (result.warnings && result.warnings.length) {
                    _services_utils_dom__WEBPACK_IMPORTED_MODULE_14__["CoreDomUtils"].showErrorModal(result.warnings[0]);
                }
                return;
            }));
            try {
                yield Promise.all(promises);
            }
            catch (error) {
                if (showErrors) {
                    _services_utils_dom__WEBPACK_IMPORTED_MODULE_14__["CoreDomUtils"].showErrorModalDefault(error, 'core.errorsync', true);
                }
                throw new Error('Failed syncing discussion');
            }
        });
    }
    /**
     * Refresh the data.
     *
     * @param refresher Refresher.
     * @param done Function to call when done.
     * @param showErrors If show errors to the user of hide them.
     * @return Promise resolved when done.
     */
    doRefresh(refresher, done, showErrors = false) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.discussionLoaded) {
                yield this.refreshPosts(true, showErrors).finally(() => {
                    refresher === null || refresher === void 0 ? void 0 : refresher.complete();
                    done && done();
                });
            }
        });
    }
    /**
     * Refresh posts.
     *
     * @param sync Whether to try to synchronize the discussion.
     * @param showErrors Whether to show errors in a modal.
     * @return Promise resolved when done.
     */
    refreshPosts(sync, showErrors) {
        this.content.scrollToTop();
        this.refreshIcon = _core_constants__WEBPACK_IMPORTED_MODULE_1__["CoreConstants"].ICON_LOADING;
        this.syncIcon = _core_constants__WEBPACK_IMPORTED_MODULE_1__["CoreConstants"].ICON_LOADING;
        const promises = [
            _services_forum__WEBPACK_IMPORTED_MODULE_19__["AddonModForum"].invalidateForumData(this.courseId),
            _services_forum__WEBPACK_IMPORTED_MODULE_19__["AddonModForum"].invalidateDiscussionPosts(this.discussionId, this.forumId),
            _services_forum__WEBPACK_IMPORTED_MODULE_19__["AddonModForum"].invalidateAccessInformation(this.forumId),
            _services_forum__WEBPACK_IMPORTED_MODULE_19__["AddonModForum"].invalidateCanAddDiscussion(this.forumId),
        ];
        return _services_utils_utils__WEBPACK_IMPORTED_MODULE_15__["CoreUtils"].allPromises(promises).catch(() => {
            // Ignore errors.
        }).then(() => this.fetchPosts(sync, showErrors));
    }
    /**
     * Function to change posts sorting
     *
     * @param type Sort type.
     * @return Promised resolved when done.
     */
    changeSort(type) {
        this.discussionLoaded = false;
        this.sort = type;
        _services_sites__WEBPACK_IMPORTED_MODULE_13__["CoreSites"].getCurrentSite().setLocalSiteConfig('AddonModForumDiscussionSort', this.sort);
        this.content.scrollToTop();
        return this.fetchPosts();
    }
    /**
     * Lock or unlock the discussion.
     *
     * @param locked True to lock the discussion, false to unlock.
     */
    setLockState(locked) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_14__["CoreDomUtils"].showModalLoading('core.sending', true);
            try {
                const response = yield _services_forum__WEBPACK_IMPORTED_MODULE_19__["AddonModForum"].setLockState(this.forumId, this.discussionId, locked);
                this.discussion.locked = response.locked;
                const data = {
                    forumId: this.forumId,
                    discussionId: this.discussionId,
                    cmId: this.cmId,
                    locked: this.discussion.locked,
                };
                _singletons_events__WEBPACK_IMPORTED_MODULE_18__["CoreEvents"].trigger(_services_forum__WEBPACK_IMPORTED_MODULE_19__["AddonModForumProvider"].CHANGE_DISCUSSION_EVENT, data, _services_sites__WEBPACK_IMPORTED_MODULE_13__["CoreSites"].getCurrentSiteId());
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_14__["CoreDomUtils"].showToast('addon.mod_forum.lockupdated', true);
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_14__["CoreDomUtils"].showErrorModal(error);
            }
            finally {
                modal.dismiss();
            }
        });
    }
    /**
     * Pin or unpin the discussion.
     *
     * @param pinned True to pin the discussion, false to unpin it.
     */
    setPinState(pinned) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_14__["CoreDomUtils"].showModalLoading('core.sending', true);
            try {
                yield _services_forum__WEBPACK_IMPORTED_MODULE_19__["AddonModForum"].setPinState(this.discussionId, pinned);
                this.discussion.pinned = pinned;
                const data = {
                    forumId: this.forumId,
                    discussionId: this.discussionId,
                    cmId: this.cmId,
                    pinned: this.discussion.pinned,
                };
                _singletons_events__WEBPACK_IMPORTED_MODULE_18__["CoreEvents"].trigger(_services_forum__WEBPACK_IMPORTED_MODULE_19__["AddonModForumProvider"].CHANGE_DISCUSSION_EVENT, data, _services_sites__WEBPACK_IMPORTED_MODULE_13__["CoreSites"].getCurrentSiteId());
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_14__["CoreDomUtils"].showToast('addon.mod_forum.pinupdated', true);
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_14__["CoreDomUtils"].showErrorModal(error);
            }
            finally {
                modal.dismiss();
            }
        });
    }
    /**
     * Star or unstar the discussion.
     *
     * @param starred True to star the discussion, false to unstar it.
     */
    toggleFavouriteState(starred) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_14__["CoreDomUtils"].showModalLoading('core.sending', true);
            try {
                yield _services_forum__WEBPACK_IMPORTED_MODULE_19__["AddonModForum"].toggleFavouriteState(this.discussionId, starred);
                this.discussion.starred = starred;
                const data = {
                    forumId: this.forumId,
                    discussionId: this.discussionId,
                    cmId: this.cmId,
                    starred: this.discussion.starred,
                };
                _singletons_events__WEBPACK_IMPORTED_MODULE_18__["CoreEvents"].trigger(_services_forum__WEBPACK_IMPORTED_MODULE_19__["AddonModForumProvider"].CHANGE_DISCUSSION_EVENT, data, _services_sites__WEBPACK_IMPORTED_MODULE_13__["CoreSites"].getCurrentSiteId());
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_14__["CoreDomUtils"].showToast('addon.mod_forum.favouriteupdated', true);
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_14__["CoreDomUtils"].showErrorModal(error);
            }
            finally {
                modal.dismiss();
            }
        });
    }
    /**
     * New post added.
     */
    postListChanged() {
        // Trigger an event to notify a new reply.
        const data = {
            forumId: this.forumId,
            discussionId: this.discussionId,
            cmId: this.cmId,
        };
        _singletons_events__WEBPACK_IMPORTED_MODULE_18__["CoreEvents"].trigger(_services_forum__WEBPACK_IMPORTED_MODULE_19__["AddonModForumProvider"].REPLY_DISCUSSION_EVENT, data, _services_sites__WEBPACK_IMPORTED_MODULE_13__["CoreSites"].getCurrentSiteId());
        this.discussionLoaded = false;
        this.refreshPosts().finally(() => {
            this.discussionLoaded = true;
        });
    }
    /**
     * Get all the posts contained in the discussion.
     *
     * @return Array containing all the posts of the discussion.
     */
    getAllPosts() {
        const allPosts = this.posts.map(post => this.flattenPostHierarchy(post));
        return _singletons_array__WEBPACK_IMPORTED_MODULE_17__["CoreArray"].flatten(allPosts);
    }
    /**
     * Flatten a post's hierarchy into an array.
     *
     * @param parent Parent post.
     * @return Array containing all the posts within the hierarchy (including the parent).
     */
    flattenPostHierarchy(parent) {
        const posts = [parent];
        const children = parent.children || [];
        for (const child of children) {
            posts.push(...this.flattenPostHierarchy(child));
        }
        return posts;
    }
};
AddonModForumDiscussionPage.ctorParameters = () => [
    { type: _components_split_view_split_view__WEBPACK_IMPORTED_MODULE_3__["CoreSplitViewComponent"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] }
];
AddonModForumDiscussionPage.propDecorators = {
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonContent"],] }]
};
AddonModForumDiscussionPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'page-addon-mod-forum-discussion',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./discussion.html */ "./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/forum/pages/discussion/discussion.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./discussion.scss */ "./src/addons/mod/forum/pages/discussion/discussion.scss")).default]
    })
], AddonModForumDiscussionPage);



/***/ }),

/***/ "./src/addons/mod/forum/pages/discussion/discussion.scss":
/*!***************************************************************!*\
  !*** ./src/addons/mod/forum/pages/discussion/discussion.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host .addon-forum-reply-button .label {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGRvbnMvbW9kL2ZvcnVtL3BhZ2VzL2Rpc2N1c3Npb24vZGlzY3Vzc2lvbi5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0VBQ0ksU0FBQTtBQURSIiwiZmlsZSI6InNyYy9hZGRvbnMvbW9kL2ZvcnVtL3BhZ2VzL2Rpc2N1c3Npb24vZGlzY3Vzc2lvbi5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuXG4gICAgLmFkZG9uLWZvcnVtLXJlcGx5LWJ1dHRvbiAubGFiZWwge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgfVxuXG59XG4iXX0= */");

/***/ })

}]);
//# sourceMappingURL=pages-discussion-discussion-module.js.map