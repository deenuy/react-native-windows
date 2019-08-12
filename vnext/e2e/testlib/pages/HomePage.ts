import { PageObject, By2, IAppiumDriver, IPageObject } from 'selenium-appium';
import { WebElementCondition, until, By } from 'selenium-webdriver';
import { TextInputTestPage } from './TextInputTestPage';
import { Locators } from './Locators'
import { AnyPage } from './AnyPage';

export class HomePage extends PageObject {
  isReadyConditions(): WebElementCondition[] {
    return [until.elementLocated(By2.accessibilityId('__HomeButton'))];
  }

  clickAndGotoTextInputTestPage() {
    return this.clickAndGotoPage(TextInputTestPage, Locators.textInputTestPageLocator);
  }

  constructor(driver: IAppiumDriver, timeout?: number) {
    super(driver, timeout)
  }
}

export function clickAndGotoHomePage(driver: IAppiumDriver, by?: By, timeout?: number) {
  if (!by) {
    by = Locators.homeLocator;
  }
  return clickAndGotoPage(HomePage, driver, by, timeout);
}

export function clickAndGotoPage<T extends IPageObject>(type: (new (...args: any[]) => T), driver: IAppiumDriver, by: By, timeout?: number) {
  return new AnyPage(driver).clickAndGotoPage(type, by, timeout);
}