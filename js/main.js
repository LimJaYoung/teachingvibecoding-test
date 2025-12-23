// GSAP ScrollTrigger 등록
gsap.registerPlugin(ScrollTrigger);

// DOM 로드 완료 후 실행
document.addEventListener("DOMContentLoaded", function() {
  const heroSection = document.querySelector(".desktop-section-hero");
  if (!heroSection) {
    console.error("heroSection을 찾을 수 없습니다.");
    return;
  }

  // hero 섹션 내의 모든 line-svg path 찾기
  const lineSvgs = heroSection.querySelectorAll(".line-svg");
  
  if (lineSvgs.length === 0) {
    console.warn("line-svg 요소를 찾을 수 없습니다. HTML에 line-wrap과 line-svg가 있는지 확인하세요.");
    return;
  }
  
  lineSvgs.forEach((svg) => {
    const paths = svg.querySelectorAll("path");
    
    if (paths.length === 0) {
      console.warn("path 요소를 찾을 수 없습니다.");
      return;
    }
    
    paths.forEach((path) => {
      // path 길이 계산
      const length = path.getTotalLength();
      
      if (length === 0) {
        console.warn("path 길이가 0입니다.");
        return;
      }
      
      // 초기 상태: 안 보이게 설정
      path.style.strokeDasharray = length;
      path.style.strokeDashoffset = length;
    });
  });

  // ScrollTrigger 설정
  ScrollTrigger.create({
    trigger: heroSection,
    start: "top 80%",
    onEnter: () => {
      heroSection.classList.add("is-active");
      console.log("is-active 클래스 추가됨");
    },
    onLeaveBack: () => {
      heroSection.classList.remove("is-active");
      console.log("is-active 클래스 제거됨");
    }
  });
  
  console.log("애니메이션 초기화 완료. line-svg 개수:", lineSvgs.length);
});

