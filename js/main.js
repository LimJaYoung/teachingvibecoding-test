gsap.registerPlugin(ScrollTrigger);

// ============================================
//01. hero-title-text 텍스트 효과 (스크롤 트리거)
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

// ============================================
//02. SVG 라인 그리기 애니메이션
//    - hero 섹션: line-1, line-2
//    - about 섹션: line-3, line-4, line-5, line-6
//    - project 섹션: line-7
// ============================================

// hero 섹션 SVG 라인 (line-1, line-2)
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

// about 섹션 SVG 라인 (line-3, line-4, line-5, line-6)
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

// project 섹션 SVG 라인 (line-7)
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

// ============================================
//03. about 섹션 요소 순차 슬라이드 업 애니메이션
//    (.section-deco-title, .paper-airplane, .sub-title, .sub-text, .edu-title-text, .edu-text)
// ============================================
gsap.timeline({
  scrollTrigger: {
    trigger: '.desktop-section-about',
    start: 'top bottom',
    end: 'bottom top',
    markers: true,
    scrub: 1,
  }
})
.fromTo('.desktop-section-about .section-deco-title', { y:120 }, { y:0, ease:'none', duration:0.2 }, 0)
.fromTo('.desktop-section-about .paper-airplane', { y:120 }, { y:0, ease:'none', duration:0.2 }, 0.1)
.fromTo('.desktop-section-about .sub-title', { y:120 }, { y:0, ease:'none', duration:0.5 }, 0.2)
.fromTo('.desktop-section-about .sub-text', { y:120 }, { y:0, ease:'none', duration:0.5 }, 0.3)
.fromTo('.desktop-section-about .edu-title-text', { y:120 }, { y:0, ease:'none', duration:0.5 }, 0.4)
.fromTo('.desktop-section-about .edu-text', { y:120 }, { y:0, ease:'none', duration:0.5 }, 0.5);

// ============================================
//03-2. project 섹션 요소 순차 슬라이드 업 애니메이션
//    (.section-deco-title, .section-title-text, .sub-title-text, .sub-text)
// ============================================
gsap.timeline({
  scrollTrigger: {
    trigger: '.desktop-section-project',
    start: 'top bottom',
    end: 'bottom top',
    markers: true,
    scrub: 1,
  }
})
.fromTo('.desktop-section-project .section-deco-title', { y:120 }, { y:0, ease:'none', duration:0.2 }, 0)
.fromTo('.desktop-section-project .section-title-text', { y:120 }, { y:0, ease:'none', duration:0.2 }, 0.1)
.fromTo('.desktop-section-project .sub-title-text', { y:120 }, { y:0, ease:'none', duration:0.5 }, 0.2)
.fromTo('.desktop-section-project .sub-text', { y:120 }, { y:0, ease:'none', duration:0.5 }, 0.3);

// ============================================
//03-3. contact 섹션 요소 순차 슬라이드 업 애니메이션
//    (.section-deco-title, .section-title-text, .sub-title-text, .sub-text, .contact-tel)
// ============================================
gsap.timeline({
  scrollTrigger: {
    trigger: '.desktop-section-contact',
    start: 'top bottom',
    end: 'bottom top',
    markers: true,
    scrub: 1,
  }
})
.fromTo('.desktop-section-contact .section-deco-title', { y:120 }, { y:0, ease:'none', duration:0.2 }, 0)
.fromTo('.desktop-section-contact .section-title-text', { y:120 }, { y:0, ease:'none', duration:0.2 }, 0.1)
.fromTo('.desktop-section-contact .sub-title-text', { y:120 }, { y:0, ease:'none', duration:0.5 }, 0.2)
.fromTo('.desktop-section-contact .sub-text', { y:120 }, { y:0, ease:'none', duration:0.5 }, 0.3)
.fromTo('.desktop-section-contact .contact-tel', { y:120 }, { y:0, ease:'none', duration:0.5 }, 0.4);

