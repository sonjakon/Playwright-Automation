const { test, expect } = require('@playwright/test')
const { baseUrl } = require('./config.js');

test('verify tasks count when task deleted', async ({ page }) => {
    await page.goto(baseUrl);
    await page.getByTestId('text-input').fill('jedan');
    await page.getByTestId('text-input').press('Enter');
    await page.getByTestId('text-input').fill('dva');
    await page.getByTestId('text-input').press('Enter');
    await page.getByText('dva').hover();
    await page.getByRole('button', { name: '×' }).click();

    await expect(page.getByText('1 item left!')).toBeVisible;
});