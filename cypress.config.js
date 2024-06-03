
const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
    },
    baseUrl: 'http://localhost',  // ajuste conforme necessário
    supportFile: 'cypress/support/index.js',  // ajuste conforme necessário
    fixturesFolder: 'cypress/fixtures',  // ajuste conforme necessário
    specPattern: 'cypress/e2e/*/.cy.js',  // ajuste conforme necessário
  },
  video: false,  // opcional, desabilita a gravação de vídeo dos testes
})

