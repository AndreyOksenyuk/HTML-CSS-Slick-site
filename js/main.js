  const backButton = '<span class="slick-prev">&#8249;</span>';
  const nextButton = '<span class="slick-next">&#8250;</span>';

$('.intro__slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      arrows: true,
      cssEase: 'linear',    
      prevArrow: backButton,
      nextArrow: nextButton,
      dots: true,
      appendDots: $('.intro__slider-dots'),
      appendArrows: $('.intro__slider-arrows'),
      asNavFor: '.intro__content-slider'
});
$('.intro__content-slider').slick({
      slidesToShow: 1,
	slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      fade: true,
      cssEase: 'linear',
      infinite: true,
      adaptiveHeight: true,
      arrows: false,
      asNavFor: '.intro__slider'
});

const prevBtnProject = '<span class="slick-prev slick-prev--project">&#8249;</span>';
const nextBtnProject = '<span class="slick-next slick-next--project">&#8250;</span>';

$('.project').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      cssEase: 'linear',
      infinite: true,
      arrows: true,
      adaptiveHeight: false,
      prevArrow: prevBtnProject,
      nextArrow: nextBtnProject,
      appendArrows: $('.project__slider-arrows'),
      asNavFor: '.project__slider-bottom',
});
$('.project__slider-bottom').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      infinite: true,
      adaptiveHeight: false,
      arrows: false,
      focusOnSelect: true,
      asNavFor: '.project',
});


//Tabs
  $(function () {
  	$(".contacts__inner-tabs").tabs();
  });

//Header fixed
let headerHeight = $('.header').height();
let header = $('.header');

$(window).on('scroll load', function () {
   if (window.pageYOffset > headerHeight) {
      header.css({
            "position": "fixed",
            'animation-name': 'head',
            'animation-duration': '0.4s',
            'animation-timing-function': 'ease-in-out',
            'animation-fill-mode': 'forwards',
      })
   }
   if (window.pageYOffset < headerHeight) {
      header.css({
            "position": "relative",
            'animation-name': 'headOut',
      })
   }
})

// smooth scrool
$(function () {
      $('.nav-link').on('click', function () {
            event.preventDefault();
            let idElement = $(this).data('nav');
            let offsetTop = $(idElement).offset().top;

            $('html, body').animate({
                  scrollTop: offsetTop - 120
            }, 700);

      });
});


