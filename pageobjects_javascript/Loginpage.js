const { expect } = require("@playwright/test");

class Loginpage {

constructor(page) {

    this.page=page;
    this.username=page.locator("#userEmail");
    this.password=page.getByPlaceholder("enter your passsword");
    this.Clickbutton= page.locator("div input[name='login']")
    
}

async GoToTestURL(URLLink) {
    await this.page.goto(URLLink);
}

async DoLogin(usernamedata,passworddata) {
    await this.username.fill(usernamedata);
    await this.password.fill(passworddata);
    await this.Clickbutton.click();
    await this.page.waitForLoadState('networkidle');
    
}

async ValidateSuccessfullogin() {
  expect(this.page).toHaveTitle("Let's Shop");
    
}

}

module.exports={Loginpage};