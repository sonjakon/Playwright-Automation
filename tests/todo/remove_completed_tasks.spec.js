const { test, expect } = require('@playwright/test')
const { baseUrl } = require('./config');

test('remove completed tasks', async ({ page }) => {
    await page.goto(baseUrl);
    await page.getByTestId('text-input').click();
    await page.getByTestId('text-input').fill('jedan');
    await page.getByTestId('text-input').press('Enter');
    await page.getByTestId('text-input').fill('dva');
    await page.getByTestId('text-input').press('Enter');
    await page.getByTestId('toggle-all').check();
    await page.getByRole('button', { name: 'Clear completed' }).click();

    await expect(page.getByTestId('todo-item')).toBeHidden;
});