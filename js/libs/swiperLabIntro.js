// 첫 번째 슬라이더(텍스트)
const swiperTxt = new Swiper(".swiper-intro-lab-txt", {
  speed: 500,
  allowTouchMove: false // 텍스트 swiper는 보통 드래그 비활성화
});

// 두 번째 슬라이더(이미지)
const swiperImg = new Swiper(".swiper-intro-lab", {
  speed: 500,
  navigation: {
    nextEl: ".group-btn .btn-intro-lab-next",
    prevEl: ".group-btn .btn-intro-lab-prev"
  }
});

// controller로 동기화 연결
swiperTxt.controller.control = swiperImg;
swiperImg.controller.control = swiperTxt;
