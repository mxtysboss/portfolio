const card = document.getElementById("fireex-site");
const img = card.querySelector("img");

const video = document.createElement("video");
video.src = "./fireex-site.mp4";
video.muted = true;
video.loop = true;
video.autoplay = true;
video.style.width = "100%";
video.style.height = "210px";
video.style.objectFit = "cover";
video.style.display = "block";

card.addEventListener("mouseenter", () => {
  if (!card.contains(video)) {
    card.replaceChild(video, img);
    video.play();
  }
});

card.addEventListener("mouseleave", () => {
  if (card.contains(video)) {
    card.replaceChild(img, video);
    video.pause();
    video.currentTime = 0;
  }
});

const exploreButton = document.getElementById("explore-button");
exploreButton.addEventListener("click", () => {
  const target = document.querySelector(".portfolio-projects");
  if (target) {
    gsap.to(window, {
      duration: 1.5,
      scrollTo: { y: target, offsetY: 70 },
      ease: "power2.out",
    });
  }
});

window.addEventListener("load", () => {
  const loader = document.getElementById("loader");

  setTimeout(() => {
    loader.style.opacity = "0";

    setTimeout(() => {
      loader.style.display = "none";
    }, 300);
  }, 300);
});
