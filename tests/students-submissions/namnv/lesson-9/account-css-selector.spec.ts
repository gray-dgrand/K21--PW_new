import { test, expect, Page } from '@playwright/test';

const BASE_URL = 'https://pw-practice-dev.playwrightvn.com';
const ADMIN_USERNAME = 'betterbytes.academy.admin';
const ADMIN_PASSWORD = 'StrongPass@BetterBytesAcademy';

async function loginAsAdmin(page: Page) {
  await page.goto(`${BASE_URL}/wp-login.php`);
  await page.locator('#user_login').fill(ADMIN_USERNAME);
  await page.locator('#user_pass').fill(ADMIN_PASSWORD);
  await page.locator('#wp-submit').click();
}

test.describe('ACC - Account (CSS selector)', () => {
  test('ACC_001: Create account with writer permission', async ({ page }) => {
    const username = `writer_css_${Date.now()}`;

    await test.step('Login admin', async () => {
      await loginAsAdmin(page);
      await expect(page).toHaveURL(/wp-admin\/?$/);
    });

    await test.step('Create writer account', async () => {
      await page.goto(`${BASE_URL}/wp-admin/user-new.php`);
      await page.locator('#user_login').fill(username);
      await page.locator('#email').fill(`${username}@mailinator.com`);
      await page.locator('#first_name').fill('Nguyen');
      await page.locator('#last_name').fill('Nam');
      await page.locator('#role').selectOption('author');
      await page.locator('#createusersub').click();
      await expect(page.getByText(/new user created/i)).toBeVisible();
    });
  });

  test('ACC_002: Create account with subscriber permission', async ({ page }) => {
    const username = `subs_css_${Date.now()}`;

    await test.step('Login admin', async () => {
      await loginAsAdmin(page);
      await expect(page).toHaveURL(/wp-admin\/?$/);
    });

    await test.step('Create subscriber account', async () => {
      await page.goto(`${BASE_URL}/wp-admin/user-new.php`);
      await page.locator('#user_login').fill(username);
      await page.locator('#email').fill(`${username}@mailinator.com`);
      await page.locator('#first_name').fill('Nguyen');
      await page.locator('#last_name').fill('Nam');
      await page.locator('#role').selectOption('subscriber');
      await page.locator('#createusersub').click();
      await expect(page.getByText(/new user created/i)).toBeVisible();
    });
  });
});

