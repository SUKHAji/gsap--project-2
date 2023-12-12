let tl = gsap.timeline();

tl.from("nav", {
  opacity: 0,
  stagger: 0.5,
  duration: 1,
  x: 100,
});

tl.from(".con1 ,.con2 h3 ,.con3 ", {
  y: -100,
  opacity: 0,
  stagger: 0.3,
  duration: 0.8,
});

tl.from(".hero h2", {
  x: -100,
  duration: 1,
  stagger: 0.5,
  opacity: 0,
});

tl.from(".page-1 img", {
  opacity: 0,
  scale: 2,
});

gsap.from(".box", {
  scale: 0,
  duration: 1,
  stagger: 0.5,
  opacity: 0,
  scrollTrigger: {
    trigger: ".box",
    scroller: "body",
    // markers: true,
    start: "top 70%",
  },
});
