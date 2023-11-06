import { test, expect } from '@playwright/test';

test('submit invalid contact form', async ({ page }) => {
    await page.goto('https://www.dzobs.com/');
    await page.getByRole('link', { name: 'Kontakt' }).click();
    await page.locator('input[name="kompanija"]').click();
    await page.locator('input[name="kompanija"]').fill('kompanija');
    await page.locator('input[name="email"]').click();
    await page.locator('input[name="email"]').fill('email@gmail.com');
    await page.locator('input[name="naslov"]').click();
    await page.locator('input[name="naslov"]').fill('naslov');
    await page.locator('#message').click();
    await page.locator('#message').fill('poruka');
    await page.getByRole('button', { name: 'Pošalji' }).click();

    await expect(page.getByText('Obavezno polje')).toBeVisible();
});