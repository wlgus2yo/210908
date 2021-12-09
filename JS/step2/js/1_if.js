/*
    ? 조건문
    * 실무의 예제
        - 1. 로그인 시 ID / PW 확인.(서버에 저장된 정보와 같은지 비교 후 "둘다" 일치하면 승인, 아니라면 거절)
        - 2. 게임같은 경우 공격을 했을 때에, 타격 여부, 데미지 여부 판별
        - 3. 경품 추첨시 유저의 번호에 따라 경품 당첨 여부 판별
        - 4. 삭제 작업 진행 시 사용자의 Yes/No에 따라 수행여부 판별
        - 5. slide같은 경우 좌, 우 방향의 끝 판별
    if(273 < 100){
        // 조건문의 표현식 (273 < 100)이 참일 때 실행
        console.log("~~");
        alert("~~");
    }
*/

// case.1 현재 시간이 오후인가 오전인가.
function amORpm(){
    var date = new Date();
    var hour = date.getHours();
    // hour는 12시를 기준으로 오전/오후
    // 
    /*
    if(hour >= 12){
        alert("현재 시간은 오후 "+ (hour-12) +"시 입니다.");
    }
    if(hour < 12){
        alert("현재 시간은 "+hour+"시 입니다. 오전입니다.");
    }
    //
    if(hour >= 12){
        alert("현재 시간은 오후 "+ (hour-12) +"시 입니다.");
    }else if(hour < 12){
        alert("현재 시간은 "+hour+"시 입니다. 오전입니다.");
    }
    */
    if(hour >= 12){
        alert("현재 시간은 오후 "+ (hour-12) +"시 입니다.");
    }else{
        alert("현재 시간은 "+hour+"시 입니다. 오전입니다.");
    }
}

//case.2 말일인가 아닌가. 말일을 31일이라고 가정
function lastDay(){
    var date = new Date();
    var day = date.getDate();
    if(day == 31){
        alert("말일입니다.");
    }else{
        alert("말일이 아닙니다.");
    }
}

//case.3 현재 시간을 받아서, 아침먹을시간, 점심먹을 시간, 저녁먹을 시간을 판별하라
//  0시 ~  8시 : 아침먹을시간;
//  8시 ~ 15시 : 점심먹을시간;
// 15시 ~ 24시 : 저녁먹을시간;
function mealTime(){
    var date = new Date();
    var hour = date.getHours();
    if(hour < 8){ // hour가 8보다 작다면
        alert("아침 먹을 시간");
    //}else if(8 < hour && hour < 15){ // hour가 8보다 작지 않고, hour가 15보다 작다를 둘다 만족한다면.
    }else if(hour < 15){ // (hour < 8) == false
        alert("점심 먹을 시간");
    }else{ // 위의 조건을 모두 만족하지 못한다면.
        alert("저녁 먹을 시간");
    }
}

// todo.1 window.prompt로 임의의 숫자를 입력받아 양수인지 음수인지 판단해보자.
function numbJudge(){
    var numb = window.prompt("숫자를 입력하세요.");
    //1. 문자를 입력받는다.
    numb = Number(numb);
    //2. 문자로 숫자로 변환.
    if(numb > 0){
        alert("양수입니다.");
        // 3-1. 양수거나 (0보다 크다면)
    }else if(numb < 0){
        alert("음수입니다.");
        // 3-2. 음수거나 (0보다 작다면)
    }else if(numb == 0){
        alert("0입니다.");
        // 3-3. 0이거나 (0과 같다면)
    }else{
        alert("잘못된 값입니다. 값을 확인해주세요.")
        // 3-4. 잘못된 값이거나 (휴먼에러. 사용자의 실수.)
    }
}

// todo.2 값을 입력받아 짝수인지 홀수인지 판별해보자.
function oddOReven(){
    var numb = Number(window.prompt("숫자를 입력하세요."));
    if(numb%2 == 0){
        //짝수(2n)
        alert("짝수입니다.")
    }else if(numb%2 == 1){
        //홀수(2n-1)
        alert("홀수입니다.")
    }else{
        //휴먼에러
        alert("잘못된 값입니다. 값을 확인해주세요.")
    }
    /*
        1. 숫자를 입력받는다.(변수에 저장)
        2. 조건문 생성
            2-1. 짝수라면 
            2-2. 짝수가 아닌 애들중에서 홀수라면
            2-3. 짝수도, 홀수도 아니라면
    */
}

