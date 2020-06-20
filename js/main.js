jQuery(document).ready(function($){
	
	/* responsive menu */
	$("#cssmenu").menumaker({
		title: "Menu",
		format: "Multitoggle",
	});
	
	
	/* owl-carousel */
	$("").owlCarousel({
		items: ,
		loop:true,
		nav:false,
		dots:false,
	});
	
	
	/* responsive owl-carousel */
	$("").owlCarousel({
			items: ,
			loop: true,
			nav:false,
			dots: false,
			autoplay: false,
			responsiveClass:true,
				responsive:{
					0:{
						items:1,
					},
					600:{
						items:3,
					},
					1000:{
						items:3,
					}
				}
		});

});