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

		$('.popup-sale').bPopup({
			modalColor: '#6d6d8c',
			opacity: 0.4
		});
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
		var miniOffset = $(this).attr('href') == '#restr' ? 35 : 64;
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
			modalColor: '#6d6d8c',
			opacity: 0.4,
			onOpen: function onOpen() {
				content.html(self.attr('data-bpopup'));
			},
			onClose: function onClose() {
				content.empty();
			}
		});
	});

	// readmore popup
	$('.js-readmore').click(function (e) {
		e.preventDefault();

		$('.popup-read-more').bPopup({
			modalColor: '#6d6d8c',
			opacity: 0.4
		});
	});

	// owl carousel
	// $('.owl-carousel:not(.carousel-massmedia):not(.carousel-testimonials):not(.owl-news):not(.owl-media):not(.owl-partners)').owlCarousel({
	// 	responsive: {
	// 		320: {
	// 			items: 2
	// 		},
	// 		768: {
	// 			items: 3
	// 		},
	// 		991: {
	// 			items: 4
	// 		},
	// 		1199: {
	// 			items: 6
	// 		}
	// 	}
	// });

	// carousel-listing
	$('.owl-intro').owlCarousel({
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

	// partners carousel
	$('.owl-partners').owlCarousel({
		// autoWidth: true,
		items: 1,
		dotsData: true,
		dots: true
	});

	// news carousel
	$('.owl-news').owlCarousel({
		margin: 20,
		nav: true,
		navText: ['', ''],
		stagePadding: 10,
		responsive: {
			320: {
				stagePadding: 20,
				items: 1
			},
			768: {
				stagePadding: 10,
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
		nav: true,
		navText: ['', ''],
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
				items: 5
			}
		}
	});

	// smooth scroll
	$('.header ul li a.anchor').click(function (e) {
		e.preventDefault();

		var miniOffset = $(this).attr('href') == '#restr' ? 35 : 64;
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

	// scheme tabs
	$('.js-schemeTabs a:not(.whitepaper)').click(function (e) {
		e.preventDefault();

		$('.js-schemeTabs a').removeClass('active');
		$(this).addClass('active');
		$('.scheme-tab').removeClass('active');
		$($(this).attr('href')).addClass('active');
	});

	if ($(window).scrollTop() > 10) {
		$('.wr-header').addClass('background');
	} else {
		$('.wr-header').removeClass('background');
	}

	if ($('a.btn, a.btn-gradient, a.btn-transparent').hasClass('js-scrollTo')) {
		$('.js-scrollTo').click(function (e) {
			e.preventDefault();

			var miniOffset = $(this).attr('href') == '#restr' ? 35 : 64;
			$('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top - miniOffset }, 1000);
		});
	}

	// partners item width on mobile
	if ($(window).width() < 768) {
		$('.wr-partners .partners-item').css('width', $(window).width() - 30);
	} else {
		$('.wr-partners .partners-item').css('width', '');
	}

	// intro animation
	if ($('.intro').hasClass('js-scrollAnimate')) {
		$('.intro.js-scrollAnimate').removeClass('animate js-scrollAnimate');
	}
});

$(window).resize(function () {
	if ($(window).width() < 768) {
		$('.wr-partners .partners-item').css('width', $(window).width() - 30);
	} else {
		$('.wr-partners .partners-item').css('width', '');
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
	$('.js-scrollAnimate:not(.intro)').each(function () {
		var coeff = windowOffset - $(this).offset().top + windowH * 85 / 100;
		if (coeff >= 0) {
			$(this).removeClass('animate js-scrollAnimate');
		}
	});

	if (windowTopScroll > 10) {
		$('.wr-header').addClass('background');
	} else {
		$('.wr-header').removeClass('background');
	}

	// hovered team card
	$('.js-teamHover article header').hover(function () {
		$(this).parent().addClass("hovered");
	}, function () {
		$(this).parent().removeClass("hovered");
	});
}).scroll();

$(document).mouseup(function (e) {
	var menudropdown = $('.js-menu-language');
	if (menudropdown.has(e.target).length === 0 && !menudropdown.is(e.target) && menudropdown.next().has(e.target).length === 0 && !menudropdown.next().is(e.target)) {
		menudropdown.removeClass('active').next().slideUp();
	}
});

/* ---- particles.js config ---- */

particlesJS("ico-particles", {
	"particles": {
		"number": {
			"value": 100,
			"density": {
				"enable": false
			}
		},
		"color": {
			"value": "#ffffff"
		},
		"shape": {
			"type": "circle",
			"stroke": {
				"width": 0,
				"color": "#000000"
			},
			"polygon": {
				"nb_sides": 5
			},
			"image": {
				"src": "img/github.svg",
				"width": 100,
				"height": 100
			}
		},
		"opacity": {
			"value": 0.5,
			"random": false,
			"anim": {
				"enable": false,
				"speed": 1,
				"opacity_min": 0.1,
				"sync": false
			}
		},
		"size": {
			"value": 3,
			"random": true,
			"anim": {
				"enable": false,
				"speed": 40,
				"size_min": 0.1,
				"sync": false
			}
		},
		"line_linked": {
			"enable": true,
			"distance": 150,
			"color": "#ffffff",
			"opacity": 0.4,
			"width": 1
		},
		"move": {
			"enable": true,
			"speed": 4,
			"direction": "none",
			"random": false,
			"straight": false,
			"out_mode": "out",
			"bounce": false,
			"attract": {
				"enable": false,
				"rotateX": 600,
				"rotateY": 1200
			}
		}
	},
	"interactivity": {
		"detect_on": "canvas",
		"events": {
			"onhover": {
				"enable": false,
				"mode": "repulse"
			},
			"onclick": {
				"enable": false,
				"mode": "push"
			},
			"resize": true
		},
		"modes": {
			"grab": {
				"distance": 400,
				"line_linked": {
					"opacity": 1
				}
			},
			"bubble": {
				"distance": 400,
				"size": 40,
				"duration": 2,
				"opacity": 8,
				"speed": 3
			},
			"repulse": {
				"distance": 200,
				"duration": 0.4
			},
			"push": {
				"particles_nb": 4
			},
			"remove": {
				"particles_nb": 2
			}
		}
	},
	"retina_detect": true
});
particlesJS("subscribe-particles", {
	"particles": {
		"number": {
			"value": 50,
			"density": {
				"enable": false
			}
		},
		"color": {
			"value": "#ffffff"
		},
		"shape": {
			"type": "circle",
			"stroke": {
				"width": 0,
				"color": "#000000"
			},
			"polygon": {
				"nb_sides": 5
			}
		},
		"opacity": {
			"value": 0.5,
			"random": false,
			"anim": {
				"enable": false,
				"speed": 1,
				"opacity_min": 0.1,
				"sync": false
			}
		},
		"size": {
			"value": 3,
			"random": true,
			"anim": {
				"enable": false,
				"speed": 40,
				"size_min": 0.1,
				"sync": false
			}
		},
		"line_linked": {
			"enable": true,
			"distance": 150,
			"color": "#ffffff",
			"opacity": 0.4,
			"width": 1
		},
		"move": {
			"enable": true,
			"speed": 4,
			"direction": "none",
			"random": false,
			"straight": false,
			"out_mode": "out",
			"bounce": false,
			"attract": {
				"enable": false,
				"rotateX": 600,
				"rotateY": 1200
			}
		}
	},
	"interactivity": {
		"detect_on": "canvas",
		"events": {
			"onhover": {
				"enable": false,
				"mode": "repulse"
			},
			"onclick": {
				"enable": false,
				"mode": "push"
			},
			"resize": true
		},
		"modes": {
			"grab": {
				"distance": 400,
				"line_linked": {
					"opacity": 1
				}
			},
			"bubble": {
				"distance": 400,
				"size": 40,
				"duration": 2,
				"opacity": 8,
				"speed": 3
			},
			"repulse": {
				"distance": 200,
				"duration": 0.4
			},
			"push": {
				"particles_nb": 4
			},
			"remove": {
				"particles_nb": 2
			}
		}
	},
	"retina_detect": true
});