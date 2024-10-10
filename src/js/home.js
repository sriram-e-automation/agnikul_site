import $ from 'jquery';

var diff = 0.2;
var upId, downId;

function setTransform(value) {
    $(".home__right-within").css("transform", "translateY(" + value + "%)");
}

function getTransform() {
    var value = $(".home__right-within").css("transform");
    value = value.split(",")[5];
    value = value.split(")")[0];

    var height = $(".home__right-within").css("height");
    height = height.split("p")[0];
    height = Number.parseFloat(height);
    value = Number.parseFloat(value);
    value = (value / height) * 100;
    return value;

}





function moveUp() {

    
 $(".home__right-within").removeClass("home__right-within-animated");
    var curr = getTransform();
    if (curr > -68) {
        curr -= diff;
        setTransform(curr);
    }
    upId = requestAnimationFrame(moveUp);
}


function moveDown() {

    var curr = getTransform();
    if (curr < 0) {
        curr += diff;
        setTransform(curr);
    }
    else
    {
        $(".home__right-within").addClass("home__right-within-animated");
        }

    downId = requestAnimationFrame(moveDown);
}


export default function Init() {

    $(document).ready(function () {

        $("body").removeClass("products");
        $(".first-row").addClass("home__first-row");
        $(".book__terms__link").click(function () {
            $(".custom-modal-out").addClass("show");
            $(".body").css("overflow-y", "hidden");
        });

        $(".close-icon").click(function () {
            $(".custom-modal-out").removeClass("show");
            $(".body").css("overflow-y", "scroll");
        });

        $(".custom-modal-show").click(function (e) {
            e.preventDefault();
            var fields = document.querySelectorAll(".form-control-name");
            for(var i=0;i<fields.length;i++)
            {
                let field = fields[i];
                if(!field.classList.contains("selected"))
                {
                    $(".form-warning").css("display","block");
                    return;
                }
            }
            $(".form-warning").css("display","none");
            $(".home__custom-modal-out").addClass("show");
            $(".body").css("overflow-y", "hidden");
        });

        $(".home__close-icon").click(function () {
            $(".home__custom-modal-out").removeClass("show");
            $(".body").css("overflow-y", "scroll");
        });



     
        $(".home__right-image").hover(
            function () {
                cancelAnimationFrame(downId);
                upId = requestAnimationFrame(moveUp);
            },
            function () {
                cancelAnimationFrame(upId);
                downId = requestAnimationFrame(moveDown);
            }
        );
    });



}