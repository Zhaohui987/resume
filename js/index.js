/**
 * Created by Administrator on 2016/10/24.
 */
$(function(){

    /*fullpage插件*/
    $("#fullpage").fullpage({
        verticalCentered:false,
        scrollingSpeed: 400,
        resize: true,
        css3: true,
        //sectionsColor:['green','orange','grey','red'],
        anchors:['page1','page2','page3','page4'],
        fixedElements:'#header',
        menu: '#nav',
        navigation:true,
        navigationPosition:'right',
        navigationTooltips:['info','work','hobby','about me'],
        showActiveTooltip:true,
        afterRender: function(){
            $(".info1").animate({marginTop:'1.25rem'},600,function(){
                $(".info2").animate({marginTop:'1.25rem'},600,function(){
                    $(".info3").animate({marginTop:'1.25rem'},600,function(){
                        $(".info4").animate({marginTop:'1.25rem'},600);
                    });
                });
            });



        },
        afterLoad:function(link,index) {
            switch (index) {
                case 1:
                    break;
                case 2:
                    move(".demo-title h1").set("opacity","1").end();
                    move(".demo-title h1").set("font-size","2.5rem").end(function(){
                        move(".demo-title h1").set("font-size","2.25rem").end();
                    });
                    var i=-1;
                    $(".demo-box").each(function(){
                        var $this=$(this);
                        if(!$this.hasClass("b_to_t")){
                            i++;
                            setTimeout(function(){
                                $this.addClass("b_to_t");
                            },200*i);
                        }
                })
                    break;
                case 3:
                    move(".h-img").set("left","60%").end();
                    move(".h-img").set("opacity","1").end();
                    $(".skill-cont>div").addClass("skill-cont-change");

                   /* var j=-1;
                    $(".skill-box").each(function() {
                        var $this = $(this);
                        if (!$this.hasClass("b_to_t")) {
                            j++;
                            setTimeout(function () {
                                $this.addClass("b_to_t");
                            }, 200*j);
                        }
                    })*/
                    break;
                case 4:
                    move(".section4 h1").rotate(360).end(function () {
                        move(" .cont1").set('margin-left','0%').end(function(){
                            move(" .cont2").set('margin-left','0%').end(function(){
                                move(".cont3").set('margin-left','0').end(function(){
                                    move(".cont4").set('margin-left','0%').end();
                                });
                            });
                        });
                    });
                    break;
                default:
                    break;
            }
        },

        onLeave:function(link,index){
                if(index==1){

                }
            if(index==2){
                move(".demo-title h1").set("opacity","0").end();
            }
            if(index==3){
                move(".h-img").set("left","30%").end();
                move(".h-img").set("opacity","0").end();
            }
            if(index==4){

            }
        }
    });

    /*顶部左侧提示语*/
    $(".logo").hover(function(){
        var time = new Date().getHours();
        if(time >5&&time <12){
            $("#tips_p").text("又是一个元气满满的上午").animate({"opacity":.6},500)
        }else if(time >=12&&time <14){
            $("#tips_p").text("中午要养足精神啊").animate({"opacity":.6},500)
        }else if(time >=14&&time <19){
            $("#tips_p").text("来份下午茶吗").animate({"opacity":.6},500)
        }else if (time >= 19 && time < 24){
            $("#tips_p").text("忙碌了一天，辛苦啦").animate({"opacity":.6},500)
        }else{
            $("#tips_p").text("深夜了，请注意休息").animate({"opacity":.6},500)
        }
    },function(){
            $("#tips_p").animate({"opacity":0},500)
        }
    );

    /*头像切换*/
    $("#section1-photos").hover(
        function () {
        $(".photo2").fadeTo(800,0)
    },
        function () {
        $(".photo2").stop(true,false).fadeTo(800,1)
    });



} )

