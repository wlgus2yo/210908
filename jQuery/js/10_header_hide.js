$(document).ready(function(){
    header_hide();
});


function header_hide(){
    var $top = 0;
    $(window).scroll(function(){
        var $new_top = $(window).scrollTop();
        if($new_top > $top){
            //현재 타이밍의 $new_top과 $top을 비교한다는 점을 기억.
            $("header").addClass("hide");
        }else if($new_top < $top){
            //현재 타이밍의 $new_top과 $top을 비교한다는 점을 기억.
            $("header").removeClass("hide");
        }
        $top = $new_top;
    });
}