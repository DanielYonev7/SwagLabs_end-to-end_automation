import createDriver from '../../helpers/driver.js';
import { By, until } from 'selenium-webdriver';
import { homePage, landingPage, locateAndAssertElement, navigateToHomePage } from '../../helpers/locators.js';
import { loginFunction } from '../../helpers/login.js';

describe('Positive test: Successful login',async function () {
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

  after(async function() {
    await driver.quit();
   });
  })
