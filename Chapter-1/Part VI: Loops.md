Loops
===

Loops are very important to programmers as they allow us to do complicated, long winded calculations in a short amount of time.

There a four main loops in Java, the for loop, while loop, do loop, and the enhanced for loop.  With each loop you have an initial condition, a final condition, and a set of instructions.  The set of instructions will continue to run until the final condition is met.

For loops are mostly used for counting up or down in steps, usually in steps of one.  The initial condition is an int which you can initialise to a value of your choice (most of the time we use 0 if counting up to a certain value), then we have a final condition so the value you want to count up or down to.  We also have a function to increase the number of steps , for increasing by one we will use ++ (as described previously), and for decreasing by one we will use --.  So now you know how a for loop works it is time to show you what one looks like.  Below is a for loop which starts at 0, counts up by 1 each step, and prints out the number of each step, until 10 steps have been reached.  (Notice the parameters of the method countTen says void, this is because the method does not require any parameters, and putting void is more clear than simply leaving the parameters blank)

```java
public void countTen(void)
{
	for (int n=0 ; n<=10 ; n++)
	{
		System.out.println(n) ;
	}
}
```java

So in the brackets of the for loop we initialise a variable called n to 0, and we use n++ to increase n by 1 each step, and we continue to do this for when n is less than or equal to 10.  So as the loop is first run the program checks to see whether the value of n meets the final condition (n<=10), since 0 is less than 10, n meets the condition, the piece of code within the {} is run once, and then n is increased by one, then the program checks to see whether the new value of n meets the final condition, since 1 is still less than 10 the code inside of the {} of the for loop is run once again, and this process continues until n is no longer less than or equal to 10, so this will happen when n is 11.  Once this occurs the for loop finishes and the code inside of the loop is no longer run.  Once you understand how a for loop works, the rest of the loops are fairly easy to pick up!

So onto the while loop.  The while loop has only one condition and if the condition is met then the code is run, otherwise the loop finishes.  Below is an example of a while loop. (With while loops, variables must be initialised before the loop starts)
 
Public void countTenWithWhileLoop(void)
{
	int n=0 ;
	while (n<=10)
	{
		System.out.println(n) ;
	}
}
Do you see any problems with this loop?  This is an example of an infinite loop, which is a loop that never ends; as n stays the same.  In order for the loop to finish, we need to include a piece of code to change the value of n.  Hopefully you would notice that we could use n++ to do this.  So the correct loop would look like this

Public void countTenWithWhileLoop(void)
{
	int n=0 ;
	while (n<=10)
	{
		System.out.println(n) ;
		n++ ;
	}
}

The best way of having an infinite loop is to use a while loop and set the condition to true. This way the condition is always true and so the code always gets executed.  It would look like this

while (true)
{
	//code to execute
}

Now onto the do loop.  This loop is nearly exactly the same as the while loop.  However the piece of code within the loop is run before checking to see if the condition is met.  This guarantees that the do loop is always run at least once.  Here is an example of the do loop.

Public void countTenWithDoLoop(void)
{
	int n=0 ;
	do
	{
		System.out.println(n) ;
		n++ ;
	}
	while (n<=9)
}

Notice here we must change 10 to 9, as if we keep it as 10, once n becomes 11 the piece of code will be run and then the program will check to see if the condition is met.

Finally the enhanced for loop.  This for loop is mainly used for going through items of an array (something you will learn about later), come back to the enhanced for loop once you have covered arrays.

So to go through items of an array, all you have to know is what type the items are once you know that you can easily go through the array.  For example, say if we had an array of ints and we wanted to print out every int in the array you would use the following code:

public void printIntArray(void)
{
	for (int n : nameOfArray)
	{
		System.out.println(n) ;
	}
}

Now that you have covered all of the different types of loops I will give you an example of a more complicated loop which will sum the numbers from 0 to 20

public void sumFirstFifteenNumbers(void)
{
	int sum=0 ;
	// we must initialise sum outside the loop, otherwise it would keep getting initialised to 0 each time the loop runs
	for (int n=0 ; n<=20 ; n++)
	{
		sum = sum + n ;
	}
	System.out.println(sum) ;
	// this prints out the final sum
}

Ex 14. Use a loop of your choice to print out all the multiples of 9 within the range 0-108.

Ex 15. Make a modified version of the program for the last exercise but this time sum up the multiples of 9 within the range 0-108 and print the result.

Ex 16. Write a program to check if the number 57 is a prime number.
Hint: you can use a loop to check if 57 is divisible by any of the numbers less than 57.  A number is divisible by another number if when divided by the number the remainder is 0 (so use % to work out the remainder).

Ex 17. Write a program to print out a table showing 0-32 Celsius but also showing their Fahrenheit conversions (to one decimal place); such that the first few lines would look like this:
Celsius	Fahrenheit
0		32.0
1		33.8
Hint: Use a loop and a method celsiusToFahrenheit to convert Celsius to Fahrenheit.
