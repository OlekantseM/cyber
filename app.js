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
  const icon = menuButton.querySelector("i"); // Get the icon inside the button

  menuButton.addEventListener('click', function () {
      navMenu.classList.toggle('active');

      // Toggle between hamburger and close icon
      if (navMenu.classList.contains('active')) {
          icon.classList.remove("fa-bars");
          icon.classList.add("fa-times"); // Change to 'X' icon when menu is open
      } else {
          icon.classList.remove("fa-times");
          icon.classList.add("fa-bars"); // Change back to bars when menu is closed
      }
  });
});
