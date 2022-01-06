$(function() {

    //intro 이미지 자동 변경

    const intro = gsap.timeline({
        repeat: -1,
    })
    intro.set('.intro_animation .img_wrap',{opacity:0})
    .fromTo('.im2',{opacity:1},{opacity:0,duration:1})
    .fromTo('.im3',{opacity:1},{opacity:0,duration:1})
    .fromTo('.im4',{opacity:1},{opacity:0,duration:1})
    .fromTo('.im1',{opacity:1},{opacity:0,duration:1})




    // into 스크롤 효과

    const scroll01 = gsap.timeline({
        scrollTrigger:{
            trigger:".specialized",
            start:"top 86%",
            markers:true,
            scrub:1
        }
    });
    scroll01.to('.spe4',{scale:5,y:230,x:-30},-0.1)
    scroll01.to('.spe3',{scale:5,y:120},-0.05)
    scroll01.to('.spe2',{scale:5,y:0,x:170},-0.02)
    scroll01.to('.specialized .inner',{y:250},-0.02)



    const scroll02 = gsap.timeline({
        scrollTrigger:{
            trigger:".specialized",
            start:"top top",
            end:"+=5000",
            markers:true,
            scrub:1,
            pin:true,
        }
    });

    scroll02.to('.specialized .inner',{delay:3,opacity:0})
    scroll02.to('.list_wrap',{opacity:1,"visibility": "visible"})
    scroll02.to('.list_wrap ul',{xPercent:-80,duration:5})




    

    


    // 슬라이드


 //   var controller = new ScrollMagic.Controller();
 //   var wipeAnimation = new TimelineMax()
 //   // animate to second
 //   .to(".selected_wrap li", 1, {z: -180} )
  //  .to(".selected_wrap li", 1, {x:"-25%"} )
  //  .to(".selected_wrap li", 1, {z: 0} )
  //  // animate to third
  //  .to(".selected_wrap li", 1, {z: -180, delay: 0.6} )
  //  .to(".selected_wrap li", 1, {x:"-50%"} )
  //  .to(".selected_wrap li", 1, {z: 0} )
   // // animate to forth
  //  .to(".selected_wrap li", 1, {z: -180, delay: 0.6} )
  //  .to(".selected_wrap li", 1, {x:"-75%"} )
  //  .to(".selected_wrap li", 1, {z: 0} )

  //  var scene = new ScrollMagic.Scene({
  //          triggerElement: ".selected_wrap",
  //          triggerHook: "onLeave",
  //          duration: "600%" //클 수록 천천히 덮어씀
  //  })

  //  .setPin(".selected_wrap")
   // .setTween(wipeAnimation)
  //  .addIndicators() 
  //  .addTo(controller);


    //슬라이드 p

    gsap.from(".selectedworks .sel",{
        scrollTrigger:{
            trigger:".selectedworks",
            start:"20% 50%",
            // markers:true,
            scrub:1
        },
        x:-500,   
    })

    gsap.from(".selectedworks .wor",{
        scrollTrigger:{
            trigger:".selectedworks",
            start:"20% 50%",
            // markers:true,
            scrub:1
        },
        x:500,   
    })


    //footer


    gsap.from("footer",{
        scrollTrigger:{
            Ypercent:300,
            trigger:".section",
            start:"80% 50%",
            //markers:true,
            scrub:1  
        },
        y:0,   
        backgroundColor:'#fff',
    })


    

})