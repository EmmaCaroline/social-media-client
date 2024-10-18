/*const { defineConfig } = require('cypress'); Bruke denne eller den under? */
import { defineConfig } from 'cypress';

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(/*on, config REMOVE COMMENT SIGNS LATER (on and config should be there) */) {
      // implement node event listeners here
    },
  },
});
