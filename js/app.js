(function () {
'use strict';

/* ---------- storage ---------- */
const KEY = 'afterhours:v1';
let mem = {};
function load() { try { mem = JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { mem = mem || {}; } }
function save() { try { localStorage.setItem(KEY, JSON.stringify(mem)); } catch (e) { /* storage unavailable: keep in memory */ } }
load();
const S = (k, d) => (mem[k] === undefined ? (mem[k] = d) : mem[k]);
S('lang', 'both'); S('best', {}); S('notes', {}); S('tasks', {}); S('cards', {}); S('days', []); S('reviews', []); S('mistakes', {}); S('mins', {}); S('focus', {}); S('goal', 30); S('read', {}); S('feyn', {}); S('log', {}); S('road', {}); S('books', {}); S('ex', {}); S('walk', 0);

const today = () => new Date().toISOString().slice(0, 10);
function touchDay() { const d = today(); if (!mem.days.includes(d)) { mem.days.push(d); save(); } }
function streak() {
  const set = new Set(mem.days); let n = 0; const d = new Date();
  if (!set.has(d.toISOString().slice(0, 10))) d.setDate(d.getDate() - 1);
  while (set.has(d.toISOString().slice(0, 10))) { n++; d.setDate(d.getDate() - 1); }
  return n;
}

/* ---------- helpers ---------- */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const bi = (en, vi, cls = '') => `<div class="bi ${cls}"><div class="en">${en}</div><div class="vi" lang="vi">${vi}</div></div>`;
const t = (en, vi) => `<span class="en">${en}</span> <span class="vi tag-vi" lang="vi">${vi}</span>`;
const PASS = 0.75;
function toast(msg) { const el = $('#toast'); el.textContent = msg; el.classList.add('on'); clearTimeout(toast.t); toast.t = setTimeout(() => el.classList.remove('on'), 2200); }
function fmtM(m) {
  const a = Math.abs(m), s = m < 0 ? '−' : '';
  if (a >= 1000) return s + (a / 1000).toLocaleString('en-US', { maximumFractionDigits: 2 }) + ' bn';
  return s + a.toLocaleString('en-US', { maximumFractionDigits: 1 }) + ' m';
}
const pct = (x, d = 2) => (x * 100).toLocaleString('en-US', { maximumFractionDigits: d }) + '%';
function copy(text) {
  if (navigator.clipboard && window.isSecureContext) return navigator.clipboard.writeText(text).then(() => toast('Copied / Đã sao chép'));
  const ta = document.createElement('textarea'); ta.value = text; document.body.appendChild(ta); ta.select();
  try { document.execCommand('copy'); toast('Copied / Đã sao chép'); } catch (e) { toast('Copy failed: select the text manually'); }
  ta.remove();
}

/* ---------- course index ---------- */
const ALL = []; // every lesson row
COURSE.forEach((m, mi) => m.lessons.forEach((l, li) => ALL.push({ id: l[0], en: l[1], vi: l[2], mod: m, mi, li, ready: !!LESSONS[l[0]] })));
const READY = ALL.filter(l => l.ready);
const byId = id => ALL.find(l => l.id === id);
const passed = id => (mem.best[id] || 0) >= PASS;
function prevReady(id) { const i = READY.findIndex(l => l.id === id); return i > 0 ? READY[i - 1] : null; }
function nextReady(id) { const i = READY.findIndex(l => l.id === id); return i >= 0 && i < READY.length - 1 ? READY[i + 1] : null; }
const VOCAB = [];
READY.forEach(l => LESSONS[l.id].vocab.forEach(v => { if (!VOCAB.find(x => x[0] === v[0])) VOCAB.push([...v, l.id]); }));

/* ---------- language ---------- */
function setLang(l) {
  mem.lang = l; save();
  document.body.className = 'lang-' + l;
  $$('.langs button').forEach(b => b.setAttribute('aria-pressed', b.dataset.lang === l));
}
$$('.langs button').forEach(b => b.addEventListener('click', () => setLang(b.dataset.lang)));
setLang(mem.lang);

/* ---------- dateline: today's date and your own "market data" ---------- */
function dateline() {
  const d = new Date();
  $('#today').textContent = d.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  const done = READY.filter(l => passed(l.id)).length, bests = Object.values(mem.best);
  const avg = bests.length ? Math.round(bests.reduce((a, b) => a + b, 0) / bests.length * 100) + '%' : '–';
  $('#quotes').innerHTML = `<span>LESSONS<b>${done}/${READY.length}</b> <span class="up">${done ? '▲' : ''}</span></span><span>QUIZ AVG<b>${avg}</b></span><span>STREAK<b>${streak()}d</b></span><span>CARDS DUE<b>${typeof dueCards === 'function' ? dueCards().length : 0}</b></span><span>TODAY<b>${mem.mins ? (mem.mins[today()] || 0) : 0}/${mem.goal || 30} min</b></span><span>MISTAKES<b>${typeof mistakeList === 'function' ? mistakeList().length : 0}</b></span><span>TERMS<b>${Object.keys(mem.cards).length}/${VOCAB.length}</b></span>`;
}

/* ---------- svg line chart ---------- */
function chart(series, opts = {}) {
  const W = opts.w || 560, H = opts.h || 260, P = { l: 52, r: 12, t: 12, b: 26 };
  const n = series[0].pts.length;
  let max = Math.max(...series.flatMap(s => s.pts)), min = Math.min(0, ...series.flatMap(s => s.pts));
  if (max === min) max = min + 1;
  const x = i => P.l + (i / Math.max(1, n - 1)) * (W - P.l - P.r);
  const y = v => H - P.b - ((v - min) / (max - min)) * (H - P.t - P.b);
  let g = '';
  for (let k = 0; k <= 4; k++) {
    const v = min + (max - min) * k / 4;
    g += `<line class="grid" x1="${P.l}" x2="${W - P.r}" y1="${y(v)}" y2="${y(v)}"/><text class="axis" x="${P.l - 6}" y="${y(v) + 4}" text-anchor="end">${(opts.yfmt || fmtM)(v)}</text>`;
  }
  const xl = opts.xlabels || [];
  xl.forEach(([i, lab]) => { g += `<text class="axis" x="${x(i)}" y="${H - 6}" text-anchor="middle">${lab}</text>`; });
  const path = pts => pts.map((v, i) => (i ? 'L' : 'M') + x(i).toFixed(1) + ' ' + y(v).toFixed(1)).join(' ');
  const first = series[0];
  const area = `<path class="area" d="${path(first.pts)} L ${x(n - 1)} ${y(min)} L ${x(0)} ${y(min)} Z"/>`;
  const lines = series.map(s => `<path class="${s.cls}" d="${path(s.pts)}"/>`).join('');
  return `<svg class="chart" viewBox="0 0 ${W} ${H}" role="img" aria-label="${esc(opts.label || 'chart')}"><defs><linearGradient id="glow" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#dcb36e" stop-opacity=".45"/><stop offset="1" stop-color="#dcb36e" stop-opacity="0"/></linearGradient></defs>${g}${area}${lines}</svg>`;
}
function xEvery(n, step, f) { const a = []; for (let i = 0; i < n; i += step) a.push([i, f(i)]); a.push([n - 1, f(n - 1)]); return a; }

/* ---------- engraved money art: guilloche, banknote waves, exchange columns (all generated, decorative) ---------- */
function guilloche(cx, cy, R, r, d, steps, stroke, sw, op) {
  let p = '';
  const k = (R - r) / r, turns = r / gcd(Math.round(R), Math.round(r));
  const N = Math.round(steps * turns);
  for (let i = 0; i <= N; i++) {
    const t = (i / N) * Math.PI * 2 * turns;
    const x = cx + (R - r) * Math.cos(t) + d * Math.cos(k * t), y = cy + (R - r) * Math.sin(t) - d * Math.sin(k * t);
    p += (i ? 'L' : 'M') + x.toFixed(1) + ' ' + y.toFixed(1);
  }
  return `<path d="${p}" fill="none" stroke="${stroke}" stroke-width="${sw}" opacity="${op}"/>`;
}
function gcd(a, b) { return b ? gcd(b, a % b) : a; }
function rosette(cx, cy, s, stroke, op) {
  return guilloche(cx, cy, 120 * s, 45 * s, 70 * s, 140, stroke, .7, op) + guilloche(cx, cy, 96 * s, 28 * s, 44 * s, 140, stroke, .6, op) + guilloche(cx, cy, 150 * s, 50 * s, 30 * s, 140, stroke, .5, op * .8);
}
function waves(w, y0, n, gap, amp, stroke, op) {
  let o = '';
  for (let j = 0; j < n; j++) {
    let p = ''; const y = y0 + j * gap;
    for (let x = 0; x <= w; x += 8) p += (x ? 'L' : 'M') + x + ' ' + (y + Math.sin(x / 38 + j * .5) * amp + Math.sin(x / 11 + j) * amp * .25).toFixed(1);
    o += `<path d="${p}" fill="none" stroke="${stroke}" stroke-width=".6" opacity="${op}"/>`;
  }
  return o;
}
function columns(x0, y0, w, h, stroke, op) {
  const n = 6, cw = w / (n * 1.7), gap = (w - n * cw) / (n - 1);
  let o = `<g fill="none" stroke="${stroke}" stroke-width="1.2" opacity="${op}">`;
  o += `<path d="M${x0 - 10} ${y0 + 18} L${x0 + w / 2} ${y0 - 40} L${x0 + w + 10} ${y0 + 18} Z"/><rect x="${x0 - 14}" y="${y0 + 18}" width="${w + 28}" height="16"/>`;
  for (let i = 0; i < n; i++) {
    const x = x0 + i * (cw + gap);
    o += `<rect x="${x - 3}" y="${y0 + 34}" width="${cw + 6}" height="8"/><rect x="${x}" y="${y0 + 42}" width="${cw}" height="${h}"/>`;
    for (let f = 1; f < 4; f++) o += `<line x1="${x + f * cw / 4}" y1="${y0 + 44}" x2="${x + f * cw / 4}" y2="${y0 + 40 + h}"/>`;
    o += `<rect x="${x - 3}" y="${y0 + 42 + h}" width="${cw + 6}" height="8"/>`;
  }
  for (let s = 0; s < 3; s++) o += `<rect x="${x0 - 20 - s * 12}" y="${y0 + 50 + h + s * 10}" width="${w + 40 + s * 24}" height="10"/>`;
  return o + '</g>';
}
function candles(x0, y0, w, n, stroke, op) {
  let o = `<g stroke="${stroke}" opacity="${op}">`, v = 0, s = 11;
  for (let i = 0; i < n; i++) {
    s = (s * 9301 + 49297) % 233280; const r = s / 233280;
    const open = v, close = v + (r - .38) * 26, hi = Math.max(open, close) + r * 10, lo = Math.min(open, close) - (1 - r) * 10;
    const x = x0 + i * (w / n), Y = q => y0 - q;
    o += `<line x1="${x}" y1="${Y(hi)}" x2="${x}" y2="${Y(lo)}" stroke-width="1"/><rect x="${x - 4}" y="${Y(Math.max(open, close))}" width="8" height="${Math.max(2, Math.abs(close - open))}" fill="${close >= open ? stroke : 'none'}" stroke-width="1"/>`;
    v = close;
  }
  return o + '</g>';
}
function heroArt() {
  return `<svg class="art" viewBox="0 0 1200 600" preserveAspectRatio="xMaxYMid slice" aria-hidden="true">
    ${waves(1200, 40, 14, 9, 7, '#f2a900', .22)}${waves(1200, 470, 12, 9, 6, '#ffffff', .12)}
    ${rosette(930, 250, 1.35, '#f2a900', .55)}${rosette(930, 250, .6, '#ffffff', .35)}
    ${columns(700, 360, 420, 150, '#ffffff', .18)}
    ${candles(560, 330, 600, 34, '#f2a900', .25)}</svg>`;
}
function moneyTile(stroke, op) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600">${waves(900, 20, 10, 8, 6, stroke, op)}${rosette(220, 330, 1, stroke, op * 1.4)}${columns(520, 300, 300, 140, stroke, op * 1.2)}${waves(900, 520, 8, 8, 5, stroke, op)}</svg>`;
  return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;
}
function miniRosette() { return `<svg viewBox="0 0 340 340" aria-hidden="true">${rosette(170, 170, 1, '#f2a900', .9)}</svg>`; }
document.documentElement.style.setProperty('--money-bg', moneyTile('#012169', 1));
document.documentElement.style.setProperty('--money-bg-light', moneyTile('#f2a900', 1));
function pageHero(title, vi, en, viText, extra = '') {
  return `<section class="page-hero">${heroArt()}<div class="wrap"><h1>${title}</h1><p class="deck vi" lang="vi">${vi}</p>${en ? bi(`<p>${en}</p>`, `<p>${viText}</p>`) : ''}${extra}</div></section>`;
}

/* ---------- pages ---------- */
const main = $('#main');
const routes = {};
/* ---------- study engine: minutes, mistakes, focus timer, daily plan ---------- */
function dayLog() { const d = today(); return mem.log[d] || (mem.log[d] = { cards: 0, quiz: 0, retest: 0 }); }
function logAnswer(lid, qi, ok) {
  const k = lid + ':' + qi, m = mem.mistakes[k];
  if (!ok) mem.mistakes[k] = { lid, qi, n: (m ? m.n : 0) + 1, streak: 0, last: today() };
  else if (m) { m.streak = (m.streak || 0) + 1; m.last = today(); if (m.streak >= 2) delete mem.mistakes[k]; }
  save();
}
const mistakeList = () => Object.values(mem.mistakes).filter(m => LESSONS[m.lid] && LESSONS[m.lid].quiz[m.qi]);
const minsToday = () => mem.mins[today()] || 0;
/* count a study minute only while the tab is visible and the learner was active recently */
let lastActive = Date.now();
['pointerdown', 'keydown', 'scroll', 'pointermove'].forEach(ev => addEventListener(ev, () => { lastActive = Date.now(); }, { passive: true }));
setInterval(() => {
  if (document.visibilityState === 'visible' && Date.now() - lastActive < 120000) {
    const d = today(); mem.mins[d] = (mem.mins[d] || 0) + 1; touchDay(); save(); dateline();
    const ring = $('#goalRing'); if (ring) routes.refreshToday && routes.refreshToday();
  }
}, 60000);

/* focus timer (Pomodoro): 25 min focus, 5 min break */
const focus = { end: 0, mode: 'idle', len: 25, tick: null };
function focusBtn() { return $('#focusBtn'); }
function renderFocus() {
  const b = focusBtn(); if (!b) return;
  if (focus.mode === 'idle') { b.classList.remove('on', 'brk'); b.querySelector('span').textContent = 'Focus 25:00'; return; }
  const left = Math.max(0, focus.end - Date.now()), m = Math.floor(left / 60000), s = Math.floor(left / 1000) % 60;
  b.classList.toggle('on', focus.mode === 'focus'); b.classList.toggle('brk', focus.mode === 'break');
  b.querySelector('span').textContent = (focus.mode === 'focus' ? 'Focus ' : 'Break ') + String(m).padStart(2, '0') + ':' + String(s).padStart(2, '0');
  if (left <= 0) {
    if (focus.mode === 'focus') { const d = today(); mem.focus[d] = (mem.focus[d] || 0) + 1; save(); toast('Focus session done. Take 5 minutes. / Xong một phiên, nghỉ 5 phút.'); startFocus('break'); }
    else { toast('Break over. Ready for another round? / Hết giờ nghỉ.'); stopFocus(); }
  }
}
function startFocus(mode) { focus.mode = mode; focus.end = Date.now() + (mode === 'focus' ? 25 : 5) * 60000; clearInterval(focus.tick); focus.tick = setInterval(renderFocus, 1000); renderFocus(); }
function stopFocus() { focus.mode = 'idle'; clearInterval(focus.tick); renderFocus(); }
document.addEventListener('click', e => {
  if (e.target.closest('#focusBtn')) { focus.mode === 'idle' ? startFocus('focus') : (stopFocus(), toast('Timer stopped / Đã dừng hẹn giờ')); }
});

/* daily plan */
function planItems() {
  const due = dueCards().length, mk = mistakeList().length, next = READY.find(l => !passed(l.id));
  const L = dayLog(), items = [];
  items.push({ done: due === 0, en: due ? `Review ${due} due flashcard${due > 1 ? 's' : ''}` : 'No flashcards due today', vi: due ? `Ôn ${due} thẻ đến hạn` : 'Hôm nay không có thẻ đến hạn', href: '#cards' });
  if (next) items.push({ done: L.quiz > 0, en: `Study ${next.mi + 1}.${next.li + 1} ${next.en} and take its quiz`, vi: `Học bài ${next.mi + 1}.${next.li + 1} và làm quiz`, href: '#lesson-' + next.id });
  items.push({ done: L.retest > 0 || mk === 0, en: mk ? `Retest ${mk} question${mk > 1 ? 's' : ''} from your mistake notebook` : 'Mistake notebook is empty', vi: mk ? `Làm lại ${mk} câu trong sổ lỗi sai` : 'Sổ lỗi sai đang trống', href: '#review-mistakes' });
  items.push({ done: (mem.focus[today()] || 0) > 0, en: 'Complete one 25-minute focus session', vi: 'Hoàn thành một phiên tập trung 25 phút', action: 'focus' });
  return items;
}
function heatmap() {
  const cells = [], end = new Date(); end.setDate(end.getDate() + (6 - end.getDay()));
  for (let i = 7 * 16 - 1; i >= 0; i--) { const d = new Date(end); d.setDate(end.getDate() - i); const k = d.toISOString().slice(0, 10); const m = mem.mins[k] || 0, fut = d > new Date(); const lv = fut ? -1 : m === 0 ? 0 : m < 15 ? 1 : m < 30 ? 2 : m < 60 ? 3 : 4; cells.push(`<i class="h${lv}" title="${k}: ${m} min"></i>`); }
  return `<div class="heat">${cells.join('')}</div><div class="heat-l"><span>Less</span><i class="h0"></i><i class="h1"></i><i class="h2"></i><i class="h3"></i><i class="h4"></i><span>More</span></div>`;
}
function todayHTML() {
  const goal = mem.goal, m = minsToday(), pct = Math.min(1, m / goal), C = 2 * Math.PI * 42, items = planItems();
  const week = Array.from({ length: 7 }, (_, i) => { const d = new Date(); d.setDate(d.getDate() - i); return mem.mins[d.toISOString().slice(0, 10)] || 0; }).reduce((a, b) => a + b, 0);
  return `<div class="today">
    <div class="today-goal"><svg viewBox="0 0 100 100" class="ring" id="goalRing" aria-hidden="true"><circle cx="50" cy="50" r="42" class="bg"/><circle cx="50" cy="50" r="42" class="fg" stroke-dasharray="${C}" stroke-dashoffset="${C * (1 - pct)}"/></svg>
      <div class="ring-txt"><b>${m}</b><span>/ ${goal} min</span></div>
      <div><h3>${t('Daily goal', 'Mục tiêu hôm nay')}</h3><p class="kbd">${pct >= 1 ? t('Goal reached. Well done.', 'Đã đạt mục tiêu.') : t(`${goal - m} minutes to go. Minutes count while you are active on the site.`, `Còn ${goal - m} phút.`)}</p>
      <label class="kbd" for="goalSel">${t('Goal', 'Mục tiêu')}</label> <select id="goalSel" class="mini">${[15, 30, 45, 60, 90].map(g => `<option ${g === goal ? 'selected' : ''}>${g}</option>`).join('')}</select> <span class="kbd">min/day</span>
      <p class="kbd" style="margin-top:6px">${t(`This week: ${week} min, ${Object.values(mem.focus).reduce((a, b) => a + b, 0)} focus sessions in total`, `Tuần này: ${week} phút`)}</p></div></div>
    <div class="today-plan"><h3>${t('Today’s plan', 'Kế hoạch hôm nay')}</h3><ul class="plan">${items.map(it => `<li class="${it.done ? 'done' : ''}"><span class="tick" aria-hidden="true">${it.done ? '✓' : ''}</span>${it.action ? `<button class="linkish" data-act="${it.action}">${t(it.en, it.vi)}</button>` : `<a href="${it.href}">${t(it.en, it.vi)}</a>`}</li>`).join('')}</ul></div>
    <div class="today-heat"><h3>${t('Study calendar', 'Lịch học')}</h3>${heatmap()}</div>
  </div>`;
}
function wireToday() {
  const g = $('#goalSel'); if (g) g.onchange = e => { mem.goal = +e.target.value; save(); routes.refreshToday(); };
  $$('[data-act="focus"]').forEach(b => b.onclick = () => { if (focus.mode === 'idle') startFocus('focus'); toast('Focus timer started: 25 minutes / Bắt đầu 25 phút tập trung'); });
}
routes.refreshToday = () => { const box = $('#todayBox'); if (box) { box.innerHTML = todayHTML(); wireToday(); } };

/* keyboard shortcuts help */
document.addEventListener('keydown', e => {
  if (e.target.matches('input,textarea,select')) return;
  if (e.key === '?') { const m = $('#keys'); m.hidden = !m.hidden; }
  if (e.key === 'Escape') $('#keys').hidden = true;
  if (e.key === 'g') { routes._g = Date.now(); return; }
  if (routes._g && Date.now() - routes._g < 800) { const map = { h: '#front', c: '#course', l: '#lab', f: '#cards', p: '#review', m: '#review-mistakes', n: '#notes', s: '#glossary', r: '#roadmap', b: '#roadmap-library' }; if (map[e.key]) location.hash = map[e.key]; routes._g = 0; }
});
document.addEventListener('click', e => { if (e.target.id === 'keys') e.target.hidden = true; });


const ICON = {
  book: '<path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z"/><path d="M4 19V5"/><path d="M9 7h6"/>',
  calc: '<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M8 7h8M8 12h2M14 12h2M8 16h2M14 16h2"/>',
  cards: '<rect x="3" y="6" width="14" height="14" rx="2"/><path d="M7 3h12a2 2 0 0 1 2 2v12"/>',
  check: '<circle cx="12" cy="12" r="9"/><path d="m8 12 3 3 5-6"/>',
  pen: '<path d="M4 20h4L19 9l-4-4L4 16z"/><path d="m14 6 4 4"/>',
  globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>'
};
const ic = k => `<div class="ic"><svg viewBox="0 0 24 24">${ICON[k]}</svg></div>`;

routes[''] = function home() {
  const done = READY.filter(l => passed(l.id)).length;
  const bests = Object.values(mem.best); const avg = bests.length ? bests.reduce((a, b) => a + b, 0) / bests.length : 0;
  const next = READY.find(l => !passed(l.id)) || READY[READY.length - 1];
  const due = dueCards().length;
  const totalL = ALL.length;
  main.innerHTML = `
  <section class="hero">${heroArt()}
    <div class="wrap"><div class="hero-in">
      <div>
        <span class="eyebrow">${t('Pre-finance program', 'Chương trình tiền tài chính')}</span>
        <h1>Learn finance the way Wall Street thinks.</h1>
        <p class="lead-vi vi" lang="vi">Học tài chính theo cách phố Wall tư duy.</p>
        <p class="lead en">${COURSE.length} modules, from what money is to valuing a company, taught in English and Vietnamese side by side. Pass each quiz before you move on.</p>
        <p class="lead vi" lang="vi">${COURSE.length} module, từ tiền là gì đến định giá doanh nghiệp, dạy song song tiếng Anh và tiếng Việt. Qua quiz mỗi bài rồi mới sang bài tiếp.</p>
        <div class="btns"><a class="btn" href="#lesson-${next.id}">${passed(READY[0].id) ? 'Continue learning' : 'Start lesson 1'}</a><a class="btn ghost" href="#course">View the curriculum</a></div>
      </div>
      <div class="panel" aria-label="Compounding demo">
        <div class="panel-top">
          <svg class="clock" viewBox="0 0 100 100" aria-hidden="true"><circle cx="50" cy="50" r="46"/>${Array.from({ length: 12 }, (_, i) => { const a = i * Math.PI / 6; return `<line class="tickm" x1="${50 + 38 * Math.sin(a)}" y1="${50 - 38 * Math.cos(a)}" x2="${50 + 43 * Math.sin(a)}" y2="${50 - 43 * Math.cos(a)}"/>`; }).join('')}<line class="hand min" id="hm" x1="50" y1="50" x2="50" y2="14"/><line class="hand" id="hh" x1="50" y1="50" x2="50" y2="26"/></svg>
          <div class="readout"><small>${t('100m VND today becomes', '100 triệu hôm nay thành')}</small><div class="big" id="hv"></div><small id="hs"></small></div>
        </div>
        <div id="hc"></div>
        <div class="legend"><span><i style="background:var(--navy)"></i>${t('Compound', 'Lãi kép')}</span><span><i style="background:var(--red)"></i>${t('Simple', 'Lãi đơn')}</span></div>
        <div class="ctrl"><label for="hy">${t('Years', 'Số năm')}</label><input type="range" id="hy" min="1" max="40" value="20"><output id="hyo"></output></div>
        <div class="ctrl"><label for="hr">${t('Rate', 'Lãi suất')}</label><input type="range" id="hr" min="1" max="15" step=".5" value="8"><output id="hro"></output></div>
      </div>
    </div></div>
  </section>
  <section class="strip"><div class="wrap"><div class="stats">
    <div class="stat"><b>${done}/${READY.length}</b><span>${t('lessons passed', 'bài đã qua')}</span></div>
    <div class="stat"><b>${bests.length ? Math.round(avg * 100) + '%' : '–'}</b><span>${t('average best quiz score', 'điểm quiz trung bình')}</span></div>
    <div class="stat"><b>${streak()}</b><span>${t('day study streak', 'ngày học liên tiếp')}</span></div>
    <div class="stat"><b>${due}</b><span>${t('flashcards due today', 'thẻ cần ôn hôm nay')}</span></div>
  </div></div></section>
  <section class="section band"><div class="wrap">
    <div id="todayBox">${todayHTML()}</div>
    <div class="next-card"><div><div class="k">${t('Up next', 'Tiếp theo')}</div><h3>${esc(next.en)}</h3><div class="tag-vi vi" lang="vi" style="font-family:var(--serif);font-style:italic">${esc(next.vi)}</div><div class="kbd" style="margin-top:4px">Module ${next.mi + 1}, lesson ${next.mi + 1}.${next.li + 1}, about ${LESSONS[next.id].min} minutes</div></div>
      <div class="btns" style="margin:0"><a class="btn navy" href="#lesson-${next.id}">Open lesson</a>${due ? `<a class="btn ghost" href="#cards">Review ${due} cards</a>` : ''}</div></div>
    ${(() => { const cp = currentPhase(), rs = roadStats(), left = cp.dl.filter((_, i) => !mem.road[cp.id + ':' + i]); return `<a class="road-card" href="#roadmap"><div><div class="k">${t('Roadmap, now', 'Lộ trình, hiện tại')}</div><h3>${esc(cp.title[0])}<span class="tag-vi vi" lang="vi">${esc(cp.title[1])}</span></h3><p class="kbd">${cp.dates}, ${rs.done}/${rs.n} ${t('deliverables done', 'sản phẩm đã xong')}</p></div><div class="rc-next">${left.length ? `<span class="kbd">${t('Next deliverable', 'Sản phẩm tiếp theo')}</span><b>${t(left[0][0], left[0][1])}</b>` : `<b>${t('Phase complete', 'Đã xong giai đoạn')}</b>`}</div></a>`; })()}
    <div class="sec-head" style="margin-top:48px"><div><h2>${t('The curriculum', '')}</h2><span class="tag-vi vi" lang="vi">Chương trình học</span></div><a class="btn ghost small" href="#course">All ${totalL} lessons</a></div>
    <div class="mods">${COURSE.map((m, i) => { const ready = m.lessons.filter(l => LESSONS[l[0]]), dn = ready.filter(l => passed(l[0])).length; const first = ready[0] ? ready[0][0] : null;
      return `<a class="mcard" href="${first ? '#lesson-' + first : '#course'}"><div class="top">${miniRosette()}<div class="no">Module ${i + 1}</div><h3>${esc(m.en)}</h3></div><div class="body"><div class="vi" lang="vi">${esc(m.vi)}</div><div class="prog"><i style="width:${(dn / m.lessons.length) * 100}%"></i></div><div class="meta2">${dn} of ${m.lessons.length} passed${ready.length < m.lessons.length ? `, ${m.lessons.length - ready.length} coming soon` : ''}</div></div></a>`; }).join('')}</div>
  </div></section>
  <section class="section"><div class="wrap">
    <div class="sec-head"><div><h2>${t('How the program works', '')}</h2><span class="tag-vi vi" lang="vi">Chương trình vận hành thế nào</span></div></div>
    <div class="feats">
      <div class="feat">${ic('book')}<h3>${t('Lessons in a fixed order', '')}</h3>${bi('<p>Introduction, explanation, vocabulary, a real company, worked numbers, a quiz, a practice task and a summary. Every lesson, every time.</p>', '<p>Giới thiệu, giải thích, từ vựng, ví dụ công ty thật, ví dụ tính toán, quiz, bài tập và tổng kết. Bài nào cũng vậy.</p>')}</div>
      <div class="feat">${ic('check')}<h3>${t('Quizzes that gate progress', '')}</h3>${bi('<p>Score 75% to pass. Wrong answers come with an explanation in both languages, and passing unlocks that lesson’s flashcards.</p>', '<p>Đạt 75% để qua bài. Câu sai có giải thích song ngữ, và qua bài sẽ mở flashcard của bài đó.</p>')}</div>
      <div class="feat">${ic('calc')}<h3>${t('A calculator for every formula', '')}</h3>${bi(`<p>The Lab has ${Object.keys(TOOLS).length} tools, from compound interest to a full DCF, so you can change an input and watch the result move.</p>`, `<p>Lab có ${Object.keys(TOOLS).length} công cụ, từ lãi kép đến định giá DCF, để em đổi số liệu và quan sát kết quả.</p>`)}</div>
      <div class="feat">${ic('cards')}<h3>${t('Spaced repetition', '')}</h3>${bi('<p>Flashcards return after 1, 3, 7, 14 and 30 days. Review mixes questions from lessons you already passed.</p>', '<p>Flashcard quay lại sau 1, 3, 7, 14 và 30 ngày. Ôn tập trộn câu hỏi từ các bài đã qua.</p>')}</div>
      <div class="feat">${ic('pen')}<h3>${t('Practice graded by your professor', '')}</h3>${bi('<p>Write your answer, copy it with one click and paste it into your chat with Claude for detailed feedback.</p>', '<p>Viết bài làm, sao chép bằng một nút và dán vào cuộc trò chuyện với Claude để được nhận xét chi tiết.</p>')}</div>
      <div class="feat">${ic('globe')}<h3>${t('English first, Vietnamese beside it', '')}</h3>${bi('<p>Switch between EN + VI, English only or Vietnamese only at the top of every page.</p>', '<p>Chuyển giữa song ngữ, chỉ tiếng Anh hoặc chỉ tiếng Việt ở đầu mỗi trang.</p>')}</div>
    </div>
  </div></section>
  <section class="cta-band"><div class="wrap cta-in"><h2>${t('Ready for the next lesson?', 'Sẵn sàng cho bài tiếp theo?')}</h2><a class="btn navy" href="#lesson-${next.id}">${esc(next.en)}</a></div></section>`;
  const hy = $('#hy'), hr = $('#hr');
  const draw = () => {
    const n = +hy.value, r = +hr.value / 100, pts = [], sp = [];
    for (let i = 0; i <= n; i++) { pts.push(100 * Math.pow(1 + r, i)); sp.push(100 * (1 + r * i)); }
    $('#hyo').textContent = n + ' yrs'; $('#hro').textContent = hr.value + '%';
    $('#hv').textContent = fmtM(pts[n]);
    $('#hs').innerHTML = t(`vs ${fmtM(sp[n])} with simple interest; doubles about every ${(72 / hr.value).toFixed(1)} years`, `so với ${fmtM(sp[n])} lãi đơn`);
    $('#hc').innerHTML = chart([{ pts, cls: 'l1' }, { pts: sp, cls: 'l2' }], { h: 210, xlabels: xEvery(n + 1, Math.max(1, Math.round(n / 5)), i => 'y' + i), label: 'Compound vs simple growth of 100 million VND' });
    $('#hh').style.transform = `rotate(${n * 30}deg)`; $('#hm').style.transform = `rotate(${n * 90}deg)`;
  };
  hy.oninput = hr.oninput = draw; draw(); wireToday();
};

routes.course = function () {
  const openFirst = (READY.find(l => !passed(l.id)) || READY[0]).mod.id;
  main.innerHTML = pageHero('Curriculum', 'Chương trình học', COURSE.length + ' modules in order. A lesson counts as passed when you score 75% or more on its quiz. Lessons marked coming soon will be added as you progress.', COURSE.length + ' module theo thứ tự. Một bài được tính là qua khi em đạt từ 75% bài quiz. Các bài ghi coming soon sẽ được thêm khi em tiến bộ.') +
  `<section class="section band"><div class="wrap"><div class="modules">${COURSE.map((m, i) => {
    const ls = m.lessons, ready = ls.filter(l => LESSONS[l[0]]), dn = ready.filter(l => passed(l[0])).length;
    return `<details class="mod" ${m.id === openFirst ? 'open' : ''}><summary><div class="mno">${i + 1}</div><div><h2>${esc(m.en)}</h2><div class="tag-vi vi" lang="vi" style="font-family:var(--serif);font-style:italic">${esc(m.vi)}</div><p class="q">${t(esc(m.q[0]), esc(m.q[1]))}</p></div>
      <div class="right">${dn}/${ls.length} passed<span class="chev">▾</span><div class="prog"><i style="width:${(dn / ls.length) * 100}%"></i></div></div></summary>
      <ul class="lessons">${ls.map((l, j) => {
        const r = !!LESSONS[l[0]], b = mem.best[l[0]];
        const st = passed(l[0]) ? `<span class="pill done">Passed ${Math.round(b * 100)}%</span>` : r ? (b !== undefined ? `<span class="pill try">Best ${Math.round(b * 100)}%</span>` : `<span class="pill">${LESSONS[l[0]].min} min</span>`) : '<span class="pill">Coming soon</span>';
        const inner = `<span class="n">${i + 1}.${j + 1}</span><span class="t">${esc(l[1])}<span class="vi" lang="vi">${esc(l[2])}</span></span>${st}`;
        return `<li>${r ? `<a href="#lesson-${l[0]}">${inner}</a>` : `<div class="soon">${inner}</div>`}</li>`;
      }).join('')}</ul></details>`;
  }).join('')}</div></div></section>`;
};

/* ---------- quiz engine ---------- */
function quizHTML(qs, prefix) {
  return qs.map((q, i) => `<div class="quiz-q" data-i="${i}"><div class="qn">${t('Question', 'Câu')} ${i + 1} / ${qs.length}${q.src ? `, ${esc(q.src)}` : ''}</div>
    <h4 class="en">${q[0]}</h4><p class="qvi vi" lang="vi">${q[1]}</p>
    <div class="opts">${q[2].map((o, k) => `<button class="opt" data-k="${k}"><span class="k">${'ABCD'[k]}</span><span><span class="en">${o[0]}</span><span class="ov vi" lang="vi">${o[1]}</span></span></button>`).join('')}</div>
    <div class="fb" id="${prefix}-fb-${i}"></div></div>`).join('') + `<div id="${prefix}-score"></div>`;
}
function wireQuiz(root, qs, prefix, onDone) {
  const answers = new Array(qs.length).fill(null);
  $$('.quiz-q', root).forEach(box => {
    const i = +box.dataset.i, q = qs[i];
    $$('.opt', box).forEach(b => b.addEventListener('click', () => {
      if (answers[i] !== null) return;
      const k = +b.dataset.k; answers[i] = k;
      $$('.opt', box).forEach(x => { x.disabled = true; const xk = +x.dataset.k; if (xk === q[3]) x.classList.add('right'); else if (xk === k) x.classList.add('wrong'); });
      const ok = k === q[3];
      if (q.lid) logAnswer(q.lid, q.qi, ok);
      $(`#${prefix}-fb-${i}`).innerHTML = `<div class="explain ${ok ? '' : 'bad'}"><strong>${ok ? t('Correct.', 'Chính xác.') : t('Not quite.', 'Chưa đúng.')}</strong> ${bi(q[4], q[5])}</div>`;
      if (answers.every(a => a !== null)) {
        const sc = answers.filter((a, j) => a === qs[j][3]).length;
        onDone(sc, qs.length, answers);
      }
    }));
  });
}

/* ---------- lesson page ---------- */
routes.lesson = function (id) {
  const meta = byId(id), L = LESSONS[id];
  if (!meta || !L) { main.innerHTML = `<div class="wrap section"><div class="empty">${t('This lesson isn’t written yet.', 'Bài này chưa có nội dung.')} <a href="#course">Back to the course</a></div></div>`; return; }
  touchDay();
  const prev = prevReady(id), next = nextReady(id);
  const gate = prev && !passed(prev.id) ? `<div class="gate">${bi(`<p><b>Recommended first:</b> pass the quiz in <a href="#lesson-${prev.id}">${esc(prev.en)}</a>. Each lesson builds on the one before, so skipping ahead usually costs more time than it saves.</p>`, `<p><b>Nên làm trước:</b> vượt qua quiz bài <a href="#lesson-${prev.id}">${esc(prev.vi)}</a>. Mỗi bài xây trên bài trước, nên nhảy cóc thường tốn thời gian hơn là tiết kiệm.</p>`)}</div>` : '';
  const parts = [
    ['p-intro', 'Introduction', 'Giới thiệu'], ['p-exp', 'Explanation', 'Giải thích'], ['p-voc', 'Vocabulary', 'Từ vựng'],
    ['p-ex', 'Real-world example', 'Ví dụ thực tế'], ['p-num', 'Worked numbers', 'Ví dụ tính toán'], ['p-quiz', 'Knowledge check', 'Kiểm tra kiến thức'],
    ['p-task', 'Practice', 'Bài tập ứng dụng'], ['p-sum', 'Summary', 'Tổng kết']];
  const H = (k) => { const i = parts.findIndex(x => x[0] === k), p = parts[i]; return `<h2><span class="pn">${i + 1}</span>${esc(p[1])}<span class="tag-vi vi" lang="vi">${esc(p[2])}</span></h2>`; };
  const best = mem.best[id];
  const LQ = L.quiz.map((q, qi) => Object.assign([...q], { lid: id, qi }));
  const seen = new Set(mem.read[id] || []);
  main.innerHTML = `<section class="page-hero">${heroArt()}<div class="wrap">
    <div class="crumbs"><a href="#course">Curriculum</a> / Module ${meta.mi + 1}: ${esc(meta.mod.en)}</div>
    <h1>${esc(meta.en)}</h1><p class="deck vi" lang="vi">${esc(meta.vi)}</p>
    <div class="meta"><span>${t(`Lesson ${meta.mi + 1}.${meta.li + 1}`, `Bài ${meta.mi + 1}.${meta.li + 1}`)}</span><span>${t(`About ${L.min} minutes`, `Khoảng ${L.min} phút`)}</span><span>${best !== undefined ? (passed(id) ? `Passed, best ${Math.round(best * 100)}%` : `Best so far ${Math.round(best * 100)}%`) : 'Not attempted'}</span></div>
    ${gate}
  </div></section><div class="wrap">
  <div class="lesson-grid">
    <aside class="toc"><div class="k">${t('In this lesson', 'Trong bài')} <span class="kbd" id="readCount" style="float:right">${seen.size}/${parts.length} read</span></div><ol>${parts.map(p => `<li><a href="#${p[0]}" data-jump="${p[0]}" class="${seen.has(p[0]) ? 'seen' : ''}">${p[1]}</a></li>`).join('')}</ol>
      <div class="notes-box"><label for="note" class="kbd">${t('Your notes, saved as you type', 'Ghi chú, tự động lưu')}</label><textarea id="note" placeholder="Write in English if you can">${esc(mem.notes[id] || '')}</textarea></div>
    </aside>
    <article>
      <section class="part" id="p-intro">${H('p-intro')}
        ${bi(`<p>${L.intro[0]}</p>`, `<p>${L.intro[1]}</p>`)}
        <h3 class="sub">${t('After this lesson you can', 'Sau bài này em có thể')}</h3>
        ${bi(`<ul class="obj">${L.obj.map(o => `<li>${o[0]}</li>`).join('')}</ul>`, `<ul class="obj">${L.obj.map(o => `<li>${o[1]}</li>`).join('')}</ul>`)}
      </section>
      <section class="part" id="p-exp">${H('p-exp')}
        ${L.sec.map(s => `<h3 class="sub">${esc(s[0])}<span class="tag-vi vi" lang="vi">${esc(s[1])}</span></h3>${bi(s[2], s[3])}`).join('')}
      </section>
      <section class="part" id="p-voc">${H('p-voc')}
        <table class="vocab"><thead><tr><th>English term</th><th>Tiếng Việt</th><th class="en">Explanation</th><th class="vi" lang="vi">Giải thích</th></tr></thead>
        <tbody>${L.vocab.map(v => `<tr><td>${esc(v[0])}</td><td lang="vi">${esc(v[1])}</td><td class="en">${esc(v[2])}</td><td class="vi" lang="vi">${esc(v[3])}</td></tr>`).join('')}</tbody></table>
        <div class="btns"><a class="btn small ghost" href="#cards">Practise these in flashcards</a></div>
      </section>
      <section class="part" id="p-ex">${H('p-ex')}
        <div class="clip"><h3>${esc(L.ex[0])}<span class="tag-vi vi" lang="vi" style="display:block;font-size:17px;font-family:var(--serif);font-style:italic;font-weight:400;margin-top:4px">${esc(L.ex[1])}</span></h3>${bi(L.ex[2], L.ex[3])}</div>
      </section>
      <section class="part" id="p-num">${H('p-num')}${bi(L.num[0], L.num[1])}
        ${L.tool ? `<div class="btns"><a class="btn small ghost" href="#lab-${L.tool}">Try these numbers in the Lab</a></div>` : ''}
      </section>
      <section class="part" id="p-quiz">${H('p-quiz')}
        ${bi('<p>Answer each question. You need 75% to pass. Explanations appear after each answer.</p>', '<p>Trả lời từng câu. Cần đạt 75% để qua bài. Giải thích hiện ra sau mỗi câu.</p>')}
        <div id="quiz">${quizHTML(LQ, 'q')}</div>
      </section>
      <section class="part task" id="p-task">${H('p-task')}
        ${bi(`<p>${L.task[0]}</p>`, `<p>${L.task[1]}</p>`)}
        <label class="kbd" for="taskans">${t('Your answer', 'Bài làm của em')}</label>
        <textarea id="taskans" placeholder="Answer in English or Vietnamese">${esc(mem.tasks[id] || '')}</textarea>
        <div class="btns"><button class="btn small" id="copytask">Copy answer for grading</button></div>
        <p class="kbd" style="margin-top:8px">${t('Paste it into your chat with Claude to get it graded.', 'Dán vào cuộc trò chuyện với Claude để được chấm bài.')}</p>
        <div class="feyn">
          <h3 class="sub">${t('Explain it simply', 'Giải thích thật đơn giản')}</h3>
          ${bi('<p>The Feynman technique: explain this lesson in plain English as if to a 12-year-old. Gaps in your explanation show you exactly what to reread. Try to use the key terms below.</p>', '<p>Kỹ thuật Feynman: giải thích bài này bằng tiếng Anh đơn giản như đang nói với một em 12 tuổi. Chỗ nào em giải thích bị vấp chính là chỗ cần đọc lại. Cố dùng các thuật ngữ bên dưới.</p>')}
          <textarea id="feyn" placeholder="In simple words, this lesson is about...">${esc(mem.feyn[id] || '')}</textarea>
          <div class="terms" id="feynTerms"></div>
          <div class="btns"><button class="btn small ghost" id="copyfeyn">Copy explanation for feedback</button></div>
        </div>
      </section>
      <section class="part" id="p-sum">${H('p-sum')}
        <ol class="sum">${L.sum.map(s => `<li>${bi(s[0], s[1])}</li>`).join('')}</ol>
        <div class="nextnav">${prev ? `<a class="btn ghost" href="#lesson-${prev.id}">Previous: ${esc(prev.en)}</a>` : '<span></span>'}${next ? `<a class="btn" href="#lesson-${next.id}">Next: ${esc(next.en)}</a>` : `<a class="btn" href="#course">Back to the course map</a>`}</div>
      </section>
    </article>
  </div></div>`;

  $('#note').addEventListener('input', e => { mem.notes[id] = e.target.value; save(); });
  $('#taskans').addEventListener('input', e => { mem.tasks[id] = e.target.value; save(); });
  const drawTerms = () => {
    const txt = ($('#feyn').value || '').toLowerCase();
    const used = L.vocab.filter(v => txt.includes(v[0].toLowerCase().replace(/\s*\(.*\)/, '')));
    $('#feynTerms').innerHTML = `<span class="kbd">${t(`Key terms used: ${used.length} of ${L.vocab.length}`, `Đã dùng ${used.length}/${L.vocab.length} thuật ngữ`)}</span> ` + L.vocab.map(v => `<span class="chip ${used.includes(v) ? 'on' : ''}">${esc(v[0])}</span>`).join('');
  };
  $('#feyn').addEventListener('input', e => { mem.feyn[id] = e.target.value; save(); drawTerms(); }); drawTerms();
  $('#copyfeyn').addEventListener('click', () => { const v = mem.feyn[id] || ''; if (!v.trim()) { toast('Write your explanation first / Hãy viết phần giải thích trước'); return; } copy(`Professor, here is my simple explanation of lesson ${meta.mi + 1}.${meta.li + 1} (${meta.en}). Please point out anything wrong or missing, and correct my English.\n\n${v}`); });
  $('#copytask').addEventListener('click', () => {
    const ans = mem.tasks[id] || '';
    if (!ans.trim()) { toast('Write your answer first / Hãy viết bài làm trước'); return; }
    const sc = mem.best[id] !== undefined ? `Quiz best score: ${Math.round(mem.best[id] * 100)}%\n` : '';
    copy(`Professor, please grade my practice task.\nLesson ${meta.mi + 1}.${meta.li + 1}: ${meta.en}\n${sc}\nTask: ${L.task[0].replace(/<[^>]+>/g, '')}\n\nMy answer:\n${ans}`);
  });
  $$('[data-jump]').forEach(a => a.addEventListener('click', e => { e.preventDefault(); document.getElementById(a.dataset.jump).scrollIntoView(); }));
  wireQuiz($('#quiz'), LQ, 'q', (sc, n) => {
    dayLog().quiz++;
    const r = sc / n, was = mem.best[id] || 0, wasPass = passed(id);
    mem.best[id] = Math.max(was, r); save(); touchDay();
    const ok = r >= PASS;
    if (ok) L.vocab.forEach(v => { if (!mem.cards[v[0]]) mem.cards[v[0]] = { box: 1, due: today() }; }); save();
    $('#q-score').innerHTML = `<div class="score"><b>${sc}/${n}</b><div>${ok
      ? bi(`<p style="margin:0"><b>Passed.</b> ${wasPass ? 'Your best score is saved.' : 'This lesson’s vocabulary has been added to your flashcards.'}</p>`, `<p style="margin:0"><b>Đã qua.</b> ${wasPass ? 'Điểm cao nhất đã được lưu.' : 'Từ vựng bài này đã được thêm vào flashcard.'}</p>`)
      : bi('<p style="margin:0">Below 75%. Reread the explanations for the questions you missed, then retry.</p>', '<p style="margin:0">Dưới 75%. Đọc lại giải thích các câu sai rồi làm lại.</p>')}</div>
      <button class="btn small ghost" id="retry">Retry the quiz</button>${ok && next ? `<a class="btn small" href="#lesson-${next.id}">Next lesson</a>` : ''}</div>`;
    $('#retry').onclick = () => { routes.lesson(id); document.getElementById('p-quiz').scrollIntoView(); };
  });
  // highlight toc on scroll
  const links = $$('.toc a');
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) links.forEach(a => a.classList.toggle('on', a.dataset.jump === e.target.id)); }), { rootMargin: '-40% 0px -55% 0px' });
  $$('.part').forEach(p => io.observe(p));
  const io2 = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting && !seen.has(e.target.id)) { seen.add(e.target.id); mem.read[id] = [...seen]; save(); const a = $(`.toc a[data-jump="${e.target.id}"]`); if (a) a.classList.add('seen'); $('#readCount').textContent = `${seen.size}/${parts.length} read`; } }), { threshold: 0, rootMargin: '0px 0px -60% 0px' });
  $$('.part').forEach(p => io2.observe(p));
};

