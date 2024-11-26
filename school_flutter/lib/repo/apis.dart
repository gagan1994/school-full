import 'dart:convert';

import 'package:firebase_auth/firebase_auth.dart';
import 'package:http/http.dart' as http;

const BASE_URL = 'http://192.168.1.2:8000';
Future<http.Response> getData(var endPoint) async {
  var token = await FirebaseAuth.instance.currentUser!.getIdToken();
  var result = await http.get(Uri.parse("$BASE_URL/$endPoint"),
      headers: {'authorization': 'Bearer $token'});
  print('$endPoint status code: ${result.statusCode}');
  return result;
}

Future<http.Response> getDataWithParams(var endPoint, var params) async {
  return await getData('$endPoint/$params');
}

Future<http.Response> postData(var endPoint, {body}) async {
  var token = await FirebaseAuth.instance.currentUser!.getIdToken();
  print("${BASE_URL + endPoint}");
  return http.post(Uri.parse(BASE_URL + endPoint),
      body: body, headers: {'authorization': 'Bearer $token'});
}

Future<dynamic> userLogIn() async {
  var res = await getData('user_login');
  if (res.statusCode == 200) {
    return jsonDecode(res.body);
  }
  print("responded with status code: ${res.statusCode}");
  throw Exception("Not able to login ${res.statusCode}");
}

Future<dynamic> fetchParentHomeScreen(String parentId) async {
  var res = await getDataWithParams('student/parent_home', parentId);
  if (res.statusCode == 200) {
    return jsonDecode(res.body);
  }
  print("error status ${res.statusCode}");
  throw Exception("Some error ${res.statusCode}");
}
