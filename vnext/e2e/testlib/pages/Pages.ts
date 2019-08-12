import { WebElementCondition, until } from 'selenium-webdriver';
import { IAppiumDriver, PageObject, By2 } from 'selenium-appium';
import { HomePage } from './HomePage';

export class AnyPage extends PageObject {
  isReadyConditions(): WebElementCondition[] {
    return [until.elementLocated(Pages.homeLocator)];
  }

  isOnTestPage(): Promise<boolean> {
     return this.elementExists(Pages.backButtonLocator);
  }

  isOnReactErrorPage(): Promise<boolean> {
    return this.elementExists(Pages.reactControlErrorBoxLocator);    
  }

  clickAndGotoHomePage() {
    return this.clickAndGotoPage(HomePage, Pages.homeLocator);
  }

  constructor(driver: IAppiumDriver, timeout?: number) {
    super(driver, timeout)
  }
}

export class TestPage extends AnyPage {
  isReadyConditions(): WebElementCondition[] {
    return [until.elementLocated(Pages.homeLocator), until.elementLocated(Pages.backButtonLocator)];
  }

  constructor(driver: IAppiumDriver, timeout?: number) {
    super(driver, timeout)
  }
}

function gotoHomePage(driver: IAppiumDriver) {
  return new AnyPage(driver).clickAndGotoHomePage();
}

export const Pages = {
  homeLocator: By2.accessibilityId('__HomeButton'),
  backButtonLocator: By2.accessibilityId('__BackButton'),
  textInputTestPageLocator: By2.accessibilityId('TextInputTestPage'),
  reactControlErrorBoxLocator: By2.accessibilityId('_ReactControlErrorBox'),
  gotoHomePage: gotoHomePage
}

