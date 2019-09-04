(function () {
  var siteMain = document.querySelector('.site-nav');
  var navToggle = document.querySelector('.site-nav__toggle');

  siteMain.classList.remove('site-nav--nojs');

  navToggle.addEventListener('click', function() {
    if (siteMain.classList.contains('site-nav--closed')) {
      siteMain.classList.remove('site-nav--closed');
      siteMain.classList.add('site-nav--opened');
    } else {
      siteMain.classList.add('site-nav--closed');
      siteMain.classList.remove('site-nav--opened');
    }
  });
})();
