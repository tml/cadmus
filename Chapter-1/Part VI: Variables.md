Variables
=============

A variable is a piece of information or a value.  A variable always has a name, which acts a reference to the piece of information it holds.  It is good practice to have the variable name as something related to the piece of information it holds, and the name must start with a lowercase letter and not contain any spaces.  Variables are split into two main categories: 
- Primitive types, as the name suggests, are used for simple tasks, usually setting a value and then changing it later on.  
- Class types can be used for more complicated tasks as you will find out later on.  There are many different sub types of variables.  Here are a number of different primitive types you will use during this course:

**int** (short for integer, which is just a whole number, e.g. 5)

**double** (a number which has a decimal point, e.g. 4.32 or 5.0)

**char** (a char is just a letter, e.g. 'a' , note we always use ' ' when referring to chars )

**boolean** (a boolean has only two values true or false)

The following is a class type that you will also use a lot too:

String (a String is multiple chars, so either a word or sentences, e.g. “hello” or “This is a String” , note we always use “ ” when referring to Strings)

You must always initialise variables.  Initialising a variable simply creates the variable and sets it to a value of your choice.  For numbers (ints, doubles), unless you already know which value you want to initially set the variable to, it is often a good idea to initialise them to 0.  Beware you cannot initialise a variable to a value that is of a different type, for example you cannot initialise an int to “four”, as “four” has type String, you also cannot initialise int to 4.0, as 4.0 has type double, whereas an int can be initialised to 4, as 4 is of type int, so the type of the variable and the value you are initialising it to have to match.

To initialise a variable you must begin the line of code with the type of the variable (see above), followed by the name you choose for the variable, then an equals sign and then a suitable initial value for the variable.  Below are some examples of how to initialise different types of variables correctly:

```java
int x = 1;
double y = 4.34;
char letter = 'a';
String sentence = "This is an example of a sentence";
boolean a = true;
```

Once a primitive variable's value is set, it is not fixed.  You can still change the value at any time.  To change its value on a new line type the name of the variable then an equals sign and then the new value you would like to set the variable to, and finally a ; to finish the line of code.  For example, if you wanted to change the variable x from above to the value 16 you would write:

```java
x = 16;
```

If you ever want to increase or decrease a number by 1 you can use the following piece of code, lets say the name of our variable is number.

```java
number++;
// This is to increase the variable number by 1
number--;
// This is to decrease the variable number by 1
```

#### Exercise 2 
Write a program in which you initialise an int, double, char, boolean, String to suitable values of you choice, then get the program to print out the value of each variable on a new line.  So if the int is equal to 4, the first line to be printed would be:
The value of the int is 4

###### [Contents](https://github.com/BillsJ/cadmus/blob/master/Chapter-1/Part%20I.md#contents)
