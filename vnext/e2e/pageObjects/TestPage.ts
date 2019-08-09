import { WebElementCondition, until } from 'selenium-webdriver';
import { PageHelper } from './PageHelper';
import { AnyPage } from './AnyPage';
import { IAppiumDriver } from 'selenium-appium';

export class TestPage extends AnyPage {
  isReadyConditions(): WebElementCondition[] {
    return [until.elementLocated(PageHelper.goBackInvokerLocator), until.elementLocated(PageHelper.backButtonLocator)];
  }

  constructor(driver: IAppiumDriver, timeout?: number) {
    super(driver, timeout)
  }
}