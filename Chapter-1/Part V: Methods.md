A method is another way of saying a function.  A method performs a task so say if you want to triple a number you may want to have a triple method for example. (It's always best to start the method name with a lower case letter and name it something similar to what it does). The `main` method is an example of a method that is **void** i.e. it returns nothing. That's why it has the `void` keyword before the method name. Methods should be define in a class. E.g:

```java
public static int triple(int number) {
	int tripleNumber = 3 * number;
	return tripleNumber;
}
```

After `public static` you write the type of the thing that you are returning, in this case we are taking in an int and returning an int. If of course it returns nothing, use the `void` keyword.  After the return type you have the name of the method, I have called this method triple, inside the brackets after the method name you have the parameters, this is the information that the method is given when the method is called.  So when we call the triple function we supply it with a number, triple then multiplies the number by three and then returns the tripled number.

To call the method from the `main` method, do:

```java
public static void main(String[] args) {
	System.out.println(triple(3));
}
```

Note `Math.abs()`, and `Math.sqrt()` are examples of methods in the `Math` package. Inside the `Math` package, there is also trigonometric functions such as `Math.sin()`, `Math.cos()`, and `Math.tan()`.

#### Ex 1
Write a program which contains a method called triple (and the main method of course), which triples a number.  Get the program to triple the number 34 and then print out the result.

#### Ex 2
Write a function, that given a name, returns a Hello World-style greeting. For instance if I called it with `George`, it would repond `Hello Geroge!`.
