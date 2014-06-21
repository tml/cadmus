Methods
========================
A method is another way of saying a function.  A method performs a task so say if you want to triple a number you may want to have a triple method for example. (It's always best to start the method name with a lower case letter and name it something similar to what it does)

```java
public int triple(int number) {
	int tripleNumber = 3 * number;
	return tripleNumber;
}
```

After public you write the type of the thing that you are returning, in this case we are taking in an int and returning an int.  After the return type you have the name of the method, I have called this method triple, inside the brackets after the method name you have the parameters, this is the information that the method is given when the method is called.  So when we call the triple function we supply it with a number, triple then multiplies the number by three and then returns the tripled number.

Methods must be called on objects.  To access public methods of an object from another class just type the name of the object (you must have already created an object like above) followed by a full-stop and you should get a pop up showing you all the available methods to use on that object.

#### Ex 11
Write a program which contains a method called triple (and the main method of course), which triples a number.  Get the program to triple the number 34 and then print out the result.

###### [Contents](https://github.com/BillsJ/cadmus/blob/master/Chapter-1/Part%20I.md#contents)
