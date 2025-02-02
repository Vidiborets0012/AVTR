$(function () {
    $('.design-slider').slick({
        dots: false,
        slidesToShow: 4,
        variableWidth: true,
        prevArrow: '<img class="arrow arrow-prev" src="images/icon-arrow-prev.svg" alt="" />',
        nextArrow: '<img class="arrow arrow-next" src="images/icon-arrow-next.svg" alt="" />',
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    variableWidth: false,
                    slidesToShow: 1
                }
            }
        ]
    });
})