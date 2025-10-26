// Mobile optimization and accessibility
document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.querySelector('.nav-toggle');
  const navbar = document.querySelector('.navbar');
  const navLinks = navbar ? navbar.querySelectorAll('a') : [];
  const isMobile = () => window.innerWidth <= 768;
  let touchStartY = 0;

  // Handle menu state on resize
  window.addEventListener('resize', () => {
    if (!isMobile() && navbar.classList.contains('is-active')) {
      navbar.classList.remove('is-active');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });

  // Prevent body scroll when menu is open on mobile
  const toggleBodyScroll = (disable) => {
    document.body.style.overflow = disable ? 'hidden' : '';
  };

  // Hamburger menu toggle with improved mobile UX
  if (navToggle && navbar) {
    navToggle.addEventListener('click', (e) => {
      e.preventDefault();
      const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!isExpanded));
      navbar.classList.toggle('is-active');
      toggleBodyScroll(!isExpanded && isMobile());
      
      if (!isExpanded) {
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
        navbar.classList.contains('is-active') &&
        !navbar.contains(e.target) &&
        !navToggle.contains(e.target)
      ) {
        navbar.classList.remove('is-active');
        navToggle.setAttribute('aria-expanded', 'false');
        toggleBodyScroll(false);
      }
    });

  // Enhanced smooth scroll with improved mobile experience
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href').slice(1);
      const target = document.getElementById(targetId);
      if (target) {
        e.preventDefault();
        
        // Add offset for header height
        const headerOffset = isMobile() ? 60 : 100;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });

        // Set focus for accessibility
        target.setAttribute('tabindex', '-1');
        target.focus({ preventScroll: true });
      }
    });
  });
  
  // Prevent iOS Safari elastic scrolling issues
  document.addEventListener('touchmove', (e) => {
    if (navbar.classList.contains('is-active')) {
      e.preventDefault();
    }
  }, { passive: false });
});
