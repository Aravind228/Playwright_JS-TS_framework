// @ts-check
import { defineConfig, devices } from '@playwright/test';


//for executing this cofig file explicitly provide this command npx playwright test --config=playwright.browser.js --project=chromium
// add specific test case file after test in above command followed by config properties and browser name


// use this command to run only smoke test cases on chromium npx playwright test --config=playwright.browser.js --project=chromium --grep=@smoke

const config=({
  testDir: './tests',
  retries:1,
  workers:3,
  timeout: 30 * 1000,
  expect: {
    timeout: 5 * 1000,
  },
  reporter: [
    ['list'],
    ['html', { outputFolder: 'playwright-report', open: 'on-failure' }],
    ['allure-playwright']
  ],
  use: {
    screenshot: 'on',
    trace: 'off',
    video: 'off',
    headless: false,
  
  },
  projects: [
    {
      name: 'chromium',
      use: {
        browserName: 'chromium',

      },
    },
    {
      name: 'firefox',
      use: {
        browserName: 'firefox',
      },
    },
  ],
});

module.exports=config;

