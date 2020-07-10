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


var isActive = false;

$('.burger-menu').on('click', function() {
  if (isActive) {
    $(this).removeClass('active');
    $('.header-navigation').removeClass('menu-open');
    $('body').css({ overflow: 'auto'});
  } else {
    $(this).addClass('active');
    $('.header-navigation').addClass('menu-open');
    $('body').css({ overflow: 'hidden'});
  }

  isActive = !isActive;
});