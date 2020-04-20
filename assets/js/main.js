$(document).ready(function(){

    $(".owl-logos").owlCarousel({
        'items':12,
        'rtl': true,
        'autoplay': true,
        Type: Object,
        'loop':true,
    });

    $(".slider-baner__owl").owlCarousel({
        'items':2,
        'margin': 5,
        'autoplay': true,
        Type: Object,
        'loop':true,
        dotsContainer: true,
        dotsData: true,
        dots: true
    });


});

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
    panel.style.maxHeight = null;
    } else {
    panel.style.maxHeight = panel.scrollHeight + "px";
    } 
});
}



