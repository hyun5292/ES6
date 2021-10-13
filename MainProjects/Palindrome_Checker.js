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
  var newArray = str.toLowerCase().match(/\w+/ig).join("");
  var rvsArray = "";
  for(let i = newArray.length-1; i >= 0; i--) {
    rvsArray += newArray[i];
  }
  console.log(newArray);
  console.log(rvsArray);
  if (newArray === rvsArray) return true;
  else return false;
}
console.log(palindrome("0_0 (: /-\ :) 0-0"));
