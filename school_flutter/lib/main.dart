import 'package:flex_color_scheme/flex_color_scheme.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:go_router/go_router.dart';
import 'package:school_flutter/home/student/student_model.dart';
import 'package:school_flutter/home/teacher/teacher_model.dart';
import 'package:school_flutter/repo/extras.dart';
import 'package:school_flutter/repo/login_repo.dart';
import 'package:school_flutter/res/ui.dart';
import 'package:school_flutter/splash/logIn_select_page.dart';
import 'package:school_flutter/splash/login_page.dart';

import 'home/parents//home_page.dart' as ParentHomePage;
import 'home/parents/parent_model.dart';
import 'home/student/home_page.dart' as StudentHomePage;
import 'home/teacher//home_page.dart' as TeacherHomePage;
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
    name: ParentHomePage.HomePage.PAGE_NAME,
    path: '/' + ParentHomePage.HomePage.PAGE_NAME,
    builder: (BuildContext context, GoRouterState state) {
      return ParentHomePage.HomePage(user: Parent(user_json: state.extra));
    },
  ),
  GoRoute(
    name: StudentHomePage.HomePage.PAGE_NAME,
    path: '/' + StudentHomePage.HomePage.PAGE_NAME,
    builder: (BuildContext context, GoRouterState state) {
      return StudentHomePage.HomePage(user: Student(user_json: state.extra));
    },
  ),
  GoRoute(
    name: TeacherHomePage.HomePage.PAGE_NAME,
    path: '/' + TeacherHomePage.HomePage.PAGE_NAME,
    builder: (BuildContext context, GoRouterState state) {
      return TeacherHomePage.HomePage(user: Teacher(user_json: state.extra));
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
