$(document).ready(function(){
    //init wow js
    wow = new WOW({
      animateClass: 'animated',
      offset: 100
    });
    wow.init();

    //configured carousel interval time
     $("#myCarousel").carousel({
         interval : 4000,
         pause: false
     });

    //contact form validations
     $('#characterLeft').text('500 characters left');
     $('#message').keydown(function () {
       var max = 500;
       var len = $(this).val().length;
       if (len >= max) {
           $('#characterLeft').text('You have reached the limit');
           $('#characterLeft').addClass('red');
           $('#btnSubmit').addClass('disabled');
       }
       else {
           var ch = max - len;
           $('#characterLeft').text(ch + ' characters left');
           $('#btnSubmit').removeClass('disabled');
           $('#characterLeft').removeClass('red');
       }
     });

     //Gallery Stuff
     //Handles the carousel thumbnails
        $('[id^=carousel-selector-]').click(function () {
        var id_selector = $(this).attr("id");
        try {
            var id = /-(\d+)$/.exec(id_selector)[1];
            console.log(id_selector, id);
            jQuery('#myCarousel').carousel(parseInt(id));
        } catch (e) {
            console.log('Regex failed!', e);
        }
    });
        // When the carousel slides, auto update the text
        $('#myCarousel').on('slid.bs.carousel', function (e) {
                 var id = $('.item.active').data('slide-number');
                $('#carousel-text').html($('#slide-content-'+id).html());
        });
    
});
