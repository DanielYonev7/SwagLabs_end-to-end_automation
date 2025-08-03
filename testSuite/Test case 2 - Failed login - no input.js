import createDriver from '../helpers/driver.js';
import {  By, until } from 'selenium-webdriver';
import { landingPage, locateAndAssertElement } from '../helpers/locators.js';

describe('Negative test: Failed login - no input',async function () {
  let driver;

  before(async function () {
    driver = await createDriver();
  });

  it('Test case 1: Open browser and navigate', async function() {
    await driver.get('https://www.saucedemo.com');
    await locateAndAssertElement(driver, landingPage.headerText);
  });

  after(async function() {
    await driver.quit();
   });
  })
