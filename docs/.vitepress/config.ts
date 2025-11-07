import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Calliope v2",
  description: "Dokumentation für Calliope v2",
  lang: 'de-DE',
  
  // Base path für GitHub Pages
  // Für Custom Domain: '/' verwenden
  // Für GitHub Pages ohne Custom Domain: '/calliope_v2/' verwenden
  base: '/',
  
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    
    nav: [
      { text: 'Start', link: '/' },
      { text: 'Kapitel 1', link: '/kapitel1/' },
      { text: 'Kapitel 2', link: '/kapitel2/' },
      { text: 'Kapitel 3', link: '/kapitel3/' },
      { text: 'Kapitel 4', link: '/kapitel4/' }
    ],

    sidebar: {
      '/kapitel1/': [
        {
          text: 'Kapitel 1',
          items: [
            { text: 'Übersicht', link: '/kapitel1/' },
            { text: 'Calliope kennenlernen', link: '/kapitel1/calliope_kennenlernen' }
          ]
        }
      ],
      '/kapitel2/': [
        {
          text: 'Kapitel 2',
          items: [
            { text: 'Übersicht', link: '/kapitel2/' },
            { text: 'EVA-Modell Beispiele', link: '/kapitel2/eva-modell-beispiele' }
          ]
        }
      ],
      '/kapitel3/': [
        {
          text: 'Kapitel 3',
          items: [
            { text: 'Übersicht', link: '/kapitel3/' },
            { text: 'Beschreibungsbausteine', link: '/kapitel3/beschreibungsbausteine' }
          ]
        }
      ],
      '/kapitel4/': [
        {
          text: 'Kapitel 4',
          items: [
            { text: 'Übersicht', link: '/kapitel4/' },
            { text: 'Praxisprojekt', link: '/kapitel4/praxisprojekt' }
          ]
        }
      ]
    },

    socialLinks: [
      // Füge hier deine GitHub Repository-URL ein
      // { icon: 'github', link: 'https://github.com/dein-username/Calliope_v2' }
    ],

    // Deutsche Texte
    outline: {
      label: 'Auf dieser Seite'
    },
    
    docFooter: {
      prev: 'Vorherige Seite',
      next: 'Nächste Seite'
    },

    darkModeSwitchLabel: 'Erscheinungsbild',
    sidebarMenuLabel: 'Menü',
    returnToTopLabel: 'Zurück nach oben',

    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: 'Suchen',
            buttonAriaLabel: 'Suchen'
          },
          modal: {
            noResultsText: 'Keine Ergebnisse für',
            resetButtonTitle: 'Zurücksetzen',
            footer: {
              selectText: 'zum Auswählen',
              navigateText: 'zum Navigieren',
              closeText: 'zum Schließen'
            }
          }
        }
      }
    }
  },

  // Head-Tags für bessere SEO und Custom Domain
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ]
})
