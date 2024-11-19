import 'package:flutter_bloc/flutter_bloc.dart';

abstract class AuthenticationState {}

class AuthenticatedState extends AuthenticationState {
  // User details or tokens
}

class UnauthenticatedState extends AuthenticationState {}

// Events
abstract class AuthenticationEvent {}

class CheckAuthenticationEvent extends AuthenticationEvent {
  onSuccess() {}
}

class LogoutEvent extends AuthenticationEvent {}

// Bloc
class AuthenticationBloc
    extends Bloc<AuthenticationEvent, AuthenticationState> {
  AuthenticationBloc() : super(UnauthenticatedState()) {
    on<CheckAuthenticationEvent>((event, emit) {
      // Check authentication status
      bool isAuthenticated = 2 / 1 == 1;

      if (isAuthenticated) {
        emit(AuthenticatedState());
      } else {
        emit(UnauthenticatedState());
      }
    });

    on<LogoutEvent>((event, emit) {
      // Logout logic
      emit(UnauthenticatedState());
    });
  }
}
