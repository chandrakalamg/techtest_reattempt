const {test, expect } = require('@playwright/test');

test.describe("This feature will make sure that the shop page is navigable and usable", async() => {
    test('Navigate to Deals Page', async({page}) => {
        await page.goto('https://sky.com', {waitUntil: "domcontentloaded"});
        await page.frameLocator("//*[@title='SP Consent Message']").locator("//button[@title='Accept all'] ").click();

        const list = await page.$$('//*[@class="c-product-grid__item"]');
        const length =  await list.length;
        expect(length).not.toBeLessThan(3);
        

        for(let i=0; i<3;i++){
            const images = await list[i].locator('/imag');
            const phonetitle = await list[i].innerText("//*[@data-test-id='selection-heading-text']");
            const phoneprice = await list[i].innerText("//*[@class='c-linear-costing__main']");

            console.log("phonetitle is "+i+":"+phonetitle );
            console.log("phoneprice is "+i+":"+phoneprice );
        }
      

    })
})

