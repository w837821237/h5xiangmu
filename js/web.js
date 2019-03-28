/*
* @Author: Marte
* @Date:   2019-03-01 23:09:23
* @Last Modified by:   Marte
* @Last Modified time: 2019-03-03 09:12:51
*/

$(function(){
    var k = $(window).height() - 250;
    var d = $(window).height();
    var flag =false;
    console.log(k);
    $("#fullpage").fullpage({
        navigation:true,
        scrollingSpeed: 1200,
        keyboardScrolling:true,
        afterLoad: function(link, index){
             if (index===2&&flag==false) {
                  $(".search").show().animate({"right":370},1500,function(){

                           $(".search-word").animate({"opacity":1},500,function(){
                                  $(".search").hide();
                                  $(".searchAll").show().animate({"height":30,"right":250,"bottom":452,"width":148},500);
                                  $(".goods-sf").show().animate({"width":441},500,function(){
                                        flag = true;
                                  });
                                  $(".words-02").animate({"opacity":1},500,)
                           })

                  })
             };
        },
        onLeave: function(index, nextIndex, direction){
            if (index==2&&nextIndex==3&&flag==true) {
                $(".computer-sf").show().animate({"bottom":-k,"width":207,"left":260},2000,function(){
                    $(".box-btn3").animate({"opacity":1},1000,function(){
                         $(".box-btn4").animate({"opacity":1},500);
                    })
                });
                $(".cover").show();
            };
           if (index==3&&nextIndex==4) {
             $(".computer-sf").hide();
             $(".xsf").show().animate({"bottom":-(k+50),"left":260},2000, function(){
                $(this).hide();
                $(".car-xsf").show();
                $(".gwc").animate({"left":1800},3000,"easeInElastic",function(){
                    $(".t1-1").show();
                    $(".t1-2, .img2").animate({"opacity":1},1000);
                });

             });
           };
           if (index==4&&nextIndex==5) {
               $(".img-55").animate({"bottom":0},2000,function(){
                  $(".img-53").show().animate({"bottom":70},1500,function(){
                    $(".img-52").animate({"bottom":380},1000)
                  })
               })
           };
           if (index==5&&nextIndex==6){
               $(".img-53").animate({"bottom":-(d-500),"left":"40%","width":65},1500,function(){
                      $(".img-53").hide();
               })
               $(".box-6").animate({"left":490},1500,function(){
                     $(".box-6").animate({"bottom":40},500,function(){
                        $(".box-6").hide;
                        $(".section6").animate({"backgroundPosition" : "100%"},3000);
                     })
               })
           }

     }
    });
})