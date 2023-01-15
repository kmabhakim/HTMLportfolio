$(document).ready(function(){
    //Project popup
    $('.project-popup').magnificPopup({
        type:'image',
        gallery: {
            enabled: true
        }
    });

    //Counter
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    //Testimonial Carousel
    $(".testimonial").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        nav: false,
        dots: true  
    });
});

$(window).load(function(){
    //Sticky Header
    $(window).on('scroll', function(){
        if($(this).scrollTop() > 1) {
            $('.header-area').addClass('fixed');
        } else{
            $('.header-area').removeClass('fixed');
        }
    });

    //Scroll To Top Animation
    $('#scrolltop').click(function(){
        $('html, body').animate({
            scrollTop:0
        },'5000')
    });

    //Scroll To Top Fade
    $(window).on('scroll', function(){
        if($(this).scrollTop() > 600) {
            $('#scrolltop').css('opacity','1');
        } else{
            $('#scrolltop').css('opacity','0');
        }
    });

    //Preloder
    $('.preloder').fadeOut();
});