$(document).ready(function(){
    $("a").click(function(E){
        E.preventDefalut();
        var $target = $(this).attr("href");
        var $offset = $($target).offset().top;
        $("html").animate({scrollTop:$offset})
    })
});