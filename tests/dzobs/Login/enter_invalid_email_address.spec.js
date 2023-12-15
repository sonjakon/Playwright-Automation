import { test, expect } from '@playwright/test';

test('enter invalid email address - Error message: "Please enter a valid email"', async ({ page }) => {

    test.slow();

    await test.step("login to Dzobs", async () => {
        await page.goto('https://www.dzobs.com/');
        await page.getByRole('button', { name: 'Prijava' }).click();
        await page.waitForURL('https://www.dzobs.com/auth/signin?redirect=https://www.dzobs.com/');
        await page.getByPlaceholder('Email').click();
        await page.getByPlaceholder('Email').fill('khcdhgvfjh');
        await page.getByRole('button', { name: 'Pošalji magični link' }).click();
    });

    await test.step("confirm the error message", async () => {
        await expect(page.getByText('Unesite validan email.')).toBeVisible();
    });
});