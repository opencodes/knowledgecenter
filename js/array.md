
- Arrays are a special type of objects. The typeof operator in JavaScript returns "object" for arrays.
- Array elements can be any of primitive data types including array, function , object and array itself
- Adding elements with high indexes than it length can create undefined "holes" in an array
- If you use a named index, JavaScript will redefine the array to a standard object. After that, all array methods and properties will produce incorrect results.
### What is the difference between condensed arrays and literal arrays?
- Oddly enough, new Array(size) is almost 2x faster than [] in Chrome, and about the same in FF and IE (measured by creating and filling an array). It only matters if you know the approximate size of the array. If you add more items than the length you've given, the performance boost is lost.
- new Array(40, 100) Creates an array with two elements (40 and 100) , new Array(40)  Creates an array with 40 undefined elements

### How to Recognize an Array
JavaScript operator typeof returns "object" for array element
- Solution 1: To solve this problem ECMAScript 5 defines a new method Array.isArray():
- Solution 2: To solve this problem you can create your own isArray() function: 
```
function isArray(x) {
    return x.constructor.toString().indexOf("Array") > -1;
}
var fruits = ["Banana", "Orange", "Apple", "Mango"];
isArray(fruits); // true
```

- Solution 3: The instanceof operator returns true if an object is created by a given constructor:
```
var fruits = ["Banana", "Orange", "Apple", "Mango"];

fruits instanceof Array     // returns true
```
### Deleting Elements
```
var fruits = ["Banana", "Orange", "Apple", "Mango"];
delete fruits[0];           // Changes the first element in fruits to undefined
```
- Using delete may leave undefined holes in the array. Use pop() or shift() instead.

### Questions
- Implement reduce
- Implement map
- Implement debounce 
If your web app uses JavaScript to accomplish taxing tasks, a debounce function is essential to ensuring a given task doesn't fire so often that it bricks browser performance.
