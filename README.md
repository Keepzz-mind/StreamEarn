# StreamEarn

**Programmable Real-Time Compensation for Creative Labor on Stellar**

StreamEarn is a decentralized micro-task platform where writers, designers, video editors, and voice-over artists earn **real-time streaming payments** using **Soroban smart contracts on Stellar**.

Instead of waiting until a job is completed to receive payment, freelancers earn **continuously during verified work sessions** through **milestone-based escrow and per-minute payment release**.

---

#  Problem

Traditional freelance platforms such as **Upwork** and **Fiverr** rely on centralized escrow systems and delayed payouts.

Creative freelancers often experience:

- Payment delays
- Escrow disputes
- Client ghosting
- Platform withdrawal fees
- Lack of payment transparency

Even when work begins immediately, payment is often **locked until project completion**.

There is currently **no decentralized protocol for real-time compensation of creative labor on Stellar.**

---

#  Solution

StreamEarn introduces **programmable work agreements** where funds are **locked in escrow and streamed continuously while work is performed**.

Core features include:

-  **Milestone-based escrow contracts**
-  **Per-minute streaming payments**
-  **On-chain reputation scoring**
-  **Multi-signature dispute resolution**
-  **Real-time earnings dashboard**

This model creates:

- Immediate payment transparency
- Reduced freelancer risk
- Reduced client trust burden

---

#  Built on Stellar

StreamEarn is powered by:

- **Stellar Network**
- **Soroban Smart Contracts (Rust)**
- **USDC or XLM micropayments**

Stellar enables:

- Ultra-low transaction fees
- Fast settlement finality
- Secure programmable contracts
- Efficient micro-transactions

Streaming payments **would not be economically feasible without Stellar’s low-fee architecture.**

---

#  System Architecture

##  Smart Contract Layer (Soroban / Rust)

### Streaming Escrow Contract

Responsible for:

- Locking job funds
- Releasing payments per minute
- Pausing/resuming work sessions
- Handling cancellations
- Finalizing milestones

### Reputation Contract

Maintains freelancer and client reputation scores:

- Job completion tracking
- Weighted scoring by job value
- Dispute penalty adjustments

---

## 2️  Backend Layer (Node.js / NestJS)

Responsibilities include:

- Task marketplace API
- Work session validation
- Dispute management
- User profile services
- Smart contract interaction

---

## 3️ Frontend Layer (React / Next.js)

User interface features:

- Task browsing marketplace
- Work session dashboard
- Live earnings counter
- Reputation system display
- Wallet integration

---

#  MVP Scope

The MVP will initially support creative micro-tasks including:

- Writers
- Designers
- Video editors
- Voice-over artists

The goal is to **validate real-time compensation mechanics** before expanding to other skill categories.

---

#  Development Roadmap

## Phase 1 – Smart Contracts

- Implement streaming escrow logic
- Add pause/resume functionality
- Milestone validation system
- Reputation contract

## Phase 2 – Backend Infrastructure

- Task marketplace API
- Work session validation
- Dispute submission workflow
- Smart contract interaction services

## Phase 3 – Frontend MVP

- Marketplace interface
- Work session dashboard
- Live earnings tracker
- Reputation UI

## Phase 4 – Beta Testing

- Onboard early freelancers
- Test streaming sessions
- Iterate based on feedback

---

#  Future Features

- AI work verification
- Real-time productivity proofs
- Decentralized arbitration courts
- DAO governance
- Multi-chain payment streaming

---

#  Contributing

We welcome contributors across:

- Soroban smart contracts
- Backend development
- Frontend development
- Documentation

Before contributing:

1. Fork the repository
2. Pick an issue labeled **good-first-issue**
3. Submit a pull request

All issues contain:

- Technical requirements
- Acceptance criteria
- Implementation guidance

---

#  Vision

StreamEarn aims to become the **foundational real-time compensation protocol for digital labor on Stellar**, enabling **trust-minimized global work agreements** and eliminating delayed freelancer payments.

---

#  License

MIT License
