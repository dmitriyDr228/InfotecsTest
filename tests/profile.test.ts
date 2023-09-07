import {expect, test} from "@playwright/test";

test.describe('login test', async () => {

    test('Input valid data', async ({page}) => {

        await test.setTimeout(500000);
        await page.goto('https://demoqa.com/books');

        await page.locator("button:has-text('Login')").click();
        await expect(page).toHaveURL('https://demoqa.com/login');

        await page.locator("input#userName").fill('dr228');
        await page.locator("input#password").fill('Dima-0411*');
        await page.waitForTimeout(5000);
        await page.locator("button:has-text('Login')").click();

        await expect(page).toHaveURL('https://demoqa.com/books');
        await expect(page.locator("button:has-text('Log out')")).toBeVisible();

        await page.locator('li#item-3 span').getByText('Profile').click();
        await page.waitForTimeout(5000);
        await expect(page).toHaveURL('https://demoqa.com/profile');

        await page.close();


    })
    test('Input wrong data', async ({page}) => {

        await test.setTimeout(500000);
        await page.goto('https://demoqa.com/books');

        await page.locator("button:has-text('Login')").click();
        await expect(page).toHaveURL('https://demoqa.com/login');

        await page.locator("input#userName").fill('UserName');
        await page.locator("input#password").fill('adsadas');
        await page.waitForTimeout(5000);
        await page.locator("button:has-text('Login')").click();


        await expect(page).toHaveURL('https://demoqa.com/login');
        await expect(page.locator("p#name")).toBeVisible();
        await expect(page.locator("p#name")).toHaveText('Invalid username or password!');

        await page.close();
    })
})