const { test, expect } = require('@playwright/test')
const { baseUrl } = require('./config.js');

test('remove a single task', async ({ page }) => {
    await page.goto(baseUrl);
    await page.getByTestId('text-input').fill('jedan');
    await page.getByTestId('text-input').press('Enter');
    await page.getByTestId('text-input').fill('dva');
    await page.getByTestId('text-input').press('Enter');
    await page.getByText('jedan').hover();
    await page.getByRole('button', { name: '×' }).click();

    await expect(page.getByTestId('todo-item').filter({ hasText: 'jedan' })).toBeHidden;
});
