import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

    await test.step("log in", async () => {
        await page.goto('https://thinking-tester-contact-list.herokuapp.com/');
        await page.getByPlaceholder('Email').click();
        await page.getByPlaceholder('Email').fill('koncar.sonja94@gmail.com');
        await page.getByPlaceholder('Password').click();
        await page.getByPlaceholder('Password').fill('sonjatests123');
        await page.getByRole('button', { name: 'Submit' }).click();
    })

    await test.step("open contact from the list", async () => {
        await page.getByRole('cell', { name: 'Ime Prezime' }).click();
        await expect(page.getByText('First Name: Ime Last Name: Prezime Date of Birth: 2000-07-17 Email: sonjatests@b')).toBeVisible();
    })
});