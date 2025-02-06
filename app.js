document.addEventListener('DOMContentLoaded', function () {
  const navbar = document.querySelector('.navbar');
  let lastScrollTop = 0;

  window.addEventListener('scroll', function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
      // User is scrolling down, show the navbar
      navbar.style.transform = 'translateY(0)';
    } 

    lastScrollTop = scrollTop;
  });
});

/* JavaScript for Hamburger Menu Toggle */
document.addEventListener('DOMContentLoaded', function () {
  const menuButton = document.querySelector('.menu-button');
  const navMenu = document.querySelector('.nav__menu');

  menuButton.addEventListener('click', function () {
      navMenu.classList.toggle('active');
  });
});
