MyFirstWindow
===

Chapter 2 is all about Graphics. To make your first GUI (graphical user interface) application, i.e. GUIpplication, you need to use the package `javax.swing.JFrame`. Here is an example of an empty window:

```java
public class MyFirstWindow extends JFrame {
  public static void main(String[] args) {
    new MyFirstWindow();
  } 
  public MyFirstWindow() {
    setSize(300, 300);
    setTitle("MyFirstWindow");
    setVisible(true);
    setDefaultCloseOperation(EXIT_ON_CLOSE);
  }
}
```

Here, the class `MyFirstWindow` extends, thanks to the `extends` keyword, all of properties and methods of the `JFrame`. That means an object of a `MyFirstWindow` is also, in essense, and object of `JFrame`. The difference is in the custom methods of `MyFirstWindow` such as the constructor, where the title, size, and visibility are set. You may say that `setTitle`, `setSize`, and `setVisible` do not exist, but they are extended `JFrame` methods. `setDefaultCloseOperation(EXIT_ON_CLOSE)`, meanwhile just ensures that the Java app doesn't lay running hidden in the background.

The code above should output this when run:

![An empty window](../Images/my_first_window.png)

### Ex 1
Copy & run the code. Play around with `setSize`, `setTitle`, and `setVisible`.
