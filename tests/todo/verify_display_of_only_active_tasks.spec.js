const { test, expect } = require('@playwright/test')
const { baseUrl } = require('./config');

test('verify display of only active tasks', async ({ page }) => {
    await page.goto(baseUrl);
    await page.getByTestId('text-input').click();
    await page.getByTestId('text-input').fill('jedan');
    await page.getByTestId('text-input').press('Enter');
    await page.getByTestId('text-input').fill('dva');
    await page.getByTestId('text-input').press('Enter');
    await page.locator('div').filter({ hasText: 'jedan' }).getByTestId('todo-item-toggle').check();
    await page.getByRole('link', { name: 'Active' }).click();

    await expect(page.getByTestId('todo-item').filter({ hasText: 'dva' })).toBeVisible;
});