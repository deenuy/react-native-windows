import { TestPage } from './TestPage';
import { IAppiumDriver } from 'selenium-appium';

export class TextInputTestPage extends TestPage {
  constructor(driver: IAppiumDriver, timeout?: number) {
    super(driver, timeout)
  }
}