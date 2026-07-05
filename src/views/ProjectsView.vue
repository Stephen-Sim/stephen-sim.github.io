<!-- Projects page: deep dives into DirectPay and PRiM. Content copied
     verbatim from the old projects.html. -->
<script setup lang="ts">
import { useHead } from '@unhead/vue';

const title = 'Projects — Stephen Sim';
const description = 'Deep dives into DirectPay (FPX payment gateway) and PRiM (donation management for 200+ organizations).';
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
    <!-- Projects: deep dives into two end-to-end products -->
    <section class="section page-top" id="projects">
      <div class="container">
        <p class="section-eyebrow" data-aos="fade-up">Projects</p>
        <h1 class="section-title" data-aos="fade-up" data-aos-delay="100">Things I've built</h1>
        <p class="section-lead" data-aos="fade-up" data-aos-delay="200">Two products, built end to end — both moving real money for real users.</p>

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
