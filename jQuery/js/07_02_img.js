$(document).ready(function(){
    // #banner1만 1초마다 변하는 함수 작성.
    var i = 1; // #banner1을 위한 숫자
    var j = 1; // #banner2를 위한 숫자
    img_change(i, "#banner1", 1000)
    img_change(j, "#banner2", 500)
});
function img_change(check, target, speed){ // check, target, speed 자리에 무언가가 들어오면 그것을 대입하는 인자
    setInterval(function(){ // speed ms 마다 실행
        check++; // speed ms마다 check = check + 1;
        if(check > 8){ // if (check > 8) 범위를 벗어난다면, 
            check = 1; //check는 1로 회귀
        }
        $(target).attr("src","images/logo_0"+check+".jpg"); // $(target)에게 attr 변경.
    },speed)//속도가 설정
}