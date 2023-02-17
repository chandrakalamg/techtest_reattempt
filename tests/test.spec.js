const {test, expect } = require('@playwright/test');

test.describe("This feature will make sure that the shop page is navigable and usable", async() => {
    test('Navigate to Deals Page', async({page}) => {
        await page.goto('https://www.sky.com/shop/mobile/phones', {waitUntil: "domcontentloaded"});
        await page.frameLocator("//*[@title='SP Consent Message']").locator("//button[@title='Accept all'] ").click();
        await page.locator('[data-test-id="primary-nav-list"] >> text="Deals"').click();
        await expect(page.url()).toEqual('https://www.sky.com/deals', 'deal url does not match');
    })
})