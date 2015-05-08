$(document).ready(function() {
    carousel_init();

    init_parallax();

    new WOW().init();

    init_header();

    init_feed();

    
 
});

function init_feed(){
    jQuery.getFeed({
            url: 'https://fitsquared.wordpress.com/feed/',
            success: function(feed) {
            alert(feed.title);
        }
    });
}

function init_header(){
    $(window).scroll(function () {

        if ($(this).scrollTop() > 560) {
            $('nav').addClass('fixed');  
            $('nav').removeClass('big');          

        } else {
            $('nav').removeClass('fixed');
            $('nav').addClass('big');
        }   
    });
}

function init_parallax() {
    //stellar parallax
    $.stellar({
      horizontalOffset: 0,
      verticalOffset: 0,
      horizontalScrolling: false,
    });
    
    $('.parallax-panel').stellar();
}

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
                slideshow : true,
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