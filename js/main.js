gsap.registerPlugin(ScrollTrigger);

const heroSection = document.querySelector(".desktop-section-hero");
const lineSvgs = heroSection.querySelectorAll(".line-svg");

lineSvgs.forEach((svg) => {
  const paths = svg.querySelectorAll("path");
  paths.forEach((path) => {
    const length = path.getTotalLength();
    path.style.setProperty("--path-length", length);
    path.style.strokeDasharray = length;
    path.style.strokeDashoffset = length;
  });
});

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: heroSection,
    start: "top 80%",
    end: "bottom 20%",
    scrub: true,
    onUpdate: (self) => {
      if (self.progress > 0) {
        heroSection.classList.add("motion");
      } else {
        heroSection.classList.remove("motion");
      }
    }
  }
});

