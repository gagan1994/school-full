import 'package:flutter/material.dart';

enum UserType implements Comparable<UserType> {
  Teacher(title: 'Teacher', iconData: Icons.emoji_people_rounded),
  Parent(title: 'Parent', iconData: Icons.people),
  Student(
      title: 'Student',
      iconData: IconData(0xe559, fontFamily: 'MaterialIcons'));

  const UserType({
    required this.title,
    required this.iconData,
  });

  final String title;
  final IconData iconData;

  @override
  int compareTo(UserType other) => title.compareTo(other.title);
}
