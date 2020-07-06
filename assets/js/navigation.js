var swiper = new Swiper('.swiper-container', {
    slidesPerView: 2,
    spaceBetween: 50,
    slidesPerGroup: 2,
    grabCursor: true,
    loop: true,
    loopFillGroupWithBlank: true,
    breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 50,
        },
      },
    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
        clickable: true,
},
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});