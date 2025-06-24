import { test, expect } from '@playwright/test';

test('homepage has White Code brand in navbar', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByText('White Code')).toBeVisible();
}); 