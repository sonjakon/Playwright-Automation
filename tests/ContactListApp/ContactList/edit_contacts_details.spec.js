import { test, expect } from '@playwright/test';
import { setup as authSetup } from './auth/auth.setup.js';

let page;

test.beforeAll(async ({ browser }) => {
    const context = await browser.newContext();
    page = await context.newPage();
    await authSetup({ page });
});

test('edit contact details - contact details updated', async ({ page }) => {

    await test.step("edit contact from the list", async () => {
        await page.click('text="Ime Prezime"');
        await page.click('text="Edit Contact"');
        await page.waitForSelector('label:has-text("Street Address 2:")');
        await page.fill('label:has-text("Street Address 2:") input', 'Treca Adresa III');
        await page.click('button:has-text("Submit")');
    })

    await page.waitForLoadState('networkidle');

    await test.step("confirm contact details are updated", async () => {
        await expect(page.getByRole('cell', { name: 'Treca Adresa III' })).toBeVisible();
    })
});