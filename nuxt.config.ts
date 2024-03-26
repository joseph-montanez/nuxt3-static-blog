const experimentalNoScripts = true;
const gTagId = 'G-XXXXXXXXXX'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    // If you run this with experimentalNoScripts: true, nuxt-gtag will not work - see head->scripts as a fallback
    gtag: {
        id: gTagId,
        initCommands: [
            // Setup up consent mode
            ['consent', 'default', {
                ad_user_data: 'denied',
                ad_personalization: 'denied',
                ad_storage: 'denied',
                analytics_storage: 'denied',
                wait_for_update: 500,
            }]
        ]
    },
    app: {
        head: {
            htmlAttrs: {
                lang: 'en',
            },
            script: [
                {
                    src: 'https://www.googletagmanager.com/gtag/js?id=' + gTagId,
                    async: true,
                },
                {
                    hid: 'gtag-inline',
                    innerHTML: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gTagId}');
        `,
                    type: 'text/javascript'
                }
            ],
        }
    },
    image: {
        format: ['webp']
    },
    experimental: {
        payloadExtraction: false,
        renderJsonPayloads: false,
    },
    routeRules: {
        '/': {prerender: true, experimentalNoScripts: experimentalNoScripts},
        '/about': {prerender: true, experimentalNoScripts: experimentalNoScripts},
        '/terms': {prerender: true, experimentalNoScripts: experimentalNoScripts},
        '/privacy': {prerender: true, experimentalNoScripts: experimentalNoScripts},
        '/portfolio': {prerender: true},
        '/articles': {prerender: true, experimentalNoScripts: experimentalNoScripts},
        '/articles/**': {prerender: true, experimentalNoScripts: experimentalNoScripts},
        '/articles/**/': {prerender: true, experimentalNoScripts: experimentalNoScripts},
    },
    nitro: {
        preset: 'static',
    },
    content: {
        highlight: {
            langs: [
                'php',
                'kotlin',
                'bash',
                'yaml',
                'toml',
                'xml',
                'json',
                'javascript',
                'dockerfile'
            ],
            theme: 'github-light'
        }
    },
    devtools: {enabled: true},
    modules: [
        'nuxt-gtag',
        '@nuxt/content',
        '@nuxt/image',
        '@nuxtjs/tailwindcss',
        'nuxt-jsonld'
    ],
})
