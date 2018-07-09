"use strict";

$.fn.reverse = [].reverse;

$(document).ready(function () {
	// countdown
	var contdate1 = $('#js-countdown-1').attr('data-countdowndate'),
	    contdate1D = $('#js-countdown-1').attr('data-days'),
	    contdate1H = $('#js-countdown-1').attr('data-hours'),
	    contdate1M = $('#js-countdown-1').attr('data-minutes'),
	    contdate1S = $('#js-countdown-1').attr('data-seconds'),
	    contdate2 = $('#js-countdown-2').attr('data-countdowndate'),
	    contdate2D = $('#js-countdown-2').attr('data-days'),
	    contdate2H = $('#js-countdown-2').attr('data-hours'),
	    contdate2M = $('#js-countdown-2').attr('data-minutes'),
	    contdate2S = $('#js-countdown-2').attr('data-seconds');

	var tz1 = moment.tz(contdate1, "Europe/Moscow");
	var tz2 = moment.tz(contdate2, "Europe/Moscow");
	$('#js-countdown-1').countdown(tz1.toDate(), function (event) {
		var $this = $(this).html(event.strftime('' + '<div>' + '<p>%D</p><span>' + contdate1D + '</span>' + '</div>' + '<div>' + '<p>%H</p><span>' + contdate1H + '</span>' + '</div>' + '<div>' + '<p>%M</p><span>' + contdate1M + '</span>' + '</div>' + '<div>' + '<p>%S</p><span>' + contdate1S + '</span>' + '</div>'));
	});
	$('#js-countdown-2').countdown(tz2.toDate(), function (event) {
		var $this = $(this).html(event.strftime('' + '<div>' + '<p>%D</p><span>' + contdate2D + '</span>' + '</div>' + '<div>' + '<p>%H</p><span>' + contdate2H + '</span>' + '</div>' + '<div>' + '<p>%M</p><span>' + contdate2M + '</span>' + '</div>' + '<div>' + '<p>%S</p><span>' + contdate2S + '</span>' + '</div>'));
	});

	// menu language
	$('.js-menu-language').click(function (e) {
		e.preventDefault();

		$(this).toggleClass('active').next().slideToggle();
	});

	// sale popup
	$('.js-salePopup').click(function (e) {
		e.preventDefault();

		$('.popup-sale').bPopup();
	});

	// mobile burger
	$('.js-burger').click(function (e) {
		e.preventDefault();

		$(this).toggleClass('active');
		$('.mobile-menu').toggleClass('active');
	});
	$('.mobile-menu a.anchor').click(function (e) {
		e.preventDefault();

		$('.js-burger').toggleClass('active');
		$('.mobile-menu').toggleClass('active');
		var miniOffset = $(this).attr('href') == '#restr' ? 35 : 0;
		$('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top - miniOffset }, 1000);

		return false;
	});

	// infrastructure scaling
	$('.js-infra-scale').click(function (e) {
		e.preventDefault();

		$('.infrastructure').toggleClass('full');
	});

	// video popup
	var content = $('.popup-video .content');

	$('.js-videoPopup').click(function (e) {
		e.preventDefault();

		var self = $(this);

		$('.popup-video').bPopup({
			onOpen: function onOpen() {
				content.html(self.attr('data-bpopup'));
			},
			onClose: function onClose() {
				content.empty();
			}
		});
	});

	// owl carousel
	$('.owl-carousel:not(.carousel-massmedia, .carousel-testimonials, .owl-news, .owl-media)').owlCarousel({
		responsive: {
			320: {
				items: 2
			},
			768: {
				items: 3
			},
			991: {
				items: 4
			},
			1199: {
				items: 6
			}
		}
	});

	// news carousel
	$('.owl-news').owlCarousel({
		margin: 20,
		responsive: {
			320: {
				items: 1
			},
			768: {
				items: 2
			},
			991: {
				items: 3
			},
			1199: {
				items: 4
			}
		}
	});

	// testimonials carousel
	$('.carousel-testimonials').owlCarousel({
		margin: 20,
		dots: true,
		responsive: {
			320: {
				items: 1
			},
			768: {
				items: 2
			},
			991: {
				items: 3
			}
		}
	});

	// media carousel
	$('.owl-media').owlCarousel({
		margin: 20,
		responsive: {
			420: {
				items: 2
			},
			768: {
				items: 3
			},
			991: {
				items: 4
			},
			1199: {
				items: 5
			}
		}
	});

	// video carousel
	// $('.carousel-massmedia').owlCarousel({
	// 	dots: true,
	// 	nav: true,
	// 	navText: ['<img src="assets/img/carousel-prev.svg"/>', '<img src="assets/img/carousel-next.svg"/>'],
	// 	margin: 20,
	// 	responsive: {
	// 		320: {
	// 			items: 1
	// 		},
	// 		768: {
	// 			items: 2
	// 		},
	// 		991: {
	// 			items: 3
	// 		}
	// 	}
	// });

	// smooth scroll
	$('.header ul li a.anchor').click(function (e) {
		e.preventDefault();

		var miniOffset = $(this).attr('href') == '#restr' ? 35 : 0;
		$('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top - miniOffset }, 500);

		return false;
	});

	if (window.location.hash != '' && $(window.location.hash).length) {
		$('html, body').animate({ scrollTop: $(window.location.hash).offset().top }, 500);
	}

	var scrollAnimate = $('.js-scrollAnimate'),
	    windowOffset = $(window).scrollTop(),
	    windowH = $(window).height();
	$('.js-scrollAnimate').each(function () {
		var coeff = windowOffset - $(this).offset().top + windowH * 9 / 10;
		if (coeff >= 0) {
			$(this).removeClass('animate js-scrollAnimate');
		}
	});

	// scroll to top
	$('.to-top').click(function (e) {
		e.preventDefault();

		$('html, body').animate({ scrollTop: 0 }, 500);
	});

	// to top hide/show
	var introScreenHeight = $('.wr-intro').outerHeight(),
	    windowHeight = $(window).height(),
	    windowTopScroll = $(window).scrollTop();
	if (windowTopScroll > introScreenHeight - windowHeight / 2) {
		$('.to-top').addClass('visible');
	} else {
		$('.to-top').removeClass('visible');
	}
});

$(window).scroll(function () {

	// to top hide/show
	var introScreenHeight = $('.wr-intro').outerHeight(),
	    windowHeight = $(window).height(),
	    windowTopScroll = $(window).scrollTop();
	if (windowTopScroll > introScreenHeight - windowHeight / 2) {
		$('.to-top').addClass('visible');
	} else {
		$('.to-top').removeClass('visible');
	}

	$('.header ul li').removeClass('active');
	$('.header ul li a.anchor').reverse().each(function () {
		if ($($(this).attr('href')).offset().top < $(window).scrollTop() + 10) {
			$(this).parent().addClass('active');
			return false;
		}
	});

	var scrollAnimate = $('.js-scrollAnimate'),
	    windowOffset = $(window).scrollTop(),
	    windowH = $(window).height();
	$('.js-scrollAnimate').each(function () {
		var coeff = windowOffset - $(this).offset().top + windowH * 9 / 10;
		if (coeff >= 0) {
			$(this).removeClass('animate js-scrollAnimate');
		}
	});
}).scroll();

$(document).mouseup(function (e) {
	var menudropdown = $('.js-menu-language');
	if (menudropdown.has(e.target).length === 0 && !menudropdown.is(e.target) && menudropdown.next().has(e.target).length === 0 && !menudropdown.next().is(e.target)) {
		menudropdown.removeClass('active').next().slideUp();
	}
});