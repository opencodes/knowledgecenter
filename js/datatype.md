### Number
- Difference between Number and parseInt
Number(object) tries to convert the entire string to a number(which can also be a float) while parseInt(object) parses up to first non-digit and returns whatever value has been parsed.
eg:
```
Number('123num') returns NaN
parseInt('123num') returns 123
```
Also, the complete format of parseInt() is parseInt(object, radix) where radix defines the base of the integer to be parsed into.

The radix parameter is used to specify which numeral system to be used, for  example, a radix of 16 (hexadecimal) indicates that the number in the string  should be parsed from a hexadecimal number to a decimal number.

If the radix parameter is omitted, JavaScript assumes the  following:
- If the string begins with "0x", the radix is 16 (hexadecimal)
- If the string begins with "0", the radix is 8 (octal). This  feature is deprecated
- If the string begins with any other value, the radix is 10 (decimal)

parseInt("010") returns 10  //older browser(older than ECMAScript 5) still returns 8

and 

parseInt(010) returns 8
