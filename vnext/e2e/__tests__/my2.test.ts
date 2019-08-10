import { appiumDriver } from '../testsetup'
import {  HomePage  } from '../../E2ETestLib/index';
//import { gotoPage} from 'selenium-appium'


jest.setTimeout(30000);


beforeAll(() => {
  return appiumDriver.start();
});
afterAll(() => {
  return appiumDriver.stop();
});


describe("TestInputTestPage test", () => {
  beforeAll(() => {
   // return PageHelper.gotoHomePage(appiumDriver);
   //new TextInputTestPage(appiumDriver);
   
  });

  test('First', async () => {
    //gotoPage(AnyPage, appiumDriver);
    new HomePage(appiumDriver);
  });


  test('Second', async () => {

  });

})