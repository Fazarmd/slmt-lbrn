/* ── Stars ── */
const starsEl = document.getElementById('stars');
for (let i = 0; i < 100; i++) {
  const s = document.createElement('div');
  s.className = 'star';
  const sz = Math.random() * 2.2 + 0.4;
  s.style.cssText = `
    width:${sz}px; height:${sz}px;
    top:${Math.random() * 100}%; left:${Math.random() * 100}%;
    --d:${(Math.random() * 3 + 2).toFixed(1)}s;
    --a:${(Math.random() * 0.25 + 0.05).toFixed(2)};
    animation-delay:${(Math.random() * 8).toFixed(1)}s;
  `;
  starsEl.appendChild(s);
}

/* ── Floating Flower Particles ── */
const particlesEl = document.getElementById('particles');
const pList = ['🌸', '🌺', '✨', '🌿', '⭐', '💫'];
for (let i = 0; i < 14; i++) {
  const p = document.createElement('div');
  p.className = 'particle';
  p.textContent = pList[i % pList.length];
  p.style.cssText = `
    font-size:${(0.65 + Math.random() * 0.6).toFixed(2)}rem;
    left:${Math.random() * 100}%;
    --rt:${(14 + Math.random() * 14).toFixed(1)}s;
    animation-delay:${(Math.random() * 20).toFixed(1)}s;
  `;
  particlesEl.appendChild(p);
}

/* ── CTA Click ── */
function onCta() {
  const btn = document.getElementById('ctaBtn');
  btn.classList.remove('pop');
  void btn.offsetWidth; // reflow to restart animation
  btn.classList.add('pop');
  spawnBurst();
  setTimeout(() => {
    document.getElementById('modalBg').classList.add('open');
  }, 550);
}

/* ── Close Modal ── */
function closeModal() {
  document.getElementById('modalBg').classList.remove('open');
}

// Close modal on overlay click
document.getElementById('modalBg').addEventListener('click', function (e) {
  if (e.target === this) closeModal();
});

/* ── Emoji Burst ── */
const burstList = ['🌸', '✨', '💛', '🌙', '🌺', '⭐', '💫', '🤲', '🧧'];
function spawnBurst() {
  const btn = document.getElementById('ctaBtn');
  const r = btn.getBoundingClientRect();
  const cx = r.left + r.width / 2;
  const cy = r.top + r.height / 2;

  for (let i = 0; i < 22; i++) {
    const el = document.createElement('div');
    el.className = 'burst-el';
    el.textContent = burstList[Math.floor(Math.random() * burstList.length)];
    const ang = Math.random() * 360;
    const rad = 70 + Math.random() * 170;
    el.style.cssText = `
      left:${cx}px; top:${cy}px;
      --bx:${(Math.cos(ang * Math.PI / 180) * rad).toFixed(1)}px;
      --by:${(Math.sin(ang * Math.PI / 180) * rad - 50).toFixed(1)}px;
      --br:${Math.floor(Math.random() * 360)}deg;
      animation-delay:${(Math.random() * 0.25).toFixed(2)}s;
    `;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 2200);
  }
}
