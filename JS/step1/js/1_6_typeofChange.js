/*
    JS => "10"+"10"="1010", 사람 =>"10"+"10"=20;
    이런 문제를 해결하기 위해서.
    1.암시적 형변환
        - JS엔진이 자동으로 변환
        ex)
            1. 숫자 + 문자 = 문자. //case.1
            2. 불린 + 숫자 = 숫자. //case.3
            3. 불린 + 문자 = 문자. //case.4
    2.명시적 형변환
        - 개발자가(퍼블리셔가) 직접 지정해서 변환
        ex)
            1. 숫자 -> 문자 
            2. 문자 -> 숫자 //case.1
*/

//case.1 나이를 입력받고 20을 더한 값 출력.
function agePlus(){
    var age = window.prompt("나이를 입력하세요.");
    console.log(age); // 문자열로 입력을 받았고,
    age = Number(age);
    console.log(age); // 숫자로 변환을 했기에
    var result = age + 20; // 숫자+숫자가 가능.
    console.log(result);
}

//case.2 숫자형의 종류
function forcedString(){
    var a = "30.5";
    var result1 = 1 + Number(a);
    var result2 = 1 + parseInt(a);
    console.log(result1);
    console.log(result2);
    // Number는 실수변환, parseInt는 정수변환.
}

//case.3  불린 + 숫자 = 숫자. 
function forcedNumber(){
    var result1 = 2 + true; // true == 1로 계산
    var result2 = 3 + false; // flase == 0으로 계산
    console.log(result1);
    console.log(result2);
}

// case.4 불린 + 문자 = 문자.
function forcedString2(){
    var result = "2" + true; //문자열 + 불린 => 문자 + 문자
    console.log(result);
}

/*
    ? String
        - String(value); - 문자형으로 변환
    ? toSring()
        - value.toString(16); - (16진수)문자형으로 변환
    ? toFixed()
        - Number.toFixed(2); - (소수점 자릿수) 실수 문자형
*/

// case.5 숫자를 문자로 형변환
function stringNumb1(){
    var numb = 10;
    // String
    var result = String(numb);
    console.log(result);
}
function stringNumb2(){
    var numb = 15;
    // toString
    var result = numb.toString(10);
    console.log(result);
}

// case.5-1 background-color red;
function bgColorRed(){
    var bgColor = 0xff0000;
    bgColor = bgColor.toString(16);
    $("body").css("background-color","#"+bgColor);
}

function bgColorRandom(){
    setInterval(function(){
        //Math.random() : 0 ~ 1 사이의 난수를 생성.
        //Math.random()*Number : Number 까지의 난수 생성.
        var random_number = Math.random()*0xffffff;
        //console.log(random_number);

        //Math.random()*0xffffff : ffffff까지의 난수 생성.
        random_number = parseInt(random_number);
        //console.log(random_number);
        
        //16진수로 변환
        random_number = random_number.toString(16);
        console.log(random_number);
        
        //6자리 셋팅
        random_number = "000000" + random_number;
        random_number = random_number.slice(-6);

        //css적용
        $("body").css("background-color","#"+random_number);
    },1000)
}
function random(){
    $(".test > div").each(function(){
        var left = parseInt(Math.random()*100);
        var top = parseInt(Math.random()*100);
        var random_number = Math.random()*0xffffff;
        //console.log(random_number);

        //Math.random()*0xffffff : ffffff까지의 난수 생성.
        random_number = parseInt(random_number);
        //console.log(random_number);
        
        //16진수로 변환
        random_number = random_number.toString(16);
        console.log(random_number);
        
        //6자리 셋팅
        random_number = "000000" + random_number;
        random_number = random_number.slice(-6);
        $(this).css("background-color","#"+random_number);
        $(this).css("left",left+"%");
        $(this).css("top",top+"%");
    });
}

/* 
    ?parse
        - parseInt(value); = 정수형
        - parseFloat(value); = 실수형
    ?Number
        - Number(value); = 실수형
*/

// case.6 문자를 숫자로 형변환
function numbString(){
    var test = "30";
    var result = Math.round(test) + 10;
    //Number, parseInt() : 소수점 버림, parseFloat, Math.round() : 소수점 반올림
    console.log("result = "+result);
}