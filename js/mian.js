// var r = jQuery;

// function a() {
//     var s;
//     0 != r(".js-lab-item").length &&
//         (r(n).scrollTop() + r(n).innerHeight() >= r(".lab-list").offset().top + 200 && r(".js-lab-item").eq(0).addClass("active"),
//             (s = r(".header").innerHeight() - r(".js-lab-item").eq(0).find("img").innerHeight() / 0.75),
//             r(".js-lab-item").each(function (e) {
//                 0 < e &&
//                     ((e = (0 < r(".js-lab-item.active").length ? r(".js-lab-item.active").eq(r(".js-lab-item.active").length - 1) : r(".js-lab-item.active").eq(0)).index()),
//                         r(".js-lab-item").eq(e)[0].getBoundingClientRect().top < 0 &&
//                         r(".js-lab-item").eq(e)[0].getBoundingClientRect().top >= s &&
//                         ((s =
//                             r(".header").innerHeight() -
//                             r(".js-lab-item")
//                                 .eq(e + 1)
//                                 .find("img")
//                                 .innerHeight() /
//                             3),
//                             r(".js-lab-item")
//                                 .eq(e + 1)
//                                 .addClass("active")),
//                         0 < r(".js-lab-item").parents(".page-lab-list").length) &&
//                     r(".js-lab-item:nth-last-of-type(2)").hasClass("active") &&
//                     setTimeout(function () {
//                         r(".js-lab-item:last-child").addClass("active");
//                     }, 300);
//             }));
// }


// GSAP 플러그인 등록
gsap.registerPlugin(ScrollTrigger);

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
