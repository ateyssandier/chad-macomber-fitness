$(document).ready(function() {
    carousel_init();

    $(window).scroll(function () {
        var big_image = $('.logo-img').data('big-logo'); 
        var small_image = $('.logo-img').data('small-logo'); 

        if ($(this).scrollTop() > 560) {
            $('nav').addClass('fixed');            
            // $('.logo-img').attr("src", small_image);
            

        } else {
            $('nav').removeClass('fixed');
            // $('.logo-img').attr("src", big_image);
        }   
    });
 
});

function carousel_init() {


    /* ==========================================================================
       Homepage slider
       ========================================================================== */
        if($('#pm-slider').length > 0){
                        
            $('#pm-slider').PMSlider({
                speed : 700,
                easing : 'ease',
                loop : true,
                controlNav : true, //false = no bullets / true = bullets
                controlNavThumbs : false,
                animation : 'slide',
                fullScreen : false,
                slideshow : false,
                slideshowSpeed : 7000,
                pauseOnHover : true,
                arrows : true,
                fixedHeight : true,
                fixedHeightValue : 638,
                touch : true,
                progressBar : false
            });
            
        }
        
    /* ==========================================================================
       Detect page scrolls on buttons
       ========================================================================== */
        if( $('.pm-page-scroll').length > 0 ){
            
            $('.pm-page-scroll').click(function(e){
                                
                e.preventDefault();
                var $this = $(e.target);
                var sectionID = $this.attr('href');
                
                
                $('html, body').animate({
                    scrollTop: $(sectionID).offset().top - 80
                }, 1000);
                
            });
            
        }


}