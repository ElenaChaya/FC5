;

$(document).ready(function() {
	$('.js-price__slider').slick({
	  speed: 300,
	  slidesToShow: 3,
	  slidesToScroll: 0,
	  responsive: [
	    {
	      breakpoint: 1240,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 1,
	        infinite: true,
	        nextArrow: '.price-slider-next',
			prevArrow: '.price-slider-prev',
	      }
	    },
	    {
	      breakpoint: 950,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1,
	        nextArrow: '.price-slider-next',
			prevArrow: '.price-slider-prev',
	      }
	    }
	  ]
	});




	$('.js-review__slider').slick({
		dots: true,
		nextArrow: '.review-slider__next',
		prevArrow: '.review-slider__prev',
		responsive: [
	    {
	      breakpoint: 1150,
	      settings: {
      	  	arrows:false
	      }
	    }
	  ]
	});


	$('.nav-mobile').click(function(){
		$(this).toggleClass('active');
		$('.main-nav__list').toggleClass('mobile-show');
	});
		 

	$('.js-doing-icons').slick({
	  speed: 300,
	  slidesToShow: 5,
	  slidesToScroll: 1,
	  responsive: [
	    {
	      breakpoint: 950,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 1,
	        infinite: false
	      }
	    },
	    {
	      breakpoint: 650,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 1,
	        infinite: false
	      }
	    },
	    {
	      breakpoint: 500,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1,
	        infinite: false
	      }
	    }
	  ]
	}); 
});