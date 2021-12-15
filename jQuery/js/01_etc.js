$(document).ready(function(){

    // case.1 태그 이름으로 선택
    // 단순 선언 및 실행
    var $divs = $("div");
    $divs.css("color","#f00"); 

    /*
        jQuery : fadeOut();
        vanilla Script : 
            1. 대상 선언
            2. 정확한 대상 선언
            3. opacity : 1 => 0(시간)
            4. display: block(inline-block, inline) -> none;
    */

    // case.2 id로 선택
    /*$("#btnCheck").click(function(){
        alert("안녕하세요.");
    });*/
    $("#btnCheck").click(sayHello);
    //#btnCheck의 클릭이벤트 발생 시 sayHello 함수 호출



    // case.3 5px solid #00f;
    $("#btnBorder").click(
        function(){
            $("#panel").css("border","5px solid #00f");
        }
    );
   //$("#btnBorder").click(addBorder);
   //#btnBorder의 클릭이벤트 발생 시 내부에서 익명함수 선언
   

   /*
   $("#btnBorder").click(addBorder);
   $("#btnBorder") => target : 이벤트 핸들러
   .click() => event
   function(){} => 실행 구문
   */
   
   textChange();
   // textChange라는 함수 호출.(함수 내부에 클릭이벤트 존재);
});

function sayHello(){
    alert("안녕하세요.");
}
function addBorder(){
    $("#panel").css("border","5px solid #00f");
}
function textChange(){
    $("#btnChange").click(function(){
        // $("#panel2").css("font-size","20px");
        // $("#panel2").css("color","blue");
        // $("#panel2").css("font-weight","900");
        $("#panel2").css({
            "font-size":"20px",
            "color":"blue",
            "font-weight":"900"
        });
    });
}