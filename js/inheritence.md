var Shape = function () {
    // this.name = 'Shape';
    // this.toString = function () {
    //     return this.name;
    // }
}
// Every property or method which you want to share should be added to prototype
Shape.prototype.name = 'Shape';
Shape.prototype.toString = function () {
    return this.name;
}

function TwoDShape() {
    this.name = '2D shape';
}

function Triangle(side, height) {
    this.name = 'Triangle';
    this.side = side;
    this.height = height;
    //this.getArea = function () { return this.side * this.height / 2; };
}
Triangle.prototype.getArea = function () { return this.side * this.height / 2; };


/*  Method One
TwoDShape.prototype = new Shape();
TwoDShape.prototype.constructor = TwoDShape;       // Otherwise instances of TwoDShape would have a constructor of Shape 

Triangle.prototype = new TwoDShape();
Triangle.prototype.constructor = Triangle;       // Otherwise instances of Triangle would have a constructor of TwoDShape 

/////////////////////////////////////////////

var line = new TwoDShape();
console.log(line);
console.log(line.toString())
*/
// when you completely overwrite the prototype (as opposed to just augmenting it), this has some negative side effects on the constructor property.
// Every property or method which you want to share should be added to prototype and if so then
// Inheriting the Prototype Only
// You gain a little more efficiency by:
// - Not creating a new object for the sake of inheritance alone, and
// - Having less lookups during runtime when it comes to searching for toString() for example.

// TwoDShape.prototype = Shape.prototype;
// TwoDShape.prototype.constructor = TwoDShape;

// Triangle.prototype = TwoDShape.prototype;
// Triangle.prototype.constructor = Triangle;

/*
Simply copying the prototype is more efficient but it has a side effect: because all of the children and parents point to the same object, when a child modifies the prototype, the parents get the changes, and so do the siblings.
Look at this line:
Triangle.prototype.name = 'Triangle';
It changes the name property, so it effectively changes Shape.prototype.name too. If you create an instance using new Shape(), its name property will say "Triangle":
*/
// A Temporary Constructor—new F()
// A solution to the problem outlined above, where all prototypes point to the same object and the parents get children's properties, is to use an intermediary to 
// break the chain. The intermediary is in the form of a temporary constructor function. Creating an empty function F() and setting its prototype to the prototype of the 
// parent constructor, allows you to call new F() and create objects that have no properties of their own, but inherit everything from the parent's prototype
function Shape() { }
// augment prototype
Shape.prototype.name = 'shape';
Shape.prototype.toString = function () { return this.name; };
function TwoDShape() { }
// take care of inheritance
var F = function () { };
F.prototype = Shape.prototype;
TwoDShape.prototype = new F();
TwoDShape.prototype.constructor = TwoDShape;
// augment prototype
TwoDShape.prototype.name = '2D shape';
function Triangle(side, height) {
    this.side = side;
    this.height = height;
}

// take care of inheritance
var F = function(){};
F.prototype = TwoDShape.prototype;
Triangle.prototype = new F();
Triangle.prototype.constructor = Triangle;
// augment prototype
Triangle.prototype.name = 'Triangle';
Triangle.prototype.getArea = function(){return this.side * this.height / 2;};
