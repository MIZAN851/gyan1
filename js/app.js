$(function () {
    //Course Slider
 
    $('.course_slider_container').slick({
       slidesToShow:3,
       prevArrow:'<i class="fas fa-arrow-left course_slick_arrow"> </i>',
       nextArrow:'<i class="fas fa-arrow-right course_slick_arrow"> </i>',
    })
 

//event calendar

$(".event_calendar").pb_calendar({
    'next_month_button' :'<i class="fa-solid fa chevron-up"> </i>',
    'prev_month_button' :'<i class="fa-solid fa chevron-down"></i>',
});

//banner slider

$(".banner_slider").slick({
    prevArrow:'<i class="fas fa-arrow-left banner_slick_arrow"> </i>',
    nextArrow:'<i class="fas fa-arrow-right banner_slick_arrow"> </i>',
    dots: true,
    dotsClass:'banner_slider_dots',

});

//about us

$(".about_slider").slick({

});

//testimonal

$(".testimonial_slider").slick({

});

//menu animation

$(window).on('scr0ll', function () {
    var scrillSize = $(window).scrollTop()



    if(scrollSize > 70) {
        $('#nav').addClass('active_menu') 
    }else {
        $('#nav').removeClass('active_menu') 
    }
});


//back to top button

$(window).on('scroll', function() {
    $('#backToTop').show();
  
});

});






