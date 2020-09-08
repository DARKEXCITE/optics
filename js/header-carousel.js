let headerCarousel = $("#headerCarousel");

headerCarousel.owlCarousel({
    items: 1,
    margin: 200,
    dots: false,
    loop: true,
    smartSpeed: 1500,
    mouseDrag: false,
    touchDrag: false,
    autoplay: true,
    autoplayTimeout: 6000
});

$('#headerSliderNext').click(function() {
    headerCarousel.trigger('next.owl.carousel');
})
$('#headerSliderPrev').click(function() {
    headerCarousel.trigger('prev.owl.carousel');
})