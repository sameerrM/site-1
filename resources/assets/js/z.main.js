
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

    $('.parallax-window').parallax({imageSrc: 'assets/img/bg-parallax.jpg'});

    $('.blog-info p').matchHeight();
    
    $('.navbar-nav').onePageNav({
        currentClass: 'active',
        changeHash: false,
        scrollSpeed: 750,
        scrollThreshold: 0.5,
        filter: '',
        easing: 'swing'
    });
});