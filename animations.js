gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

ScrollSmoother.create({
  wrapper: "#smooth-wrapper",
  content: "#smooth-content",
  smooth: 1.5, // im wyższa wartość, tym bardziej "miękkie"
  effects: true, // pozwala np. na parallax
});

gsap.registerPlugin(ScrollTrigger);

const cards = document.querySelectorAll(".skill-card");

gsap.set(cards, { opacity: 0, y: 50 });

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".skills",
    start: "top center",
    end: "+=1000",
    scrub: true,
    pin: true,
    markers: false, // Ustaw na true, jeśli chcesz widzieć markery debugowania
  },
});

cards.forEach((card, index) => {
  tl.to(
    card,
    {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: "power2.out",
    },
    "+=0.3"
  );
});
