$(document).ready(function(){
    /*
    Math.random()*7     : 0 ~ 7;
    Math.random()*7 + 1 : 1 ~ 8;
    Math.random()*7 + 2 : 2 ~ 9;
    Math.random()*7 + 3 : 3 ~ 10;
    Math.random()*8     : 0 ~ 8;
    Math.random()*8 + 1 : 1 ~ 9;
    Math.random()*9     : 0 ~ 9;
    Math.random()*9 + 1 : 1 ~ 10;
    */
    // 일정 시간(1초 : 1000ms)마다 #banner1의 이미지를
    // 랜덤으로 교체하라.
    // 1. 일정시간마다 실행하는 함수 호출
    // 2. 얼마마다 실행할건지 시간 설정
    // 3. 랜덤값 선언 => 정수화
    // 4. #banner1의 이미지 src값 변경

    // #banner1 은 1초마다, #banner2는 0.5초마다 랜덤하게 바뀌도록.
    img_swap(1000,"#banner1");
    img_swap(500,"#banner2");
});
function img_swap(speed,target){
    setInterval(function(){
        var numb = Math.round(Math.random()*7 + 1); // 1~8
        $(target).attr("src","images/logo_0"+numb+".jpg");
    },speed)
}