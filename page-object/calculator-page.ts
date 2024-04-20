import { expect, type Locator, type Page} from '@playwright/test';

export class CalculatorPage {
    readonly page: Page;
    readonly baseURL: string;
    readonly buttonClear: Locator;
    readonly buttonEqual: Locator;
    readonly inputField: Locator;
    readonly buttonAdd: Locator;
    readonly buttonSubtract: Locator;
    readonly buttonDivide: Locator;
    readonly buttonMultiply: Locator;

    constructor(page: Page, baseURL: string) {
        this.page = page;
        this.baseURL = baseURL;
        this.buttonClear = page.locator("//input[@name='clearButton']");
        this.buttonEqual = page.locator("//input[@value='=']");
        this.inputField = page.getByLabel('answer display');
        this.buttonAdd = page.locator("//input[@name='add']");
        this.buttonSubtract = page.locator("//input[@name='subtract']");
        this.buttonDivide = page.locator("//input[@name='divide']");
        this.buttonMultiply = page.locator("//input[@name='multiply']");
    };

    async goto() {
        await this.page.goto(this.baseURL);
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
        await this.buttonAdd.click();
        await this.enterNum(number);
    };

    async subtractNum(number: string) {
        await this.buttonSubtract.click();
        await this.enterNum(number);
    };

    async divideNum(number: string) {
        await this.buttonDivide.click();
        await this.enterNum(number);
    };

    async multiplyNum(number: string) {
        await this.buttonMultiply.click();
        await this.enterNum(number);
    };
};