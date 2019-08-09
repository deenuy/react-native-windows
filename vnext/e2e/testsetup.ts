import {AppiumTestFixture, windowsNativeAppCapabilities, ITestExecutionCallback} from 'selenium-appium'

const appName = 'ReactUWPTestApp_2wtq0zq3ec38a!App';

interface ITestPage {
  isReady() :boolean;
  waitUntilReady() : void;
  gotoTestPage(page: string): void;
  gotoHomePage(page: string): void
};

class TestPage implements ITestPage{
  fixture_: AppiumTestFixture;
  constructor(fixture: AppiumTestFixture) {
    this.fixture_ = fixture;
  }

  isReady(): boolean {
    throw new Error("Method not implemented.");
  }
  
}
class HomePage extends TestPage {  
  isReady(): boolean {
    
  }

}

class TestExecutionCallback implements ITestExecutionCallback {
   setupForTest(fixture: AppiumTestFixture): Promise<void> {
  
  }

  tearDownForTest(fixture: AppiumTestFixture): Promise<void> {
    throw new Error("Method not implemented.");
  }
  assertBeforeTest(fixture: AppiumTestFixture): Promise<void> {
    throw new Error("Method not implemented.");
  }
};

export const fixture = new AppiumTestFixture(windowsNativeAppCapabilities(appName), new TestExecutionCallback());