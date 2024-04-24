const { test, expect } = require('@playwright/test')
const { baseUrl } = require('./config');

test('select a single task', async ({ page }) => {
    await page.goto(baseUrl);
    await page.getByTestId('text-input').click();
    await page.getByTestId('text-input').fill('jedan');
    await page.getByTestId('text-input').press('Enter');
    await page.getByTestId('todo-item-toggle').check();

    await expect(page.getByTestId('todo-item').filter({ hasText: 'jedan' })).toHaveClass('completed');
});
