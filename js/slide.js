var swiper = new Swiper(".detail_slide", {

    slidesPerView: 2,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


var swiper = new Swiper(".other_slide", {

    slidesPerView: 3.5,
    spaceBetween: 20,
    loop: true,
    loopedSlides: 1,
});

var swiper = new Swiper(".restaurants_slide", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    loopedSlides: 1,
    pagination: {
        el: ".swiper-pagination",
    },
});

var swiper = new Swiper(".featured_slide", {
    slidesPerView: 3.5,
    spaceBetween: 20,
    loopedSlides: 1,
});

var swiper = new Swiper(".featured_slide2", {
    slidesPerView: 4,
    spaceBetween: 35,
    loopedSlides: 1,
});