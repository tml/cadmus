Variables
=============
A variable is a piece of information or a value. A variable always has a name, which acts a reference for the computer to the piece of information it holds. It is good practice to have the variable name as something related to the piece of information it holds, and the name must start with a lowercase letter and not contain any spaces.

You must always initialise your variables.  Initialising a variable simply creates the variable and sets it to a value of your choice.  For numbers (ints, doubles), unless you already know which value you want to initially set the variable to, it is often a good idea to initialise them to 0.
Once a primitive variable's value is set, it is not fixed.  You can still change the value at any time.  To change its value, go onto a new line; type the name of the variable; then an equals sign; then the new value you would like to set the variable to; and finally a ';' to finish the line of code.  For example, if you wanted to change the variable 'x' from above to the value '16' you would write:
		
```java
x = 16;
```

To initialise a variable you must begin the line of code with the type of the variable (see above), followed by the name you choose for the variable, then an equals sign and then a suitable initial value for the variable.  Below are some examples of how to initialise different types of variables correctly:

```java
int x = 1;
double y = 4.34;
char letter = 'a';
String sentence = "This is an example of a sentence";
boolean a = true;
```

Beware, as you cannot initialise a variable to a value that is of a different type. For example, you cannot initialise an int to “four”, as “four” is of the type String; you also cannot initialise an int to 4.0, as 4.0 is of the type double; whereas an int can be initialised to 4, as 4 is of the type int. In short, the type of the variable and the value you are setting the value to have to match.

Variables are split into two main categories: 

1. Primitive types, as the name suggests, are used for simple tasks, which are usually setting a value and then changing it later on.

2. Class types, which can be used for more complicated tasks, as you will find out later on. 

### Primitives versus Classes

There are many different sub types of variables. Here are a number of different primitive types you will use during this course:

**int** (short for integer, which is just a whole number, e.g. 5)

**double** (a number which has a decimal point, e.g. 4.32 or 5.0)

**char** (a char is just a letter, e.g. 'a'. Note that we always use ' ' when referring to chars)

**boolean** (a boolean is a true or false value)

The following is a class type that you will also use a lot:

**String** (a String is a collection of multiple chars together, so either a word or a sentence, e.g. “hello” or “This is a String”. Note that we always use “ ” when referring to Strings)

You may have picked up on the fact that `String` is capitalised, while `int`, `double` and `boolean` are not. This is because `int`, `double` and `boolean` are all **primitive data types**, while  `String` is a **class data type**. These may not mean anything to you yet, but in essence there are 8 built-in primitives with Java. Primitives cannot be added or removed by the programmer; they are the DNA of the programming language. Primitives represent one scalar value. Classes are far more powerful. They shift the power to the programmer, allowing the programmer to create classes, which are composed from other datatypes. Java comes with a bunch of classes built in, namely `String`.

### Data types

#### Strings
A String is a series of characters. To define a String called `name` do:

```java
String name;
```

Once `name` is defined, you can assign it:

```java
name = "George";
```

If you wnat you can define it and initialise it in a single line:

```java
String name = "George";
```

And to print it out:

```java
System.out.println(name);
```

#### Integers
An integer is a whole number. Integers are stored as the data type `int`. To define an Integer called `age` do:

```java
int age = 15;
```

You can convert an integer to a string, by using `Integer.toString()`:

```java
int age = 13;
String ageAsString = Integer.toString(age);
```

You can convert a string to an integer, by using `Integer.parseInt()`:
```java
String ageAsString = "13";
int age = Integer.parseInt(ageAsString);
```

You can increment and decrement variables:
```java
age++; // Age now equals 14
age--; // Age is back to 13
```

#### Real numbers
While an integer is a whole number, a real number has a decimal point in it. To use a real number in Java, use the `double` data type:
```java
double pi = 3.14259;
```

As with an integer, you can use:
```java
String piAsString = "3.14159";
double pi = Double.parseDouble(piAsString);
piAsString = Double.toString(pi);
```

#### Booleans
A boolean is a variable that is either `true` or `false`:
```java
boolean myBoolean = true;
String aliveAsString = "true";
alive = Boolean.parseBoolean(aliveAsString); 
aliveAsString = Boolean.toString(alive);
```

But what about `Integer`, `Double`, and `Boolean` as in `Integer.parseInt()`, etc? These are indeed classes, that wrap around their respective primitives. So the following would be perfectly valid:

```java
Integer age = 13;
Double pi = 3.14;
Boolean alive = false;
```

However using these instead of primitives has an unnecessary performance cost, and should not be used. There are valid reasons for them, that will come up in Chapter II, but as for now they are a burden. N.B. It is perfectly accceptable to use their static methods i.e. `Integer.parseInt()`, etc, because they do not actually involve instantiating those classes (Part VIII). 

You can also print out the values of variables. When you print out a variable you do not need to add “” or ' ', you simply put the variable name inside the the brackets. So, if you had an int 'n' which is equal to 5, you could print it out using:

```java
System.out.println(n);
```

Resulting in an output of:

```java
5
```

You could also print out variables and Strings at the same time, you simply separate them with a + sign as shown below:

```java
System.out.println("The value of n is " + n);
```

This time the output would be:

```java
The value of n is 5
```

### Selection
If/else/else if statements work in Java exactly as they do in JavaScript, so this is perfectly valid:

```java
int x = 5;
int y = 4;
if(x == y) {
  System.out.println("Matches");
} else {
  System.out.println("Oh well!");
}
```

There is one major gotcha: because `String` isn't a primitive the `==` operator doesn't work.

		
#### Ex 2. 
Write a program in which you initialise an int, double, char, boolean and a String to suitable values of you choice, then get the program to print out the value of each variable on a new line.  So if the int is equal to 4, the first line to be printed would be:

```java
The value of the int is 4
```

###### [Contents](https://github.com/BillsJ/cadmus/blob/master/Chapter-1/Part%20I:%20Introduction_and_contents.md#contents)
