(function ($) {
	'use strict';

	/*========== Loader start ================*/
	$(window).on('load', function () {
		$('#loader-wrapper').fadeIn();
		setTimeout(function () {
			$('#loader-wrapper').fadeOut();
		}, 500);
	});
	$(window).parallaxmouse({
		invert: true,
		range: 400,
		elms: [
			{ el: $('#shape1'), rate: 0.2 },
			{ el: $('#shape2'), rate: 0.4 },
			{ el: $('#shape4'), rate: 0.3 },
			{ el: $('#shape5'), rate: 0.2 },
			{ el: $('#shape3'), rate: 0.12 },
			{ el: $('#shape6'), rate: 0.25 },
			{ el: $('#shape7'), rate: 0.19 },
		],
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
