A variable is a piece of information or a value. A variable always has a name, which acts a reference to the piece of information it holds. A variable's name must not contain any spaces. For instance `my_variable` is a valid variable name, while `my variable` is not. It also has a data type, that it is defined as. Once they are defined, they can be assigned. For instance, they can be Integers, Strings, Booleans, etc. 

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

### Primitives versus Classes
You may have picked up on the fact that `String` is capitalised, while `int`, `double` and `boolean` are not. This is because `int`, `double` and `boolean` are all **primitive data types**, while  `String` is a **class data type**. These may not mean anything to you yet, but in essence there are 8 built-in primitives with Java. Primitives cannot be added or removed by the programmer; they are the DNA of the programming language. Primitives represent one scalar value. Classes are far more powerful. They shift the power to the programmer, allowing the programmer to create classes, which are composed from other datatypes. Java comes with a bunch of classes built in, namely `String`.

But what about `Integer`, `Double`, and `Boolean` as in `Integer.parseInt()`, etc? These are indeed classes, that wrap around their respective primitives. So the following would be perfectly valid:

```java
Integer age = 13;
Double pi = 3.14;
Boolean alive = false;
```

However using these instead of primitives has an unnecessary performance cost, and should not be used. There are valid reasons for them, that will come up in Chapter II, but as for now they are a burden. N.B. It is perfectly accceptable to use their static methods i.e. `Integer.parseInt()`, etc, because they do not actually involve instantiating those classes (Part VIII). 

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
