import { Builder , By, until } from 'selenium-webdriver';
import chrome from 'selenium-webdriver/chrome.js';

export let driver;

export default async function createDriver() {
  const options = new chrome.Options();

  // Add useful arguments
  options.addArguments(
    '--disable-search-engine-choice-screen',
    '--disable-popup-blocking',
    '--disable-notifications',
    '--disable-infobars',
    '--disable-blink-features=AutomationControlled',
    '--start-maximized'

  );
    // Return new WebDriver instance with options
  return await new Builder()
    .forBrowser('chrome')
    .setChromeOptions(options)
    .build();
}
