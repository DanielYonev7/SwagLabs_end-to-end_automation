import createDriver from '../helpers/driver.js';
import { Builder, By, Key, until } from 'selenium-webdriver';
import { headerText, loginButton, shoppingCartIcon } from '../helpers/locators.js'
import chai, { assert } from 'chai';
import { expect } from 'chai';


let driver;

describe('Positive test: Successful login',async function () {

  before(async function () {
    driver = await createDriver();
  });

  it('Test case 1: Open browser and navigate', async function() {
    await driver.get('https://www.saucedemo.com');
    let logo = driver.findElement(headerText)
    await driver.wait(until.elementIsVisible(logo),5000);
  });

  it('Test case 2: Enter username: standard_user', async function( ){
    let username_field = await driver.findElement(By.xpath("//div[@class = 'form_group']//input[@placeholder = 'Username']"));
    await driver.wait(until.elementIsVisible(username_field), 5000);
    await username_field.sendKeys("standard_user");
  })

  it('Test case 3: Enter password: secret_sauce', async function() {
    let password_field = await driver.findElement(By.xpath("//div[@class = 'form_group']//input[@placeholder = 'Password']"));
    await driver.wait(until.elementIsVisible(password_field), 5000);
    await password_field.sendKeys("secret_sauce");
})
  it('Test case 4: Locate "login" button and click', async function() {
    let button = await driver.findElement(loginButton);
    await button.click();
  })

  it('Test case 5: Assert successful login', async function () {
    let icon = await driver.findElement(shoppingCartIcon);
    await driver.wait(until.elementIsVisible(icon), 5000);
  })

  after(async function() {
    await driver.quit();
   });
  })