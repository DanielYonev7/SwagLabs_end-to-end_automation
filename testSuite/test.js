import createDriver from '../helpers/driver.js';

let driver;

describe('Google Search',async function () {

  before(async function () {
    driver = await createDriver();
  });

  it('Test case 1: Open browser and navigate', async function() {
    await driver.get('https://www.saucedemo.com');
    console.log("page loaded successfully!")
  });

  after(async function() {
    await driver.quit();

  });
});