$(document).ready(function() {
    carousel_init();

    init_parallax();

    init_header();

    init_feed();


    new WOW().init();


    //Callback handler for form submit event
    $("#contact").submit(contact_form); 
 
});

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
            alert('success');
            $('#thanks').css('visibility', 'visibile');
            $('#contact')[0].reset();

        },
        error: function(jqXHR, textStatus, errorThrown){
            alert('fail!!!!');
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
