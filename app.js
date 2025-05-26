document.addEventListener('DOMContentLoaded', () => {
  // Mobile Menu Toggle
  const menu = document.querySelector('#mobile-menu');
  const menuLinks = document.querySelector('.navbar__menu');

  menu.addEventListener('click', () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
  });

  // About Section Fade
  const aboutText = document.querySelector('.about-text');
  const aboutObserver = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      aboutText.classList.add('show');
      aboutText.classList.remove('hide');
    } else {
      aboutText.classList.add('hide');
      aboutText.classList.remove('show');
    }
  }, { threshold: 0.8 });

  aboutObserver.observe(aboutText);

  // Skills Bar and Pie Chart Animation
  const section = document.querySelector('.skills-wrapper');
  const barFills = document.querySelectorAll('.skill-fill');
  const barPercents = document.querySelectorAll('.skill-percent');
  const pies = document.querySelectorAll('.pie-chart');

  const skillsObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        barFills.forEach((fill, i) => {
          const percent = parseInt(fill.dataset.fill);
          fill.style.width = percent + '%';

          let count = 0;
          const countInterval = setInterval(() => {
            if (count >= percent) clearInterval(countInterval);
            else {
              count++;
              barPercents[i].textContent = count + '%';
            }
          }, 15);
        });

        pies.forEach(pie => {
          const percent = parseInt(pie.dataset.percent);
          const circle = pie.querySelector('.progress');
          const offset = 283 - (283 * percent) / 100;
          circle.style.strokeDashoffset = offset;
        });

        skillsObserver.unobserve(section);
      }
    });
  }, { threshold: 0.4 });

  skillsObserver.observe(section);

  // Project Cards Animation
  const cards = document.querySelectorAll('.project__card');
  const cardObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('revealed');
        }, 400);
        cardObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });

  cards.forEach(card => cardObserver.observe(card));
});
