$(document).ready(function(){
    $("img").click(function(){//무엇을 언제?
        var $src = $(this).attr("src"); // img src값을 $src에 담는다.

        $("body").append("<div id='lightBox'></div>");
        $("#lightBox").append("<img src='"+$src+"'>")
    });

    
});


/* 
    append : 요소의 마지막으로 추가.(자식)
    prepend : 요소의 처음으로 추가.(자식)
    before : 요소의 앞에 추가.(형제)
    after : 요소의 뒤에 추가.(형제)
*/