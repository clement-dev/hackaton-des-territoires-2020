export default {
  "title": "Hackaton des Territoires",
  "tagline": "Aide à la gestion de crise",
  "url": "https://your-docusaurus-test-site.com",
  "baseUrl": "/",
  "onBrokenLinks": "throw",
  "favicon": "img/favicon.ico",
  "organizationName": "facebook",
  "projectName": "docusaurus",
  "themeConfig": {
    "navbar": {
      "title": "Hackaton des Territoires",
      "logo": {
        "alt": "Hackaton des Territoires",
        "src": "img/logo.svg"
      },
      "items": [
        {
          "to": "docs/concepts",
          "activeBasePath": "docs",
          "label": "Docs",
          "position": "left"
        }
      ],
      "hideOnScroll": false
    },
    "footer": {
      "style": "dark",
      "copyright": "Copyright © 2020 clementisaia."
    },
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": false,
      "respectPrefersColorScheme": false,
      "switchConfig": {
        "darkIcon": "🌜",
        "darkIconStyle": {},
        "lightIcon": "🌞",
        "lightIconStyle": {}
      }
    },
    "metadatas": []
  },
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "sidebarPath": "/home/clement/Desktop/hackaton/docs/sidebars.js"
        },
        "theme": {
          "customCss": "/home/clement/Desktop/hackaton/docs/src/css/custom.css"
        }
      }
    ]
  ],
  "onDuplicateRoutes": "warn",
  "customFields": {},
  "plugins": [],
  "themes": []
};