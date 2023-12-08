import { test, expect } from '@playwright/test';

test.use({ storageState: 'tests/dzobs/auth/user.spec.json' });

test('open review form from main menu page - user should be directed to reviews fill out form', async ({ page }) => {

    await test.step("go to leave a review page", async () => {
        await page.goto('https://www.dzobs.com/');
        await page.locator('div.relative.group a button span:has-text("Kompanije")').hover();
        await page.getByRole('link', { name: 'Ostavi iskustvo o radu' }).click();
    })

    await test.step("verify review form is opened", async () => {
        await expect(page.locator('.w-full.space-y-4')).toBeVisible();
    })
});