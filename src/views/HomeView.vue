<!-- Home page: hero intro, about teaser, career timeline, skills grid, and
     a closing contact CTA. Content copied verbatim from the old
     .superpowers/sdd/old-index.html, with two intentional changes:
       1) the hero tagline was rewritten to be more humble (see plan doc)
       2) the timeline's click-to-open behavior, previously done with
          plain DOM manipulation in js/script.js, is now a small `ref`
          driven by a v-for loop over a typed array of milestones. -->
<script setup lang="ts">
import { ref } from 'vue';
import { useHead } from '@unhead/vue';

// ---- Per-route <head> tags (title, description, Open Graph, Twitter, canonical) ----
const title = 'Stephen Sim — Backend Engineer';
const description =
  'Backend engineer at Ant International working on payment systems. Malaysia WorldSkills Lyon 2024 competitor. Java, Spring Boot, distributed systems.';
const url = 'https://stephen-sim.github.io/';

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

// ---- Career timeline data + click-to-open toggle ----
// Each item mirrors one .timeline-item from the old static page. Clicking
// (or tapping) an item toggles it open; clicking the same item again
// closes it. Only one index is tracked, so opening a new item closes
// whichever one was open before — matching the old script.js behavior.
interface TimelineItem {
  date: string;
  title: string;
  detail: string;
}

const timelineItems: TimelineItem[] = [
  {
    date: '2020 — 2023',
    title: 'UTeM — Diploma in Information Technology',
    detail:
      "Where it all started — foundations in programming, databases, and software development. CGPA 3.94/4.00 — Vice Chancellor's Award recipient.",
  },
  {
    date: '2021 — 2023',
    title: 'PRiM — People Relationship Information Management',
    detail:
      "Joined my lecturer's project, building donation management and school-fee payment systems serving 200+ organizations.",
  },
  {
    date: '2023 — 2025',
    title: 'UTeM — Bachelor of Computer Science (Software Development)',
    detail: "CGPA 3.93/4.00 — Vice Chancellor's Award recipient.",
  },
  {
    date: '2023 — 2024',
    title: 'DirectPay Payment Gateway',
    detail: 'Developed a 0-to-1 FPX-integrated payment middleware platform.',
  },
  {
    date: '2023',
    title: 'WorldSkills ASEAN, Singapore',
    detail: 'Bronze Medal — IT Software Solutions for Business.',
  },
  {
    date: '2023',
    title: 'WorldSkills Asia, Abu Dhabi',
    detail: "Bronze Medal — representing Malaysia against the region's best.",
  },
  {
    date: '2024',
    title: 'WorldSkills Competition, Lyon',
    detail: 'The final stage — Medallion for Excellence at the 47th WorldSkills Competition.',
  },
  {
    date: '2025 — Now',
    title: 'Ant International',
    detail: 'Java Backend Engineer on the payment account team — sandbox, refunds, and fund transfers.',
  },
];

const openItem = ref<number | null>(null);

function toggleItem(i: number) {
  openItem.value = openItem.value === i ? null : i;
}
</script>

