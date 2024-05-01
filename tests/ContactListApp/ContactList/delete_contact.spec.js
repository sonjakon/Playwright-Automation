import { test, expect } from '@playwright/test';
import { setup as authSetup } from './auth/auth.setup.js';

let page;

test.beforeAll(async ({ browser }) => {
    const context = await browser.newContext();
    page = await context.newPage();
    await authSetup({ page });
});

test('delete contact - contact deleted', async () => {

    await test.step("delete contact", async () => {
        await page.getByRole('cell', { name: 'Ime Prezime' }).click();
        await page.getByRole('button', { name: 'Delete Contact' }).click();
        page.on('dialog', dialog => dialog.accept());
    });

    await test.step("confirm deletion of contact", async () => {
        await expect(page.getByRole('cell', { name: 'Ime Prezime' })).toBeHidden();
    });
});
