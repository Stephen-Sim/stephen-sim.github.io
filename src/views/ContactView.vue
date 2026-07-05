<!-- Contact page: four ways to reach me, each a clickable card. Content
     copied verbatim from the old contact.html. -->
<script setup lang="ts">
import { useHead } from '@unhead/vue';

const title = 'Contact — Stephen Sim';
const description = "Get in touch with Stephen Sim — email, GitHub, LinkedIn.";
const url = 'https://stephen-sim.github.io/contact';

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
    <!-- Contact: four ways to reach me, each a clickable card -->
    <section class="section page-top" id="contact">
      <div class="container">
        <p class="section-eyebrow" data-aos="fade-up">Contact</p>
        <h1 class="section-title" data-aos="fade-up" data-aos-delay="100">Say hello</h1>
        <p class="section-lead" data-aos="fade-up" data-aos-delay="200">The fastest way to reach me is email. I'm always happy to talk payments, backend engineering, or WorldSkills.</p>

        <div class="row g-4">
          <!-- Email -->
          <div class="col-md-6" data-aos="fade-up" data-aos-delay="0">
            <a class="glass-card contact-card" href="mailto:simshansiong2002@gmail.com">
              <i class="fa-solid fa-envelope contact-icon"></i>
              <div>
                <h3>Email</h3>
                <p>simshansiong2002@gmail.com</p>
              </div>
            </a>
          </div>

          <!-- GitHub -->
          <div class="col-md-6" data-aos="fade-up" data-aos-delay="100">
            <a class="glass-card contact-card" href="https://github.com/Stephen-Sim" target="_blank" rel="noopener">
              <i class="fa-brands fa-github contact-icon"></i>
              <div>
                <h3>GitHub</h3>
                <p>github.com/Stephen-Sim</p>
              </div>
            </a>
          </div>

          <!-- LinkedIn -->
          <div class="col-md-6" data-aos="fade-up" data-aos-delay="0">
            <a class="glass-card contact-card" href="https://www.linkedin.com/in/stephen-sim-343775212" target="_blank" rel="noopener">
              <i class="fa-brands fa-linkedin-in contact-icon"></i>
              <div>
                <h3>LinkedIn</h3>
                <p>linkedin.com/in/stephen-sim-343775212</p>
              </div>
            </a>
          </div>

        </div>
      </div>
    </section>
  </main>
</template>
