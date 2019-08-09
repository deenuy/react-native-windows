import { fixture } from '../testsetup'
import { AppiumTestFixture, ITestExecutionCallback } from 'selenium-appium';

jest.setTimeout(50000);


beforeAll(() => {
  return fixture.beforeAll();
});
afterAll(() => {
  return fixture.afterAll();
});
beforeEach(() => {
  return fixture.beforeEach();
});
afterEach(() => {
  return fixture.afterEach();
});

describe("SimpleTest", () => {
  test('First', async () => {
    await fixture.assertBeforeTest();
    expect(2 + 2).toBe(4);
  });


  test('Second', async () => {
    await fixture.assertBeforeTest();
  });

})