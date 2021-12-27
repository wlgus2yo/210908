$(document).ready(function(){
    // $("button").click(function(){
    //     $target = $("section:nth-child(2)").offset().top;
    //     $("html").animate({scrollTop:$target},700);
    // });
    var $btn = "<button>NEXT</button>"
    // $(this) : 이벤트가 붙은 대상 중 이벤트 발생 대상
    // parent() : 부모를 선택;
    // children() : 자식을 선택;
    // next() : 다음 형제를 선택;
    // prev() : 이전 형제를 선택;
    // append() : 선택 대상의 맨 뒤에 요소 생성
    // prepend() : 선택 대상의 맨 앞에 요소 생성
    // ex) $(this).parent().next().css("background","red");
    /*
    각각의 섹션(마지막 제외)에 버튼을 넣고,
    그 버튼 클릭 시 다음 섹션으로 이동
    class, id, nth-~~, eq 사용 금지
    */
   $("section:not(:last-of-type)").append($btn);
   $("button").click(function(){
        var $idx = $(this).parent().index();
        console.log($idx);
        if($idx != 4){
            $target = $(this).parent().next().offset().top;
            $("html").animate({scrollTop:$target});
            console.log("NEXT");
        }else{
            $("html").animate({scrollTop:0});
            console.log("TOP");
        }
   });

   
    $(window).scroll(function(){
        var $top = $(this).scrollTop();
        $("section").eq(2).css({
            "background-position":"center "+$top/3+"px",
        });

        /*
            button에 opacity:0; transform:translateY(50px);
            스크롤이 될 때, section3의 최상단이 스크롤 탑과 맞닿으면
            button의 opacity, transform값 변경;
        */
        var $offset = $("section").eq(2).offset().top;
        console.log($top);
        if($top >= $offset){
            $("section").eq(2).children("button").css({
                "opacity":"1",
                "transform":"translateY(0)",
                "transition-duration":"0.5s",
            });
        }else{
            $("section").eq(2).children("button").css({
                "opacity":"",
                "transform":"",
            })
        }
    });
});