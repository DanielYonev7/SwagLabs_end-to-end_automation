import { By } from 'selenium-webdriver';

export const loginButton = By.xpath("//input[@id = 'login-button']");
export const shoppingCartIcon = By.xpath("//div[@class = 'primary_header']//div[@id = 'shopping_cart_container']");
export const headerText = By.xpath("//div[@class = 'login_logo']")