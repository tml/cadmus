Listeners
===

As an introduction, a Listener is something that listens for a certain action and then executes some code if that action takes place. You have met one before, the ActionListener, but there are many others.

## ActionListener
If you think back to when you discovered buttons, in that tutorial you had to write this into the class: `implements ActionListener`. Then you created another method that went along the lines of:

```java
public void actionPerformed(ActionEvent e) {

}
```

In this method you then coded what should happen when you press the button. This is the ActionListener and, quite literally, listens for an action taking place. This action is dictated by what you add to the ActionListener e.g. buttons. You add the buttons to the ActionListener by using the following code:

```java
btn.addActionListener(this);
//where 'btn' is the name of a button
```
