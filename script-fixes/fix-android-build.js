#!/usr/bin/env node

// HOOKS FOR FIX ANDROID BUILD
// init base variables
const fs = require('fs');
const path = require('path');
// get place of current script folder and remove it name to take a root one
const rootdir = process.mainModule.path.replace('script-fixes', '');


// This hook removes specific permissions from the AndroidManifest.xml
// The AndroidManifest is re-generated during the prepare stage,
// so this must be run on the "after_prepare" hook.
function fixCapacitorCordovaPluginsManifest() {
    // make sure that requested manifest file placed here
    const manifestFile = path.join(rootdir, "android/capacitor-cordova-android-plugins/src/main/AndroidManifest.xml");

    fs.readFile(manifestFile, "utf8", (err, data) => {
        if (err) {
            return console.log(err);
        }

        let result = data.toString();
        result = result.replace(`<uses-permission android:name="android.permission.REQUEST_INSTALL_PACKAGES"/>\n`, "");
        result = result.replace(
            `<service android:name="com.adobe.phonegap.push.FCMService">`,
            `<service android:name="com.adobe.phonegap.push.FCMService" android:exported="true">`
        );
        result = result.replace(
            `<service android:name="com.adobe.phonegap.push.PushInstanceIDListenerService">`,
            `<service android:name="com.adobe.phonegap.push.PushInstanceIDListenerService" android:exported="true">`,
        );


        fs.writeFile(manifestFile, result, "utf8", onError);
        console.log('REQUEST_INSTALL_PACKAGES: permissions was removed')
    });

}

// This hook replace deprecated class to actual one
// "Whitelist" should be change to "AllowList"
function fixWhitelistUsage() {
    const placesOfUsage = [
        "android/capacitor-cordova-android-plugins/src/main/java/org/apache/cordova/whitelist/WhitelistPlugin.java",
        "android/capacitor-cordova-android-plugins/src/main/java/org/apache/cordova/filetransfer/FileTransfer.java",
    ];

    placesOfUsage.forEach((src) => {
        const sourceFile = path.join(rootdir, src);

        fs.readFile(sourceFile, "utf8", (err, data) => {
            if (err) {
                return console.log(err);
            }
            let result = data.toString();
            result = result.replace(/Whitelist/g, 'AllowList');
            result = result.replace(/WhiteList/g, 'AllowList');
            result = result.replace(/AllowListPlugin/g, 'WhitelistPlugin');

            fs.writeFile(sourceFile, result, "utf8", onError);
            console.log(src.split('/')[src.split('/').length - 1], '-- FIXED')
        });
    })

}

// This hook replace deprecated method from capacitor
// "settings.setAppCacheEnabled(true)" should be removed
function fixDeprecatedBridgeMethod() {
    const sourcePath = "node_modules/@capacitor/android/capacitor/src/main/java/com/getcapacitor/Bridge.java";
    const sourceFile = path.join(rootdir, sourcePath);

    fs.readFile(sourceFile, "utf8", (err, data) => {
        if (err) {
            return console.log(err);
        }
        let result = data.toString();
        result = result.replace(/^.*settings.setAppCacheEnabled\(true\);.*$\n/gm, '');

        fs.writeFile(sourceFile, result, "utf8", onError);
        console.log('Bridge.java -- FIXED')
    });

}

// error callback
function onError(err) {
    if (err) {
        return console.log(err);
    }
}

// LAUNCH FIX FUNCTIONS
fixCapacitorCordovaPluginsManifest();
fixWhitelistUsage();
fixDeprecatedBridgeMethod()
