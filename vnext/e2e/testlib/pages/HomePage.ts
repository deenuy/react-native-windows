import { PageObject, By2, IAppiumDriver } from 'selenium-appium';
import { WebElementCondition, until } from 'selenium-webdriver';
import { TextInputTestPage } from './TextInputTestPage';
import {Pages} from './Pages'

export class HomePage extends PageObject {
  isReadyConditions(): WebElementCondition[] {
    return [until.elementLocated(By2.accessibilityId('__HomeButton'))];
  }

  clickAndGotoTextInputTestPage() {
    return this.clickAndGotoPage(TextInputTestPage, Pages.textInputTestPageLocator);
  }

  constructor(driver: IAppiumDriver, timeout?: number) {
    super(driver, timeout)
  }
}