/* ---------- lab ---------- */
const TOOLS = {
  compound: ['Compound interest', 'Lãi kép'],
  tvm: ['Present & future value', 'Hiện giá & giá trị tương lai'],
  inflation: ['Inflation & real returns', 'Lạm phát & lợi suất thực'],
  spread: ['Bank spread & NIM', 'Chênh lệch lãi & NIM'],
  diversify: ['Diversification', 'Đa dạng hóa'],
  margins: ['Profit layers', 'Các tầng lợi nhuận'],
  equation: ['Accounting equation', 'Phương trình kế toán'],
  linkage: ['Three-statement links', 'Liên kết ba báo cáo'],
  npv: ['NPV & IRR', 'NPV và IRR'],
  dcf: ['DCF valuation', 'Định giá DCF']
};
function field(id, en, vi, val, attrs = '') { return `<div class="field"><label for="${id}">${en} <span class="vi tag-vi" lang="vi">${vi}</span></label><input id="${id}" type="number" value="${val}" ${attrs}></div>`; }
const out = (en, vi, val, cls = '') => `<div class="out ${cls}"><span>${t(en, vi)}</span><b>${val}</b></div>`;
const V = id => parseFloat($('#' + id).value) || 0;

routes.lab = function (tool) {
  tool = TOOLS[tool] ? tool : 'compound';
  main.innerHTML = pageHero('The Lab', 'Phòng thí nghiệm', 'A calculator for each formula in the course. Change the inputs and watch the results; amounts are in millions of VND unless stated.', 'Mỗi công thức trong khóa học có một máy tính. Thay đổi số liệu và quan sát kết quả; đơn vị là triệu đồng trừ khi ghi khác.') + `<div class="wrap section">
    <nav class="lab-tabs" aria-label="Lab tools">${Object.entries(TOOLS).map(([k, v]) => `<a href="#lab-${k}" ${k === tool ? 'aria-current="page"' : ''}>${v[0]}</a>`).join('')}</nav>
    <h2>${t(TOOLS[tool][0], TOOLS[tool][1])}</h2>
    <div id="tool" style="padding-top:12px"></div></div>`;
  touchDay();
  LAB[tool]($('#tool'));
};

