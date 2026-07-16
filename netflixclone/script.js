/* ==========================================================
   NETFLIX CLONE - MAIN SCRIPT
   Author: Shubham Narware
   ========================================================== */

// ---------- STATE ----------
let myList = JSON.parse(localStorage.getItem('nf_mylist') || '[]');
let likedItems = JSON.parse(localStorage.getItem('nf_liked') || '[]');
let isMuted = true;
let currentModalId = null;
let heroIndex = 0;

// ---------- INIT ----------
window.addEventListener('DOMContentLoaded', () => {
  initLoader();
  initHero();
  buildRows();
  initNavbarScroll();
  initSearch();
  initProfileMenu();
  initMobileDrawer();
  initModalListButtons();
  rotateHero();
});

// ---------- LOADER ----------
function initLoader() {
  const loader = document.getElementById('loader');
  setTimeout(() => loader.classList.add('hide'), 1200);
}

// ---------- NAVBAR SCROLL ----------
function initNavbarScroll() {
  const nav = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  });
}

// ---------- HERO ----------
function initHero() {
  renderHero(CATALOG.heroList[0]);
}

function renderHero(item) {
  const bg = document.getElementById('heroBg');
  bg.style.backgroundImage = `url('${item.backdrop}')`;
  document.getElementById('heroTitle').textContent = item.title;
  document.getElementById('heroDesc').textContent = item.desc;
  const meta = document.querySelector('.hero-meta');
  meta.innerHTML = `
    <span class="match">${item.match}% Match</span>
    <span>${item.year}</span>
    <span class="rated">${item.rated}</span>
    <span>${item.seasons}</span>
    <span class="hd-badge">HD</span>
  `;
  document.querySelector('.hero-buttons .btn-info').setAttribute('onclick', `openModalById('${item.id}')`);
  syncHeroListBtn(item.id);
  window._currentHeroId = item.id;
}

function rotateHero() {
  setInterval(() => {
    heroIndex = (heroIndex + 1) % CATALOG.heroList.length;
    const bg = document.getElementById('heroBg');
    bg.style.opacity = 0;
    setTimeout(() => {
      renderHero(CATALOG.heroList[heroIndex]);
      bg.style.opacity = 1;
    }, 400);
  }, 8000);
}

function syncHeroListBtn(id) {
  const btn = document.getElementById('heroListBtn');
  if (myList.includes(id)) {
    btn.textContent = '✓';
    btn.classList.add('active');
  } else {
    btn.textContent = '＋';
    btn.classList.remove('active');
  }
  btn.setAttribute('onclick', `toggleMyList('${id}', this)`);
}

// ---------- BUILD ROWS ----------
function buildRows() {
  const container = document.getElementById('rowsContainer');
  container.innerHTML = '';

  // My List row (dynamic, shown only if items exist)
  const rowsToRender = [...CATALOG.rows];
  if (myList.length > 0) {
    rowsToRender.unshift({ title: 'My List', items: [...myList], id: 'mylist-row' });
  }

  rowsToRender.forEach((row, idx) => {
    const rowEl = document.createElement('div');
    rowEl.className = 'row';
    if (row.id === 'mylist-row') rowEl.id = 'mylist';
    rowEl.innerHTML = `
      <h2 class="row-title">${row.title}</h2>
      <div class="row-track-wrap">
        <button class="row-arrow left" onclick="scrollRow(${idx}, -1)">&#10094;</button>
        <div class="row-track" id="track-${idx}"></div>
        <button class="row-arrow right" onclick="scrollRow(${idx}, 1)">&#10095;</button>
      </div>
    `;
    container.appendChild(rowEl);

    const track = rowEl.querySelector(`#track-${idx}`);
    row.items.forEach(itemId => {
      const item = CATALOG.details[itemId];
      if (!item) return;
      track.appendChild(buildCard(itemId, item));
    });
  });

  // anchor for tv-shows/movies/new sections - map to existing rows loosely
  document.getElementById('rowsContainer').insertAdjacentHTML('afterbegin', '<div id="tv-shows"></div><div id="movies"></div><div id="new"></div>');
}

