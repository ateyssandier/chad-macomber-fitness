$(document).ready(function() {
    var testimonialCount, currentItem;
    carousel_init();

    init_parallax();

    init_header();

    init_feed();

    init_testimonials();

    init_placeholder();


    new WOW({'mobile': false}).init();

    //Callback handler for form submit event
    $("#contact").submit(contact_form);

    $(window).on("hashchange", function () {
        window.scrollTo(window.scrollX, window.scrollY - 100);
    });
 
});

function init_placeholder(){
    $('input:text, textarea').each(function(){
    var $this = $(this);
    $this.data('placeholder', $this.attr('placeholder'))
         .focus(function(){$this.removeAttr('placeholder');})
         .blur(function(){$this.attr('placeholder', $this.data('placeholder'));});
    });
}

function init_testimonials(){
    $('.testimonial').hide();
    testimonialCount = $('.testimonial').length;
    currentItem = 0;

    switchDiv = function() {
        if (currentItem == testimonialCount - 1) {   
            $('.testimonial').eq(testimonialCount - 1).hide();
            currentItem = 0;
            $('.testimonial').eq(0).fadeIn();
        }
        else {        
            $('.testimonial').eq(currentItem).hide();
            currentItem = currentItem + 1;
            $('.testimonial').eq(currentItem).fadeIn();
        }        
    }

    setInterval("switchDiv()", 2000);
}

function contact_form(e){
    var formObj = $(this);
    var formURL = formObj.attr("action");

    var formData = {
        'name'    : $('input[name=name]').val(),
        'email'   : $('input[name=email]').val(),
        'phone'   : $('input[name=phone]').val(),
        'message'   : $('textarea[name=message]').val()
    };

    $.ajax({
        url: formURL,
        type: 'POST',
        data:  formData,
        dataType: 'json',
        encode: true,
        success: function(data, textStatus, jqXHR){
            $('#thanks').html('thank you for your submission!');
            $('#thanks').css('visibility', 'visible');
            $('#contact')[0].reset();

        },
        error: function(jqXHR, textStatus, errorThrown){
            $('#thanks').html('there was an error processing your request');
            $('#thanks').css('visibility', 'visible');
        }          
        });
    e.preventDefault(); //Prevent Default action. 
}

function init_feed(){
    jQuery.getFeed({
            url: 'http://blog.alexteyssandier.com/rss.xml',
            success: function(feed) {
                var posts = feed.items;
                var post_classes = ['first', 'second', 'third'];
                for(var i=0; i<3; i++){
                    var post = posts[i];
                    var title = post.title;
                    var description  = $.parseHTML( post.description );
                    var link = post.link;
                    var date = post.updated;
                    var image = $(description).find('img').attr('src');

                    var d=Date.parse(date);
                    
                    $('.posts').find('.'+post_classes[i]).find('.date').find('span').text(d.toString('MMMM d, yyyy'));
                    $('.posts').find('.'+post_classes[i]).find('.caption').find('span').text(title);
                    $('.posts').find('.'+post_classes[i]).find('.caption').find('a').attr('href', link);

                    if (image != undefined){
                        $('.posts').find('.'+post_classes[i]).find('.square').css('background-image', 'url(' + image + ')');                        
                    }

                    
                }
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
