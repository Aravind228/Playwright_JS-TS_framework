import { Page, Locator } from '@playwright/test';

export class CartPage {
  private page: Page;
  private Checkout: Locator;

  constructor(page: Page) {
    this.page = page;
    this.Checkout = page.getByText("Checkout");
  }

  getproduct(productname: string): Locator {
    return this.page.getByText(productname);
  }

  async ClickonCheckout() {
    await this.Checkout.click();
  }
}
