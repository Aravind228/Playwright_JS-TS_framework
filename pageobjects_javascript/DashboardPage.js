class DashboardPage

{

constructor(page) 
{
this.page=page;
//this.productname = "ADIDAS ORIGINAL";
this.products = page.locator(".card-body");
this.cartButton = page.getByRole('button', { name: 'Cart 1' })

}


async Searchproductandaddtocart(productname) {
    console.log("Product count is "+await this.products.count());
    for(let i=0;i<await this.products.count();i++) {
    const productText=await this.products.nth(i).locator('b').textContent();;
    console.log(productText);
    
     if(productText.includes(productname)) {
        console.log("Product name you want is "+productText);
        await this.products.nth(i).getByText(" Add To Cart").click();
        break;
     }


}
}

async clickoncart() {
    await this.cartButton.click();
    await this.page.waitForLoadState('networkidle');

}

}

module.exports={DashboardPage};