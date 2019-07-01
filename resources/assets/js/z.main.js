$(function() {

    $(window).scroll(function() {
        var nav = $('nav');
        var top = 100;
        if ($(window).scrollTop() >= top) {

            nav.addClass('nav-bg');

        } else {
            nav.removeClass('nav-bg');
        }
    });

    $(window).on("load",function(){
        $(".card-body").mCustomScrollbar();
        $(".preloader").fadeOut("slow", function () {
            $(this).remove()
        });
    });

    $(window).scroll(function(){
        if($(this).scrollTop() > 300) {
            $(".auto-scroll-to-top").addClass("visible");
        } else {
            $(".auto-scroll-to-top").removeClass("visible");
        }
    });

    $(".auto-scroll-to-top").click(function(){
        $("html, body").animate({scrollTop: 0}, 600);
    });

    // Counter number
    jQuery(window).scroll(startCounter);
    function startCounter() {
        var hT = jQuery('.counter-number-text').offset().top,
            hH = jQuery('.counter-number-text').outerHeight(),
            wH = jQuery(window).height();
        if (jQuery(window).scrollTop() > hT+hH-wH) {
            jQuery(window).off("scroll", startCounter);
            jQuery('.counter').each(function () {
                var $this = jQuery(this);
                jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
                    duration: 2000,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.ceil(this.Counter));
                    }
                });
            });
        }
    }

    $('.navbar-toggler').on('click', function(){
        $(this).toggleClass('menu-open');
    });

    $('.blog-info h6').matchHeight();
    $('.blog-info p').matchHeight();

    $('.navbar-nav').onePageNav({
        currentClass: 'active',
        changeHash: false,
        scrollSpeed: 750,
        scrollThreshold: 0.5,
        filter: '',
        easing: 'swing'
    });

    $(".owl-carousel").owlCarousel({
        items:1,
        loop:true,
        autoplay:true,
        nav: true,
        autoplayTimeout: 4000,
        smartSpeed: 600,
        responsiveClass: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            768:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

    $(document).scroll(function(){
        var scrollPos = $(document).scrollTop();
        $('.hero-text h1, .hero-text h2').css('opacity', 1 - $(window).scrollTop() / 750);
    })

    lightbox.option({
        'positionFromTop': 200
    })
});
