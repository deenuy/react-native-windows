import { appiumDriver } from '../testsetup'
import { PageHelper } from '../pageObjects/PageHelper';
import { gotoPage } from 'selenium-appium'
import { TextInputTestPage } from '../pageObjects/TextInputTestPage';
import console from 'console';
import { HomePage } from '../pageObjects/HomePage';

jest.setTimeout(30000);

function start() {
  console.log("BeforeAll!!!!");
  return new Promise<void>(resolve => { appiumDriver.start().then(() =>{console.log("dddddddd"); resolve()}).catch(e => {console.log("aaaaaaaaaaaaa"); resolve(); }) });
}
beforeAll(() => {
  return appiumDriver.start();
});


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