////Caesars Cipher
/*
One of the simplest and most widely known ciphers(암호) is a Casear cipher, also
known as a shift cipher. In a shift cipher the meanings of the letters are shifted
by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted
by 13 places. Thus A<->N, B<->0 and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded
string.

All letters will be uppercase. Do not transform any non-alphabetic character
(i.e. spaces, punctuation), but do pass them on.
*/
//배열 이용 소스
/*
function rot13(str) {
  var inRot = [	'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
                'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' ];
  var outRot = [ 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
                 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M' ];
  var result = "";
  str.split("")
    .map(s => (/[A-Z]/).test(s) ? result += outRot[inRot.indexOf(s)] : result += s )
    .join("");

  return result;
}
*/
//아스키코드 증가 이용 소스
/*
function rot13(str) {
  var result = "";
  str.split("")
    .map(s => (/[A-Z]/).test(s)
      ? (s.charCodeAt(0) <= 77)
        ? result += String.fromCharCode(s.charCodeAt(0) + 13)
        : result += String.fromCharCode(s.charCodeAt(0) - 13)
      : result += s )
    .join("");

  return result;
}
*/
console.log(rot13("SERR PBQR PNZC"));
