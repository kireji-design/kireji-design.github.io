$(document).ready(function () {

    $(".menu-aperto").hide();
    $(".show_hide").show();
});


function myFunction(x) {
    x.classList.toggle("change");
    $(".menu-aperto").animate({width: "toggle" });
}




