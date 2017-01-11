##  What is JavaScript Use Strict?
"use strict"; Defines that JavaScript code should be executed in "strict mode".

- Declaring Strict Mode
Strict mode is declared by adding "use strict"; to the beginning of a script or a function.
*** Why Strict Mode? ***
- Strict mode makes it easier to write "secure" JavaScript.
- Strict mode changes previously accepted "bad syntax" into real errors.
In strict mode, 
	- any assignment to a non-writable property, 
	- a getter-only property, 
	- a non-existing property, 
	- a non-existing variable, 
	- a non-existing object, 
will throw an error.

*** Not Allowed in Strict Mode ***
- Using a variable, without declaring it, is not allowed:
- Using an object, without declaring it, is not allowed:
- Deleting a variable (or object) is not allowed.
- Deleting a function is not allowed.
- Duplicating a parameter name is not allowed:
- Octal numeric literals are not allowed:
- Escape characters are not allowed:
- Writing to a read-only property is not allowed:
````
"use strict";
var obj = {};
Object.defineProperty(obj, "x", {value:0, writable:false});

obj.x = 3.14; 
````
- Writing to a get-only property is not allowed:
````
"use strict";
var obj = {get x() {return 0} };

obj.x = 3.14;  
````
- Deleting an undeletable property is not allowed:
````
"use strict";
delete Object.prototype; // This will cause an error
````
- The string "eval" cannot be used as a variable:
````
"use strict";
var eval = 3.14;         // This will cause an error
````
- For security reasons, eval() is not allowed to create variables in the scope from which it was called:
````
"use strict";
eval ("var x = 2");
alert (x);               // This will cause an error
````
- In function calls like f(), the this value was the global object. In strict mode, it is now undefined.

- Future reserved keywords are not allowed in strict mode. These are:






