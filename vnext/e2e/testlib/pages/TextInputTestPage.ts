import { TestPage } from './Pages';
import { IAppiumDriver } from 'selenium-appium';

export class TextInputTestPage extends TestPage {
  constructor(driver: IAppiumDriver, timeout?: number) {
    super(driver, timeout)
  }
}