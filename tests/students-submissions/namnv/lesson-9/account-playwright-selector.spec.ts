import { test, expect, Page } from '@playwright/test';

const BASE_URL = 'https://pw-practice-dev.playwrightvn.com';
const ADMIN_USERNAME = 'betterbytes.academy.admin';
const ADMIN_PASSWORD = 'StrongPass@BetterBytesAcademy';

async function loginAsAdmin(page: Page) {
  await page.goto(`${BASE_URL}/wp-login.php`);
  await page.getByLabel('Username or Email Address').fill(ADMIN_USERNAME);
  await page.getByLabel('Password').fill(ADMIN_PASSWORD);
  await page.getByRole('button', { name: /log in/i }).click();
}

test.describe('ACC - Account (Playwright selector)', () => {
  test('ACC_001: Create account with writer permission', async ({ page }) => {
    const username = `writer_pw_${Date.now()}`;

    await test.step('Login admin', async () => {
      await loginAsAdmin(page);
      await expect(page.getByRole('link', { name: /users/i })).toBeVisible();
    });

    await test.step('Create writer account', async () => {
      await page.goto(`${BASE_URL}/wp-admin/user-new.php`);
      await page.getByLabel('Username (required)').fill(username);
      await page.getByLabel('Email (required)').fill(`${username}@mailinator.com`);
      await page.getByLabel('First Name').fill('Nguyen');
      await page.getByLabel('Last Name').fill('Nam');
      await page.getByLabel('Role').selectOption('author');
      await page.getByRole('button', { name: /add new user/i }).click();
      await expect(page.getByText(/new user created/i)).toBeVisible();
    });
  });

  test('ACC_002: Create account with subscriber permission', async ({ page }) => {
    const username = `subs_pw_${Date.now()}`;

    await test.step('Login admin', async () => {
      await loginAsAdmin(page);
      await expect(page.getByRole('link', { name: /users/i })).toBeVisible();
    });

    await test.step('Create subscriber account', async () => {
      await page.goto(`${BASE_URL}/wp-admin/user-new.php`);
      await page.getByLabel('Username (required)').fill(username);
      await page.getByLabel('Email (required)').fill(`${username}@mailinator.com`);
      await page.getByLabel('First Name').fill('Nguyen');
      await page.getByLabel('Last Name').fill('Nam');
      await page.getByLabel('Role').selectOption('subscriber');
      await page.getByRole('button', { name: /add new user/i }).click();
      await expect(page.getByText(/new user created/i)).toBeVisible();
    });
  });
});

