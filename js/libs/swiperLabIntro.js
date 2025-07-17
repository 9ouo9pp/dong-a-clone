// 첫 번째 슬라이더(텍스트)
var swiperTxt = new Swiper(".swiper-intro-lab-txt", {
  speed: 500,
  allowTouchMove: false // 텍스트 swiper는 보통 드래그 비활성화
});

// 두 번째 슬라이더(이미지)
var swiperImg = new Swiper(".swiper-intro-lab-img", {
  speed: 500,
  navigation: {
    nextEl: ".group-btn .swiper-button-next",
    prevEl: ".group-btn .swiper-button-prev"
  }
});

// controller로 동기화 연결
swiperTxt.controller.control = swiperImg;
swiperImg.controller.control = swiperTxt;
