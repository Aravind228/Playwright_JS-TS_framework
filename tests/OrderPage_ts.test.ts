import { test, expect, Page } from '@playwright/test';
import { OrderPage } from '../pageobjets_Typescript/OrderPage';
import { DashboardPage } from '../pageobjets_Typescript/DashboardPage';
import { CartPage } from '../pageobjets_Typescript/CartPage';
import { Loginpage } from '../pageobjets_Typescript/Loginpage';
import { config } from '../testData/Credentials_Typescript';

test("Verify the correct product is added in the cart through Type Script", async ({ page }: { page: Page }) => {
  const loginpage = new Loginpage(page);
  await loginpage.GoToTestURL(config.baseURL);
  await loginpage.DoLogin(config.username, config.password);

  const dashboardpage = new DashboardPage(page);
  await dashboardpage.Searchproductandaddtocart("ADIDAS ORIGINAL");
  await dashboardpage.clickoncart();

  const cartpage = new CartPage(page);
  await cartpage.ClickonCheckout();
  await page.waitForSelector("div[class='title']");

  const orderpage = new OrderPage(page);
  await orderpage.HandleSequentialdropdown("Ind", "India");
  await orderpage.placetheorder();

  await expect(page.getByText(" Thankyou for the order. ")).toBeVisible();
});
