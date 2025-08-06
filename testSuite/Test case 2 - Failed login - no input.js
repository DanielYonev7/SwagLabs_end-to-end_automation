import createDriver from '../helpers/driver.js';
import { By } from 'selenium-webdriver';
import { landingPage, locateAndAssertElement, navigateToHomePage } from '../helpers/locators.js';
import assert from 'assert';


describe('Negative test: Failed login - no input', async function () {
  let driver;

  before(async function () {
    driver = await createDriver();
  });

  it('Test case 1: Open browser and navigate', async function() {
    await navigateToHomePage(driver);
  });

  it('Test case 2: Locate login button and click', async function(){

    await locateAndAssertElement(driver, landingPage.loginButton);
    let button = await driver.findElement(By.xpath(landingPage.loginButton));
    await button.click();

  });

  it("Test case 3: Assert correct error message: 'Epic sadface: Username is required'", async function(){
    
    let currentErrorMessage = await driver.findElement(By.xpath(landingPage.errorMessageContainer));
    let errorMessageText = await currentErrorMessage.getText();
    assert.strictEqual(errorMessageText, 'Epic sadface: Username is required');
    console.log("Text message asserted successfully: ", errorMessageText);

  });

  after(async function() {
    await driver.quit();
   });
  })
