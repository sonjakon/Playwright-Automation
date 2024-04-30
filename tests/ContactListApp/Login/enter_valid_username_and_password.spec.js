import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('https://thinking-tester-contact-list.herokuapp.com/');
    await page.getByPlaceholder('Email').click();
    await page.getByPlaceholder('Email').fill('koncar.sonja94@gmail.com');
    await page.getByPlaceholder('Password').click();
    await page.getByPlaceholder('Password').fill('sonjatests123');
    await page.getByRole('button', { name: 'Submit' }).click();

    await expect(page.getByRole('button', { name: 'Logout' })).toBeVisible();
});