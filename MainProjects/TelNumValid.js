////Telephone Number Validator - 나는 한국인인데 왜 미국 전화번호 형식을ㅜ
/*
Return true if the passed string looks like a valid US phone number.

The user may fill out the form field any way they choose as long as it has the
format of a valid US number. The following are examples of valid formats for US
numbers (refer to the tests below for other variants):

555-555-5555 - OK
(555)555-5555 - OK
(555) 555-5555 - OK
555 555 5555 - OK
5555555555 - OK
1 555 555 5555 - 앞에 1은 모얌?

For this challenge you will be presented with a string such as 800-692-7753 or
8oo-six427676;laskdjf. Your job is to validate or reject the US phone number based
on any combination of the formats provided above. The area code is required. If
the country code is provided, you must confirm that the country code is 1. Return
true if the string is a valid US phone number; otherwise return false.
*/
// 그니까 문자 (, ), - 이것들은 OK? 숫자만 문자ㄴㄴ? 3자리 3자리 4자리?
// 근데 () 이거로 묶는건 맨앞 숫자 3개만 가능?
// 맨 앞 숫자는 1만 가능?
// 아니면 예시로 준 것들만 딱 통과시키라는 건가?
function telephoneCheck(str) {
  return true;
}
console.log(telephoneCheck("555-555-5555"));
