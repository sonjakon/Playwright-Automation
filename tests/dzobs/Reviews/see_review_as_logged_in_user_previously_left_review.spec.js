import { test, expect } from '@playwright/test';

test.use({ storageState: 'tests/dzobs/auth/user_with_review.spec.json' });

test('see review as existing user with previously left review - user should be presented a chronological view of the reviews', async ({ page }) => {

    test.slow();

    await test.step("go to review's page", async () => {
        await page.goto('https://www.dzobs.com/');
        await page.locator('div.relative.group a button span:has-text("Kompanije")').hover();
        await page.getByRole('link', { name: 'Pogledaj recenzije' }).click();
    })

    await test.step("verify reviews are visible", async () => {
        await expect(page.locator('.lg\\:px-0.w-full.m-auto.mb-8')).toBeVisible();
    })

});
