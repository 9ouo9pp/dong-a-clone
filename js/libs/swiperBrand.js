gsap.registerPlugin(ScrollTrigger);

const brandSwiper = new Swiper(".brand-swiper", {
    slidesPerView: 7,
    spaceBetween: 30,
    loop: true,
    centeredSlides: true,
    allowTouchMove: false, // 자동 애니메이션용
    on: {
        init() {
            animateActiveSlide(this);
        },
        slideChangeTransitionEnd() {
            animateActiveSlide(this);
        }
    }
});

function animateActiveSlide(swiper) {
    swiper.slides.forEach((slide) => {
        const product = slide.querySelector('.brand-img-product');
        const logo = slide.querySelector('.brand-img-logo');
        if (!product || !logo) return;

        // 모든 슬라이드 초기화
        gsap.set(product, { scale: 0.8, opacity: 0 });
        // gsap.set(logo, { top: '60%' });

        if (slide.classList.contains('swiper-slide-active')) {
            const tl = gsap.timeline({
                onComplete() {
                    swiper.slideNext(); // 애니메이션 끝나면 다음 슬라이드
                }
            });

            // 1. 로고 먼저 내려오기
            tl.to(logo, {
                top: '85%',
                left: '50%',
                xPercent: -50,
                yPercent: 0,
                opacity: 1,
                position: 'absolute',
                duration: 0.3,
                ease: 'power2.out'
            });

            // 2. 제품 이미지 커지며 나타남
            tl.to(product, {
                scale: 1,
                opacity: 1,
                duration: 0.5,
                ease: 'power2.out'
            });

            // 3. 2초 유지
            tl.to({}, { duration: 2 });

            // 4. 제품 이미지 작아지며 사라짐
            tl.to(product, {
                scale: 0.8,
                opacity: 0,
                duration: 0.2,
                ease: 'power2.out'
            });

            // 5. 로고 다시 위로 올라감
            tl.to(logo, {
                top: '60%',           // 다시 원래 위치로
                yPercent: -50,        // translateY(-50%)와 같은 효과
                opacity: 0.7,         // 덜 강조되게
                duration: 0.5,
                ease: 'power2.out'
            });
        }
    });
}
