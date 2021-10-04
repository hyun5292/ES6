////Convert Celsius(섭씨) to Fahrenheit(화씨)
/*
The algorithm to convert from Celsius to Fahrenheit is the temperature in Celsius
times 9/5, plus 32.

You are given a variable celsius representing a temperature in Celsius. Use the
variable fahrenheit already defined and assign it the Fahrenheit temperature
equivalent to the given Celsius temperature. Use the algorithm mentioned above
to help convert the Celsius temperature to Fahrenheit.
*/
/*
function convertToF(celsius) {
  let fahrenheit;
  fahrenheit = celsius * 9/5 + 32;
  return fahrenheit;
}
convertToF(30);
*/
////////////////////////////////////////////////////////////////////////////////
////Reverse a String
/*
Reverse the provided string.
You may need to turn the string into an array before you can reverse it.
Your result must be a string.
*/
/*
function reverseString(str) {
  let result = "";
  for (let i = str.length; i > 0; i--) {
    result += str[i-1];
  }
  return result;
}
//reverseString("hello");
console.log(reverseString("hello"));
*/
////////////////////////////////////////////////////////////////////////////////
////Factorialize a Number
/*
Return the factorial of the provided integer.
If the integer is represente with the letter n, a factorial is the product of all
positive integers less than or equal to n.
Factorials are often represented with the shorthand notation n!
For example: 5! = 1 * 2 * 3 * 4 * 5 = 120
Only integers greater than or equal to zero will be supplied to the function
*/
/*
function factorialize(num) {
  let result = 1;
  for (let i = num; i > 0; i--){
    result *= i;
  }
  return result;
}
factorialize(5);
*/
////////////////////////////////////////////////////////////////////////////////
////Find the Longest Word in a String
/*
Return the length of the longest word in the provided sentence.
Your response should be a number.
*/
/*
function findLongestWordLength(str) {
  let words = str.split(" ");
  let maxValue = 0;
  for(let i = 0; i < words.length; i++) {
    if(words[i].length > maxValue) {
      maxValue = words[i].length;
    }
  }
  return maxValue;
}
findLongestWordLength("The quick brown fox jumped over the lazy dog");
console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
*/
////////////////////////////////////////////////////////////////////////////////
////Return Largest Numbers in Arrays
/*
Return an array consisting of the largest number from each provided sub-array.
For simplicity, the provided array will contain exactly 4 sub-arrays.
Remember, you can iterate through an array with a simple for loop, and access each
member with array syntax arr[i].
*/
/*
function largestOfFour(arr) {
 let result = [];
  for(let i = 0; i < arr.length; i++) {
    let maxValue = arr[i][0];
    for (let j = 0; j < arr[i].length; j++) {
      if(arr[i][j] > maxValue) {
        maxValue = arr[i][j];
      }
    }
    result.push(maxValue);
  }
  return result;
}
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
*/
////////////////////////////////////////////////////////////////////////////////
////Confirm the Ending
/*
Check if a string (first argument, str) ends with the given target string (second
argument, target).
This challenge can be solved with the .endsWith() method, which was introduced in
ES2015, But for the purpose of this challenge, we would like you to use one of the
JavaScript methods instead.
*/
/*
function confirmEnding(str, target) {
  let whereBegin = str.length - target.length;
  let endStr = str.slice(whereBegin, str.length);
  if(endStr == target) {
    return true;
  } else {
    return false;
  }
  //return str.slice(str.length - target.length) === target;
}
confirmEnding("Bastian", "n");
*/
////////////////////////////////////////////////////////////////////////////////
////Repeat a string Repeat a String
/*
Repeat a given string str (first argument) for num times (seconde argument). Return
an empty string if num is not a positive number. For the purpose of this challenge,
do not use the built-in .repeat() method.
*/
/*
function repeatStringNumTimes(str, num) {
  let result = "";
  for (let i = 0; i < num; i++) {
    result += str;
  }
  return result;
}
repeatStringNumTimes("abc", 3);
*/
////////////////////////////////////////////////////////////////////////////////
////Truncate a String
/*
Truncate a string (first argument) if it is longer than the given maximum string
length (second argument). Return the truncated string with a ... ending.
*/
/*
function truncateString(str, num) {
  let result = "";
  if(str.length > num) {
    result = str.slice(0, num) + "...";
  } else {
    result = str;
  }
  return result;
  //return str.length > num ? str.slice(0, num) + "..." : str;
}
truncateString("A-tisket a-tasket A green and yellow basket", 8);
*/
////////////////////////////////////////////////////////////////////////////////
////Finders Keepers
/*
Create a function that looks through an array arr and returns the first element
in it that a passes a 'truth test'. This means that given an element x, the 'truth
test' is passed if func(x) is true. If no element passes the test, return undefined.
*/
/*
function findElement(arr, func) {
  for(let i = 0; i < arr.length; i++) {
    if(func(arr[i])) {
      return arr[i];
    }
  }
  return undefined;
}
findElement([1, 2, 3, 4], num => num % 2 === 0);
*/
////////////////////////////////////////////////////////////////////////////////
////Boo who
/*
Check if a value is classified as a boolean primitive. Return true or false.
Boolean primitives are true and false.
*/
/*
function booWho(bool) {
  return typeof bool === "boolean";
}
booWho(null);
*/
////////////////////////////////////////////////////////////////////////////////
////Title Case a Sentence
/*
Return the provided string with the first letter of each word capitalized. Make
sure the rest of the word is in lower case.
For the purpose of this exercise, you should also capitalize connecting words like
the and of.
*/
/*
function titleCase(str) {
  let arr = str.toLowerCase().split(" ");
  let result = arr.map(function(val) {
    return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
  });
  return result.join(" ");
}
titleCase("I'm a little tea pot");
*/
////////////////////////////////////////////////////////////////////////////////
////Slice and Splice
/*
You are given two arrays and an index.
Copy each elemeent of the first array into the second array, in order.
Begin inserting elements at index n of the second array.
Return the resulting array. The input arrays should remian the same after the
function runs.
*/
/*
function frankenSplice(arr1, arr2, n) {
  let result = arr2.slice();
  result.splice(n, 0, ...arr1);
  return result;
}
console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
*/
////////////////////////////////////////////////////////////////////////////////
////Falsy Bouncer
/*
Remove all falsy values from an array.
Falsy values in JavaScript are false, null, 0, "", undeinfed and NaN.
*/
/*
function bouncer(arr) {
  let result = [];
  for(let i = 0; i < arr.length; i++) {
    if(arr[i]) {
      result.push(arr[i]);
    }
  }
  return result;
}
console.log(bouncer([7, "ate", "", false, 9]));
*/
////////////////////////////////////////////////////////////////////////////////
////Where do I Belong
/*
Return the lowest index at which a value (second argument) should be inserted into
an array (first argument) once it has been sorted. The returned value should be a
number.
For example, getIndexToIns([1, 2, 3, 4], 1.5) should return 1 because it is greater
than 1 (index 0), but less than 2 (index 1).
Likewise, getIndexToIns([20, 3, 5], 19) should return 2 because once the array
has been sorted it will look like [3, 5, 20] and 19 is less than 20 (index 2) and
greater than 5 (index 1).
*/
/*
function getIndexToIns(arr, num) {
  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= num) {
      return i;
    }
  }
  return arr.length;
}
console.log(getIndexToIns([40, 60], 50));
*/
////////////////////////////////////////////////////////////////////////////////
////Mutations
/*
Return true if the string in the first element of the array contains all of the
letters of the string in the second element of the array.
For example, ["hello", "Hello"], should return true because all of the letters in
the second string are present in the first, ignoring case.
The arguments ["hello", "hey"] should return false because the string hello does
not contain y.
Lastly, ["Alien", "line"], should return true because all of the letters in line
are present in Alien.
*/
/*
function mutation(arr) {
  let test = arr[1].toLowerCase();
  let target = arr[0].toLowerCase();
  for (let i = 0; i < test.length; i++) {
    if (target.indexOf(test[i]) < 0) return false;
  }
  return true;
}
mutation(["hello", "hey"]);
*/
////////////////////////////////////////////////////////////////////////////////
////Chunky Monkey
/*
Write a function that splits an array (first argument) into groups the length of
size (second argument) and returns them as a two-dimensional array.
*/
/*
function chunkArrayInGroups(arr, size) {
  let result = [];
  for(let i = 0; i < arr.length; i+=size) {
    result.push(arr.slice(i, i+size));
  }
  return result;
}
console.log(chunkArrayInGroups(["a", "b", "c", "d", "e"], 2));
*/
////////////////////////////////////////////////////////////////////////////////
