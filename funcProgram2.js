////Combine Two Arrays Using the concat Method
/*
Concatenation means to join items end to end. JavaScript offers the concat method
for both strings and arrays that work in the same way. For arrays, the method is
called on one, then another array is provided as the argument to concat, which is
adde dto the end of the first array. It returns a new array and does not mutate
either of the original arrays. Here's an example:
*/
//[1, 2, 3].concat([4, 5, 6]);
/*
The returned array would be [1, 2, 3, 4, 5, 6]
*/
////////////////////////////////////////////////////////////////////////////////
/*
Use the concat method in the nonMutatingConcat function to concatenate attach to
the end of original. The function should return the concatenated array.
*/
/*
function nonMutatingConcat(original, attach) {
  return original.concat(attach);
}
var first = [1, 2, 3];
var second = [4, 5];
nonMutatingConcat(first, second);
*/
////////////////////////////////////////////////////////////////////////////////
////Add Elements to the End of an Array Using concat Instead of push
/*
Functional programming is all about creating and using non-mutating functions.

The last challenge introduced the concat method as a way to combine arrays into
a new one without mutating the original arrays. Compare concat to the push method.
push adds an item to the end of the same array it is called on, which mutates that
array. Here's an example.
*/
//var arr= [1, 2, 3];
//arr.push([4, 5, 6]);
/*
arr would have a modified value of [1, 2, 3, [4, 5, 6]], which is not the functional
programming way.

concat offers a way to add new items to the end of an array without any mutating
side effects.
*/
////////////////////////////////////////////////////////////////////////////////
/*
Change the nonMutatingPush function so it uses concat to add newItem to the end
of original instead of push. The function should return an array.
*/
/*
function nonMutatingPush(original, newItem) {
  return original.concat(newItem);
}

var first = [1, 2, 3];
var second = [4, 5];
nonMutatingPush(first, second);
*/
////////////////////////////////////////////////////////////////////////////////
////Use the reduce Method a Analyze Data
/*
Array.prototype.reduce(), or simply reduce(), is the most general of all array
operations in JavaScript. You can solve almost any array processing problem using
the reduce method.

The reduce method allows for more general forms of array processing, and it's possible
to show that both filter and map can be derived as special applications of reduce.
The reduce method iterates over each item in an array and returns a single values
(i.e. string, number, object, array). This is achieved via a callback function
that is called on each iteration.

The callback function accepts four arguments. The first argument is known as the
accumulator, which gets assigned the return value of the callback function from
the previous iteration, the second is the current element being processed, the
third is the index of that element and the fourth is the array upon which reduce
is called.

In addition to the callback function, reduce has an additional parameter which
takes an initial value for the accumulator. If this second parameter is not used,
then the first iteration is skipped and the second iteration gets passed the first
element of the array as the accumulator.

See below for an example using reduce on the users array to return the sum of all
the users'ages. For simplicity, the example only uses the first and second arguments.
*/
/*
const users = [
  { name: 'John', age: 34 },
  { name: 'Amy', age: 20 },
  { name: 'camperCat', age: 10 }
];
const sumOfAges = users.reduce((sum, user) => sum + user.age, 0);
console.log(sumOfAges);
*/
/*
The console would display the value 64.

In another example, see how an object can be returned containing the names of the
users as properties with thier ages as values.
*/
/*
const users = [
  { name: 'John', age: 34 },
  { name: 'Amy', age: 20 },
  { name: 'camperCat', age: 10 }
];
const usersObj = users.reduce((obj, user) => {
  obj[user.name] = user.age;
  return obj;
}, {});
console.log(usersObj);
*/
/*
The console would display the value { John: 34, Amy: 20, camperCat: 10 }.
*/
////////////////////////////////////////////////////////////////////////////////
/*
The variable watchList holds an array of objects with information on several movies.
Use reduce to find the average IMDB rating of the movies directed by Christopher
Nolan. Recall from prior challenges how to filter data and map over it to pull what
you need. You may to create other variables, and return the average rating from
getRating function. Note that the rating values are saved as strings in the object
and need to be converted into numbers before they are used in any mathematical
operations.
*/
/*
var watchList = [
  {
    "Title": "Inception",
    "Year": "2010",
    "Rated": "PG-13",
    "Released": "16 Jul 2010",
    "Runtime": "148 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Christopher Nolan",
    "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
    "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
    "Language": "English, Japanese, French",
    "Country": "USA, UK",
    "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.8",
    "imdbVotes": "1,446,708",
    "imdbID": "tt1375666",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Interstellar",
    "Year": "2014",
    "Rated": "PG-13",
    "Released": "07 Nov 2014",
    "Runtime": "169 min",
    "Genre": "Adventure, Drama, Sci-Fi",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan, Christopher Nolan",
    "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
    "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    "Language": "English",
    "Country": "USA, UK",
    "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.6",
    "imdbVotes": "910,366",
    "imdbID": "tt0816692",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "The Dark Knight",
    "Year": "2008",
    "Rated": "PG-13",
    "Released": "18 Jul 2008",
    "Runtime": "152 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
    "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
    "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
    "Language": "English, Mandarin",
    "Country": "USA, UK",
    "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
    "Metascore": "82",
    "imdbRating": "9.0",
    "imdbVotes": "1,652,832",
    "imdbID": "tt0468569",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Batman Begins",
    "Year": "2005",
    "Rated": "PG-13",
    "Released": "15 Jun 2005",
    "Runtime": "140 min",
    "Genre": "Action, Adventure",
    "Director": "Christopher Nolan",
    "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
    "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
    "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
    "Language": "English, Urdu, Mandarin",
    "Country": "USA, UK",
    "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
    "Metascore": "70",
    "imdbRating": "8.3",
    "imdbVotes": "972,584",
    "imdbID": "tt0372784",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Avatar",
    "Year": "2009",
    "Rated": "PG-13",
    "Released": "18 Dec 2009",
    "Runtime": "162 min",
    "Genre": "Action, Adventure, Fantasy",
    "Director": "James Cameron",
    "Writer": "James Cameron",
    "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
    "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    "Language": "English, Spanish",
    "Country": "USA, UK",
    "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
    "Metascore": "83",
    "imdbRating": "7.9",
    "imdbVotes": "876,575",
    "imdbID": "tt0499549",
    "Type": "movie",
    "Response": "True"
  }
];
function getRating(watchList) {
  var averageRating = watchList
  .filter(film => film.Director === "Christopher Nolan")
  .map(film => Number(film.imdbRating))
  .reduce((sum, rating) => sum + rating) /
  watchList.filter(film => film.Director === "Christopher Nolan").length;

  return averageRating;
}
console.log(getRating(watchList));
*/
////////////////////////////////////////////////////////////////////////////////
////Use Higher-Order Functions map, filter or reduce to Solve a Complex Problem
/*
Now that you have worked through a few challenges using higher-order functions
like map(), filter() and reduce(), you now get to apply them to solve a more
complex challenge.
*/
////////////////////////////////////////////////////////////////////////////////
/*
Complete the code for the squareList function using any combination of map(),
filter() and reduce(). The funciton should return a new array containing the squares
of only the positive integers (decimal numbers are not integers) when an array of
real numbers is passed to it. An example of an array of real number is [-3, 4.8,
5, 3, -3.2].

Note: Your function should not use any kind of for or while loops or the forEach()
function.
*/
/*
const squareList = arr => {
  return arr
  .filter(num => num > 0 && num % parseInt(num) === 0)
  .map(num => Math.pow(num, 2));
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);
*/
////////////////////////////////////////////////////////////////////////////////
////Sort an Array Alphabetically using the sort Method
/*
The sort method sorts the elements of an array according to the callback function.

For example:
*/
/*
function ascendingOrder(arr) {
  return arr.sort(function(a, b) {
    return a - b;
  });
}
ascendingOrder([1, 5, 2, 3, 4]);
*/
/*This would return the value [1, 2, 3, 4, 5].*/
/*
function reverseAlpha(arr) {
  return arr.sort(function(a, b) {
    return a === b ? 0 : a < b ? 1 : -1;
  });
}
reverseAlpha(['l', 'h', 'z', 'b', 's']);
*/
/*
This would return the value ['z', 's', 'l', 'h', 'b'].

JavaScript's default sorting method is by string Unicode point value, which may
return unexpected results. Therefore, it is encouraged to provide a callback
function to specify how to sort the array items. When such a callback function,
normally called compareFunction, is supplied, the array elements are sorted according
to the return value of the compareFunction: If
compareFunction(a, b) returns a value less than 0 for two elements a and b, then
a will come before b. If compareFunction(a, b) returns a value greater than 0 for
two elements a and b, then b will come before a. If compareFunction(a, b) returns
a value equal to 0 for two elements a and b, then a and b will remain unchanged.
*/
////////////////////////////////////////////////////////////////////////////////
/*
Use the sort method in the alphabeticalOrder function to sort the elements of
arr in alphabetical order. The function should return the sorted array.
*/
/*
function alphabeticalOrder(arr) {
  return arr.sort(function(a, b) {
    return a === b ? 0 : a > b ? 1 : -1;
  });
}
console.log(alphabeticalOrder(["a", "d", "c", "a", "z", "g"]));
*/
////////////////////////////////////////////////////////////////////////////////
////Return a Sorted Array Without Changing the Original Array
/*
A side effect of the sort method is that it changes the order of the elements in
the original array. In other words, it mutates the array in place. One way to avoid
this is to first concatenate an empty array to the one being sorted (remember that
slice and concat return a new array), then run the sort method.
*/
////////////////////////////////////////////////////////////////////////////////
/*
Use the sort method in the nonMutatingSort function to sort the elements of an
array in ascending order. The function should return a new array, and not mutate
the globalArray variable.
*/
/*
var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  var resultArr = [];
  return resultArr.concat(arr).sort(function(a, b) {
    return a - b;
  });
}
console.log(nonMutatingSort(globalArray));
*/
////////////////////////////////////////////////////////////////////////////////
////Split a String into an Array Using the split Method
/*
The split method splits a string into an array of strings. It takes an argument
for the delimiter, which can be a character to use to break up the string or a
regular expression. For example, if the delimiter is a space, you get an array of
words, and if the delimiter is an empty string, you get an array of each character
in the string.

Here are two examples that split one string by spaces, then another by digits using
a regular expression:
*/
/*
var str = "Hello World";
var bySpace = str.split(" ");

var otherString = "How9are7you2today";
var byDigits = otherString.split(/\d/);
*/
/*
bySpace would have the value ["Hello", "World"] and byDigits would have the value
["How", "are", "you", "today"].

Since strings are immutable, the split method makes it easier to work with them.
*/
////////////////////////////////////////////////////////////////////////////////
/*
Use the split method inside the splitify function to split str into an array of
words. The function should return the array. Note that the words are not always
separated by spaces, and the array should not contain puntuation.
*/
/*
function splitify(str) {
  return str.split(/\W/);
}
console.log(splitify("Hello World,I-am code"));
*/
////////////////////////////////////////////////////////////////////////////////
////Combine an Array into a String Using the join Method
/*
The join method is used to join the elements of an array together to create a
string. It takes an argument for the delimiter that is used to separate the array
elements in the string.

Here's an example:
*/
//var arr = ["Hello", "World"];
//var str = arr.join(" ");
/*
str would have a value of the string Hello World.
*/
////////////////////////////////////////////////////////////////////////////////
/*
Use the join method (among others) inside the sentensify function to make a sentence
from the words in the string str. The function should return a string. For example,
I-like-Star-Wars would be converted to I like Star Wars. For this challenge, do
not use the replace method.
*/
/*
function sentensify(str) {
  return str.split(/\W/).join(" ");
}
sentensify("May-the-force-be-with-you");
*/
////////////////////////////////////////////////////////////////////////////////
////Apply Functional Programming to Convert Strings to URL Slugs
/*
The last several challenges covered a number of useful array and string methods
that follow functional programming principles. We've also learned about reduce,
which is a powerful method used to reduce problems to simpler forms. From computing
averages to sorting, any array operation can be achieved by applying it. Recall
that map and filter are special cases of reduce.

Let's combine what we've learned to solve a practical problem.

Many content management sites (CMS) have the titles of a post added to part of the
URL for simple bookmarking purposes. For example, if you write a Medium post titled
Stop Using Reduce, it's likely the URL would have some form of the title string in
it (.../stop-using-reduce). You may have already noticed this on the freeCodeCamp
site.
*/
////////////////////////////////////////////////////////////////////////////////
/*
Fill in the urlSlug function so it converts a string title and returns the hyphenated
version for the URL. You can use any of the methods covered in this section, and
don't use replace. Here are the requirements:
- The input is a string with spaces and title-cased words
- The output is a string with the spaces between words replaced by a hyphen (-)
- The output should be all lower-cased letters
- The output should not have any spaces
*/
/*
function urlSlug(title) {
  var words = title.toLowerCase().trim().split(/\s+/);  // trim() 공백제거
  var result = words.join("-");
  return result;
}
console.log(urlSlug(" Winter Is Coming"));
*/
////////////////////////////////////////////////////////////////////////////////
////Use the every Method to Check that Every Element in an Array Meets a Criteria
/*
The every method works with arrays to check if every elements passes a particular
test. It returns a Boolean value - true if all valuse meet the criteria false if not.

For example, the following code would check if every element in the numbers array
is less than 10:
*/
/*
var numbers = [1, 5, 8, 0, 10, 11];
numbers.every(function(currentvalue) {
  return currentValue < 10;
});
*/
/*
The every method would return false here.
*/
////////////////////////////////////////////////////////////////////////////////
/*
Use the every method inside the checkPositive function to check if every element
 in arr is positive. The function should return a Boolean value.
*/
/*
function checkPositive(arr) {
  let result = [];
  result = arr.every(function(a) {
    return a > 0;
  });

  return result;
}
console.log(checkPositive([1, 2, 3, -4, 5]));
*/
////////////////////////////////////////////////////////////////////////////////
////Use the some Method to Check that Any Elements in an Array Meet a Criteria
/*
The some method works with arrays to check if any element passes a particular test.
It returns a Boolean value - true if any of the values meet the criteria, false
if not.

For example, the following code would check if any element in the numbers array
is less than 10:
*/
/*
var numbers = [10, 50, 8, 220, 110, 11];
numbers.some(function(currentValue) {
  return currentValue < 10;
});
*/
/*
The some method would return true.
*/
////////////////////////////////////////////////////////////////////////////////
/*
Use the some method inside the checkPositive function to check if any element in
arr is positive. The function should return a Boolean value.
*/
/*
function checkPositive(arr) {
  let result = arr.some(function(a) {
    return a > 0;
  });
  return result;
}
checkPositive([1, 2, 3, -4, 5]);
*/
////////////////////////////////////////////////////////////////////////////////
////Introduction to Currying and Partial Application
/*
The arity(의리??) of a function is the number of arguments it requires. Currying
a function means to convert a function of N arity into N functions of arity 1.

In other words, it restructures a function so it takes one argument, then returns
another function that takes the next argument, and so on.

Here's an example:
*/
/*
function unCurried(x, y) {
  return x + y;
}

function curried(x) {
  return function(y) {
    return x + y;
  }
}
const curried = x => y => x + y;
curried(1)(2);
*/
/*
curried(1)(2) would return 3.

This is useful in your program if you can't supply all the arguments to a function
at one time. You can save each function call into a varaible, which will hold the
returned function reference that takes the next argument when it's available. Here's
an example using the curried function in the example above:
*/
//var funcForY = curried(1);
//console.log(funcForY(2));
/*
Similarly, partial application can be described as applying a few arguments to a
function at a time and returning another function that is applied to more arguments.
Here's an example:
*/
/*
function impartial(x, y, z) {
  return x + y + z;
}
var partialFn = impartial.bind(this, 1, 2);
partialFn(10);
*/
////////////////////////////////////////////////////////////////////////////////
/*
Fill in the body of the add function so it uses currying to add parameters x, y
and z.
*/
/*
function add(x) {
  return function(y) {
    return function(z) {
      return x + y + z;
    }
  }
}
add(10)(20)(30);
*/
