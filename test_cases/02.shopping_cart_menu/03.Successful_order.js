import createDriver from '../../helpers/driver.js';
import { By, until } from 'selenium-webdriver';
import { navigateToHomePage, homePage, shoppingCartPage, locateAndClickElement } from '../../helpers/locators.js';
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
    
  })


  after(async function() {
    await driver.quit();
   });
  })