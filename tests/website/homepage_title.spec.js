const { test, expect } = require('@playwright/test')
const { baseUrl } = require('./config');

test('Homepage title check test', async ({ page }) => {

    await page.goto(baseUrl)
    await expect(page).toHaveTitle('My website')
});