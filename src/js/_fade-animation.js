export default (() => {
  var winHeight = window.innerHeight;
  var body = document.querySelector('body');
  var list = document.querySelectorAll('.on-scroll-add-class');

  list.forEach(item => {
    window.addEventListener('scroll', () => {
      if (
        window.scrollY + winHeight*2/3 > window.scrollY + item.getBoundingClientRect().top ||
        window.scrollY + winHeight > body.clientHeight - 30
      ) {
        item.classList.add('on');
      } else {
        item.classList.remove('on');
      }
    })
  });
})();
