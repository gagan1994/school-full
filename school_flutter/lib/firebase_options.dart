// File generated by FlutterFire CLI.
// ignore_for_file: lines_longer_than_80_chars, avoid_classes_with_only_static_members
import 'package:firebase_core/firebase_core.dart' show FirebaseOptions;
import 'package:flutter/foundation.dart'
    show defaultTargetPlatform, kIsWeb, TargetPlatform;

/// Default [FirebaseOptions] for use with your Firebase apps.
///
/// Example:
/// ```dart
/// import 'firebase_options.dart';
/// // ...
/// await Firebase.initializeApp(
///   options: DefaultFirebaseOptions.currentPlatform,
/// );
/// ```
class DefaultFirebaseOptions {
  static FirebaseOptions get currentPlatform {
    if (kIsWeb) {
      return web;
    }
    switch (defaultTargetPlatform) {
      case TargetPlatform.android:
        return android;
      case TargetPlatform.iOS:
        return ios;
      case TargetPlatform.macOS:
        throw UnsupportedError(
          'DefaultFirebaseOptions have not been configured for macos - '
          'you can reconfigure this by running the FlutterFire CLI again.',
        );
      case TargetPlatform.windows:
        throw UnsupportedError(
          'DefaultFirebaseOptions have not been configured for windows - '
          'you can reconfigure this by running the FlutterFire CLI again.',
        );
      case TargetPlatform.linux:
        throw UnsupportedError(
          'DefaultFirebaseOptions have not been configured for linux - '
          'you can reconfigure this by running the FlutterFire CLI again.',
        );
      default:
        throw UnsupportedError(
          'DefaultFirebaseOptions are not supported for this platform.',
        );
    }
  }

  static const FirebaseOptions web = FirebaseOptions(
    apiKey: 'AIzaSyDHorkmzXgG1iyzgPat_xqzsx_z-q3gkqs',
    appId: '1:507072470929:web:a7e37bef0f36d7afb38430',
    messagingSenderId: '507072470929',
    projectId: 'trippit-74b5f',
    authDomain: 'trippit-74b5f.firebaseapp.com',
    storageBucket: 'trippit-74b5f.appspot.com',
    measurementId: 'G-KGLN758HVS',
  );

  static const FirebaseOptions android = FirebaseOptions(
    apiKey: 'AIzaSyAcIv3mw9GeEOVQRecHQrzhTtmbGoch0YM',
    appId: '1:507072470929:android:c86d0a4d817ef1fdb38430',
    messagingSenderId: '507072470929',
    projectId: 'trippit-74b5f',
    storageBucket: 'trippit-74b5f.appspot.com',
  );

  static const FirebaseOptions ios = FirebaseOptions(
    apiKey: 'AIzaSyCpui6aFc9LAWedC1UFVfvAXyrArHJHt3U',
    appId: '1:507072470929:ios:eb62d56d4b428ab3b38430',
    messagingSenderId: '507072470929',
    projectId: 'trippit-74b5f',
    storageBucket: 'trippit-74b5f.appspot.com',
    androidClientId: '507072470929-i504q00jipuvdkcrrdafql94d3jbupgg.apps.googleusercontent.com',
    iosClientId: '507072470929-1lduesea5plrl6hv9cg2gevue21ndum2.apps.googleusercontent.com',
    iosBundleId: 'com.gpd.com.schoolFlutter',
  );
}
