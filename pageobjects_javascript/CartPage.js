const { expect } = require("@playwright/test");

class CartPage {

constructor(page) {

    this.page=page;
    this.Checkout = page.getByText("Checkout");
}

getproduct(productname) {
    const prod = this.page.getByText(productname);
    return prod;
}

async ClickonCheckout() {
    await this.Checkout.click();
}





}

module.exports={CartPage};