import createDriver from '../helpers/driver.js';
import { By, until } from 'selenium-webdriver';
import { homePage, landingPage, locateAndAssertElement, navigateToHomePage } from '../helpers/locators.js';


describe('Positive test: Successful login',async function () {
  let driver;

  before(async function () {
    driver = await createDriver();
  });

  it('Test case 1: Open browser and navigate', async function() {
    await navigateToHomePage(driver);
  });

  it('Test case 2: Enter username: standard_user', async function(){

    let username = await driver.findElement(By.xpath(landingPage.username_field));
    await driver.wait(until.elementIsVisible(username), 5000);
    await username.sendKeys("standard_user");

  })

  it('Test case 3: Enter password: secret_sauce', async function() {

    let password = await driver.findElement(By.xpath(landingPage.password_field));
    await driver.wait(until.elementIsVisible(password), 5000);
    await password.sendKeys("secret_sauce");

  })

  it('Test case 4: Locate "login" button and click', async function() {

    let button = await driver.findElement(By.xpath(landingPage.loginButton));
    await button.click();

  })

  it('Test case 5: Assert successful login', async function() {

    await locateAndAssertElement(driver, homePage.shoppingCartIcon);

  })

  after(async function() {
    await driver.quit();
   });
  })
