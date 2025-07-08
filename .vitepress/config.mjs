import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "InstaHub",
  description: "Anleitung für InstaHub",
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  cleanUrls: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/favicon-32x32.png',

    nav: [
      { text: 'InstaHub', link: 'https://instahub.org/' }
    ],

    sidebar: [
      {
        text: 'Bedienung',
        items: [
          { text: 'Administration', link: '/administration' },
          { text: 'Hub', link: '/hub' },
          { text: 'Werbung', link: '/werbung' },
          { text: 'Empfehlungen', link: '/empfehlungen' },
          { text: 'Tracking', link: '/tracking' },
          { text: 'Datenbank', link: '/datenbank' },
          { text: 'Schnittstellen', link: '/schnittstellen' }
        ]
      },
      {
        text: 'Datenmodell',
        items: [
          { text: 'ERM', link: '/erm' },
          { text: 'Tabellen', link: '/tables' },
        ]
      },
      {
        text: 'Didaktik',
        items: [
          { text: 'Übersicht', link: '/didactic' },
          { text: 'Modellierung und SQL', link: '/didactic-modellierung-sql' }
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/wi-wissen/instahub-doc-de' },
      { icon: 'mastodon', link: 'https://chaos.social/@wi_wissen' }
    ],

    docFooter: {
      prev: 'zurück',
      next: 'weiter'
    },
		
    darkModeSwitchLabel: 'Aussehen',
    
    returnToTopLabel: 'nach oben',
    
    outlineTitle: 'Abschnitte',
    
    externalLinkIcon: true,
  }
})