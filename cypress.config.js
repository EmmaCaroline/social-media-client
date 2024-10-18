/* eslint-disable no-unused-vars */
const { defineConfig } = require('cypress');
/*import { defineConfig } from 'cypress'; Use this or the one above?*/

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
