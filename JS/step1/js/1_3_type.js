/*
    ? 자료형
     * 1. 숫자형(Number) :
            - 정수형 10진수(소수점 없음) : 30, 70, 1234; 
            - 정수형 16진수(소수점 없지만 A~F로 숫자를 표현) :#1A3FD4(핵사코드)
            - 실수형(소수점 있음) : 1.5, 2.34; 

     * 2. 문자형(String):
            - 일상생활 사용 글자   

     * 3. 논리형(BooLean):
            - true(참) or false(거짓)
                - true(=1) : 맞다. 1. 같다, 진실, 성공
                - false(=0) : 틀리다. 0, 다르다, 거짓, 실패

     * 4. undefined:
            - 미정의된(초기화가 되지 않은), 들어오지 않은 자료형
            ex.1) var data; alert(data);
*/

console.log(1 < 3 > 2);
/*
    1 < 3 => true == 1;
    1 > 2 => false
*/

// todo 1. 자신이 가장 좋아하는 숫자를 favorNumber 담고
// 출력 및 자료형 판단.

var favorNumber = 11;
console.log(favorNumber);
typeof(favorNumber); // 숫자형으로 부를때
console.log(favorNumber);
console.log(typeof(favorNumber)); //문자형으로 부르고 싶을때

var engName = "jihyun"; // jihyun 이라는 변수가 아니라 문자열을 선언할 때는 "" 해야함
console.log("My English name is " + engName);
console.log("Type is " + typeof(engName));

/*
    숫자 + 문자 : 문자
    불린 + 숫자 : 숫자
    불린 + 문자 : 문자
*/

// todo.3 cold에 춥다, 아니다를 true/ false로 담아서 자료형 판단
var cold = false;
console.log(typeof(cold));

//todo 4. test라는 변수를 선언만하고 자료형 판단(초기화 전)
var test;
console.log(typeof(test));