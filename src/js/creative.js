/*!
 * Start Bootstrap - Creative Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

(function ($) {
    "use strict"; // Start of use strict
    
    //fade initial page show
    $('html').animate({
        opacity: 1
    }, 1300);

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function (event) {
        /*var $anchor = $(this);*/
        /*var href = $anchor.attr('href');*/
        var href = this.hash;
        $('html, body').stop().animate({
            scrollTop: ($(href).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        /*window.location.hash = href;*/
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function () {
        $('.navbar-toggle:visible').click();
    });

    // Fit Text Plugin for Main Header
    $("h1").fitText(
            1.2, {
                minFontSize: '35px',
                maxFontSize: '65px'
            }
    );

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    });
    
    

})(jQuery); // End of use strict
