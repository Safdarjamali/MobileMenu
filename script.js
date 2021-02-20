(function($) {

  $.fn.menumaker = function(options) {
      
      var cssmenu = $(this), settings = $.extend({
        title: "Menu",
        format: "dropdown",
        sticky: false
      }, options);

      return this.each(function() {
        cssmenu.prepend('<div id="menu-button">' + settings.title + '</div>');
        $(this).find("#menu-button").on('click', function(){
          $(this).toggleClass('menu-opened');
          var mainmenu = $(this).next('ul');
          if (mainmenu.hasClass('open')) { 
          
			mainmenu.slideToggle().removeClass('open');
          }
          else {
            mainmenu.show().addClass('open');
            if (settings.format === "dropdown") {
              mainmenu.find('ul').show();
            }
          }
        });
 cssmenu.find('li ul').parent().addClass('has-sub');
		

       
		
      multiTg = function() {
          cssmenu.find(".has-sub").prepend('<span class="submenu-button"></span>')
              .on("click", function (e) {
                e.stopPropagation();
                var submenuButton = $(this).find("span:first");
                submenuButton.toggleClass('submenu-opened');
                if (submenuButton.siblings('ul').hasClass('open')) {
                    submenuButton.siblings('ul').removeClass('open').hide();
                } else {
                    submenuButton.siblings('ul').addClass('open').show();
					      };
              });
		
         
        };


		

        if (settings.format === 'multitoggle') multiTg();
        else cssmenu.addClass('dropdown');

        if (settings.sticky === true) cssmenu.css('position', 'fixed');

        resizeFix = function() {
          if ($( window ).width() > 768) {
            cssmenu.find('ul').show();
          }

          if ($(window).width() <= 768) {
            cssmenu.find('ul').hide().removeClass('open');
          }
        };
        resizeFix();
        return $(window).on('resize', resizeFix);

      });
  };
  
  
})(jQuery);


(function($){
$(document).ready(function(){

$("#cssmenu").menumaker({
   title: "Sufi",
   format: "multitoggle"
});

});
})(jQuery);

