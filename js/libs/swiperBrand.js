gsap.registerPlugin(ScrollTrigger);

let isAnimating = false; // 애니메이션 실행 중 여부 체크 변수

const brandSwiper = new Swiper(".brand-swiper", {
  slidesPerView: 7,
  spaceBetween: 30,
  loop: true,
  centeredSlides: true,
  allowTouchMove: false,
  navigation: {
    nextEl: ".btn-next",
    prevEl: ".btn-prev"
  },
  on: {
    init(swiper) {
      updateSlideNumber(swiper);
      animateActiveSlide(swiper);
    },
    slideChangeTransitionEnd(swiper) {
      updateSlideNumber(swiper);
      animateActiveSlide(swiper);
    }
  }
});

function animateActiveSlide(swiper) {
  if (isAnimating) return; // 이미 애니메이션 중이면 바로 종료
  isAnimating = true; // 애니메이션 시작

  swiper.slides.forEach((slide) => {
    const product = slide.querySelector(".brand-img-product");
    const logo = slide.querySelector(".brand-img-logo");
    if (!product || !logo) return;

    // 모든 슬라이드 초기화
    gsap.set(product, { top: "-10%", scale: 0.8, opacity: 0 });

    if (slide.classList.contains("swiper-slide-active")) {
      const tl = gsap.timeline({
        onComplete() {
          isAnimating = false; // 애니메이션 끝났으니 다시 허용
          swiper.slideNext(); // 다음 슬라이드로 자동 이동
        }
      });

      tl.to(logo, {
        top: "70%",
        xPercent: -50,
        left: "50%",
        yPercent: 0,
        opacity: 1,
        position: "absolute",
        duration: 0.3,
        ease: "power2.out"
      });

      tl.to(product, {
        scale: 0.9,
        opacity: 1,
        duration: 0.5,
        ease: "power2.out"
      });

      tl.to({}, { duration: 2 });

      tl.to(product, {
        scale: 0.8,
        opacity: 0,
        duration: 0.2,
        ease: "power2.out"
      });

      tl.to(logo, {
        top: "50%",
        yPercent: -50,
        opacity: 0.7,
        duration: 0.5,
        ease: "power2.out"
      });
    }
  });
}

function updateSlideNumber(swiper) {
  const current = swiper.realIndex + 1;
  const total = swiper.slides.length - swiper.loopedSlides * 2;

  const numberBox = document.querySelector(".group-number");
  if (numberBox) {
    numberBox.textContent = `${current} / ${total}`;
  }
}
