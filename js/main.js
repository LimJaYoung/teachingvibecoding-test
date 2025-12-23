gsap.registerPlugin(ScrollTrigger);

const heroSection = document.querySelector(".desktop-section-hero");
const line1Path = document.querySelector(".line-svg.line-1 path");
const line2Path = document.querySelector(".line-svg.line-2 path");

const length1 = line1Path.getTotalLength();
const length2 = line2Path.getTotalLength();

line1Path.style.strokeDasharray = length1;
line1Path.style.strokeDashoffset = length1;

line2Path.style.strokeDasharray = length2;
line2Path.style.strokeDashoffset = length2;

gsap.timeline({
  scrollTrigger: {
    trigger: ".desktop-section-hero",
    start: "80% 80%",
    end: "bottom 20%",
    scrub: 1,
    //markers: true
  }
})
.to(line1Path, {strokeDashoffset: 0,duration: 1,ease: "none"}, 0)
.to(line2Path, { strokeDashoffset: 0,duration: 1,ease: "none"}, 0.5);

// ============================================
// about section line-3 ~ line-6 animation
// ============================================
const aboutSection = document.querySelector(".desktop-section-about");
const line3Path = document.querySelector(".line-svg.line-3 path");
const line4Path = document.querySelector(".line-svg.line-4 path");
const line5Path = document.querySelector(".line-svg.line-5 path");
const line6Path = document.querySelector(".line-svg.line-6 path");

const length3 = line3Path.getTotalLength();
const length4 = line4Path.getTotalLength();
const length5 = line5Path.getTotalLength();
const length6 = line6Path.getTotalLength();

line3Path.style.strokeDasharray = length3;
line3Path.style.strokeDashoffset = length3;

line4Path.style.strokeDasharray = length4;
line4Path.style.strokeDashoffset = length4;

line5Path.style.strokeDasharray = length5;
line5Path.style.strokeDashoffset = length5;

line6Path.style.strokeDasharray = length6;
line6Path.style.strokeDashoffset = length6;

gsap.timeline({
  scrollTrigger: {
    trigger: ".desktop-section-about",
    start: "50% 80%",
    end: "bottom 20%",
    scrub: 1,
    //markers: true
  }
})
.to(line3Path, {
  strokeDashoffset: 0,
  duration: 1,
  ease: "none"
}, 0)
.to(line4Path, {
  strokeDashoffset: 0,
  duration: 1,
  ease: "none"
}, 0.3)
.to(line5Path, {
  strokeDashoffset: 0,
  duration: 1,
  ease: "none"
}, 0.6)
.to(line6Path, {
  strokeDashoffset: 0,
  duration: 1,
  ease: "none"
}, 1.3);

// ============================================
// project section line-7 animation
// ============================================
const projectSection = document.querySelector(".desktop-section-project");
const line7Path = document.querySelector(".line-svg.line-7 path");

const length7 = line7Path.getTotalLength();

line7Path.style.strokeDasharray = length7;
line7Path.style.strokeDashoffset = length7;

gsap.timeline({
  scrollTrigger: {
    trigger: ".desktop-section-project",
    start: "80% 80%",
    end: "bottom 50%",
    scrub: 1,
    //markers: true
  }
})
.to(line7Path, {
  strokeDashoffset: 0,
  duration: 1,
  ease: "none"
}, 0);

