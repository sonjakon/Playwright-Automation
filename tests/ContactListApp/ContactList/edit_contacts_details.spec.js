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

    await test.step("edit contact from the list", async () => {
        await page.getByRole('cell', { name: 'Ime Prezime' }).click();
        await page.getByRole('button', { name: 'Edit Contact' }).click();

        await page.waitForTimeout(3000);

        await page.getByLabel('Street Address 2:').click();
        await page.getByLabel('Street Address 2:').clear();
        await page.getByLabel('Street Address 2:').fill('Treca Adresa III');
        await page.getByRole('button', { name: 'Submit' }).click();
    })

    await page.waitForTimeout(3000);

    await test.step("confirm contact details are updated", async () => {
        const spanElement = await page.$('#street2');
        const textContent = await page.evaluate(element => element.textContent, spanElement);

        expect(textContent).toBe('Treca Adresa III');
    })
});