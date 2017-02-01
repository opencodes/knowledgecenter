class ArrayUtil {

    constructor() {

    }

    findOccurenceInRange(n, start, end){

    	let str = "";
    	let count = 0;

    	for (var i = start; i <= end; i++) {
    		if (i.toString().indexOf(9) !== -1) {
    			count += i.toString().split('9').length - 1;
    		}
    	}

    	return count;
    }

    findNumberClosestToZero(arr){
    	var i, pos, diff, num;
    	for (var i = 0; i < arr.length; i++) {
    		let absDiff = Math.abs(0-arr[i]);
    		if (!diff) {
    			diff = absDiff;
    			pos = i;
    			num = arr[i];
    		}else{
    			if(absDiff < diff){
	    			diff = absDiff;
	    			pos = i;
	    			num = arr[i];
	    		}
	    		if(absDiff == diff && arr[i] >= 0){
	    			pos = i;
	    			num = arr[i];
	    		}
    		}
    		
    		console.log(i, pos, diff, absDiff, num)
    	};

    	return {num, pos};
    	

    }

    curry(a) {
        return function (b) {
            return a + b;
        }
    }






}

export {ArrayUtil}