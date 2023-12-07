import { test, expect } from '@playwright/test';

test.use({ storageState: 'tests/dzobs/auth/user.spec.json' });

test('open review form from main menu page', async ({ page }) => {

    await page.goto('https://www.dzobs.com/');
    await page.locator('div.relative.group a button span:has-text("Kompanije")').hover();
    await page.getByRole('link', { name: 'Ostavi iskustvo o radu' }).click();

    await expect(page.locator('.w-full.space-y-4')).toBeVisible();
});