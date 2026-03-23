import { test, expect } from '@playwright/test';
import path from 'path';

test('lesson 05 - test1: register page', async ({ page }) => {
  await page.goto('https://material.playwrightvn.com/');
  await page.getByRole('link', { name: /Bài học 1: Register Page/i }).click();

  await page.getByLabel('Username').fill('namnv');
  await page.getByLabel('Email').fill('nguyennam230898@gmail.com');
  await page.getByLabel('Gender').selectOption('male');

  await page.getByLabel('Reading').check();
  await page.getByLabel('Traveling').check();
  await page.getByLabel('Cooking').check();

  await page.getByLabel('Interests').selectOption(['technology', 'science']);
  await page.getByLabel('Country').selectOption('canada');
  await page.getByLabel('Date of Birth').fill('1998-08-23');

  const uploadFile = path.join(__dirname, 'upload-avatar.txt');
  await page.getByLabel('Profile Picture').setInputFiles(uploadFile);

  await page.getByLabel('Biography').fill('Hoc Playwright va thuc hanh automation test.');

  await page.getByRole('button', { name: /register/i }).click();

  await expect(page.locator('#user-info')).toContainText('namnv');
  await expect(page.locator('#user-info')).toContainText('nguyennam230898@gmail.com');
});

