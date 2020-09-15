$(function() {

    $(".star-rate").rateYo({
        rating: 4.5,
        starWidth: '15px',
        readOnly: true,
        starSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 6.76l1.379 4.246h4.465l-3.612 2.625 1.379 4.246-3.611-2.625-3.612 2.625 1.379-4.246-3.612-2.625h4.465l1.38-4.246zm0-6.472l-2.833 8.718h-9.167l7.416 5.389-2.833 8.718 7.417-5.388 7.416 5.388-2.833-8.718 7.417-5.389h-9.167l-2.833-8.718z"></path></svg>'
        


    });

    $(".featured__items").slick({
        prevArrow: '<button type="button" class="slick-prev slick-arrow"><img src="images/icons/slick-prev.svg"></button>',
        nextArrow: '<button type="button" class="slick-next slick-arrow"><img src="images/icons/slick-next.svg"></button>',
        slidesToShow: 1,
        slidesToScroll: 1,
    });

    $(".followers__slider-items").slick({
        prevArrow: '<button type="button" class="slick-prev slick-arrow"><img src="images/icons/slick-prev.svg"></button>',
        nextArrow: '<button type="button" class="slick-next slick-arrow"><img src="images/icons/slick-next.svg"></button>',
        slidesToShow: 3,
        slidesToScroll: 3,

    });

    var mixer = mixitup('.new-product__items')

});