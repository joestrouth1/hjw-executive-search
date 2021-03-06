// eslint-disable-next-line nuxt/no-cjs-in-config
const jobs = require('./assets/data/jobs.json')
// eslint-disable-next-line nuxt/no-cjs-in-config
module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'HJW Executive Search',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'An unsolicited redesign of the website for HJW Executive Search - <http://hjwsearch.com/>'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#2779BD' },

  /*
  ** Global CSS
  */
  css: ['~/assets/css/tailwind.css'],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    [
      '@nuxtjs/pwa',
      {
        manifest: {
          name: 'HJW Executive Search',
          short_name: 'HJW Search'
        }
      }
    ]
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    host: 'hjw-executive-search.netlify.com',
    baseUrl: 'https://hjw-executive-search.netlify.com',
    browserBaseUrl: 'https://hjw-executive-search.netlify.com'
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  generate: {
    routes: function(callback) {
      const slugs = jobs.map(job => '/jobs/' + job.slug)
      if (slugs) callback(null, slugs)
      else callback(null)
    }
  }
}
