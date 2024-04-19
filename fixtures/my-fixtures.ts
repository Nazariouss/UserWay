import { test as base } from '@playwright/test';
import { CalculatorPage } from '../page-object/calculator-page';

type MyFixtures = {
    calcPage: CalculatorPage;
}

export const test = base.extend<MyFixtures>({
    calcPage: async ({ page }, use) => {
        const calcPage = new CalculatorPage(page);
        await calcPage.goto();
        await use(calcPage);
    }
});

export { expect } from '@playwright/test';