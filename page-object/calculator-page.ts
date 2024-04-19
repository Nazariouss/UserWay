import { expect, type Locator, type Page } from '@playwright/test';

export class CalculatorPage {
    readonly page: Page;
    readonly buttonClear: Locator;
    readonly buttonEqual: Locator;
    readonly inputField: Locator;

    constructor(page: Page) {
        this.page = page;
        this.buttonClear = page.locator("//input[@name='clearButton']");
        this.buttonEqual = page.locator("//input[@value='=']");
        this.inputField = page.getByLabel('answer display');
    };

    async goto() {
        await this.page.goto("https://www.theonlinecalculator.com/");
    };

    getNum(value: string): Locator {
        if (value !== '0'){
            return this.page.locator(`//input[@value='${value}']`);
        }else {
            return this.page.getByRole('button', { name: '0', exact: true });
        }
        
    };

    async enterNum(number: string) {
        for (let i = 0; i < number.length; i += 1) {
            await this.getNum(number[i]).click();
        }
    };

    async addNum(number: string) {
        const buttonAdd = this.page.locator("//input[@name='add']");
        await buttonAdd.click();
        await this.enterNum(number);
    };

    async subtractNum(number: string) {
        const buttonSubtract = this.page.locator("//input[@name='subtract']");
        await buttonSubtract.click();
        await this.enterNum(number);
    };

    async divideNum(number: string) {
        const buttonDivide = this.page.locator("//input[@name='divide']");
        await buttonDivide.click();
        await this.enterNum(number);
    };

    async multiplyNum(number: string) {
        const buttonMultiply = this.page.locator("//input[@name='multiply']");
        await buttonMultiply.click();
        await this.enterNum(number);
    };
};