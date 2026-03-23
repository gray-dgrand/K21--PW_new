import { test, expect } from '@playwright/test';

test('lesson 05 - test2: add products to cart', async ({ page }) => {
  await page.goto('https://material.playwrightvn.com/');
  await page.getByRole('link', { name: /Bài học 2: Product page/i }).click();

  const addButtons = page.getByRole('button', { name: /add to cart/i });

  await addButtons.nth(0).click();
  await addButtons.nth(0).click();

  await addButtons.nth(1).click();
  await addButtons.nth(1).click();
  await addButtons.nth(1).click();

  await addButtons.nth(2).click();

  await expect(page.locator('#cart-count')).toHaveText('6');
});

