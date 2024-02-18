
let tl = gsap.timeline()

tl.from(".logo img, .nav_part-2 h3, .nav_part-3 h3, .nav_part-3 button",{
     y: -30,
     duration: 1.5,
    //  delay: 0.5, 
     opacity: 0,
     stagger: 0.1,
})
tl.from(".body h1", {
    y: 30,
    opacity: 0,
    stagger: 0.2,
    duration: 1.5,
})
tl.from(".img1",{
    x: -50,
    duration:  1,
    opacity: 0,
})
tl.from(".img2",{
    x: 50,
    duration:  1,
    opacity: 0,
})
tl.from(".body>h3",{
    scale: 0,
    opacity: 0
})
tl.to(".body>h3",{
    y: 20,
    repeat: -1,
    duration: 1,
    yoyo: true,
})