### Comparing two JavaScript objects will always return false.
- When using the == operator, equal strings are equal:

```
var x = "John";             
var y = new String("John");

// (x == y) is true because x and y have equal values
```

- When using the === operator, equal strings are not equal, because the === operator expects equality in both type and value.

```
var x = "John";             
var y = new String("John");

// (x === y) is false because x and y have different types (string and object)

var x = new String("John");             
var y = new String("John");

// (x == y) is false because x and y are different objects
```
