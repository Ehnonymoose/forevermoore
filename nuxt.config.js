import colors from 'vuetify/es5/util/colors'

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s #ForeverMoore2020',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],

    link: [
      { rel: 'icon', type: 'image/png', sizes:"16x16", href: '/favicon-16x16.png' },
      { rel: 'icon', type: 'image/png', sizes:"32x32", href: '/favicon-32x32.png' },
      { rel: 'manifest', href: '/site.webmanifest' }
    ],

    script: [
      { async: true, src: 'https://www.googletagmanager.com/gtag/js?id=UA-158183095-1' },
      { src: '/analytics.js' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~plugins/lightbox.client.js'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/vuetify',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: {
      loaderOptions: {
        progressiveImages: true
      }
    },
    defaultAssets: {
      font: {
        family: 'Lato'
      },
      icons: 'mdi'
    }
  },
  /*
  ** Build configuration
  */
  build: {
    extractCSS: (process.env.NODE_ENV === 'production')
  }
}
