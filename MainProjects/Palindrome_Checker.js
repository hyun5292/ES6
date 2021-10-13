////Palindrome(회문) Checker - 내 이름은 이효리 ~ 거꾸로 해도 이효리~
/*
Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and
backward, ignoring punctuation, case and spacing.

Note: You'll need to remove all non-alphanumberic characters (punctuation, spaces
and symbols) and turn everything into the same case (lower or upper case) in order
to check for palindromes.

We'll pass strings with varying formats, such as racecar, RaceCar and raceCAR among
others.

We'll also pass strings with special symbols, such as 2A3*3a2, 2A3 3a2 and 2_A3*3#A2.
*/
//내소스 - 뒤집어서 같은지 확인
function palindrome(str) {
  //다 소문자로 바꾸고, non-alphanumberic characters 골라내고
  str = str.toLowerCase().match(/[a-z]+|[0-9]+/ig).join("");
  var newArray = str.split("").join("");  //앞에서 시작
  var rvsArray = str.split("").reverse().join("");  //뒤에서 시작
  if (newArray === rvsArray) return true;
  else return false;
}
console.log(palindrome("_eye"));
