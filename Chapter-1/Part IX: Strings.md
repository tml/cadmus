Strings
==================

You should know by now a String is not a primitive type; it is a class type.  Class types are more complicated, however, they allow you to achieve a great deal.  I will go over how to add Strings together and how to compare two Strings to see if they are the same.

Firstly lets say you have two Strings, s1, s2.

String s1 = “This is a string”;
String s2 = “This is also  a string”;

String combinedS = s1 + s2;
//this is the simplest way of adding two strings together

To check if two Strings are the same, we must use a method called compareTo which is a special method used to compare the values of two objects (A String is actually an object).
If the values of two objects match, a value of 0 will be returned. Otherwise, a positive or negative integer will be returned instead.

String s1 = “This is a string”;
String s2 = “This is also  a string”;

int compareS = s1.compareTo(s2);
//this will set compareS to a non-zero number as the Strings are not //the same

String s1 = “This is a string”;
String s2 = “This is a string”;

int compareS = s1.compareTo(s2);
//this will set compareS to zero as the Strings are the same

You can get the length of a String (the number of characters that make up the String, including blank spaces) by using the length method, so lets say we have a String s which is “doorbell”

int lengthS = s.length();

To get the value of a character at a certain position we can use the charAt method, so if we use the same String s as above, the following

char charThree = s.charAt(3);

would result in charThree being set to 'r'.  You may have thought it would be 'o' however you must realise that the first character of a String is actually the 0th character.  See below for the positions of each char in the String s:

d	o	o	r	b	e	l	l 	(character)
0 	1	2	3	4	5	6	7 	(position of character)


Ex 18. Write a program to compare the two Strings below to see if they are equal, print out the result
“Hello my name is Jarvis”
“Hello my name is jarvis”
Hint: Use the compareTo function and if else statements

Ex 19. Now write a similar program but this time check to see whether 5*5 is the same as 125/5
Hint: Remember you must use ints which are primitive types so you must compare using == not the compareTo function

Ex 20. Write a program to print out the String “yltcerroc desrever evah uoy enod llew” in reverse. You should notice something!
Hint: You must use the length method to get the length of the String and you must use a loop, to loop through the string backwards and print out each character using the charAt method
