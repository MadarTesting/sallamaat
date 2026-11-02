import { test, expect } from '@playwright/test';
test('login test', async ({ page }) => {
    await page.goto('https://demo.sallamaat.com/auth?step=login');
    await expect(page).toHaveTitle(/سلامات/);
    
});