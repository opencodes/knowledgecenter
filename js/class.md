## Base classes
A class is defined like this in ECMAScript 6 (ES6):
```
    class Point {
        constructor(x, y) {
            this.x = x;
            this.y = y;
        }
        toString() {
            return '(' + this.x + ', ' + this.y + ')';
        }
    }
```
You use this class just like an ES5 constructor function:
```
    > var p = new Point(25, 8);
    > p.toString()
    '(25, 8)'
```
In fact, the result of a class definition is a function:
```
    > typeof Point
    'function'
```
However, you can only invoke a class via new, not via a function call (Sect. 9.2.2 in the spec):
```
    > Point()
    TypeError: Classes can’t be function-called
```
## Class declarations are not hoisted

Function declarations are hoisted: When entering a scope, the functions that are declared in it are immediately available – independently of where the declarations happen. That means that you can call a function that is declared later:
```
    foo(); // works, because `foo` is hoisted
    
    function foo() {}
```
In contrast, class declarations are not hoisted. Therefore, a class only exists after execution reached its definition and it was evaluated. Accessing it beforehand leads to a ReferenceError:
```
    new Foo(); // ReferenceError
    
    class Foo {}
```
The reason for this limitation is that classes can have an extends clause whose value is an arbitrary expression. That expression must be evaluated in the proper “location”, its evaluation can’t be hoisted.
