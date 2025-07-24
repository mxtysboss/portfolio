gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

ScrollSmoother.create({
  wrapper: "#smooth-wrapper",
  content: "#smooth-content",
  smooth: 1.5,
  effects: true,
});

gsap.registerPlugin(ScrollTrigger);

const cards = document.querySelectorAll(".skill-card");

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.matchMedia({
  "(min-width: 601px)": function () {
    gsap.set(cards, { opacity: 0, y: 50 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".skills",
        start: "top 10%",
        end: "+=1000",
        scrub: true,
        pin: true,
        markers: false,
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
  },

  "(max-width: 600px)": function () {
    gsap.set(cards, { opacity: 0, y: 100 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".skills h2",
        start: "top 50%",
        end: "+=100",
        pin: ".skills",
        scrub: true,
        markers: false,
      },
    });

    cards.forEach((card, index) => {
      tl.to(
        card,
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: "power2.out",
        },
        "+=0.25"
      );
    });
  },
});

gsap.from(".about-me img", {
  scrollTrigger: {
    trigger: ".about-me img",
    start: "top 80%",
    toggleActions: "play none none reverse",
  },
  x: -200,
  opacity: 0,
  duration: 1,
  ease: "power2.out",
});

gsap.from(".content", {
  scrollTrigger: {
    trigger: ".content",
    start: "top 80%",
    toggleActions: "play none none reverse",
  },
  x: 200,
  opacity: 0,
  duration: 1,
  ease: "power2.out",
});

window.addEventListener("load", () => {
  gsap.delayedCall(0.3, () => {
    const tl = gsap.timeline();

    tl.from(".hero", {
      opacity: 0,
      duration: 0.4,
      ease: "power1.out",
    })
      .from(
        ".hero h1",
        {
          y: 50,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.2"
      )
      .from(
        ".hero h2",
        {
          y: 50,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.6"
      )
      .from(
        "#explore-button",
        {
          scale: 0.8,
          opacity: 0,
          duration: 0.6,
          ease: "back.out(1.7)",
        },
        "-=0.5"
      );
  });
});
