new Swiper('.card-wrapper', {
    loop: true,
    spaceBetween: 30,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        0: {
            slidesPerView: 1
        },

        425:{
            slidesPerView: 1
        },

        768: {
            slidesPerView: 1
        },
        1024: {
            slidesPerView: 2
        },
        1440: {
            slidesPerView: 3
        },
        2560: {
            slidesPerView: 4
        }

    }
});