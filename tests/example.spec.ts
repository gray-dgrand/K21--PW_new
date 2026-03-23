import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://e-commerce-dev.betterbytesvn.com/');
  await expect(page).toHaveTitle(/E-commerce site for automation testing/i);
});

test('get started link', async ({ page }) => {
  await page.goto('https://e-commerce-dev.betterbytesvn.com/');

  await page.getByRole('link', { name: /my account/i }).click();

  await expect(page.getByRole('heading', { name: /my account/i })).toBeVisible();
});

