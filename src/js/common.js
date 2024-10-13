import $ from "jquery";


function navBar() {
    var x = document.getElementById("myTopnav");
    if (x.classList.contains("responsive") === false){
      x.classList.add("responsive");
      $(".navBar").addClass("responsive");
    } 
      else {
      x.classList.remove("responsive");
      $(".navBar").removeClass("responsive");
    }
  }

export default navBar;