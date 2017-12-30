module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'store-lesson',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  css: [
    '~node_modules/element-ui/packages/theme-chalk/lib/icon.css',
    'assets/main.scss'
  ],
  modules: [
    // Simple usage
    'nuxt-netlify-cms',

    // With options
    ['nuxt-netlify-cms', { adminPath: 'secure' }]
  ],

  // You can optionally use global options instead of inline form
  netlifyCms: {
    adminPath: 'secure'
  },

  /*
  ** Build configuration
  */
  build: {
    vendor: ['axios'],
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
