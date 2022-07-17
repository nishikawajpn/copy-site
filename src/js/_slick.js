import $ from 'jquery';

export default(() => {

  $(function(){
    function sliderSetting(){

        var width = window.innerWidth;

        if(width < 600){

          $('.slick01').not('.slick-initialized').slick({
            asNavFor: '.slick01-tab'
          });

          $('.slick01-tab').slick({
            slidesToShow: 5,
            asNavFor: '.slick01',
            dots: false,
            centerMode: true,
            focusOnSelect: true
          });

          $('.slick02').not('.slick-initialized').slick({
            infinite: false
          });

        } else {

          $('.slick01.slick-initialized').slick('unslick');

          $('.slick02.slick-initialized').slick('unslick');

        }
    }

    sliderSetting();

    $(window).resize( function() {
        sliderSetting();
    });
  });


  $('.slick03').slick({
    asNavFor: '.slick03-tab'
  });
  $('.slick03-tab').slick({
    slidesToShow: 3,
    asNavFor: '.slick03',
    dots: false,
    centerMode: true,
    focusOnSelect: true
  });


  $('.slick04').slick();


  $(function () {
    var $slider = $('.slick05');
    $slider.slick();

    var $wrap = $('.clinic-map__map');
    var $panel = $('.clinic-map__room');

    $wrap.each(function () {
      $panel.click(function () {
        var panelIndex = $(this).index();
        $slider.slick('slickGoTo', panelIndex);
      });
    });
  });

});
