import { test, expect } from '@playwright/test';

test.use({ storageState: 'tests/dzobs/auth/user.spec.json' });

test('leave a review with non-select fields empty - error message under all fields: "Obligatory field"', async ({ page }) => {

    test.slow();

    await test.step("go to companys review fill out form", async () => {
        await page.goto('https://www.dzobs.com/');
        await page.locator('div.relative.group a button span:has-text("Kompanije")').hover();
        await page.getByRole('link', { name: 'Istraži kompanije' }).click();
        await page.getByPlaceholder('Filtriraj po nazivu').click();
        await page.getByPlaceholder('Filtriraj po nazivu').fill('am2');
        await page.getByRole('button', { name: 'Filtriraj' }).click();
        await page.getByRole('link', { name: 'AM2Studio AM2Studio premium' }).click();
        await page.getByRole('link', { name: 'Iskustva' }).click();
        await page.getByRole('button', { name: 'Podjeli svoje iskustvo' }).first().click();
    })

    await test.step("fill out select fields", async () => {
        await page.locator('#react-select-3-placeholder').click();
        await page.getByText('Trenutno radim u kompaniji', { exact: true }).click();
        await page.locator('#react-select-4-placeholder').click();
        await page.getByText('Junior', { exact: true }).click();
        await page.getByText('Select...').click();
        await page.getByText('Manje od godinu dana', { exact: true }).click();
        await page.getByRole('button', { name: 'Pošalji' }).click();
    })

    await test.step("verify the error message", async () => {
        await expect(page.getByText('Niste popunili sva polja.')).toBeVisible();
    })
});