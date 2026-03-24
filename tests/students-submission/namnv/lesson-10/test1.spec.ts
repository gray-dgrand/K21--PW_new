import { test, expect } from '@playwright/test';
import { RegisterPage } from './page/register.page';

test.describe('Lesson 10 - Register with POM', () => {
  test('test1: register page', async ({ page }) => {
    const registerPage = new RegisterPage(page);
    const username = `namnv_${Date.now()}`;

    await registerPage.openMaterialPage();
    await registerPage.gotoRegisterPage();

    await registerPage.fillUsername(username);
    await registerPage.fillEmail(`${username}@mail.com`);
    await registerPage.checkGender('male');

    await page.getByLabel('Hobbies').selectOption('reading');
    await page.getByLabel('Interests').selectOption('technology');
    await page.getByLabel('Country').selectOption('canada');
    await page.getByLabel('Date of Birth').fill('1998-08-23');
    await page.getByLabel('Biography').fill('Testing with POM');

    await registerPage.submitRegister();

    await expect(registerPage.usernameCell).toContainText(username);
  });
});

