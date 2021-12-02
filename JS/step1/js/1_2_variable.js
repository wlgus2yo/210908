/*
    ?변수란?
    ! 데이터를 저장하는 장소이면서,
      데이터를 읽고 쓸 수 있는 장소

      ? 실무의 예
        * 1. 로그인 상태정보 저장
        * 2. 사용자가 선택한 항목을 저장
        * 3. admin으로 관리되는 항목 저장
        * 4. 게임: 기록되는 레코드나 데이터 저장
        * 5. 쇼핑몰: 장바구니 목록 등
        * 6. 게시판 목록 등
        
      ? 주의사항
        * 1. 숫자로 시작할수 없다. (에러가 뜨는 브라우저가 존재)
        * 2. 대소문자를 구별(ab, aB, Ab, AB-> 네가지가 다 다름.)
        * 3. 변수는 대문자가 아닌 소문자로 시작한다.(암묵적룰)
        * 4. 변하지 않는 변수는 (아이디 등) 모두 대문자로 작성한다(예. USERID)
             누가봐도 전부 대문자라면 회피를 할 수 있기 때문에. (건드리면 안되는 것이라고 생각할 수 있기 때문)
             (JAVA 등의 개발언어들은 문법적으로 잠금이 가능, js는 그렇지 않았지만 현재는 잠금 가능)
        * 5. js에서 이미 정의된 예약어 사용 금지.
             (break, case, catch, continue, default, delete, do, else, finally, for, function, if, in, instanceof, new, return, switch, this, throw, try, typeof, var, void, while, with)
*/
/*
    ? 변수의 종류
      * 1. 전역변수 : 전체 영역에서 사용 가능한 변수
      * 2. 지역변수 : 정해진 영역 내에서만 사용할 수 있는 변수
*/

window.onload = function(){
    //var localVAl="지역변수";
    //alert(localVAl)
    /* 
        alert("") : "" 안의 내용이 팝업창으로 뜸
        alert(변수 그대로) : 설정해놓은 상태로 뜸
     */
}
//console.log(localVAl);
//에러발생: localVal 는 해당 함수 내에서만 사용 가능(지역변수라서)

var globalVal = "전역변수";
function func1(){
    var localVal = "함수 1번내 지역변수";
    alert(localVal);
}
function func2(){
    var localVal = "함수 2번내 지역변수";
    alert(localVal)
    globalVal = "바뀐 전역변수";
}

/*
    ? 변수의 종류
      * 3. 매개변수 : 
      * 4. 멤버변수 : 수업시간에 안함
*/

function sum(num1, num2){
    var result = num1 + num2;
    console.log(result);
}
sum(5, 3);
/*
    function sum(첫번째 매개변수, 두번째 매개변수){
        변수선언 : result -> 첫번째 매개변수 + 두번째 매개변수;
        콘솔창에 출력 : result;
    }
    sum(3, 5)=>
        sum의 첫번째 매개변수 
*/

//변수 선언 방법
// 1. , 로 구분
var name = "지현", age="20";

// 2. ;로 구분
var name = "박지현";
var age = "20";

/*
    var name ="박지현";
    var : 선언하겠다.
    name : 변수이름
    "박지현" : 초기값
    선언과 동시에 초기화
*/

var abcd; //선언만 
abcd = "1234"; //초기화만

// 3. 동시선언, 동시초기화
var radius, pi;
radius=10, pi=3.14159;

//4. 변수의 특성
function change(){
    cup ="coke"; // 컵에 담겨있던 것을 버리고, 콜라를 담았다.
}
var cup ="coffee"; // 컵을 만들어서 커피를 담았다
console.log(cup); // 컵에 뭐가 담겨있니?
var cup ="green tea"; // 커피를 버리고, 녹차를 담았다
console.log(cup);// 컵에 뭐가 담겨있니?
change();
var cup ="water"; // 녹차를 버리고 물을 담았다.
console.log(cup);// 컵에 뭐가 담겨있니?

// 먼저 썼고, 함수를 넣었다고 우선순위가 아니라 결과적으로 마지막에 적은 값이 출력됨(출력한 시점에)

// 5. 연산자 사용
var value = 10;
var value2 = value + 15;
// NaN = Not a Number
console.log(value2);

// todo 1.
// 자신의 나이를 myAge 라는 변수에 담고, 
// result라는 변수에 10년 뒤의 나이를 담아서
// 콘솔창에 출력해보기

var myage = 31; // 선언+ 초기화(=초기설정) 리셋이 아니라 초기설정값이라고 보면 됨.
var result = myage + 10;
console.log(result);// 콘손창에 로그로 출력



