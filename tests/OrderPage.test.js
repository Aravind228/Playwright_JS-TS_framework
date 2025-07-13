const {test, expect} = require('@playwright/test');
const { Loginpage } = require('../pageobjects_javascript/Loginpage');
const { DashboardPage } = require('../pageobjects_javascript/DashboardPage');
const { CartPage } = require('../pageobjects_javascript/CartPage');
const { OrderPage } = require('../pageobjects_javascript/OrderPage');
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
await cartpage.ClickonCheckout();
await page.waitForSelector("div[class='title']");

const orderpage=new OrderPage(page);
await orderpage.HandleSequentialdropdown("Ind","India");


await orderpage.placetheorder();
await expect(page.getByText(" Thankyou for the order. ")).toBeVisible()






});