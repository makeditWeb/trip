var swiper = new Swiper(".detail_slide", {

    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        768: {
            slidesPerView: 1.5,
            spaceBetween: 15, // 모바일에서 간격을 조금 좁게 설정 가능
        },
        1200: {
            slidesPerView:2,
            spaceBetween: 15,
        }
    }
});


var swiper = new Swiper(".other_slide", {

    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    loopedSlides: 1,
    breakpoints: {
        768: {
            slidesPerView: 1.5,
            spaceBetween: 15, // 모바일에서 간격을 조금 좁게 설정 가능
        },
        1200: {
            slidesPerView:3.5,
            spaceBetween: 20,
        }
    }

});

var swiper = new Swiper(".restaurants_slide", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    loopedSlides: 1,
    pagination: {
        el: ".swiper-pagination",
    },

    breakpoints: {
        768: {
            slidesPerView: 1.5,
            spaceBetween: 15, // 모바일에서 간격을 조금 좁게 설정 가능
        },
        1200: {
            slidesPerView:3,
            spaceBetween: 30,
        }
    }
});

var swiper = new Swiper(".featured_slide", {
    slidesPerView: 1.5,
    spaceBetween: 15,
    loopedSlides: 1,
    breakpoints: {
        768: {
            slidesPerView: 1.5,
            spaceBetween: 15, // 모바일에서 간격을 조금 좁게 설정 가능
        },
        1200: {
            slidesPerView:3.5,
            spaceBetween: 30,
        }
    }
});


var swiper = new Swiper(".featured_slide2", {
    slidesPerView: 4,
    spaceBetween: 35,
    loopedSlides: 1,
});