const {test, expect} = require('@playwright/test');
const { Loginpage } = require('../pageobjects_javascript/Loginpage');
const { DashboardPage } = require('../pageobjects_javascript/DashboardPage');
const { CartPage } = require('../pageobjects_javascript/CartPage');
const { log } = require('console');
const { config } = require('../testData/Credentials');


test("Verify the correct product is added in the cart", async({page}) =>
{

const loginpage=new Loginpage(page);
await loginpage.GoToTestURL(config.baseURL);
await loginpage.DoLogin(config.username,config.password);
const dashboardpage=new DashboardPage(page);
await dashboardpage.Searchproductandaddtocart("ADIDAS ORIGINAL");
await dashboardpage.clickoncart();
const cartpage=new CartPage(page);
const recievedproduct=await cartpage.getproduct("ADIDAS ORIGINAL");
await expect(recievedproduct).toHaveText("ADIDAS ORIGINAL");

await cartpage.ClickonCheckout();
await page.waitForSelector("div[class='title']");
await expect(page.locator("div[class='title']").nth(0)).toContainText("Credit Card Number ");






});
