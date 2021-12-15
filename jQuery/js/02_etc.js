$(document).ready(function(){
    moveCircle();
});
//case.1 window.prompt를 이용한 원 움직이기
function moveCircle(){
    var $circle = $(".circle");
    var $btn = $("#btnMoveCircle");
    $btn.click(function(){
        var $xPos = window.prompt("0 ~ 380까지의 숫자만 입력하세요..");
        $xPos = parseInt($xPos);
        if($xPos >= 0 && $xPos <= 380){
            $circle.css("left",$xPos+"px");
        }else{
            alert("잘못된 수치입니다.");
        }
    });
}