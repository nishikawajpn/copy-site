export default (() => {

  let homeLoading = document.getElementById('home-loading');
  let homeMainisual = document.getElementById('home-mainvisual');

  if (homeLoading) {
    setTimeout(() => {homeLoading.classList.add('on')}, 400);
    setTimeout(() => {homeLoading.classList.add('off')}, 400 + 2000);
    setTimeout(() => {homeMainisual.classList.add('on')}, 400 + 2000 + 1000);
  }

})();
