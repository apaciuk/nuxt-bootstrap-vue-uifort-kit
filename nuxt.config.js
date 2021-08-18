module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxt-bootstrap-vue-uikit',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project + Bulma CSS Framework' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: "stylesheet",
      href:
        "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" },

      { rel: "stylesheet",
      href:
        "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css" }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  /*
  ** Global CSS
  */
  css: [
    { src: '~/assets/scss/app.scss', lang: 'scss' },
  ],
  plugins: [
    '~/plugins/webFontLoader.client.js'
  ],
// Modules: https://go.nuxtjs.dev/config-modules
modules: [
  // https://go.nuxtjs.dev/bootstrap
  'bootstrap-vue/nuxt',
  // https://go.nuxtjs.dev/axios
  '@nuxtjs/axios',
 '@nuxtjs/style-resources'
],
module: {
  rules: [
    {
      test: /\.s[ac]ss$/i,
      use: ['style-loader', 'css-loader', 'sass-loader'],
    },
  ],
},


  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
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

