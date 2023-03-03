(function($) {

    // AOS INIT
    AOS.init({
        offset: 20,  
    });

      /*═════HEADER SCRIPTS═════*/
        $(".nav-toggle-btn").on("click", function() { 
            var ToggleWrap = $(this).data('toggle');
            $(ToggleWrap).slideToggle("fast");
            $(this).toggleClass('open');
        });
        $(window).on('resize', function() {
            var WinWidth = $(this).width();
            $(".nav-toggle-btn").removeClass('open');
            $('.nav-toggle-btn').each(function() {
                var ToggleWrap = $(this).data('toggle');
                if (WinWidth < 991) {
                    $(ToggleWrap).css('display', 'none');
                    $('.navbar-nav ul').css('display', 'none');
                } else {
                    $(ToggleWrap).css('display', '');
                    $('.navbar-nav ul').css('display', '');
                }
            });
        });

        $('.header-area .navbar-nav ul').each(function(){
            var HasDropDown = $(this).parent('li');
            if ($(this).find('.dropdown-arrow').length === 0){
                HasDropDown.append('<button class="dropdown-btn"></button>');
            }
        });

      $('.navbar-nav .dropdown-btn').on("click", function() {
          var dropDown = $(this).parent('li').children('ul');
          dropDown.slideToggle("fast");
          $(this).toggleClass('active-dropdown');
      });

      $('.toggle-search').on('click', function(){
          $('.search-wrapper').slideToggle('fast')
      });

})(jQuery); 