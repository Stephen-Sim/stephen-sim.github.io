<!-- Project case studies, from desktop AI to payment platforms. -->
<script setup lang="ts">
import { useHead } from '@unhead/vue';

const title = 'Projects — Stephen Sim';
const description =
  'Explore dant, a Windows AI companion built with Go and Tauri, alongside DirectPay payment middleware and the PRiM donation management platform.';
const url = 'https://stephen-sim.github.io/projects';

useHead({
  title,
  meta: [
    { name: 'description', content: description },
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:url', content: url },
    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
  ],
  link: [{ rel: 'canonical', href: url }],
});
</script>

<template>
  <main id="main">
    <!-- Projects: products built from interface to execution. -->
    <section class="section page-top" id="projects">
      <div class="container">
        <p class="section-eyebrow" data-aos="fade-up">Projects</p>
        <h1 class="section-title" data-aos="fade-up" data-aos-delay="100">Things I've built</h1>
        <p class="section-lead" data-aos="fade-up" data-aos-delay="200">Payment platforms and a desktop companion, built from interface to execution.</p>

        <article class="case-study case-study-dant" data-aos="fade-up" aria-labelledby="dant-title">
          <div class="case-study-heading">
            <div>
              <h3 id="dant-title">dant — AI desktop companion</h3>
              <p class="timeline-date">Personal project · Open source · Windows + Ubuntu</p>
            </div>
            <img
              class="case-study-logo"
              src="/images/dant-logo.svg"
              alt=""
              width="80"
              height="80"
              aria-hidden="true"
            >
          </div>
          <p class="case-label">Overview</p>
          <p>
            A Windows companion for AI-assisted work, bringing chat, voice, files, saved memory,
            reusable skills, scheduled tasks, and Telegram together. Its Ubuntu work computer
            lets you watch progress and take control when needed.
          </p>
          <p class="case-label">My Responsibilities</p>
          <p>
            Built the desktop experience and execution core, including task continuity,
            human-control handoff, message synchronization, and VM lifecycle management.
          </p>
          <p class="case-label">Architecture</p>
          <p>
            A Rust/Tauri desktop host and TypeScript interface connect to a Go Windows Controller.
            An authenticated connection links it to a Go Worker in Ubuntu, which owns task
            execution and persistent state.
          </p>
          <p class="case-label">Technologies</p>
          <div class="mt-2">
            <span class="tag">Go</span><span class="tag">Rust / Tauri</span><span class="tag">TypeScript</span>
            <span class="tag">SQLite</span><span class="tag">Ubuntu VM</span><span class="tag">Telegram</span>
          </div>
          <p class="case-label">Challenges</p>
          <p>
            Keeping task identity and uncertain outcomes intact across pauses, reconnects,
            and restarts, while allowing conversation during human control.
          </p>
          <p class="case-label">Lessons Learned</p>
          <p>Reliable agent software needs explicit ownership, durable state, and recovery paths you can verify.</p>
          <div class="project-actions">
            <a class="btn-accent" href="https://github.com/Stephen-Sim/dant" target="_blank" rel="noopener noreferrer">
              View source <i class="fa-brands fa-github" aria-hidden="true"></i>
            </a>
            <a
              class="btn-ghost"
              href="https://github.com/Stephen-Sim/dant/releases/latest"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download for Windows <i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>
            </a>
          </div>
        </article>

        <article class="case-study" data-aos="fade-up">
          <h3>DirectPay Payment Gateway</h3>
          <p class="timeline-date">Oct 2023 – Sep 2024 · <a href="https://directpay.my" target="_blank" rel="noopener">directpay.my</a></p>
          <p class="case-label">Overview</p>
          <p>A 0-to-1 payment middleware platform integrated with FPX (Malaysia's online banking payment network) for secure, seamless online payment processing. Built from nothing to a live product processing real transactions.</p>
          <p class="case-label">My Responsibilities</p>
          <p>Designed scalable backend workflows for payment processing and settlement reconciliation; implemented automated transaction-inquiry CRON jobs; built pending-transaction handling to keep payment states accurate even when bank responses are delayed.</p>
          <p class="case-label">Architecture</p>
          <p>Payment requests flow through the middleware to FPX; scheduled inquiry jobs reconcile any transaction whose final state wasn't confirmed in real time.</p>
          <p class="case-label">Screenshots</p>
          <img class="img-fluid rounded mt-2 mb-2" src="/images/directpay-screenshot.png" alt="DirectPay website — Fast, Secure Payments for Your Business">
          <p class="case-label">Technologies</p>
          <div class="mt-2">
            <span class="tag">Vue.js</span><span class="tag">.NET Web API</span><span class="tag">MSSQL</span>
            <span class="tag">FPX Integration</span><span class="tag">CRON Jobs</span>
          </div>
          <p class="case-label">Challenges</p>
          <p>Payments can fail in ambiguous ways — a bank timeout doesn't mean the payment failed. Designing the pending-transaction flow so no payment is ever lost or double-counted was the hardest and most important part.</p>
          <p class="case-label">Lessons Learned</p>
          <p>Reconciliation isn't an afterthought — it IS the payment system. Idempotency and state machines beat optimistic assumptions every time.</p>
        </article>

        <article class="case-study" data-aos="fade-up">
          <h3>PRiM — People Relationship Information Management</h3>
          <p class="timeline-date">Aug 2021 – Apr 2023 · <a href="https://prim.my/derma" target="_blank" rel="noopener">prim.my</a></p>
          <p class="case-label">Overview</p>
          <p>A donation and organization management platform, built as my lecturer's project at UTeM, serving 200+ Malaysian organizations — schools, NGOs, and religious institutions — handling donations, school fee payments, and administrative workflows.</p>
          <p class="case-label">My Responsibilities</p>
          <p>Developed donation management services; built school-fee payment systems for primary and secondary schools with integrated payment workflows; developed administrative modules for organization management.</p>
          <p class="case-label">Architecture</p>
          <p>A multi-organization platform where each institution manages its own donations, fees, and members on shared infrastructure.</p>
          <p class="case-label">Screenshots</p>
          <img class="img-fluid rounded mt-2 mb-2" src="/images/prim-screenshot.png" alt="PRiM Derma — donation portal serving Malaysian organizations">
          <p class="case-label">Technologies</p>
          <div class="mt-2">
            <span class="tag">Laravel</span><span class="tag">MySQL</span><span class="tag">Payment Workflows</span>
          </div>
          <p class="case-label">Challenges</p>
          <p>200+ organizations means 200+ ways to configure fees, donation categories, and receipts. Designing flexible-but-safe payment workflows that non-technical administrators could operate was a constant balancing act.</p>
          <p class="case-label">Lessons Learned</p>
          <p>This project taught me that software serving real communities has to be boring and dependable. It's also where I fell in love with payment systems — a passion that shaped everything after.</p>
        </article>
      </div>
    </section>
  </main>
</template>
