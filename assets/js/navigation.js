var swiper = new Swiper('.swiper-container', {
    slidesPerView: 2,
    spaceBetween: 50,
    slidesPerGroup: 2,
    grabCursor: true,
    loop: true,
    loopFillGroupWithBlank: true,
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