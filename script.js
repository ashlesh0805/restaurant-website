// Simple interactivity: nav toggle, menu filters, contact form basic handler

document.addEventListener('DOMContentLoaded', function() {
  // Menu toggles (for different pages)
  const toggles = document.querySelectorAll('.menu-toggle');
  toggles.forEach(btn => {
    btn.addEventListener('click', function() {
      const targetId = this.getAttribute('aria-controls');
      // Try multiple nav lists used on pages
      const navs = [document.getElementById('navList'), document.getElementById('navListMenu'), document.getElementById('navListContact')];
      const nav = navs.find(n => n);
      if (nav) {
        nav.classList.toggle('show');
        const expanded = nav.classList.contains('show');
        this.setAttribute('aria-expanded', expanded);
      }
    });
  });

  // Menu filter chips
  const chips = document.querySelectorAll('.chip');
  if (chips.length) {
    const menuGrid = document.getElementById('menuGrid');
    chips.forEach(chip => {
      chip.addEventListener('click', function() {
        chips.forEach(c => c.classList.remove('active'));
        this.classList.add('active');
        const cat = this.dataset.cat;
        const items = menuGrid.querySelectorAll('.menu-item');
        items.forEach(it => {
          if (cat === 'all' || it.dataset.cat === cat) {
            it.style.display = '';
          } else {
            it.style.display = 'none';
          }
        });
      });
    });
  }

  // Contact form simple handler
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const status = document.getElementById('formStatus');
      // Basic validation
      const name = document.getElementById('name').value.trim();
      const phone = document.getElementById('phone').value.trim();
      if (!name || !phone) {
        status.textContent = 'Please enter your name and phone.';
        return;
      }
      status.textContent = 'Sending...';
      // Simulate send (replace with email/Api integration later)
      setTimeout(() => {
        status.textContent = 'Thanks! We will contact you on WhatsApp soon.';
        contactForm.reset();
      }, 900);
    });
  }
});
