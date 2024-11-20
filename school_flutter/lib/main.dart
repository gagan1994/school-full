import 'package:flex_color_scheme/flex_color_scheme.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:go_router/go_router.dart';
import 'package:school_flutter/res/ui.dart';
import 'package:school_flutter/splash/LogInPage.dart';

import 'home/home_page.dart';
import 'repo/auth.dart';
import 'res/color/color_scheme.dart';
import 'splash/splash_page.dart';

void main() {
  runApp(const MyApp());
}

final GoRouter _router = GoRouter(routes: <RouteBase>[
  GoRoute(
    path: '/',
    builder: (BuildContext context, GoRouterState state) {
      return SplashPage();
    },
    routes: <RouteBase>[
      GoRoute(
        path: MyHomePage.PAGE_NAME,
        builder: (BuildContext context, GoRouterState state) {
          return MyHomePage(title: "title");
        },
      ),
      GoRoute(
        path: LoginPage.PAGE_NAME,
        builder: (BuildContext context, GoRouterState state) {
          return LoginPage();
        },
      ),
    ],
  ),
]);

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MultiBlocProvider(
        providers: [
          BlocProvider<AuthenticationBloc>(
            create: (context) => AuthenticationBloc(),
          )
        ],
        child: MaterialApp.router(
            title: 'Flutter Demo',
            theme: FlexThemeData.light(
              fontFamily: fontFamily,
              textTheme: textTheme,
              scheme: FlexScheme.materialBaseline,
              colors: FlexSchemeColor(
                primary: primaryColor,
                secondary: secondaryColor,
              ),
            ),
            darkTheme: FlexThemeData.dark(
              scheme: FlexScheme.materialBaseline,
              colors: FlexSchemeColor(
                primary: primaryColor,
                secondary: secondaryColor,
              ),
            ),
            themeMode: ThemeMode.system,
            routerConfig: _router));
  }
}
