jQuery(document).ready(function() {
        // Transition effect for navbar 
        jQuery(window).scroll(function() {
          // checks if window is scrolled more than 500px, adds/removes solid class
          if(jQuery(this).scrollTop() > 150) { 
              jQuery('.navbar').addClass('solid');
          } else {
              jQuery('.navbar').removeClass('solid');
          }
        });
});
