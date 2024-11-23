import 'package:flex_color_scheme/flex_color_scheme.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:go_router/go_router.dart';
import 'package:school_flutter/repo/extras.dart';
import 'package:school_flutter/repo/login_repo.dart';
import 'package:school_flutter/res/ui.dart';
import 'package:school_flutter/splash/logIn_select_page.dart';
import 'package:school_flutter/splash/login_page.dart';

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
  ),
  GoRoute(
    name: HomePage.PAGE_NAME,
    path: '/' + HomePage.PAGE_NAME,
    builder: (BuildContext context, GoRouterState state) {
      return HomePage();
    },
  ),
  GoRoute(
    name: LoginSelectPage.PAGE_NAME,
    path: '/' + LoginSelectPage.PAGE_NAME,
    builder: (BuildContext context, GoRouterState state) {
      return LoginSelectPage();
    },
  ),
  GoRoute(
    name: LoginPage.PAGE_NAME,
    path: '/' + LoginPage.PAGE_NAME,
    builder: (BuildContext context, GoRouterState state) {
      var userTypeText = state.uri.queryParameters[':user_type'];
      print(
          "user_type: $userTypeText state.uri.queryParameters:${state.uri.queryParameters}");
      var userType = UserType.values.firstWhere((e) => e.title == userTypeText,
          orElse: () => UserType.Parent);
      return RepositoryProvider(
        create: (context) => LoginRepository(),
        child: LoginPage(userType),
      );
    },
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
