(function () {
  const state = { lang: 'zh', menuOpen: false };

  const $ = (id) => document.getElementById(id);
  const escapeHtml = (str) => String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

  function navLinks(t) {
    return [
      { href: '#about', label: t.nav.about },
      { href: '#global', label: t.nav.global },
      { href: '#labs', label: t.nav.labs },
      { href: '#partners', label: t.nav.partners },
      { href: '#highlight', label: t.nav.highlight }
    ];
  }

  function renderNav(t) {
    const links = navLinks(t);
    $('nav-desktop').innerHTML = links.map(l => `<a href="${l.href}">${escapeHtml(l.label)}</a>`).join('');
    $('mobile-menu-links').innerHTML = links.map(l => `<a href="${l.href}">${escapeHtml(l.label)}</a>`).join('');
    $('mobile-menu-links').querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
    $('lang-toggle').textContent = state.lang === 'zh' ? 'EN' : '中文';
  }

  function renderHero(t) {
    $('hero-badge').textContent = t.hero.badge;
    $('hero-title').textContent = t.hero.title;
    $('hero-titlesub').textContent = t.hero.titleSub;
    $('hero-desc').textContent = t.hero.desc;
    $('hero-cta-primary').textContent = t.hero.ctaPrimary;
    $('hero-cta-secondary').textContent = t.hero.ctaSecondary;
    $('hero-note').textContent = t.hero.note;
    $('stats-grid').innerHTML = t.hero.stats.map(s => `
      <div class="stat-tile">
        <div class="stat-tile__value">${escapeHtml(s.value)}</div>
        <div class="stat-tile__label">${escapeHtml(s.label)}</div>
      </div>
    `).join('');
  }

  function renderAbout(t) {
    $('about-kicker').textContent = t.about.kicker;
    $('about-title').textContent = t.about.title;
    $('about-body').textContent = t.about.body;
    $('about-img-label').textContent = t.about.imgLabel;
  }

  function renderChain(t) {
    $('chain-kicker').textContent = t.chain.kicker;
    $('chain-title').textContent = t.chain.title;
    $('chain-desc').textContent = t.chain.desc;
    $('chain-track').innerHTML = t.chain.items.map(item => `
      <div class="chain-card">
        <div class="chain-card__tag">${escapeHtml(item.tag)}</div>
        <h3>${escapeHtml(item.title)}</h3>
        <p>${escapeHtml(item.desc)}</p>
      </div>
    `).join('');
  }

  function renderGlobal(t) {
    $('global-kicker').textContent = t.global.kicker;
    $('global-title').textContent = t.global.title;
    $('global-desc').textContent = t.global.desc;

    $('programs-container').innerHTML = t.global.programs.map(p => `
      <div class="program-row">
        <div class="program-row__num">${escapeHtml(p.num)}</div>
        <div>
          <div class="program-row__head">
            <h3>${escapeHtml(p.title)}</h3>
            <span class="program-row__duration">${escapeHtml(p.duration)}</span>
          </div>
          <p class="program-row__desc">${escapeHtml(p.desc)}</p>
          <div class="program-row__cols">
            <div>
              <div class="program-row__label">${escapeHtml(p.tracksLabel)}</div>
              ${p.tracks.map(tr => `<div class="program-row__track">${escapeHtml(tr)}</div>`).join('')}
            </div>
            <div>
              <div class="program-row__label program-row__label--muted">${escapeHtml(t.global.keywordsLabel)}</div>
              <div class="program-row__keywords">
                ${p.keywords.map(kw => `<span class="program-row__keyword">${escapeHtml(kw)}</span>`).join('')}
              </div>
              <div class="program-row__meta">
                <div><strong>${escapeHtml(p.targetLabel)}</strong> ${escapeHtml(p.target)}</div>
                <div><strong>${escapeHtml(p.companiesLabel)}</strong> ${escapeHtml(p.companies)}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `).join('');

    $('uni-label').textContent = t.global.uniLabel;
    $('uni-grid').innerHTML = t.global.universities.map(u => `
      <a href="${escapeHtml(u.url)}" target="_blank" rel="noopener" class="uni-card">
        <div class="uni-card__logo"><img src="${escapeHtml(u.logo)}" alt="${escapeHtml(u.name)}"></div>
        <div class="uni-card__info">
          <span class="uni-card__name">${escapeHtml(u.name)}</span>
          <span class="uni-card__loc">${escapeHtml(u.loc)}</span>
        </div>
        <span class="uni-card__arrow">↗︎</span>
      </a>
    `).join('');
  }

  function renderLabs(t) {
    $('labs-kicker').textContent = t.labs.kicker;
    $('labs-title').textContent = t.labs.title;
    $('labs-desc').textContent = t.labs.desc;
    $('labs-grid').innerHTML = t.labs.items.map(lab => `
      <div class="lab-card">
        <div class="lab-card__photo">
          <img src="${escapeHtml(lab.photo)}" alt="${escapeHtml(lab.photoLabel)}">
          <div class="lab-card__photo-label">${escapeHtml(lab.photoLabel)}</div>
          <div class="lab-card__bar"></div>
        </div>
        <div class="lab-card__body">
          <div class="lab-card__partner">${escapeHtml(lab.partnerLabel)}</div>
          <h3>${escapeHtml(lab.title)}</h3>
          <p>${escapeHtml(lab.desc)}</p>
        </div>
      </div>
    `).join('');
  }

  function renderPartners(t) {
    $('partners-kicker').textContent = t.partners.kicker;
    $('partners-title').textContent = t.partners.title;

    $('partners-track').innerHTML = t.partners.featuredList.map(f => `
      <a href="${escapeHtml(f.url)}" target="_blank" rel="noopener" class="partner-card">
        <div class="partner-card__photo">
          <img src="${escapeHtml(f.photo)}" alt="${escapeHtml(f.photoLabel)}">
        </div>
        <div class="partner-card__body">
          <div class="partner-card__logo-label"><span></span>${escapeHtml(f.logoLabel)}</div>
          <h4>${escapeHtml(f.title)}</h4>
          <p>${escapeHtml(f.desc)}</p>
          <div class="partner-card__link">
            <span>${escapeHtml(f.linkLabel)}</span>
            <span>↗︎</span>
          </div>
        </div>
      </a>
    `).join('');

    const otherWrap = $('other-partners');
    if (t.partners.list.length > 0) {
      otherWrap.hidden = false;
      $('other-partners-label').textContent = t.partners.otherLabel;
      $('other-partners-list').innerHTML = t.partners.list.map(p => `
        <a href="${p.url ? escapeHtml(p.url) : '#'}" ${p.url ? 'target="_blank" rel="noopener"' : ''} class="other-partner-chip">
          ${escapeHtml(p.name)}
          ${p.url ? '<span class="arrow">↗︎</span>' : ''}
        </a>
      `).join('');
    } else {
      otherWrap.hidden = true;
    }
  }

  function renderHighlight(t) {
    $('highlight-badge').textContent = t.highlight.badge;
    $('highlight-title').textContent = t.highlight.title;
    $('highlight-desc').textContent = t.highlight.desc;
    $('highlight-quote').textContent = t.highlight.quote;
    $('highlight-quoteby').textContent = t.highlight.quoteBy;
    const link = $('highlight-link');
    link.textContent = '';
    link.append(document.createTextNode(t.highlight.linkLabel + ' '));
    const arrow = document.createElement('span');
    arrow.className = 'mono';
    arrow.textContent = '↗︎';
    link.append(arrow);
    link.href = t.highlight.linkUrl;
  }

  function renderContact(t) {
    $('contact-title').textContent = t.contact.title;
    $('contact-address').textContent = t.contact.address;
    $('contact-phone').textContent = t.contact.phone;
    $('contact-email').textContent = t.contact.email;
    const siteLink = $('contact-site');
    siteLink.textContent = '';
    siteLink.append(document.createTextNode(t.contact.site));
    const siteArrow = document.createElement('span');
    siteArrow.className = 'mono';
    siteArrow.style.fontSize = '12px';
    siteArrow.textContent = '↗︎';
    siteLink.append(siteArrow);
    $('contact-copyright').textContent = t.contact.copyright;
  }

  function render() {
    const t = SITE_DATA[state.lang];
    document.documentElement.lang = state.lang === 'zh' ? 'zh-Hant' : 'en';
    renderNav(t);
    renderHero(t);
    renderAbout(t);
    renderChain(t);
    renderGlobal(t);
    renderLabs(t);
    renderPartners(t);
    renderHighlight(t);
    renderContact(t);
  }

  function toggleLang() {
    state.lang = state.lang === 'zh' ? 'en' : 'zh';
    render();
  }

  function openMenu() {
    state.menuOpen = true;
    document.body.classList.add('menu-open');
    $('menu-toggle').setAttribute('aria-expanded', 'true');
  }
  function closeMenu() {
    state.menuOpen = false;
    document.body.classList.remove('menu-open');
    $('menu-toggle').setAttribute('aria-expanded', 'false');
  }
  function toggleMenu() {
    state.menuOpen ? closeMenu() : openMenu();
  }

  function bindStatic() {
    $('lang-toggle').addEventListener('click', toggleLang);
    $('menu-toggle').addEventListener('click', toggleMenu);
    $('mobile-backdrop').addEventListener('click', closeMenu);

    $('chain-scroll-left').addEventListener('click', () => $('chain-track').scrollBy({ left: -300, behavior: 'smooth' }));
    $('chain-scroll-right').addEventListener('click', () => $('chain-track').scrollBy({ left: 300, behavior: 'smooth' }));

    $('stats-scroll-left').addEventListener('click', () => $('stats-grid').scrollBy({ left: -220, behavior: 'smooth' }));
    $('stats-scroll-right').addEventListener('click', () => $('stats-grid').scrollBy({ left: 220, behavior: 'smooth' }));

    $('partners-scroll-left').addEventListener('click', () => $('partners-track').scrollBy({ left: -360, behavior: 'smooth' }));
    $('partners-scroll-right').addEventListener('click', () => $('partners-track').scrollBy({ left: 360, behavior: 'smooth' }));

    $('uni-scroll-left').addEventListener('click', () => $('uni-grid').scrollBy({ left: -320, behavior: 'smooth' }));
    $('uni-scroll-right').addEventListener('click', () => $('uni-grid').scrollBy({ left: 320, behavior: 'smooth' }));
  }

  bindStatic();
  render();
})();
