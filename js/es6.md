# ES6 features
## Arrow Function : Shorthand For Function definition

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