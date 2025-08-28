import createDriver from '../../helpers/driver.js';
import { By, until } from 'selenium-webdriver';
import { navigateToHomePage, homePage, shoppingCartPage, locateAndClickElement, locateAndAssertElement, checkoutInformationPage, overviewInformationPage } from '../../helpers/locators.js';
import assert from 'assert';
import { loginFunction } from '../../helpers/login.js';

describe('Successful order', async function () {
  let driver;

  before(async function () {
    driver = await createDriver();
  });

    it('Test case 1: Open browser and navigate', async function() {
      await navigateToHomePage(driver);
    });
  
    it('Test case 2: Login', async function(){
      await loginFunction(driver);
    })

    it('Test case 3: Click on "Add to cart" button on the backpack item', async function(){
      const addBackpackToCart = await driver.findElement(By.xpath("//button[@id = 'add-to-cart-sauce-labs-backpack']"));
      await driver.wait(until.elementIsVisible(addBackpackToCart), 5000);
      await addBackpackToCart.click();
    })

    it('Test case 4: Click on the shopping cart icon', async function(){
      await locateAndClickElement(driver, homePage.shoppingCartIcon);
    })

    it("Test case 5: Locate and click 'Checkout' button", async function(){
      await locateAndClickElement(driver, shoppingCartPage.checkoutButton);
  })

  it("Test case 6: 'Checkout: Your information' - Input 'First Name'", async function(){
      const firstName = await driver.findElement(By.xpath(checkoutInformationPage.firstNameField));
      await driver.wait(until.elementIsVisible(firstName), 5000);
      await firstName.sendKeys("TestFirstName");
  })

  it("Test case 7: 'Checkout: Your information' - Input 'Last Name'", async function(){
      const lastName = await driver.findElement(By.xpath(checkoutInformationPage.lastNameFIeld));
      await driver.wait(until.elementIsVisible(lastName), 5000);
      await lastName.sendKeys("TestLastName");
  }) 

  it("Test case 8:  'Checkout: Your information' - Input 'Zip'", async function(){
      const zipCode = await driver.findElement(By.xpath(checkoutInformationPage.zipCodeField));
      await driver.wait(until.elementIsVisible(zipCode), 5000);
      await zipCode.sendKeys("0000");
  })

  it("Test case 9: Press continue", async function(){
    await locateAndClickElement(driver, checkoutInformationPage.continueButton);
  })

  it("Test case 10: Press 'Finish' to complete order", async function(){
    await locateAndClickElement(driver, overviewInformationPage.finishButton);
  })

  it("Test case 11: Check if 'Thank you for your order!' message is visible", async function(){
    const text = await driver.findElement(By.xpath("//div[@id='checkout_complete_container']//h2[contains(.,'Thank you for your order!')]"))
    await driver.wait(until.elementIsVisible(text), 5000);
  })

  it("Test case 12: Check if 'Back Home' button is visible and click it", async function(){
    const backButton = await driver.findElement(By.xpath("//div[@id='checkout_complete_container']//button[@id='back-to-products']"));
    await driver.wait(until.elementIsVisible(backButton), 5000);
    await backButton.click();
  })

  it("Test case 13: Check if we are redirected to the home page", async function(){
    const productsHeader = await driver.findElement(By.xpath("//span[contains(.,'Products')]"));
    await driver.wait(until.elementIsVisible(productsHeader), 5000);
    const visible = await productsHeader.isDisplayed();
    assert.strictEqual(visible, true, "Element is visible, we are on the home page");
  })

  after(async function() {
    await driver.quit();
   });
  })