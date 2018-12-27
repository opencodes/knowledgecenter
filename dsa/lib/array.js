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

    //Find number closest to zero in given array
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
        }
        ;

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

    //Curry
    curry(a) {
        return function (b) {
            return a + b;
        }
    }

    //Print a spiral matrix of mxn in given format
    /*
    [1 - 2 - 3
    4 - 5- 6
    7 - 8 - 9]
    Out : 1 2 3 6 9 8 7 4 5
    */
    printSpiralMatrix(arr, m, n) {
        var dir = 1,
            L = 0,
            R = n - 1,
            T = 0,
            B = m - 1,
            row = [];

        while (T <= B && L <= R) {
            //Traverse Left -> Right
            if (dir == 1) {
                for (var i = L; i <= R; i++) {
                    row.push(arr[T][i])
                }
                dir = 2;
                T++;
            }
            console.log(row);
            row = [];
            //Traverse Top -> Bottom
            if (dir == 2) {
                for (var i = T; i <= B; i++) {
                    row.push(arr[i][R])
                }
                dir = 3;
                R--;
            }
            console.log(row);
            row = [];
            //Traverse Right -> Left
            if (dir == 3) {
                for (var i = R; i >= L; i--) {
                    row.push(arr[B][i])
                }
                dir = 4;
                B--;
            }
            console.log(row);
            row = [];
            //Traverse Bottom -> Left
            if (dir == 4) {
                for (var i = B; i >= T; i--) {
                    row.push(arr[i][L])
                }
                dir = 1;
                L++;
            }
            console.log(row);
            row = [];
        }


    }

    rotateArray(A, B) {

        var ret = [];

        if (B > A.length) B = B % A.length;

        console.log(A.length, B);

        for (let i = B; i < A.length; i++) {
            ret.push(A[i]);
        }

        console.log(ret);
        for (let i = 0; i < B; i++) {
            ret.push(A[i]);
        }


        return ret;
    }

    coverPoints(X, Y) {

        var s1 = X.length,
            s2 = Y.length,
            ans = 0;


        for (var i = 1; i < s1; i++) {
            ans = ans + (Math.abs(X[i] - X[i - 1]) < Math.abs(Y[i] - Y[i - 1]) ? Math.abs(Y[i] - Y[i - 1]) : Math.abs(X[i] - X[i - 1]));
        }
        return ans;

    }

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

    }


}

export {
    ArrayUtil
}
