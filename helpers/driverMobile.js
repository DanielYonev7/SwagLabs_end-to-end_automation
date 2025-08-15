import { Builder } from 'selenium-webdriver';
import chrome from 'selenium-webdriver/chrome.js';

export default async function createDriver() {
  const options = new chrome.Options();

  const mobileEmulation = {
    deviceName: 'iPhone X'
  };

  options.setMobileEmulation(mobileEmulation);

  
  options.addArguments(
    '--disable-search-engine-choice-screen',
    '--disable-popup-blocking',
    '--disable-notifications',
    '--disable-infobars',
    '--disable-blink-features=AutomationControlled'
  );

    // Disable the password manager popups
options.setUserPreferences({
  'credentials_enable_service': false,
  'profile.password_manager_enabled': false,
  'profile.password_manager_leak_detection': false
});


  return await new Builder()
    .forBrowser('chrome')
    .setChromeOptions(options)
    .build();
}
