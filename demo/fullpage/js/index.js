/**
 * Created by Administrator on 2016/11/2.
 */
$(document).ready(function(){
    $("#fullpage").fullpage({

        // 配置锚点链接，不应该和autoS从rolling，scrollBar一起使用(使用类active，可以默认打开为该类页面)

        anchors: ['page01','page02','page03','page04'],


        afterLoad:function(link,index){
            switch(index){
                case 1:
                    move(".section1 h1").scale(1.2).end();
                    move('.section1 p').set('margin-top','50px').end();
                    break;
                case 2:
                    move('.section2 h1').set('margin-right','-495px').end(function(){
                        move('.section2 h1').scale(1.1).end();
                    });
                    move('.section2-a1').set('margin-left','300px').end();
                    move('.section2-a2').set('margin-left','235px').end();
                    move('.section2 p').set('margin-left','470px').end();
                    break;
                case 3:
                    move('.section3 h1').scale(0.5).end();
                    move('.section3-a1').scale(0.5).end();
                    move('.section3 p').scale(0.5).end();
                    break;
                case 4:
                    move('.section4 .watch01').rotate(360).end(function(){
                        move('.section4 .watch02').rotate(360).end(function(){
                            move('.section4 .watch03').rotate(360).end(function(){
                                move('.p1').scale(1.2).end(function(){
                                    move('.p2').scale(1.2).end(function(){
                                        move('.p3').scale(1.2).end();
                                    });
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
            switch(index){
                case 1:
                    move(".section1 h1").scale(1).end();
                    move('.section1 p').set('margin-top','-50px').end();
                    break;
                case 2:
                    move('.section2 h1').set('margin-right','495px').end()
                    move('.section2 h1').scale(1).end();
                    move('.section2-a1').set('margin-left','75%').end();
                    move('.section2-a2').set('margin-left','75%').end();
                    break;
                case 3:
                    move('.section3 h1').scale(1).end();
                    move('.section3-a1').scale(1).end();
                    move('.section3 p').scale(1).end();
                    break;
                case 4:
                    move('.section4 .watch01').rotate(-360).end();
                    move('.section4 .watch02').rotate(-360).end();
                    move('.section4 .watch03').rotate(-360).end();
                    move('.p1').scale(1).end();
                    move('.p2').scale(1).end();
                    move('.p3').scale(1).end();
                    break;
                default:
                    break;
            }
        },

        afterRender:function(link,index){
            switch(index){
                case 1:
                    break;
                case 2:
                    break;
                case 3:
                    break;
                case 4:
                    break;
                default:
                    break;
            }
        },
    });
});