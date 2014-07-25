Exercises
===
Congratulations for managing to go so far.  As of now, you can consider yourself a fluent speaker of Java and Java swing. You are capable of building complex and useful GUI's. So remember that programming in swing is like playing lego: you create a new piece, add features to it: and then you add it to a bigger piece and so one. One advice to you is that you need to do more complex interface.  First do a quick sketch of what you want to achieve, think about which layout to use. If ever you have logic errors (the program compiles but the result is not the expected one) then go through your code step by step and be sure you have not forgotten to put the `setVisible()` that your size are correct; that you have correctly added the elements; at all times you must bear in mind that the computer is a big baby and you have to specify everything!


When programming in Java Swing, here are a few things you want to be careful:
- Do not forget to set your window visible.
- Check that you have correctly added each component to their correct element.
- Be careful that you correctly declare your layouts and that nothing oversteps.
- When you use buttons either be sure that your elements are final or that you are using the other method.

### Ex 1
Create the following window without using panels:

### Ex 2 
Create the same window but this time use panels:

### Ex 3
Create the following window:

Tools: You are surely going to have to use the following method:
setBorder(BorderFactory.createEmptyBorder(integer, integer, integer, integer)). You apply it to any Jpanel or Jframe and it creates an inner empty border with the parameters (top, left, bottom, right).
