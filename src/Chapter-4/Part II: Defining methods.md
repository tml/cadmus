Here's an example of a method:

```java
public void convertToF(int celcius) {
		int fahrenheit = celcius * 9/5 + 32;
		System.out.println(“ C:” + celcius + “ F: ” + fahrenheit);
	}
```
	
Don’t worry if you don’t quite understand what’s going on in the code above for now. What you are looking at, however, is a basic method which converts a temperature you specify in degrees Celcius to its equivalent in Fahrenheit.  

## Creating and defining your very first method

Before creating your first method, there are a few things you need to know. Mainly, the two ingredients needed to create a method: the method *header* and the method *body*.

To do this, let’s first decipher the method above.

The very first line of the method named convertToF is known as the method header.

```java
public void convertToF(int celsius)
```

When we refer to a method body we basically mean everything within the curly brackets after a method header.

```java
public void convertToF(int celsius) {
		int fahrenheit = celsius * 9/5 + 32;
		System.out.println(“ C:” + celcius + “ F: ” + fahrenheit);
	}
```

