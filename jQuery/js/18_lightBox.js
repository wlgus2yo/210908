// 현재 상태에서 그냥 라이트 박스를 클릭하면 body를 통해서 이벤트를 위임 받을 수 있도록
// 이벤트 위임을 구글에 검색 후 작성하여라.
// 이벤트 캡쳐링, 이벤트 버블링 검색하면 됩니다.

$(document).ready(function(){
    
    $("img").click(function(){//무엇을 언제?
        var $src = $(this).attr("src"); // img src값을 $src에 담는다.

        $("body").append("<div id='lightBox'></div>");
        $("#lightBox").append("<img src='"+$src+"'>");
        $("#lightBox").fadeIn();
        remove();
        stop_event();
    });

    function remove(){
        $("#lightBox").click(function(){
            $(this).fadeOut(400);
            setTimeout(function(){
                $("#lightBox").remove();
            },400);
        });
    }
    function stop_event(){
        $("#lightBox img").click(function(e){
            e.stopPropagation();
        });
    }
});
/*
    1. 라이트박스가 부드럽게 나타나도록 (페이드 인);
        ? 1-1. FadeIn : display::"none"인 대상을 block + opacity 0->1
        ? 1-2. display:block 이 되기 때문에 가운데 정렬이 무너진다.
        ? 1-3. flex를 쓰지 못하기에 차선책으로 absolute를 이용한 이미지 이동.
        ? 1-4. relative - absolute 구조에서 정가운데로 보내려면??
    2. 라이트 박스를 다시 클릭하면 사라지도록; => 어떤 사라지도록 일까요?
        ? 1-1. 단순히 숨길것인지(display:none), 아예 지울것인지(remove())
        ? 1-2. 무엇을 어떻게 했을때 무슨동작을 할것인가.
         
*/


/* 
    append : 요소의 마지막으로 추가.(자식)
    prepend : 요소의 처음으로 추가.(자식)
    before : 요소의 앞에 추가.(형제)
    after : 요소의 뒤에 추가.(형제)
*/