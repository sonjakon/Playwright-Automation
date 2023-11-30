import { test, expect } from '@playwright/test';

test.use({ storageState: 'tests/dzobs/auth/user.spec.json' });

test('see review as existing user', async ({ page }) => {

    await page.goto('https://www.dzobs.com/');
    await page.locator('div.relative.group a button span:has-text("Kompanije")').hover();
    await page.getByRole('link', { name: 'Pogledaj recenzije' }).click();

    await expect(page.getByText('Recenzije možete vidjeti na profilima kompanija, ukoliko želite da ih vidite ovdje na jednom mjestu poredane hronološki, morate imati prethodno ostavljenu recenziju. Neki vid nagrade ekipi koja nam je pomogla da skupimo recenzije.')).toBeVisible();
    await expect(page.getByRole('button', { name: 'Ostavi recenziju' })).toBeVisible;

});
