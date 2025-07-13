const { expect } = require("@playwright/test");
const { log } = require("console");

class OrderPage {

constructor(page) {

    this.page=page;
    this.placeorder = page.getByText("Place Order ");
    this.dropdown = page.getByPlaceholder("Select Country");
    
}

async HandleSequentialdropdown(Searchingcountry,selectingcountry) {
  
  await this.dropdown.pressSequentially(Searchingcountry);


  const items = this.page.locator("section.ta-results button");

 
  //await items.first().waitFor({ state: "visible", timeout: 5000 });

  await items.first().waitFor();

  const count = await items.count();
  console.log("Dropdown count:", count);

  for (let i = 0; i < count; i++) {
    const item = items.nth(i);
    const text = await item.textContent();
    console.log("Item text:", text);

    if (text.trim() === selectingcountry) {
      await item.click();
      break; 
    }
  }
}

async placetheorder() {
    await expect(this.placeorder).toBeVisible();      // Wait until it's visible
    await expect(this.placeorder).toBeEnabled(); 
    await this.placeorder.click();
    await this.page.waitForLoadState('networkidle');

}


}

module.exports={OrderPage};