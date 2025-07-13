const {test, expect}=require('@playwright/test');

/*test('First Playwright Test',async ({browser}) =>
{

const context=await browser.newContext();
const page =   await context.newPage();
await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
console.log(await page.title());
await page.locator("//input[@name='username']").fill("rahulshettyacademy");
await page.locator("//input[@name='password']").fill("learning");
await page.locator("//input[@name='signin']").click();
const con =await page.locator("//h1[text()='Shop Name']").textContent()
console.log(con);


 
});


test('page Playwright Test',async ({page}) =>
{

await page.goto('https://www.myntra.com/');
console.log(await page.title());
await expect(page).toHaveTitle("Online Shopping for Women, Men, Kids Fashion & Lifestyle - Myntra");

});*/

test('My Application Test',async ({browser}) =>
{

    const context = await browser.newContext();
    const page = await browser.newPage();
    await page.goto("https://aravind228.github.io/My-own-web-apps/");
    await page.locator('#username').fill("admin");
    await page.locator('#username').fill("Aravind12345");
    await page.locator("button[type='submit']").click();

});
