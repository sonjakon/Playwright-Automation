import { test, expect } from '@playwright/test';
import { setup as authSetup } from './auth/auth.setup.js';

let page;

test.beforeAll(async ({ browser }) => {
    const context = await browser.newContext();
    page = await context.newPage();
    await authSetup({ page });
});

test('view contact details - contact details are presented', async ({ page }) => {

    await page.getByRole('cell', { name: 'Ime Prezime' }).click();
    await expect(page.getByText('First Name: Ime Last Name: Prezime Date of Birth: 2000-07-17 Email: sonjatests@b')).toBeVisible();
});