function buildCard(id, item) {
  const card = document.createElement('div');
  card.className = 'card';
  card.style.backgroundImage = `url('${item.poster}')`;
  card.setAttribute('onclick', `openModalById('${id}')`);
  const inList = myList.includes(id);
  const liked = likedItems.includes(id);
  card.innerHTML = `
    <div class="card-info">
      <div class="card-controls">
        <button class="play-mini" title="Play" onclick="event.stopPropagation(); playTrailerFor('${id}')">▶</button>
        <button class="list-mini ${inList ? 'active' : ''}" title="My List" onclick="event.stopPropagation(); toggleMyList('${id}', this)">${inList ? '✓' : '＋'}</button>
        <button class="like-mini ${liked ? 'active' : ''}" title="Like" onclick="event.stopPropagation(); toggleLike('${id}', this)">👍</button>
        <button class="expand-btn" title="More Info" onclick="event.stopPropagation(); openModalById('${id}')">▾</button>
      </div>
      <div class="card-title-mini">${item.title}</div>
      <div class="card-meta-mini"><span class="match">${item.match}% Match</span><span>${item.year}</span><span>${item.rated}</span></div>
    </div>
  `;
  return card;
}

function scrollRow(idx, dir) {
  const track = document.getElementById(`track-${idx}`);
  const scrollAmount = track.clientWidth * 0.9 * dir;
  track.scrollBy({ left: scrollAmount, behavior: 'smooth' });
}

// ---------- MY LIST ----------
function toggleMyList(id, btnEl) {
  const wasInList = myList.includes(id);
  if (wasInList) {
    myList = myList.filter(x => x !== id);
    showToast(`Removed "${CATALOG.details[id]?.title || ''}" from My List`);
  } else {
    myList.push(id);
    showToast(`Added "${CATALOG.details[id]?.title || ''}" to My List`);
  }
  localStorage.setItem('nf_mylist', JSON.stringify(myList));

  // update button UI immediately
  if (btnEl) {
    const nowInList = !wasInList;
    btnEl.textContent = nowInList ? '✓' : '＋';
    btnEl.classList.toggle('active', nowInList);
  }
  if (id === window._currentHeroId) syncHeroListBtn(id);
  if (id === currentModalId) syncModalListBtn(id);

  buildRows(); // refresh My List row
}

function toggleLike(id, btnEl) {
  const wasLiked = likedItems.includes(id);
  if (wasLiked) {
    likedItems = likedItems.filter(x => x !== id);
  } else {
    likedItems.push(id);
    showToast(`Thanks! We'll recommend more like "${CATALOG.details[id]?.title || ''}"`);
  }
  localStorage.setItem('nf_liked', JSON.stringify(likedItems));
  if (btnEl) btnEl.classList.toggle('active', !wasLiked);
  if (id === currentModalId) syncModalLikeBtn(id);
}

// ---------- MODAL (Details) ----------
function openModalById(id) {
  const item = CATALOG.details[id];
  if (!item) return;
  currentModalId = id;

  document.getElementById('modalImage').src = item.backdrop;
  document.getElementById('modalMatch').textContent = `${item.match}% Match`;
  document.getElementById('modalYear').textContent = item.year;
  document.getElementById('modalRated').textContent = item.rated;
  document.getElementById('modalSeasons').textContent = item.seasons;
  document.getElementById('modalDesc').textContent = item.desc;
  document.getElementById('modalCast').textContent = item.cast;
  document.getElementById('modalGenres').textContent = item.genres;
  document.getElementById('modalTags').textContent = item.tags;

  const epContainer = document.getElementById('modalEpisodes');
  if (item.episodes && item.episodes.length > 0) {
    epContainer.innerHTML = `<h3>Episodes</h3>` + item.episodes.map(ep => `
      <div class="episode-item">
        <div class="episode-num">${ep.n}</div>
        <div class="episode-thumb" style="background-image:url('${item.poster}')" onclick="playTrailerFor('${id}')"></div>
        <div class="episode-body">
          <div class="episode-title-row"><span>${ep.title}</span><span>${ep.time}</span></div>
          <div class="episode-desc">${ep.desc}</div>
        </div>
      </div>
    `).join('');
  } else {
    epContainer.innerHTML = '';
  }

  document.getElementById('modalBox').querySelector('.btn-play').setAttribute('onclick', `playTrailerFor('${id}')`);
  syncModalListBtn(id);
  syncModalLikeBtn(id);

  document.getElementById('modalOverlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function syncModalListBtn(id) {
  const btn = document.getElementById('modalListBtn');
  const inList = myList.includes(id);
  btn.textContent = inList ? '✓' : '＋';
  btn.classList.toggle('active', inList);
  btn.onclick = () => toggleMyList(id, btn);
}

function syncModalLikeBtn(id) {
  const btn = document.getElementById('modalLikeBtn');
  const liked = likedItems.includes(id);
  btn.classList.toggle('active', liked);
  btn.onclick = () => toggleLike(id, btn);
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('active');
  document.body.style.overflow = '';
  currentModalId = null;
}

function initModalListButtons() {
  document.getElementById('modalOverlay').addEventListener('click', (e) => {
    if (e.target.id === 'modalOverlay') closeModal();
  });
  document.getElementById('trailerOverlay').addEventListener('click', (e) => {
    if (e.target.id === 'trailerOverlay') closeTrailer();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal();
      closeTrailer();
      closeSearchOverlay();
    }
  });
}

