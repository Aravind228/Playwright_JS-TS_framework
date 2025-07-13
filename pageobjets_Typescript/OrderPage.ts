import { Page, Locator, expect } from '@playwright/test';

export class OrderPage {
  private page: Page;
  private placeorder: Locator;
  private dropdown: Locator;

  constructor(page: Page) {
    this.page = page;
    this.placeorder = page.getByText("Place Order ");
    this.dropdown = page.getByPlaceholder("Select Country");
  }

  async HandleSequentialdropdown(searchingcountry: string, selectingcountry: string) {
    // Using pressSequentially to simulate typing (Playwright 1.35+)
    await this.dropdown.pressSequentially(searchingcountry);

    const items = this.page.locator("section.ta-results button");

    await items.first().waitFor();

    const count = await items.count();
    console.log("Dropdown count:", count);

    for (let i = 0; i < count; i++) {
      const item = items.nth(i);
      const text = await item.textContent();
      console.log("Item text:", text);

      if (text?.trim() === selectingcountry) {
        await item.click();
        break;
      }
    }
  }

  async placetheorder() {
    await expect(this.placeorder).toBeVisible();
    await expect(this.placeorder).toBeEnabled();
    await this.placeorder.click();
    await this.page.waitForLoadState('networkidle');
  }
}
