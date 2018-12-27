import {ArrayUtil} from './dsa/lib/array';

Array.prototype.reduce = function(callback, initialvalue) {
    var counter;
    var calculatedValue;

    if (this.length === 0) {
        return this;
    }else{
        if (arguments.length === 1) {
            counter = 1;
            calculatedValue = this[0];
        }else if (arguments.length >=2) {
            counter = 0;
            calculatedValue = initialvalue;
        }else{
            throw "Invalid arguments";
        }
    }

    while(counter < this.length){
        calculatedValue = callback(calculatedValue, this[counter]);
        counter++;
    }

    return calculatedValue;

};
var arr1 = new ArrayUtil();
//console.log("No of occurence of 9 in 1-100 is " , arr1.findNumberClosestToZero([3,8]));

// var sum = [3,8,7].reduce(function(a, b) {
// 	return a * b;
// })
//console.log("Sum", sum)
//console.log(arr1.curry(5)(6))
var arr = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]];
//arr1.printSpiralMatrix(arr, 4,4);

var A = [ 14, 5, 14, 34, 42, 63, 17, 25, 39, 61, 97, 55, 33, 96, 62, 32, 98, 77, 35 ];
var B = 56;

var output = arr1.rotateArray(A, B);
//35 14 5 14 34 42 63 17 25 39 61 97 55 33 96 62 32 98 77
console.log("Output:- ", output)

