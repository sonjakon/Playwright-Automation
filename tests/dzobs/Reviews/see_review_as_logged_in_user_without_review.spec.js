import { test, expect } from '@playwright/test';

test.use({ storageState: 'tests/dzobs/auth/user.spec.json' });

test('see review as logged in user without a review - button should lead to reviews fill out form page', async ({ page }) => {

    await test.step("go to review's page", async () => {
        await page.goto('https://www.dzobs.com/');
        await page.locator('div.relative.group a button span:has-text("Kompanije")').hover();
        await page.getByRole('link', { name: 'Pogledaj recenzije' }).click();
    })

    await test.step("verify reviews are visible", async () => {
        await expect(page.locator('lg:px-0 w-full m-auto mb-8')).toBeHidden();
        await expect(page.getByRole('button', { name: 'Ostavi recenziju' })).toBeVisible();
    })

    await test.step("verify leave review button is visible", async () => {
        await page.getByRole('button', { name: 'Ostavi recenziju' }).click();
        await expect(page.getByText('Pošalji', { exact: true })).toBeVisible();
    })
});
