const test=require('@playwright/test');


test("Open new Tab", async ({browser}) => {


const context=await browser.newContext();
const page1 =   await context.newPage();
await page1.goto("https://aravind228.github.io/My-own-web-apps/");
const page2 =   await context.newPage();
await page2.goto("https://aravind228.github.io/My-own-web-applications/");

});

test("Alert validation", async ({page}) => {

await page.goto("https://aravind228.github.io/My-own-web-applications/");

page.once('dialog', async dialog => {
  console.log(`Alert message: ${dialog.message()}`);
  await dialog.dismiss(); // Accept the alert
});
await page.click('#alertBtn');

page.pause();
});




//test('Handle new window opened by clicking #windowsBtn', async ({ page, context }) => {
  
  await page.goto('https://aravind228.github.io/My-own-web-applications/');

 
  const [newPage] = await Promise.all([
    context.waitForEvent('page'), 
    page.click('#windowsBtn'),    
  ]);


  await newPage.waitForLoadState();

  
  console.log('New page URL:', newPage.url());

  
  console.log('New page title:', await newPage.title());

  
});
















