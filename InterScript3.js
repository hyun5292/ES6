////Drop it
/*
Given the array arr, iterate through and remove each element starting from the first
element (the 0 index) until the function func returns true when the iterated element
is passed through it.

Then return the rest of the array once the condition is satisfied, otherwise, arr
should be returned as an empty array.
*/
//내소스 - 심플하군... 더 심플하게....더...더!!
/*
function dropElements(arr, func) {
  var result = [];
  for(let i = 0; i < arr.length; i++) {
    if(func(arr[i])) {
      result = arr.slice(i);
      break;
    }
  }
  return result;
}
*/
//솔루션 1 - 아 해당하지 않는 것을 앞에서 하나씩 지워도 되지
/*
function dropElements(arr, func) {
  while (arr.length > 0 && !func(arr[0])) {
    arr.shift();  //맨 앞 제거
    console.log(arr);
  }
  return arr;
}
*/
//솔루션 2 - 와 findIndex에 함수를 넣어도 되는구나!
/*
function dropElements(arr, func) {
  let sliceIndex = arr.findIndex(func); //해당하는 첫 index를 반환하나부다
  return arr.slice(sliceIndex >= 0 ? sliceIndex : arr.length);
}
*/
//솔루션 3 - 솔루션 1을 for문으로 바꾼 것, 내 소스랑 비슷
/*
function dropElements(arr, func) {
  let originalLen = arr.length;
  for(let i = 0; i < originalLen; i++) {
    if(func(arr[0])) {
      break;
    } else {
      arr.shift();
    }
  }
  return arr;
}
*/
//솔루션 4 - 이런 함수 속에 함수? 형식으로 만드는 경우가 많구나
/*
function dropElements(arr, func, i = 0) {
  return i < arr.length && !func(arr[i])
    ? (dropElements(arr.slice(i + 1), func, i))
    : arr;
}
*/
////////////////////////////////////////////////////////////////////////////////
////steamroller
/*
Flatten a nested array. You must account for varying levels of nesting.
*/
//내소스 - 줄였다!! 드디어 줄였드아아아!!
/*
function steamrollArray(arr, result) {
  if(result == null) result = [];
  arr.map(a => Array.isArray(a) ? steamrollArray(a, result) : result.push(a));
  return result;
}
*/
//솔루션 1 - 하하 내가 줄이기 전에 이거랑 비슷했지 하하
/*
function steamrollArray(arr) {
  const flattenedArray = [];
  for(let i = 0; i < arr.length; i++) {
    if(Array.isArray(arr[i])) {
      flattenedArray.push(...steamrollerArray(arr[i]));
    } else {
      flattenedArray.push(arr[i]);
    }
  }
  return flattenedArray;
}
*/
//솔루션 2 - .some()...좋군 역시 함수 안에 함수구나
/*
function steamrollArray(arr) {
  const flat = [].concat(...arr);
  //배열 안의 어떤 요소라도 주어진 판별 함수를 통과하는지 테스트
  return flat.some(Array.isArray) ? steamrollArray(flat) : flat;
}
*/
//솔루션 3 - 내가 하다가 막혔던 것을 조건으로 해결했구나 그래도 되는구낭
/*
function steamrollArray(arr) {
  return arr
    .toString()  //a,b
    .replace(",,", ",")  //1,2,,3 -> 1,2,3
    .split(",")
    .map(function(v) {
      if(v == "[object object]") {  //이거 예시 [1, [], [3, [[4]]]]에서 경험해따...
        return {};
      } else if(isNaN(v)) {
        return v;
      } else {
        return parseInt(v);  //만약 숫자인데 string된거면 다시 숫자로
      }
    });
}
*/
//솔루션 4 - 아 매개변수에서 =[]로 초기화해도 값이 전달되면 유지되는구나
/*
function steamrollArray(val,flatArr=[]) {
  val.forEach(item => {
    if(Array.isArray(item)) steamrollArray(item, flatArr);
    else flatArr.push(item);
  });
  return flatArr;
}
*/
//솔루션 5 - 크으으 다들 Array.isArray() 썼구나 인터넷에서 잘 찾았군 배열 깊이 검색하다가 나왔는데
//근데 !Array.isArray(elem) 왜 이거 앞에 !가 붙은건지 더 고민해봐야할듯
/*
function steamrollArray(arr, flatArr = []) {
  const elem = arr.pop(); //.pop()이 배열 맨 뒤 추출?, [1, [2], [3, [[4]]]]->[ 3, [ [ 4 ] ] ]
  return elem
    ? !Array.isArray(elem)  //배열인가 아닌가
      ? steamrollArray(arr, [elem, ...flatArr])  //배열이 아니면
      : steamrollArray(arr.concat(elem), flatArr)
    : flatArr;  //배열이면
}
*/
////////////////////////////////////////////////////////////////////////////////
////Binary Agents
/*
Return an English translated sentence of the passed binary string.
The binary string will be space separated.
*/
//내소스 - 와 막막하다가 String.fromCharCode()를 어디서 보고 했다ㅎㅎ 근데 parseInt에 2는 뭘까 아 2진수인가??
/*
function binaryAgent(str) {
  return str
    .split(" ")
    .map(s => String.fromCharCode(parseInt(s, 2)))
    .join("");
}
*/
//솔루션 1 - 내가 1차로 했던 소스, 이걸 줄여따!!
/*
function binaryAgent(str) {
  var biString = str.split(" ");
  var uniString = [];

  for(var i = 0; i < biString.length; i++) {
    uniString.push(String.fromCharCode(parseInt(biString[i], 2)));
  }
  return uniString.join("");
}
*/
//솔루션 2 - 아 2진수를 10진수로 바꾸는구나
/*
function binaryAgent(str) {
  str = str.split(" ");
  var power;
  var decValue = 0;
  var sentence = "";

  for(var s = 0; s < str.length; s++) {
    for(var t = 0; t < str[s].length; t++) {
      if(str[s][t] == 1) {  //아 2진수를 10진수로 바꾸는구나
        power = Math.pow(2, +str[s].length - t - 1);  //제곱, 2의 (+str[s].length - t - 1)승
        decValue += power;
      }
    }
    sentence += String.fromCharCode(decValue);
    decValue = 0;
  }
  return sentence;
}
*/
//솔루션 3 - 내 소스랑 제일 비슷하군
/*
function binaryAgent(str) {
  return String.fromCharCode(
    ...str.split(" ").map(function(char) {
      return parseInt(char, 2);
    })
  );
}
*/
////////////////////////////////////////////////////////////////////////////////
////Everything Be True
/*
Check if the predicate (second argument) is truthy on all elements of a collection
(first argument).

In other words, you are given an array collection of objects. The predicate pre
will be an object property and you need to return true if its value is truthy.
Otherwise, return false.

In JavaScript, truthy values are values that translate to true when evaluated in
a Boolean context.

Remember, you can access object properties through either dot notation or []
notation.
*/
//내소스 - 줄였는데 괴기스럽네ㅋㅋ
/*
function truthCheck(collection, pre) {
  var result = [];
  //문자가 아니면 isNan()을 해야지, 문자면 하면 안돼 해봤자 Nan으로 나오니까
  collection.map(c => (c.hasOwnProperty(pre) && (typeof c[pre]) == "string")
    ? (c[pre] != null && c[pre] != "") ? result.push(true) : result.push(false)  //문자일 경우
    : (c[pre] != null && c[pre] != 0 && !isNaN(c[pre])) ? result.push(true) : result.push(false));  //숫자일 경우

  for(let i = 0; i < result.length; i++) {
    if(result[i] !== true) {
      return false;
    }
  }

  return true;
}
*/
//솔루션 1 - 내가 했던 것들이 Boolean 하나면 해결되는거였구나...그랬구낭...
/*
function truthCheck(collection, pre) {
  var counter = 0;
  for (var c in collection) {
    if(collection[c].hasOwnProperty(pre) && Boolean(collection[c][pre])) {
      counter++;
    }
  }
  return counter == collection.length;
}
*/
//솔루션 2 - 크윽...Boolean...하나 더 배워따...
/*
function truthCheck(collection, pre) {
  return collection.every(function(element) {
    return element.hasOwnProperty(pre) && Boolean(element[pre]);
  });
}
*/
//솔루션 3 - ㅋㅋㅋ 이거면 되는거였어...? 그런거여쒀...?
/*
function truthCheck(collection, pre) {
  return collection.every(obj => obj[pre]);
}
*/
////////////////////////////////////////////////////////////////////////////////
////Arguments Optional
/*
Create a function that sums two arguments together. If only one argument is provided,
then return a function that expects one argument and returns the sum.

For example, addTogether(2, 3) should return 5, and addTogether(2) should return
a function.

Calling this returned function with a single argument will then return the sum:
//var sumTwoAnd = addTogether(2);
sumTwoAnd(3) returns 5.
If either argument isn't a valid number, return undefined.
*/
//내소스 - 예시에 3개 이상은 없자너?ㅎㅎ 와 이걸 성공했넹!!
/*
function addTogether() {
  var newArg = [...arguments];
  var result = 0;
  newArg.map(arg => (typeof arg != "number")  //숫자인가 아닌가
    ? result = undefined  //아니면 undefined
    : (newArg.length === 2)  //맞으면 매개변수가 2개인가 아닌가
      ? result += arg  //2개이면 더하기
      : result = function(arg) {  //여기서도 숫자인가 아닌가 판단해야 하는구낭
        if(typeof arg != "number") return undefined;
        else return newArg[0] + arg;
      });
  return result;
}
*/
//솔루션 1 - 나는 if문보다 배운 것을 써먹고 싶어따!!
/*
function addTogether() {
  const [first, second] = arguments;
  if (typeof(first) !== "number") return undefined;
  else if (second === undefined) {  //매개변수가 1개면
    function addSecond(second) {
      if (typeof(second) !== "number") return undefined;
      else return first + second;
    }
    return addSecond;
  }
  else if (typeof(second) !== "number") return undefined;
  else  return first + second;
}
*/
//솔루션 2 - if(second === undefined) 여기서 다시 넘어갈 때 first가 유지되면서
//새 매개변수가 전달이 되네?
/*
function addTogether() {
  const [first, second] = arguments;
  if(typeof(first) !== "number") return undefined;
  if(second === undefined) return (second) => addTogether(first, second);
  if(typeof(second) !== "number") return undefined;
  return first + second;
}
*/
////////////////////////////////////////////////////////////////////////////////
////Make a Person
/*
Fill in the object constructor with the following methods below:
getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)
Run the tests to see the expected output for each method. The methods that take
an argument must accept only one argument and it has to be a string. These methods
must be the only available means of interacting with the object.
*/
//내소스 - 잘했고 솔루션하고도 같고...근데 왜 동작이 안되징...?
/*
var Person = function(firstAndLast) {
  var fullName = firstAndLast;

  this.getFirstName = function() {
    return fullName.split(" ")[0];
  };
  this.getLastName = function() {
    return fullName.split(" ")[1];
  };
  this.getFullName = function() {
    return fullName;
  };

  this.setFirstName = function(first) {
    fullName = first + " " + fullName.split(" ")[1];
  };
  this.setLastName = function(last) {
    fullName = fullName.split(" ")[0] + " " + last;
  };
  this.setFullName = function(firstAndLast) {
    fullName = firstAndLast;
  };
};
//솔루션 1
var Person = function(firstAndLast) {
  var fullName = firstAndLast;

  this.getFirstName = function() {
    return fullName.split(" ")[0];
  };

  this.getLastName = function() {
    return fullName.split(" ")[1];
  };

  this.getFullName = function() {
    return fullName;
  };

  this.setFirstName = function(name) {
    fullName = name + " " + fullName.split(" ")[1];
  };

  this.setLastName = function(name) {
    fullName = fullName.split(" ")[0] + " " + name;
  };

  this.setFullName = function(name) {
    fullName = name;
  };
};
var bob = new Person('Bob Ross');
bob.getFullName();
*/
////////////////////////////////////////////////////////////////////////////////
////Map the Debris
/*
Return a new array that transforms the elements'average altitude into their orbital
periods (in secdons).

The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.

You can read about orbital periods on Wikipedia.
http://en.wikipedia.org/wiki/Orbital_period

The values should be rounded to the nearest whole number. The body being orbited
is Earth.

The radius of the earth is 6367.4447 kilometers, and the GM value of earth is
398600.4418km^3s^-2.
*/
//내소스 - 움...결론적으로는... 공식을 어떻게 이용해야할지 모르겠다...ㅠ
//Math.pow()-제곱근, Math.sqrt()-루트, Math.round()-반올림 공식, T = 2pi*sqrt(pow(a, 3)/GM)
/*
function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  var PI = 3.14;
  var T = 2*PI*Math.sqrt(Math.pow(earthRadius, 3)/GM);

  return T;
}
*/
//솔루션 1
/*
function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  var a = 2 * Math.PI;
  var newArr =[];

  var getOrbPeriod = function(obj) {
    var c = Math.pow(earthRadius + obj.avgAlt, 3);
    var b = Math.sqrt(c /GM);
    var orbPeriod = Math.round(a * b);

    return {name: obj.name, orbitalPeriod: orbPeriod};
  }

  for(var elem in arr) {
    newArr.push(getOrbPeriod(arr[elem]));
  }

  return newArr;
}
*/
//솔루션 2
/*
function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  var newArr = [];

  for(var elem in arr) {
    var orbitalPer = Math.round(
      2 * Math.PI * Math.sqrt(Math.pow(arr[elem].avgAlt + earthRadius, 3) / GM)
    );
  }

  return newArr;
}
*/
//솔루션 3
/*
function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  var newArr = JSON.parse(JSON.stringify(arr));
  newArr.forEach(function(item) {
    var tmp = Math.round(
      2 * Math.PI * Math.sqrt(Math.pow(earthRadius + item.avgAlt, 3) / GM)
    );
    delete item.avgAlt;
    item.orbitalPeriod = tmp;
  });
  return newArr;
}
*/
//솔루션 4
/*
function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  return arr.map(({ name, avgAlt }) => {
    const earth = earthRadius + avgAlt;
    const orbitalPeriod = Math.round(2 * Math.PI * Math.sqrt(Math.pow(earth, 3)/GM));
    return { name, orbitalPeriod };
  });
}
*/
