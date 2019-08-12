import { windowsNativeAppCapabilities, createAppiumWebDriver } from 'selenium-appium'

const appName = 'ReactUWPTestApp_2wtq0zq3ec38a!App';

export const appiumDriver = createAppiumWebDriver(windowsNativeAppCapabilities(appName));