const LAB = {
  compound(el) {
    el.innerHTML = `<div class="tool"><div class="fields">
      ${field('c-p', 'Starting amount (m)', 'Số tiền ban đầu', 100)}
      ${field('c-m', 'Monthly contribution (m)', 'Góp hằng tháng', 0)}
      ${field('c-r', 'Annual rate (%)', 'Lãi suất năm', 8, 'step="0.1"')}
      ${field('c-n', 'Years', 'Số năm', 10)}
      <div class="field"><label for="c-f">Compounding <span class="vi tag-vi" lang="vi">Ghép lãi</span></label><select id="c-f"><option value="1">Annual / Hằng năm</option><option value="12">Monthly / Hằng tháng</option></select></div>
    </div><div><div class="outs" id="c-o"></div><div id="c-ch"></div>
    <div class="legend"><span><i style="background:var(--amber)"></i>${t('Compound', 'Lãi kép')}</span><span><i style="background:var(--dusk)"></i>${t('Simple', 'Lãi đơn')}</span><span><i style="background:var(--up)"></i>${t('Money you put in', 'Tiền em bỏ vào')}</span></div>
    <p class="explainer">${t('The gap between the amber and pink lines is interest on interest.', 'Khoảng cách giữa đường vàng và đường hồng là lãi trên lãi.')}</p></div></div>`;
    const run = () => {
      const P = V('c-p'), c = V('c-m'), r = V('c-r') / 100, n = Math.max(1, Math.min(80, Math.round(V('c-n')))), m = +$('#c-f').value;
      let bal = P; const comp = [P], simp = [P], put = [P];
      for (let y = 1; y <= n; y++) {
        for (let k = 0; k < 12; k++) { if (m === 12) bal *= 1 + r / 12; bal += c; }
        if (m === 1) bal = (bal - 12 * c) * (1 + r) + 12 * c * (1 + r / 2); // annual: contributions earn ~half a year
        comp.push(bal);
        let s = P * (1 + r * y); for (let k = 1; k <= 12 * y; k++) s += c * (1 + r * (y - k / 12)); simp.push(s);
        put.push(P + c * 12 * y);
      }
      const ear = m === 12 ? Math.pow(1 + r / 12, 12) - 1 : r;
      $('#c-o').innerHTML = out('Compound value', 'Giá trị lãi kép', fmtM(comp[n])) + out('Simple value', 'Giá trị lãi đơn', fmtM(simp[n])) + out('You put in', 'Em bỏ vào', fmtM(put[n])) + out('Interest earned', 'Tiền lãi', fmtM(comp[n] - put[n]), 'pos') + out('Effective annual rate', 'Lãi hiệu dụng năm', pct(ear)) + out('Rule of 72', 'Quy tắc 72', r > 0 ? (72 / (r * 100)).toFixed(1) + ' yrs' : '–');
      $('#c-ch').innerHTML = chart([{ pts: comp, cls: 'l1' }, { pts: simp, cls: 'l2' }, { pts: put, cls: 'l3' }], { xlabels: xEvery(n + 1, Math.max(1, Math.round(n / 6)), i => 'y' + i), label: 'Growth over time' });
    };
    $$('input,select', el).forEach(i => i.addEventListener('input', run)); run();
  },
  tvm(el) {
    el.innerHTML = `<div class="tool"><div class="fields">
      <div class="field"><label for="t-mode">Solve for <span class="vi tag-vi" lang="vi">Tìm</span></label><select id="t-mode"><option value="fv">Future value / Giá trị tương lai</option><option value="pv" selected>Present value / Hiện giá</option><option value="r">Rate / Lãi suất</option><option value="n">Years / Số năm</option></select></div>
      ${field('t-pv', 'Present value (m)', 'Hiện giá', 100)}${field('t-fv', 'Future value (m)', 'Giá trị tương lai', 110)}${field('t-r', 'Discount rate (%)', 'Lãi suất chiết khấu', 5, 'step="0.1"')}${field('t-n', 'Years', 'Số năm', 1, 'step="0.5"')}
    </div><div><div class="outs" id="t-o"></div><div id="t-ch"></div><p class="explainer" id="t-x"></p></div></div>`;
    const run = () => {
      const mode = $('#t-mode').value;
      ['pv', 'fv', 'r', 'n'].forEach(k => { $('#t-' + k).disabled = k === mode; $('#t-' + k).style.opacity = k === mode ? .4 : 1; });
      let PV = V('t-pv'), FV = V('t-fv'), r = V('t-r') / 100, n = V('t-n');
      if (mode === 'fv') FV = PV * Math.pow(1 + r, n);
      if (mode === 'pv') PV = FV / Math.pow(1 + r, n);
      if (mode === 'r') r = PV > 0 && n > 0 ? Math.pow(FV / PV, 1 / n) - 1 : 0;
      if (mode === 'n') n = PV > 0 && r > 0 && FV > 0 ? Math.log(FV / PV) / Math.log(1 + r) : 0;
      const nm = { fv: ['Future value', 'Giá trị tương lai', fmtM(FV)], pv: ['Present value', 'Hiện giá', fmtM(PV)], r: ['Rate', 'Lãi suất', pct(r)], n: ['Years', 'Số năm', n.toFixed(2)] }[mode];
      $('#t-o').innerHTML = out(nm[0], nm[1], nm[2]) + out('Growth factor (1+r)^n', 'Hệ số tăng trưởng', Math.pow(1 + r, n).toFixed(4)) + out('Discount factor', 'Hệ số chiết khấu', (1 / Math.pow(1 + r, n)).toFixed(4));
      const N = Math.max(1, Math.ceil(n)), pts = []; for (let i = 0; i <= N; i++) pts.push(PV * Math.pow(1 + r, Math.min(i, n)));
      $('#t-ch').innerHTML = chart([{ pts, cls: 'l1' }], { h: 220, xlabels: xEvery(N + 1, Math.max(1, Math.round(N / 6)), i => 'y' + i), label: 'Value over time' });
      $('#t-x').innerHTML = mode === 'pv' ? t(`Receiving ${fmtM(FV)} in ${n} years is worth ${fmtM(PV)} today at ${pct(r)}. Take the later money only if today’s offer is less than ${fmtM(PV)}.`, `Nhận ${fmtM(FV)} sau ${n} năm tương đương ${fmtM(PV)} hôm nay với lãi suất ${pct(r)}.`) : mode === 'r' ? t(`At ${pct(r)} a year you would be indifferent between the two amounts.`, `Ở mức ${pct(r)} mỗi năm, hai khoản tiền là như nhau.`) : '';
    };
    $$('input,select', el).forEach(i => i.addEventListener('input', run)); run();
  },
  inflation(el) {
    el.innerHTML = `<div class="tool"><div class="fields">
      ${field('i-a', 'Amount today (m)', 'Số tiền hôm nay', 100)}${field('i-i', 'Inflation (%/yr)', 'Lạm phát (%/năm)', 4, 'step="0.1"')}${field('i-n', 'Years', 'Số năm', 5)}${field('i-d', 'Deposit rate (%/yr)', 'Lãi tiền gửi (%/năm)', 5, 'step="0.1"')}
      <hr style="border:0;border-top:1px solid var(--line);width:100%">
      <div class="kbd">${t('Price change of one item', 'Mức tăng giá một món hàng')}</div>
      ${field('i-o', 'Old price', 'Giá cũ', 30000)}${field('i-p', 'New price', 'Giá mới', 50000)}${field('i-y', 'Years between', 'Số năm', 10)}
    </div><div><div class="outs" id="i-o2"></div><div id="i-ch"></div>
    <div class="legend"><span><i style="background:var(--amber)"></i>${t('Deposit, in today’s money', 'Tiền gửi, theo giá hôm nay')}</span><span><i style="background:var(--dusk)"></i>${t('Cash, in today’s money', 'Tiền mặt, theo giá hôm nay')}</span></div></div></div>`;
    const run = () => {
      const A = V('i-a'), inf = V('i-i') / 100, n = Math.max(1, Math.round(V('i-n'))), d = V('i-d') / 100;
      const cash = [], dep = []; for (let y = 0; y <= n; y++) { cash.push(A / Math.pow(1 + inf, y)); dep.push(A * Math.pow((1 + d) / (1 + inf), y)); }
      const realEx = (1 + d) / (1 + inf) - 1, cagr = V('i-o') > 0 && V('i-y') > 0 ? Math.pow(V('i-p') / V('i-o'), 1 / V('i-y')) - 1 : 0;
      $('#i-o2').innerHTML = out('Cash purchasing power', 'Sức mua tiền mặt', fmtM(cash[n]), 'neg') + out('Loss', 'Mất', pct(1 - cash[n] / A, 1), 'neg') + out('Real rate ≈ nominal − inflation', 'Lãi thực xấp xỉ', pct(d - inf)) + out('Real rate, exact', 'Lãi thực chính xác', pct(realEx), realEx < 0 ? 'neg' : 'pos') + out('Item’s average yearly rise', 'Tăng giá bình quân/năm', pct(cagr));
      $('#i-ch').innerHTML = chart([{ pts: dep, cls: 'l1' }, { pts: cash, cls: 'l2' }], { h: 230, xlabels: xEvery(n + 1, Math.max(1, Math.round(n / 6)), i => 'y' + i), label: 'Purchasing power over time' });
    };
    $$('input', el).forEach(i => i.addEventListener('input', run)); run();
  },
  spread(el) {
    el.innerHTML = `<div class="tool"><div class="fields">
      ${field('s-d', 'Deposits (bn)', 'Tiền gửi (tỷ)', 1000)}${field('s-dr', 'Deposit rate (%)', 'Lãi huy động', 4.5, 'step="0.1"')}
      ${field('s-l', 'Loans (bn)', 'Cho vay (tỷ)', 900)}${field('s-lr', 'Lending rate (%)', 'Lãi cho vay', 9, 'step="0.1"')}
      ${field('s-b', 'Government bonds (bn)', 'Trái phiếu chính phủ (tỷ)', 200)}${field('s-br', 'Bond yield (%)', 'Lợi suất trái phiếu', 3, 'step="0.1"')}
      ${field('s-x', 'Loans that default (%)', 'Tỷ lệ nợ xấu mất trắng', 2, 'step="0.1"')}
    </div><div><div class="outs" id="s-o"></div><p class="explainer">${t('Figures here are in billions of VND. NIM is net interest income divided by interest-earning assets (loans + bonds).', 'Đơn vị tỷ đồng. NIM bằng thu nhập lãi thuần chia tài sản sinh lãi (cho vay + trái phiếu).')}</p></div></div>`;
    const run = () => {
      const inc = V('s-l') * V('s-lr') / 100 + V('s-b') * V('s-br') / 100, exp = V('s-d') * V('s-dr') / 100, nii = inc - exp, ea = V('s-l') + V('s-b'), loss = V('s-l') * V('s-x') / 100;
      const bn = x => x.toLocaleString('en-US', { maximumFractionDigits: 1 }) + ' bn';
      $('#s-o').innerHTML = out('Interest income', 'Thu nhập lãi', bn(inc)) + out('Interest expense', 'Chi phí lãi', bn(exp)) + out('Net interest income', 'Thu nhập lãi thuần', bn(nii), nii < 0 ? 'neg' : 'pos') + out('NIM', 'Biên lãi thuần', ea ? pct(nii / ea) : '–') + out('Credit losses', 'Tổn thất tín dụng', bn(loss), 'neg') + out('NII after losses', 'NII sau tổn thất', bn(nii - loss), nii - loss < 0 ? 'neg' : 'pos') + out('Gross spread', 'Chênh lệch gộp', (V('s-lr') - V('s-dr')).toFixed(2) + ' pts');
    };
    $$('input', el).forEach(i => i.addEventListener('input', run)); run();
  },
  diversify(el) {
    el.innerHTML = `<div class="tool"><div class="fields">
      ${field('v-p', 'Chance of a sunny summer (%)', 'Xác suất mùa hè nắng', 50)}
      ${field('v-as', 'Ice cream stock, sunny (%)', 'Cổ phiếu kem, nắng', 30)}${field('v-ar', 'Ice cream stock, rainy (%)', 'Cổ phiếu kem, mưa', -10)}
      ${field('v-bs', 'Umbrella stock, sunny (%)', 'Cổ phiếu ô, nắng', -10)}${field('v-br', 'Umbrella stock, rainy (%)', 'Cổ phiếu ô, mưa', 30)}
      <div class="field"><label for="v-w">Share in ice cream <span class="vi tag-vi" lang="vi">Tỷ trọng cổ phiếu kem</span>: <output id="v-wo"></output></label><input id="v-w" type="range" min="0" max="100" value="50"></div>
    </div><div><div class="outs" id="v-o"></div><div id="v-ch"></div>
    <p class="explainer">${t('The curve shows portfolio risk (standard deviation) for every mix from 0% to 100% ice cream. Its lowest point is the best diversified mix.', 'Đường cong cho thấy rủi ro danh mục (độ lệch chuẩn) với mọi tỷ trọng từ 0% đến 100% cổ phiếu kem. Điểm thấp nhất là danh mục đa dạng hóa tốt nhất.')}</p></div></div>`;
    const run = () => {
      const p = Math.min(1, Math.max(0, V('v-p') / 100)), w = V('v-w') / 100;
      const stat = w => { const s = w * V('v-as') + (1 - w) * V('v-bs'), r = w * V('v-ar') + (1 - w) * V('v-br'); const e = p * s + (1 - p) * r; return { s, r, e, sd: Math.sqrt(p * (s - e) ** 2 + (1 - p) * (r - e) ** 2) }; };
      const A = stat(1), B = stat(0), P = stat(w); $('#v-wo').textContent = Math.round(w * 100) + '%';
      const f = x => x.toFixed(1) + '%';
      $('#v-o').innerHTML = out('Ice cream E(R)', 'E(R) kem', f(A.e)) + out('Umbrella E(R)', 'E(R) ô', f(B.e)) + out('Portfolio E(R)', 'E(R) danh mục', f(P.e)) + out('Portfolio range', 'Biên độ danh mục', f(Math.min(P.s, P.r)) + ' to ' + f(Math.max(P.s, P.r))) + out('Portfolio risk (sd)', 'Rủi ro (độ lệch chuẩn)', f(P.sd), P.sd < .01 ? 'pos' : '') + out('Ice cream alone (sd)', 'Chỉ cổ phiếu kem', f(A.sd));
      const pts = []; for (let k = 0; k <= 20; k++) pts.push(stat(k / 20).sd);
      $('#v-ch').innerHTML = chart([{ pts, cls: 'l1' }], { h: 220, yfmt: v => v.toFixed(0) + '%', xlabels: [[0, '0%'], [5, '25%'], [10, '50%'], [15, '75%'], [20, '100%']], label: 'Risk by portfolio mix' });
    };
    $$('input', el).forEach(i => i.addEventListener('input', run)); run();
  },
  margins(el) {
    el.innerHTML = `<div class="tool"><div class="fields">
      ${field('g-rev', 'Revenue (m)', 'Doanh thu', 1200)}${field('g-cogs', 'COGS as % of revenue', 'Giá vốn theo % doanh thu', 40)}${field('g-fix', 'Fixed operating costs (m)', 'Chi phí hoạt động cố định', 450)}${field('g-int', 'Interest (m)', 'Lãi vay', 30)}${field('g-tax', 'Tax rate (%)', 'Thuế suất', 20)}
      <div class="field"><label for="g-chg">Sales change <span class="vi tag-vi" lang="vi">Thay đổi doanh thu</span>: <output id="g-co"></output></label><input id="g-chg" type="range" min="-40" max="40" value="0"></div>
    </div><div><div class="outs" id="g-o"></div><p class="explainer" id="g-x"></p></div></div>`;
    const run = () => {
      const calc = chg => { const rev = V('g-rev') * (1 + chg), cogs = rev * V('g-cogs') / 100, gp = rev - cogs, op = gp - V('g-fix'), pbt = op - V('g-int'), tax = Math.max(0, pbt) * V('g-tax') / 100; return { rev, gp, op, pbt, ni: pbt - tax }; };
      const chg = V('g-chg') / 100, b = calc(0), c = calc(chg); $('#g-co').textContent = (chg > 0 ? '+' : '') + Math.round(chg * 100) + '%';
      const m = (x, r) => fmtM(x) + (r ? ` (${pct(x / r, 1)} margin)` : '');
      $('#g-o').innerHTML = out('Revenue', 'Doanh thu', fmtM(c.rev)) + out('Gross profit', 'Lợi nhuận gộp', m(c.gp, c.rev)) + out('Operating profit', 'Lợi nhuận hoạt động', m(c.op, c.rev), c.op < 0 ? 'neg' : '') + out('Profit before tax', 'Lợi nhuận trước thuế', fmtM(c.pbt), c.pbt < 0 ? 'neg' : '') + out('Net income', 'Lợi nhuận ròng', m(c.ni, c.rev), c.ni < 0 ? 'neg' : 'pos');
      const opc = b.op !== 0 ? (c.op - b.op) / Math.abs(b.op) : 0;
      $('#g-x').innerHTML = chg ? t(`A ${pct(chg, 0)} change in sales moved operating profit by ${pct(opc, 1)}. Fixed costs amplify the swing: that is operating leverage.`, `Doanh thu thay đổi ${pct(chg, 0)} làm lợi nhuận hoạt động thay đổi ${pct(opc, 1)}. Chi phí cố định khuếch đại biến động: đó là đòn bẩy hoạt động.`) : t('Move the sales slider to see operating leverage.', 'Kéo thanh doanh thu để thấy đòn bẩy hoạt động.');
    };
    $$('input', el).forEach(i => i.addEventListener('input', run)); run();
  },
  equation(el) {
    const st = { cash: 0, inv: 0, eq: 0, loan: 0, pay: 0, cap: 0, re: 0 }, log = [];
    const TX = [
      ['owner', 'Owner invests cash', 'Chủ góp vốn bằng tiền', a => { st.cash += a; st.cap += a; }],
      ['borrow', 'Borrow from the bank', 'Vay ngân hàng', a => { st.cash += a; st.loan += a; }],
      ['equip', 'Buy equipment with cash', 'Mua thiết bị bằng tiền', a => { st.cash -= a; st.eq += a; }],
      ['stock', 'Buy inventory on credit', 'Mua hàng trả chậm', a => { st.inv += a; st.pay += a; }],
      ['sell', 'Sell inventory costing X for 2.5× X cash', 'Bán hàng giá vốn X thu 2,5× X tiền', a => { const c = Math.min(a, st.inv); st.inv -= c; st.cash += c * 2.5; st.re += c * 1.5; return c; }],
      ['paysup', 'Pay a supplier', 'Trả nhà cung cấp', a => { st.cash -= a; st.pay -= a; }],
      ['wages', 'Pay wages (expense)', 'Trả lương (chi phí)', a => { st.cash -= a; st.re -= a; }],
      ['div', 'Pay a dividend', 'Chia cổ tức', a => { st.cash -= a; st.re -= a; }],
      ['repay', 'Repay the loan', 'Trả nợ vay', a => { st.cash -= a; st.loan -= a; }]
    ];
    el.innerHTML = `<div class="tool"><div class="fields">
      ${field('e-a', 'Amount (m)', 'Số tiền', 100)}
      <div class="field"><label for="e-t">Transaction <span class="vi tag-vi" lang="vi">Giao dịch</span></label><select id="e-t">${TX.map(x => `<option value="${x[0]}">${x[1]} / ${x[2]}</option>`).join('')}</select></div>
      <div class="btns" style="margin:0"><button class="btn small" id="e-go">Record transaction</button><button class="btn small ghost" id="e-rs">Start over</button></div>
    </div><div><div class="eq" id="e-eq"></div><div class="outs" id="e-d"></div><ol class="tx-log" id="e-log"></ol></div></div>`;
    const draw = () => {
      const A = st.cash + st.inv + st.eq, Li = st.loan + st.pay, E = st.cap + st.re;
      $('#e-eq').innerHTML = out('Assets', 'Tài sản', fmtM(A)) + '<em>=</em>' + out('Liabilities', 'Nợ phải trả', fmtM(Li)) + '<em>+</em>' + out('Equity', 'Vốn chủ', fmtM(E));
      $('#e-d').innerHTML = out('Cash', 'Tiền', fmtM(st.cash), st.cash < 0 ? 'neg' : '') + out('Inventory', 'Hàng tồn kho', fmtM(st.inv)) + out('Equipment', 'Thiết bị', fmtM(st.eq)) + out('Bank loan', 'Vay ngân hàng', fmtM(st.loan)) + out('Owed to suppliers', 'Phải trả NCC', fmtM(st.pay)) + out('Owner capital', 'Vốn góp', fmtM(st.cap)) + out('Retained earnings', 'Lợi nhuận giữ lại', fmtM(st.re));
      $('#e-log').innerHTML = log.length ? log.map((l, i) => `<li><span>${i + 1}. ${l[0]}</span><span>${fmtM(l[1])}</span></li>`).join('') : `<li class="kbd">${t('Record a transaction to start. Try: owner invests 500, borrow 300, buy equipment 400.', 'Ghi một giao dịch để bắt đầu. Thử: chủ góp 500, vay 300, mua thiết bị 400.')}</li>`;
    };
    $('#e-go').onclick = () => { const a = Math.abs(V('e-a')); const tx = TX.find(x => x[0] === $('#e-t').value); const r = tx[3](a); log.push([`${tx[1]} / <span lang="vi">${tx[2]}</span>`, r === undefined ? a : r]); draw(); };
    $('#e-rs').onclick = () => { Object.keys(st).forEach(k => st[k] = 0); log.length = 0; draw(); };
    draw();
  },
  linkage(el) {
    const SC = {
      dep: ['Depreciation rises', 'Khấu hao tăng'], revcash: ['Revenue rises, collected in cash', 'Doanh thu tăng, thu tiền mặt'], revcredit: ['Revenue rises, sold on credit', 'Doanh thu tăng, bán chịu'],
      invcash: ['Buy inventory with cash', 'Mua hàng tồn kho bằng tiền'], capex: ['Buy equipment with cash (capex)', 'Mua thiết bị bằng tiền (capex)'], debt: ['Borrow from a bank', 'Vay ngân hàng'], div: ['Pay a dividend', 'Trả cổ tức']
    };
    el.innerHTML = `<div class="tool"><div class="fields">
      <div class="field"><label for="k-s">Change <span class="vi tag-vi" lang="vi">Thay đổi</span></label><select id="k-s">${Object.entries(SC).map(([k, v]) => `<option value="${k}">${v[0]} / ${v[1]}</option>`).join('')}</select></div>
      ${field('k-a', 'Amount', 'Số tiền', 10)}${field('k-t', 'Tax rate (%)', 'Thuế suất', 25)}
      <div class="btns" style="margin:0"><button class="btn small" id="k-test">Test me</button><button class="btn small ghost" id="k-show" hidden>Reveal the answer</button></div>
      <p class="kbd" id="k-cnt"></p>
    </div><div><p class="explainer" id="k-q"></p><div class="stmts" id="k-o"></div><div class="bscheck" id="k-c"></div><p class="explainer" id="k-x"></p></div></div>`;
    let hidden = false;
    const calc = () => {
      const s = $('#k-s').value, a = V('k-a'), tx = V('k-t') / 100, d = { pti: 0, tax: 0, ni: 0, da: 0, wc: 0, cfi: 0, cff: 0, ar: 0, inv: 0, ppe: 0, debt: 0, div: 0 };
      if (s === 'dep') { d.pti = -a; d.da = a; d.ppe = -a; }
      if (s === 'revcash') { d.pti = a; }
      if (s === 'revcredit') { d.pti = a; d.wc = -a; d.ar = a; }
      if (s === 'invcash') { d.wc = -a; d.inv = a; }
      if (s === 'capex') { d.cfi = -a; d.ppe = a; }
      if (s === 'debt') { d.cff = a; d.debt = a; }
      if (s === 'div') { d.cff = -a; d.div = a; }
      d.tax = d.pti * tx; d.ni = d.pti - d.tax; d.cfo = d.ni + d.da + d.wc; d.cash = d.cfo + d.cfi + d.cff;
      d.assets = d.cash + d.ar + d.inv + d.ppe; d.re = d.ni - d.div; d.le = d.debt + d.re;
      return { s, a, tx, d };
    };
    const f = x => Math.abs(x) < 1e-9 ? '0' : (x > 0 ? '+' : '−') + Math.abs(x).toLocaleString('en-US', { maximumFractionDigits: 2 });
    const row = (en, vi, x, strong) => `<div class="srow ${strong ? 'tot' : ''}"><span>${t(en, vi)}</span><b class="${hidden ? '' : x > 1e-9 ? 'pos' : x < -1e-9 ? 'neg' : ''}">${hidden ? '?' : f(x)}</b></div>`;
    const run = () => {
      const { s, a, tx, d } = calc();
      $('#k-o').innerHTML = `<div class="stmt"><h4>${t('Income statement', 'Kết quả kinh doanh')}</h4>${row('Pre-tax income', 'Lợi nhuận trước thuế', d.pti)}${row('Tax', 'Thuế', d.tax)}${row('Net income', 'Lợi nhuận ròng', d.ni, 1)}</div>
        <div class="stmt"><h4>${t('Cash flow statement', 'Lưu chuyển tiền tệ')}</h4>${row('Net income', 'Lợi nhuận ròng', d.ni)}${row('Add back D&A', 'Cộng lại khấu hao', d.da)}${row('Working capital', 'Vốn lưu động', d.wc)}${row('Operating (CFO)', 'Hoạt động (CFO)', d.cfo, 1)}${row('Investing (CFI)', 'Đầu tư (CFI)', d.cfi)}${row('Financing (CFF)', 'Tài chính (CFF)', d.cff)}${row('Change in cash', 'Thay đổi tiền', d.cash, 1)}</div>
        <div class="stmt"><h4>${t('Balance sheet', 'Cân đối kế toán')}</h4>${row('Cash', 'Tiền', d.cash)}${row('Receivables', 'Phải thu', d.ar)}${row('Inventory', 'Tồn kho', d.inv)}${row('PP&E', 'Tài sản cố định', d.ppe)}${row('Total assets', 'Tổng tài sản', d.assets, 1)}${row('Debt', 'Nợ vay', d.debt)}${row('Retained earnings', 'Lợi nhuận giữ lại', d.re)}${row('Liabilities + equity', 'Nợ + vốn chủ', d.le, 1)}</div>`;
      const ok = Math.abs(d.assets - d.le) < 1e-9;
      $('#k-c').innerHTML = hidden ? '' : `<span class="${ok ? 'ok' : 'bad'}">${ok ? '✓' : '✗'}</span> ${t(`Balance check: assets ${f(d.assets)} = liabilities + equity ${f(d.le)}`, `Kiểm tra cân đối: tài sản ${f(d.assets)} = nợ + vốn chủ ${f(d.le)}`)}`;
      const X = {
        dep: [`Depreciation is an expense, so pre-tax income falls by ${a} and tax falls by ${f(-d.tax).slice(1)}. It uses no cash, so it is added back: cash rises by the tax saving only.`, `Khấu hao là chi phí nên lợi nhuận trước thuế giảm ${a} và thuế giảm ${f(-d.tax).slice(1)}. Khấu hao không dùng tiền nên được cộng lại: tiền chỉ tăng đúng phần thuế giảm.`],
        revcash: ['Revenue raises profit; after tax, net income and cash rise by the same amount, and retained earnings match.', 'Doanh thu làm tăng lợi nhuận; sau thuế, lợi nhuận ròng và tiền tăng bằng nhau, lợi nhuận giữ lại cũng vậy.'],
        revcredit: ['Profit rises now, but the customer has not paid: receivables rise and are subtracted in CFO. Cash falls by the tax paid on a sale not yet collected.', 'Lợi nhuận tăng ngay nhưng khách chưa trả: phải thu tăng và bị trừ trong CFO. Tiền giảm đúng phần thuế phải nộp cho khoản chưa thu.'],
        invcash: ['Nothing is sold yet, so profit is unchanged. Cash turns into inventory: one asset swaps for another.', 'Chưa bán gì nên lợi nhuận không đổi. Tiền biến thành hàng tồn kho: tài sản này đổi lấy tài sản khác.'],
        capex: ['Capex is not an expense. Cash leaves through investing and becomes PP&E; profit is affected later, through depreciation.', 'Capex không phải chi phí. Tiền ra qua hoạt động đầu tư và thành tài sản cố định; lợi nhuận bị ảnh hưởng sau đó qua khấu hao.'],
        debt: ['Borrowing is financing, not income: cash and debt rise together.', 'Vay là hoạt động tài chính, không phải thu nhập: tiền và nợ cùng tăng.'],
        div: ['A dividend is paid to owners, not an expense: financing outflow, and retained earnings fall.', 'Cổ tức trả cho chủ sở hữu, không phải chi phí: dòng tiền tài chính ra, lợi nhuận giữ lại giảm.']
      }[s];
      $('#k-x').innerHTML = hidden ? '' : t(X[0], X[1]);
      $('#k-q').innerHTML = hidden ? t(`<b>Your turn:</b> ${SC[s][0].toLowerCase()} by ${a}, tax rate ${Math.round(tx * 100)}%. Walk through all three statements on paper, then reveal.`, `<b>Đến lượt em:</b> ${SC[s][1].toLowerCase()} ${a}, thuế suất ${Math.round(tx * 100)}%. Tự đi qua ba báo cáo trên giấy rồi mở đáp án.`) : '';
      $('#k-cnt').innerHTML = t(`Walk-throughs practised: ${mem.walk}`, `Số lần đã luyện: ${mem.walk}`);
    };
    $('#k-test').onclick = () => { const keys = Object.keys(SC); $('#k-s').value = keys[Math.floor(Math.random() * keys.length)]; $('#k-a').value = [10, 20, 40, 50, 100][Math.floor(Math.random() * 5)]; hidden = true; $('#k-show').hidden = false; run(); };
    $('#k-show').onclick = () => { hidden = false; $('#k-show').hidden = true; mem.walk = (mem.walk || 0) + 1; save(); run(); };
    $$('input,select', el).forEach(i => i.addEventListener('input', () => { hidden = false; $('#k-show').hidden = true; run(); })); run();
  },
  npv(el) {
    el.innerHTML = `<div class="tool"><div class="fields">
      <div class="field"><label for="n-cf">Cash flows, year 0 first <span class="vi tag-vi" lang="vi">Dòng tiền, năm 0 trước</span></label><input id="n-cf" type="text" value="-1000, 300, 350, 400, 450"></div>
      ${field('n-r', 'Cost of capital (%)', 'Chi phí vốn', 10, 'step="0.5"')}
    </div><div><div class="outs" id="n-o"></div><div id="n-ch"></div><p class="explainer" id="n-x"></p></div></div>`;
    const run = () => {
      const cf = $('#n-cf').value.split(/[,;\s]+/).map(Number).filter(x => !isNaN(x)), r = V('n-r') / 100;
      if (cf.length < 2) { $('#n-o').innerHTML = out('Enter at least two cash flows', 'Nhập ít nhất hai dòng tiền', '–'); return; }
      const npv = k => cf.reduce((a, c, i) => a + c / Math.pow(1 + k, i), 0);
      let lo = -0.99, hi = 10, irr = null;
      if (npv(lo) * npv(hi) < 0) { for (let i = 0; i < 200; i++) { const m = (lo + hi) / 2; if (npv(lo) * npv(m) <= 0) hi = m; else lo = m; } irr = (lo + hi) / 2; }
      let cum = 0, pb = null; for (let i = 0; i < cf.length; i++) { const prev = cum; cum += cf[i]; if (pb === null && i > 0 && prev < 0 && cum >= 0) pb = i - 1 + (-prev / cf[i]); }
      const pvIn = cf.slice(1).reduce((a, c, i) => a + c / Math.pow(1 + r, i + 1), 0), wrong = cf.reduce((a, c, i) => a + c / Math.pow(1 + r, i + 1), 0);
      const n = npv(r), num = x => x.toLocaleString('en-US', { maximumFractionDigits: 2 });
      $('#n-o').innerHTML = out('NPV', 'NPV', num(n), n >= 0 ? 'pos' : 'neg') + out('IRR', 'IRR', irr === null ? '–' : pct(irr)) + out('Payback', 'Thời gian hoàn vốn', pb === null ? 'Never' : pb.toFixed(2) + ' yrs') + out('Profitability index', 'Chỉ số sinh lời', cf[0] < 0 ? (pvIn / -cf[0]).toFixed(2) : '–') + out('Excel trap: =NPV(r, all flows)', 'Bẫy Excel: =NPV(r, mọi dòng)', num(wrong), 'neg');
      const pts = []; for (let k = 0; k <= 30; k++) pts.push(npv(k / 100));
      $('#n-ch').innerHTML = chart([{ pts, cls: 'l1' }], { h: 220, yfmt: v => Math.round(v).toLocaleString('en-US'), xlabels: [[0, '0%'], [10, '10%'], [20, '20%'], [30, '30%']], label: 'NPV profile by discount rate' });
      $('#n-x').innerHTML = t(`The curve is the NPV at each discount rate; it crosses zero at the IRR. Excel’s NPV() treats the first value as one year away, so add the year-0 flow outside the function.`, `Đường cong là NPV ở mỗi mức chiết khấu; cắt trục 0 tại IRR. Hàm NPV() của Excel coi giá trị đầu tiên cách một năm, nên cộng dòng tiền năm 0 bên ngoài hàm.`);
    };
    $$('input', el).forEach(i => i.addEventListener('input', run)); run();
  },
  dcf(el) {
    el.innerHTML = `<div class="tool"><div class="fields">
      <div class="field"><label for="d-cf">Free cash flow, years 1–5 <span class="vi tag-vi" lang="vi">FCF năm 1–5</span></label><input id="d-cf" type="text" value="100, 110, 120, 130, 140"></div>
      ${field('d-w', 'WACC (%)', 'WACC', 10, 'step="0.5"')}${field('d-g', 'Terminal growth (%)', 'Tăng trưởng cuối kỳ', 3, 'step="0.5"')}${field('d-nd', 'Net debt', 'Nợ ròng', 300)}${field('d-sh', 'Shares (m)', 'Số cổ phiếu (triệu)', 100)}
    </div><div><div class="outs" id="d-o"></div><table class="mini-t num" id="d-t"></table><h3 class="sub">${t('Value per share: WACC × terminal growth', 'Giá trị mỗi cổ phiếu: WACC × tăng trưởng cuối kỳ')}</h3><table class="mini-t num sens" id="d-s"></table><p class="explainer" id="d-x"></p></div></div>`;
    const val = (cf, w, g, nd, sh) => {
      if (w <= g) return null;
      const pv = cf.map((c, i) => c / Math.pow(1 + w, i + 1)), tv = cf[cf.length - 1] * (1 + g) / (w - g), pvtv = tv / Math.pow(1 + w, cf.length), ev = pv.reduce((a, b) => a + b, 0) + pvtv;
      return { pv, tv, pvtv, ev, eq: ev - nd, ps: sh ? (ev - nd) / sh : 0 };
    };
    const run = () => {
      const cf = $('#d-cf').value.split(/[,;\s]+/).map(Number).filter(x => !isNaN(x) && $('#d-cf').value.trim() !== ''), w = V('d-w') / 100, g = V('d-g') / 100, nd = V('d-nd'), sh = V('d-sh');
      const n1 = x => x.toLocaleString('en-US', { maximumFractionDigits: 1 }), n2 = x => x.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
      const r = cf.length ? val(cf, w, g, nd, sh) : null;
      if (!r) { $('#d-o').innerHTML = out('WACC must be above terminal growth', 'WACC phải lớn hơn tăng trưởng cuối kỳ', '–', 'neg'); $('#d-t').innerHTML = $('#d-s').innerHTML = ''; return; }
      $('#d-o').innerHTML = out('PV of forecast FCF', 'Hiện giá FCF dự phóng', n1(r.pv.reduce((a, b) => a + b, 0))) + out('Terminal value', 'Giá trị cuối kỳ', n1(r.tv)) + out('PV of terminal value', 'Hiện giá giá trị cuối kỳ', n1(r.pvtv)) + out('Enterprise value', 'Giá trị doanh nghiệp', n1(r.ev), 'pos') + out('Share of EV from terminal value', 'Tỷ trọng giá trị cuối kỳ', pct(r.pvtv / r.ev, 1)) + out('Equity value', 'Giá trị vốn chủ', n1(r.eq)) + out('Value per share', 'Giá trị mỗi cổ phiếu', n2(r.ps), 'pos');
      $('#d-t').innerHTML = `<thead><tr><th>${t('Year', 'Năm')}</th>${cf.map((_, i) => `<th>${i + 1}</th>`).join('')}</tr></thead><tbody><tr><td>FCF</td>${cf.map(c => `<td>${n1(c)}</td>`).join('')}</tr><tr><td>${t('Discount factor', 'Hệ số chiết khấu')}</td>${cf.map((_, i) => `<td>${(1 / Math.pow(1 + w, i + 1)).toFixed(3)}</td>`).join('')}</tr><tr><td>${t('Present value', 'Hiện giá')}</td>${r.pv.map(v => `<td>${n1(v)}</td>`).join('')}</tr></tbody>`;
      const ws = [-2, -1, 0, 1, 2].map(k => w + k / 100), gs = [-1, -.5, 0, .5, 1].map(k => g + k / 100);
      $('#d-s').innerHTML = `<thead><tr><th>WACC \\ g</th>${gs.map(x => `<th>${pct(x, 1)}</th>`).join('')}</tr></thead><tbody>${ws.map((wi, i) => `<tr><th>${pct(wi, 1)}</th>${gs.map((gi, j) => { const v = val(cf, wi, gi, nd, sh); return `<td class="${i === 2 && j === 2 ? 'base' : ''}">${v ? n2(v.ps) : '–'}</td>`; }).join('')}</tr>`).join('')}</tbody>`;
      $('#d-x').innerHTML = t(`Terminal value is ${pct(r.pvtv / r.ev, 0)} of enterprise value here, so the corners of the table matter more than any single year of the forecast.`, `Ở đây giá trị cuối kỳ chiếm ${pct(r.pvtv / r.ev, 0)} giá trị doanh nghiệp, nên các góc của bảng quan trọng hơn bất kỳ năm dự phóng nào.`);
    };
    $$('input', el).forEach(i => i.addEventListener('input', run)); run();
  }
};

