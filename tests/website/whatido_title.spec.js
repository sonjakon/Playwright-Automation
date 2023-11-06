const { test, expect } = require('@playwright/test')
const { baseUrl } = require('./config');

test('What I do page title check test', async ({ page }) => {

    await page.goto(baseUrl + '/what_i_do/index.html')
    await expect(page).toHaveTitle('What I do')
});