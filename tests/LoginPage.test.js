const {test, expect} = require('@playwright/test');
const { Loginpage } = require('../pageobjects_javascript/Loginpage');
const { config } = require('../testData/Credentials');


test(" @smoke Login Page Test", async({page}) =>
{


const pages=new Loginpage(page);
await pages.GoToTestURL(config.baseURL);
await pages.DoLogin(config.username,config.password);
await page.waitForLoadState('networkidle');
expect(page.locator("(//b[text()='Search'])[2]")).toBeVisible();









/*await page.locator("#userEmail").fill("ar2012210@gmail.com");
await page.getByPlaceholder("enter your passsword").fill("Arav12345@");
await page.locator("div input[name='login']").click();
//await page.getByRole("input",{name: "login"}).click();
await page.pause();*/




});