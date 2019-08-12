import { PageObject, IAppiumDriver } from "selenium-appium";
import { WebElementCondition, until } from "selenium-webdriver";
import { Locators } from "./Locators";

export class TestPage extends PageObject {
  isReadyConditions(): WebElementCondition[] {
    return [until.elementLocated(Locators.homeLocator), until.elementLocated(Locators.backButtonLocator)];
  }

  constructor(driver: IAppiumDriver, timeout?: number) {
    super(driver, timeout)
  }
}
