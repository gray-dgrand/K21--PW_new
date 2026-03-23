import { test, expect } from '@playwright/test';

test('lesson 05 - test3: todo page', async ({ page }) => {
  await page.goto('https://material.playwrightvn.com/');
  await page.getByRole('link', { name: /Bài học 3: Todo page/i }).click();

  const todoInput = page.getByPlaceholder(/add a new todo/i);
  const addButton = page.getByRole('button', { name: /add/i });

  for (let i = 1; i <= 100; i++) {
    await todoInput.fill(`Todo ${i}`);
    await addButton.click();
  }

  for (let i = 1; i <= 100; i += 2) {
    const item = page.locator('.todo-item', { hasText: `Todo ${i}` });
    await item.getByRole('button', { name: /delete/i }).click();
  }

  await expect(page.locator('.todo-item')).toHaveCount(50);
});

