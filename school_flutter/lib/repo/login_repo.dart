import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:google_sign_in/google_sign_in.dart';

import 'apis.dart';

class LoginRepository {
  Future<void> login(LoginState state) async {
    print("submit clicked: ${state.username} ${state.password}");
    await FirebaseAuth.instance.signInWithEmailAndPassword(
        email: state.username, password: state.password);
    print("success firebase auth");
    await userLogIn();
  }

  Future<void> gmailLogin(LoginState state) async {
    if (FirebaseAuth.instance.currentUser == null) {
      final GoogleSignInAccount? googleUser = await GoogleSignIn().signIn();

      // Obtain the auth details from the request
      final GoogleSignInAuthentication? googleAuth =
          await googleUser?.authentication;

      // Create a new credential
      final credential = GoogleAuthProvider.credential(
        accessToken: googleAuth?.accessToken,
        idToken: googleAuth?.idToken,
      );
      await FirebaseAuth.instance.signInWithCredential(credential);
    }
    var currentUser = await FirebaseAuth.instance.currentUser!;
    print(currentUser.email);
    // Once signed in, return the UserCredential
    await userLogIn();
  }
}

abstract class FormSubmissionStatus {
  const FormSubmissionStatus();
}

class InitialFormStatus extends FormSubmissionStatus {
  const InitialFormStatus();
}

class FormSubmitting extends FormSubmissionStatus {}

class GoogleFormSubmitting extends FormSubmissionStatus {}

class SubmissionSuccess extends FormSubmissionStatus {}

class SubmissionFailed extends FormSubmissionStatus {
  final Object exception;

  SubmissionFailed(this.exception);
}

class LoginState {
  final String username;
  bool get isValidUsername => username.length > 3;

  final String password;
  bool get isValidPassword => password.length > 6;

  final FormSubmissionStatus formStatus;

  const LoginState({
    this.username = '',
    this.password = '',
    this.formStatus = const InitialFormStatus(),
  });

  LoginState copyWith({
    String? username,
    String? password,
    FormSubmissionStatus? formStatus,
  }) {
    return LoginState(
      username: username ?? this.username,
      password: password ?? this.password,
      formStatus: formStatus ?? this.formStatus,
    );
  }

  List<Object?> get props => [username, password, formStatus];
}

abstract class LoginEvent {}

class LoginUsernameChanged extends LoginEvent {
  final String? username;

  LoginUsernameChanged({this.username});

  @override
  List<Object?> get props => [username];
}

class LoginPasswordChanged extends LoginEvent {
  final String? password;

  LoginPasswordChanged({this.password});

  @override
  List<Object?> get props => [password];
}

class LoginSubmitted extends LoginEvent {
  @override
  List<Object?> get props => [];
}

class GmailLoginSubmitted extends LoginEvent {
  @override
  List<Object?> get props => [];
}

class LoginBloc extends Bloc<LoginEvent, LoginState> {
  final LoginRepository? authRepo;

  LoginBloc({this.authRepo}) : super(LoginState()) {
    on<LoginEvent>((event, emit) async {
      await mapEventToState(event, emit);
    });
  }

  Future mapEventToState(LoginEvent event, Emitter<LoginState> emit) async {
    // Username updated
    if (event is LoginUsernameChanged) {
      emit(state.copyWith(username: event.username));

      // Password updated
    } else if (event is LoginPasswordChanged) {
      emit(state.copyWith(password: event.password));

      // Form submitted
    } else if (event is LoginSubmitted) {
      emit(state.copyWith(formStatus: FormSubmitting()));

      try {
        await authRepo?.login(state);
        emit(state.copyWith(formStatus: SubmissionSuccess()));
      } catch (e) {
        print(e);
        emit(state.copyWith(formStatus: SubmissionFailed(e)));
      }
    } else if (event is GmailLoginSubmitted) {
      emit(state.copyWith(formStatus: GoogleFormSubmitting()));

      try {
        await authRepo?.gmailLogin(state);
        emit(state.copyWith(formStatus: SubmissionSuccess()));
      } catch (e) {
        print(e);
        emit(state.copyWith(formStatus: SubmissionFailed(e)));
      }
    }
  }
}
