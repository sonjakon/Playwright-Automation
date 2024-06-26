const { test, expect } = require('@playwright/test')
const { baseUrl } = require('./config.js');

test('verify tasks count', async ({ page }) => {
    await page.goto(baseUrl);
    await page.getByTestId('text-input').fill('jedan');
    await page.getByTestId('text-input').press('Enter');

    await expect(page.getByTestId('footer-navigation').filter({ hasText: '1 item left!' })).toBeVisible;
});