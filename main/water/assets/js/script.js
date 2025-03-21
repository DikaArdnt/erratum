(function ($) {
	'use strict';

	/*========== Loader start ================*/
	$(window).on('load', function () {
		$('#loader-wrapper').fadeIn();
		setTimeout(function () {
			$('#loader-wrapper').fadeOut();
		}, 500);
	});
	/*========== water js start ================*/
	$(document).ready(function () {
		try {
			$('body').ripples({
				resolution: 512,
				dropRadius: 20, //px
				perturbance: 0.01,
			});
			$('.main').ripples({
				resolution: 512,
				dropRadius: 20, //px
				perturbance: 0.04,
				interactive: false,
			});
		} catch (e) {
			$('.error').show().text(e);
		}

		$('.js-ripples-disable').on('click', function () {
			$('body, .main').ripples('destroy');
			$(this).hide();
		});

		$('.js-ripples-play').on('click', function () {
			$('body, .main').ripples('play');
		});

		$('.js-ripples-pause').on('click', function () {
			$('body, .main').ripples('pause');
		});

		// Automatic drops
		setInterval(function () {
			var $el = $('.main');
			var x = Math.random() * $el.outerWidth();
			var y = Math.random() * $el.outerHeight();
			var dropRadius = 20;
			var strength = 0.04 + Math.random() * 0.04;

			$el.ripples('drop', x, y, dropRadius, strength);
		}, 600);
	});
	// Password input
	$('.toggle-password').on('click', function () {
		$(this).toggleClass('fa-eye fa-eye-slash');
		var input = $($(this).attr('data-toggle'));
		if (input.attr('type') == 'password') {
			input.attr('type', 'text');
		} else {
			input.attr('type', 'password');
		}
	});
})(jQuery);
