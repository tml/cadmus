A variable is a piece of information or a value. A variable always has a name, which acts a reference to the piece of information it holds. A variable's name must not contain any spaces. For instance `my_variable` is a valid variable name, while `my variable` is not. It also has a data type, that it is defined as. Once they are defined, they can be assigned. For instance, they can be Integers, Strings, Booleans, etc. 

### Strings
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

### Integers
An integer is a whole number. To define an Integer called `age` do:
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

### Real numbers
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

### Boolean
A boolean is a variable that is either `true` or `false`:
```java
boolean alive = false;
String aliveAsString = Boolean.toString(alive);
alive = Boolean.parseBoolean(aliveAsString); 
```
