const timeline = gsap.timeline({ duration: 1 })
timeline.from('.img', { x: '-300%', ease: 'bounce' })
        .from('.main-text', { x: '300%', ease: 'bounce'})
        .from('.all', { y: '-7000%', stagger: .5, ease: 'slow(0.5, 0.8, true)'})

TweenMax.to(".btn", 0.6, {
  scale:1.06,
  repeat:-1,
  yoyo: true,
  ease: Power0.easeNone,
});