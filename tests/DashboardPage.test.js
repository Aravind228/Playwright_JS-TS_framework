const {test, expect} = require('@playwright/test');
const { Loginpage } = require('../pageobjects_javascript/Loginpage');
const { DashboardPage } = require('../pageobjects_javascript/DashboardPage');
const { log } = require('console');
const { config, param} = require('../testData/Credentials');

//test.describe.configure({ mode: 'serial' }) -To run test case serial and skip below tc on failure of one
test(`@smoke Go to Dashboard and add the product you want`, async({page}) =>
{


const loginpage=new Loginpage(page);
await loginpage.GoToTestURL(config.baseURL);
await loginpage.DoLogin(config.username,config.password);
const dashboardpage=new DashboardPage(page);

await dashboardpage.Searchproductandaddtocart(config.Productname);

await dashboardpage.clickoncart();
expect(await page.locator('h1', { hasText: 'My Cart' })).toBeVisible();


});



//This dashboard test case is parameterised using credentials.js array and it runs two times for different products
for (const element of param) {
test(`This test is for parameterization.Add product ${element.Productname} to dashboard successfully`, async({page}) =>
{


const loginpage=new Loginpage(page);
await loginpage.GoToTestURL(element.baseURL);
await loginpage.DoLogin(element.username,element.password);
const dashboardpage=new DashboardPage(page);

await dashboardpage.Searchproductandaddtocart(element.Productname);

await dashboardpage.clickoncart();

expect(await page.locator('h1', { hasText: 'My Cart' })).toBeVisible();


});
}



// const products = page.locator(".card-body");
// const cartButton = page.getByRole('button', { name: 'Cart 1' })


//await page.waitForLoadState('networkidle');

//console.log("Product count is "+await products.count());

// for(let i=0;i<await products.count();i++) {
//     const productText=await products.nth(i).locator('b').textContent();;
//     console.log(productText);
    
//      if(productText.includes(productname)) {
//         console.log("Product name you want is "+productText);
//         await products.nth(i).getByText(" Add To Cart").click();
//         break;
//      }


// }

//await cartButton.click();
// await Checkout.click();


// await dropdown.pressSequentially("ind");
// await indiaSpan.nth(1).click();

// await placeorder.click();

// await page.pause();