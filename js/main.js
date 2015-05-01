$(document).ready(function() {
    carousel_init();
 
});

function carousel_init() {
  // $("#header-carousel").owlCarousel(
  //   {
  //     navigation : true, // Show next and prev buttons
  //     slideSpeed : 300,
  //     paginationSpeed : 400,
  //     singleItem:true,
  //     autoPlay : 5000,
  //     stopOnHover : true,
  //     loop: true,
  //     center: true,
 
  //     items : 1, //10 items above 1000px browser width
  //     itemsDesktop : [1000,1], //5 items between 1000px and 901px
  //     itemsDesktopSmall : [900,1], // betweem 900px and 601px
  //     itemsTablet: [600,1], //2 items between 600 and 0
  //     itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
  //   });

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
                pauseOnHover : false,
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
        
    


    // $('#header-carousel').slick({
    //     // dots: true,
    //     infinite: true,
    //     speed: 600,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     autoplaySpeed: 2000,
    //     centerMode: true,
    //     responsive: [{
    //         breakpoint: 1024,
    //         settings: {
    //             slidesToShow: 1,
    //             slidesToScroll: 1,
    //             // centerMode: true,

    //         }

    //     }, {
    //         breakpoint: 800,
    //         settings: {
    //             slidesToShow: 3,
    //             slidesToScroll: 2,
    //             dots: true,
    //             infinite: true,

    //         }


    //     }, {
    //         breakpoint: 600,
    //         settings: {
    //             slidesToShow: 2,
    //             slidesToScroll: 2,
    //             dots: true,
    //             infinite: true,
                
    //         }
    //     }, {
    //         breakpoint: 480,
    //         settings: {
    //             slidesToShow: 1,
    //             slidesToScroll: 1,
    //             dots: true,
    //             infinite: true,
    //             autoplay: true,
    //             autoplaySpeed: 2000,
    //         }
    //     }]
    // });

}