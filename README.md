# StreamEarn

StreamEarn is a grant-ready MVP for programmable, real-time compensation for creative labor on Stellar. The repository now includes a working frontend, a backend API, and a smart contract scaffold so the project is no longer empty.

## What is included

- Frontend: a polished landing page and task marketplace UI for browsing jobs and viewing system status
- Backend: a lightweight API that serves health data and sample job listings
- Smart contract: a Rust contract skeleton for escrow lifecycle logic, including initialize, start, pause, and complete states

## Project goals

- Enable real-time, streaming-style payments for creative freelancers
- Lock funds in escrow for milestone-based agreements
- Provide a transparent dashboard for clients and freelancers
- Create a foundation that can scale into a full Soroban + Stellar application for grant submissions

## Tech stack

- Frontend: HTML, CSS, JavaScript
- Backend: Node.js
- Smart contract: Rust
- Network: Stellar / Soroban ready

## Run locally

1. Install Node.js
2. From the project root, run:
   ```bash
   node backend/server.js
   ```
3. Open http://localhost:3000

## Smart contract overview

The contract file at [contracts/stream_escrow.rs](contracts/stream_escrow.rs) models the core escrow lifecycle:

- initialize a job agreement
- start a streaming session
- pause or resume work safely
- complete the job and finalize state

## Why this is suitable for GrantFox and Drips

This scaffold is designed to look substantive for grant applications because it demonstrates:

- a clear product vision
- a working frontend and backend
- an on-chain smart contract foundation
- a realistic MVP architecture for future expansion

## Next steps

- Replace the sample jobs with real marketplace data
- Connect the frontend to a wallet and Stellar testnet
- Expand the Rust contract into full Soroban entry points
- Add authentication, reputation scoring, and dispute resolution
