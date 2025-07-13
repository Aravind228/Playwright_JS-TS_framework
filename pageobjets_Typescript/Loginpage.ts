import { Page, Locator, expect } from '@playwright/test';

export class Loginpage {
  private page: Page;
  private username: Locator;
  private password: Locator;
  private clickButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.username = page.locator("#userEmail");
    this.password = page.getByPlaceholder("enter your passsword");
    this.clickButton = page.locator("div input[name='login']");
  }

  async GoToTestURL(URLLink: string) {
    await this.page.goto(URLLink);
  }

  async DoLogin(usernamedata: string, passworddata: string) {
    await this.username.fill(usernamedata);
    await this.password.fill(passworddata);
    await this.clickButton.click();
    await this.page.waitForLoadState('networkidle');
  }

  async ValidateSuccessfullogin() {
    await expect(this.page).toHaveTitle("Let's Shop");
  }
}
