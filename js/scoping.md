#### What is the value of this at line A? Why?
````
<script type="text/javascript">
if (true) {
    // Line A
}
</script>
````
window

Line A is evaluated in the initial global execution context.

#### What is the value of this at line B when obj.staticFunction() is executed? Why?
````
<script type="text/javascript">
var obj = {
    someData: "a string"
};

function myFun() {
    // Line B
}

obj.staticFunction = myFun;

obj.staticFunction();
</script>
````
obj

When calling a function on an object, ThisBinding is set to the object.

#### What is the value of this at line C? Why?
````
<script type="text/javascript">
var obj = {
    myMethod : function () {
        // Line C
    }
};
var myFun = obj.myMethod;
myFun();
</script>
````
window

In this example, the JavaScript interpreter enters function code, but because myFun/obj.myMethod is not called on an object, ThisBinding is set to window.

This is different from Python, in which accessing a method (obj.myMethod) creates a bound method object.

#### What is the value of this at line D? Why?
````
<script type="text/javascript">
function myFun() {
    // Line D
}
var obj = {
    myMethod : function () {
        eval("myFun()");
    }
};
obj.myMethod();
</script>
````
window

This one was tricky. When evaluating the eval code, this is obj. However, in the eval code, myFun is not called on an object, so ThisBinding is set to window for the call.

#### What is the value of this at line E?
````
<script type="text/javascript">
function myFun() {
    // Line E
}
var obj = {
    someData: "a string"
};
myFun.call(obj);
</script>
````
obj

#### When invoking context-less function

````

var context = "global";

var obj = {  
    context: "object",
    method: function () {                  
        function f() {
            var context = "function";
            return this + ":" +this.context; 
        };
        return f(); //invoked without context
    }
};

document.write(obj.method()); //
````
[object Window]:global 
When you use this inside function that is invoked without any context (i.e. not on any object), it is bound to the global object (window in browser)(even if the function is defined inside the object) .
