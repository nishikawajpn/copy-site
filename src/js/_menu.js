export default (() => {

  let globalNavButton = document.getElementById('global-nav__button');
  let globalNav = document.getElementById('global-nav');

  globalNavButton.addEventListener('click', e => {
    e.currentTarget.classList.toggle('is-clicked');
    globalNav.classList.toggle('is-visible');
  });

})();
