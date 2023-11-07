import { test, expect } from '@playwright/test';

test('login into existing account', async ({ page }) => {
    await page.goto('https://www.dzobs.com/');
    await page.getByRole('button', { name: 'Prijava' }).click();
    await page.getByPlaceholder('Email').click();
    await page.getByPlaceholder('Email').fill('koncar.sonja94@gmail.com');
    await page.getByRole('button', { name: 'Pošalji magični link' }).click();

    await page.goto('https://accounts.google.com/InteractiveLogin/signinchooser?continue=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&emr=1&followup=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&osid=1&passive=1209600&service=mail&ifkv=AVQVeyxM_FU2JmmmMyJ0yK0sVU8br3rV3CI4ZEEpBiUqgDJtRJCb9kEzut4Jpu8lM2w-dOGW8l2xWA&theme=glif&flowName=GlifWebSignIn&flowEntry=ServiceLogin');
    await page.getByRole('link', { name: 'koncar.sonja94@gmail.com' }).click();
    await page.locator('input[name="password"]').click();
    await page.locator('input[name="password"]').fill('SonjaKoncar12*');
    await page.getByRole('button', { name: 'Next' }).click();
    page.locator('zA yO');
    await page.getByRole('button', { name: 'Prijavi se' }).click();

    await expect(page.getByText('Odjavi se')).toBeVisible();
});