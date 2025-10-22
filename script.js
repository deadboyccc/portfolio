// Hamburger menu functionality
document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.querySelector('.nav-toggle');
  const navbar = document.querySelector('.navbar');

  if (navToggle && navbar) {
    // Toggle menu
    navToggle.addEventListener('click', () => {
      const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', !isExpanded);
      navbar.classList.toggle('is-active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (
        !navbar.contains(e.target) &&
        !navToggle.contains(e.target) &&
        navbar.classList.contains('is-active')
      ) {
        navbar.classList.remove('is-active');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });

    // Close menu on ESC key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navbar.classList.contains('is-active')) {
        navbar.classList.remove('is-active');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });

    // Close menu when clicking a link
    navbar.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        navbar.classList.remove('is-active');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }
});
