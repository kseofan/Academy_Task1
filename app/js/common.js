// $(function() {

// 	// Custom JS

// });
$(document).ready(function() {
  	// burger
    $('.sec-header-navitems__burger').click(function(event) {
        $('.sec-header-navitems__burger, .sec-header-navitems__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });

    // testimonials
    $('.owl-carousel').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      swipe: true,
      dots: true,
      arrows: false,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 550,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }

      ]
    });

});
