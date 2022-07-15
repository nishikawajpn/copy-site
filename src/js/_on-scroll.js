export default (() => {

  var body = document.querySelector('body');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      body.classList.add('scrolled');
    } else {
      body.classList.remove('scrolled');
    }
  })

})();
