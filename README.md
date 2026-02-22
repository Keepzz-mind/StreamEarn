
# StreamEarn

**Programmable Real-Time Compensation for Creative Labor on Stellar.**

StreamEarn is a decentralized micro-task platform where writers, designers, video editors, and voice-over artists earn through real-time streaming payments using Soroban smart contracts on Stellar.

Instead of waiting until a job is completed to get paid, freelancers earn continuously during verified work sessions through milestone-based escrow and per-minute payment release.

---

## 🚨 Problem

Traditional freelance platforms such as:

* Fiverr
* Upwork

rely on centralized escrow systems and delayed payouts.

Creative freelancers often face:

* Payment delays
* Escrow disputes
* Client ghosting
* Limited transparency
* High withdrawal fees

There is currently no programmable real-time compensation model for creative labor within the Stellar ecosystem.

---

## 💡 Solution

StreamEarn introduces:

* 🔒 Milestone-based escrow using Soroban smart contracts
* ⏱ Per-minute streaming payments during active work sessions
* 🌟 On-chain reputation scoring
* ⚖ Dispute resolution with multi-signature approval
* 💰 Real-time earnings dashboard

Funds are locked in escrow and streamed continuously while the freelancer works — creating transparency and reducing payment uncertainty.

---

## 🔗 Built on Stellar

StreamEarn is powered by:

* Stellar
* Soroban smart contracts (Rust)
* Low-cost USDC or XLM transactions

Stellar enables:

* Micro-transactions with minimal fees
* Fast settlement finality
* Programmable escrow logic
* Transparent payment tracking

Streaming compensation at a per-minute level would not be economically viable without Stellar’s low-fee infrastructure.

---

## 🏗 Architecture

### 1️⃣ Smart Contract Layer (Soroban / Rust)

* Streaming Escrow Contract

  * Lock funds
  * Stream per-minute payments
  * Pause / resume logic
  * Cancel conditions
  * Auto-close on milestone approval

* Reputation Contract

  * On-chain score updates
  * Weighted by job value
  * Dispute impact scoring

---

### 2️⃣ Backend (Node.js / Nest js)

* Task marketplace API
* Work session tracking
* Dispute case management
* User profile management
* Payment session monitoring

---

### 3️⃣ Frontend (React / Next.js)

* Task browsing interface
* Work session dashboard
* Live earnings counter
* Freelancer profile + reputation view

---

## 🎯 MVP Scope (Phase 1)

The initial MVP will focus exclusively on creative micro-skills:

* Writers
* Video editors
* Designers
* Voice-over artists

The goal is to validate streaming compensation mechanics before expanding to additional skill categories.

---

## 🛣 Roadmap

### Phase 1 – Smart Contract Development

* Implement streaming escrow logic
* Add pause/resume functionality
* Develop milestone validation
* Create on-chain reputation system

### Phase 2 – Backend Infrastructure

* Task creation & matching API
* Work session validation system
* Dispute submission workflow

### Phase 3 – Frontend MVP

* Marketplace UI
* Live earnings dashboard
* Reputation display

### Phase 4 – Beta Testing

* Onboard early creative freelancers
* Test streaming session mechanics
* Collect feedback and iterate

---

## 🤝 Contributing

We welcome contributors across:

* Soroban smart contracts
* Backend development
* Frontend development
* Documentation

Every issue includes:

* Clear technical requirements
* Acceptance criteria
* Testing expectations

New contributors start with labeled beginner issues before progressing to advanced tasks.

---

## 🌍 Vision

StreamEarn aims to become the foundational real-time compensation protocol for creative labor on Stellar — enabling programmable, trust-minimized digital work agreements globally.


