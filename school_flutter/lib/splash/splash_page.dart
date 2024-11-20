import 'package:flutter/material.dart';
import 'package:gif/gif.dart';
import 'package:go_router/go_router.dart';
import 'package:package_info_plus/package_info_plus.dart';
import 'package:school_flutter/home/home_page.dart';
import 'package:school_flutter/res/assets.dart';
import 'package:school_flutter/splash/LogInPage.dart';

import '../res/color/color_scheme.dart';
import '../res/constants.dart';

class SplashPage extends StatefulWidget {
  static const PAGE_NAME = "SplashPage";
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

  void getPackageName() async {
    PackageInfo packageInfo = await PackageInfo.fromPlatform();
    appName = packageInfo.appName;
  }

  void checkLoginStatusAndNavigate() async {
    await Future.delayed(Duration(seconds: 2));
    bool isAuth = 2 / 1 == 1;
    if (isAuth) {
      context.go(MyHomePage.PAGE_NAME);
      print("going to page: " + MyHomePage.PAGE_NAME);
    } else {
      print("going to page: " + LoginPage.PAGE_NAME);
      context.go(LoginPage.PAGE_NAME);
    }
  }
}
