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
