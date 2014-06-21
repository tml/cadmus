Methods
========================
A method is another way name for a function.  A method performs a task, for example, tripling a number. To do this you may want to have a triple method like below:
		
```java
public int triple(int number) {
	int tripleNumber = 3 * number;
	return tripleNumber;
}
```
		
After public you write the type of the thing that you are returning, in this case we are taking in an int and returning an int.  After the return type you type the name of the method, which I have called  'triple' (it's always best to start the method name with a lower case letter and name it something similar to what it does). inside the brackets after the method name you have the parameters, which are the pieces of information that the method is given when the method is called.  So, when we call the triple function we supply it with a number, the method then multiplies the number by three and returns the tripled number.
		
Methods must be called on objects.  To access public methods of an object from another class just type the name of the object (you must have already created an object like above) followed by a full-stop and you should get a pop up showing you all the available methods to use on that object.

#### Exercise 5
Physics Question – Turn the last exercise into a method that accepts parameters for current and voltage, then returns power in watts.  Then write a program that uses the power method to calculate the energy transferred in kWh, when the current is 5A, the voltage is 14V over the space of 2 hours and print the result.
Hint: Energy transferred (kWh) = Power (kW) × Time (h)

#### Ex 11
Write a program which contains a method called triple (and the main method of course), which triples a number.  Get the program to triple the number 34 and then print out the result.
		
###### [Contents](https://github.com/BillsJ/cadmus/blob/master/Chapter-1/Part%20I:%20Introduction_and_contents.md#contents)
