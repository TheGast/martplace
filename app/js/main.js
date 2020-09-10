$(function() {

    $(".content__stats-rat").rateYo({
        rating: 3.6,
        starWidth: '15px',
    });

    $(".slider-product__slider-items").slick({
        prevArrow: '<button type="button" class="slick-prev slick-arrow"><img src="images/icons/slick-prev.svg"></button>',
        nextArrow: '<button type="button" class="slick-next slick-arrow"><img src="images/icons/slick-next.svg"></button>'
    });

});