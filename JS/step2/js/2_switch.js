/*
    ? switch
        - switch는 딱딱 떨어지는 case를 비교할 때 주로 사용된다.
*/

// case.1 홀 짝 구분
function switchGrammar(){
    // n%2==1:홀수, n%2==0:짝수
    var numb = window.prompt("숫자를 입력하세요.");
    //console.log(numb%2);
    switch(numb % 2){
        case 0: //if(numb%2 == 0)
            alert("짝수");
            break;
        case 1: //else if(numb%2 == 1)
            alert("홀수");
            break;
        default: //else
            alert("숫자가 아님");
            break;
    }
    /*
        break를 넣어주지 않으면 조건이 참이 되는 순간부터
        모두 실행을 함(fall through)
        break로 해당 조건에서 중단을 시켜서
        해당 case만 실행
    */
}

// todo.1
/*
    "복권 등수를 입력하세요"
    1 : alert 1등 10억!
    2 : alert 2등 5천!
    3 : alert 3등 3백!
    나머지 : 낙첨..
*/
function lotto(){
    var numb = window.prompt("등수를 입력하세요.");
    numb = Number(numb);
    //console.log(numb);
    //console.log(Number(numb));
    switch(numb){
        case 1:
            alert(numb+"등 10억!");
            break;
        case 2:
            alert(numb+"등 5천!");
            break;
        case 3:
            alert(numb+"등 3백!")
        default:
            alert("낙첨입니다.");
            break;
    }
}

// case.3 switch문을 이용한 계산기
function calculator() {
    /*
        1. 숫자를 두개 입력 받습니다.(numb1, numb2);
        2. 사칙연산자(+, -, *, /)를 입력 받습니다.(operator)
        3. 그에 따른 결과값을 출력하시오.
            3-1.+, - 은 콘솔창으로 출력
            3-2.*, / 은 알람창으로 출력
    */
    var numb1 = window.prompt("첫번째 숫자를 입력하세요.");
    var numb2 = window.prompt("두번째 숫자를 입력하세요.");
    var operator = window.prompt("연산자를 입력하세요.");
    if(typeof(numb1)=="number" && typeof(numb2)=="number"){
        // numb1의 타입이 숫자 && numb2의 타입이 숫자

        switch (operator) { //operator가 무엇이냐면
            case "+": //1. +일때
                console.log(numb1 + numb2); //실행
                break; //종료

            case "-": //2. -일때
                console.log(numb1 - numb2); //실행
                break; //종료

            case "*": //3. *일때
                alert(numb1 * numb2);//실행
                break;//종료

            case "/": //4. /일때
                alert(numb1 / numb2);//실행
                break;//종료

            default : // numb1과 numb2가 확실히 숫자이기에
                alert("연산자가 잘못되었습니다.");
                //연산자가 잘못되었다고 확신 가능.
                break; // 종료
        }
    }else{
        alert("숫자를 입력해주세요.");
    }

}