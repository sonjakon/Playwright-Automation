import { test, expect } from '@playwright/test';

test('open review form from company page as logged out user - user should be logged in and directed to reviews fill out form', async ({ page }) => {

    test.slow();

    await test.step("go to leave a review page", async () => {
        await page.goto('https://www.dzobs.com/');
        await page.locator('div.relative.group a button span:has-text("Kompanije")').hover();
        await page.getByRole('link', { name: 'Istraži kompanije' }).click();
        await page.getByPlaceholder('Filtriraj po nazivu').click();
        await page.getByPlaceholder('Filtriraj po nazivu').fill('ddc');
        await page.getByRole('button', { name: 'Filtriraj' }).click();
        await page.getByRole('button', { name: 'Iskustva (20)' }).click();
        await page.getByRole('button', { name: 'Podjeli svoje iskustvo' }).first().click();
        await page.waitForURL('https://www.dzobs.com/auth/signin?redirect=https://www.dzobs.com/ostavi-utisak?kompanija=31');
    })

    await test.step("log in", async () => {
        await page.getByPlaceholder('Email').click();
        await page.getByPlaceholder('Email').fill('sonjatests@blondmail.com');
        await page.getByRole('button', { name: 'Pošalji magični link' }).click();
        await expect(page.getByText('Login link poslan na email')).toBeVisible();

        await page.goto('https://inboxes.com/');
        await page.getByRole('button', { name: 'Get my first inbox! arrow right' }).click();
        await page.getByPlaceholder('jane1034').click();
        await page.getByPlaceholder('jane1034').fill('sonjatests');
        await page.getByRole('button', { name: 'Add Inbox' }).click();

        await page.getByRole('cell', { name: 'Prijavi se na Dzobs.com - [https://i.ibb.co/NWrW3GV/dzobs-logo-...' }).first().click();
        const page1Promise = page.waitForEvent('popup');
        await page.getByRole('link', { name: 'Prijavi se' }).click();
        const page1 = await page1Promise;
        await expect(page1.locator('.w-full.space-y-4')).toBeVisible();
    })


});