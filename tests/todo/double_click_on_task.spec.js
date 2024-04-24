const { test, expect } = require('@playwright/test')
const { baseUrl } = require('./config.js');

test('double-click on task', async ({ page }) => {
    await page.goto(baseUrl);
    await page.getByTestId('text-input').fill('jedan');
    await page.getByTestId('text-input').press('Enter');
    await page.getByTestId('todo-item-label').dblclick();

    await expect(page.getByTestId('todo-item').getByTestId('text-input')).toBeVisible();
});
