import { test, expect } from '@playwright/test';

test.slow();

test('login into existing account', async ({ page }) => {
    await page.goto('https://www.dzobs.com/');
    await page.getByRole('button', { name: 'Prijava' }).click();

    await page.waitForURL('https://www.dzobs.com/auth/signin?redirect=https://www.dzobs.com/');

    await page.getByPlaceholder('Email').click();
    await page.getByPlaceholder('Email').fill('sonjatests@blondmail.com');
    await page.getByRole('button', { name: 'Pošalji magični link' }).click();
    await page.getByText('Login link poslan na email');

    await page.pause()

    await page.goto('https://inboxes.com/');
    await page.getByRole('button', { name: 'Get my first inbox! arrow right' }).click();
    await page.getByPlaceholder('jane1034').click();
    await page.getByPlaceholder('jane1034').fill('sonjatests');
    await page.getByRole('button', { name: 'Add Inbox' }).click();

    await page.pause()

    await page.getByRole('cell', { name: 'Prijavi se na Dzobs.com - [https://i.ibb.co/NWrW3GV/dzobs-logo-...' }).first().click();
    await page.getByRole('link', { name: 'Prijavi se' }).click();
    const page1Promise = page.waitForEvent('popup');
    const page1 = await page1Promise;

});