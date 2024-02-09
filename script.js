let tl = gsap.timeline();

tl.from("#nav h3", {
    y: -50,
    opacity: 0,
    delay: 0.5,
    duration: 0.7,
    stagger: 0.5
})

tl.from(".main-content h1", {
    x: -500,
    opacity: 0,
    duration: 0.8,
    stagger: 0.5
})

tl.from("#image-section img", {
    x: 100,
    rotate: 45,
    opacity: 0,
    duration: 0.7,
    stagger: 0.5
})