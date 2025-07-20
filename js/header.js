// menu =================================================================================

document.addEventListener("DOMContentLoaded", function () {
    const gnbItems = document.querySelectorAll(".gnb-item");
    const header = document.querySelector(".header");
    const headerMask = document.querySelector(".header-mask");
    const defaultHeaderHeight = header.offsetHeight;

    function openGnbDepth(currentItem) {
        // 모든 gnb 닫기
        gnbItems.forEach(item => {
            if (item !== currentItem) item.classList.remove("is-active");
        });

        // 현재 아이템 열기
        currentItem.classList.add("is-active");
        header.classList.add("is-dark");

        // 현재 depth 높이 측정
        const gnbDepth = currentItem.querySelector(".gnb-depth");
        if (gnbDepth) {
            const depthHeight = gnbDepth.offsetHeight;
            header.style.height = `${defaultHeaderHeight + depthHeight}px`;
            headerMask.style.height = `${depthHeight + 100}px`;
        }
    }

    function closeAllGnb() {
        gnbItems.forEach(item => item.classList.remove("is-active"));
        header.style.height = `${defaultHeaderHeight}px`;
        headerMask.style.height = "0px";
    }

    gnbItems.forEach((item) => {
        item.addEventListener("mouseenter", () => {
            openGnbDepth(item);
        });
    });

    // header를 벗어날 때 모든 gnb 닫기
    header.addEventListener("mouseleave", () => {
        closeAllGnb();
        header.classList.remove("is-dark");
    });
});

// menu end =================================================================================


// header 숨기기=================================================================================

const headerEl = document.querySelector(".header");
const headerMask = document.querySelector(".header-mask");
const keyInfo = document.querySelector(".key-info");

let lastScroll = window.scrollY;
let isScrollActive = false;

window.addEventListener("scroll", () => {
    const currentScroll = window.scrollY;
    const keyInfoTop = keyInfo.getBoundingClientRect().top;

    if (keyInfoTop <= 0) {
        isScrollActive = true;
    } else {
        isScrollActive = false;
        // key-info 도달 전이면 항상 header 보이게
        headerEl.classList.remove("hide");
        headerMask.style.height = `${headerEl.offsetHeight}px`;
        headerMask.style.height = "0px";
        return;
    }

    if (isScrollActive) {
        if (currentScroll > lastScroll) {
            // 아래로 스크롤 → 헤더 숨기기
            headerEl.classList.add("hide");
            headerEl.classList.remove("is-dark");
            headerMask.style.height = "0px";
        } else {
            // 위로 스크롤 → 헤더 보이기
            headerEl.classList.remove("hide");
            headerEl.classList.add("is-dark");
            headerMask.style.height = `${headerEl.offsetHeight}px`;
        }

        lastScroll = currentScroll;
    }
});

// header 숨기기 end=================================================================================
