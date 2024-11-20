import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:school_flutter/res/assets.dart';
import 'package:school_flutter/res/color/color_scheme.dart';
import 'package:school_flutter/res/ui.dart';
import 'package:school_flutter/splash/login_page.dart';

import '../repo/extras.dart';
import '../res/constants.dart';

class LoginSelectPage extends StatefulWidget {
  static const PAGE_NAME = "LoginSelectPage";
  const LoginSelectPage({Key? key}) : super(key: key);

  @override
  State<LoginSelectPage> createState() => _LoginSelectPageState();
}

class _LoginSelectPageState extends State<LoginSelectPage> {
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
                    UserType.Teacher,
                    () {
                      context.pushNamed(LoginPage.PAGE_NAME, queryParameters: {
                        ':user_type': UserType.Teacher.title
                      });
                    },
                  ),
                  _getButton(UserType.Parent, () {
                    context.pushNamed(LoginPage.PAGE_NAME,
                        queryParameters: {':user_type': UserType.Parent.title});
                  }),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }

  OutlinedButton _getButton(UserType type, Function() onPressed) {
    return OutlinedButton.icon(
      icon: Icon(type.iconData),
      onPressed: onPressed,
      style: ButtonStyle(
        shape: MaterialStateProperty.resolveWith<OutlinedBorder?>((states) {
          return RoundedRectangleBorder(
              borderRadius: BorderRadius.circular(10),
              side: BorderSide(color: primaryColor));
        }),
      ),
      label: Text(type.title),
    );
  }
}
