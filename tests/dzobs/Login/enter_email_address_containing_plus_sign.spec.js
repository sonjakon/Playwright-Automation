import { test, expect } from '@playwright/test';

test('enter email address containing plus sign - Error message: "Please no + in the email, we have disabled it due to spam."', async ({ page }) => {

    await test.step("login to Dzobs", async () => {
        await page.goto('https://www.dzobs.com/');
        await page.getByRole('button', { name: 'Prijava' }).click();
        await page.waitForURL('https://www.dzobs.com/auth/signin?redirect=https://www.dzobs.com/');
        await page.getByPlaceholder('Email').click();
        await page.getByPlaceholder('Email').fill('sonjatests+@blondmail.com');
        await page.getByRole('button', { name: 'Pošalji magični link' }).click();

    });

    await test.step("confirm the error message", async () => {
        await expect(page.getByText('Molimo bez + u emailu, onemogucili smo zbog spama.')).toBeVisible();
    });
});