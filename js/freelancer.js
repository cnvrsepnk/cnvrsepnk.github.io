/*!
 * Start Bootstrap - Freelancer Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin

$(function() {
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);

        // $(window).load(function(){
        //     var nav_height = $('nav').outerHeight() + 10;
        //     console.log(nav_height);
        // });
        
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

$(function() {
    $(window).scroll(function(){
        var port = Math.round($('#portfolio').offset().top);
        var nav_height = $('nav').outerHeight() + 10;
        if($(this).scrollTop() >= (port - nav_height)) {
            $('.navbar-brand').addClass('animated bounceInLeft');
        } else {
            $('.navbar-brand').removeClass('animated bounceInLeft');
        }
    });
    
});

$(function() {

    $( document ).ready(function() {
        // var about_col_1 = $('#about #xtra-padding #col1');
        // var about_col_2 = $('#about #xtra-padding #col2');

        // if($(window).width() > 1200) {
        //     about_col_1.addClass('wow fadeInLeft');
        //     about_col_2.addClass('wow fadeInRight');
        // } else {
        //     about_col_1.addClass('wow fadeInUp');
        //     about_col_2.addClass('wow fadeInUp');
        // }

        $(".intro-text").sparkle({
            //options
        });
        $(".intro-text")
            .off("mouseover.sparkle")
            .off("mouseout.sparkle")
            .off("focus.sparkle")
            .off("blur.sparkle");
        $(".intro-text").trigger("start.sparkle");
        var timer;
        $(window).on("resize", function(){
            clearTimeout(timer);
            timer = setTimeout(function(){
                $(".intro-text").trigger("resize.sparkle");
            },200);
        });
    });
    
});

// Floating label headings for the contact form
$(function() {
    $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !! $(e.target).val());
    }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
    });
});


// Highlight the top nav as scrolling occurs
var nav_height = $('nav').outerHeight();
$('body').scrollspy({
    target: '.navbar-fixed-top',
    offset: nav_height + 10
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});