//case.4 세가지 점수를 받아서 평균을 구해보자.
function avgScore(){
    // 수리, 외국어, 언어;
    var mathScore = Number(window.prompt("수리 점수를 입력하세요.")); //수리 점수를 입력받고 변수에 저장
    var engScore = Number(window.prompt("외국어 점수를 입력하세요.")); //외국어 점수를 입력받고 변수에 저장
    var koScore = Number(window.prompt("언어 점수를 입력하세요.")); //언어 점수를 입력받고 변수에 저장
    var avg = (mathScore + engScore + koScore) / 3;
    avg = avg.toFixed(1);
    //90 점 이상 : 평균 ~~점 입니다. 수 입니다.
    //80 점 이상 : 평균 ~~점 입니다. 우 입니다.
    //70 점 이상 : 평균 ~~점 입니다. 미 입니다.
    //60 점 이상 : 평균 ~~점 입니다. 양 입니다.
    //50 점 이상 : 평균 ~~점 입니다. 가 입니다.
    //50 점 미만 : 평균 ~~점 입니다. 망했네요.
    if(avg > 100 || avg < 0){
        alert("정확하게 입력해주세요.");
    }else if(avg >= 90){
        alert("평균 "+avg+"점 입니다. 수 입니다.");
    }else if(avg >= 80){
        alert("평균 "+avg+"점 입니다. 우 입니다.");
    }else if(avg >= 70){
        alert("평균 "+avg+"점 입니다. 미 입니다.");
    }else if(avg >= 60){
        alert("평균 "+avg+"점 입니다. 양 입니다.");
    }else if(avg >= 50){
        alert("평균 "+avg+"점 입니다. 가 입니다.");
    }else if(avg < 50){
        alert("평균 "+avg+"점 입니다. 망했네요.");
    }else{
        alert("문자는 계산이 되지 않습니다.");
    }
}

// case.5 사용자 아이디 "GY"를 입력받아서, 아이디가 맞다면 alert("접속 승인!") 아니라면 alert("잘못된 ID 입니다.");
function userIDcheck(){
    var userID = window.prompt("아이디를 입력하세요.");
    if(userID == "GY"){
        alert("접속 승인!");
    }else{
        alert("잘못된 ID 입니다.");
    }
}

// case.6 사용자 아이디를 입력받고, 패스워드를 입력 받은 후,
// ID가 본인 이니셜, 패스워드가 1234를 판별해서
// 접속 승인 / ID 또는 PW가 잘못되었습니다.
function userInfo1(){
    var userID = window.prompt("아이디를 입력해주세요.");
    var userPW = window.prompt("비밀번호를 입력해주세요.");
    
    (userID =="GY" && userPW =="1234")? alert("접속 승인") : alert("접속 실패");
    /*
    if(userID == "GY" && userPW == "1234"){
        alert("접속을 승인합니다.");
    }else{
        alert("ID 또는 PW가 잘못되었습니다.");
    }
    */
    /*
    if(userID == "GY"){
        if(userPW == "1234"){
            alert("접속을 승인합니다.");    
        }else{
            alert("ID 또는 PW가 잘못되었습니다.");
        }
    }else{
        alert("ID 또는 PW가 잘못되었습니다.");
    }
    */

}
// todo.4
// 사용자 ID와 PW를 입력받고, ID가 본인 이니셜, 
// 패스워드가 1234를 판별해서
// 승인 / ID가 틀렸는지 / PW가 틀렸는지 / 둘다 틀렸는지 확인 후
// "접속 승인!" / "ID가 틀렸습니다." / 
// "PW가 틀렸습니다." / "잘못된 정보입니다."
function userInfo2(){
    var userID = window.prompt("아이디를 입력해주세요.");
    var userPW = window.prompt("비밀번호를 입력해주세요.");
    if(userID=="GY" && userPW=="1234"){
        alert("접속 승인!");
        // ID와 PW가 둘다 충족
    }else if(userID == "GY"){
        // ID or PW 중 최소한 하나는 불충족.
        // ID는 충족? => PW가 틀렸다.
        alert("PW가 틀렸습니다.");
    }else if(userPW == "1234"){
        // ID or PW 중 최소한 하나는 불충족.
        // PW는 충족? => ID가 틀렸다.
        alert("ID가 틀렸습니다.");
    }else{
        alert("잘못된 정보입니다.");
    }
}