const app = document.getElementById('app');
const content = document.getElementById('content');
const title = document.getElementById('page-title');
const closeButton = document.getElementById('close');

const pages = {
  dashboard: {
    title: 'Dashboard <span>Overview</span>',
    html: `
      <div class="hero">
        <div class="kicker">WELCOME ABOARD</div>
        <h2>Your fleet control center is now live on the web.</h2>
        <p>Track your progress, pick jobs and manage your trucks from this single interface.</p>
      </div>
      <div class="stats">
        <div class="stat"><div class="label">Active Jobs</div><div class="value">3</div><div class="sub">2 high-priority deliveries</div></div>
        <div class="stat"><div class="label">Fleet Size</div><div class="value">5</div><div class="sub">4 road-ready trucks</div></div>
        <div class="stat"><div class="label">Balance</div><div class="value">$128K</div><div class="sub">Updated just now</div></div>
      </div>
    `,
  },
  leaderboard: {
    title: 'Leaderboard <span>Top Drivers</span>',
    html: '<div class="notice">Leaderboard integration is ready for live data.</div>',
  },
  quick: {
    title: 'Quick Job <span>Dispatch</span>',
    html: '<div class="notice">Quick-job workflow is available for immediate assignments.</div>',
  },
  free: {
    title: 'Saraku Vandi <span>Free Haul</span>',
    html: '<div class="notice">Free-haul mode is enabled for open world runs.</div>',
  },
  showroom: {
    title: 'Truck Showroom <span>Catalog</span>',
    html: '<div class="notice">Showroom page is active and ready for inventory hookup.</div>',
  },
  owned: {
    title: 'Own Truck <span>Garage</span>',
    html: '<div class="notice">Garage view is online for your owned vehicles.</div>',
  },
  service: {
    title: 'Service Centre <span>Maintenance</span>',
    html: '<div class="notice">Service center is available for repairs and upgrades.</div>',
  },
};

function setPage(page) {
  const selected = pages[page] || pages.dashboard;
  title.innerHTML = selected.title;
  content.innerHTML = selected.html;
  document.querySelectorAll('.nav').forEach((button) => {
    button.classList.toggle('active', button.dataset.page === page);
  });
}

document.querySelectorAll('.nav').forEach((button) => {
  button.addEventListener('click', () => setPage(button.dataset.page));
});

closeButton.addEventListener('click', () => {
  app.classList.add('hidden');
});

app.classList.remove('hidden');
setPage('dashboard');
