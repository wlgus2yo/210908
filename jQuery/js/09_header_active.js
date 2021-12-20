$(document).ready(function(){
    //document가 ready 될 때

    scroll_init();//호출
});
function scroll_init(){
    $(window).scroll(function(){
        //window가 scroll이 될 때
        var $top = $(window).scrollTop(); //$top 정의

        header_active($top); //인자로 $top 전달
        header_active2($top); //인자로 $top 전달
        //함수 두개를 호출
    })
}
function header_active(AA){
    if(AA > 0){
        $("header").addClass("active");
    }else{
        $("header").removeClass("active");
    }
}
function header_active2(aa){
    var $sec_03 = $("#sec_03").offset().top;
    if(aa >= $sec_03){
        $("header").addClass("active2");
    }else{
        $("header").removeClass("active2");
    }
}
/*
    section 03에 도달하면 
    header의 
    background를 검정색으로, color를 흰색으로
*/