<template>
  <main id="main">
    <!-- Hero: intro, tagline, and primary calls to action -->
    <header class="hero">
      <div class="hero-glow"></div>
      <div class="container">
        <div class="row align-items-center g-5">
          <div class="col-lg-7" data-aos="fade-up">
            <p class="hero-eyebrow">Backend Engineer · Kuala Lumpur, Malaysia</p>
            <h1>Stephen <span class="gradient-text">Sim</span></h1>
            <p class="hero-tagline">
              Backend engineer at <strong>Ant International</strong>, part of the <strong>Antom</strong> team —
              providing merchants with payment service integration. Represented Malaysia at <strong>WorldSkills Lyon 2024</strong>.
            </p>
            <div class="d-flex flex-wrap gap-3 mt-4">
              <a class="btn-ghost" href="https://github.com/Stephen-Sim" target="_blank" rel="noopener"><i class="fa-brands fa-github me-2"></i>GitHub</a>
              <a class="btn-ghost" href="https://www.linkedin.com/in/stephen-sim-343775212" target="_blank" rel="noopener"><i class="fa-brands fa-linkedin-in me-2"></i>LinkedIn</a>
            </div>
          </div>
          <div class="col-lg-5 text-center" data-aos="fade-up" data-aos-delay="150">
            <div class="hero-photo-frame">
              <img class="hero-photo" src="/assets/profile.jpg" alt="Stephen Sim competing at WorldSkills ASEAN Singapore 2023">
              <div class="hero-badge">
                <i class="fa-solid fa-award"></i>
                <span>Medallion for Excellence<small>47th WorldSkills — Lyon 2024</small></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- About teaser: short summary linking through to the full About page -->
    <section class="section" id="about-teaser">
      <div class="container">
        <p class="section-eyebrow" data-aos="fade-up">About</p>
        <h2 class="section-title" data-aos="fade-up">Engineering, end to end</h2>
        <p class="section-lead" data-aos="fade-up" data-aos-delay="100">
          From building donation platforms for 200+ Malaysian organizations as a student, to competing for Malaysia on the WorldSkills world stage, to optimizing payment systems used by millions of e-commerce customers — I care about one thing: software that works, reliably, at scale.
        </p>
        <RouterLink class="btn-ghost" to="/about" data-aos="fade-up" data-aos-delay="150">Read my story <i class="fa-solid fa-arrow-right ms-2"></i></RouterLink>
      </div>
    </section>

    <!-- Career timeline: milestones from Diploma through Ant International -->
    <section class="section" id="timeline">
      <div class="container">
        <p class="section-eyebrow" data-aos="fade-up">Career</p>
        <h2 class="section-title" data-aos="fade-up">The journey so far</h2>
        <p class="section-lead" data-aos="fade-up" data-aos-delay="100">Hover or tap each milestone.</p>
        <div class="timeline">
          <!-- data-aos lives on the outer wrapper, NOT the element whose class
               Vue toggles: AOS adds its own classes straight to the DOM, and a
               Vue class-binding update would wipe them (hiding the item). -->
          <div v-for="(item, i) in timelineItems" :key="item.title" data-aos="fade-up">
            <div
              class="timeline-item"
              :class="{ open: openItem === i }"
              @click="toggleItem(i)"
            >
              <span class="timeline-dot"></span>
              <p class="timeline-date">{{ item.date }}</p>
              <h3>{{ item.title }}</h3>
              <p class="timeline-detail">{{ item.detail }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills grid: core languages, frameworks, and tools -->
    <section class="section" id="skills">
      <div class="container">
        <p class="section-eyebrow" data-aos="fade-up">Toolbox</p>
        <h2 class="section-title" data-aos="fade-up">Skills &amp; technologies</h2>
        <div class="row g-3">
          <div class="col-6 col-md-4 col-lg-3" data-aos="fade-up" data-aos-delay="0">
            <div class="skill-card"><i class="fa-brands fa-java"></i><span>Java</span></div>
          </div>
          <div class="col-6 col-md-4 col-lg-3" data-aos="fade-up" data-aos-delay="50">
            <div class="skill-card"><i class="fa-solid fa-leaf"></i><span>Spring Boot</span></div>
          </div>
          <div class="col-6 col-md-4 col-lg-3" data-aos="fade-up" data-aos-delay="100">
            <div class="skill-card"><i class="fa-solid fa-bolt"></i><span>Redis</span></div>
          </div>
          <div class="col-6 col-md-4 col-lg-3" data-aos="fade-up" data-aos-delay="150">
            <div class="skill-card"><i class="fa-solid fa-envelopes-bulk"></i><span>RabbitMQ</span></div>
          </div>
          <div class="col-6 col-md-4 col-lg-3" data-aos="fade-up" data-aos-delay="0">
            <div class="skill-card"><i class="fa-solid fa-database"></i><span>MySQL</span></div>
          </div>
          <div class="col-6 col-md-4 col-lg-3" data-aos="fade-up" data-aos-delay="50">
            <div class="skill-card"><i class="fa-brands fa-docker"></i><span>Docker</span></div>
          </div>
          <div class="col-6 col-md-4 col-lg-3" data-aos="fade-up" data-aos-delay="100">
            <div class="skill-card"><i class="fa-brands fa-git-alt"></i><span>Git</span></div>
          </div>
          <div class="col-6 col-md-4 col-lg-3" data-aos="fade-up" data-aos-delay="150">
            <div class="skill-card"><i class="fa-brands fa-github"></i><span>GitHub</span></div>
          </div>
          <div class="col-6 col-md-4 col-lg-3" data-aos="fade-up" data-aos-delay="0">
            <div class="skill-card"><i class="fa-solid fa-code"></i><span>C#</span></div>
          </div>
          <div class="col-6 col-md-4 col-lg-3" data-aos="fade-up" data-aos-delay="50">
            <div class="skill-card"><i class="fa-brands fa-microsoft"></i><span>.NET</span></div>
          </div>
          <div class="col-6 col-md-4 col-lg-3" data-aos="fade-up" data-aos-delay="100">
            <div class="skill-card"><i class="fa-brands fa-laravel"></i><span>Laravel</span></div>
          </div>
          <div class="col-6 col-md-4 col-lg-3" data-aos="fade-up" data-aos-delay="150">
            <div class="skill-card"><i class="fa-solid fa-fire"></i><span>Prometheus</span></div>
          </div>
          <div class="col-6 col-md-4 col-lg-3" data-aos="fade-up" data-aos-delay="0">
            <div class="skill-card"><i class="fa-solid fa-wave-square"></i><span>OpenTelemetry</span></div>
          </div>
          <div class="col-6 col-md-4 col-lg-3" data-aos="fade-up" data-aos-delay="50">
            <div class="skill-card"><i class="fa-solid fa-cloud"></i><span>Alibaba Cloud</span></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact CTA: closing strip prompting visitors to get in touch -->
    <section class="section pt-0" id="cta">
      <div class="container">
        <div class="cta-strip" data-aos="fade-up">
          <h2 class="section-title mb-2">Let's build something reliable.</h2>
          <p class="mb-4">Open to interesting conversations about payments, distributed systems, and backend engineering.</p>
          <RouterLink class="btn-accent" to="/contact">Get in touch <i class="fa-solid fa-arrow-right ms-2"></i></RouterLink>
        </div>
      </div>
    </section>
  </main>
</template>
