var swiper = new Swiper('.swiper-container', {
  slidesPerView: 4,
  centeredSlides: true,
  spaceBetween: 10,
  grabCursor: true,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 4,
      spaceBetween: 40
    }
  }
});


var bestSellerSwiper = new Swiper('.slider-bestseller', {
  slidesPerView: 5,
  grabCursor: true,
  watchOverflow: true,
  watchSlidesVisibility: true,
  pagination: {
    el: '.bestseller-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.bestseller-button-next',
    prevEl: '.bestseller-button-prev',
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 0
    },
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 0
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
      spaceBetween: 0
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 4,
      spaceBetween: 0
    }
  }
});


const nextSlide = () => {
  bestSellerSwiper.slideNext();
};

const previousSlide = () => {
  bestSellerSwiper.slidePrev();
};

