History of Java
===

Java derives the majority of its core concepts and syntax from the programming language C, from which many other programming languages, such as JavaScript, C++ and Objective C. For example, the following code is perfectly valid in both C, C++ and of course Java:
```c
int age = 5;
char initial = 'H';
bool alive = false;
double y = 3.3;
```

However in C, there in no concept of strings. In fact, there is no concept of classes. The closest thing to strings were arrays of chars. In C, however there was a concept of structures, that held properties, but not methods or constructors:
```c
struct Book {
  char[] title;
  char[] author;
  int volumesSold;
}
```

In C all methods would be outside of classes, for instance the `main` method would look like this:
```c
int main() {
    // Code
}

// OR

int main(int argc, char **argv) {
	// Code
}
```

`argv` would be a two-dimentional array of chars, i.e. an array of arrays of chars, i.e. an array of strings; it would be identical to `args` in Java. `argc` on the other hand would be the length of `argv`, because in C arrays did not have a `.length` property.
