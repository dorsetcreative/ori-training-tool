Moodle Mobile
=================

This is the primary repository of source code for the official Moodle Mobile app.

* [User documentation](http://docs.moodle.org/en/Moodle_Mobile)
* [Developer documentation](http://docs.moodle.org/dev/Moodle_Mobile)
* [Development environment setup](http://docs.moodle.org/dev/Setting_up_your_development_environment_for_Moodle_Mobile_2)
* [Bug Tracker](https://tracker.moodle.org/browse/MOBILE)
* [Release Notes](http://docs.moodle.org/dev/Moodle_Mobile_Release_Notes)

License
-------

[Apache 2.0](http://www.apache.org/licenses/LICENSE-2.0)

## Building the Android App

### Prerequisites

- **Node.js**: Compatible with Node.js 18+ / 22+ (build scripts pre-configured with legacy OpenSSL provider).
- **Yarn**: Version 1.22+.
- **Java Development Kit (JDK)**: JDK 17 (recommended for Gradle 7.5.1 on ARM64 macOS).
- **Android Studio** & Android SDK (API 33+ / Command-line Tools).

---

### Step 1: Install Dependencies

```bash
yarn install
```
*(Runs post-install scripts to jetify dependencies and apply Gradle/Capacitor compatibility patches).*

---

### Step 2: Build Web Assets & Sync Android

Compile the Angular/Ionic web application and sync native Capacitor/Cordova plugins into the Android project:

```bash
# 1. Build the web assets:
yarn run build

# 2. Sync into the Android platform:
yarn run sync:android
```

> **Tip**: `yarn run sync:android` already builds the web assets automatically, but running `yarn run build` beforehand ensures web compilation succeeds cleanly.

---

### Step 3: Build the Android Package

#### Option A: Using Android Studio (Recommended for Signing)

1. Open the `android/` directory in **Android Studio**.
2. Run **Build > Clean Project**.
3. Choose your build type:
   - **For Google Play Store (App Bundle - `.aab`)**:
     - Go to **Build > Generate Signed Bundle / APK...**
     - Select **Android App Bundle**.
     - Choose your release keystore, alias, and enter passwords.
     - Select **release** variant and generate.
   - **For Local Device Testing (APK)**:
     - Go to **Build > Build Bundle(s) / APK(s) > Build APK(s)**.

#### Option B: Using the Command Line

Make sure `JAVA_HOME` points to JDK 17:

```bash
cd android
export JAVA_HOME=/Users/cloudchiu/Library/Java/JavaVirtualMachines/ms-17.0.19/Contents/Home
```

- **Build Google Play App Bundle (`.aab`)**:
  ```bash
  ./gradlew clean bundleRelease
  ```
  *Output:* `android/app/build/outputs/bundle/release/app-release.aab`

- **Build Release APK**:
  ```bash
  ./gradlew assembleRelease
  ```
  *Output:* `android/app/build/outputs/apk/release/app-release-unsigned.apk`

- **Build Debug APK**:
  ```bash
  ./gradlew assembleDebug
  ```
  *Output:* `android/app/build/outputs/apk/debug/app-debug.apk`

---

### Version Bumping for Releases

To update the version for a new release, update `versionCode` and `versionName` in [`android/app/build.gradle`](android/app/build.gradle):

```groovy
defaultConfig {
    versionCode 12201
    versionName "1.2.2"
}
```

---

### 16 KB Page Size Compatibility (Android 15+)

This project is configured to meet Google Play's 16 KB page size requirement:
- Uses `cordova-sqlite-storage` `^7.0.0` with 16 KB-aligned ELF binaries.
- Configured with `useLegacyPackaging true` in [`android/app/build.gradle`](android/app/build.gradle) and `android:extractNativeLibs="true"` in [`android/app/src/main/AndroidManifest.xml`](android/app/src/main/AndroidManifest.xml) for AGP compatibility.

---

Big Thanks
-----------

Cross-browser Testing Platform and Open Source <3 Provided by [Sauce Labs](https://saucelabs.com)

![Sauce Labs Logo](https://user-images.githubusercontent.com/557037/43443976-d88d5a78-94a2-11e8-8915-9f06521423dd.png)