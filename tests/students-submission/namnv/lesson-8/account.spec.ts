import { test, expect, Page } from '@playwright/test';

const BASE_URL = 'https://pw-practice-dev.playwrightvn.com';
const ADMIN_USERNAME = 'betterbytes.academy.admin';
const ADMIN_PASSWORD = 'StrongPass@BetterBytesAcademy';

async function loginAs(page: Page, username: string, password: string) {
  await page.goto(`${BASE_URL}/wp-login.php`);
  await page.locator('#user_login').fill(username);
  await page.locator('#user_pass').fill(password);
  await page.locator('#wp-submit').click();
}

async function createUser(
  page: Page,
  username: string,
  email: string,
  firstName: string,
  lastName: string,
  role: 'author' | 'subscriber'
) {
  await page.goto(`${BASE_URL}/wp-admin/user-new.php`);
  await page.locator('#user_login').fill(username);
  await page.locator('#email').fill(email);
  await page.locator('#first_name').fill(firstName);
  await page.locator('#last_name').fill(lastName);
  await page.locator('#pass1').fill('StrongPass@123');
  await page.locator('#pass2').fill('StrongPass@123');
  await page.locator('#role').selectOption(role);
  await page.getByRole('button', { name: /add new user/i }).click();
}

async function deleteUser(page: Page, username: string) {
  await page.goto(`${BASE_URL}/wp-admin/users.php`);

  const row = page.locator('tr').filter({ hasText: username }).first();
  await expect(row).toBeVisible();
  await row.locator('input[type="checkbox"]').check();

  await page.locator('#bulk-action-selector-top').selectOption('delete');
  await page.locator('#doaction').click();

  const deleteButton = page.locator('#submit');
  if (await deleteButton.isVisible()) {
    await deleteButton.click();
  }
}

test.describe('ACC - Account', () => {
  test('ACC_001: Create account with writer permission', async ({ page }) => {
    const username = `writer_${Date.now()}`;
    const password = 'StrongPass@123';

    await test.step('Login with admin account', async () => {
      await loginAs(page, ADMIN_USERNAME, ADMIN_PASSWORD);
      await expect(page).toHaveURL(/wp-admin\/?$/);
    });

    await test.step('Create writer account', async () => {
      await createUser(
        page,
        username,
        `${username}@mailinator.com`,
        'Nguyen',
        'Nam',
        'author'
      );
      await expect(page.getByText(/new user created/i)).toBeVisible();
    });

    await test.step('Login with new user and verify writer menus', async () => {
      await page.goto(`${BASE_URL}/wp-login.php?action=logout`);
      await page.getByRole('link', { name: /log out/i }).click();

      await loginAs(page, username, password);
      await expect(page.getByRole('link', { name: /dashboard/i })).toBeVisible();
      await expect(page.getByRole('link', { name: /posts/i })).toBeVisible();
      await expect(page.getByRole('link', { name: /media/i })).toBeVisible();
      await expect(page.getByRole('link', { name: /comments/i })).toBeVisible();
      await expect(page.getByRole('link', { name: /profile/i })).toBeVisible();
    });

    await test.step('Teardown: delete created account', async () => {
      await loginAs(page, ADMIN_USERNAME, ADMIN_PASSWORD);
      await deleteUser(page, username);
      await expect(page.getByText(username)).toHaveCount(0);
    });
  });

  test('ACC_002: Create account with subscriber permission', async ({ page }) => {
    const username = `subs_${Date.now()}`;
    const password = 'StrongPass@123';

    await test.step('Login with admin account', async () => {
      await loginAs(page, ADMIN_USERNAME, ADMIN_PASSWORD);
      await expect(page).toHaveURL(/wp-admin\/?$/);
    });

    await test.step('Create subscriber account', async () => {
      await createUser(
        page,
        username,
        `${username}@mailinator.com`,
        'Nguyen',
        'Nam',
        'subscriber'
      );
      await expect(page.getByText(/new user created/i)).toBeVisible();
    });

    await test.step('Login with new user and verify limited menus', async () => {
      await page.goto(`${BASE_URL}/wp-login.php?action=logout`);
      await page.getByRole('link', { name: /log out/i }).click();

      await loginAs(page, username, password);
      await expect(page.getByRole('link', { name: /dashboard/i })).toBeVisible();
      await expect(page.getByRole('link', { name: /profile/i })).toBeVisible();
      await expect(page.getByRole('link', { name: /posts/i })).toHaveCount(0);
      await expect(page.getByRole('link', { name: /media/i })).toHaveCount(0);
    });

    await test.step('Teardown: delete created account', async () => {
      await loginAs(page, ADMIN_USERNAME, ADMIN_PASSWORD);
      await deleteUser(page, username);
      await expect(page.getByText(username)).toHaveCount(0);
    });
  });
});

