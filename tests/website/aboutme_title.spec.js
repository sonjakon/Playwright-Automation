const { test, expect } = require('@playwright/test')
const { baseUrl } = require('./config');

test('About me page title check test', async ({ page }) => {

    await page.goto(baseUrl)
    await expect(page).toHaveTitle('About me')
});