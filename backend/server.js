const http = require('http');
const fs = require('fs');
const path = require('path');

const port = process.env.PORT || 3000;
const frontendDir = path.join(__dirname, '..', 'frontend');

const jobs = [
  {
    title: 'Landing page copy refresh',
    category: 'Writing',
    deadline: '2 days',
    description: 'A premium landing-page rewrite for an early-stage creator product launch.',
    amount: '250 USDC'
  },
  {
    title: 'UI polish sprint',
    category: 'Design',
    deadline: '4 days',
    description: 'Refine mobile interactions and visual consistency for the MVP dashboard.',
    amount: '400 USDC'
  },
  {
    title: 'Video intro cut',
    category: 'Video',
    deadline: '1 week',
    description: 'Create a short launch trailer with a fast-turnaround editing workflow.',
    amount: '600 USDC'
  },
  {
    title: 'Community launch script',
    category: 'Voice',
    deadline: '3 days',
    description: 'Write and record a launch-ready onboarding script for the first cohort.',
    amount: '320 USDC'
  }
];

const server = http.createServer((req, res) => {
  if (req.url === '/api/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
      status: 'Operational',
      network: 'Stellar testnet-ready',
      escrow: 'Milestone-safe',
      activeJobs: jobs.length,
      settlement: '2-4 min'
    }));
    return;
  }

  if (req.url === '/api/jobs') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(jobs));
    return;
  }

  const requestedPath = req.url === '/' ? '/index.html' : req.url;
  const filePath = path.join(frontendDir, requestedPath);

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Not found');
      return;
    }

    const ext = path.extname(filePath);
    const contentType = {
      '.html': 'text/html; charset=utf-8',
      '.css': 'text/css; charset=utf-8',
      '.js': 'application/javascript; charset=utf-8',
      '.json': 'application/json; charset=utf-8'
    }[ext] || 'application/octet-stream';

    res.writeHead(200, { 'Content-Type': contentType });
    res.end(data);
  });
});

server.listen(port, () => {
  console.log(`StreamEarn backend running at http://localhost:${port}`);
});
