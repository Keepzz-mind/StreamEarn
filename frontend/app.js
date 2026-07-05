async function loadDashboard() {
  const healthEl = document.getElementById('health-text');
  const metricsEl = document.getElementById('metrics-grid');
  const jobsEl = document.getElementById('jobs-list');

  try {
    const [healthRes, jobsRes] = await Promise.all([
      fetch('/api/health'),
      fetch('/api/jobs')
    ]);

    const health = await healthRes.json();
    const jobs = await jobsRes.json();

    healthEl.textContent = `${health.status} • ${health.network}`;
    metricsEl.innerHTML = [
      { label: 'Escrow flow', value: health.escrow },
      { label: 'Live jobs', value: health.activeJobs },
      { label: 'Settlement', value: health.settlement }
    ]
      .map(
        (item) => `
          <div class="metric-card">
            <strong>${item.value}</strong>
            <span>${item.label}</span>
          </div>
        `
      )
      .join('');

    jobsEl.innerHTML = jobs
      .map(
        (job) => `
          <article class="job-card">
            <h3>${job.title}</h3>
            <p class="job-meta">${job.category} • ${job.deadline}</p>
            <p>${job.description}</p>
            <p><strong>${job.amount}</strong> in escrow</p>
          </article>
        `
      )
      .join('');
  } catch (error) {
    healthEl.textContent = 'Backend unavailable';
    metricsEl.innerHTML = '<div class="metric-card"><strong>Offline</strong><span>Unable to reach API</span></div>';
    jobsEl.innerHTML = '<p>Unable to reach the API.</p>';
    console.error(error);
  }
}

loadDashboard();
