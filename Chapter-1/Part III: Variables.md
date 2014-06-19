A variable is a piece of information or a value. A variable always has a name, which acts a reference to the piece of information it holds. A variable's name must not contain any spaces. For instance `my_variable` is a valid variable name, while `my variable` is not. It also has a datatype, that it is defined as. Once they are defined, they can be assigned. For instance, they can be Integers, Strings, Booleans, etc. 

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

You can make an integer from a string, by doing:
```java
String ageAsString = "13";
int age = Integer.toString(13);
```

You can increment and decrement variables:
```java
age++; // Age now equals 14
age--; // Age is back to 13
```

### Boolean
A boolean is a variable that is either `true` or `false`:
```java
bool alive = false;
bool dead = true;
```
