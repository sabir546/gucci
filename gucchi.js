gsap.to("nav svg",{
    scale:.1,
    marginTop:"-130px",

    // position:sticky,

    scrollTrigger:{
        scroller: "body",
        trigger:" #page1 nav ",
        // markers:true,
        start:"top -5%",
        end:"top 0%",
        scrub:2
    }
})
 
gsap.to("nav h5",{
   opacity:1,
    scrollTrigger:{
        scroller: "body",
        trigger:" nav h5 ",
        // markers:true,
        start:"top -5%",
        end:"top -2%",
        scrub:1
    }
})
gsap.to("#page1 #page1-img",{
    y:105,

    scrollTrigger:{
        scroller: "body",
        trigger:"#page1 ",
        // markers:true,
        start:"top -5%",
        end:"top 0%",
    

        scrub:2,
    }
})