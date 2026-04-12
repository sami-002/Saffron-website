 
    // Floating particles (subtle saffron threads)
    function createParticles() {
      const container = document.getElementById('particles');
      for (let i = 0; i < 15; i++) {  // Low count for performance
        const particle = document.createElement('div');
        particle.className = 'particle';
        const size = Math.random() * 4 + 2;
        particle.style.width = `${size}px`;
        particle.style.height = `${size * 8}px`;  // thread-like
        particle.style.left = `${Math.random() * 100}vw`;
        particle.style.animationDuration = `${Math.random() * 20 + 20}s`;
        particle.style.animationDelay = `${Math.random() * 10}s`;
        container.appendChild(particle);
      }
    }
    createParticles();

    // Form handling
    const form = document.getElementById('contactForm');
    const message = document.getElementById('formMessage');
    const progress = document.getElementById('progress');
    const submitBtn = document.getElementById('submitBtn');

    form.addEventListener('submit', e => {
      e.preventDefault();
      if (!form.checkValidity()) {
        form.classList.add('was-validated');
        form.classList.add('shake');
        setTimeout(() => form.classList.remove('shake'), 500);
        return;
      }

      progress.classList.remove('d-none');
      submitBtn.disabled = true;

      // Simulate send (replace with real fetch/API later)
      setTimeout(() => {
        progress.classList.add('d-none');
        submitBtn.disabled = false;
        message.classList.remove('d-none');
        message.classList.add('alert-success', 'show');
        form.reset();
        form.classList.remove('was-validated');
        setTimeout(() => message.classList.add('d-none'), 8000);
      }, 1500);
    });

    // Fade-in, preloader, back-to-top (same as previous)
    const fadeSections = document.querySelectorAll('.fade-in-section');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('is-visible'); });
    }, { threshold: 0.1 });
    fadeSections.forEach(s => observer.observe(s));

    window.addEventListener('load', () => {
      document.getElementById('preloader').style.opacity = '0';
      setTimeout(() => document.getElementById('preloader').style.display = 'none', 500);
    });

    const backToTop = document.getElementById('back-to-top');
    window.addEventListener('scroll', () => { backToTop.style.display = window.scrollY > 300 ? 'block' : 'none'; });
    backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  