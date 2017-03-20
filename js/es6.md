# ES6 features
## Arrow Function : Shorthand For Function definition
- One important feature of the => syntax is that it shares the same this as the surrounding code. This is important and different than what happens when you normally create a function in Javascript.Generally when you write a function in Javascript that function is given its own this.
### With parameter single line body
```
var x = function (user){
  return "Hello "+ user;
}

var x = (user) => "Hello "+ user;
```

### With parameter multi line body
```
var x = function (user){
  return "Hello "+ user;
}

var x = (user) => {
var msg = "Hello, "+ user + "!"; 
return msg;
}
```

### Without parameter single line body
```
var x = function (){
  return "Hello ";
}

var x = hello =>  "Hello"; 
```

### Ignoring current function scope
```
var x = {
  msg : "hello",
  printHello : function(){
    var _this = this;
    this.handleEvent('event', function(user){
      return _this.msg + user; //To call parent property we used _this
    }
  }
}

var x = {
  msg : "hello",
  printHello : function(){
    var _this = this;
    this.handleEvent('event', (user) => this.msg + user;
  }
}
```
## let : Block level scope
```
var fs = [];
for(var i=0; i<3; i++){
    fs.push(function(){
        console.log(i);
    })
}
fs.forEach(function(f){
    f();
});

//It will print 
3
3
3
```

```
var fs = [];
for(let i=0; i<3; i++){
    fs.push(function(){
        console.log(i);
    })
}
fs.forEach(function(f){
    f();
})
//It will print 
0
1
2
```
## Default value for function parameter
```
function receive(complete){
    complete();
}

receive(function(){
    console.log("job completed");
})
```
//Using ES6
```
function receive(complete = function(){
    console.log("job completed");
}){
    complete();
}
```
//With Arrow
```

let receive = (complete = () => console.log("job completed")) => complete();

```
## Constant
```
const KEY = "dsfdsfsdf";
KEY = "fgfdgfdg";//Uncaught SyntaxError: Identifier 'KEY' has already been declared
const CONFIG = {};
CONFIG.host = "localhost";//Only reference is read-only so we can add properties but can't reassign
```
## Object Enhancement
```
var color = "red";
function go(){}
var x = {color, go}
```
##spread operator
The spread operator allows you to take an array and spread it out into its individual items.

If I log out an array with [ 1, 2, 3] you can see I get an array, so you have the brackets with [ 1, 2, 3].

console.log([ 1, 2, 3]); // [1, 2, 3]
If I put the three dots in front to say I want to spread this array and I hit run again, you can see I get 1, 2, 3 with no brackets around it.

console.log(...[ 1, 2, 3]) // 1 2 3
This actually allows us to push elements easily into other arrays.

## Destructuring : It extract specific elements from resource and make it available as new variable
```
var {name} = {
    name :"Rajesh",
    age : 30,
    email : "rkjha.it.in@gmail.com"
}
var [first,,,,] = [5,1,2,3,4,5,6,7]
console.log(name, first);

var items = [{
    name:"one",
    qty : 3
},{
    name:"two",
    qty : 3
},{
    name:"three",
    qty : 3
},{
    name:"four",
    qty : 3
}];
items.forEach(({name}) => console.log(name))
```
