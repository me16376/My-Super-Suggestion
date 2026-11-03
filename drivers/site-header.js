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

    // 2. Dropdown Controller (Hover + Click supported simultaneously)
    document.querySelectorAll('.site-nav-item').forEach(item => {
      const dropdown = item.querySelector('.site-dropdown');
      const btn = item.querySelector('button.site-nav-link');
      if (!dropdown || !btn) return;

      let closeTimer = null;

      const openDropdown = (isClick = false) => {
        if (closeTimer) {
          clearTimeout(closeTimer);
          closeTimer = null;
        }
        item.classList.add('is-open');
        dropdown.classList.add('show');
        btn.setAttribute('aria-expanded', 'true');
        if (isClick) {
          item.classList.add('is-clicked');
        }
      };

      const closeDropdown = (force = false) => {
        if (force) {
          if (closeTimer) {
            clearTimeout(closeTimer);
            closeTimer = null;
          }
          item.classList.remove('is-open', 'is-clicked');
          dropdown.classList.remove('show');
          btn.setAttribute('aria-expanded', 'false');
          return;
        }

        // Graceful delay for hover out (200ms) to ensure smooth transition
        if (closeTimer) clearTimeout(closeTimer);
        closeTimer = setTimeout(() => {
          if (!item.classList.contains('is-clicked')) {
            item.classList.remove('is-open');
            dropdown.classList.remove('show');
            btn.setAttribute('aria-expanded', 'false');
          }
        }, 200);
      };

      // Mouse Hover IN
      item.addEventListener('mouseenter', () => {
        // If hovering another item, close other hover-only open dropdowns
        document.querySelectorAll('.site-nav-item').forEach(other => {
          if (other !== item && !other.classList.contains('is-clicked')) {
            other.classList.remove('is-open');
            const otherDd = other.querySelector('.site-dropdown');
            if (otherDd) otherDd.classList.remove('show');
            const otherBtn = other.querySelector('button.site-nav-link');
            if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
          }
        });
        openDropdown(false);
      });

      // Mouse Hover OUT
      item.addEventListener('mouseleave', () => {
        closeDropdown(false);
      });

      // CLICK Interaction
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const isClicked = item.classList.contains('is-clicked');

        // Close all other dropdowns
        document.querySelectorAll('.site-nav-item').forEach(other => {
          if (other !== item) {
            other.classList.remove('is-open', 'is-clicked');
            const otherDd = other.querySelector('.site-dropdown');
            if (otherDd) otherDd.classList.remove('show');
            const otherBtn = other.querySelector('button.site-nav-link');
            if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
          }
        });

        if (isClicked) {
          closeDropdown(true);
        } else {
          openDropdown(true);
        }
      });
    });

    // Click anywhere outside closes any opened or clicked dropdown
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.site-nav-item')) {
        document.querySelectorAll('.site-nav-item').forEach(item => {
          item.classList.remove('is-open', 'is-clicked');
          const dd = item.querySelector('.site-dropdown');
          if (dd) dd.classList.remove('show');
          const btn = item.querySelector('button.site-nav-link');
          if (btn) btn.setAttribute('aria-expanded', 'false');
        });
      }
    });

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

  // 5. Universal Question & Options Copy Engine
  window.copyQuestionCard = function(qId, event) {
    if (event) {
      if (typeof event.stopPropagation === 'function') event.stopPropagation();
      if (typeof event.preventDefault === 'function') event.preventDefault();
    }

    const btn = event ? (event.currentTarget || event.target.closest('.btn-copy-question')) : null;

    // Search for question object
    let q = null;
    const sources = [
      window.PRELIM_QUESTIONS,
      window.WRITTEN_QUESTIONS,
      window.prelimQuestions,
      window.writtenQuestions,
      window.allQuestions,
      window.EMBEDDED_MCQ,
      window.EMBEDDED_WRITTEN
    ];

    for (const src of sources) {
      if (Array.isArray(src)) {
        const found = src.find(item => item && item.id == qId);
        if (found) {
          q = found;
          break;
        }
      }
    }

    let textToCopy = '';

    if (q) {
      let qTitle = (q.question || '').trim().replace(/^(\d+|[০-৯]+)[\.\)]\s*/, '');
      textToCopy = `প্রশ্ন: ${qTitle}\n\n`;

      if (Array.isArray(q.options) && q.options.length > 0) {
        const labels = ['A', 'B', 'C', 'D', 'E', 'F'];
        q.options.forEach((opt, idx) => {
          let cleanOpt = (opt || '').trim().replace(/^[A-Fক-ঘa-f০-৯\d][\)\.]\s*/, '');
          const lbl = labels[idx] || (idx + 1);
          textToCopy += `${lbl}) ${cleanOpt}\n`;
        });

        if (q.answer !== undefined && q.options[q.answer] !== undefined) {
          let cleanAns = (q.options[q.answer] || '').trim().replace(/^[A-Fক-ঘa-f০-৯\d][\)\.]\s*/, '');
          const ansLbl = labels[q.answer] || (q.answer + 1);
          textToCopy += `\nসঠিক উত্তর: ${ansLbl}) ${cleanAns}\n`;
        }

        if (q.explanation && typeof q.explanation === 'string' && q.explanation.trim()) {
          textToCopy += `ব্যাখ্যা: ${q.explanation.trim()}\n`;
        }
      } else {
        // Written
        if (q.answer && typeof q.answer === 'string' && q.answer.trim()) {
          textToCopy += `উত্তর:\n${q.answer.trim()}\n\n`;
        }
        if (Array.isArray(q.points_to_remember) && q.points_to_remember.length > 0) {
          textToCopy += `গুরুত্বপূর্ণ নোট:\n${q.points_to_remember.map(p => '• ' + p.trim()).join('\n')}\n\n`;
        }
        if (q.explanation && typeof q.explanation === 'string' && q.explanation.trim()) {
          textToCopy += `ব্যাখ্যা:\n${q.explanation.trim()}\n`;
        }
      }
    } else if (btn) {
      // Fallback from DOM
      const card = btn.closest('.question-card, .written-card, .q-card, .study-card, .card');
      if (card) {
        const titleEl = card.querySelector('.q-title, .question-text, h3, .card-title');
        const qText = titleEl ? titleEl.innerText.replace(/^প্রশ্ন\s*\d+\.\s*/i, '').trim() : '';
        textToCopy = `প্রশ্ন: ${qText}\n\n`;

        const optionEls = card.querySelectorAll('.option-btn, .option-item');
        if (optionEls.length > 0) {
          const labels = ['A', 'B', 'C', 'D', 'E', 'F'];
          optionEls.forEach((optEl, idx) => {
            const optText = optEl.innerText.replace(/^[A-Fক-ঘa-f][\)\.]\s*/i, '').trim();
            textToCopy += `${labels[idx]}) ${optText}\n`;
          });
        }

        const explEl = card.querySelector('.explanation-box, .written-explanation-box, .answer-box');
        if (explEl) {
          textToCopy += `\n${explEl.innerText.trim()}\n`;
        }
      }
    }

    if (!textToCopy) return;

    // Clipboard write with robust fallback
    const copyFallback = () => {
      return new Promise((resolve, reject) => {
        try {
          const ta = document.createElement('textarea');
          ta.value = textToCopy;
          ta.setAttribute('readonly', '');
          ta.style.position = 'fixed';
          ta.style.top = '-9999px';
          ta.style.left = '-9999px';
          ta.style.opacity = '0';
          document.body.appendChild(ta);
          ta.focus();
          ta.select();
          ta.setSelectionRange(0, 99999);
          const ok = document.execCommand('copy');
          document.body.removeChild(ta);
          if (ok) resolve();
          else reject(new Error('execCommand failed'));
        } catch (e) {
          reject(e);
        }
      });
    };

    const doWrite = () => {
      if (navigator.clipboard && window.isSecureContext) {
        return navigator.clipboard.writeText(textToCopy).catch(() => copyFallback());
      } else {
        return copyFallback();
      }
    };

    doWrite().then(() => {
      if (btn) {
        const origHtml = btn.innerHTML;
        btn.classList.add('copied');
        btn.innerHTML = `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" style="stroke:#059669;margin-right:3px;"><polyline points="20 6 9 17 4 12"/></svg><span style="color:#059669;font-weight:700;">কপি হয়েছে!</span>`;
        setTimeout(() => {
          btn.classList.remove('copied');
          btn.innerHTML = origHtml;
        }, 1800);
      }
    }).catch(err => {
      console.warn('Copy failed, falling back:', err);
    });
  };

  // Export functions to global scope
  window.updateSiteHeaderStatus = updateConnectionBadge;
  window.applySiteTheme = applyTheme;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSiteHeader);
  } else {
    initSiteHeader();
  }
})();
