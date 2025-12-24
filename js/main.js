gsap.registerPlugin(ScrollTrigger);

// ============================================
// hero-title-text 텍스트 효과 (스크롤 트리거)
// ============================================
const heroTitleLineWrappers = document.querySelectorAll('.hero-title-line-wrapper');

// 미디어 쿼리 감지
const mediaQuery1440 = window.matchMedia('(max-width: 1440px)');
const mediaQuery1024 = window.matchMedia('(max-width: 1024px)');
const mediaQuery768 = window.matchMedia('(max-width: 768px)');

// 기본 애니메이션 (1440px 초과)
let defaultAnimations = [];

// 1440px 구간 애니메이션
let animations1440 = [];

// 1024px 구간 애니메이션
let animations1024 = [];

// 768px 구간 애니메이션
let animations768 = [];

function initAnimations() {
  // 기존 애니메이션 제거
  defaultAnimations.forEach(anim => {
    if (anim && anim.scrollTrigger) {
      anim.scrollTrigger.kill();
    }
    if (anim) anim.kill();
  });
  animations1440.forEach(anim => {
    if (anim && anim.scrollTrigger) {
      anim.scrollTrigger.kill();
    }
    if (anim) anim.kill();
  });
  animations1024.forEach(anim => {
    if (anim && anim.scrollTrigger) {
      anim.scrollTrigger.kill();
    }
    if (anim) anim.kill();
  });
  animations768.forEach(anim => {
    if (anim && anim.scrollTrigger) {
      anim.scrollTrigger.kill();
    }
    if (anim) anim.kill();
  });
  defaultAnimations = [];
  animations1440 = [];
  animations1024 = [];
  animations768 = [];

  heroTitleLineWrappers.forEach(wrapper => {
    if (mediaQuery768.matches) {
      // 768px 구간
      const anim = gsap.to(wrapper, {
        backgroundSize: '100%',
        ease: 'none',
        scrollTrigger: {
          trigger: wrapper,
          start: 'top 9%',
          end: 'center',
          scrub: true,
          //markers: true,
        },
      });
      animations768.push(anim);
    } else if (mediaQuery1024.matches) {
      // 1024px 구간
      const anim = gsap.to(wrapper, {
        backgroundSize: '100%',
        ease: 'none',
        scrollTrigger: {
          trigger: wrapper,
          start: 'top 10%',
          end: 'center',
          scrub: true,
         markers: true,
        },
      });
      animations1024.push(anim);
    } else if (mediaQuery1440.matches) {
      // 1440px 구간
      const anim = gsap.to(wrapper, {
        backgroundSize: '100%',
        ease: 'none',
        scrollTrigger: {
          trigger: wrapper,
          start: 'top 13%',
          end: '100% 0%',
          scrub: true,
          //markers: true,
        },
      });
      animations1440.push(anim);
    } else {
      // 기본 (1440px 초과)
      const anim = gsap.to(wrapper, {
        backgroundSize: '100%',
        ease: 'none',
        scrollTrigger: {
          trigger: wrapper,
          start: '0 22%',
          end: 'center -1%',
          scrub: true,
          //markers: true,
        },
      });
      defaultAnimations.push(anim);
    }
  });

  ScrollTrigger.refresh();
}

// 초기 실행
initAnimations();

// 미디어 쿼리 변경 감지
mediaQuery1440.addEventListener('change', initAnimations);
mediaQuery1024.addEventListener('change', initAnimations);
mediaQuery768.addEventListener('change', initAnimations);


// line-svg animation
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

