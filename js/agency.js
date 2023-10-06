(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 56
  });

var contentWayPoint = function() {
  		var i = 0;
  		$('.animate-box').waypoint( function( direction ) {

  			if( direction === 'down' && !$(this.element).hasClass('animated-fast') ) {

  				i++;

  				$(this.element).addClass('item-animate');
  				setTimeout(function(){

  					$('body .animate-box.item-animate').each(function(k){
  						var el = $(this);
  						setTimeout( function () {
  							var effect = el.data('animate-effect');
  							if ( effect === 'fadeIn') {
  								el.addClass('fadeIn animated-fast');
  							} else if ( effect === 'fadeInLeft') {
  								el.addClass('fadeInLeft animated-fast');
  							} else if ( effect === 'fadeInRight') {
  								el.addClass('fadeInRight animated-fast');
  							} else {
  								el.addClass('fadeInUp animated-fast');
  							}

  							el.removeClass('item-animate');
  						},  k * 100, 'easeInOutExpo' );
  					});

  				}, 50);

  			}

  		} , { offset: '85%' } );
  	};


  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Hide navbar when modals trigger
  $('.portfolio-modal').on('show.bs.modal', function(e) {
    $(".navbar").addClass("d-none");
  })
  $('.portfolio-modal').on('hidden.bs.modal', function(e) {
    $(".navbar").removeClass("d-none");
  })

})(jQuery); // End of use strict
