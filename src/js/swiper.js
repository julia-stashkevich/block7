var activeSwipers = []
//Функция создает свайпер
export function createSwiper(swiperBlock) {
  if (window.innerWidth < 768) {
    const newSwiper = new Swiper(swiperBlock, {
      loop: true,
      slidesPerView: 'auto',
      slideToClickedSlides: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },

      grabCursor: true,
      keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true
      },
      mousewheel: {
        sensitivity: 1
      },
      slideOverflow: true,
      allowTouchMove: true
    })

    swiperBlock.swiper = newSwiper
    activeSwipers.push(newSwiper)
    return newSwiper
  }
}
//Функция убирает свайпер на ширине экрана >= 768px
export function destroySwiper() {
  if (window.innerWidth >= 768) {
    var swipers = document.querySelectorAll('.swiper')
    var swiperSlides = document.querySelectorAll('.swiper-slide')
    var swiperWrappers = document.querySelectorAll('.swiper-wrapper')
    var swiperPaginations = document.querySelectorAll('.swiper-pagination')
    for (let i = 0; i < activeSwipers.length; i++) {
      activeSwipers[i].destroy()
    }
    swipers.forEach((element) => {
      element.classList.remove('swiper')
    })
    swiperSlides.forEach((element) => {
      element.classList.remove('swiper-slide')
    })
    swiperWrappers.forEach((element) => {
      element.classList.remove('swiper-wrapper')
      element.style.overflow = 'scroll'
    })
    swiperPaginations.forEach((element) => {
      element.classList.remove('swiper-pagination')
      element.style.display = 'none'
    })
  }
}
