In Java you will use things called objects.  You can call the objects whatever you like and can use the objects to mimic real life things around you.  So take for example, a book.  You can describe the object characteristics of the book, for example its author, its title, its year of publication, etc. All these details that are used to define the object are put in what is called a class.  (A class is just a way of describing an object using code).  Below is an example of a book class:

### Creating Classes
I've already alluded to classes before, but just so you understand

```java
public class Book {
  private String title;
  private String author;
  private String publisher;
 
  public Book(String bookTitle, String authorName, String publisherName) {
    title = bookTitle;
    author = authorName;
    publisher = publisherName;
  }
}
```

Notice the words public and private, public means that everything in the project can see it and private means that only the current class can see it.

To create a new book (object) you would simply write the code below:

```java
Book firstBook = new Book("Horton Hears A Who!","Dr. Seuss","Random House");
```

where Book is the name of the class and firstBook is the name of the new book you have just created.  You could have called it anything, for example:

```java
Book blah = new Book("Horton Hears A Who!", "Dr. Seuss", "Random House");
```

Notice that the way in which you create an object is similar to how you create a variable you have the type then the name of the object then the equals sign, the only difference comes after the equals sign.  Now, you have the word new which just tells the interpreter that the object that you are creating is a new object, and then you have what we call a constructor method, as the name suggests the constructor method simply helps to initialise the new object with the supplied characteristics. The characteristics of the object are passed as parameters.
