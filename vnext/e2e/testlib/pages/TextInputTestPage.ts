import { TestPage } from './TestPage';
import { IAppiumDriver, By2 } from 'selenium-appium';
import { until, WebElementCondition } from 'selenium-webdriver';

export class TextInputTestPage extends TestPage {
  constructor(driver: IAppiumDriver, timeout?: number) {
    super(driver, timeout)
  }

  isReadyConditions(): WebElementCondition[] {
    return [until.elementLocated(By2.accessibilityId('TextInput'))];
  }
}