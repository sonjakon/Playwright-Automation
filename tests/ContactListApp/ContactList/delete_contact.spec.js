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

    await test.step("delete contact", async () => {
        await page.getByRole('cell', { name: 'Ime Prezime' }).click();
        await page.getByRole('button', { name: 'Delete Contact' }).click();
        page.on('dialog', dialog => dialog.accept());
    })

    await test.step("confirm deletion of contact", async () => {
        await expect(page.getByRole('cell', { name: 'Ime Prezime' })).toBeHidden();
    })
});