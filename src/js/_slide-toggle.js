import $ from 'jquery';

export default(() => {
  $(function() {
    $('.accordion-trigger').click(function() {
      $(this).next('.accordion-target').slideToggle();
      $(this).toggleClass('clicked');
    });

    $('.selfcheck-bubble__close').click(function() {
      $('.selfcheck-bubble__open').click();
    })
  });
})();
