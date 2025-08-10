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
    let addBackpackToCart = await driver.findElement(By.xpath("//button[@id = 'add-to-cart-sauce-labs-backpack']"));
    await driver.wait(until.elementIsVisible(addBackpackToCart), 5000);
    await addBackpackToCart.click();
  })

  it('Test case 4: Click on the shopping cart icon', async function(){
    let element = await driver.findElement(By.xpath(homePage.shoppingCartIcon));
    await driver.wait(until.elementIsVisible(element), 5000);
    await element.click();
  })

  it('Test case 5: Assert item visibility in shopping cart page', async function(){
    let item = await driver.findElement(By.xpath("//div[@data-test='item-quantity']"));
    await driver.wait(until.elementIsVisible(item), 5000);
    let itemQuantity = await item.getText(); //getting the quantity text of the added item in the shopping cart
    assert.strictEqual(itemQuantity, '1');
    console.log("Item successfully added with quantity: ", itemQuantity);
  })

  after(async function() {
    await driver.quit();
   });
  })
