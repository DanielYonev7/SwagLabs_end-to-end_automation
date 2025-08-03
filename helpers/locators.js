import { By, until } from 'selenium-webdriver';
export let driver;

export const landingPage = {

    loginButton: "//input[@id = 'login-button']",
    headerText: "//div[@class = 'login_logo']",
    username_field:"//div[@class = 'form_group']//input[@placeholder = 'Username']",
    password_field: "//div[@class = 'form_group']//input[@placeholder = 'Password']"

};

export const homePage = {

     shoppingCartIcon:"//div[@class = 'primary_header']//div[@id = 'shopping_cart_container']"

};

export const locateAndAssertElement = async (driver, element) => {

    let temp = await driver.findElement(By.xpath(element));
    await driver.wait(until.elementIsVisible(temp),5000);
    await console.log("Element located successfully: ", element);

  }