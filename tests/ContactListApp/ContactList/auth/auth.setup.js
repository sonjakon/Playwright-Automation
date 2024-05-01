import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

const authFile = 'playwright/.auth/user.json';

export async function setup({ page }) {

    const username = faker.internet.userName();
    const email = username + '@blondmail.com';

    await test.step("register to Inbox", async () => {
        await page.goto('https://inboxes.com/');
        await page.getByRole('button', { name: 'Get my first inbox! arrow right' }).click();
        await page.getByPlaceholder('jane1034').click();
        await page.getByPlaceholder('jane1034').fill(username);
        await page.getByRole('button', { name: 'Add Inbox' }).click();
    });

    await test.step("sign up to Contact List App", async () => {
        await page.goto('https://thinking-tester-contact-list.herokuapp.com/');
        await page.getByRole('button', { name: 'Sign up' }).click();
        await page.getByPlaceholder('First Name').click();
        await page.getByPlaceholder('First Name').fill('Ime');
        await page.getByPlaceholder('Last Name').click();
        await page.getByPlaceholder('Last Name').fill('Prezime');
        await page.getByPlaceholder('Email').click();
        await page.getByPlaceholder('Email').fill(email);
        await page.getByPlaceholder('Password').click();
        await page.getByPlaceholder('Password').fill('sonja123');
        await page.getByRole('button', { name: 'Submit' }).click();
        await expect(page.getByRole('button', { name: 'Logout' })).toBeVisible();
    });

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
        await expect(page.getByRole('cell', { name: 'Ime Prezime' })).toBeVisible();
    });

    await page.context().storageState({ path: authFile });
}