// ============================================
//04. skill 섹션 요소 순차 슬라이드 업 애니메이션
//    (.skill-icon, .skill-text)
// ============================================

// 1650px 이하에서 skill 요소의 left 값 조정
const mediaQuery1650 = window.matchMedia('(max-width: 1650px)');

function adjustSkillPositions() {
  if (mediaQuery1650.matches) {
    // skill-icon 위치 조정 (% 단위)
    const skillIcons = {
      '.skill-icon-1': '12.5%',
      '.skill-icon-2': '81.5%',
      '.skill-icon-3': '18.7%',
      '.skill-icon-4': '79.9%',
      '.skill-icon-5': '12.6%'
    };

    Object.keys(skillIcons).forEach(selector => {
      const element = document.querySelector(`.desktop-section-skill ${selector}`);
      if (element) {
        element.style.left = skillIcons[selector];
      }
    });

    // skill-text 위치 조정 (중앙 정렬)
    const skillTexts = {
      '.skill-text-1': 'rotate(0deg)',
      '.skill-text-2': 'rotate(4deg)',
      '.skill-text-3': 'rotate(-2deg)',
      '.skill-text-4': 'rotate(4deg)',
      '.skill-text-5': 'rotate(357deg)',
      '.skill-text-6': 'rotate(3deg)',
      '.skill-text-7': 'rotate(-3deg)'
    };

    Object.keys(skillTexts).forEach(selector => {
      const element = document.querySelector(`.desktop-section-skill ${selector}`);
      if (element) {
        element.style.left = '50%';
        element.style.transform = `translateX(-50%) ${skillTexts[selector]}`;
      }
    });
  }
}

// 초기 실행
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', adjustSkillPositions);
} else {
  adjustSkillPositions();
}

// 리사이즈 및 미디어 쿼리 변경 감지
window.addEventListener('resize', adjustSkillPositions);
mediaQuery1650.addEventListener('change', adjustSkillPositions);

gsap.timeline({
  scrollTrigger: {
    trigger: '.desktop-section-skill',
    start: 'top bottom',
    end: 'bottom top',
    markers: true,
    scrub: 1,
  }
})
.fromTo('.desktop-section-skill .skill-icon-1', { y:70 }, { y:0, ease:'elastic', duration:0.2 }, 0)
.fromTo('.desktop-section-skill .skill-icon-2', { y:70 }, { y:0, ease:'elastic', duration:0.2 }, 0.02)
.fromTo('.desktop-section-skill .skill-icon-3', { y:70 }, { y:0, ease:'elastic', duration:0.2 }, 0.04)
.fromTo('.desktop-section-skill .skill-icon-4', { y:70 }, { y:0, ease:'elastic', duration:0.2 }, 0.06)
.fromTo('.desktop-section-skill .skill-icon-5', { y:70 }, { y:0, ease:'elastic', duration:0.2 }, 0.08)
.fromTo('.desktop-section-skill .skill-text-1', { y:70 }, { y:0, ease:'elastic', duration:0.2 }, 0.1)
.fromTo('.desktop-section-skill .skill-text-2', { y:70 }, { y:0, ease:'elastic', duration:0.2 }, 0.11)
.fromTo('.desktop-section-skill .skill-text-3', { y:70 }, { y:0, ease:'elastic', duration:0.2 }, 0.12)
.fromTo('.desktop-section-skill .skill-text-4', { y:70 }, { y:0, ease:'elastic', duration:0.2 }, 0.13)
.fromTo('.desktop-section-skill .skill-text-5', { y:70 }, { y:0, ease:'elastic', duration:0.2 }, 0.14)
.fromTo('.desktop-section-skill .skill-text-6', { y:70 }, { y:0, ease:'elastic', duration:0.2 }, 0.15)
.fromTo('.desktop-section-skill .skill-text-7', { y:70 }, { y:0, ease:'elastic', duration:0.2 }, 0.16);

