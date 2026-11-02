// ==========================================================================
// 🇧🇩 BPSC & GOVT RECRUITMENT PLATFORM - UNIFIED SITE HEADER CONTROLLER
// ==========================================================================

(function() {
  function initSiteHeader() {
    // 1. Current Page Highlighting
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const cleanPath = currentPath.split('#')[0].split('?')[0];

    document.querySelectorAll('.site-nav-link, .site-dropdown-item').forEach(el => {
      const href = el.getAttribute('href');
      if (href) {
        const linkPath = href.split('/').pop().split('#')[0].split('?')[0];
        if (linkPath === cleanPath || (cleanPath === '' && linkPath === 'index.html')) {
          el.classList.add('active');
          const parentItem = el.closest('.site-nav-item');
          if (parentItem) {
            const parentLink = parentItem.querySelector('.site-nav-link');
            if (parentLink) parentLink.classList.add('active');
          }
        }
      }
    });

    // 2. Mobile Nav Toggle
    const mobileBtn = document.getElementById('siteMobileToggle');
    const navMenu = document.getElementById('siteNavMenu');
    if (mobileBtn && navMenu) {
      mobileBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        navMenu.classList.toggle('open');
      });
      document.addEventListener('click', (e) => {
        if (!navMenu.contains(e.target) && !mobileBtn.contains(e.target)) {
          navMenu.classList.remove('open');
        }
      });
    }

    // 3. Permanent Pure Light Theme (No Dark Mode)
    applyTheme('light');
    localStorage.setItem('bpsc_theme', 'light');

    // 4. Dynamic Connection Badge Status
    updateConnectionBadge();
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('bpsc_theme', 'light');
  }

  function updateConnectionBadge() {
    const badge = document.getElementById('siteStatusBadge');
    if (!badge) return;

    // Check if on specific portal page with PRELIM_QUESTIONS
    if (window.PRELIM_QUESTIONS && Array.isArray(window.PRELIM_QUESTIONS) && window.PRELIM_QUESTIONS.length > 0) {
      const pCount = window.PRELIM_QUESTIONS.length;
      const wCount = (window.WRITTEN_QUESTIONS && Array.isArray(window.WRITTEN_QUESTIONS)) ? window.WRITTEN_QUESTIONS.length : 0;
      badge.innerHTML = `<span class="site-status-dot"></span> 🟢 ডেটাসেট কানেক্টেড (${pCount.toLocaleString()} MCQ + ${wCount.toLocaleString()} লিখিত)`;
      badge.style.borderColor = 'rgba(16, 185, 129, 0.4)';
      badge.style.color = '#10b981';
      return;
    }

    // If on index page or general page, check SITE_CATALOG or test /api/status
    if (window.SITE_CATALOG && window.SITE_CATALOG.grandTotalQuestions) {
      badge.innerHTML = `<span class="site-status-dot"></span> 🟢 ২৭,৮৩৩ প্রশ্ন কানেক্টেড`;
      badge.style.borderColor = 'rgba(16, 185, 129, 0.4)';
      badge.style.color = '#10b981';
    }

    // Optional: background ping to server
    if (window.location.protocol.startsWith('http')) {
      fetch('/api/status')
        .then(r => r.json())
        .then(data => {
          if (data && data.status === 'online') {
            badge.innerHTML = `<span class="site-status-dot"></span> 🟢 সার্ভার লাইভ (${data.totalQuestions.toLocaleString()} প্রশ্ন)`;
          }
        })
        .catch(() => {
          // Keep offline ready status
        });
    }
  }

  // Export functions to global scope
  window.updateSiteHeaderStatus = updateConnectionBadge;
  window.applySiteTheme = applyTheme;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSiteHeader);
  } else {
    initSiteHeader();
  }
})();
