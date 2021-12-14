/*
    ? function (함수)
    * 가장 작은 기능의 단위
    * 기존 반복문의 유지보수가 어려운 문제.
        ex) 여러개의 반복문의 각기 다른 value 수정
    * 중복 코드가 많은 문제를 근본적으로 해결
        - 코드의 재사용 + 중복 제거 + 유지보수의 용이성
*/

// exp.1 다음 구문을 함수화 하라
/*
document.write("안녕하세요, 반갑습니다. <br>");
document.write("안녕하세요, 반갑습니다. <br>");
document.write("안녕하세요, 반갑습니다. <br>");
*/
function hello1(){
    var comment = "안녕하세요, 반갑습니다. <br>";
    for(i=0; i<3; i++){
        document.write(comment);
    }
}
function hello2(numb){
    for(i=0; i<numb; i++){
        document.write("안녕하세요, 반갑습니다. <br>");
    }
}

//case.1 매개변수(parameter)가 있는 함수 만들기
// ? 함수 내부에 있는 변수의 값(value)를 변경하여,
// 기존 함수가 작성 이후 접근 불가능한 부분 해결
function sumParam(num1, num2){
    var result = num1 + num2;
    alert("두 수의 합은 " + result + " 입니다.");
}
function minParam(num1, num2){
    var result = num1 - num2;
    alert("두 수의 차는 " + result + " 입니다.");
}

//case.2 리턴.
function sumReturn(num1, num2){
    var result = num1 + num2;
    return result;
}
// var value = sumReturn(3, 5);

//todo.1 구구단 출력을 함수로 만들기
/*
    2 X 1 = 1;
    2 X 2 = 2;
    .
    2 X 9 = 18;
    3 X 1 = 3;
    .
    .
    9 X 9 = 81
*/
function printGugudan(){
    for(var i=2; i<=9; i++){
        document.write(i+"단 출력 <br>");
        for(var j=1; j<=9; j++){
            document.write(i + "X" + j + "=" + i*j+"<br>");
        }
        document.write("<br>");
    }
}

// 간단한 계산기 만들기 
/*
    +,
    -,
    *,
    /
    num1, num2, op 를 매개변수로 받아서
    if문 또는 switch문으로 결과 result를 출력하는(alert)
    함수를 만들어 보시오.
calc(num1, num2, "+");
calc(3, 5, "+") => alert(8);
*/
function calc(num1, num2, op){
    if(op == "+"){
        var result = num1 + num2;
        alert(result);
    }else if(op == "-"){
        var result = num1 - num2;
        alert(result);
    }else if(op == "*"){
        var result = num1 * num2;
        alert(result);
    }else if(op == "/"){
        var result = num1 / num2;
        alert(result);
    }else{
        alert("똑바로 입력하세요.")
    }
}
// 간단한 계산기 만들기 2
// 위의 함수의 덧셈 ~ 나눗셈까지를 각각의 함수로 만들어서
// 계산하는 계산기 만들기
function calc2(num1, num2, op){
    switch(op){
        case "+":
            var result = add(num1, num2);
            break;
        case "-":
            var result = sub(num1, num2);
            break;
        case "*":
            var result = mul(num1, num2);
            break;
        case "/":
            var result = div(num1, num2);
            break;
        }
        alert(result);
}
function add(add_num1, add_num2){
    var addResult = add_num1 + add_num2;
    console.log(addResult);
    return addResult;
}
function sub(sub_num1, sub_num2){
    var subResult = sub_num1 - sub_num2
    return subResult;
}
function mul(mul_num1, mul_num2){
    var mulResult = mul_num1 * mul_num2
    return mulResult;
}
function div(div_num1, div_num2){
    var divResult = div_num1 / div_num2
    return divResult;
}

$(document).ready(function(){
    console.log("READY!");
    $("#run").click(function(){
        console.log("click!");
        hello();
    });
    $("#run").click(function(){
        for(i = 0; i<=10; i++){
            document.write(i+"<br>");
        }
    });
});
function hello(){
    alert("안녕하세요!");
}