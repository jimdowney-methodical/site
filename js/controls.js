'use strict';

(function () {
  function getFamilyId() {
    const hashId = window.location.hash.replace(/^#/, '').toLowerCase();
    if (hashId && CONTROLS_GUIDE[hashId]) return hashId;
    const params = new URLSearchParams(window.location.search);
    return (params.get('family') || '').toLowerCase();
  }

  function route() {
    const familyId = getFamilyId();
    const family = CONTROLS_GUIDE[familyId];
    if (family) {
      renderFamilyPage(familyId, family);
    } else {
      renderIndexPage();
    }
    window.scrollTo(0, 0);
  }

  route();
  window.addEventListener('hashchange', route);

  function renderIndexPage() {
    document.title = 'Control Family Guides — Methodical Security';
    document.getElementById('cf-index-section').style.display = '';
    document.getElementById('cf-guide-section').style.display = 'none';

    const grid = document.getElementById('cf-index-grid');
    grid.innerHTML = FAMILY_ORDER.map(function (id) {
      const f = CONTROLS_GUIDE[id];
      return `<a href="controls.html#${id}" class="cf-index-card">
        <div class="cf-index-card-header">
          <div class="cf-index-abbrev">${id.toUpperCase()}</div>
          <div class="cf-index-meta">
            <span class="cf-index-section">${f.section}</span>
            <span class="cf-index-count">${f.count} req${f.count !== 1 ? 's' : ''}</span>
          </div>
        </div>
        <h3>${f.name}</h3>
        <p>${f.summary}</p>
        <span class="cf-index-link">Read guide →</span>
      </a>`;
    }).join('');
  }

  function renderFamilyPage(id, f) {
    document.title = `${f.name} (${f.section}) — Control Family Guide | Methodical Security`;

    document.getElementById('cf-index-section').style.display = 'none';
    document.getElementById('cf-guide-section').style.display = '';

    // Breadcrumb
    document.getElementById('cf-breadcrumb').innerHTML =
      `<a href="index.html">Home</a><span>›</span><a href="resources.html">Resources</a><span>›</span><a href="controls.html">Control Families</a><span>›</span><span style="color:rgba(255,255,255,.7)">${f.name}</span>`;

    // Hero
    document.getElementById('cf-family-name').textContent = `${f.name} (${f.section})`;
    document.getElementById('cf-family-intro').textContent = f.intro;
    document.getElementById('cf-hero-stats').innerHTML =
      `<div class="cf-stat"><span class="cf-stat-num">${f.count}</span><span class="cf-stat-label">Requirements</span></div>` +
      `<div class="cf-stat"><span class="cf-stat-num">${f.readTime}</span><span class="cf-stat-label">Read Time</span></div>` +
      `<div class="cf-stat"><span class="cf-stat-num">${f.section}</span><span class="cf-stat-label">NIST Section</span></div>`;

    // Themes — clickable filter chips
    let activeTheme = null;
    const themesEl = document.getElementById('cf-themes');
    themesEl.innerHTML = f.themes.map(t =>
      `<button class="cf-theme-chip" data-theme="${t}">${t}</button>`
    ).join('');

    themesEl.addEventListener('click', function (e) {
      const chip = e.target.closest('.cf-theme-chip');
      if (!chip) return;
      const theme = chip.dataset.theme;

      if (activeTheme === theme) {
        // Clicking active chip clears the filter
        activeTheme = null;
        chip.classList.remove('active');
        applyThemeFilter(null);
      } else {
        activeTheme = theme;
        themesEl.querySelectorAll('.cf-theme-chip').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        applyThemeFilter(theme);
      }
    });

    function applyThemeFilter(theme) {
      const reqs = document.querySelectorAll('#cf-reqs-list .cf-req');
      let visibleCount = 0;
      reqs.forEach(function (el) {
        if (!theme) {
          el.style.display = '';
          visibleCount++;
        } else {
          const themes = (el.dataset.themes || '').split('|');
          const show = themes.includes(theme);
          el.style.display = show ? '' : 'none';
          if (show) visibleCount++;
        }
      });

      // Update the count badge
      const countEl = document.getElementById('cf-filter-count');
      if (countEl) {
        if (theme) {
          countEl.textContent = `Showing ${visibleCount} of ${f.requirements.length} requirements`;
          countEl.style.display = '';
        } else {
          countEl.style.display = 'none';
        }
      }
    }

    // Requirements
    document.getElementById('cf-reqs-list').innerHTML = f.requirements.map(function (req) {
      const ptsCls = req.pts === 5 ? 'pts-5' : req.pts === 3 ? 'pts-3' : 'pts-1';
      const ptsLabel = req.pts === 5 ? 'Critical' : req.pts === 3 ? 'High' : 'Medium';
      const reqThemes = (typeof REQUIREMENT_THEMES !== 'undefined' && REQUIREMENT_THEMES[req.id]) || [];
      return `<div class="cf-req" id="req-${req.id.replace(/\./g, '-')}" data-themes="${reqThemes.join('|')}">
        <button class="cf-req-header" onclick="toggleReq(this)" aria-expanded="false">
          <span class="cf-req-id">${req.id}</span>
          <span class="cf-pts-badge ${ptsCls}">${req.pts}pt · ${ptsLabel}</span>
          <span class="cf-req-title">${req.title}</span>
          <span class="cf-req-toggle">+</span>
        </button>
        <div class="cf-req-body" style="display:none">
          <blockquote class="cf-req-text">${req.text}</blockquote>
          <p class="cf-req-explanation">${req.explanation}</p>
          <div class="cf-evidence">
            <div class="cf-evidence-label">What assessors look for</div>
            <ul>${req.evidence.map(e => `<li>${e}</li>`).join('')}</ul>
          </div>
          ${(function () {
            const res = (typeof REQUIREMENT_RESOURCES !== 'undefined' && REQUIREMENT_RESOURCES[req.id]) || [];
            if (!res.length) return '';
            return `<div class="cf-resources">
              <div class="cf-resources-label">Implementation resources</div>
              <ul>${res.map(r => `<li><a href="${r.url}" target="_blank" rel="noopener noreferrer">${r.label}</a></li>`).join('')}</ul>
            </div>`;
          })()}
        </div>
      </div>`;
    }).join('');

    // Findings
    document.getElementById('cf-findings-list').innerHTML =
      f.findings.map(fi => `<li>${fi}</li>`).join('');

    // Prev / Next nav
    const idx = FAMILY_ORDER.indexOf(id);
    const prevId = idx > 0 ? FAMILY_ORDER[idx - 1] : null;
    const nextId = idx < FAMILY_ORDER.length - 1 ? FAMILY_ORDER[idx + 1] : null;
    const prevLink = document.getElementById('cf-prev-link');
    const nextLink = document.getElementById('cf-next-link');

    if (prevId) {
      prevLink.href = `controls.html#${prevId}`;
      prevLink.textContent = `← ${CONTROLS_GUIDE[prevId].name}`;
      prevLink.style.display = '';
    } else {
      prevLink.style.display = 'none';
    }

    if (nextId) {
      nextLink.href = `controls.html#${nextId}`;
      nextLink.textContent = `${CONTROLS_GUIDE[nextId].name} →`;
      nextLink.style.display = '';
    } else {
      nextLink.style.display = 'none';
    }

    // Expand all / collapse all (only counts visible requirements)
    document.getElementById('cf-expand-all').addEventListener('click', function () {
      const bodies = document.querySelectorAll('#cf-reqs-list .cf-req:not([style*="display: none"]) .cf-req-body');
      const allOpen = Array.from(bodies).every(b => b.style.display !== 'none');
      document.querySelectorAll('#cf-reqs-list .cf-req:not([style*="display: none"]) .cf-req-body')
        .forEach(b => b.style.display = allOpen ? 'none' : '');
      document.querySelectorAll('#cf-reqs-list .cf-req:not([style*="display: none"]) .cf-req-header')
        .forEach(h => h.setAttribute('aria-expanded', allOpen ? 'false' : 'true'));
      document.querySelectorAll('#cf-reqs-list .cf-req:not([style*="display: none"]) .cf-req-toggle')
        .forEach(t => t.textContent = allOpen ? '+' : '−');
      this.textContent = allOpen ? 'Expand all' : 'Collapse all';
    });
  }

  window.toggleReq = function (btn) {
    const body = btn.nextElementSibling;
    const toggle = btn.querySelector('.cf-req-toggle');
    const open = body.style.display !== 'none';
    body.style.display = open ? 'none' : '';
    toggle.textContent = open ? '+' : '−';
    btn.setAttribute('aria-expanded', open ? 'false' : 'true');
  };
})();
