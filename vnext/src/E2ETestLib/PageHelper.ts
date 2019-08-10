import { IAppiumDriver, By2 } from 'selenium-appium';
import { AnyPage } from './Pages/AnyPage';

export class PageHelper
{
  static goBackInvokerLocator = By2.accessibilityId('__GoBackInvoker');
  static backButtonLocator = By2.accessibilityId('__BackButton');
  static textInputTestPageLocator = By2.name('TextInputTestPage');
  static reactControlErrorBoxLocator = By2.accessibilityId('_ReactControlErrorBox');

  static gotoHomePage(driver: IAppiumDriver){
    return new AnyPage(driver).clickAndGotoHomePage();
  }
}