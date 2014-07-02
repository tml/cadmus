HelloWorld
===

In the last part, we created an empty window; now, we want to add some text to it. We will create a class that extends the JFrame from HelloWorld just like last time, but this time our class will have a property called `label` that will be an instance of the class `JLabel`. We will also use an instance of the `FlowLayout` class to organise the elements on screen. The following imports will be needed:

```java
import java.awt.FlowLayout;
import javax.swing.JFrame;
import javax.swing.JLabel;
```

Here is the code, copy it and we'll discuss it later:

```java
public class HelloWorld extends JFrame {
    JLabel label = new JLabel("Hello World", JLabel.CENTER);

    public static void main(String[] args) {
        new HelloWorld();
    }

    public HelloWorld() {
        add(label);

        setLayout(new FlowLayout());
	    setSize(300, 70);
	    setTitle("Hello World");
	    setVisible(true);
	    setDefaultCloseOperation(EXIT_ON_CLOSE);
	}
}
```

Notice the constructor for the `JLabel`, it takes in two parameters, both of which are optional. The first is its text, the second is its alignment. We, then, use the `add()` method to add it to the window. Also notice how the `setLayout()` method is used to set the **layout manager** to a new instance of a `FlowLayout`. 

This should be outputted:

![alt text](https://github.com/HashanP/cadmus/raw/master/src/Images/Hello_World.png "Now the box has text!")

#### Ex 1
Play around with it. Try adding another `JLabel` with a different greeting. You may have to change the second parameter, the height parameter, of `setSize()` to fit it in. You will have to add another call to the `add()` method.
