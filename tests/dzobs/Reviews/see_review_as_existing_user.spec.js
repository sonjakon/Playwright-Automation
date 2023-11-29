import { test, expect } from '@playwright/test';

test.use({ storageState: 'tests/dzobs/auth/user.spec.json' });

test('see review as existing user', async ({ page }) => {

    test.slow();

    const spanElement = await page.$('div.relative.group a button span:has-text("Kompanije")');
    if (spanElement) {
        await spanElement.hover();


        const spanElement = await page.$('div.relative.group a span:has-text("Pogledaj recenzije")');
        if (spanElement) {
            await spanElement.click();
        }


        await expect(page.getByText('Recenzije možete vidjeti na profilima kompanija, ukoliko želite da ih vidite ovdje na jednom mjestu poredane hronološki, morate imati prethodno ostavljenu recenziju. Neki vid nagrade ekipi koja nam je pomogla da skupimo recenzije.')).toBeVisible();
    }
});

