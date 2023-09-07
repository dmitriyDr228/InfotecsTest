import {expect, test} from "@playwright/test";

test.describe('ComboBox tests', async () => {

    test('ComboBox valid value', async ({page}) => {

        test.setTimeout(600000)
        await page.goto('https://demoqa.com/books');
        const select = await page.getByRole('combobox');

        await select.selectOption({value: '5'});

        await expect(page.getByRole('combobox')).toHaveValue('5');
        await page.close();
    })

    test('ComboBox valid value count-div', async ({page}) => {

        test.setTimeout(600000)
        await page.goto('https://demoqa.com/books');
        const select = await page.getByRole('combobox');

        await select.selectOption({value: '5'});

        await page.close();
    })

    test('ComboBox wrong value', async ({page}) => {

        test.setTimeout(600000)
        await page.goto('https://demoqa.com/books');
        const select = await page.getByRole('combobox');

        await select.selectOption({value: '5'});

        await expect(page.getByRole('combobox')).not.toHaveValue('10');

        await page.close();
    })

})
test.describe('Input tests', async () => {
    test('Input add text', async ({page}) => {

        test.setTimeout(600000)
        await page.goto('https://demoqa.com/books');

        await page.fill("input[placeholder='Type to search']", 'Git');

        await expect(page.getByPlaceholder('Type to search')).not.toHaveValue('');
        await expect(page.getByPlaceholder('Type to search')).toHaveValue('Git');

        await page.close();

    })
})

test.describe('Test Previous and Next buttons', async () => {
    test('Work buttons', async ({page}) => {

        await test.setTimeout(500000);
        await page.goto('https://demoqa.com/books');

        await expect(page.locator("button:has-text('Next')")).not.toBeEnabled();
        await expect(page.locator("button:has-text('Previous')")).not.toBeEnabled();
        await expect(page.locator('div .-pageJump input')).toHaveValue('1');

        const select = await page.getByRole('combobox');
        await select.selectOption({value: '5'});

        await expect(page.locator("button:has-text('Next')")).toBeEnabled();

        await page.locator("button:has-text('Next')").click();

        await expect(page.locator('div .-pageJump input')).toHaveValue('2');
        await expect(page.locator("button:has-text('Previous')")).toBeEnabled();

        await page.locator("button:has-text('Previous')").click();

        await expect(page.locator('div .-pageJump input')).toHaveValue('1');

    })
})



