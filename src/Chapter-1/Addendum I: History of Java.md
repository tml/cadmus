Java derives the majority of its core concepts and syntax from the programming language C, from which many other programming languages, such as JavaScript, C++ and Objective C. For example, the following code is perfectly valid in both C and Java:
```c
int age = 5;
char initial = "H";
bool alive = false;
double y = 3.3;
```

However in C, there in no concept of strings. In fact, there is no concept of classes. The closest thing to strings was arrays of chars. In C, however there was a concept of structures, that held properties, but not methods or constructors:
```c
struct Book {
  char[] title;
  char[] author;
  int volumesSold;
}
```
