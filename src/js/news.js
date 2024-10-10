import $ from 'jquery';
import Swiper from "swiper";

export default function Init() {

  var newsSwiper;

  function checkmobile() {
    return window.screen.width <= 576;
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



  });

}