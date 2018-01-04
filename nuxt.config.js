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
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' },
      { rel: 'stylesheet', href: 'https://use.typekit.net/mwb5dtr.css' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'javascript', href: 'https://use.typekit.net/mwb5dtr.js' }
    ]
  },
  plugins: [
    '~/plugins/axios',
    '~/plugins/element-ui'
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  css: [
    '~node_modules/element-ui/packages/theme-chalk/lib/icon.css',
    'assets/stylesheets/main.scss'
  ],
  // // Add apollo module
  // modules: [
  //   // Simple usage
  //   'nuxt-netlify-cms'
  // ],

  // // You can optionally use global options instead of inline form
  // netlifyCms: {
  //   adminPath: 'admin'
  // },

  /*
  ** Build configuration
  */
  build: {
    vendor: ['axios', 'element-ui'],
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
