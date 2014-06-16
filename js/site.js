var Site = {
	init: function() {
		// $('marquee').marquee();
		$(window).resize(function() { 
			// marquee();
		});
	},
	home: function() {

		// work in progress
		emojify.run();

		$('.work-item a').click(function(e) {
			e.preventDefault();
		});

		setInterval(function() {
			if ( $('.work-item.active').next().is('article') ) {
				$('.work-item.active').removeClass('active').next().addClass('active');	
			} else {
				$('.work-item.active').removeClass('active');
				$('.work-item:nth-child(1)').addClass('active');
			}
		}, 200);
	}
}

$(document).ready(function() {
	Site.init();
	if ( $('body').hasClass('home') ) { Site.home(); }
})