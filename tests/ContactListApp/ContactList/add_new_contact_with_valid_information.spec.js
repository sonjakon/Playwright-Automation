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

    await test.step("add new contact", async () => {
        await page.getByRole('button', { name: 'Add a New Contact' }).click();
        await page.getByPlaceholder('First Name').click();
        await page.getByPlaceholder('First Name').fill('Ime');
        await page.getByPlaceholder('Last Name').click();
        await page.getByPlaceholder('Last Name').fill('Prezime');
        await page.getByPlaceholder('yyyy-MM-dd').click();
        await page.getByPlaceholder('yyyy-MM-dd').fill('2000-07-17');
        await page.getByPlaceholder('example@email.com').click();
        await page.getByPlaceholder('example@email.com').fill('sonjatests@blondmail.com');
        await page.getByPlaceholder('8005551234').click();
        await page.getByPlaceholder('8005551234').fill('+38766691012');
        await page.getByPlaceholder('Address 1').click();
        await page.getByPlaceholder('Address 1').fill('Prva Adresa I');
        await page.getByPlaceholder('Address 2').click();
        await page.getByPlaceholder('Address 2').fill('Druga Adresa II');
        await page.getByPlaceholder('City').click();
        await page.getByPlaceholder('City').fill('Banja Luka');
        await page.getByPlaceholder('State or Province').click();
        await page.getByPlaceholder('State or Province').fill('RS');
        await page.getByPlaceholder('Postal Code').click();
        await page.getByPlaceholder('Postal Code').fill('78000');
        await page.getByPlaceholder('Country').click();
        await page.getByPlaceholder('Country').fill('BiH');
        await page.getByRole('button', { name: 'Submit' }).click();
    })

    await test.step("confirm contact is listed", async () => {
        await expect(page.getByRole('cell', { name: 'Ime Prezime' })).toBeVisible;
    })
});