/*
    ? while
    * while 반복문은 조건이 참일 경우 무한 반복.
      (조건이 정해진다면 for문처럼 사용 가능하기는 함.)
      for : 정해진 횟수의 반복.
      while : 무한 반복처리, 파일 읽고쓰기 및 전송(java, javscript, php ..),
              데이터 출력을 while (개발자)
*/
// case.1 password를 입력받고, "1234"라면 "접속 승인", 
//        아니라면 "잘못 입력하셨습니다."
function pwCheck(){
    while(true){
        var userPW = window.prompt("패스워드 입력");
        if(userPW == "1234"){
            alert("접속 승인");
            break; // 반복문 종료
        }else{
            alert("잘못 입력하셨습니다.");
        }
    }
}

// case.2 구구단
function gugudan(){
    var numb = window.prompt("몇단을 출력할까요?");
    var i = 1;
    while(i <= 9){
        document.write(numb + " X " + i + " = " + numb*i +"<br>")
        i++;
    }
}

// todo.1
/*
    "end"라는 문자가 입력될 때 까지 
    숫자를 계속 입력 받아서 총 합을 출력하고, 
    몇번째 입력인지 prompt에 출력
    1. 카운트를 지정(1);
    2. 입력을 "계속"(반복문 내부에서) 받는다.
        2-1 카운트++;
        2-2 총 합에다가 받은 값을 더한다.
        2-3 만약 "end"라면 종료.
    3. 총 합 출력.
*/
function sumNumb(){
    var count = 1;
    var result = 0;
    while(true){
        //입력을 받아서 변수에 저장(카운트)
        if(/* 변수 값이 "end" */true){
            //종료
        }
        // result = result + 입력값
        // 카운트++;
    }
    //결과값 출력
}