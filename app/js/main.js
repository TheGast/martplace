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
        responsive:[  
        {    
        breakpoint: 590, 
        settings:{
            prevArrow: false,
            nextArrow: false,     
        }       
        },
    ]
    });

    $(".followers__slider-items").slick({
        prevArrow: '<button type="button" class="slick-prev slick-arrow"><img src="images/icons/slick-prev.svg"></button>',
        nextArrow: '<button type="button" class="slick-next slick-arrow"><img src="images/icons/slick-next.svg"></button>',
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive:[  
            {    
            breakpoint: 1120, 
            settings:{        
                slidesToShow: 2,
                slidesToScroll: 2,  
            }       
            },
            {    
                breakpoint: 700, 
                settings:{
                    
                    slidesToShow: 1,
                    slidesToScroll: 1,  
                }       
                },
                {    
                    breakpoint: 590, 
                    settings:{        
                        slidesToShow: 1,
                        slidesToScroll: 1, 
                        prevArrow: false,
                        nextArrow: false,  
                    }       
                    },
             
        ]
    });

    $('.feedback__inner-items').slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        prevArrow: '<button type="button" class="slick-prev slick-arrow lnr-chevron-left"></button>',
        nextArrow: '<button type="button" class="slick-next slick-arrow lnr-chevron-right"></button>',
        responsive:[             
            {    
                breakpoint: 960, 
                settings:{
                    
                    slidesToShow: 1,
                    slidesToScroll: 1,   
                     prevArrow: false,
                    nextArrow: false, 
                }       
                },              
             
        ]
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
        $('.category-page__content-inner, .favorites-page').addClass('list');
        
    });
    
    $('.style-grid').on('click', function(){
        $('.style-grid').addClass('active');
        $('.style-list').removeClass('active');
        $('.category-page__content-inner, .favorites-page').removeClass('list');
    });


    $('.single-product__wrapper .tab').on('click', function(event) {
        var id = $(this).attr('data-id');
            $('.single-product__wrapper').find('.tab-item').removeClass('active-tab').hide();
            $('.single-product__wrapper .tabs').find('.tab').removeClass('active');
            $(this).addClass('active');
            $('#'+id).addClass('active-tab').fadeIn();
            return false;
        });
    $('.aside__tabs .tab').on('click', function(event) {
        var id = $(this).attr('data-id');
            $('.aside__tabs').find('.tab-item').removeClass('active-tab').hide();
            $('.aside__tabs .tabs').find('.tab').removeClass('active');
            $(this).addClass('active');
            $('#'+id).addClass('active-tab').fadeIn();
            return false;
        });

// меню по клику-----------------------------------------------

    $('.menu-burger').on('click', function(){
        $('.header-menu').toggleClass('active');  
                  
    }); 

    $('.user-drop').on('click', function(){
        $('.header__notifications, .header__user-info').toggleClass('active'); 
          return false;
    });
    $('.aside__title--categories').on('click', function(){
        $('.aside__list--categories').slideToggle('active');  
        $('.aside__title--categories button').toggleClass('on');  

    });
    $('.aside__title--filter').on('click', function(){
        $('.aside__list--filter').slideToggle('active');        
        $('.aside__title--filter button').toggleClass('on');        
    });
    $('.aside__title--range').on('click', function(){
        $('.aside__range form').slideToggle('active');        
        $('.aside__range button').toggleClass('on');        
    });

    $('.user__notifications-alarm').on('click', function(){
        $('.user__notifications-drop--alarm').slideToggle('active'); 
      });

    $('.user__notifications-envelope').on('click', function(){
        $('.user__notifications-drop--envelope').slideToggle('active'); 
      });
    $('.user__notifications-cart').on('click', function(){
        $('.user__notifications-drop--cart').slideToggle('active'); 
      });
    $('.user__name').on('click', function(){
        $('.user__menu').slideToggle('active'); 
      });
    $('.user__notifications-submenu').on('click', function(){
        $('.header__link').toggleClass('active'); 
      });
    $('.notification-trigger').on('click', function(){
        $('.user__notifications').toggleClass('active'); 
        $('.user__notifications-drop--cart').hide('.user__notifications-drop--cart');
        $('.user__notifications-drop--alarm').hide('.user__notifications-drop--alarm');
        $('.user__notifications-drop--envelope').hide('.user__notifications-drop--envelope');
        $('.header__link').removeClass('active');
        
      });

    


//------------------------------------------------------------------
    $('input, select').styler();
    
    var mixer = mixitup('.new-product__items')

});