# IOS、Android 的上架流程

上傳到 Google Play 或者 App Store 分成兩個步驟

1. Build a standalone app
2. Submit the build
    - 上傳到 Google Play
    - 上傳到 App Store

## Build a standalone app

1. 安裝 Expo CLI
   `npm install -g expo-cli`

<br/>

2. Configure `app.json`

    ```json
    {
        "expo": {
            "name": "Your App Name",
            "icon": "./path/to/your/app-icon.png",
            "version": "1.0.0",
            "slug": "your-app-slug",
            "ios": {
                "bundleIdentifier": "com.yourcompany.yourappname",
                "buildNumber": "1.0.0"
            },
            "android": {
                "package": "com.yourcompany.yourappname",
                "versionCode": 1
            }
        }
    }
    ```

    > Notice:
    > `name`, `icno` and `version` 是必填欄位。
    > `com.yourcompany.yourappname` 可以更改成符合 App 的名稱

<br/>

3. Start the build

    Run `expo build:android` or `expo build:ios`

    > Notice:
    > `expo publish` is automatically run with `expo build`

    - build for Android

        1. 如果要在模擬機上測試
           `expo build:android -t apk`

        2. 如果要上傳到 Google Play
           `expo build:android -t app-bundle`

    - build for IOS
        1. 如果要在模擬機上測試
           `expo build:ios -t simulator`
        2. 如果要上傳到 App
           `expo build:ios -t archive`

4. Wait for it to finish building
5. Test it on your device or simulator
6. Submit it to the appropriate store

## Submit the build

### 1. 上傳到 Google Play

1. 註冊 Google Service 帳戶
2. 手動上傳到 Google Service 帳戶
3. run `eas submit -p android`

<br/>

### 2. 上傳到 App Store

1. 註冊 Apple 開發者帳號
2. 在開發者後台產生 .cer(憑證檔)
3. 在開發者後台產生 App ID
4. 在開發者後台產生 Provisioning Profile
5. 在 iTunes Connect 送審 App