/* ---------- flashcards (Leitner) ---------- */
const GAPS = [0, 1, 3, 7, 14, 30];
function addDays(n) { const d = new Date(); d.setDate(d.getDate() + n); return d.toISOString().slice(0, 10); }
function dueCards() { const d = today(); return VOCAB.filter(v => mem.cards[v[0]] && mem.cards[v[0]].due <= d); }
routes.cards = function () {
  touchDay();
  let dir = 'en', queue, cur, flipped = false, mode = 'due';
  const build = () => {
    if (mode === 'due') queue = dueCards();
    else queue = VOCAB.filter(v => v[4].startsWith(mode)).slice();
    queue.sort(() => Math.random() - .5);
  };
  main.innerHTML = pageHero('Flashcards', 'Thẻ ghi nhớ', 'Passing a lesson adds its terms here. Cards you know move to a higher box and return after 1, 3, 7, 14 and then 30 days. Cards you miss go back to box 1.', 'Mỗi bài em vượt qua sẽ thêm từ vựng vào đây. Thẻ đã thuộc lên hộp cao hơn và quay lại sau 1, 3, 7, 14 rồi 30 ngày. Thẻ trả lời sai quay về hộp 1.') + `<div class="wrap">
    <div class="deck-grid section"><div>
      <div class="card" id="card" tabindex="0" role="button" aria-label="Flip card"><div class="card-in"><div class="face front" id="ff"></div><div class="face back" id="fb"></div></div></div>
      <div class="card-btns"><button class="btn ghost small" id="again">Again (1)</button><button class="btn small" id="good">I knew it (2)</button><button class="btn ghost small" id="dir">Show Vietnamese first</button></div>
      <p class="kbd" style="margin-top:10px"><kbd>Space</kbd> flips the card, <kbd>1</kbd> marks it again, <kbd>2</kbd> marks it known</p>
    </div><div class="side">
      <div class="field"><label for="deck-sel">Deck <span class="vi tag-vi" lang="vi">Bộ thẻ</span></label><select id="deck-sel" class="select"><option value="due">Due today / Cần ôn hôm nay</option>${COURSE.filter(m => READY.some(l => l.mod === m)).map((m, i) => `<option value="${m.id}">Module ${COURSE.indexOf(m) + 1}: ${esc(m.en)}</option>`).join('')}</select></div>
      <h3 class="sub">${t('Your boxes', 'Các hộp của em')}</h3><div class="boxes" id="boxes"></div><div class="boxes-l">${GAPS.map((g, i) => `<span>${i + 1}</span>`).join('')}</div>
      <p class="kbd" id="left"></p>
    </div></div></div>`;
  const drawBoxes = () => {
    const counts = GAPS.map((_, i) => Object.values(mem.cards).filter(c => c.box === i + 1).length), mx = Math.max(1, ...counts);
    $('#boxes').innerHTML = counts.map(c => `<div title="${c} cards"><i style="height:${(c / mx) * 100}%"></i></div>`).join('');
    $('#left').innerHTML = t(`${queue.length} card${queue.length === 1 ? '' : 's'} left in this session. ${Object.keys(mem.cards).length} of ${VOCAB.length} terms unlocked.`, `Còn ${queue.length} thẻ. Đã mở ${Object.keys(mem.cards).length}/${VOCAB.length} thuật ngữ.`);
  };
  const show = () => {
    flipped = false; $('#card').classList.remove('flip');
    cur = queue[0];
    if (!cur) {
      $('#ff').innerHTML = mode === 'due' ? (Object.keys(mem.cards).length ? `<b>All caught up.</b><small>${t('Nothing due today. Pick a module deck to practise anyway.', 'Hôm nay không có thẻ cần ôn. Chọn một module để luyện thêm.')}</small>` : `<b>No cards yet.</b><small>${t('Pass a lesson quiz to unlock its vocabulary, or pick a module deck to browse.', 'Vượt qua quiz một bài để mở từ vựng, hoặc chọn module để xem trước.')}</small>`) : '<b>Deck finished.</b>';
      $('#fb').innerHTML = ''; ['again', 'good'].forEach(i => $('#' + i).disabled = true); drawBoxes(); return;
    }
    ['again', 'good'].forEach(i => $('#' + i).disabled = false);
    const L = byId(cur[4]);
    $('#ff').innerHTML = dir === 'en' ? `<b>${esc(cur[0])}</b><small>Lesson ${L.mi + 1}.${L.li + 1}, tap to flip</small>` : `<b lang="vi">${esc(cur[1])}</b><small>Bài ${L.mi + 1}.${L.li + 1}, chạm để lật</small>`;
    $('#fb').innerHTML = `<div class="t">${esc(cur[0])}</div><div class="v" lang="vi">${esc(cur[1])}</div><p>${esc(cur[2])}</p><p lang="vi" style="color:var(--muted)">${esc(cur[3])}</p>`;
    drawBoxes();
  };
  const flip = () => { if (!cur) return; flipped = !flipped; $('#card').classList.toggle('flip', flipped); };
  const grade = ok => {
    if (!cur) return;
    const c = mem.cards[cur[0]] || { box: 1, due: today() };
    c.box = ok ? Math.min(GAPS.length, c.box + 1) : 1; c.due = addDays(ok ? GAPS[c.box - 1] : 0);
    mem.cards[cur[0]] = c; dayLog().cards++; save(); queue.shift();
    if (!ok) queue.push(cur);
    show();
  };
  $('#card').onclick = flip;
  $('#again').onclick = () => grade(false); $('#good').onclick = () => grade(true);
  $('#dir').onclick = () => { dir = dir === 'en' ? 'vi' : 'en'; $('#dir').textContent = dir === 'en' ? 'Show Vietnamese first' : 'Show English first'; show(); };
  $('#deck-sel').onchange = e => { mode = e.target.value; build(); show(); };
  routes.cards.key = e => { if (e.target.matches('input,textarea,select')) return; if (e.code === 'Space') { e.preventDefault(); flip(); } if (e.key === '1') grade(false); if (e.key === '2') grade(true); };
  build(); show();
};
document.addEventListener('keydown', e => { if (/^#\/?cards/.test(location.hash) && routes.cards.key) routes.cards.key(e); });

/* ---------- practice: mixed review + mistake notebook ---------- */
routes.review = function (tab) {
  touchDay();
  tab = tab === 'mistakes' ? 'mistakes' : 'mixed';
  const mk = mistakeList();
  const head = pageHero('Practice', 'Luyện tập', 'Mixed review pulls questions from lessons you have attempted. The mistake notebook collects every question you got wrong; a question leaves the notebook after you answer it correctly twice in a row.', 'Ôn tập tổng hợp lấy câu hỏi từ các bài em đã làm. Sổ lỗi sai lưu mọi câu em trả lời sai; câu hỏi rời sổ khi em trả lời đúng hai lần liên tiếp.',
    `<div class="tabs"><a href="#review" class="${tab === 'mixed' ? 'on' : ''}">${t('Mixed review', 'Ôn tổng hợp')}</a><a href="#review-mistakes" class="${tab === 'mistakes' ? 'on' : ''}">${t('Mistake notebook', 'Sổ lỗi sai')} <span class="cnt">${mk.length}</span></a></div>`);
  if (tab === 'mistakes') {
    if (!mk.length) { main.innerHTML = `${head}<div class="wrap section"><div class="empty">${t('No mistakes saved. Questions you answer wrong in any quiz will appear here for retesting.', 'Chưa có lỗi sai. Câu em làm sai trong quiz sẽ xuất hiện ở đây để làm lại.')}</div></div>`; return; }
    const qs = mk.sort((a, b) => b.n - a.n).map(m => { const l = byId(m.lid); return Object.assign([...LESSONS[m.lid].quiz[m.qi]], { lid: m.lid, qi: m.qi, src: `Lesson ${l.mi + 1}.${l.li + 1}, missed ${m.n}×${m.streak ? `, ${m.streak} correct in a row` : ''}` }); });
    main.innerHTML = `${head}<div class="wrap section"><p class="kbd">${t(`${qs.length} question${qs.length > 1 ? 's' : ''} to fix, hardest first.`, `${qs.length} câu cần sửa, câu khó nhất trước.`)}</p><div id="rv">${quizHTML(qs, 'r')}</div></div>`;
    wireQuiz($('#rv'), qs, 'r', (sc, n) => {
      dayLog().retest++; save();
      $('#r-score').innerHTML = `<div class="score"><b>${sc}/${n}</b><div>${bi(`<p style="margin:0">${mistakeList().length} question(s) still in the notebook.</p>`, `<p style="margin:0">Còn ${mistakeList().length} câu trong sổ.</p>`)}</div><button class="btn small" id="again-r">Retest again</button></div>`;
      $('#again-r').onclick = () => routes.review('mistakes');
    });
    return;
  }
  const pool = READY.filter(l => mem.best[l.id] !== undefined);
  if (!pool.length) { main.innerHTML = `${head}<div class="wrap section"><div class="empty">${t('Attempt at least one lesson quiz first.', 'Hãy làm ít nhất một bài quiz trước.')} <a href="#lesson-${READY[0].id}">Start lesson 1</a></div></div>`; return; }
  const qs = pool.flatMap(l => LESSONS[l.id].quiz.map((q, qi) => Object.assign([...q], { lid: l.id, qi, src: `Lesson ${l.mi + 1}.${l.li + 1}` }))).sort(() => Math.random() - .5).slice(0, 6);
  const hist = mem.reviews.slice(-8);
  main.innerHTML = `${head}<div class="wrap section">${hist.length ? `<p class="kbd">${t('Recent review scores', 'Điểm ôn gần đây')}: ${hist.map(h => Math.round(h.s * 100) + '%').join(', ')}</p>` : ''}<div id="rv" style="padding-top:12px">${quizHTML(qs, 'r')}</div></div>`;
  wireQuiz($('#rv'), qs, 'r', (sc, n) => {
    mem.reviews.push({ d: today(), s: sc / n }); dayLog().quiz++; save();
    $('#r-score').innerHTML = `<div class="score"><b>${sc}/${n}</b><div>${bi(`<p style="margin:0">${sc / n >= PASS ? 'Solid retention.' : 'Some ideas are fading. Missed questions were added to your mistake notebook.'}</p>`, `<p style="margin:0">${sc / n >= PASS ? 'Ghi nhớ tốt.' : 'Một số ý đang bị quên. Câu sai đã được thêm vào sổ lỗi sai.'}</p>`)}</div><button class="btn small" id="again-r">New set</button></div>`;
    $('#again-r').onclick = () => routes.review();
  });
};

/* ---------- glossary ---------- */
routes.glossary = function () {
  main.innerHTML = pageHero('Glossary', 'Thuật ngữ', '', '') + `<div class="wrap section">
    <input class="search" id="gq" type="search" placeholder="Search in English or Vietnamese / Tìm bằng tiếng Anh hoặc tiếng Việt" aria-label="Search glossary">
    <div class="letters" id="letters"></div><div class="gl" id="gl"></div></div>`;
  const norm = s => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/đ/g, 'd');
  const draw = () => {
    const q = norm($('#gq').value.trim());
    const list = VOCAB.filter(v => !q || norm(v.slice(0, 4).join(' ')).includes(q)).sort((a, b) => a[0].localeCompare(b[0]));
    const firsts = [...new Set(list.map(v => v[0][0].toUpperCase()))];
    $('#letters').innerHTML = firsts.map(c => `<a href="#glossary" data-l="${c}">${c}</a>`).join('');
    $$('#letters a').forEach(a => a.onclick = e => { e.preventDefault(); const el = document.querySelector(`#gl [data-first="${a.dataset.l}"]`); if (el) el.scrollIntoView({ block: 'start' }); });
    $('#gl').innerHTML = list.length ? list.map(v => { const L = byId(v[4]); return `<div data-first="${v[0][0].toUpperCase()}"><b>${esc(v[0])}</b><span class="gv" lang="vi">${esc(v[1])}</span><p class="en">${esc(v[2])}</p><p class="vi" lang="vi">${esc(v[3])}</p><a href="#lesson-${v[4]}">Lesson ${L.mi + 1}.${L.li + 1}</a></div>`; }).join('') : `<p class="kbd">${t('No term matches that search.', 'Không có thuật ngữ phù hợp.')}</p>`;
  };
  $('#gq').oninput = draw; draw();
};

/* ---------- notes ---------- */
routes.notes = function () {
  const ids = READY.filter(l => (mem.notes[l.id] || '').trim() || (mem.tasks[l.id] || '').trim());
  main.innerHTML = pageHero('Notes', 'Ghi chú', 'Everything you wrote in lesson notes and practice tasks. Copy or export it to keep a copy outside this browser, and back up your full progress here.', 'Mọi ghi chú và bài làm em đã viết. Sao chép hoặc xuất ra để giữ bản sao ngoài trình duyệt, và sao lưu toàn bộ tiến độ tại đây.') + `<div class="wrap section">
    <div class="btns" style="margin:0 0 22px"><button class="btn small" id="exp" ${ids.length ? '' : 'disabled'}>Export notes (.md)</button><button class="btn small ghost" id="cpy" ${ids.length ? '' : 'disabled'}>Copy notes</button><button class="btn small ghost" id="expall">Export full progress backup</button><label class="btn small ghost" style="cursor:pointer">Restore backup<input type="file" id="imp" accept="application/json" hidden></label></div>
    ${ids.length ? ids.map(l => `<div class="note"><h3><a href="#lesson-${l.id}" style="color:var(--navy);text-decoration:none">${l.mi + 1}.${l.li + 1} ${esc(l.en)}</a></h3>${mem.notes[l.id] ? `<div class="kbd">Notes</div><pre>${esc(mem.notes[l.id])}</pre>` : ''}${mem.tasks[l.id] ? `<div class="kbd" style="margin-top:10px">Practice answer</div><pre>${esc(mem.tasks[l.id])}</pre>` : ''}</div>`).join('') : `<div class="empty">${t('No notes yet. Open a lesson and write in the notes box beside it.', 'Chưa có ghi chú. Mở một bài và viết vào ô ghi chú bên cạnh.')}</div>`}</div>`;
  const dl = (name, text, type) => { const a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([text], { type })); a.download = name; a.click(); setTimeout(() => URL.revokeObjectURL(a.href), 1000); };
  const md = () => '# FinanceBoy notes\n\n' + ids.map(l => `## ${l.mi + 1}.${l.li + 1} ${l.en}\n\n${mem.notes[l.id] ? '### Notes\n\n' + mem.notes[l.id] + '\n\n' : ''}${mem.tasks[l.id] ? '### Practice answer\n\n' + mem.tasks[l.id] + '\n\n' : ''}`).join('');
  $('#cpy').onclick = () => copy(md());
  $('#exp').onclick = () => dl('financeboy-notes.md', '# FinanceBoy notes\n\n' + ids.map(l => `## ${l.mi + 1}.${l.li + 1} ${l.en}\n\n${mem.notes[l.id] ? '### Notes\n\n' + mem.notes[l.id] + '\n\n' : ''}${mem.tasks[l.id] ? '### Practice answer\n\n' + mem.tasks[l.id] + '\n\n' : ''}`).join(''), 'text/markdown');
  $('#expall').onclick = () => dl('financeboy-backup.json', JSON.stringify(mem, null, 2), 'application/json');
  $('#imp').onchange = e => { const f = e.target.files[0]; if (!f) return; f.text().then(txt => { try { mem = Object.assign(mem, JSON.parse(txt)); save(); toast('Backup restored / Đã khôi phục'); routes.notes(); } catch (err) { toast('That file is not a FinanceBoy backup'); } }); };
};


/* ---------- roadmap + library ---------- */
const P = window.PLAN;
{ let k = 0; P.phases.forEach(p => { if (!p.pause) p.no = k++; }); }
function currentPhase() { const d = today(); return P.phases.find(p => d >= p.from && d <= p.to) || (d < P.phases[0].from ? P.phases[0] : P.phases[P.phases.length - 1]); }
function roadStats() { let n = 0, done = 0; P.phases.forEach(p => p.dl.forEach((_, i) => { n++; if (mem.road[p.id + ':' + i]) done++; })); return { n, done }; }
const ext = (href, label) => /^https?:/.test(href) ? `<a href="${href}" target="_blank" rel="noopener">${label} ↗</a>` : `<a href="${href}">${label}</a>`;
routes.roadmap = function (tab) {
  touchDay();
  tab = tab === 'library' ? 'library' : 'plan';
  const st = roadStats(), cur = currentPhase();
  const head = pageHero('Roadmap', 'Lộ trình', 'Twelve core months from November 2026 to the start of university, then a fifth phase through the end of the first year. Each phase ends with deliverables; tick them off as you finish.', 'Mười hai tháng lõi từ 11/2026 đến khi vào đại học, rồi giai đoạn năm kéo đến hết năm nhất. Mỗi giai đoạn kết thúc bằng các sản phẩm đầu ra; đánh dấu khi em hoàn thành.',
    `<div class="tabs"><a href="#roadmap" class="${tab === 'plan' ? 'on' : ''}">${t('12-month plan', 'Kế hoạch 12 tháng')} <span class="cnt alt">${st.done}/${st.n}</span></a><a href="#roadmap-library" class="${tab === 'library' ? 'on' : ''}">${t('Sources & books', 'Nguồn & sách')}</a></div>`);
  if (tab === 'library') { main.innerHTML = head + libraryHTML(); wireLibrary(); return; }
  main.innerHTML = head + `<div class="wrap section">
    <div class="road-sum"><div><div class="k">${t('You are in', 'Em đang ở')}</div><h3>${esc(cur.title[0])}<span class="tag-vi vi" lang="vi">${esc(cur.title[1])}</span></h3><p class="kbd">${cur.dates}, ${cur.hours} ${t('hours a week', 'giờ mỗi tuần')}</p></div>
      <div class="road-bar"><div class="prog"><i style="width:${st.n ? st.done / st.n * 100 : 0}%"></i></div><p class="kbd">${t(`${st.done} of ${st.n} deliverables done`, `Đã xong ${st.done}/${st.n} sản phẩm`)}</p></div></div>
    <ol class="road">${P.phases.map((p, pi) => { const dn = p.dl.filter((_, i) => mem.road[p.id + ':' + i]).length, full = dn === p.dl.length;
      return `<li class="phase ${p === cur ? 'now' : ''} ${p.pause ? 'pause' : ''} ${p.key ? 'key' : ''} ${full ? 'full' : ''}" id="ph-${p.id}">
        <div class="when"><b>${p.dates}</b><span>${p.hours} h/wk</span>${p === cur ? `<em>${t('Now', 'Hiện tại')}</em>` : ''}</div>
        <div class="dot" aria-hidden="true">${full ? '✓' : p.pause ? '·' : p.no}</div>
        <div class="pcard"><h3>${p.pause ? '' : p.no + '. '}${esc(p.title[0])}<span class="tag-vi vi" lang="vi">${esc(p.title[1])}</span></h3>
          ${bi(`<p><b>Goal.</b> ${p.goal[0]}</p><p>${p.learn[0]}</p>`, `<p><b>Mục tiêu.</b> ${p.goal[1]}</p><p>${p.learn[1]}</p>`)}
          <div class="plinks">${p.links.map(l => ext(l[0], l[1])).join('')}</div>
          <ul class="dl">${p.dl.map((d, i) => { const k = p.id + ':' + i; return `<li><label><input type="checkbox" data-k="${k}" ${mem.road[k] ? 'checked' : ''}><span>${t(d[0], d[1])}</span></label></li>`; }).join('')}</ul>
        </div></li>`; }).join('')}</ol>
    <div class="sec-head" style="margin-top:44px"><div><h2>${t('A sample week in Grade 12', '')}</h2><span class="tag-vi vi" lang="vi">Một tuần mẫu trong lớp 12, khoảng 5 giờ</span></div></div>
    <ul class="week">${P.week.map(w => `<li>${bi(w[0], w[1])}</li>`).join('')}</ul>
    <div class="sec-head" style="margin-top:44px"><div><h2>${t('Start today: five exercises', '')}</h2><span class="tag-vi vi" lang="vi">Bắt đầu hôm nay: năm bài tập, khoảng 2 giờ</span></div></div>
    ${bi('<p>Exercises 2 and 3 have numbers you can check yourself. For 1, 4 and 5, copy your answer and send it to Claude for grading: the reasoning is what gets marked.</p>', '<p>Bài 2 và 3 có số để em tự kiểm tra. Bài 1, 4 và 5, sao chép bài làm và gửi Claude chấm: phần được chấm là lập luận.</p>')}
    <div class="exlist">${P.exercises.map((x, i) => `<div class="ex" id="ex-${x.id}"><div class="ex-h"><span class="exn">${i + 1}</span><h3>${esc(x.title[0])}<span class="tag-vi vi" lang="vi">${esc(x.title[1])}</span></h3><span class="pill">${x.mins} min</span><span class="pill ${x.kind}">${{ think: 'Thinking', excel: 'Excel', read: 'Reading' }[x.kind]}</span></div>
      ${bi(`<p>${x.q[0]}</p>`, `<p>${x.q[1]}</p>`)}${x.link ? `<p>${ext(x.link, 'SEC EDGAR full-text search')}</p>` : ''}
      <textarea data-ex="${x.id}" placeholder="Your answer / Bài làm của em">${esc(mem.ex[x.id] || '')}</textarea>
      <div class="btns">${x.check ? `<button class="btn small ghost" data-check="${x.id}">Show check numbers</button>` : ''}<button class="btn small" data-copyex="${x.id}">Copy for grading</button></div>
      ${x.check ? `<div class="explain" id="chk-${x.id}" hidden>${bi(x.check[0], x.check[1])}</div>` : ''}</div>`).join('')}</div>
  </div>`;
  $$('.dl input').forEach(c => c.onchange = () => { if (c.checked) mem.road[c.dataset.k] = today(); else delete mem.road[c.dataset.k]; save(); routes.roadmap('plan'); });
  $$('[data-ex]').forEach(a => a.oninput = () => { mem.ex[a.dataset.ex] = a.value; save(); });
  $$('[data-check]').forEach(b => b.onclick = () => { const e = $('#chk-' + b.dataset.check); e.hidden = !e.hidden; b.textContent = e.hidden ? 'Show check numbers' : 'Hide check numbers'; });
  $$('[data-copyex]').forEach(b => b.onclick = () => { const x = P.exercises.find(e => e.id === b.dataset.copyex), v = (mem.ex[x.id] || '').trim(); if (!v) { toast('Write your answer first / Hãy viết bài làm trước'); return; } copy(`Professor, please grade my roadmap exercise.\nExercise: ${x.title[0]}\n\nTask: ${x.q[0]}\n\nMy answer:\n${v}`); });
  const now = $('.phase.now'); if (now && location.hash === '#roadmap-now') now.scrollIntoView();
};
function libraryHTML() {
  return `<div class="wrap section">
    ${bi(`<p>Every source on the reading list was opened and checked on ${P.checked}: who wrote it, what they sell, whether its technical content matches a standard textbook. The tier says how much weight to give it.</p>`, `<p>Mọi nguồn trong danh sách đã được mở và kiểm tra ngày ${P.checked}: ai viết, họ bán gì, nội dung kỹ thuật có khớp giáo trình chuẩn không. Hạng cho biết nên tin nguồn đó tới mức nào.</p>`)}
    <div class="tiers">${Object.entries(P.tiers).map(([k, v]) => `<div class="tier"><span class="tb t${k}">${k}</span><div><b>${t(v[0], v[1])}</b><p class="kbd">${t(v[2], v[3])}</p></div></div>`).join('')}</div>
    <div class="sec-head" style="margin-top:40px"><div><h2>${t('Source check', '')}</h2><span class="tag-vi vi" lang="vi">Kiểm chứng nguồn</span></div></div>
    <div class="srcs">${P.sources.map(s => `<article class="src"><header><span class="tb t${s.tier}">${s.tier}</span><h3>${s.url ? ext(s.url, esc(s.name)) : esc(s.name)}</h3></header>
      <dl><dt>${t('Who is behind it', 'Ai đứng sau')}</dt><dd>${bi(s.who[0], s.who[1])}</dd><dt>${t('What it sells', 'Bán gì')}</dt><dd>${bi(s.sells[0], s.sells[1])}</dd><dt>${t('What we checked', 'Đã kiểm tra gì')}</dt><dd>${bi(s.verified[0], s.verified[1])}</dd><dt>${t('How to use it', 'Dùng thế nào')}</dt><dd>${bi(s.use[0], s.use[1])}</dd></dl></article>`).join('')}</div>
    <div class="sec-head" style="margin-top:44px"><div><h2>${t('Reading order', '')}</h2><span class="tag-vi vi" lang="vi">Thứ tự đọc sách</span></div></div>
    ${bi('<p>Read in this order. Ross explains the statements, Pignataro turns them into a model, Rosenbaum &amp; Pearl turn the model into a valuation. The others are references for later. Chapter numbers can shift between editions: follow the chapter titles.</p>', '<p>Đọc theo thứ tự này. Ross giải thích các báo cáo, Pignataro biến chúng thành mô hình, Rosenbaum &amp; Pearl biến mô hình thành định giá. Các cuốn còn lại để tra cứu về sau. Số chương có thể lệch giữa các ấn bản: dò theo tên chương.</p>')}
    <ol class="books">${P.books.map((b, i) => `<li class="book ${mem.books[b.id] || ''}"><span class="bn">${i}</span><div class="bmain"><h3>${esc(b.title)}</h3><p class="kbd">${esc(b.ed)}, ${t('phase', 'giai đoạn')} ${b.phase}</p>
      ${bi(`<p><b>Role.</b> ${b.role[0]}</p><p><b>Focus.</b> ${b.ch[0]}</p><p><b>How.</b> ${b.how[0]}</p>`, `<p><b>Vai trò.</b> ${b.role[1]}</p><p><b>Trọng tâm.</b> ${b.ch[1]}</p><p><b>Cách đọc.</b> ${b.how[1]}</p>`)}</div>
      <select class="mini" data-book="${b.id}" aria-label="Reading status"><option value="">Not started</option><option value="reading" ${mem.books[b.id] === 'reading' ? 'selected' : ''}>Reading</option><option value="done" ${mem.books[b.id] === 'done' ? 'selected' : ''}>Finished</option></select></li>`).join('')}</ol>
    <div class="sec-head" style="margin-top:44px"><div><h2>${t('How to judge a finance source yourself', '')}</h2><span class="tag-vi vi" lang="vi">Tự đánh giá một nguồn tài chính</span></div></div>
    <ol class="judge">${P.checklist.map(c => `<li><b>${t(c[0], c[1])}</b>${bi(`<p>${c[2]}</p>`, `<p>${c[3]}</p>`)}</li>`).join('')}</ol>
  </div>`;
}
function wireLibrary() { $$('[data-book]').forEach(s => s.onchange = () => { mem.books[s.dataset.book] = s.value; save(); s.closest('.book').className = 'book ' + s.value; }); }

/* ---------- global search ---------- */
(function () {
  const norm = s => String(s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/đ/g, 'd');
  const strip = h => String(h).replace(/<[^>]+>/g, ' ');
  const IDX = [{ type: 'Practice', title: 'Mistake notebook', sub: 'Sổ lỗi sai', href: '#review-mistakes', text: 'mistake notebook so loi sai retest' }, { type: 'Practice', title: 'Mixed review', sub: 'Ôn tập tổng hợp', href: '#review', text: 'mixed review on tap tong hop' }];
  READY.forEach(l => {
    const L = LESSONS[l.id];
    IDX.push({ type: 'Lesson', title: `${l.mi + 1}.${l.li + 1} ${l.en}`, sub: l.vi, href: '#lesson-' + l.id, text: norm([l.en, l.vi, L.intro.join(' '), L.sec.map(x => x.slice(0, 2).join(' ')).join(' ')].join(' ')) });
    L.sec.forEach(x => IDX.push({ type: 'Section', title: x[0], sub: `${x[1]}, lesson ${l.mi + 1}.${l.li + 1}`, href: '#lesson-' + l.id, text: norm(x[0] + ' ' + x[1] + ' ' + strip(x[2]) + ' ' + strip(x[3])) }));
  });
  VOCAB.forEach(v => IDX.push({ type: 'Term', title: v[0], sub: v[1] + ': ' + v[2], href: '#lesson-' + v[4], text: norm(v.slice(0, 4).join(' ')) }));
  Object.entries(TOOLS).forEach(([k, v]) => IDX.push({ type: 'Lab', title: v[0], sub: v[1], href: '#lab-' + k, text: norm(v.join(' ') + ' calculator lab may tinh') }));
  IDX.push({ type: 'Roadmap', title: '12-month roadmap', sub: 'Lộ trình 12 tháng', href: '#roadmap', text: norm('roadmap lo trinh plan ke hoach phase giai doan deliverable') });
  IDX.push({ type: 'Library', title: 'Sources & books', sub: 'Nguồn & sách: độ uy tín, thứ tự đọc', href: '#roadmap-library', text: norm('library thu vien sources nguon books sach reading order credibility uy tin') });
  P.phases.forEach(p => IDX.push({ type: 'Roadmap', title: p.title[0], sub: p.title[1] + ', ' + p.dates, href: '#roadmap', text: norm(p.title.join(' ') + ' ' + p.learn.join(' ')) }));
  P.sources.forEach(s => IDX.push({ type: 'Source', title: s.name, sub: 'Tier ' + s.tier + ': ' + P.tiers[s.tier][0], href: '#roadmap-library', text: norm(s.name + ' ' + s.who[0] + ' ' + s.verified[0]) }));
  P.books.forEach(b => IDX.push({ type: 'Book', title: b.title, sub: b.ed, href: '#roadmap-library', text: norm(b.title + ' ' + b.ch[0]) }));
  P.exercises.forEach(x => IDX.push({ type: 'Exercise', title: x.title[0], sub: x.title[1], href: '#roadmap', text: norm(x.title.join(' ') + ' ' + x.q[0]) }));
  const modal = $('#search'), input = $('#sq'), res = $('#sres');
  let sel = 0, hits = [];
  const draw = () => {
    const q = norm(input.value.trim());
    hits = q ? IDX.map(x => ({ x, s: (norm(x.title).includes(q) ? 3 : 0) + (x.text.includes(q) ? 1 : 0) })).filter(h => h.s).sort((a, b) => b.s - a.s).slice(0, 12).map(h => h.x) : READY.slice(0, 6).map(l => IDX.find(x => x.href === '#lesson-' + l.id && x.type === 'Lesson'));
    sel = Math.min(sel, Math.max(0, hits.length - 1));
    res.innerHTML = hits.length ? hits.map((h, i) => `<a href="${h.href}" class="${i === sel ? 'sel' : ''}"><span class="type">${h.type}</span><b>${esc(h.title)}</b><small>${esc(h.sub)}</small></a>`).join('') : `<p class="kbd" style="padding:10px">${t('Nothing matches. Try a different word.', 'Không tìm thấy. Thử từ khác.')}</p>`;
  };
  const open = () => { modal.hidden = false; input.value = ''; sel = 0; draw(); setTimeout(() => input.focus(), 0); };
  const close = () => { modal.hidden = true; };
  $('#openSearch').onclick = open;
  modal.addEventListener('click', e => { if (e.target === modal || e.target.closest('.search-res a')) close(); });
  input.addEventListener('input', () => { sel = 0; draw(); });
  input.addEventListener('keydown', e => {
    if (e.key === 'ArrowDown') { sel = Math.min(sel + 1, hits.length - 1); draw(); e.preventDefault(); }
    if (e.key === 'ArrowUp') { sel = Math.max(sel - 1, 0); draw(); e.preventDefault(); }
    if (e.key === 'Enter' && hits[sel]) { location.hash = hits[sel].href; close(); }
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && !modal.hidden) close();
    if (e.key === '/' && modal.hidden && !e.target.matches('input,textarea,select')) { e.preventDefault(); open(); }
  });
})();

/* ---------- reading progress ---------- */
window.addEventListener('scroll', () => {
  const h = document.documentElement, max = h.scrollHeight - h.clientHeight;
  $('#readbar i').style.width = (max > 0 ? (h.scrollTop / max) * 100 : 0) + '%';
}, { passive: true });

/* ---------- router ---------- */
function route() {
  const h = (location.hash || '').replace(/^#\/?/, '');
  let [page = '', arg] = h.split(/[\/-]/);
  if (page === 'front') page = '';
  const fn = routes[page] || routes[''];
  $$('.nav a').forEach(a => a.toggleAttribute('aria-current', a.dataset.nav === page || (page === 'lesson' && a.dataset.nav === 'course')));
  $$('.nav a[aria-current]').forEach(a => a.setAttribute('aria-current', 'page'));
  fn(arg);
  dateline();
  window.scrollTo(0, 0);
  main.focus({ preventScroll: true });
}
window.addEventListener('hashchange', route);
route();
})();
