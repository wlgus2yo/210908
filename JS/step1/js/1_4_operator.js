/*
    1. 기본사칙(숫자열) 연산자
        - +(덧셈), -(뺄셈), *(곱셈), /(나눗셈), %(나머지), () 괄호가 우선.
    2. 문자열 연산자
        - +(덧셈). 문자열을 합친다.
    3. 복합 대입 연산자
        - += : 기존 변수의 값에 값을 더함. *= 기존 변수의 값에 값을 곱함.
        - -= : 기존 변수의 값에 값을 뺌. /= 기존 변수의 값에 값을 나눔.
        - %= : 기존 변수의 값에 나머지를 구함
        var a = 20;
        a = a + 10;
            => a+=10;
        a = a * 10;
            => a*=10;
        왼쪽 = 오른쪽 (왼쪽에 오른쪽을 대입한다.)
    4. 증감 연산자.
        - ++ : 1씩 증가, -- : 1씩 감소
          ex) a = 10;
              a++;
              console.log(a) => 11;
    5. 조건 비교 연산자
        - > 좌변이 크다
        - < 우변이 크다
        - >= 좌변이 크거나 같다.
        - <= 우변이 크거나 같다.
        - == 좌변과 우변이 같다.
        - != 좌변과 우변이 다르다.
          ex ) 20 < 25 > 20
                1(true) > 20 => false
    6. 논리 연산자
        - &&(곱) : 그리고(둘 다 참), ||(합, verticalBar) : 또는(하나이상 참)
        (270 < 52) && (10 > 5) => 거짓
        (270 < 52) || (10 > 5) => 참
        참 && 참 => 참
        참 && 거짓 => 거짓
        거짓 && 참 => 거짓
        거짓 && 거짓 => 거짓
        참||참 => 참
        참||거짓 => 참
        거짓||참 => 참
        거짓||거짓 => 거짓
    7. 논리 부정 연산자
        - !를 앞에
*/

// case.1 10이 저장된 변수 a, 숫자 20, 그리고 30을 더해서 
// result에 저장 후 출력
function operator1_1(){
    var a = 10;
    var result = a + 20 + 30;
    console.log(result);
    // 변수가 두개
}
function operator1_2(){
    var a = 10; // a는 10이다
    a = a + 20; // a는 10 + 20; 즉 30이다.
    a = a + 30; // a는 30 + 30; 즉 60이다.
    console.log(a);
}
function operator1_3(){
    var a = 10;
    a+=20;
    a+=30;
    console.log(a);
}

// case.2 50이 저장된 a, 20이 저장된 b를 곱한값을 
//        10으로 나누어 result에 저장 후 출력
function oper2_1(){
    var a = 50;
    var b = 20;
    var result = a * b / 10;
    console.log(result);
}
function oper2_2(){
    var a = 50;
    var b = 20;
    var c = a * b;
    var result = c / 10;
    console.log(result);
}

// TODO.1 숫자 5를 2로 나누었을 때 나머지 값이 얼마인지 result에 담아 출력
function oper3(){
    var result;
    result = 5 % 2;
    console.log(result);
}

// TODO.2 'hello'라는 문자열이 담긴 변수 a와 'WORLD!' 라는 문자열이 담긴 b를 합쳐서
//          hello WORLD! 를 출력
function stringOper(){
    var a = "hello";
    var b = "WORLD!";
    console.log(a + b);
}

function operEx(){
    var list = ""; 
        // 비워둔다면 처음에 undefined + 문자열
        // "undefined" + "문자열" = "undefined문자열"
    list = list + "<ul>"; // 문자열 + 문자열
        // "" + "<ul>"; 
    list = list + "<li>Hello ~</li>";
        // ("" + "<ul>") + "<li>Hello ~</li>"
    list += "<li>JS !</li>"
        // ("" + "<ul>" + "<li>Hello ~</li>") + "<li>JS !</li>"
    list += "</ul>"
        // ("" + "<ul>" + "<li>Hello ~</li>" + "<li>JS !</li>") + "</ul>"
    console.log(list);
    document.write(list);
    
}

// TODO.3 다음 코드를 복합대입연산자를 활용하여 간소화 하라.
function compareOper(){
    var a = 10;
    a = a + 10; // a += 10;
    console.log("a = "+ a);
}

// case.3 증감 연산자가 뒤에 올경우
function numberPlusAfter(){
    var numb = 10;
    console.log(numb++); // 출력 후 +1;
    console.log(numb++); // 출력 후 +1;
    console.log(numb++); // 출력 후 +1;
}

// case.4 증감 연산자가 앞으로 올경우
function numberPlusBefore(){
    var numb = 10;
    console.log(++numb); // +1 후 출력;
    console.log(++numb); // +1 후 출력;
    console.log(++numb); // +1 후 출력;
}

function numberOper(){
    var a = 10;
    a++; // a = a + 1;
    console.log("a = " + a);
}

// case.6 숫자 10이 담긴 a와, 20이 담긴 b의 크기를 비교 출력
    //(a가 b보다 큰가?)
function compareOper1(){
    var a = 10;
    var b = 20;
    var result = a > b;
    console.log("10 > 20 = " + result);
}
    //(a와 b가 같은가?)
function compareOper2(){
    var a = 10;
    var b = 20;
    console.log("10 == 20 ? "+ (a == b))
}
    //(a와 b가 다른가?)
function compareOper3(){
    var a = 10;
    var b = 20;
    console.log (a != b);
}

// case.7 변수 a에 "학생", 변수 b에 "웹퍼블리셔"
// a가 학생이 맞고, b가 웹퍼블리셔가 맞는지 result에 담아서 출력
function logicalOper(){
    var a = "학생";
    var b = "웹퍼블리셔";
    var result = (a=="학생")&&(b=="웹퍼블리셔")
    console.log("result = " + result);
}