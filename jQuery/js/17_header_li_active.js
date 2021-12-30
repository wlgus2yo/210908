$(document).ready(function(){
    $("body").css("padding-top",$("header").height());
    $("a").click(function(e){
        e.preventDefault();
        $("a").removeClass("on");
        $(this).addClass("on");

        var $href = $(this).attr("href");
        var $height = $("header").height();
        var $offset = $($href).offset().top - $height;
        $("html").stop().animate({scrollTop:$offset},1000);
    });

});
// 1. li a 클릭시 
//  1-1. 해당 섹션으로 이동을 하되, 섹션이 헤더에 가려지지 않도록
//  1-2. 해당 li의 a태그는 글씨가 빨간색, 나머지는 검정색
        //만약 sec_01 클릭 후 sec_04를 클릭하면 sec_04가 빨간색, 나머지는 검정색
        //Only Script, Script + CSS

/*
    1. 무엇을 어떻게 했을때 (이벤트 핸들러에 어떤 이벤트가 발생했는가)
    2. 해당 섹션으로 이동
        2-1. 클릭된 대상이 가르키고 있는 대상은 무엇인가. attr
        2-2. 섹션의 위치값. offset top
        2-3. 해당 위치값으로 이동 animate (header의 높이 고려.)
*/  