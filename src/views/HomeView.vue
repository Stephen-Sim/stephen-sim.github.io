<script setup lang="ts">
import { ref } from 'vue';
import { useHead } from '@unhead/vue';

const title = 'Stephen Sim — Backend Engineer';
const description =
  'Backend engineer at Ant International building reliable payment systems. Malaysia WorldSkills Lyon 2024 competitor.';
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

interface TimelineItem {
  date: string;
  title: string;
  detail: string;
  kind: string;
}

const timelineItems: TimelineItem[] = [
  {
    date: '2020 — 2023',
    title: 'UTeM · Diploma in IT',
    detail: "Built strong foundations in programming and databases. CGPA 3.94/4.00 and Vice Chancellor's Award.",
    kind: 'Learn',
  },
  {
    date: '2021 — 2023',
    title: 'PRiM · First production systems',
    detail: 'Built donation and school-fee workflows serving more than 200 Malaysian organizations.',
    kind: 'Build',
  },
  {
    date: '2023 — 2024',
    title: 'DirectPay · Payment gateway',
    detail: 'Developed a 0-to-1 FPX-integrated payment middleware platform and its reconciliation workflows.',
    kind: 'Ship',
  },
  {
    date: '2023 — 2024',
    title: 'WorldSkills · Team Malaysia',
    detail: 'Two bronze medals, then a Medallion for Excellence at the 47th WorldSkills Competition in Lyon.',
    kind: 'Compete',
  },
  {
    date: '2025 — Now',
    title: 'Ant International · Antom',
    detail: 'Java Backend Engineer working on payment accounts, sandbox reliability, refunds, and fund transfers.',
    kind: 'Scale',
  },
];

const skills = [
  'Java',
  'Spring Boot',
  'Redis',
  'RabbitMQ',
  'MySQL',
  'Docker',
  'OpenTelemetry',
  'Prometheus',
  '.NET',
  'Laravel',
  'Alibaba Cloud',
];

const openItem = ref<number | null>(4);

function toggleItem(i: number) {
  openItem.value = openItem.value === i ? null : i;
}
</script>

