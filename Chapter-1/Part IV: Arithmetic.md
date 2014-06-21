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
This relates specifically to the if else statement topic (which can be found [here]() and will be covered later).

To get the remainder of an int a when divided by another int b we can use % instead of / when dividing, so a%b, where a = 7, b = 5...
		
```java
int n = 7%5;
```
would result in n being 2.
		
#### Exercise 4
Physics Question – Write a program to work out what the power(W) of a device is if the voltage is 10V and the current is 6A, and print the result.
Hint: Power = Current * Voltage
		
#### Exercise 5
Physics Question – Turn the last exercise into a method that accepts parameters for current and voltage, then returns power in watts.  Then write a program that uses the power method to calculate the energy transferred in kWh, when the current is 5A, the voltage is 14V over the space of 2 hours and print the result.
Hint: Energy transferred (kWh) = Power (kW) × Time (h)
		
		
#### Exercise 6 
Physics Question – Write a program to work out the kinetic energy of an object of mass 500kg that has a velocity of 12 m/s, and print the result
Hint: Kinetic Energy = 0.5 * Mass * (Velocity)^2
		
#### Exercise 7 
Physics Question – Write a program to answer the following physics question and print the result.  If a car has a mass of 800 kg and moves with a velocity of 25 m/s, what force is needed to stop the car in 50 metres?
Hint: You may want to turn the previous exercise into a method so you can easily work out   the cars kinetic energy.  You will also need the equation Energy = Force * Distance.
		
#### Exercise 8
Maths Question – Write a program to work out the missing angle of a triangle which has two known angles of 108 degrees and 24 degrees.
Hint: The angles of a triangle must sum up to 180 degrees.
		
#### Exercise 9 
Write a program to calculate and print the sum of the digits that make up the five-digit number 54628.
Hint: Use a loop and %10 division to get the last digit of a number, and make use of dividing an int by 10 (the decimals will be omitted, so you can remove the last digit from a number).
		
#### Exercise 10
Write a program to print the number 2643553 backwards using a loop.
		
###### [Contents](https://github.com/BillsJ/cadmus/blob/master/Chapter-1/Part%20I:%20Introduction_and_contents.md#contents)
