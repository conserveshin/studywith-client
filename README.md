# studywith-client
This project is the client part of StudyWith, providing people to make study meetings and share their study achievements.

## Prerequisites 

### Node and npm
- node >= 18.15.x (LTS)
- npm >= 9.5.0

Download nodejs from [Here](https://nodejs.org/).

### Android SDK
- Android 13
  - Android SDK Platform 33
  - Sources for Android 33
  - Google APIs Intel x86_64 Atom System Image
- Android SDK Build-Tools
  - 33.0.0
- Android Emulator (Optional)
- Android SDK Platform-Tools

You have to set the environmental variables:
- `ANDROID_HOME` as the root directory of SDK
- Concat "%`ANDROID_HOME`%\platform-tools" to Path (Windows)

You can install Android SDK in Android Studio from [Here](https://developer.android.com/studio?gclid=CjwKCAjwjYKjBhB5EiwAiFdSfo5MzrI153PaGSwTf5pHxtE7ZPcdUyHEmrISzwo3pNZ0Warn1MnTlRoCMP0QAvD_BwE&gclsrc=aw.ds)



## Installation
Clone this repository:
```sh
git clone https://github.com/conserveshin/studywith-client.git
```

Install nodejs package dependencies:
```sh
npm install
```

## Usage
Running react-native console:
```sh
npm run start
```


Running Android Application:

```sh
npm run android
```