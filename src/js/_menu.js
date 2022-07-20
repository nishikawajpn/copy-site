export default (() => {

  let globalNavButton = document.getElementById('global-nav__button');
  let globalNav = document.getElementById('global-nav');

  globalNavButton.addEventListener('click', e => {
    toggleMenu(e.currentTarget, globalNav);
  });


  let globalNavLinks = document.querySelectorAll('.global-nav__link');
  let globalNavReservationLink = document.querySelector('.global-nav__reservation');
  globalNavLinks = [...globalNavLinks, globalNavReservationLink];

  globalNavLinks.forEach(item => {
    item.addEventListener('click', () => {
      toggleMenu(globalNavButton, globalNav);
    })
  })

  
  function toggleMenu(button, navBody) {
    button.classList.toggle('is-clicked');
    navBody.classList.toggle('is-visible');
  }

})();
