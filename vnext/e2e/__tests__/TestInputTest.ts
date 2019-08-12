import { appiumDriver, HomePage, TextInputTestPage, AnyPage, clickAndGotoHomePage } from '../testlib/index';
import { gotoPage } from 'selenium-appium'

jest.setTimeout(30000);

beforeAll(() => {
  return appiumDriver.start();
});

afterAll(() => {
  return appiumDriver.stop();
})

describe("TestInputTestPage", () => {
  beforeAll(async () => {
    const homePage = await clickAndGotoHomePage(appiumDriver);
    await homePage.clickAndGotoTextInputTestPage();
  })

  test('First', async () => {
    await gotoPage(TextInputTestPage, appiumDriver);
    const textInput = appiumDriver.getByAccessibilityId('TextInput');
    await textInput.clear();
    await textInput.sendKeys('ABC');
    expect(await textInput.getText()).toBe('ABC');
  });


  test('Second', async () => {
    const textInputPage = await gotoPage(TextInputTestPage, appiumDriver);
    let textInput = appiumDriver.getByAccessibilityId('TextInput');
    await textInput.clear();

    await textInput.sendKeys('EF');
    expect(await textInput.getText()).toBe('EF');
  });

  afterAll(async () => {
    const homePage = await clickAndGotoHomePage(appiumDriver);
  })
})