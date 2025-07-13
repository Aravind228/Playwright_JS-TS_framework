const { Given,When, Then } = require('@cucumber/cucumber')
const { expect } = require('@playwright/test');
const playwright = require('playwright');
const { Loginpage } = require('../../pageobjects/Loginpage');
const { DashboardPage } = require('../../pageobjects/DashboardPage');
const { CartPage } = require('../../pageobjects/CartPage');
const { OrderPage } = require('../../pageobjects/OrderPage');
const { log } = require('console');
const { config } = require('../../testData/Credentials');



Given('Users login into application with {string} and {string}', async function (username, password) {   
    const loginpage = new Loginpage(this.page);
  await loginpage.GoToTestURL(config.baseURL);
  await loginpage.DoLogin(username, password);
     });


When('Scroll the products and add {string} to the cart',{ timeout: 30000 }, async function (Productname) {
            const dashboardpage=new DashboardPage(this.page);
            await dashboardpage.Searchproductandaddtocart(Productname);
            await dashboardpage.clickoncart();
});

Then('Verify the product added  available in the cart and click on checkout', async function () {
            const cartpage=new CartPage(this.page);
            await cartpage.ClickonCheckout();
         });

Then('Give all the personal details', async function () {
            await this.page.waitForSelector("div[class='title']");
            this.orderpage = new OrderPage(this.page);
            await this.orderpage.HandleSequentialdropdown("Ind","India");
         });

Then('Click on place the order button',async function () {
          await this.orderpage.placetheorder();
         });

Then('Validate the message showing that the order is placed',async function () {
           await expect(this.page.getByText(" Thankyou for the order. ")).toBeVisible()
         });