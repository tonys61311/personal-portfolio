const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "~bootstrap/scss/bootstrap";`
      }
    }
  },
  publicPath: process.env.NODE_ENV === 'production' ? '/personal-portfolio/' : '/'
})
