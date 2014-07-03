Layout
===

##The Border Layout

![alt text](https://github.com/BillsJ/cadmus/raw/master/src/Images/border_layout.png "The border layout")

A border layout allows you to place your elements into five different regions as shown above. 

```java
setLayout(new BorderLayout());
add(component1, BorderLayout.NORTH);
add(component2, BorderLayout.SOUTH);
add(component3, BorderLayout.EAST);
add(component4, BorderLayout.WEST);
add(component5, BorderLayout.CENTER);
```

##The Flow Layout

A Flow Layout is the simplest layout you can choose because it arranges the components one after another, going from left to right, in the order in which you add them.

```java
mywindow.setLayout(new FlowLayout()); 
mywindow.add(component1); 
mywindow.add(component2);
```
This displays elements of a frame so that component1 (which has already been initialised) comes before component2 (which has also been initialised).

##The Grid Layout

A Grid Layout arranges the components into a two dimensional grid with a number of rows and columns.

```java
setLayout(new GridLayout(2,3));
``` 
This creates a layout with two rows and three columns as seen below:

![alt text](https://github.com/BillsJ/cadmus/raw/master/src/Images/grid_layout.png "The grid layout")
