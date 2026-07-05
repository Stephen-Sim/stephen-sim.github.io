<!-- About page: personal story + Ant International case studies. Content
     copied verbatim from the old about.html. -->
<script setup lang="ts">
import { useHead } from '@unhead/vue';

const title = 'About & Experience — Stephen Sim';
const description =
  "Stephen Sim's engineering story and Ant International case studies: payment sandbox optimization, real-time refunds, payment account SaaS APIs.";
const url = 'https://stephen-sim.github.io/about';

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
    <!-- Story: personal narrative from first project to current role -->
    <section class="section page-top" id="story">
      <div class="container">
        <p class="section-eyebrow" data-aos="fade-up">About</p>
        <h1 class="section-title" data-aos="fade-up" data-aos-delay="100">Software that works when it matters</h1>
        <p class="mt-4" data-aos="fade-up">My path into backend engineering started during my Diploma in Information Technology at UTeM. In 2021 I joined my lecturer's project, PRiM — a donation and school-fee management platform that grew to serve more than 200 Malaysian organizations: schools, NGOs, and religious institutions. Real users, real money, real consequences when something broke. That experience shaped how I think about software: reliability isn't a feature, it's the foundation.</p>
        <p class="mt-3" data-aos="fade-up">That mindset took me to the WorldSkills stage, representing Malaysia in IT Software Solutions for Business — Bronze medals at ASEAN Singapore 2023 and Asia Abu Dhabi 2023, and a Medallion for Excellence at WorldSkills Lyon 2024. Competing taught me to deliver complete, working systems under pressure: requirements to deployment, on the clock, no excuses.</p>
        <p class="mt-3" data-aos="fade-up">Today I'm a Java Backend Engineer at Ant International, working on payment infrastructure that serves e-commerce merchants across Southeast Asia. I spend my days in the world of distributed systems — microservices, message queues, caches, and the careful engineering that makes money movement boring in the best possible way. I'm still learning something new every week, and I wouldn't have it any other way.</p>
      </div>
    </section>

    <!-- Experience: Ant International case studies, problem/solution/architecture/impact -->
    <section class="section" id="experience">
      <div class="container">
        <p class="section-eyebrow" data-aos="fade-up">Experience</p>
        <h2 class="section-title" data-aos="fade-up" data-aos-delay="100">Ant International — case studies</h2>
        <p class="section-lead" data-aos="fade-up" data-aos-delay="200">Java Backend Engineer · Mar 2025 – Present. My team owns the payment account side of the platform — wallets, refunds, and fund transfers for regional e-commerce merchants like Lazada and Daraz. Selected work, told the way engineers actually think: problem, solution, impact.</p>

        <!-- Team photo: Ant International Malaysia office -->
        <img class="img-fluid rounded mb-4" src="/images/ant-international-team.jpg" alt="Stephen with the Ant International team in Malaysia" data-aos="fade-up">

        <article class="case-study" data-aos="fade-up">
          <h3>Payment Sandbox Optimization</h3>
          <div class="mt-2">
            <span class="tag">Java</span><span class="tag">Spring Boot</span><span class="tag">Redis</span>
            <span class="tag">MySQL</span><span class="tag">RabbitMQ</span>
          </div>
          <p class="case-label">Problem</p>
          <p>The payment sandbox that merchants and internal teams rely on for integration testing had a transaction success rate of only ~80%. Flaky simulated payments meant slow merchant onboarding and unreliable automated test suites.</p>
          <p class="case-label">Solution</p>
          <p>Optimized the sandbox services end to end — improving performance, scalability, and developer testing efficiency so that simulated transactions behave as dependably as production ones.</p>
          <p class="case-label">Architecture</p>
          <p>Spring Boot microservices with Redis for hot-path state, RabbitMQ for asynchronous processing, and MySQL for persistence.</p>
          <p class="case-label">Impact &amp; Metrics</p>
          <p class="metric-highlight">~80% &rarr; ~100%</p>
          <p>Transaction success rate raised from roughly 80% to near 100%, making merchant integration testing dramatically faster and more predictable.</p>
        </article>

        <article class="case-study" data-aos="fade-up">
          <h3>Real-Time Refund Withdrawals — Lazada PH Wallet</h3>
          <div class="mt-2">
            <span class="tag">Java</span><span class="tag">Spring Boot</span><span class="tag">Payment APIs</span>
            <span class="tag">RabbitMQ</span>
          </div>
          <p class="case-label">Problem</p>
          <p>Refund coupon withdrawals to user bank accounts settled on a T+1 cycle — customers waited a full day for their money after a refund.</p>
          <p class="case-label">Solution</p>
          <p>Enabled a real-time withdrawal flow from the Lazada PH wallet to user bank accounts, removing the batch settlement wait.</p>
          <p class="case-label">Architecture</p>
          <p>Event-driven flow on the payment account platform — withdrawal requests processed through asynchronous messaging with idempotent handling, so a payout is never lost or duplicated.</p>
          <p class="case-label">Impact &amp; Metrics</p>
          <p class="metric-highlight">T+1 &rarr; real-time</p>
          <p>Customers receive refund money in their bank accounts immediately instead of the next day.</p>
        </article>

        <article class="case-study" data-aos="fade-up">
          <h3>Refund Coupon Migration — Lazada</h3>
          <div class="mt-2">
            <span class="tag">Java</span><span class="tag">Spring Boot</span><span class="tag">Payment APIs</span>
            <span class="tag">MySQL</span>
          </div>
          <p class="case-label">Problem</p>
          <p>Refund coupon management historically lived inside Ant International's payment flow. Lazada wanted to manage refund coupons on their own platform — leaving Ant International responsible only for moving the money.</p>
          <p class="case-label">Solution</p>
          <p>Developed a new Fund Transfer API that carries over the historical flow's behavior — including the coupon checks previously handled inside the Ant flow — so Lazada could take over coupon management without breaking a single existing refund path.</p>
          <p class="case-label">Architecture</p>
          <p>A new fund-transfer path on the payment account platform, designed for backward compatibility with the legacy coupon-refund flow throughout the migration.</p>
          <p class="case-label">Impact &amp; Metrics</p>
          <p>A clean separation of responsibilities: Lazada owns the coupon experience, Ant International owns the fund transfer — with the migration invisible to end users.</p>
        </article>

        <article class="case-study" data-aos="fade-up">
          <h3>AI Troubleshooting Skill &amp; Case Management</h3>
          <div class="mt-2">
            <span class="tag">Java</span><span class="tag">AI</span><span class="tag">Harness Engineering</span>
            <span class="tag">Vector Search</span>
          </div>
          <p class="case-label">Problem</p>
          <p>Troubleshooting payment issues across distributed services is slow and expertise-heavy: engineers check environments, pull trace and flow logs, read the relevant code, and hunt for the fault — from scratch, every single case.</p>
          <p class="case-label">Solution</p>
          <p>With my team, built an AI troubleshooting skill using harness engineering: the investigation runs as staged phases — environment checks, trace and flow log collection, pulling the codebase of the affected flow, expert fault-and-defect analysis, and automatic upload of the final report to Yuque. Alongside it, a historical case management system tracks every case and uses vector search to surface similar past cases, so solved problems get reused instead of re-investigated.</p>
          <p class="case-label">Architecture</p>
          <p>A multi-phase agent harness that orchestrates each diagnostic step in sequence, backed by a vector-search case store that matches new incidents against the history of resolved ones.</p>
          <p class="case-label">Impact &amp; Metrics</p>
          <p>Troubleshooting that used to require senior engineers walking every step by hand now runs as a repeatable pipeline — and the team's hard-won debugging knowledge compounds instead of evaporating.</p>
        </article>

        <article class="case-study" data-aos="fade-up">
          <h3>AI Translation Extension — Backend</h3>
          <div class="mt-2">
            <span class="tag">Java</span><span class="tag">Spring Boot</span><span class="tag">AI</span>
          </div>
          <p class="case-label">Problem</p>
          <p>A global workforce means colleagues work across many languages every day; internal tools and documents weren't equally accessible to everyone.</p>
          <p class="case-label">Solution</p>
          <p>Designed and developed the backend architecture for an AI-powered browser translation extension used internally.</p>
          <p class="case-label">Architecture</p>
          <p>Backend services that broker between the browser extension and AI translation models, handling authentication, request routing, and response streaming.</p>
          <p class="case-label">Impact &amp; Metrics</p>
          <p class="metric-highlight">1,000+ employees</p>
          <p>Adopted by over a thousand employees, improving multilingual accessibility and day-to-day productivity.</p>
        </article>
      </div>
    </section>
  </main>
</template>
