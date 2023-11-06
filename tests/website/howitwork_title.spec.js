const { test, expect } = require('@playwright/test')
const { baseUrl } = require('./config');

test('How It Work page title check test', async ({ page }) => {

    await page.goto(baseUrl + '/how_it_work/index.html')
    await expect(page).toHaveTitle('How It Work')
});