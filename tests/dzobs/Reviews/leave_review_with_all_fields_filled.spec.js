import { test, expect } from '@playwright/test';

test.use({ storageState: 'tests/dzobs/auth/user_with_review.spec.json' });

test('leave a review with non-select fields empty - error message under all fields: "Obligatory field"', async ({ page }) => {

    test.slow();

    await test.step("go to companys review fill out form", async () => {
        await page.goto('https://www.dzobs.com/');
        await page.locator('div.relative.group a button span:has-text("Kompanije")').hover();
        await page.getByRole('link', { name: 'Istraži kompanije' }).click();
        await page.getByPlaceholder('Filtriraj po nazivu').click();
        await page.getByPlaceholder('Filtriraj po nazivu').fill('am2');
        await page.getByRole('button', { name: 'Filtriraj' }).click();
        await page.getByRole('link', { name: 'AM2Studio AM2Studio premium' }).click();
        await page.getByRole('link', { name: 'Iskustva' }).click();
        await page.getByRole('button', { name: 'Podjeli svoje iskustvo' }).first().click();
    })

    await test.step("fill out all fields", async () => {
        await page.getByPlaceholder('Software Developer').click();
        await page.getByPlaceholder('Software Developer').fill('Software Developer');
        await page.locator('#react-select-3-placeholder').click();
        await page.getByText('Trenutno radim u kompaniji', { exact: true }).click();
        await page.locator('#react-select-4-placeholder').click();
        await page.getByText('Junior', { exact: true }).click();
        await page.getByText('Select...').click();
        await page.getByText('Manje od godinu dana', { exact: true }).click();
        await page.locator('textarea[name="prosText"]').click();
        await page.locator('textarea[name="prosText"]').fill('pozitivno iskustvo');
        await page.locator('textarea[name="consText"]').click();
        await page.locator('textarea[name="consText"]').fill('negativno iskustvo');
        await page.locator('textarea[name="menadzmentText"]').click();
        await page.locator('textarea[name="menadzmentText"]').fill('poruka za menadzment');
        await page.locator('div').filter({ hasText: /^Plata$/ }).getByRole('button').nth(2).click();
        await page.locator('div').filter({ hasText: /^Lični razvoj$/ }).getByRole('button').nth(2).click();
        await page.locator('div').filter({ hasText: /^Međuljudski odnosi$/ }).getByRole('button').nth(2).click();
        await page.locator('div').filter({ hasText: /^Stručan tim$/ }).getByRole('button').nth(2).click();
        await page.locator('div').filter({ hasText: /^Moderne tehnologije$/ }).getByRole('button').nth(2).click();
        await page.locator('div').filter({ hasText: /^Projekti$/ }).getByRole('button').nth(2).click();
        await page.locator('div').filter({ hasText: /^Privatno\/poslovni život$/ }).getByRole('button').nth(2).click();
        await page.locator('div').filter({ hasText: /^Prilika za napredovanje$/ }).getByRole('button').nth(2).click();
        await page.getByRole('button', { name: 'Pošalji' }).click();
    })

    await test.step("verify review is sent", async () => {
        await expect(page.locator('section').filter({ hasText: 'Hvala!Utisak će biti objavljen kroz par minuta!Idi nazad na kompaniju' }).getByRole('img')).toBeVisible();
    })
});