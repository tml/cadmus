### Declaring Arrays
An array is a list of variables. Arrays must be of a type. That is to say you cannot ahve an array that contains some Integers, next to some String, next to some Booleans. To declare an array in Java you use:

```java
int[] myArray;
```

Notice the square bracket notation. It tells the compiler that `myArray` isn't an Integer, but a list of integers. You must also initialise arrays.

**Way One** 
```java
myArray = new int[10];
```

**Way Two**
```java
myArray = {10, 523, 34, 63, 32, 64, 992, 353, 5, 0};
```

Both ways create arrays of type Integer, that have a size of 10. The second way, however, initialise the array with value. Arrays must have sizes. You cannot fill the array past the size. In the second way, Java assumes the size by the number of values the array is set two.

Finally, arrays can be declared and initiased together:
```java
bool[] myArray = new bool[10];
String[] girlfriends = {"Jessica", "Abby", "Zoey", "Daisy"};
```

### Accessing Arrays
You access arrays in Java using square bracket notation. For instance:

```java
int[] myArray = {5, 6, 7, 8};
System.out.println(myArray[0]); // Prints 5
System.out.println(myArray[1]); // Prints 6
System.out.println(myArray[2]); // Prints 7
System.out.println(myArray[3]); // Prints 8
```

Notice how the index `0` in the square brackets, correspond to the first item, etc. This is because programmers count from 0, because we are **non-conformists**. That is to say we are above the *status quo* (which is Latin for the way things are).

### Settings Arrays
Arrays can be set in a similar manner:

```java
String[] days = new String[10];
days[0] = "Monday";
days[1] = "Tuesday";
days[2] = "Wednesday";
days[3] = "Thursday";
days[4] = "Friday";
days[5] = "Saturday";
days[6] = "Sunday";
```

### Printing an entire Array
Sometimes, for the sake of debugging, you will want to print an entire array. In the `java.util.Arrays` package, that you will have to import, there is a function called `Arrays.toString()`, that takes an Array and outputs a String representation. E.g:
```java
String[] primaryColours = {"Red", "Green", "Blue"};
System.out.println(Arrays.toString(primaryColours));
// Prints: ["Red", "Green", "Blue"]
```

### Length of an array
Unlike strings where there is the `.length()` method, for arrays there is the `.length` property. E.g:

```java
String[] primaryColours = {"Red", "Green", "Blue"};
System.out.println("There are " + primaryColours.length + " primary colours.");
```
