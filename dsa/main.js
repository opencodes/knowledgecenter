import ArrayUtil from "lib/array";

var obj1 = new ArrayUtil();
//obj1.findOccurenceInRange(9, 1, 1000);
var arr = [[1,2,3],[4,5,6],[7,8,9]];
//obj1.printSpiralMatrix(arr, 3,3);

var A = [ 14, 5, 14, 34, 42, 63, 17, 25, 39, 61, 97, 55, 33, 96, 62, 32, 98, 77, 35 ];
var B = 56;

var output = obj1.rotateArray(A, B);

console.log("Output:- ", output)