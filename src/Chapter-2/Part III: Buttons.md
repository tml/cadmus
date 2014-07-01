Buttons
===
In our next application, the buttons application, we have to be able to receive user input i.e. button presses. We will use the `JButton` class. The imports required for this application will be:

```java
import java.awt.FlowLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import javax.swing.JFrame;
import javax.swing.JButton;
import javax.swing.JLabel;
```

Here is the code, copy it:
```java
public class Buttons extends JFrame implements ActionListener {

    JButton btn1 = new JButton("Button 1");
    JButton btn2 = new JButton("Button 2");
	JLabel label = new JLabel("No buttons have been clicked", JLabel.CENTER);

    public static void main(String[] args) {
       new Buttons();
    }

    public Buttons() {
        btn1.addActionListener(this);
	    btn2.addActionListener(this);

        add(btn1);
	    add(btn2);
	    add(label);

        setLayout(new FlowLayout());
	    setSize(300, 100);
	    setTitle("Buttons");
	    setVisible(true);
	    setDefaultCloseOperation(EXIT_ON_CLOSE);
	}

    public void actionPerformed(ActionEvent e) {
        if(e.getSource() == btn1) {
            label.setText("btn1 was clicked");
        } else if(e.getSource() == btn2) {
            label.setText("btn2 was clicked");
        }
    }

}
```

Notice the `implements ActionListener`. Don't worry about that now. Just think of it as a different kind of `extends`. Rather than inheriting all the methods of the class in front of it, `implements` mean the class will contain the methods mandated by the thing in front of it. In this case it is the `actionPerformed()` method, which you do not call. By setting the ActionListener of `btn1` and `btn2` to `this` i.e. the current instance of `Buttons`, you are saying whenever `btn1` or `btn2` are clicked, you won't them to pass on the event to the current instance of `Buttons`. The `e` variable stores information about the event. `getSource()` will return the button that was pressed.

Finally, the `setText()` method on the label allows you to dynamically change the text.

These are what should be outputted at the start; when the first button is clicked; and when the second button is clicked:

![alt text](https://github.com/HashanP/cadmus/raw/master/src/Images/Buttons_none_clicked.png "The box when none of the buttons are clisked")
![alt text](https://github.com/HashanP/cadmus/raw/master/src/Images/btn1_clicked.png "What happens when button 1 is clicked")
![alt text](https://github.com/HashanP/cadmus/raw/master/src/Images/btn2_clicked.png "What happens when button 2 is clicked")

