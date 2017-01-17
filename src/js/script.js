$(document).ready(function() {


	// hamburger menu

	$('.hamburger').on('click', function() {
		$('.menu').toggleClass('js-open');
		$('.hamburger__icon').toggleClass("js-icon--color");
	});

	// change header's background-color after scroll

	$(window).scroll(function() {

		var scroll = $(window).scrollTop();
		var $pageHead = $('.page-header'); 

		if(scroll >= 500) {
			$pageHead.addClass('js-scrolling');
		} else {
			$pageHead.removeClass('js-scrolling');
		}
	});

	// add class active after sclick

	$('.menu li a').on('click', function(e) {
		
		$('.js-active-link').removeClass('js-active-link');
		$(this).addClass('js-active-link');

		$('.menu').toggleClass('js-open');	

		e.preventDefault();
	});

	// smooth scrolling

	$('.menu a').on('click', function(e) {
		var $headerHeight = $('.page-header').outerHeight();
		var $linkHref = $(this).attr('href');
		var $window = $(window);

		$('html, body').animate({
			scrollTop: $($linkHref).offset().top - $headerHeight
		}, 1000, function () {
			window.location.hash = $linkHref;
		});
		return false;
		e.preventDefault();
		$window.trigger('scroll');

	});


	// "read more" function

	$('.js-paragraph--hide').addClass('js-hide');

	$('.about-us__btn').on('click', function() {

		var $this = $(this);
		var $showPar = $('.js-paragraph--show');
		var $hidePar = $('.js-paragraph--hide');

		if($(this).text() === 'read more') {
			$(this).text('back');
			$showPar.addClass('js-hide');
			$hidePar.removeClass('js-hide');
		} else {
			$(this).text('read more');
			$hidePar.addClass('js-hide');
			$showPar.removeClass('js-hide');
		}
	});


	// slider

	$('.slider').each(function() {
	  var $this = $(this);
	  var $group = $this.find('.slider__group');
	  var $slides = $group.find('.slider__item');
	  
	//   przyciski
	  var buttonArray = [];
	  var currentIndex = 0;
	//   zmienna do przechowywania licznika
	  var timeout; 
	  
	//   funkcja move
	  
	  function move(newIndex) {
	    var animateLeft, slideLeft;
	    
	    advance();
	    
	    if ($group.is(':animated') || currentIndex === newIndex) {
	      return;
	    }
	    
	    buttonArray[currentIndex].removeClass('active');
	    buttonArray[newIndex].addClass('active');
	    
	    if (newIndex > currentIndex) {
	      slideLeft = '100%';
	      animateLeft = '-100%';
	    } else {
	      slideLeft = '-100%';
	      animateLeft = '100%';
	    }
	    
	    $slides.eq(newIndex).css({left: slideLeft, display: 'block'});
	    $group.animate({left: animateLeft}, function() {
	      $slides.eq(currentIndex).css({display: 'none'});
	      $slides.eq(newIndex).css({left: 0});
	      
	      $group.css({left: 0});
	      currentIndex = newIndex;
	    });
	  }
	  
	  
	  function advance() {
	    clearTimeout(timeout);
	    
	    timeout = setTimeout(function() {
	      if (currentIndex < ($slides.length - 1)) {
	        move(currentIndex + 1);
	      } else {
	        move(0);
	      }
	    }, 4000);
	  }
	  
	  $slides.each(function(index) {
	    var $button = $('<button type="button" class="slider__bullet"></button>');
	    if (index === currentIndex) {
	      $button.addClass('active');
	    }
	    $button.on('click', function() {
	      move(index);
	    }).appendTo('.slider__bullets');
	    buttonArray.push($button);
	  });
	  
	  advance();
	});

	

	// gallery

	$('.portfolio__item').on('click', function() {

		var $portfolioItem = $(this).attr('id');
		var $galleryItem = $('.gallery__item');
		var currentIndex = 0;

		if($portfolioItem == 'all') {
			$galleryItem.addClass('js-inactive');
			setTimeout(function() {
				$galleryItem.removeClass('js-inactive');
			}, 500);
		} else {
			$galleryItem.addClass('js-inactive');
			setTimeout(function() {
				$('.' + $portfolioItem).removeClass('js-inactive');
			}, 500);
		}

	});

	$('.portfolio__item').on('click', function() {

		$('.js-active').removeClass('js-active');
		$(this).addClass('js-active');
	});


});
