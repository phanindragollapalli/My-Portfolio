/* ── Tab Navigation ──────────────────────────────────────────── */
const tabs = document.querySelectorAll('.tab-btn');
const sections = document.querySelectorAll('.tab-section');

function switchTab(tabId) {
  tabs.forEach((tab) => tab.classList.remove('active'));
  sections.forEach((section) => section.classList.remove('active'));

  const activeTab = document.querySelector(`.tab-btn[data-tab="${tabId}"]`);
  const activeSection = document.getElementById(tabId);

  if (activeTab) {
    activeTab.classList.add('active');
  }
  if (activeSection) {
    activeSection.classList.add('active');
  }
}

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const tabId = tab.getAttribute('data-tab');
    if (tabId) {
      switchTab(tabId);
    }
  });
});

document.querySelectorAll('[data-tab]').forEach((trigger) => {
  if (trigger.classList.contains('tab-btn')) {
    return;
  }

  trigger.addEventListener('click', () => {
    const tabId = trigger.getAttribute('data-tab');
    if (tabId) {
      switchTab(tabId);
    }
  });
});

/* ── Theme Toggle ────────────────────────────────────────────── */
const html = document.documentElement;
const toggleBtn = document.getElementById('theme-toggle');

// Apply saved theme immediately (before paint to avoid flash)
const savedTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', savedTheme);

toggleBtn.addEventListener('click', () => {
  const current = html.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
});
