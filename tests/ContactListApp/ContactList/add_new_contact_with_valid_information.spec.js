import { test, expect } from '@playwright/test';
import { setup as authSetup } from './auth/auth.setup.js';

let page;

test.beforeAll(async ({ browser }) => {
    const context = await browser.newContext();
    page = await context.newPage();
    await authSetup({ page });
});

test('add new contact with valid information - contact added to the list', async ({ page }) => {

    await test.step("confirm contact is listed", async () => {
        await expect(page.getByRole('cell', { name: 'Ime Prezime' })).toBeVisible;
    })
});