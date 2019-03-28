
$(function(){
    setTimeout(function(){
       $(".section").addClass("comein");
    },200);
    $("#fullpage").fullpage({
    navigation: true,
    loopBottom: true,
    onLeave: function(index, nextIndex, direction){
         if (nextIndex!==1) {
            $("#bg").addClass("rotate");
         }else {
            $("#bg").removeClass('rotate');
         }
         if (nextIndex==2) {
            $(".p2").css("transform","translate(-50%,-50%) translateZ(0) scale(1)");
         }else{
              $(".p2").css("transform","translate(-50%,-50%) translateZ(2000px) scale(1)");
         }
         if (nextIndex==3) {
            $(".p3").css("transform","rotateX(30deg) translateZ(-50px)");
            $(".title3").css("transform","rotateX(0deg) translateZ(0px)");
         };
    }
})
})
