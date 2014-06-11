In Java it is very easy to add, subtract, divide, multiply.

Adding two ints x and y: (given they have already been initialised to some value)

```java
int z = x + y ;
```


Subtracting two ints x and y:

```java
int z = x + y ;
```

Dividing two ints x and y:

```java
int z = x/y ;
```

Beware as x and y are ints z is also an int, and if you remember ints are whole numbers so whatever z comes out to be will be rounded down to the nearest integer.  For example, if x=7 y=5, then z=1

To avoid this problem you can use a double instead, so if p is a double equal to 7.0 and q is a double 5.0, we could do the following

```java
double r = p/q ;
//r would be 1.4
```

To multiply two ints x and y:

```java
int z = x*y ;
```

The symbols for addition, subtraction, division, multiplication are +, -, /, * respectively.

Another function you may need to use is the modulus or absolute function, this is when you get only the value of a number, ignoring its sign, so the absolute value of 8 is still 8, whereas the absolute value of -27 is 27. You can use the following to get the absolute value of an int w.

```java
int z = Math.abs(w) ;
```

NOTE: Math.abs() can only be used if you write the statement import java.lang.Math; at the top of your program.

To compare two primitive variables which have the same type you can use == as shown below:

```java
if (5==5)
{
	System.out.println(“The two numbers match”)
}
//clearly these two numbers 5 and 5 match
```

To get the remainder of an int a when divided by another int b we can use % instead of / when dividing, so a%b, where a = 7, b = 5...

```java
int n = 7%5 ;
```
would result in n being 2.
