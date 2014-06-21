![alt text](https://github.com/BillsJ/cadmus/raw/master/Images/Main_logo.png "Java logo")
# Coding Curriculum - Java KS4
## Contents
###  [Chapter I - Introduction](https://github.com/BillsJ/cadmus/blob/master/Chapter-1/Part%20I:%20Introduction_and_contents.md#chapter-i---introduction-1)	
####  [Installing Eclipse](https://github.com/BillsJ/cadmus/blob/master/Chapter-1/Part%20I:%20Introduction_and_contents.md#installing-eclipse-1)	
#### [What this course entails](https://github.com/BillsJ/cadmus/blob/master/Chapter-1/Part%20I:%20Introduction_and_contents.md#what-this-course-entails-1)
#### [Variables](https://github.com/BillsJ/cadmus/blob/master/Chapter-1/Part%20II:%20Variables.md#variables)
#### [Arithmetic](https://github.com/BillsJ/cadmus/blob/master/Chapter-1/Part%20II:%20Arithmetic.md#arithmetic)	
#### [Objects](https://github.com/BillsJ/cadmus/blob/master/Chapter-1/Part%20III:%20Objects.md#objects)	
#### [Methods](https://github.com/BillsJ/cadmus/blob/master/Chapter-1/Part%20V:%20Methods.md#methods)	
#### [Printing](https://github.com/BillsJ/cadmus/blob/master/Chapter-1/Part%20VII:%20Printing.md#printing)
#### [Loops](https://github.com/BillsJ/cadmus/blob/master/Chapter-1/Part%20IV:%20Loops.md#loops)	
#### If else statements	
#### Strings	
### Chapter II - Methods	
#### A general introduction to programming and the java platform	
#### What is a method?	
#### Q & A	
#### Java – accepting user input	
#### Accepting user input worksheet	
#### Summary	
#### Exercises	
### Chapter III - Arrays and Classes	
#### Arrays	
#### What is an array?	
#### How to declare and instantiate an array?	
#### Initialise array elements	
#### Length and index	
#### A complete example for using an array	
#### ArrayList	
#### Classes	
#### What is a class?	
#### What is a method?	
#### Constructor	
#### Drawing Geometric Primitives	
### Chapter IV - Java Swing	
#### Java swing	
#### Your first window	
#### Jpanel	
#### Layouts	
#### Buttons and action listeners	
#### Text fields	
#### More complex Programming	
#### Recap and complex examples	
#### Further look on Java Swing	
#### List of other methods	
#### Java swing exercises

|Title: An Introduction to Java Programming|
| ---------------------------------------- |

|Description|In this lesson the students will learn basic programming concepts and make their first Java program.|
| --------- | -------------------------------------------------------------------------------------------------- |
|Learning Objectives| We are aiming to: Learn programming concepts, these concepts that you will learn are core concepts that you will have to know to be able to program in any language, not just Java.Make your first Java program, preferably with errors (although no one will complain if there are not), so that you get a good feel for ‘debugging’ something that as a programmer you will have to do very often. 

This is because: 
- These are the basic skills required to program in Java and all other languages. - With these concepts mastered it’s possible to learn other programming languages in the future.

|Description                               |In this lesson the students will learn basic programming concepts and make their first Java program.|
|Learning Objectives                       |We are aiming to:
							     ..*Learn programming concepts, these concepts that you will learn are core concepts that you will have to know to be able to program in any language, not just Java.
							     ..*Make your first Java program, preferably with errors (although no one will complain if there are not), so that you get a good feel for ‘debugging’ something that as a programmer you will have to do very often.
					   This is because:
							   ..*These are the basic skills required to program in Java and all other languages.
							   ..*With these concepts mastered it’s possible to learn other programming languages in the future|



Success Criteria
By the end of the lesson, students will be able to:
Successfully run a Java program without any errors.
Be able to talk about programming concepts with relative confidence.



Previous Experience and Prior Knowledge Required
None for the students
An understanding of core Java and Java coding for the teacher(s)





Lesson Plan(s) - feel free to split this plan up into multiple sections 

Activities
Student Activities
Teacher Activities
Lesson Introduction
You will go over: how to initialise  a variable; how to perform arithmetic operations; what Objects are and how to use them; what Methods are and when it is best to use them; how to Print out text to the console (and what that in itself is), understand why  Loops and If else statements are so important to programmers, and finally go over Strings, which are a very important class type.
Teachers must set up eclipse and then proceed to help the students with what they are learning - it may be helpful to have previously created model answers for reference.
Main Activities
There are a total of 20 exercises for students to work through in this section. Students should aim to complete all 20 questions, of which some are more challenging than others. There are many different ways to approach each of the exercises, and students must take this into account when attempting the exercises.
Help students if they have questions regarding the exercises; if the question is about programming then refer to pages in this book/your own knowledge for further information. However, if the query involves errors in a program, read the error and try to figure out what is going wrong or what the error is trying to tell you. Proceed to analyse the error with the student as should have been explained in the introduction of the lesson(s).
Plenary (review)
Talk amongst peers about the concepts you have learnt, and ask each other challenging questions. If you get stuck, be sure to ask your teachers.
Answer all students queries, as before.

|Resources Needed: Eclipse|
| ----------------------- |


## Chapter I - Introduction
### Installing Eclipse

The students will be using a program called Eclipse to complete their exercises in. Eclipse is an example of an IDE, which stands for “integrated development environment”. In short, an IDE is an application which contains a set of tools used to create programs in whichever language you are using. The main tools which you and your students will be using are: an editor which is used to write and edit code, and the interpreter. I have mentioned the interpreter here, however you do not explicitly use the interpreter, it simply runs without you doing anything. As you type in code, the interpreter will constantly check to see if the syntax of your code is correct and that you have not made any silly mistakes. So you can imagine the interpreter as being an English teacher who is constantly checking to see if your grammar/punctuation (syntax) is correct whilst you write sentences, or in our case, code. As the interpreter is running all the time it means that if you are typing in code and you have not yet finished writing the line, you may encounter errors and your code may be underlined in red. This is nothing to worry about and will only be a problem when you finish writing the line, at which point you need to do some investigation work. Try to see if you have made a silly mistake, and if that endeavour bears no fruit, read the error and try to understand what it is trying to tell you, and then correct the mistake. This process of finding and eliminating errors is known as 'debugging'.

So now we will cover how to install Eclipse:

First, head over to Eclipse's website, which looks like this:
![alt text](https://github.com/BillsJ/cadmus/raw/master/Images/Eclipse_website_screenshot1.png "Eclipse website front page")

Next click the orange downloads button to take you to:
![alt text](https://github.com/BillsJ/cadmus/raw/master/Images/Eclipse_website_screenshot2.png "First page of downloads")

Now click eclipse standard, the first one listed, the latest version at the time of writing is version 4.3.2:
![alt text](https://github.com/BillsJ/cadmus/raw/master/Images/eclipse_standard.png "Eclipse standard 4.3.2")

Now under download links, you should see your OS (Operating System). Click it:
![alt text](https://github.com/BillsJ/cadmus/raw/master/Images/Eclipse_download_links.png "Know your computer version")

Next, click where it says “[United Kingdom] UK Mirror Service (http)”:
![alt text](https://github.com/BillsJ/cadmus/raw/master/Images/Eclipse_UK_mirror_service.png "This was made in the UK")

Now save the file. Once it has finished downloading, open and extract it.

Now simply double click on the eclipse file and Eclipse will now open. If you have had any problems during installation, please consult your School’s IT department or your teacher.


### What this course entails

Hello, and welcome to your new Java class. My name is Jarvis, and I am your new Java teacher. I will be helping you through the first part of your course.  To begin with, I will explain some simple concepts to you.

In this course you will learn how to program in Java and then Swing.  You can think of programming as a way of making your computer do things – and anything that you program and run on your computer is called a program.  Programs can be seen as a set of instructions that get executed when you run the program. The instructions for programs cannot be written in plain English; they must be written in different languages, one of which is Java.  Anything you write in Java is called code, and lines of code look very similar to sentences.  However there are some key differences, such as that lines of code end in a semi-colon (;) not a full-stop.  The tool that you will use to write Java is called Eclipse.  Eclipse will highlight different bits of your code so that you can see the different bits of code more clearly.  The code you write in Eclipse will tell your program what you want it to do when you run your code.  With that explained, on with the programming!
1) Open up Eclipse (your teacher should have explained how to do this).
It should look something like the screen shot below:

The green icon which looks like this is used to run your programs. It can be found in the top bar and you have to click it to run the current program you are working in. Provided that your program has no errors, your program should run.

Now right-click Outreach then click New->Class and you should see the following pop-up:



Where it says name type in Example then click Finish, and so your screen should look like this:


At the top of a Java program, usually you can find a comment or two stating the name of the person who wrote the program and a note on what the program does.  To write words and sentences in a program that other people can see when they look at your code but isn't visible to the computer when you run your program, write // at the start of the thing you want to write.  So, I would write //By Jarvis, this is an example program.
This is to let other people who view my code know that the code was written by me, and likewise you would write your own name.

Notice the words 'public class' in purple.  A class is a file which contains objects and methods (see descriptions in Basics section).  The word ‘public’ just means that the piece of code can be used in other classes. The other thing which we could have written in that space would be private, so that only the class that we are currently in can use the piece of code.

Now copy and paste this piece of code into the Example class

```java
public static void main(String[] args){
		
};
```

This is the main method, and every Java program needs a main method.  It is the first bit of code your program looks at when it is run.  If you have more than one main method, your program will get confused and will not know what to do.  (Where should it be starting from? This main method or that one?) So, the point is, you can only have ONE main method per program.  You can run other methods from the main method too.  The main method must always begin with that code and look like the screenshot above, and you cannot change the name of the main method. Bear in mind that by the end of your course, you will have to be able to memorise the piece of code above.

###### [Contents](https://github.com/BillsJ/cadmus/blob/master/Chapter-1/Part%20I.md#contents)
