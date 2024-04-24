const { test, expect } = require('@playwright/test')
const { baseUrl } = require('./config');

test('select all tasks', async ({ page }) => {
    await page.goto(baseUrl);
    await page.getByTestId('text-input').click();
    await page.getByTestId('text-input').fill('jedan');
    await page.getByTestId('text-input').press('Enter');
    await page.getByTestId('text-input').fill('dva');
    await page.getByTestId('text-input').press('Enter');
    await page.getByTestId('toggle-all').check();

    await expect(await page.$$eval('[data-testid="todo-item"]', items => {
        return items.every(item => item.classList.contains('completed'));
    })).toBeTruthy();
});