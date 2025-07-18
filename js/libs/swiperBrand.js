gsap.registerPlugin(ScrollTrigger);



const brandSwiper = new Swiper(".brand-swiper", {
    slidesPerView: 7,
    spaceBetween: 30,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    on: {
        init() {
            animateActiveSlide(this);
        },
        slideChangeTransitionEnd() {
            animateActiveSlide(this)
        }

    }
})

function animateActiveSlide(swiper) {
    swiper.slides.forEach((slide) => {
        const product = slide.querySelector('.brand-img-product');
        const logo = slide.querySelector('.brand-img-logo');
        if (!product || !logo) return;

        if (slide.classList.contains('swiper-slide-active')) {
            // 제품 이미지 나타내기
            gsap.to(product, {
                opacity: 1,
                scale: 1,
                duration: 0.5,
                ease: 'power2.out'
            });
            // 로고를 아래로 내려서 이미지 아래에 위치하게
            gsap.to(logo, {
                position: 'relative',
                y: 0,
                opacity: 1,
                duration: 0.5,
                ease: 'power2.out',
                clearProps: 'position' // 애니메이션 후 position 속성 초기화
            });
        } else {
            // 제품 이미지 숨기기
            gsap.to(product, {
                opacity: 0,
                scale: 0.8,
                duration: 0.5,
                ease: 'power2.out'
            });
            // 로고를 중앙에 고정시키기 위해 위치 이동
            gsap.to(logo, {
                position: 'absolute',
                y: 0,
                opacity: 1,
                duration: 0.5,
                ease: 'power2.out'
            });
        }
    });
}
