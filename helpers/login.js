import { By, until } from 'selenium-webdriver';
import assert from 'assert';

export const loginFunction = async(driver) => {

    try{ // attempt to locate username field and input Username
        const username = await driver.findElement(By.xpath("//div[@class = 'form_group']//input[@placeholder = 'Username']"));
        await driver.wait(until.elementIsVisible(username), 5000);
        console.log("Username field located successfully!")
        await username.sendKeys("standard_user");
            
    }
    catch(error){
        console.log("Username field was not located", error)
    }
 
    try{ // attempt to locate password field and input password
        const password = await driver.findElement(By.xpath("//div[@class = 'form_group']//input[@placeholder = 'Password']"));
        await driver.wait(until.elementIsVisible(password), 5000);
        console.log("Password field located successfully!")
        await password.sendKeys("secret_sauce");
    }
    catch(error){
        console.log("Password field was not located: ", error)
    }

    try{ // attempt to locate the login button on the home page and press it
        const button = await driver.findElement(By.xpath("//input[@id = 'login-button']"));
        console.log("Login button located successfully!")
        await button.click();
    }
    catch(error){
        console.log("Login button was not located");
    }

    const productsHeader = await driver.findElement(By.xpath("//span[contains(.,'Products')]"));
        await driver.wait(until.elementIsVisible(productsHeader), 5000);
        const visible = await productsHeader.isDisplayed();
        assert.strictEqual(visible, true, "Element is visible");
}