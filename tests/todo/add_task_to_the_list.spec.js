const { test, expect } = require('@playwright/test')
const { baseUrl } = require('./config.js');

test('add task to the list', async ({ page }) => {
    await page.goto(baseUrl);
    await page.getByTestId('text-input').click();
    await page.getByTestId('text-input').fill('jedan');
    await page.getByTestId('text-input').press('Enter');

    await expect(page.getByTestId('todo-item-label')).toBeVisible();
});
