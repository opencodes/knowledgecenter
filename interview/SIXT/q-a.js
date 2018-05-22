/*Q-A: (your file: q-a.js)
Suppose we have 2 arrays:
var a = [10, 2, 3, 42, 5, 6];
var b = ['f', 'b', 'c', 3, 'd', 'e'];
How would you find out the element that is contained in both arrays in the most optimal way you can think of? Write the code in
plain JavaScript (don't include any external lib like jQuery or whatever).
*/


function getCommonElement(a, b) {
    var c = {}, 
    counter = 0, 
    commonElement = [], 
    minArr = (a < b) ? a : b, 
    maxArr = (a > b) ? a : b, 
    k;

    for (k = 0; k < minArr.length; k++) {
        c[minArr[k]] = k;
    }

    for (var k = 0; k < maxArr.length; k++) {
        if (minArr[maxArr[k]] != undefined && commonElement.indexOf(maxArr[k])) {
            commonElement.push(maxArr[k]);
        }
    }

    return commonElement;
}
var a = [10, 2, 3, 42, 5, 6];
var b = ['f', 'b', 'c', 3, 2, 'e'];

console.log(getCommonElement(a, b));


