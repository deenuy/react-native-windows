import { appiumDriver , HomePage } from '../testlib/index';
import { gotoPage } from 'selenium-appium'
import console from 'console';

jest.setTimeout(30000);

beforeAll(() => {
  return appiumDriver.start();
});

afterAll(() => {
  return appiumDriver.stop();
})

describe("TestInputTestPage", () => {

  test('First', async () => {
    const homePage = await gotoPage(HomePage, appiumDriver);
    const textInputTestPage = await homePage.clickAndGotoTextInputTestPage();

    await textInputTestPage.clickAndGotoHomePage();
    expect(4+2).toBe(6);
  });


  test('Second',  () => {
    expect(4+2).toBe(8);
  });

})