<template>
  <main id="main">
    <header class="hero">
      <div class="hero-glow" aria-hidden="true"></div>
      <div class="container hero-container">
        <div class="hero-status" data-aos="fade-down">
          <span class="status-dot" aria-hidden="true"></span>
          <span>Backend engineer · Kuala Lumpur</span>
          <span class="hero-status-rule"></span>
          <span class="mono">MY / 2026</span>
        </div>

        <div class="row align-items-end g-5 hero-grid">
          <div class="col-lg-7" data-aos="fade-up">
            <p class="hero-kicker mono">Hello, I'm Stephen Sim.</p>
            <h1>
              I build payment systems
              <span>that stay calm under pressure.</span>
            </h1>
            <p class="hero-tagline">
              Backend engineer at <strong>Ant International</strong>, building reliable payment experiences for
              regional merchants. I also represented Malaysia at <strong>WorldSkills Lyon 2024</strong>.
            </p>
            <div class="hero-actions">
              <RouterLink class="btn-accent" to="/projects">Explore my work <i class="fa-solid fa-arrow-right"></i></RouterLink>
              <a class="text-link" href="mailto:simshansiong2002@gmail.com">simshansiong2002@gmail.com</a>
            </div>
          </div>

          <div class="col-lg-5" data-aos="fade-left" data-aos-delay="120">
            <div class="hero-photo-frame">
              <div class="photo-index mono"><span>FIELD NOTE</span><strong>01</strong></div>
              <img class="hero-photo" src="/assets/profile.jpg" alt="Stephen Sim representing Malaysia at a WorldSkills event">
              <div class="photo-caption">
                <span>Abu Dhabi, UAE</span>
                <span>WorldSkills Asia '23</span>
              </div>
              <div class="hero-badge">
                <i class="fa-solid fa-award" aria-hidden="true"></i>
                <span><strong>Medallion for Excellence</strong><small>WorldSkills Lyon · 2024</small></span>
              </div>
            </div>
          </div>
        </div>

        <div class="proof-strip" data-aos="fade-up" data-aos-delay="180">
          <div class="proof-item">
            <span class="proof-number">200<span>+</span></span>
            <span class="proof-copy"><strong>Organizations served</strong><small>Through the PRiM platform</small></span>
          </div>
          <div class="proof-item">
            <span class="proof-number">03</span>
            <span class="proof-copy"><strong>WorldSkills stages</strong><small>Singapore · Abu Dhabi · Lyon</small></span>
          </div>
          <div class="proof-item proof-role">
            <span class="proof-current"><span class="status-dot" aria-hidden="true"></span>Current chapter</span>
            <strong>Ant International</strong>
            <small>Backend Engineer · Antom</small>
          </div>
        </div>
      </div>
    </header>

    <section class="section work-section" id="selected-work">
      <div class="container">
        <div class="section-heading" data-aos="fade-up">
          <div>
            <p class="section-eyebrow">Selected signals</p>
            <h2 class="section-title">Work with a real-world pulse.</h2>
          </div>
          <p class="section-note">Payments, public-impact products, and software built against the clock.</p>
        </div>

        <div class="work-grid">
          <RouterLink class="work-card work-card-featured" to="/about" data-aos="fade-up">
            <div class="work-card-top"><span class="mono">01 / PAYMENT INFRA</span><i class="fa-solid fa-arrow-up-right-from-square"></i></div>
            <div class="work-card-content">
              <p>Ant International</p>
              <h3>Making money movement boring — in the best possible way.</h3>
              <span>Sandbox reliability · Real-time refunds · Payment account APIs</span>
            </div>
            <div class="system-orbit" aria-hidden="true">
              <span class="orbit-node node-a">API</span>
              <span class="orbit-node node-b">MQ</span>
              <span class="orbit-node node-c">DB</span>
              <span class="orbit-core">PAY</span>
            </div>
          </RouterLink>

          <RouterLink class="work-card work-card-photo" to="/worldskills" data-aos="fade-up" data-aos-delay="80">
            <img src="/images/worldskills-lyon-opening.jpg" alt="Stephen Sim carrying the Malaysia sign at WorldSkills Lyon 2024">
            <span class="photo-shade" aria-hidden="true"></span>
            <div class="work-card-top"><span class="mono">02 / WORLDSKILLS</span><i class="fa-solid fa-arrow-right"></i></div>
            <div class="work-card-content">
              <p>Team Malaysia</p>
              <h3>Three stages. Three medals. One standard.</h3>
            </div>
          </RouterLink>

          <RouterLink class="work-card work-card-project" to="/projects" data-aos="fade-up" data-aos-delay="120">
            <div class="work-card-top"><span class="mono">03 / 0 → 1 BUILD</span><i class="fa-solid fa-arrow-right"></i></div>
            <div class="project-mark">DP<span>.</span></div>
            <div class="work-card-content">
              <p>DirectPay</p>
              <h3>FPX payment middleware built from the first transaction.</h3>
              <span>.NET · MSSQL · Reconciliation</span>
            </div>
          </RouterLink>

          <RouterLink class="work-card work-card-story" to="/about" data-aos="fade-up" data-aos-delay="160">
            <div class="work-card-top"><span class="mono">04 / THE THROUGH-LINE</span><i class="fa-solid fa-arrow-right"></i></div>
            <blockquote>“Reliability isn't a feature. It's the foundation.”</blockquote>
            <span class="story-link">Read the engineering story</span>
          </RouterLink>
        </div>
      </div>
    </section>

    <section class="section journey-section" id="timeline">
      <div class="container">
        <div class="section-heading" data-aos="fade-up">
          <div>
            <p class="section-eyebrow">The route here</p>
            <h2 class="section-title">Learn. Build. Compete. Scale.</h2>
          </div>
          <p class="section-note">Tap a chapter to open the field note.</p>
        </div>

        <div class="timeline" data-aos="fade-up">
          <button
            v-for="(item, i) in timelineItems"
            :key="item.title"
            class="timeline-item"
            :class="{ open: openItem === i }"
            type="button"
            :aria-expanded="openItem === i"
            @click="toggleItem(i)"
          >
            <span class="timeline-index mono">0{{ i + 1 }}</span>
            <span class="timeline-date">{{ item.date }}</span>
            <span class="timeline-copy">
              <strong>{{ item.title }}</strong>
              <span class="timeline-detail">{{ item.detail }}</span>
            </span>
            <span class="timeline-kind mono">{{ item.kind }}</span>
            <i class="fa-solid fa-plus" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </section>

    <section class="section toolbox-section" id="skills">
      <div class="container">
        <p class="section-eyebrow" data-aos="fade-up">Working set</p>
        <div class="toolbox-layout">
          <h2 class="section-title" data-aos="fade-up">Tools change.<br><span class="gradient-text">Engineering judgment compounds.</span></h2>
          <div class="skill-cloud" data-aos="fade-up" data-aos-delay="80">
            <span v-for="(skill, i) in skills" :key="skill" class="skill-chip"><span class="mono">{{ String(i + 1).padStart(2, '0') }}</span>{{ skill }}</span>
          </div>
        </div>
      </div>
    </section>

    <section class="section pt-0" id="cta">
      <div class="container">
        <div class="cta-strip" data-aos="fade-up">
          <p class="section-eyebrow">Open channel</p>
          <h2>Have a hard system to make feel simple?</h2>
          <p>Let's talk payments, distributed systems, or the next meaningful build.</p>
          <RouterLink class="btn-accent btn-light" to="/contact">Start a conversation <i class="fa-solid fa-arrow-right"></i></RouterLink>
          <span class="cta-code mono" aria-hidden="true">KL · 03.1390° N<br>101.6869° E</span>
        </div>
      </div>
    </section>
  </main>
</template>
