import { test, expect } from '@playwright/test';

test.use({ storageState: 'tests/dzobs/auth/user.spec.json' });

test('open review form from company page', async ({ page }) => {

    await page.goto('https://www.dzobs.com/');
    await page.locator('div.relative.group a button span:has-text("Kompanije")').hover();
    await page.getByRole('link', { name: 'Istraži kompanije' }).click();
    await page.getByPlaceholder('Filtriraj po nazivu').click();
    await page.getByPlaceholder('Filtriraj po nazivu').fill('ddc');
    await page.getByRole('button', { name: 'Filtriraj' }).click();
    await page.getByRole('button', { name: 'Iskustva (20)' }).click();
    await page.getByRole('button', { name: 'Podjeli svoje iskustvo' }).first().click();

    await expect(page.locator('.w-full.space-y-4')).toBeVisible();
});