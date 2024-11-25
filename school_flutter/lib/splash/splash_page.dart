import 'package:firebase_auth/firebase_auth.dart';
import 'package:firebase_core/firebase_core.dart';
import 'package:flutter/material.dart';
import 'package:gif/gif.dart';
import 'package:go_router/go_router.dart';
import 'package:package_info_plus/package_info_plus.dart';
import 'package:school_flutter/repo/apis.dart';
import 'package:school_flutter/res/assets.dart';
import 'package:school_flutter/res/ui.dart';
import 'package:school_flutter/splash/logIn_select_page.dart';

import '../firebase_options.dart';
import '../res/color/color_scheme.dart';
import '../res/constants.dart';

class SplashPage extends StatefulWidget {
  static const PAGE_NAME = "/";
  const SplashPage({Key? key}) : super(key: key);

  @override
  State<SplashPage> createState() => _SplashPageState();
}

class _SplashPageState extends State<SplashPage> with TickerProviderStateMixin {
  late final GifController controller;
  @override
  void initState() {
    getPackageName();
    controller = GifController(vsync: this);
    checkLoginStatusAndNavigate();
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: primaryColor,
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Gif(
              image: AssetImage(splash_gif),
              controller:
                  controller, // if duration and fps is null, original gif fps will be used.
              //fps: 30,
              //duration: const Duration(seconds: 3),
              autostart: Autostart.loop,
              placeholder: (context) => const Text('Loading...'),
              onFetchCompleted: () {
                controller.reset();
                controller.forward();
              },
            ),
          ],
        ),
      ),
    );
  }

  @override
  void dispose() {
    controller.dispose();
    super.dispose();
  }

  void getPackageName() async {
    PackageInfo packageInfo = await PackageInfo.fromPlatform();
    appName = packageInfo.appName;
  }

  void checkLoginStatusAndNavigate() async {
    await Future.delayed(Duration(seconds: 2));
    await Firebase.initializeApp(
      options: DefaultFirebaseOptions.currentPlatform,
    );
    var page = LoginSelectPage.PAGE_NAME;
    try {
      if (FirebaseAuth.instance.currentUser != null) {
        var response = await userLogIn();
        page = "${response['user_type']}_home_page";
        GoRouter.of(context).goNamed(page, extra: response);
      }
      return;
    } catch (e) {
      showError(context, e.toString());
    }
    GoRouter.of(context).goNamed(page);
    print("going to page: $page");
  }
}
