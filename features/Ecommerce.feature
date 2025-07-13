Feature: Ecommerce website Automation

  Scenario Outline: Ordering the products in Ecommerce Website
    Given Users login into application with "ar2012210@gmail.com" and "Arav12345@"
    When Scroll the products and add "<productName>" to the cart
    Then Verify the product added  available in the cart and click on checkout
    Then Give all the personal details
    Then Click on place the order button
    Then Validate the message showing that the order is placed

    Examples:
      | productName      |
      | ADIDAS ORIGINAL  |
      | ZARA COAT 3      |
