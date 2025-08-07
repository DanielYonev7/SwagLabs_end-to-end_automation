import { By, until } from 'selenium-webdriver';

export const landingPage = { //Elements visible on the landing page

    loginButton: "//input[@id = 'login-button']",
    headerText: "//div[@class = 'login_logo']",
    username_field:"//div[@class = 'form_group']//input[@placeholder = 'Username']",
    password_field: "//div[@class = 'form_group']//input[@placeholder = 'Password']",
    errorMessageContainer: "//div[@class = 'login-box']//div[@class = 'error-message-container error']"

};

export const homePage = { //Elements visible on the home page

     shoppingCartIcon:"//div[@class = 'primary_header']//div[@id = 'shopping_cart_container']"

};



export const locateAndAssertElement = async (driver, element) => { // function that checks if an element is visible on the screen and locating it

    try{   
        let currentElement = await driver.findElement(By.xpath(element));
        await driver.wait(until.elementIsVisible(currentElement),5000);
        console.log("Element located successfully: ", element);
    }
    catch(error){
        console.log("An error occurred: ", error);
    }
  }

export const navigateToHomePage = async (driver) => { // function that navigates us to the home page and asserts the header text

    try{
        await driver.get('https://www.saucedemo.com');
        await locateAndAssertElement(driver, landingPage.headerText);
        console.log("Navigate to home page: Successful");
    }
    catch(error){
        console.log("Could not open page due to an error: ", error);
    }
}