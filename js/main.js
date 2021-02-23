(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();



        


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	


// Header scroll background changed color //

    $(function() {
        $(window).on("scroll", function() {
            if($(window).scrollTop() > 20) {
                $(".navbar").addClass("scrolled");
            } else {
                //remove the background property so it comes transparent again (defined in your css)
            $(".navbar").removeClass("scrolled");
            }
        });
    });

// End Function //