import { PageObject, By2, IAppiumDriver } from 'selenium-appium';
import { WebElementCondition, until } from 'selenium-webdriver';
import { PageHelper } from './PageHelper';
import { TextInputTestPage } from './TextInputTestPage';

export class HomePage extends PageObject {
  isReadyConditions(): WebElementCondition[] {
    return [until.elementLocated(By2.accessibilityId('__GoBackInvoker'))];
  }

  clickAndGotoTextInputTestPage() {
    return this.clickAndGotoPage(TextInputTestPage, PageHelper.textInputTestPageLocator);
  }

  constructor(driver: IAppiumDriver, timeout?: number) {
    super(driver, timeout)
  }
}