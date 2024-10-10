import $ from 'jquery';



export default function Init() {
    $(document).ready(function () {
        $("body").removeClass("products");
        $(".first-row").removeClass("home__first-row");

        $("#altitude .dropdown-item").click(function () {
            document.getElementById("altitude-field").innerHTML = this.innerHTML;
            if (!document.getElementById("altitude-field").classList.contains("selected"))
                document.getElementById("altitude-field").classList.add("selected");

        });

        $("#preferred .dropdown-item").click(function () {
            if(!this.classList.contains("disabled"))
           document.getElementById("preferred-field").innerHTML = this.innerHTML;
           if (
             !document
               .getElementById("preferred-field")
               .classList.contains("selected")
           )
             document.getElementById("preferred-field").classList.add("selected");
         });

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