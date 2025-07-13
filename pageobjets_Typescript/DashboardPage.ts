import { Page, Locator } from '@playwright/test';

export class DashboardPage {
  private page: Page;
  private products: Locator;
  private cartButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.products = page.locator(".card-body");
    this.cartButton = page.getByRole('button', { name: 'Cart 1' });
  }

  async Searchproductandaddtocart(productname: string) {
    const productCount: number = await this.products.count();
    console.log("Product count is " + productCount);

    for (let i: number = 0; i < productCount; i++) {
      const productText: string | null = await this.products.nth(i).locator('b').textContent();
      console.log(productText);

      if (productText?.includes(productname)) {
        console.log("Product name you want is " + productText);
        await this.products.nth(i).locator("text=Add To Cart").click();
        break;
      }
    }
  }

  async clickoncart() {
    await this.cartButton.click();
    await this.page.waitForLoadState('networkidle');
  }
}
