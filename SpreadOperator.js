////Use the Spread Operator to Evaluate Arrays In-Place
//특정 객체 또는 배열의 값을 다른 객체, 배열로 복제하거나 옮길 때 사용
/*
ES6 introduces the spread operator, which allows us to expand arrays and other
expressions in places where multiple paramters or elements are expected.

The ES5 code below uses apply() to compute the maximum value in an array:
*/
/*
var arr = [6, 89, 3, 45];
var maximus = Math.max.apply(null, arr);
*/
/*
maximus would have a value of 89.

We had to use Math.max.apply(null, arr) because Math.max(arr) returns NaN.
Math.max() expects comma-separated arguments, but not an array. The spread operator
makes this syntax much better to read and maintain.
*/
/*
const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr);
*/
/*
maximus would have a value of 89.

...arr returns an unpacked array. In other words, it spreads the array. However,
the spread operator only works in-place, like in an arguments to a function or in
array literal. The following code will not work:
*/
//const spreaded = ...arr;
////////////////////////////////////////////////////////////////////////////////
//Copy all contents of arr1 into another array arr2 using the spread operator.
/*
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

//arr2 = [];
//정답
arr2 = [...arr1];

console.log(arr2);
*/
//결과
//['JAN', 'FEB', 'MAR', 'APR', 'MAY']
