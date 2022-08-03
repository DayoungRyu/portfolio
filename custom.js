
$(function() {

    //con2 start

    //탭메뉴

    $('.tab_nav .tab_btn').click(function(e){
        e.preventDefault();

        idx = $(this).index(); //값가져올때


        $('.tab_nav .tab_btn').removeClass('active');
        $(this).addClass('active');

        $('.tab_con .con').removeClass('active').eq(idx).addClass('active') //값 선택할때
        //tab_con 중 con 3개선택 active다 빼기  active 준다.
    })

    //탭메뉴 클릭시 탑으로 이동

    $('.tab_btn,footer .scroll_top').click(function(e){
        e.preventDefault();
        $('html,body').animate({scrollTop:0},"slow");
        return false;
    })

    //intro 이미지 자동 변경

    const intro = gsap.timeline({
        repeat: -1,
    })
    intro.set('.intro_animation .img_wrap',{opacity:0})
    .fromTo('.im2',{opacity:1},{opacity:0,duration:2})
    .fromTo('.im3',{opacity:1},{opacity:0,duration:2})
    .fromTo('.im4',{opacity:1},{opacity:0,duration:2})
    .fromTo('.im1',{opacity:1},{opacity:0,duration:2})


    // into 스크롤 효과

    const scroll01 = gsap.timeline({
        scrollTrigger:{
            trigger:".specialized",
            start:"top 86%",
            //  markers:true,
            scrub:1
        }
    });

    scroll01.to('.spe1',{y:-100,opacity:0})
    scroll01.to('.spe4',{scale:5,y:230,x:-30},-0.1)
    scroll01.to('.spe3',{scale:5,y:120},-0.05)
    scroll01.to('.spe2',{scale:5,y:0,x:170},-0.02)
    scroll01.to('.specialized .inner',{y:250},-0.02)



    const scroll02 = gsap.timeline({
        scrollTrigger:{
            trigger:".specialized",
            start:"top top",
            end:"+=5000",
            //  markers:true,
            scrub:1,
            pin:true,
        }
    });


    scroll02.to('.specialized .inner',{delay:3,opacity:0})
    scroll02.to('.list_wrap',{opacity:1,"visibility": "visible"})
    scroll02.to('.list_wrap ul',{xPercent:-80,duration:5})


    //슬라이드 page 이동

    gsap.from(".selectedworks .sel",{
        scrollTrigger:{
            trigger:".selectedworks",
            start:"1500px 50%",
            // markers:true,
            scrub:1
        },
        x:-500,   
    })

    gsap.from(".selectedworks .wor",{
        scrollTrigger:{
            trigger:".selectedworks",
            start:"1500px 50%",
             // markers:true,
            scrub:1
        },
        x:500,   
    })

    //마우스

    $(document).mousemove(function(e){
    
        gsap.to('.mouse-pointer',{
          x:e.clientX-40,
          y:e.clientY-10,
        })
      });

      $('a,footer .scroll_top').mouseover(function(){
        $('.mouse-pointer').addClass('show');
      })
    
      $('a,footer .scroll_top').mouseleave(function(){
        $('.mouse-pointer').removeClass('show');
      })


    //footer

    //con1

    //con1 title 아래로 가는 효과


    gsap.to(".con1 .title h2",{
        scrollTrigger:{
            trigger:".con1",
            start:"10% 50%",
            end:"35% 20%",
           // markers:true,
            scrub:1,
        },
        y:1250, 
        opacity:0  
    })

    //퍼블리셔 설명

    gsap.from(".con1 .introdu .publisher .publisher_wrap1",{
        scrollTrigger:{
             trigger:".con1",
             start:"35% 50%",
             end:"65% 50%",
         //    markers:true,
             scrub:1,
         },
         x:-150, 
         opacity:0  
     })
 
     gsap.from(".con1 .introdu .publisher .publisher_wrap2",{
         scrollTrigger:{
             trigger:".con1",
             start:"55% 50%",
             end:"65% 50%",
           //  markers:true,
             scrub:1,
         },
         x:150, 
         opacity:0  
     })

     gsap.from(".con1 .introdu .resume",{
        scrollTrigger:{
            trigger:".con1",
            start:"65% 50%",
            end:"75% 50%",
          //  markers:true,
            scrub:1,
        },
        x:-250, 
        opacity:0  
    })


    //con3

    //con3 title 아래로 가는 효과

    gsap.to(".con3 .title h2",{
        scrollTrigger:{
            trigger:".con",
            start:"8% 50%",
            end:"40% 50%",
          //  markers:true,
            scrub:1,
        },
        y:1250, 
        opacity:0 
    })

    //con3 멘트

    gsap.from(".con3 .introdu .intro_wrap",{
        scrollTrigger:{
            trigger:".con",
            start:"42% 50%",
            end:"50% 50%",
          //  markers:true,
            scrub:1
        },
        y:-500,   
    })


    //con3 works 


});

    //원형 그래프

    /* 발견되면 활성화시키는 라이브러리 시작 */
    function ActiveOnVisible__init() {
        $(window).resize(ActiveOnVisible__initOffset);
        ActiveOnVisible__initOffset();

        $(window).scroll(ActiveOnVisible__checkAndActive);
        ActiveOnVisible__checkAndActive();
    }

    function ActiveOnVisible__initOffset() {
        $('.active-on-visible').each(function(index, node) {
            var $node = $(node);

            var offsetTop = $node.offset().top;
            $node.attr('data-active-on-visible-offsetTop', offsetTop);

            if ( !$node.attr('data-active-on-visible-diff-y') ) {
                $node.attr('data-active-on-visible-diff-y', '0');
            }

            if ( !$node.attr('data-active-on-visible-delay') ) {
                $node.attr('data-active-on-visible-delay', '0');
            }
        });

        ActiveOnVisible__checkAndActive();
    }

    function ActiveOnVisible__checkAndActive() { 
        $('.active-on-visible:not(.actived)').each(function(index, node) {
            var $node = $(node);

            var offsetTop = $node.attr('data-active-on-visible-offsetTop') * 1;
            var diffY = parseInt($node.attr('data-active-on-visible-diff-y'));
            var delay = parseInt($node.attr('data-active-on-visible-delay'));

            var callbackFuncName = $node.attr('data-active-on-visible-callback-func-name');

            if ( $(window).scrollTop() + $(window).height() + diffY > offsetTop ) {
                $node.addClass('actived');

                setTimeout(function() {
                    $node.addClass('active');
                    if ( window[callbackFuncName] ) {
                        window[callbackFuncName]($node);
                    }
                }, delay);
            }
        });
    }

    $(function() {
        ActiveOnVisible__init();
    })
    /* 발견되면 활성화시키는 라이브러리 끝 */


    function Circle__run() {
        $(".second.circle").each(function(index, node) {
            var perNum = $(node).attr('circleProgress');
            
            $(this).circleProgress({
                value: perNum / 100,
                startAngle: 300,
                thickness: 3,
                fill: {
                    gradient: ["#8780ff", "#ff9998"],
                    gradientAngle: Math.PI / 2
                },
                animation: {
                    duration: 2200,
                    easing: "swing"
                },
                lineCap: "butt",
                reverse: true
        
            }).on('circle-animation-progress', function (event, progress) {
                $(this).find('.circle-percent').html(Math.round(perNum * progress) + '<i>%</i>');
            });
        });
    }   
