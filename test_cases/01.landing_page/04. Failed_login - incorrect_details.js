import createDriver from '../../helpers/driver.js';
import { By, until } from 'selenium-webdriver';
import { landingPage, locateAndClickElement, navigateToHomePage } from '../../helpers/locators.js';
import assert from 'assert';


describe('Failed login - Incorrect details', async function () {
  let driver;

  before(async function () {
    driver = await createDriver();
  });

  it('Test case 1: Open browser and navigate', async function() {
    await navigateToHomePage(driver);
  });

  it('Test case 2: Enter username: test_username', async function(){

    const username = await driver.findElement(By.xpath(landingPage.username_field));
    await driver.wait(until.elementIsVisible(username), 5000);
    await username.sendKeys("test_username");

  });

  it('Test ase 3: Enter password: test_password', async function(){

    const password = await driver.findElement(By.xpath(landingPage.password_field));
    await driver.wait(until.elementIsVisible(password), 5000);
    await password.sendKeys("test_password");

  });

  it('Test case 4: Locate login button and click', async function(){

    await locateAndClickElement(driver, landingPage.loginButton);

  });

  it("Test case 5: Assert correct error message: 'Epic sadface: Username and password do not match any user in this service'", async function(){
    
    const currentErrorMessage = await driver.findElement(By.xpath(landingPage.errorMessageContainer));
    const errorMessageText = await currentErrorMessage.getText();
    assert.strictEqual(errorMessageText, 'Epic sadface: Username and password do not match any user in this service');
    console.log("Text message asserted successfully: ", errorMessageText);

  });

  after(async function() {
    await driver.quit();
   });
  })