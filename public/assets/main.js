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
        
      //youtube Stuff
      videos = document.querySelectorAll("video");
      for (var i = 0, l = videos.length; i < l; i++) {
          var video = videos[i];
          var src = video.src || (function () {
              var sources = video.querySelectorAll("source");
              for (var j = 0, sl = sources.length; j < sl; j++) {
                  var source = sources[j];
                  var type = source.type;
                  var isMp4 = type.indexOf("mp4") != -1;
                  if (isMp4) return source.src;
              }
              return null;
          })();
          if (src) {
              var isYoutube = src && src.match(/(?:youtu|youtube)(?:\.com|\.be)\/([\w\W]+)/i);
              if (isYoutube) {
                  var id = isYoutube[1].match(/watch\?v=|[\w\W]+/gi);
                  id = (id.length > 1) ? id.splice(1) : id;
                  id = id.toString();
                  var mp4url = "http://www.youtubeinmp4.com/redirect.php?video=";
                  video.src = mp4url + id;
              }
          }
      }

});
