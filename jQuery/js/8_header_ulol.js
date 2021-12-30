$(document).ready(function(){
    // Cascading Style Sheet
    // => 흘러내리는 스타일 시트 
    // => 위에서 아래로, 앞에서 뒤로 흐른다.
    $("ul > li").mouseenter(function(){
        $(this).children("ol").stop().slideDown(400);
    });
    $("ul > li").mouseleave(function(){
        $(this).children("ol").stop().slideUp(400);
    });

    $("ul > li > a").click(function(){
        var $href = $(this).attr("href");
        $($href).slideDown();
        //var $offset = $($href).offset().top;
        //$("html").stop().animate({scrollTop:$offset}, 1000);
    })
});