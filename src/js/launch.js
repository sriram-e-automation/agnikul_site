import $ from 'jquery';
import Swiper from 'swiper';


export default function Init() {

  var locationData = {
    "chennai": [0, 1, 2, 3, 4, 5],
    "beijing": [10, 11, 12, 13, 14, 15],
    "kolkata": [20, 21, 22, 33, 34, 35],
    "ahmedabad": [40, 41, 42, 43, 44, 45],
    "rajastan": [525, 523, 445, 441, 443, 438, 437, 439, 520, 446, 442, 444, 440],
    "moscow": [60, 61, 62, 63, 64, 65],
  }

  

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
    // $(".body").scroll(function(){
    //     var locSlider = document.getElementsByClassName("launch__location-swiper")[0];
    //     var bot = locSlider.getBoundingClientRect().bottom;
    //     if(bot < $(".body").scrollTop() + (0.4)*window.screen.height)
    //     {
    //        $(".launch__world-map").removeClass("fixed"); 
    //     }
    //     else
    //     {
    //       $(".launch__world-map").addClass("fixed"); 
    //     }
    // });

    // var prev = undefined;

    // $(".launch__location__slide-content").each(function () {
    //   $(this).click(
    //     function () {

    //       // Now you can use all slider methods like
    //       //$(this).css("border","solid 1px #4d8c52");
    //       var key = $(this).attr('id');
    //       var selectorDesc = "#" + key + " .launch__location__slide-desc";
    //       var selectorContent = "#" + key;
    //       if (prev != undefined) {
    //         var prevDesc = "#" + prev + " .launch__location__slide-desc";
    //         var prevContent = "#" + prev;
    //         $(prevContent).removeClass("active");
    //         $(prevDesc).removeClass("active");
    //       }
    //       $(selectorContent).addClass("active");
    //       $(selectorDesc).addClass("active");

    //  
    //       var dots = document.getElementsByTagName("circle");
    //       for (var i = 0; i < dots.length; i++) {
    //         if (locationData[key].indexOf(i) != -1) {
    //           dots[i].style.fill = "#4d8c52";
    //         }
    //         else
    //           dots[i].style.fill = "rgba(0,0,0,0.3)";
    //       }
    //       prev = key;
    //     },
    //   );
    // });

  });

}

