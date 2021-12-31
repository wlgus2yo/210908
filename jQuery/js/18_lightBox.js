// 현재 상태에서 그냥 라이트 박스를 클릭하면 body를 통해서 이벤트를 위임 받을 수 있도록
// 이벤트 위임을 구글에 검색 후 작성하여라.
// 이벤트 캡쳐링, 이벤트 버블링 검색하면 됩니다.

$(document).ready(function(){
    $("img").click(function(){//무엇을 언제?
        var $src = $(this).attr("src"); // img src값을 $src에 담는다.
        $("body").append("<div id='lightBox'></div>");
        $("#lightBox").append("<img src='"+$src+"'>");
        $("#lightBox").fadeIn();
    });

    $("#lightBox").click(function(){ // 이 함수가 실행되는 타이밍인 $(document).ready 타이밍에 #lightBox가 존재 하지 않는다. => 이벤트가 부착될 대상X
        $(this).fadeOut(400); //$("#lightBox")
        setTimeout(function(){
            $("#lightBox").remove();
        },400);
    });

    // $(document).on("click","대상",function(){})
    // $("body").on("click","대상",function(){})
    $("body").on("click","#lightBox",function(){ // body가 클릭이 됬을 때 그 시점에서 클릭 된 대상이 #lightBox를 통해 전달 됬는가를 확인 후 함수 실행
  //$("body").on("이벤트 종류","원하는 대상",function(){})
        $("#lightBox").fadeOut(400); //#lightBox에 사라지는 시간 초 정해주고, (0.4s, 400ms)
        setTimeout(function(){ // n ms 후에 딱 한번만 동작하는 함수
            $("#lightBox").remove(); // #lightBox 삭제
        },400); // n = 400 => 400ms => 0.4s
    });
    $("body").on("click","#lightBox img",function(e){ 
        // body 클릭 => 전달해준 대상이 #lightBox img가 맞는지 확인 후, 맞다면 함수 실행
        // 클릭 된 이벤트 자체를 e라는 인자로 전달
        e.stopPropagation();  //인자로 전달 된 a에게 이벤트 전달을 하지 않도록.
    });
    
    
    $("#linkList").on("click", "a", function (event) {
        event.preventDefault();
        alert("이 링크는 동작하지 않습니다!");
    });

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