import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:school_flutter/res/assets.dart';
import 'package:school_flutter/res/color/color_scheme.dart';
import 'package:school_flutter/res/ui.dart';
import 'package:school_flutter/splash/parent_login_page.dart';

import '../res/constants.dart';

class LoginPage extends StatefulWidget {
  static const PAGE_NAME = "/LoginPage";
  const LoginPage({Key? key}) : super(key: key);

  @override
  State<LoginPage> createState() => _LoginPageState();
}

class _LoginPageState extends State<LoginPage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: PopScope(
        canPop: false,
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Stack(
              children: [
                TopBar(),
                Positioned(
                  top: 50,
                  bottom: 50,
                  left: 50,
                  right: 50,
                  child: Image.asset(
                    login_ic,
                  ),
                ),
              ],
            ),
            Container(
              padding: EdgeInsets.symmetric(vertical: 2.5, horizontal: 20),
              child: Text(
                appName,
                style: Theme.of(context).textTheme.headlineSmall,
              ),
            ),
            Container(
              padding: EdgeInsets.symmetric(vertical: 2.5, horizontal: 20),
              child: Text(
                '$appName saves you time in monitoring your kid',
                style: Theme.of(context).textTheme.bodyLarge,
              ),
            ),
            Expanded(
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                children: [
                  _getButton(
                    Icons.emoji_people_rounded,
                    'Teacher',
                    () {},
                  ),
                  _getButton(Icons.people, 'Parent', () {
                    context.push(ParentLoginPage.PAGE_NAME);
                  }),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }

  OutlinedButton _getButton(IconData ic, String label, Function() onPressed) {
    return OutlinedButton.icon(
      icon: Icon(ic),
      onPressed: onPressed,
      style: ButtonStyle(
        shape: MaterialStateProperty.resolveWith<OutlinedBorder?>((states) {
          return RoundedRectangleBorder(
              borderRadius: BorderRadius.circular(10),
              side: BorderSide(color: primaryColor));
        }),
      ),
      label: Text(label),
    );
  }
}