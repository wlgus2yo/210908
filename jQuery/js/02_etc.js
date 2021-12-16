$(document).ready(function(){
    moveCircle();
    moveCircleDetail();
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

// case.2 input value를 이용한 원 움직이기(xAxis, yAxis)

function moveCircleDetail(){
    $("#btnDetailMove").click(detailClick);
}
function detailClick(){
    var $target = $(".circleDetail");
    var $xPos = Number($("#xPos").val());
    var $yPos = Number($("#yPos").val());

    if($xPos >= 0 && $xPos <= 380){
        if($yPos >= 0 && $yPos <= 380){
            // $target.css("left",$xPos+"px");
            $target.css("transform","translateX("+$xPos+"px)")
            $target.css("top",$yPos+"px");
            $target.css("background-color","red");
            $target.css("cursor","pointer");
        }
    }
    
    //$target.css({"left":$xPos+"px","top":$yPos+"px"});
    //css({"css1":"값","css2":"값"})
}
/*
function moveCircleDetail() {
    //var $circle = $(".circleDetail");
    $("#btnDetailMove").click(function () {
        //1. #xPos, #yPos의 값을 받아온다 : .val() 변수에 담는다.
        //2. 숫자로 변환 Number(), parseInt(), Math.round(), 
        //3. 범위 지정 if(){}else if(){}
        //4. 적용 css : left, top 값 조절
        //5. 인풋 값 비우기 : ?
        var $xPos = $("#xPos").val(); //1-1
        var $yPos = Number($("#yPos").val()); //1-2, 2-2
        $xPos = Number($xPos) // 2-1
        // 3-1
        //if($xPos >= 0 && $xPos <= 380){
        //    //$xPos 0보다 크거나 같고 && 380보다 작거나 같을 때 실행
        //    if($yPos >= 0 && $yPos <= 380){
        //        //$yPos 0보다 크거나 같고 && 380보다 작거나 같을 때 실행
        //        $(".circleDetail").css({"left":$xPos+"px","top":$yPos+"px"}); // 4
        //    }
        //}
        // 3-2
        //if(($xPos >= 0 && $xPos <= 380) && ($yPos >= 0 && $yPos <= 380)){
        //    //$xPos 0보다 크거나 같고, 380보다 작거나 같고, $yPos 0보다 크거나 같고, 380보다 작거나 같을때 실행
        //    $(".circleDetail").css({"left":$xPos+"px","top":$yPos+"px"}); // 4
        //}
        
        // 3-3
        if ($xPos < 0 || $xPos > 380 || $yPos < 0 || $yPos > 380) {
            //네가지 중 하나도 성립이 되면 잘못된 값이 하나라도 들어간 것.
            alert("잘못된 값입니다.");
        } else {
            //else에서 실행
            $(".circleDetail").css({
                "left": $xPos + "px",
                "top": $yPos + "px"
            }); // 4
        }
    });
}
*/