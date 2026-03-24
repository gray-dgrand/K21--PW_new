import { test, expect } from '@playwright/test';

const LOGIN_URL = 'https://pw-practice-dev.playwrightvn.com/wp-login.php';
const ADMIN_USERNAME = 'betterbytes.academy.admin';
const ADMIN_PASSWORD = 'StrongPass@BetterBytesAcademy';

test.describe('AUTH - Authentication (CSS selector)', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(LOGIN_URL);
  });

  test('AUTH_001: Login success', async ({ page }) => {
    await test.step('Input valid username and password', async () => {
      await page.locator('#user_login').fill(ADMIN_USERNAME);
      await page.locator('#user_pass').fill(ADMIN_PASSWORD);
    });

    await test.step('Click login button', async () => {
      await page.locator('#wp-submit').click();
    });

    await test.step('Verify dashboard loaded', async () => {
      await expect(page).toHaveURL(/wp-admin\/?$/);
      await expect(page.locator('#wpadminbar')).toBeVisible();
    });
  });

  test('AUTH_002: Login fail', async ({ page }) => {
    await test.step('Input valid username and invalid password', async () => {
      await page.locator('#user_login').fill(ADMIN_USERNAME);
      await page.locator('#user_pass').fill('WrongPass@123');
    });

    await test.step('Click login button', async () => {
      await page.locator('#wp-submit').click();
    });

    await test.step('Verify login error', async () => {
      await expect(page.locator('#login_error')).toContainText(/error:/i);
    });
  });
});

