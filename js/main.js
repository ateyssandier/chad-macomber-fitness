$(document).ready(function() {
    carousel_init();
 
});

function carousel_init() {
  $("#header-carousel").owlCarousel(
    {
      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true,
      autoPlay : 5000,
      stopOnHover : true,
 
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
    });

}