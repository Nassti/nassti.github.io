jQuery(document).ready(function() {

	$(window).scroll(function() {

		if($(this).scrollTop() != 0) {

			$('#scrollUp').fadeIn();

		} else {

			$('#scrollUp').fadeOut();

		}

	});

	$('#scrollUp').click(function() {

		$('body,html').animate({scrollTop:0},900);


	});


	$('.check-search').click(function(e) {
		$('.search-form').toggleClass('activeCheckedSearch');

		e.preventDefault();
	});
});