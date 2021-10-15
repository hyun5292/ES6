////Roman Numeral Converter - 뭔가 4000보다 작다는 가정을 하는구나
//로마 숫자도 공부해야하는구나^^ 그렇구나^^
//한줄에 3개 이상의 같은 수는 쓰지마, IIII는 가끔 4로 쓰인
//1:I 5:V 10:X 50:L 100:C 500:D 1000:M
//1:I 2:II 3:III 4:IV 5:V 6:VI 7:VII 8:VIII 9:IX
//10:X 20:XX 30:XXX 40:XL 50:L 60:LX 70:LXX 80:LXXX 90:XC
//100:C 200:CC 300:CCC 400:CD 500:D 600:DC 700:DCC 800:DCCC 900:CM
/*
if(앞 >= 뒤)
VI = V + I = 5 + 1 = 6
LXX = L + X + X = 50 + 10 + 10 = 70
if(앞 < 뒤)
IV = V - I = 5 - 1 = 4
IX = X - I = 10 - 1 = 9
*/
/*
Convert the given number into a roman numeral.
All roman numerals answers should be provided in upper-case.
*/
//통과하기는 하는 소스 - 그냥 객체에서 찾아서 만드는 경우
/*
function convertToRoman(num) {
  var roman = {
    1: 'I',
    2: 'II',
    3: 'III',
    4: 'IV',
    5: 'V',
    6: 'VI',
    7: 'VII',
    8: 'VIII',
    9: 'IX',
    10: 'X',
    20: 'XX',
    30: 'XXX',
    40: 'XL',
    50: 'L',
    60: 'LX',
    70: 'LXX',
    80: 'LXXX',
    90: 'XC',
    100: 'C',
    200: 'CC',
    300: 'CCC',
    400: 'CD',
    500: 'D',
    600: 'DC',
    700: 'DCC',
    800: 'DCCC',
    900: 'CM',
    1000: 'M',
    2000: 'MM',
    3000: 'MMM'
  };
  var resultNum = num.toString().split("").reverse();
  var result = "";

  for(let i = 0; i < resultNum.length; i++) {
    resultNum[i] = resultNum[i] * Math.pow(10, i);
    if(resultNum[i] != 0)
      result = roman[resultNum[i]] + result;
  }
  return result;
}
*/
console.log(convertToRoman(335));
