const lenis = new Lenis({
    duration: 1.7,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);


// horizontal

const hsection1 = document.getElementById('horizontal');
const hitems = gsap.utils.toArray('#h-item');

gsap.to(hitems, {
    xPercent: -100 * (hitems.length - 1),
    ease: "sine.out",
    scrollTrigger: {
        trigger: hsection1,
        pin: true,
        scrub:3,
        snap: 1 / (hitems.length - 1),
        end: "+=" + hsection1.offsetWidth
    }
})
