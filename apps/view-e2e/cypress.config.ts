import { defineConfig } from 'cypress';

export default defineConfig({
  fileServerFolder: '.',
  video: true,
  videosFolder: '../../dist/view-e2e/videos',
  downloadsFolder: '../../dist/view-e2e/downloads',
  screenshotsFolder: '../../dist/view-e2e/screenshots',
  e2e: {
    setupNodeEvents(_on, _config) {
      // implement node event listeners here
    },
  },
});
