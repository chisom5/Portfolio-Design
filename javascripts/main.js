 (function($) {
     'use strict';

     /* Preloader */

     $(window).on('load', function() {
         $('body').addClass('loaded');
     });

     /* Typed.js */
     $(window).on('load', function() {
         $('.typing').typed({
             strings: ["I am a Front end Developer", "A lover of UI/UX design", "I live at Lagos Nigeria"],
             typeSpeed: 50
         })
     });

     /* when the DOM is ready */
     jQuery(document).ready(function() {


         /* Smooth-scroll */
         $('#nav-header ul li a').on('click', function(e) {
             var target = $($.attr(this, 'href'));

             //to add our hash tags in the links to indicate them
             var hash = this.hash;

             if (!target.length) {
                 console.log(target.length);
                 $('html, body').animate({ scrollTop: 0 }, 1000, function() {
                     window.location.hash = hash;
                 });

             } else {
                 $('html, body').animate({
                     scrollTop: $(target).offset().top
                 }, 1000, function() {
                     window.location.hash = hash;
                 });
             }

             e.preventDefault();


         });

         /* Scroll Naviagation Background Change with Sticky Navigation */
         $(window).scroll(function() {

             if ($(this).scrollTop() > 100) {
                 $('#nav-header').addClass('navigation-background');
             } else {
                 $('#nav-header').removeClass('navigation-background');
             }
         })


         /* Mobile Navigation Hide or Collapse on Click */
         $(document).on('click', '.navbar-collapse.in', function(e) {
             if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
                 $(this).collapse('hide');
             }
         });
         $('body').scrollspy({
             target: '.navbar-collapse',
             offset: 195

         });

         /* Scroll To Top */

         $(window).scroll(function() {
             if ($(this).scrollTop() >= 500) {
                 $('.scroll-to-top').fadeIn();
             } else {
                 $('.scroll-to-top').fadeOut();
             }
         });
         $('.scroll-to-top').click(function() {
             $('html, body').animate({ scrollTop: 0 }, 800);
             return false;
         });



         /* Portfolio Filtering MixItUp.js*/
         $('.portfolio-inner').mixItUp();


         /* Magnific Popup.js */

         $('.portfolio-popup').magnificPopup({
             type: 'image',

             gallery: { enabled: true },
             zoom: {
                 enabled: true,
                 duration: 500

             },

             image: {
                 markup: '<div class="mfp-figure portfolio-pop-up">' +
                     '<div class="mfp-close"></div>' +
                     '<div class="mfp-img"></div>' +
                     '<div class="mfp-bottom-bar portfolio_title">' +
                     '<div class="mfp-title"></div>' +
                     '<div class="mfp-counter"></div>' +
                     '</div>' +
                     '</div>',

                 titleSrc: function(item) {
                     return item.el.attr('title');
                 }
             }


         });

         /* Testimonial Carousel/Slider */

         $(".testimonial-carousel-list").owlCarousel({
             items: 1,
             autoPlay: true,
             stopOnHover: false,
             navigation: true,
             navigationText: ["<i class='fa fa-long-arrow-left fa-2x owl-navi'></i>", "<i class='fa fa-long-arrow-right fa-2x owl-navi'></i>"],
             itemsDesktop: [1199, 1],
             itemsDesktopSmall: [980, 1],
             itemsTablet: [768, 1],
             itemsTabletSmall: false,
             itemsMobile: [479, 1],
             autoHeight: true,
             pagination: false,
             transitionStyle: "backSlide"
         });

     })
 })(jQuery);