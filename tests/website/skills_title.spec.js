const { test, expect } = require('@playwright/test')
const { baseUrl } = require('./config');

test('How It Work page title check test', async ({ page }) => {

    await page.goto(baseUrl + '/skills/index.html')
    await expect(page).toHaveTitle('Skills')
});