import 'dart:convert';

import 'package:firebase_auth/firebase_auth.dart';
import 'package:http/http.dart' as http;

const BASE_URL = 'http://192.168.1.8:8000/';
Future<http.Response> getData(var endPoint) async {
  var token = await FirebaseAuth.instance.currentUser!.getIdToken();
  return http.get(Uri.parse(BASE_URL + endPoint),
      headers: {'authorization': 'Bearer $token'});
}

Future<http.Response> postData(var endPoint, {body}) async {
  var token = await FirebaseAuth.instance.currentUser!.getIdToken();
  print("${BASE_URL + endPoint}");
  return http.post(Uri.parse(BASE_URL + endPoint),
      body: body, headers: {'authorization': 'Bearer $token'});
}

Future<dynamic> userLogIn() async {
  var res = await getData('user_login');
  var token = await FirebaseAuth.instance.currentUser!.getIdToken();
  print("*************Private Key*************");
  print(token);
  print("-------------Private Key-------------");
  if (res.statusCode == 200) {
    print("res");
    print(res.body);
    return jsonDecode(res.body);
  }
  print("responded with status code: ${res.statusCode}");
  throw Exception("Not able to login ${res.statusCode}");
}
