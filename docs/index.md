---
layout: home

hero:
  name: Calliope Dokumentation
  text: Lernen, Entwickeln, Verstehen
  tagline: Eine umfassende Anleitung für alle Bereiche
  image:
    src: /images/calliope-title.png
    alt: Calliope mini Titelbild
    width: 320
    height: 320
  actions:
    - theme: brand
      text: Make Code
      link: https://makecode.calliope.cc/
    - theme: alt
      text: GitHub
      link: https://github.com/HansTydecks
---

<section class="chapter-grid">
  <a class="chapter-card" href="kapitel1/">
    <img src="/icons_frontpage/chapter_1.png" alt="Kapitel 1 Icon" loading="lazy" />
    <h3>Kapitel 1</h3>
    <p>Die wichtigsten Komponenten des Calliope mini</p>
  </a>
  <a class="chapter-card" href="kapitel2/">
    <img src="/icons_frontpage/chapter_2.png" alt="Kapitel 2 Icon" loading="lazy" />
    <h3>Kapitel 2</h3>
    <p>Eingabe, Verarbeitung und Ausgabe am Einplatinenrechner</p>
  </a>
  <a class="chapter-card" href="kapitel3/">
    <img src="/icons_frontpage/chapter_3.png" alt="Kapitel 3 Icon" loading="lazy" />
    <h3>Kapitel 3</h3>
    <p>Algorithmische Abläufe beschreiben</p>
  </a>
  <a class="chapter-card" href="kapitel4/">
    <img src="/icons_frontpage/chapter_4.png" alt="Kapitel 4 Icon" loading="lazy" />
    <h3>Kapitel 4</h3>
    <p>Kleine Projekte</p>
  </a>
</section>

<style>
.chapter-grid {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(220px, 280px));
  justify-content: center;
  margin: 3rem auto;
  max-width: 960px;
}

.chapter-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.75rem 1.5rem;
  border-radius: 16px;
  border: 1px solid var(--vp-c-divider);
  background-color: var(--vp-c-bg-soft);
  text-align: center;
  text-decoration: none;
  color: inherit;
  transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
}

.chapter-card img {
  width: 72px;
  height: 72px;
  margin-bottom: 1rem;
}

.chapter-card h3 {
  margin: 0.25rem 0 0.5rem;
  font-size: 1.1rem;
  font-weight: 600;
}

.chapter-card p {
  margin: 0;
  font-size: 0.95rem;
  color: var(--vp-c-text-2);
}

.chapter-card:hover {
  transform: translateY(-4px);
  border-color: var(--vp-c-brand);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);
}

.dark .chapter-card {
  background-color: var(--vp-c-bg);
}

.dark .chapter-card:hover {
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.35);
}
</style>
