const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

document.addEventListener("DOMContentLoaded", () => {
  const aboutText = document.querySelector('.about-text');

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        aboutText.classList.add('show');
        aboutText.classList.remove('hide');
      } else {
        aboutText.classList.add('hide');
        aboutText.classList.remove('show');
      }
    },
    {
      threshold: 0.5,
    }
  );

  observer.observe(aboutText);
});





