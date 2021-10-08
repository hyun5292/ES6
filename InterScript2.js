////DNA Pairing
/*
The DNA strand is missing the pairing element. Take each character, get its pair,
and return the results as a 2d array.
Base pairs are a pair of AT and CG. Match the missing element to the provided
character.
Return the provided character as the first element in each array.
For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]
The character and its pair are paired up in an array, and all the arrays are
grouped into one encapsulating array.
*/
//내소스 - AT, GC, TA, CG 이 4가지로 이루어진 걸 말하는 듯
/*
function pairElement(str) {
  var strArr = str.split("");
  var result = [];
  for(let i = 0; i < strArr.length; i++) {
    switch(strArr[i]) {
      case 'G':
        result.push(['G', 'C']);
        break;
      case 'C':
        result.push(['C', 'G']);
        break;
      case 'A':
        result.push(['A', 'T']);
        break;
      case 'T':
        result.push(['T', 'A']);
        break;
    }
  }
  return result;
}
*/
//솔루션 1 - 나랑 똑같은데 for문 안에 switch를 밖으로 꺼낸 경우
/*
function pairElement(str) {
  var paired = [];
  var search = function(char) {
    switch(char) {
      case "A":
        paired.push(["A", "T"]);
        break;
      case "T":
        paired.push(["T", "A"]);
        break;
      case "C":
        paired.push(["C", "G"]);
        break;
      case "G":
        paired.push(["G", "C"]);
        break;
    }
  };

  for(var i = 0; i < str.length; i++) {
    search(str[i]);
  }

  return paired;
}
*/
//솔루션 2
/*
function pairElement(str) {
  var pairs = {  //오 객체로
    A: "T",
    T: "A",
    C: "G",
    G: "C"
  };

  var arr = str.split("");
  //공부 메모에 배열용 반복문이라 되어있네
  return arr.map(x => [x, pairs[x]]);  //오 근데 어뜨케 이 한 문장으로 되는거지ㅋㅋ
}
*/
////////////////////////////////////////////////////////////////////////////////
//Missing letters
/*
Find the missing letter in the passed letter range and return it.
If all letters are present in the range, return undefined.
*/
//내소스 - 갈수록 배운거보다는 그냥 java로 하고 있다ㅋㅋ
/*
function fearNotLetter(str) {
  var alphabet = 'abcdefghijklmnopqrstuvwxyz';
  var strArr = str.split("");
  var start = alphabet.indexOf(strArr[0]);
  var end = alphabet.indexOf(strArr[strArr.length-1]);
  for(let i = start; i < end; i++) {
    if(alphabet[i] !== strArr[Math.abs(start - i)]) {
      return alphabet[i];
    }
  }
  return undefined;
}
*/
//솔루션 1 - 내가 원한게 이거였어!!
/*
function fearNotLetter(str) {
  for(var i = 0; i < str.length; i++) {
    var code = str.charCodeAt(i);

    //그래!! 하나씩 증가시키면서 비교할 수 있는 방법이 있을텐데 이걸 몰라쒀!!
    if(code !== str.charCodeAt(0) + i) {
      return String.fromCharCode(code - 1);
    }
  }
  return undefined;
}
*/
//솔루션 2 - 이게 진짜 자바스크립트 응용 소스라 할 수 있지
/*
function fearNotLetter(str) {
  let currCharCode = str.charCodeAt(0);
  let missing = undefined;

  str
    .split("")
    .forEach(letter => {
      if(letter.charCodeAt(0) === currCharCode) {
        currCharCode++;
      } else {
        missing = String.fromCharCode(currCharCode);
      }
    });

  return missing;
}
*/
//솔루션 3 - 그래 알파벳 차이로 구하면 되는데ㅠ
/*
function fearNotLetter(str) {
  for (let i = 1; i < str.length; ++i) {
    if(str.charCodeAt(i) - str.charCodeAt(i - 1) > 1) {  //t - s = 1, v - t = 2, w - v = 1, x - w = 1
      return String.fromCharCode(str.charCodeAt(i - 1) + 1);
    }
  }
}
*/
////////////////////////////////////////////////////////////////////////////////
