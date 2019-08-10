import { appiumDriver } from '../testsetup'
import { PageHelper } from '../pageObjects/PageHelper';
import { TextInputTestPage } from '../pageObjects/TextInputTestPage'
import { gotoPage } from 'selenium-appium'

jest.setTimeout(30000);


beforeAll(() => {
  return appiumDriver.start();
});
afterAll(() => {
  return appiumDriver.stop();
});


describe("TestInputTestPage", () => {
  beforeAll(() => {
    return PageHelper.gotoHomePage(appiumDriver);
  });

  test('First', async () => {
    gotoPage(TextInputTestPage, appiumDriver);
  });


  test('Second', async () => {

  });

})