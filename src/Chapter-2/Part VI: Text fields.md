Text Fields
===

In Java there are are 3 main types of text field - the normal textfield, the password field and the drop-down menu. What these are and how they work will be explained in this chapter. As an introduction, if there is any doubt as to what a text field is, a text field is a box that lets the user input a small amount of text. As a passing statement, these textfields interact with the layouts introduced in that last part just as buttons do.

## The Normal Text Field
What a normal text field is was just explained, it is a way for the user to input text. To create these you will have to copy out the following:

```java
import javax.swing.JFrame;
import javax.swing.JTextField;

public class TexFields extends JFrame{
	JTextField normal = new JTextField();
	// The empty brackets can be filled with an integer to dictate the preffered size of the text field.
	
	public TexFields() {
		add(normal);
		
		setTitle("Normal Text Box");
		setVisible(true);
		setDefaultCloseOperation(EXIT_ON_CLOSE);
		pack();
	}
	
	public static void main(String[] args) {
		new TexFields();
	}
}
```
This displays a normal text field that text can be inputted into. Inside the brackets on Line 5 you can enter a few things. If you enter a string, you will create the background text that you first get when you run the program. If you were to enter an integer, this would dictate the size of the text field. You can enter both of course, and you would do so using the following code:

```java
JTextField normal = new JTextField("Your word here", 15);
```
This would output the following:

![A text field with its size and underlay designated](https://github.com/HashanP/cadmus/raw/master/src/Images/better_text_field.png)

### Ex 1
Copy the code above and run it. Try to input some text. If you wish, put an integer into line 5 to dictate the size of the text field. It should look like the following:

![A normal text field](https://github.com/HashanP/cadmus/raw/master/src/Images/normal_text_field.png)

## The Password Field
Whenever you have to enter a password into a website, what you type in is obscured by black dots. This is a result of the password field. To create this you will have to use the above syntax, but will have to import and use `JPasswordField`.

### Ex 2
Create a password field and see what happens when you try to type something in. Your finished product should look something like this:

![A password field](https://github.com/HashanP/cadmus/raw/master/src/Images/password_field.png)

## The Drop-down Menu
A drop-down menu is a text field that lets you choose from a preset list of options that, quite literally, drop down when you click a button. To do this you will have to import and use `JComboBox`. To use this you will have to declare an array which includes all of the options. You can see how to declare an array in Chapter 1 Part VI. You will then have to put the name of the array in the parameters that the `JComboBox` has. In other words: 

```java
JComboBox Doctor_Who = new JComboBox(monsters);
//where 'monsters' is the name of a String array.
```

### Ex 3
Create a drop-down menu with 5 different options. It does not have to be about Doctor Who and/or monsters. Your end result should look something like this (bear in mind that I've used aliens from Doctor Who):

![A drop-down Menu](https://github.com/HashanP/cadmus/raw/master/src/Images/drop-down_menu.png)

##**Accepting user input**

It's all very well having a text field on your screen, but it has no purpose if you cannot use what the user has inputted. Therefore for your text field to be fully working, you need to be able to accept and use these inputs. there are two main ways to do this, one using the above formats of text field; and one which uses a whole new format i.e. The `JOptionPane`. I will explain both of these in detail shortly.

##Using JTextFields

It can be very easy to display the user's input on the screen. To do this, all you really need to do is set a variable to be the input, and then set a label to be that variable. In other words, you can use the following code inside the actionPerformed method:

```java
public void actionPerformed(ActionEvent evt) {
	    String text = normal.getText();
	    label.setText(text);
	}
```
Add this to a button, text field and a label, and you can create something like the following:

![Displaying user input](https://github.com/BillsJ/cadmus/raw/master/src/Images/displaying_user_input.png)

###Ex 4
Convert your code to work with a password field - What is outputted?
See what happens with other text fields, or try to manipulate the user's input.

##Using a JOptionPane



