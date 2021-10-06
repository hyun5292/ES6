////Use the filter Method to Extract Data from an Array
/*
Another useful array function is Array.prototype.filter(), or simple filter().

filter calls a function on each element of an array and returns a new array
containing only the elements for which that function returns true. In other words,
it filter the array, based on the function passed to it. Like map, it does this
without needing to modify the original array.

The callback function accepts three arguments. The first argument is the current
element being processed. The second is the index of that element and the third is
the array upon which the filter method was called.

See below for an example using the filter method on the users array to return a
new array containing only the users under the age of 30. For simplicity, the
example only uses the first argument of the callback.
*/
/*
const users = [
  { name: 'John', age: 34 },
  { name: 'Amy', age: 20 },
  { name: 'camperCat', age: 10 }
];
const userUnder30 = users.filter(user => user.age < 30)
console.log(usersUnder30);
*/
/*
The console would display the value [ { name: 'Amy', age: 20 }, { name: 'camperCat', age: 10 } ].
*/
////////////////////////////////////////////////////////////////////////////////
/*
The variable watchList holds an array of objects with information on several movies.
Use a combination of filter and map on watchList to assign a new array of objects
with only title and rating keys. The new array should only include objects were
imdbRating is greater than or equal to 8.0. Note that the rating values are saved
as strings in the object and you may need to convert them into numbers to perform
mathematical operations on them.
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

var filteredList = watchList.map(function(list) {
  return { title: list["Title"], rating: list["imdbRating"] }
}).filter(list => list.rating >= 8);
console.log(filteredList);
*/
////////////////////////////////////////////////////////////////////////////////
////Implement the filter Method on a Prototype
/*
You might learn a lot about the filter method if you implement your own version
of it. It is recommended you use a for loop or Array.prototype.forEach().
*/
////////////////////////////////////////////////////////////////////////////////
/*
Write your own Array.prototype.myFilter(), which should behave exactly like
Array.prototype.filter(). You should not use the built-in filter method. The Array
instance can be accessed in the myFilter method using this.
*/
/*
var s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback) {
  var newArray = [];

  for(let i = 0; i < this.length; i++) {
    if(callback(this[i])) {
      newArray.push(this[i]);
    }
  }

  return newArray;
};

var new_s = s.myFilter(function(item) {
  return item % 2 === 1;
});
*/
////////////////////////////////////////////////////////////////////////////////
////Return Part of an Array Using the slice Method
/*
The slice method returns a copy of certain elements of an array. It can take two
arguments, the first gives the index of where to begin the slice, the second is
the index for where to end the slice (and it's non-inclusive). If the arguments
are not provided, the default is to start at the beginning of the array through
the end, which is an easy way to make a copy of the entire array. The slice method
does not mutate the original array, but returns a new one.

Here's an example:
*/
//var arr = ["Cat", "Dog", "Tiger", "Zebra"];
//var newArray = arr.slice(1, 3);
/*
newArray would have the value ["Dog", "Tiger"].
*/

////////////////////////////////////////////////////////////////////////////////
/*
Use the slice method in the sliceArray function to return part of the anim array
given the provided beginSlice and endSlice indices. The function should return an
array.
*/
/*
function sliceArray(anim. beginSlice, endSlice) {
  var resultArr = [];
  var newArr = anim.slice();
  for(let i = beginSlice; i < endSlice; i++) {
    resultArr.push(newArr[i]);
  }

  return resultArr
}
var inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
sliceArray(inputAnim, 1, 3);
*/
////////////////////////////////////////////////////////////////////////////////
////Remove Elements from an Array Using slice Instead of splice
/*
A common pattern while working with arrays is when you want to remove items and
keep the rest of the array. JavaScript offers the splice method for this, which
takes arguments for the index of where to start removing items, then the number
of items to remove. If the second argument is not provided, the default is to
remove items through the end. However, the splice method mutates the original
array it is called on. Here's an example:
*/
//var cities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
//cities.splice(3, 1);
/*
here splice returns the string London and deletes it from the cities array. cities
will have the value ["Chicago", "Delhi", "Islamabad", "Berlin"].

As we saw in the last challenge, the slice method does not mutate the original
array, but returns a new one which can be saved into a varaible. Recall that the
slice method takes two arguments for the indices to begin and end the slice (the
end is non-inclusive), and returns those items in a new array. Using the slice
method instead of splice helps to avoid any array-mutating side effects.
*/
////////////////////////////////////////////////////////////////////////////////
/*
Rewrite the function nonMutatingSplice by using slice instead of splice. It should
limit the provided cities array to a length of 3, and return a new array with only
the first three items.

Do not mutate the original array provided to the function.
*/
/*
function nonMutatingSplice(cities) {
  return cities.slice(0, 3);
}
var inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
nonMutatingSplice(inputCities);
*/
////////////////////////////////////////////////////////////////////////////////
