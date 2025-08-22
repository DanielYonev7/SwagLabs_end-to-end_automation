import createDriver from '../../helpers/driver.js';
import { By, until } from 'selenium-webdriver';
import { homePage, navigateToHomePage, shoppingCartPage } from '../../helpers/locators.js';
import { loginFunction } from '../../helpers/login.js';
import assert from 'assert';

describe("Check 'Continue Shopping' button functionality",async function () {
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

  it('Test case 3: Click on the shopping cart icon', async function(){
    const element = await driver.findElement(By.xpath(homePage.shoppingCartIcon));
    await driver.wait(until.elementIsVisible(element), 5000);
    await element.click();
  })

  it("Test case 4: Assert and click 'Continue Shopping'", async function(){
    const button = await driver.findElement(By.xpath(shoppingCartPage.continueShoppingButton));
    await driver.wait(until.elementIsVisible(button), 5000);
    await button.click();
  })

  it("Test case 5: Assert home page visibility", async function(){
    const productsHeader = await driver.findElement(By.xpath("//span[contains(.,'Products')]"));
    await driver.wait(until.elementIsVisible(productsHeader), 5000);
    const visible = await productsHeader.isDisplayed();
    assert.strictEqual(visible, true, "Element is visible");
  })

  after(async function() {
    await driver.quit();
   });
  })
