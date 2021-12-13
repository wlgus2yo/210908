/*
    ?for
    * 특정 구문을 정해진 횟수만큼 반복해야 할 경우 사용하는 반복문
        ex. 게시판 목록 불러오기.
            메뉴 항목 출력
            갤러리 이미지 출력
    * 특징 : 
            1. 초기식 실행 >
            2. 조건문 비교(거짓일 경우 종료)
            3. 참일 경우 실행
            4. 종결식 실행
            5. 2번으로 회귀
*/

// case.1 이름을 10번 출력해보자.
function namePrint10(){
    var name = "박근영";
    /*for(초기식; 조건문; 종결식){
        실행문
    }*/
    for(var i = 0; i < 10; i++){
        console.log(name);
    }
}

// case.2 이름을 1000번 출력해보자.
function namePrint1000(){
    var name = "박근영";
    for(i = 1; i <= 1000; i++){
        document.write(i+"."+name+"<br />");
    }
}

// case.3 이름을 500번 출력(홀수만)
function namePrint500_1(){
    var name = "GY";
    for(i = 1; i <= 1000; i++){
        if(i%2 == 1){//홀수라면
            document.write(i+". "+name+"<br />");
        }
    }
}
function namePrint500_2(){
    var name = "GY";
    for(i = 1; i <= 1000; i+=2){
        document.write(i+". "+name+"<br />");
    }
}

//todo.1 JS엔진처럼 생각하기
function thinkJS(){
    for(var i = 0; i < 10; i++){
        document.write("i = " + i + "<br / >");
    }
    document.write("최종 i = " + i);
}

// todo.2 1 ~ 10까지 출력되는 반복문 3가지 작성
function answer1(){
    for(i = 0; i < 10; i++){
        document.write(i+1 + "<br>");
    }
}
function answer2(){
    for(i = 1; i < 11; i++){
        document.write(i + "<br>");
    }
}
function answer3(){
    for(i = 10; i < 20; i++){
        document.write(i-9 + "<br>");
    }
}
function answer4(){
    for(var i = 1; i <= 10; i+=2){
        // 종결식이 꼭 ++, --만 들어가진 않는다.
        document.write(i + "<br>");
        document.write(i+1 + "<br>");
    }
}
function answer5(){
    for(var i = 10; i >= 1; i--){
        //반복문은 거꾸로 돌아갈 수도 있다.    
        document.write(11-i +"<br>");
    }
}

// case.4 별모양(*) 10개 출력
function star10(){
    var star = "";
    for(i = 0; i < 10; i++){
        //star = star + "*";
        star += "*";
    }
    document.write(star);
}

// case.5 좋아하는 과일 4개를 배열로 배치하고, alert으로 출력
function fruit(){
    var array = ["바나나", "사과", "복숭아", "메론", "딸기"];
    // array : 배열
    console.log(array.length); //array의 길이.(갯수)
    console.log(array[2]) //array의 두번째 요소를 택한다.
    for(i = 0; i < array.length; i++){
        // i는 0부터 array의 갯수만큼 반복을 시키겠다.

        alert(array[i]);
        // array의 i번째 요소를 알림으로 출력하라.
    }
}

// todo.3
/*
    변수 / 연산자 / 형변환 / 조건문if / 조건문 switch / 
    반복문 while / 반복문 for / 
    를 배열에 담아서 document.write로 한줄씩 출력하시오
    결과값 : 
    1. 변수
    2. 연산자
    3. 형변환 
    ....
    7. 반복문 for
*/
function arrayFor(){
    var arr = ["변수","연산자","형변환","조건문if","조건문 switch","반복문 while","반복문 for"];
    for(i = 0; i < arr.length; i++){
        document.write((i+1) +". "+ arr[i] + "<br />");
    }
}

// case.6 역반복 배열 부르기
/*
    1. 반복문 for
    2. 반복문 while
    3. 조건문 switch
    ....
    7. 변수
*/
function reverseArray(){
    var arr = ["변수","연산자","형변환","조건문if","조건문 switch",
    "반복문 while","반복문 for"];
    for(i = arr.length-1; i >= 0; i--){
        document.write((arr.length-i) + ". "+arr[i] + "<br />");
    }
}

// case.7 continue문
function forContinue(){
    for(i = 0; i<=10; i++){
        continue;
        document.write(i + "<br/ >");
    }
    document.write("최종 i = " + i);
}

// case.8 continue 활용
function runContinue(){
    for(i = 0; i <= 20; i++){
        //홀수만 출력
        if(i%2==0){
            continue;
        }
        document.write(i + "<br>");
    }
}
// case.8-1 continue 활용2

function runContinue2(){
    var result = 0;
    for(i = 0; i <= 15; i++){
        if(i % 2 == 0){ //짝수라면
            continue; //아래 문장 실행X, 종결식 실행
        }
        result = result + i;
        console.log(i+"까지의 합 = " + result);
    }
    // 홀수만 모두 더한 결과값 result를 출력하라.(continue사용)
    console.log("최종 result = " + result);
}

// case.9 break문
function forBreak(){
    for(var i = 0; i < 10; i++){
        break; // 조건문 파괴. 종결식 실행X
        document.write(i);
    }
    document.write("최종 i = "+ i);
}

// case.10 break 활용
function runBreak(){
    for(i = 0; true; i++){
        alert(i+"번째 반복문");
        if(!confirm("계속 실행하시겠습니까?")){
            break;
        }
    }
    alert("반복문 종료. 최종 i = " + i);
}

// 다중 for문
// case.1 반절 피라미드
function halfPyramid(){
    var star = "";
    for(i = 1; i <= 10; i++){
        for(j = 0; j < i; j++){
            star+="*";
        }
        star+="<br />";
    }
    document.write(star);
}
/*
    i == 1;
        j == 0; 0 < 1 (true)
        star = star + "*"
        star = star + "<br>";
        ==> "*" + "<br>";
    i == 2;
        j == 0; (true)
        star = star + "*"
        j == 1; (true)
        star = star + "*"
        star = star + <br>
        "*" + "*" + "<br>"
    i ==3;
        j == 0 : star+="*"
        j == 1 : star+="*"
        j == 2 : star+="*"
        star += "<br>"
        "***" + "<br>"
*/

//todo.1 역 반절 피라미드
function reverseHalfPyramid(){
    var star = "";
    for(var i = 10; i >= 0; i--){
        for(var j = 0; j < i; j++){
            star = star + "*";
        }
        star = star + "<br>";
    }
    document.write(star);
}
/*
i == 10;
j == 0,1,2,3,4,5,6,7,8,9
"*" : 10번, "<br>" : 1번;
i == 9;
j == 0,1,2,3,4,5,6,7,8
"*" : 9번, "<br>" : 1번;
i == 8;
j == 0,1,2,3,4,5,6,7
"*" : 8번, "<br>" : 1번;
*/

//HW. 피라미드
/*
         *
        ***
       *****
      *******
     *********
    ***********
   *************
  ***************
 *****************
*******************
var star = "";
for(i = 1; i <= 10; i++){
    for(){
        star+="&nbsp;"
    }
    for(){
        star+="*"
    }
    star+= "<br >";
}
document.write(star);
*/