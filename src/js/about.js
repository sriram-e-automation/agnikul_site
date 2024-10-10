import $ from "jquery";
import Swiper from "swiper";


export default function Init() {

  var mySwiper, invSwiper, partSwiper, busiSwiper;
  $(document).ready(function () {
    $("body").removeClass("products");
    $(".first-row").removeClass("home__first-row");

    $(".book__terms__link").click(function () {
      $(".custom-modal-out").addClass("show");
      $(".body").css("overflow-y", "hidden");
    });

    $(".close-icon").click(function () {
      $(".custom-modal-out").removeClass("show");
      $(".body").css("overflow-y", "scroll");
    });

    //initialize swiper when document ready
    mySwiper = new Swiper('.timeline-swiper', {
      direction: 'vertical',
      speed: 300,
      loop: false,
      // If we need pagination
      pagination: {
        el: '.timeline__swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '"> <p class="pagination-text">' + (index + 2016) + '</p></span>';
        }
      },
      mousewheel: {
        forceToAxis: true,
        releaseOnEdges: true,
        sensitivity: 1000
      },


      touchReleaseOnEdges: true

    });
    // mySwiper.mousewheel.disable();
    // mySwiper.allowTouchMove = false;




    invSwiper = new Swiper('.investor-swiper', {
      direction: 'horizontal',
      slidesPerView: 'auto',
      centeredSlides: true,
      simulateTouch: false,
      keyboard: {
        enabled: true,
      },
      navigation: {
        nextEl: '.investor-swiper-button-next',
        prevEl: '.investor-swiper-button-prev',
      },
      pagination: {
        el: '.investor-swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
          if ((index >= 1 && index <= this.slides.length - 2) || 1200 > window.screen.width)
            return '<span class="' + className + '"></span>';
          else
            return '<span  class="' + className + ' hidden-bullet"></span>';
        }
      },

      on: {
        slideChange: function () {
          if (window.screen.width > 1200) {
            if (this.activeIndex == 1) {
              this.allowSlidePrev = false;
              this.navigation?.prevEl?.classList?.add("swiper-button-disabled");
            }
            else {
              this.allowSlidePrev = true;
              this.navigation?.prevEl?.classList?.remove("swiper-button-disabled");
            }
            if (this.activeIndex == this.slides.length - 2) {
              this.allowSlideNext = false;
              this.navigation?.nextEl?.classList?.add("swiper-button-disabled");
            }
            else {
              this.allowSlideNext = true;
              this.navigation?.nextEl?.classList?.remove("swiper-button-disabled");
            }
          }

        }
      }

    });
    if (window.screen.width > 1200)
      invSwiper.slideNext();

    partSwiper = new Swiper('.partner-swiper', {
      direction: 'horizontal',
      slidesPerView: 'auto',
      centeredSlides: true,
      keyboard: {
        enabled: true,
      },
      navigation: {
        nextEl: '.partner-swiper-button-next',
        prevEl: '.partner-swiper-button-prev',
      },
      simulateTouch: false,
      pagination: {
        el: '.partner-swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
          if ((index >= 1 && index <= this.slides.length - 2) || 1200 > window.screen.width)
            return '<span class="' + className + '"></span>';
          else
            return '<span  class="' + className + ' hidden-bullet"></span>';
        }
      },

      on: {
        slideChange: function () {
          if (window.screen.width > 1200) {
            if (this.activeIndex == 1) {
              this.allowSlidePrev = false;
              if (this.navigation && this.navigation.prevEl) {
                this.navigation.prevEl.classList.add("swiper-button-disabled");
              }
            } else {
              this.allowSlidePrev = true;
              if (this.navigation && this.navigation.prevEl) {
                this.navigation.prevEl.classList.remove("swiper-button-disabled");
              }
            }
            if (this.activeIndex == this.slides.length - 2) {
              this.allowSlideNext = false;
              if (this.navigation && this.navigation.nextEl) {
                this.navigation.nextEl.classList.add("swiper-button-disabled");
              }
            } else {
              this.allowSlideNext = true;
              if (this.navigation && this.navigation.nextEl) {
                this.navigation.nextEl.classList.remove("swiper-button-disabled");
              }
            }
          }
          

        }
      }

    });
    if (window.screen.width > 1200)
      partSwiper.slideNext();


    busiSwiper = new Swiper(
      ".business-swiper",
      {
        direction: 'horizontal',
        loop: true,
        speed: 1000,
        effect: "slide",
        pagination: {
          clickable: true,
          el: '.business-swiper-pagination'
        }
      }
    );

  });

  $(window).scroll(function () {
    //   var elementTop = $(".swiper-slide-active .slide-content").offset().top;
    //   var elementBottom = elementTop + $(".swiper-slide-active .slide-content").outerHeight();

    //   var viewportTop = $(window).scrollTop();
    //   var viewportBottom = viewportTop + window.screen.height;
    //  if(elementBottom <= viewportBottom && elementTop >= viewportTop)
    //  {
    //       mySwiper.mousewheel.enable();
    //       mySwiper.allowTouchMove = true;
    //  }
    //   else
    //   {
    //        mySwiper.mousewheel.disable();
    //        mySwiper.allowTouchMove = false;
    //   }

  });

}
