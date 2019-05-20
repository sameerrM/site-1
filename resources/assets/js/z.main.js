(function($){
    $(window).on("load",function(){
        $(".card-body").mCustomScrollbar();
    });
})(jQuery);

$(function() {
    
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
        autoplay:false,
        autoplayTimeout: 10000,
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
   
});