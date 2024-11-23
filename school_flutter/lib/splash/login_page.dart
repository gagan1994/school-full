import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:flutter_svg/svg.dart';
import 'package:go_router/go_router.dart';
import 'package:school_flutter/repo/extras.dart';
import 'package:school_flutter/res/color/color_scheme.dart';

import '../home/home_page.dart';
import '../repo/login_repo.dart';
import '../res/assets.dart';
import '../res/ui.dart';

class LoginPage extends StatefulWidget {
  static const PAGE_NAME = "LoginPage";
  UserType userType;
  LoginPage(this.userType, {Key? key}) : super(key: key);

  @override
  State<LoginPage> createState() => _LoginPageState();
}

class _LoginPageState extends State<LoginPage> {
  final TextEditingController _emailController = TextEditingController();
  final TextEditingController _passwordController = TextEditingController();

  var isRememberMe = false;
  @override
  void initState() {
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: BlocProvider(
        create: (context) =>
            LoginBloc(authRepo: context.read<LoginRepository>()),
        child: BlocListener<LoginBloc, LoginState>(
          listenWhen: (previous, current) =>
              previous.formStatus != current.formStatus,
          listener: (context, state) {
            updateLoginStatus(state);
          },
          child: Column(
            children: [
              Stack(
                children: [
                  TopBar(
                    heightRatio: 0.3,
                  ),
                  Container(
                    height: MediaQuery.of(context).size.height * 0.38,
                  ),
                  Positioned(
                    bottom: 0,
                    left: 0,
                    right: 0,
                    child: SvgPicture.asset(
                      school_logo,
                      height: 200,
                      width: 150,
                    ),
                  ),
                ],
              ),
              SizedBox(height: 30),
              SizedBox(
                width: MediaQuery.of(context).size.width * 0.9,
                child: BlocBuilder<LoginBloc, LoginState>(
                    builder: (context, state) {
                  return CommonTextField(
                    controller: _emailController,
                    hintText: 'Email',
                    labelText: 'Email',
                    prefixIconData: Icons.email_outlined,
                    textInputAction: TextInputAction.next,
                    onChanged: (value) => context.read<LoginBloc>().add(
                          LoginUsernameChanged(username: value),
                        ),
                  );
                }),
              ),
              SizedBox(height: 30),
              SizedBox(
                width: MediaQuery.of(context).size.width * 0.9,
                child: BlocBuilder<LoginBloc, LoginState>(
                    builder: (context, state) {
                  return CommonTextField(
                    controller: _passwordController,
                    hintText: 'Password',
                    labelText: 'Password',
                    prefixIconData: Icons.password,
                    obscureText: true,
                    textInputAction: TextInputAction.done,
                    onChanged: (value) => context.read<LoginBloc>().add(
                          LoginPasswordChanged(password: value),
                        ),
                  );
                }),
              ),
              Container(
                padding: EdgeInsets.only(left: 5, right: 20),
                child: Row(
                  children: [
                    Checkbox(
                        value: isRememberMe,
                        onChanged: (val) {
                          setState(() {
                            this.isRememberMe = val!;
                          });
                        }),
                    GestureDetector(
                      child: Text('Remeber Me'),
                      onTap: () {
                        setState(() {
                          isRememberMe = !isRememberMe;
                        });
                      },
                    ),
                    Expanded(
                        child: Container(
                      height: 40,
                      alignment: Alignment.centerRight,
                      child: GestureDetector(
                        onTap: () {
                          print("forgot pwd clicked");
                        },
                        child: const Text(
                          'Forgot Password?',
                          style: TextStyle(color: primaryColor),
                        ),
                      ),
                    ))
                  ],
                ),
              ),
              SizedBox(height: 30),
              Container(
                height: 50,
                width: MediaQuery.of(context).size.width * .9,
                child: BlocBuilder<LoginBloc, LoginState>(
                  builder: (context, state) {
                    return state.formStatus is FormSubmitting
                        ? const Center(child: CircularProgressIndicator())
                        : ElevatedButton(
                            style: ElevatedButton.styleFrom(
                                    foregroundColor:
                                        Theme.of(context).colorScheme.primary,
                                    backgroundColor:
                                        Theme.of(context).colorScheme.primary,
                                    shape: RoundedRectangleBorder(
                                        borderRadius:
                                            BorderRadius.circular(10)))
                                .copyWith(
                                    elevation:
                                        ButtonStyleButton.allOrNull(0.0)),
                            onPressed: () async {
                              context.read<LoginBloc>().add(LoginSubmitted());
                            },
                            child: const Text(
                              'Log In',
                              style: TextStyle(color: Colors.white),
                            ),
                          );
                  },
                ),
              ),
              SizedBox(height: 30),
              Container(
                height: 50,
                width: MediaQuery.of(context).size.width * .9,
                child: BlocBuilder<LoginBloc, LoginState>(
                  builder: (context, state) {
                    return state.formStatus is GoogleFormSubmitting
                        ? const Center(child: CircularProgressIndicator())
                        : OutlinedButton(
                            style: ElevatedButton.styleFrom(
                              shape: RoundedRectangleBorder(
                                borderRadius: BorderRadius.circular(10),
                              ),
                            ),
                            child: Row(
                              mainAxisAlignment: MainAxisAlignment.center,
                              children: [
                                Container(
                                  height: 30.0,
                                  width: 30.0,
                                  decoration: BoxDecoration(
                                    image: DecorationImage(
                                        image: AssetImage(ic_google_logo),
                                        fit: BoxFit.cover),
                                    shape: BoxShape.circle,
                                  ),
                                ),
                                SizedBox(
                                  width: 20,
                                ),
                                Text("Sign In with Google")
                              ],
                            ),

                            // by onpressed we call the function signup function
                            onPressed: () {
                              context
                                  .read<LoginBloc>()
                                  .add(GmailLoginSubmitted());
                            },
                          );
                  },
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }

  void updateLoginStatus(LoginState state) {
    final formStatus = state.formStatus;
    if (formStatus is SubmissionFailed) {
      showError(context, "Login Failed Please Retry");
    } else if (formStatus is SubmissionSuccess) {
      showSuccess(context, "Login Successful");
      GoRouter.of(context).goNamed(HomePage.PAGE_NAME);
    }
  }
}
