Printing
=================
Now, just like when you talk to your friends, your program must also be able to communicate with people. To "speak" your program will output text to the screen.  Below is an example of the code used to print some text:

```java
System.out.println("Hello world");
```

Try printing out Hello world (like above) and if it works try printing out your own custom messages. For now you do not need to know what 'System.out' is; at the moment all you need to be able to do is print a string of text. Notice that once you type in 'System.out' followed by a full stop you will get many different options popping up. This is simply the interpreter offering you suggestions for what to type, but for now we will only be interested in two of these: 'print' and 'println'. 'Print' simply outputs whatever you have inserted in the speech marks one after the other. Therefore if you were to type:

```java
System.out.print("Hello");
System.out.print("world");
```

Then the output would be:

```java
Helloworld
```

If you notice, there is no space between the 'Hello' and the 'world', so if we wanted to put a space in between we would print either:

```java
System.out.print("Hello world");
```

OR

```java
System.out.print("Hello ");
System.out.print("world");
```

OR

```java
System.out.print("Hello");
System.out.print(" world");
```

The three pieces of code above would all print:

```java
Hello world
```

However, if you use 'println' like we did at the very beginning, then 'Hello' would be printed and then 'world' would be printed on a new line. As proof, 'ln' stands for “line new”.

This is the code that we would write to create that output:

```java
System.out.println("Hello");
System.out.println("world");
``` 
 
This would print 'Hello', then a new line, and then print 'world' on that new line:

```java
Hello
world
```

#### Ex 1. 
So your first exercise is to write a program which prints out: 
```java 
Hello world
```

#### Ex 12
Write a program to print a continuous (never ending) pattern out.
Hint: Use an infinite loop (see below for loops).

#### Ex 13
Write a program to print a simple drawing of a house, once you have done that have some fun and see what else you can draw!
Hint: Use * or + or another symbol and the `println` function.

###### [Contents](https://github.com/BillsJ/cadmus/blob/master/Chapter-1/Part%20I:%20Introduction_and_contents.md#contents)
