$(function() {
    // menu click
    $("#navicon").click(function() {
        $("#menu-left").stop().toggleClass("slide-right");
        $("#content-right").stop().toggleClass("menu-slider");
    });
});
