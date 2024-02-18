let tl = gsap.timeline()

tl.from(".nav",{
    y: -50,
    scale: -1,
    delay: .2,
    duration: 1.5 
})
tl.from(".nav h1",{
    y: -50,
    duration: 1,
    opacity: 0
})
tl.from(".nav-part-2 h4",{
    x: -50, 
    duration: 1,
    opacity: 0,
    stagger: 0.2,
})
tl.from(".nav h3",{
    y: -50,
    duration: 1,
    opacity: 0
})
gsap.from(".left h1",{
    x: -100,
    stagger: .4,
    opacity: 0,
    duration: 1.5,
    delay: 2
})
gsap.from(".left-bottom",{
    x: -100,
    opacity: 0,
    duration: 1.5,
    delay: 2
})
gsap.from(".left-bottom h3",{
    x: -100,
    opacity: 0,
    duration: 1.5,
    stagger: .5,
    delay: 2
})
gsap.from(".right img",{
    // x: 65,
    scale: 0,
    opacity: 0,
    duration: 1.2,
    delay: 2
})

gsap.from(".ri-play-fill, .sec2-part1-top h3",{
    x: -100,
    opacity: 0,
    duration: 1.5,
    scrollTrigger:{
        trigger:".sec2-part1",
        scroller:"body",
        // scrub: true,
        // markers: true,
        start: "center bottom",
         
    }
})
gsap.from(".sec2-part1-bottom h2",{
    x: -100,
    opacity: 0,
    duration: 1.5,
    stagger: .8,
    delay: .6,
    scrollTrigger:{
        trigger:".sec2-part1",
        scroller:"body",
        // scrub: true,
        // markers: true,
        start: "center bottom",
         
    }
})
gsap.from(".sec2-part2",{
    y: 100,
    opacity: 0,
    duration: 1.5,
    delay: .6,
    scrollTrigger:{
        trigger:".sec2-part2",
        scroller:"body",
        // scrub: true,
        // markers: true,
        start: "center bottom",
         
    }
})
gsap.from(".sec2-part2 h3",{
    y: 100,
    opacity: 0,
    duration: 1.5,
    delay: .6,
    scrollTrigger:{
        trigger:".sec2-part2",
        scroller:"body",
        // scrub: true,
        // markers: true,
        start: "center bottom",
         
    }
})
gsap.from(".sec2-part3",{
    y: 100,
    opacity: 0,
    duration: 1.5,
    delay: 1,
    scrollTrigger:{
        trigger:".sec2-part3",
        scroller:"body",
        // scrub: true,
        // markers: true,
        start: "center bottom",
         
    }
})
gsap.from(".sec2-part3 h3",{
    y: 100,
    opacity: 0,
    duration: 1.5,
    delay: 1,
    scrollTrigger:{
        trigger:".sec2-part3",
        scroller:"body",
        // scrub: true,
        // markers: true,
        start: "center bottom",
         
    }
})
gsap.from(".sec2-part4",{
    y: 100,
    opacity: 0,
    duration: 1.5,
    delay: 1.4,
    scrollTrigger:{
        trigger:".sec2-part4",
        scroller:"body",
        // scrub: true,
        // markers: true,
        start: "center bottom",
         
    }
})
gsap.from(".sec2-part4 h4, .sec2-part4 h2",{
    y: 100,
    opacity: 0,
    duration: 1.5,
    stagger: 1, 
    delay: 1.4,
    scrollTrigger:{
        trigger:".sec2-part4",
        scroller:"body",
        // scrub: true,
        // markers: true,
        start: "center bottom",
         
    }
})
