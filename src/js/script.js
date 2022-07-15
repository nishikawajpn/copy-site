import $ from 'jquery';
import 'slick-carousel';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import fadeAnimation from './_fade-animation';
import onScroll from './_on-scroll';
import smoothScroll from './_smooth-scroll';
import '../css/style.scss';

// $('.slick02').slick({
//   infinite: false
// });


$(function(){
  function sliderSetting(){

      var width = window.innerWidth;

      if(width < 600){

        $('.slick02').not('.slick-initialized').slick({
          infinite: false
        });

      } else {

        $('.slick02.slick-initialized').slick('unslick');

      }
  }

  sliderSetting();

  $(window).resize( function() {
      sliderSetting();
  });
});



$('.slick03').slick({
  // slidesToShow: 1,
  // slidesToScroll: 1,
  // arrows: false,
  // fade: true,
  asNavFor: '.slick03-tab'
});
$('.slick03-tab').slick({
  slidesToShow: 3,
  // slidesToScroll: 1,
  asNavFor: '.slick03',
  dots: false,
  centerMode: true,
  focusOnSelect: true
});


$('.slick04').slick();
