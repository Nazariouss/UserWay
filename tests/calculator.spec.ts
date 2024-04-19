import { test, expect } from '../fixtures/my-fixtures'

test.describe('Calculator Sanity Tests', () => {
  test('Clear Entry Data Test', async ({ calcPage }) => {
    await calcPage.enterNum('2')
    await calcPage.addNum('2')
    await calcPage.addNum('1')
    await calcPage.buttonClear.click()
    await calcPage.enterNum('2')
    await calcPage.buttonEqual.click()
    await expect(calcPage.inputField).toHaveValue('6')
  });

  test('Clear All Data Test', async ({ calcPage }) => {
    await calcPage.enterNum('2')
    await calcPage.addNum('2')
    await calcPage.addNum('1')
    await calcPage.buttonClear.dblclick()
    await calcPage.enterNum('2')
    await calcPage.buttonEqual.click()
    await expect(calcPage.inputField).toHaveValue('2')
  });

  test('Sum Test', async ({ calcPage }) => {
    await calcPage.enterNum('2')
    await calcPage.addNum('2')
    await calcPage.buttonEqual.click()
    await expect(calcPage.inputField).toHaveValue('4')
  });

  test('Subtract Test', async ({ calcPage }) => {
    await calcPage.enterNum('2')
    await calcPage.subtractNum('2')
    await calcPage.buttonEqual.click()
    await expect(calcPage.inputField).toHaveValue('0')
  });

  test('Multiply Test', async ({ calcPage }) => {
    await calcPage.enterNum('2')
    await calcPage.multiplyNum('2')
    await calcPage.buttonEqual.click()
    await expect(calcPage.inputField).toHaveValue('4')
  });

  test('Divide Test', async ({ calcPage }) => {
    await calcPage.enterNum('2')
    await calcPage.divideNum('2')
    await calcPage.buttonEqual.click()
    await expect(calcPage.inputField).toHaveValue('1')
  });

  test('Division by Zero Test', async ({ calcPage }) => {
    await calcPage.enterNum('2')
    await calcPage.divideNum('0')
    await calcPage.buttonEqual.click()
    await expect(calcPage.inputField).toHaveValue('Not a Number')
  });

});



