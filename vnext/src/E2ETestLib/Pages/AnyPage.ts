import { IAppiumDriver } from 'selenium-appium';
import { WebElementCondition, until } from 'selenium-webdriver';
import { HomePage } from './HomePage';
import { PageHelper } from '../PageHelper';
import {PageObject} from './pageobject'

export class AnyPage extends PageObject {
  isReadyConditions(): WebElementCondition[] {
    return [until.elementLocated(PageHelper.goBackInvokerLocator)];
  }

  isOnTestPage(): Promise<boolean> {
     return this.elementExists(PageHelper.backButtonLocator);
  }

  isOnReactErrorPage(): Promise<boolean> {
    return this.elementExists(PageHelper.reactControlErrorBoxLocator);    
  }

  clickAndGotoHomePage() {
    return this.clickAndGotoPage(HomePage, PageHelper.goBackInvokerLocator);
  }

  constructor(driver: IAppiumDriver, timeout?: number) {
    super(driver, timeout)
  }
}