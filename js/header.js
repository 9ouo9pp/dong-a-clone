//menu
document.addEventListener("DOMContentLoaded", function () {
    const gnbItems = document.querySelectorAll('.gnb-item');

    gnbItems.forEach((item) => {
        item.addEventListener('mouseenter', () => {
            console.log("mouseenter");
            item.classList.add('is-active');
        });

        item.addEventListener('mouseleave', () => {
            console.log("mouseleave");
            item.classList.remove('is-active');
        });
    });

    // 전체 header 영역에서 벗어나면 전체 메뉴 닫기 (선택)
    const header = document.querySelector('.header');
    header.addEventListener('mouseleave', () => {
        console.log("mouseleaveleave");
        gnbItems.forEach((item) => item.classList.remove('is-active'));
    });
});

//show
const header = document.querySelector('.header');
const content = document.querySelector('#content');

let lastScrollTop = 0;
let isHeaderHidden = false;

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const contentTop = content.getBoundingClientRect().top;

    // 스크롤 방향 확인
    const scrollDown = scrollTop > lastScrollTop;

    // 1. content의 top이 화면 위에 닿은 후부터만 헤더 숨기기 적용
    if (contentTop <= 0) {
        if (scrollDown && !isHeaderHidden) {
            header.classList.add('is-hidden');
            isHeaderHidden = true;
        } else if (!scrollDown && isHeaderHidden) {
            header.classList.remove('is-hidden');
            isHeaderHidden = false;
        }
    } else {
        // #content 영역에 도달하기 전까지는 항상 보여주기
        header.classList.remove('is-hidden');
        isHeaderHidden = false;
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // 모바일 Safari 대응
});
