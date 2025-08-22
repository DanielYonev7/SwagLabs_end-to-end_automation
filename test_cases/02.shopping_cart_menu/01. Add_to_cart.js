import createDriver from '../../helpers/driver.js';
import { By, until } from 'selenium-webdriver';
import { homePage, navigateToHomePage } from '../../helpers/locators.js';
import { loginFunction } from '../../helpers/login.js';
import assert from 'assert';

describe('Add item to cart',async function () {
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
    const element = await driver.findElement(By.xpath(homePage.shoppingCartIcon));
    await driver.wait(until.elementIsVisible(element), 5000);
    await element.click();
  })

  it('Test case 5: Assert item visibility in shopping cart page', async function(){
    const inventory = await driver.findElement(By.xpath("//div[@class='cart_item']"));
    await driver.wait(until.elementIsVisible(inventory), 5000);

    const item = await driver.findElement(By.xpath(homePage.backPackElement));
    await driver.wait(until.elementIsVisible(item), 5000);
  })

  after(async function() {
    await driver.quit();
   });
  })
