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
console.log("No of occurence of 9 in 1-100 is " , arr1.findNumberClosestToZero([3,8]));

var sum = [3,8,7].reduce(function(a, b) {
	return a * b;
})
console.log("Sum", sum)

console.log(arr1.curry(5)(6))

