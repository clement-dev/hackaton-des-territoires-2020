module.exports = {
    title: 'Hackaton des Territoires',
    tagline: 'Aide à la gestion de crise: Mieux connaître pour plus cibler',
    url: 'https://your-docusaurus-test-site.com',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    favicon: 'img/favicon.ico',
    organizationName: 'facebook', // Usually your GitHub org/user name.
    projectName: 'docusaurus', // Usually your repo name.
    themeConfig: {
        navbar: {
            title: 'Hackaton des Territoires',
            logo: {
                alt: 'Hackaton des Territoires',
                src: 'img/logo.svg',
            },
            items: [
                {
                    to: 'docs/concepts',
                    activeBasePath: 'docs',
                    label: 'Docs',
                    position: 'left',
                },
            ],
        },
        footer: {
            style: 'dark',
            copyright: `Copyright © ${new Date().getFullYear()} clementisaia.`,
        },
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            },
        ],
    ],
};
