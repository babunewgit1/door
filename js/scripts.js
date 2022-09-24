(function($){
	$(document).ready(function() {	

		// Scroll to Top
		jQuery('.scrolltotop').click(function(){
			jQuery('html').animate({'scrollTop' : '0px'}, 400);
			return false;
		});
		
		jQuery(window).scroll(function(){
			var upto = jQuery(window).scrollTop();
			if(upto > 500) {
				jQuery('.scrolltotop').fadeIn();
			} else {
				jQuery('.scrolltotop').fadeOut();
			}
		});


		//search-icon

		jQuery(".search-icon a").click(function () {
			jQuery(".search-box-item").show("show-src")
		});

		jQuery(".search-box-content span").click(function () {
			jQuery(".search-box-item").hide("hide-src")
		});


		 //jquery for toggle sub menus
		 $('.sub-btn').click(function(){
			$(this).next('.sub-menu').slideToggle();
			
		  });
	 
		
	 

				
		
		
		
		
		
		
		
		
	});
})(jQuery);