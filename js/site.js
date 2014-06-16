var Site = {
	init: function() {
		emojify.setConfig({
			img_dir: '../../images/emoji'
		});
		emojify.run();
	},
	home: function() {

		// work in progress
		emojify.setConfig({
			img_dir: 'images/emoji'
		});
		emojify.run();

		var projectsLoop = setInterval(function() {
			if ( $('.work-item.active').next().is('article') ) {
				$('.work-item.active').removeClass('active').next().addClass('active');	
			} else {
				$('.work-item.active').removeClass('active');
				$('.work-item:nth-child(1)').addClass('active');
			}
		}, 300);


		$('.work-item li').on({
			mouseenter: function() {
				clearInterval(projectsLoop);	
			},
			mouseleave: function() {
				if ( $('.work-item.active').next().is('article') ) {
					$('.work-item.active').removeClass('active').next().addClass('active');	
				} else {
					$('.work-item.active').removeClass('active');
					$('.work-item:nth-child(1)').addClass('active');
				}
				projectsLoop = setInterval(function() {
					if ( $('.work-item.active').next().is('article') ) {
						$('.work-item.active').removeClass('active').next().addClass('active');	
					} else {
						$('.work-item.active').removeClass('active');
						$('.work-item:nth-child(1)').addClass('active');
					}
				}, 300);
			}
		});
	}
}

$(document).ready(function() {
	if ( $('body').hasClass('home') ) { Site.home(); }
	Site.init();
	
})