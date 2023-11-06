const { test, expect } = require('@playwright/test')
const { baseUrl } = require('./config');

test('Contact me page title check test', async ({ page }) => {

    await page.goto(baseUrl + '/contact_me/index.html')
    await expect(page).toHaveTitle('Contact me')
});