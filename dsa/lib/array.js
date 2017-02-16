class ArrayUtil {

    constructor() {

    }

    findOccurenceInRange(n, start, end) {

        let str = "";
        let count = 0;

        for (var i = start; i <= end; i++) {
            if (i.toString().indexOf(9) !== -1) {
                count += i.toString().split('9').length - 1;
            }
        }

        return count;
    }

    findNumberClosestToZero(arr) {
        var i, pos, diff, num;
        for (var i = 0; i < arr.length; i++) {
            let absDiff = Math.abs(0 - arr[i]);
            if (!diff) {
                diff = absDiff;
                pos = i;
                num = arr[i];
            } else {
                if (absDiff < diff) {
                    diff = absDiff;
                    pos = i;
                    num = arr[i];
                }
                if (absDiff == diff && arr[i] >= 0) {
                    pos = i;
                    num = arr[i];
                }
            }

            console.log(i, pos, diff, absDiff, num)
        };

        return {
            num, pos
        };


    }

    /*
    Initialize: max_so_far = 0
    max_ending_here = 0
    Loop for each element of the array
    (a) max_ending_here = max_ending_here + a[i]
    (b) if(max_ending_here < 0) max_ending_here = 0
    (c) if(max_so_far < max_ending_here) max_so_far = max_ending_here
    return max_so_far
    */
    maxContiguousArray(a) {
        var max_so_far = 0,
            max_ending_here = 0;

        for (var i = 0; i < a.length; i++) {
            console.log('max_ending_here', max_ending_here);
            console.log('max_so_far', max_ending_here);
            max_ending_here = max_ending_here + a[i];

            if (max_ending_here < 0) {
                max_ending_here = 0;
            }
            if (max_so_far < max_ending_here) {
                max_so_far = max_ending_here;
            }

        }

        return max_so_far;

    }
    coverPoints(X, Y) {

            var s1 = X.length,
                s2 = Y.length,
                ans = 0;

            for (var i = 1; i < s1; i++) {
                ans = ans + (Math.abs(X[i] - X[i - 1]) < Math.abs(Y[i] - Y[i - 1]) ? Math.abs(Y[i] - Y[i - 1]) : Math.abs(X[i] - X[i - 1]));
            }
            return ans;

        },

        plusOneNew(a) {
            var b = [];
            //console.log( 'aaa ', a );
            a.forEach(function (i) {
                if (i) b.push(i);
            });

            var i = a.length;
            var carry = 1;
            while (--i >= 0) {
                var prev = +a[i];
                b[i] = +a[i] + carry;
                b[i] = b[i] % 10;
                if (b[i] < prev)
                    carry = 1;
                else carry = 0;
            }

            if (carry)
                b.unshift(1);
            while (b[0] === 0) b.shift();

            //console.log( 'hhhh ', a, b );
            return b;

        },



}

export {
    ArrayUtil
}
