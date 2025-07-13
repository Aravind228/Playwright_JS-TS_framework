const {test, expect}=require('@playwright/test');

test('My Application Test',async ({page}) =>
{

    await page.goto("https://aravind228.github.io/My-own-web-apps/");
    await page.locator('#username').fill("admin");
    await page.locator('#username').fill("Aravind12345");
    await page.locator("button[type='submit']").click();

});