// ---------- TRAILER (fake player) ----------
function playTrailer() {
  const id = currentModalId || window._currentHeroId || 's1';
  playTrailerFor(id);
}

function playTrailerFor(id) {
  const item = CATALOG.details[id];
  document.getElementById('trailerTitle').textContent = item ? item.title : 'Trailer';
  document.getElementById('trailerOverlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeTrailer() {
  document.getElementById('trailerOverlay').classList.remove('active');
  document.body.style.overflow = document.getElementById('modalOverlay').classList.contains('active') ? 'hidden' : '';
}

// ---------- MUTE TOGGLE (visual only) ----------
function toggleMute() {
  isMuted = !isMuted;
  document.querySelectorAll('#heroMuteBtn, #modalMuteBtn').forEach(btn => {
    btn.textContent = isMuted ? '🔇' : '🔊';
  });
}

// ---------- SEARCH ----------
function initSearch() {
  const searchBtn = document.getElementById('searchBtn');
  const searchInput = document.getElementById('searchInput');
  const overlay = document.getElementById('searchOverlay');
  const resultsEl = document.getElementById('searchResults');

  searchBtn.addEventListener('click', () => {
    searchInput.classList.toggle('active');
    if (searchInput.classList.contains('active')) {
      searchInput.focus();
    } else {
      closeSearchOverlay();
    }
  });

  searchInput.addEventListener('input', () => {
    const q = searchInput.value.trim().toLowerCase();
    if (q.length === 0) {
      overlay.classList.remove('active');
      return;
    }
    overlay.classList.add('active');
    const matches = Object.entries(CATALOG.details).filter(([id, item]) =>
      item.title.toLowerCase().includes(q) || item.genres.toLowerCase().includes(q)
    );
    if (matches.length === 0) {
      resultsEl.innerHTML = `<p class="search-empty">Your search for “${escapeHtml(searchInput.value)}” did not have any matches.</p>`;
    } else {
      resultsEl.innerHTML = '';
      matches.forEach(([id, item]) => resultsEl.appendChild(buildCard(id, item)));
    }
  });
}

function closeSearchOverlay() {
  document.getElementById('searchOverlay').classList.remove('active');
  document.getElementById('searchInput').classList.remove('active');
  document.getElementById('searchInput').value = '';
}

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

// ---------- PROFILE MENU ----------
function initProfileMenu() {
  const menu = document.getElementById('profileMenu');
  menu.addEventListener('click', (e) => {
    e.stopPropagation();
    menu.classList.toggle('open');
  });
  document.addEventListener('click', () => menu.classList.remove('open'));

  document.getElementById('signOutBtn').addEventListener('click', () => {
    showToast("Signed out (demo only) — refresh to sign back in");
  });
}

// ---------- MOBILE DRAWER ----------
function initMobileDrawer() {
  const toggle = document.getElementById('navMobileToggle');
  const drawer = document.getElementById('mobileDrawer');
  toggle.addEventListener('click', () => drawer.classList.toggle('open'));
  drawer.querySelectorAll('a').forEach(a => a.addEventListener('click', () => drawer.classList.remove('open')));
}

// ---------- TOAST ----------
let toastTimeout;
function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => toast.classList.remove('show'), 2500);
}
