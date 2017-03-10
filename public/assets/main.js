$(document).ready(function(){
    //init wow js
    wow = new WOW({
      animateClass: 'animated',
      offset: 100
    });
    wow.init();

    //configured carousel interval time
     $("#myCarousel").carousel({
         interval : 2000,
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

});
