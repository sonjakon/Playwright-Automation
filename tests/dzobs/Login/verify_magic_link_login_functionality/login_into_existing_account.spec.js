import { test, expect } from '@playwright/test';

test('login into existing account', async ({ page }) => {
    await page.goto('https://www.dzobs.com/');
    await page.getByRole('button', { name: 'Prijava' }).click();
    await page.getByPlaceholder('Email').click();
    await page.getByPlaceholder('Email').fill('test+success@magic.link');
    await page.getByRole('button', { name: 'Pošalji magični link' }).click();
    await page.goto('https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox/FMfcgzGwHVStZXjkQpHKpXKpGRVKxjvg');
    await page.getByText('Prijavi se').click();

    await page.expect('https://www.dzobs.com/');
});