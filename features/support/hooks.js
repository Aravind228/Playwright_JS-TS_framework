const { Before, After } = require('@cucumber/cucumber');
const playwright = require('playwright');
const fs = require('fs');
const path = require('path');

Before(async function () {
  this.browser = await playwright.chromium.launch({ headless: false });
  this.context = await this.browser.newContext();
  this.page = await this.context.newPage();
});

After(async function (scenario) {
  // Take screenshot if scenario failed
  if (scenario.result.status === 'FAILED' && this.page) {
    const screenshotDir = path.resolve('cucumberscreenshots');
    if (!fs.existsSync(screenshotDir)) {
      fs.mkdirSync(screenshotDir);
    }

    const fileName = `${scenario.pickle.name.replace(/\s+/g, '_')}.png`;
    const filePath = path.join(screenshotDir, fileName);
    await this.page.screenshot({ path: filePath, fullPage: true });

    console.log(`📸 Screenshot saved: ${filePath}`);
  }

  await this.browser?.close();
});
