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
 
//-----------------------------------------------------------------------------------
    var $range = $(".js-range-slider");
    var $inputFrom = $(".range-input__from");
    var $inputTo = $(".range-input__to");
    var instance;
    var min = 0;
    var max = 400;
    var from = 30;
    var to = 300;
    
    
    $range.ionRangeSlider({        
        type: "double",
        min: min,
        max: max,
        from: 30,
        to: 300,
        prefix: "$",
        onStart: updateInputs,
        onChange: updateInputs,
        onFinish: updateInputs
    });
    instance = $range.data("ionRangeSlider");
    
    function updateInputs (data) {
        from = "$" + data.from;
        to = "$" + data.to;
    
        $inputFrom.prop("value", from);
        $inputTo.prop("value", to);
    }
    
    $inputFrom.on("change", function () {
        var val = $(this).prop("value");
        
        // validate
        if (val < min) {
            val = min;
        } else if (val > to) {
            val = to;
        }
    
        instance.update({
            from: val
        });
    
        $(this).prop("value", val);
    
    });
    
    $inputTo.on("change", function () {
        var val = $(this).prop("value");
    
        // validate
        if (val < from) {
            val = from;
        } else if (val > max) {
            val = max;
        }
    
        instance.update({
            to: val
        });
    
        $(this).prop("value", val);
    });

    // --------------------------------------------------------------------------

    $('.style-list').on('click', function(){
        $('.style-list').addClass('active');
        $('.style-grid').removeClass('active');
        $('.category-page__content-inner').addClass('list');
        
    });
    
    $('.style-grid').on('click', function(){
        $('.style-grid').addClass('active');
        $('.style-list').removeClass('active');
        $('.category-page__content-inner').removeClass('list');
    });


    $('.single-product__wrapper .tab').on('click', function(event) {
        var id = $(this).attr('data-id');
            $('.single-product__wrapper').find('.tab-item').removeClass('active-tab').hide();
            $('.single-product__wrapper .tabs').find('.tab').removeClass('active');
            $(this).addClass('active');
            $('#'+id).addClass('active-tab').fadeIn();
            return false;
        });

// меню по клику-----------------------------------------------

    $('.menu-burger').on('click', function(){
        $('.header__bottom-menu').toggleClass('active');        
    });

    $('.header__notifications-alarm').on('click', function(){
        $(this).toggleClass('active');        
    });
    $('.header__notifications-envelope').on('click', function(){
        $(this).toggleClass('active');        
    });
    $('.header__notifications-cart').on('click', function(){
        $(this).toggleClass('active');        
    });
    $('.header__user').on('click', function(){
        $(this).toggleClass('active');        
    });


    $('.bottom-menu__list-link').on('click', function(){
        $(this).toggleClass('active');        
    });

    $('.user-drop').on('click', function(){
        $('.header__notifications, .header__user-info').toggleClass('active'); 
          return false;
    });

    


//------------------------------------------------------------------
    var mixer = mixitup('.new-product__items')

});