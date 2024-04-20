import { test as base } from '@playwright/test';
import { CalculatorPage } from '../page-object/calculator-page';
import config from '../playwright.config';

type MyFixtures = {
    calcPage: CalculatorPage;
}

export const test = base.extend<MyFixtures>({
    calcPage: async ({ page }, use) => {
        const baseURL = config.use?.baseURL;
        if (baseURL) {
            const calcPage = new CalculatorPage(page, baseURL);
            await calcPage.goto();
            await use(calcPage);
        } else {
            throw new Error('Base URL is not defined in the configuration.');
        }

    }
});

export { expect } from '@playwright/test';