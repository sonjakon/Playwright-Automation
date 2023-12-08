import { test as setup, expect } from '@playwright/test';

const user_with_reviewFile = 'tests/dzobs/auth/user_with_review.spec.json';

setup('authenticate as user with previously left review', async ({ page }) => {

    await setup.step("login to Dzobs", async () => {
        await page.goto('https://www.dzobs.com/');
        await page.getByRole('button', { name: 'Prijava' }).click();
        await page.waitForURL('https://www.dzobs.com/auth/signin?redirect=https://www.dzobs.com/');
        await page.getByPlaceholder('Email').click();
        await page.getByPlaceholder('Email').fill('sonjareviews@blondmail.com');
        await page.getByRole('button', { name: 'Pošalji magični link' }).click();
        await expect(page.getByText('Login link poslan na email')).toBeVisible();
    })

    await setup.step("login to Inbox", async () => {
        await page.goto('https://inboxes.com/');
        await page.getByRole('button', { name: 'Get my first inbox! arrow right' }).click();
        await page.getByPlaceholder('jane1034').click();
        await page.getByPlaceholder('jane1034').fill('sonjareviews');
        await page.getByRole('button', { name: 'Add Inbox' }).click();
    })

    await setup.step("open email received", async () => {
        await page.getByRole('cell', { name: 'Prijavi se na Dzobs.com - [https://i.ibb.co/NWrW3GV/dzobs-logo-...' }).first().click();
        const page1Promise = page.waitForEvent('popup');
        await page.getByRole('link', { name: 'Prijavi se' }).click();
        const page1 = await page1Promise;
        await expect(page1.getByRole('button', { name: 'Odjavi se' })).toBeVisible();
    })

    await page.context().storageState({ path: user_with_reviewFile });
});
