gsap.registerPlugin(ScrollTrigger);

// visual position 변경=========================================================================

ScrollTrigger.create({
    trigger: "#visual",
    start: "top top",
    end: "bottom top", // visual의 끝이 화면의 top에 닿을 때까지
    onLeave: () => {
        document.querySelector(".visual-inner").style.position = "absolute";
        document.querySelector(".visual-inner").style.top = "100%";
    },
    onEnterBack: () => {
        document.querySelector(".visual-inner").style.position = "fixed";
        document.querySelector(".visual-inner").style.top = "0";
    },
});

// visual position 변경 end=========================================================================


// lab item 나타나게 하기============================================================================

// .js-lab-item 각각에 대해 ScrollTrigger 적용
gsap.utils.toArray(".js-lab-item").forEach((item, index, array) => {
    ScrollTrigger.create({
        trigger: item,
        start: "top 80%",
        onEnter: () => {
            item.classList.add("active");

            // 만약 현재가 끝에서 두 번째 아이템이면, 마지막 아이템도 300ms 후 활성화
            if (index === array.length - 2) {
                setTimeout(() => {
                    array[array.length - 1].classList.add("active");
                }, 300);
            }
        },
    });
});

// lab item 나타나게 하기 end============================================================================


// fadeinup gsap============================================================================

// 섻션에 들어오면 fadeinup활성화
// 모든 section을 순회
document.querySelectorAll("section").forEach((section) => {
    // 해당 섹션 내부에 data-animate="fadeInUp" 요소가 있는지 확인
    const targets = section.querySelectorAll('[data-animate="fadeInUp"]');
    if (targets.length === 0) return; // 없으면 무시

    ScrollTrigger.create({
        trigger: section,
        start: "top 80%",
        onEnter: () => {
            targets.forEach((el) => el.classList.add("animate-active"));
        },
        // 필요하다면 아래 주석 해제:
        // onLeaveBack: () => {
        //   targets.forEach((el) => el.classList.remove("animate-active"));
        // },
    });
});

// fadeinup gsap end============================================================================


// lab===========================================================

ScrollTrigger.create({
    trigger: ".main-brand",
    start: "top center", // #lab의 top이 화면의 중앙에 닿을 때
    onEnter: () => {
        console.log("#lab entered center viewport");
        document.querySelector(".main-brand").classList.add("change-bg");
    },
    onLeaveBack: () => {
        console.log("#lab center viewport");
        document.querySelector(".main-brand").classList.remove("change-bg");
    },
});


// lab end===========================================================