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


$(function() {
        var selectedClass = "";
        $(".filter").click(function(){
            selectedClass = $(this).attr("data-rel");
            $("#gallery").fadeTo(100, 0.1);
            $("#gallery div").not("."+selectedClass).fadeOut().removeClass('animation');
                        setTimeout(function() {
                                $("."+selectedClass).fadeIn().addClass('animation');
                                $("#gallery").fadeTo(300, 1);
                        }, 300);
                });
});
