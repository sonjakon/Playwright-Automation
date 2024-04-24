const { test, expect } = require('@playwright/test')
const { baseUrl } = require('./config.js');

test('add a single character as a task', async ({ page }) => {
    await page.goto(baseUrl);
    await page.getByTestId('text-input').click();
    await page.getByTestId('text-input').fill('d');
    await page.getByTestId('text-input').press('Enter');

    await expect(page.getByTestId('todo-item-label')).toBeHidden();
});
