import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker'

test('login into existing account', async ({ page }) => {

    test.slow();

    // Generate random username like anna_boleyn80, which can be used for Inbox.com
    const username = faker.internet.userName(); 
    
    // Generate email address by adding @blondmail.com, so it can be used to log into Dzobs
    const email = username + '@blondmail.com'; 

    await test.step("login to Dzobs", async () => {
        await page.goto('https://www.dzobs.com/');
        await page.getByRole('button', { name: 'Prijava' }).click();
        await page.waitForURL('https://www.dzobs.com/auth/signin?redirect=https://www.dzobs.com/');
        await page.getByPlaceholder('Email').click();
        await page.getByPlaceholder('Email').fill(email);
        await page.getByRole('button', { name: 'Pošalji magični link' }).click();
        await page.getByText('Login link poslan na email');
    })

    await test.step("login to Inbox", async () => {
        await page.goto('https://inboxes.com/');
        await page.getByRole('button', { name: 'Get my first inbox! arrow right' }).click();
        await page.getByPlaceholder('jane1034').click();
        await page.getByPlaceholder('jane1034').fill(username);
        await page.getByRole('button', { name: 'Add Inbox' }).click();
    })

    await test.step("open email received", async () => {
        await page.getByRole('cell', { name: 'Prijavi se na Dzobs.com - [https://i.ibb.co/NWrW3GV/dzobs-logo-...' }).first().click();
        await page.getByRole('link', { name: 'Prijavi se' }).click();
        const page1Promise = page.waitForEvent('popup');
        const page1 = await page1Promise;
        await expect(page.getByRole('button', { name: 'Odjavi se' })).toBeVisible;
    })
});