Arithmetic
====================
In Java it is very easy to add, subtract, divide and multiply.

The symbols for addition, subtraction, division and multiplication are `+`, `-`, `/`, `*` respectively.
		
This is how to add two ints 'x' and 'y' (given that they have already been initialised to a value):
		
```java
int z = x + y;
```
		
		
This is how to subtract the two ints:
		
```java
int z = x - y;
```
		
This is how to divide the two ints x and y:
		
```java
int z = x / y;
```
		
**Beware, as x, y and z are ints, and if you remember ints are whole numbers, so whatever z comes out to be will be rounded down to the nearest integer.  For example, if x=7 y=5, then z=1**
		
To avoid this problem you can use a double instead, so if p is a double equal to 7.0 and q is a double 5.0, we could do the following
		
```java
double r = p / q;
```

The output of which would be:

```java
1.4
```

Finally, this is how to multiply the two ints x and y:
		
```java
int z = x * y;
```

If you ever want to increase or decrease a number by 1 you can use the following piece of code. In this case, the int 'number' has been set to 5:
		
```java
number++;

number--;
```

As a result of this the computer will print out:

```java
6

4
```

Another function you may need to use is the modulus or absolute function; this is when you get only the value of a number, ignoring its sign. This means that the absolute value of 8 is still 8, whereas the absolute value of -27 is 27. You can use the following to get the absolute value of a given int `w` (which has been initialised to '-7'):
		
```java
int z = Math.abs(w);
```

This would output:

```java
7
```

**NOTE: Math.abs() can only be used if you write the statement import java.lang.Math; at the top of your program (as a side note you will get an error when you type in Math.abs(); clciking on this eror will allow you to import the function, removing the need to write out import java.lang.Math; yourself. This concept can apply toalmost all external functions that you use).**
		
To compare two primitive variables which have the same type you can use == as shown below:
		
```java
if (5==5) {
	System.out.println(“The two numbers match”);
}
//clearly these two numbers 5 and 5 match
```
This relates specifically to the if else statement topic (which can be found [here](https://github.com/BillsJ/cadmus/blob/master/Chapter-1/Part%20VIII:%20If%20else%20statements.md#if-else-statements) and will be covered later).

To get the remainder of an int called 'a' when divided by another int called 'b', we can use % instead of / when dividing, so a%b, where a = 7, b = 5:
		
```java
int n = 7%5;
```
would result in n being 2.

#### Ex 3. 
Physics Question – Write a program in which you work out the percentage efficiency of a light bulb that is supplied with 50J (Joules), and uses 2J to produce light. Have the program print the result.
Hint: % efficiency = (useful power)/(total power)
		
#### Ex 4.
Physics Question – Write a program to work out what the power(W) of a device is if the voltage is 10V and the current is 6A, and then print the result.
Hint: Power = Current * Voltage
		
#### Ex 5.
Physics Question – Write a program to work out the kinetic energy of an object with a mass 500kg that has a velocity of 12 m/s, and print the result.
Hint: Kinetic Energy = 0.5 * Mass * (Velocity)^2
		
#### Ex 6. 
Physics Question – Write a program to answer the following physics question and print the result.  If a car has a mass of 800 kg and moves with a velocity of 25 m/s, what force is needed to stop the car in 50 metres?
Hint: You may want to use the previous exercise so you can work out the cars kinetic energy. You will also need the equation: Energy = Force * Distance (you will need to rearrange this).
		
#### Ex 7.
Maths Question – Write a program to work out the missing angle of a triangle which has two known angles of 108 degrees and 24 degrees.
Hint: The angles of a triangle must sum up to 180 degrees.
		
###### [Contents](https://github.com/BillsJ/cadmus/blob/master/Chapter-1/Part%20I:%20Introduction_and_contents.md#contents)
