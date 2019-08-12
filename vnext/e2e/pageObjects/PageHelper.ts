import { IAppiumDriver, By2 } from 'selenium-appium';
import { AnyPage } from './AnyPage';


const goBackInvokerLocator = By2.accessibilityId('__GoBackInvoker');
const backButtonLocator = By2.accessibilityId('__BackButton');
const textInputTestPageLocator = By2.accessibilityId('TextInputTestPage');
const reactControlErrorBoxLocator = By2.accessibilityId('_ReactControlErrorBox');

function gotoHomePage(driver: IAppiumDriver) {
  return new AnyPage(driver).clickAndGotoHomePage();
}

export const PageHelper = {
  goBackInvokerLocator: goBackInvokerLocator,
  backButtonLocator: backButtonLocator,
  textInputTestPageLocator: textInputTestPageLocator,
  reactControlErrorBoxLocator: reactControlErrorBoxLocator,
  gotoHomePage: gotoHomePage
}
