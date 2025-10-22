// Hamburger menu and smooth scrolling accessibility
document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.querySelector('.nav-toggle');
  const navbar = document.querySelector('.navbar');
  const navLinks = navbar ? navbar.querySelectorAll('a') : [];

  // Hamburger menu toggle
  if (navToggle && navbar) {
    navToggle.addEventListener('click', () => {
      const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!isExpanded));
      navbar.classList.toggle('is-active');
      if (!isExpanded) {
        // Focus first nav link when menu opens
        setTimeout(() => {
          if (navLinks.length) navLinks[0].focus();
        }, 100);
      } else {
        navToggle.focus();
      }
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
        navToggle.focus();
      }
    });

    // Close menu when clicking a link
    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        navbar.classList.remove('is-active');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href').slice(1);
      const target = document.getElementById(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Set focus for accessibility
        target.setAttribute('tabindex', '-1');
        target.focus({ preventScroll: true });
      }
    });
  });
});
