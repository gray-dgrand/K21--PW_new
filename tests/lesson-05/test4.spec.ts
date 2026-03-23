import { test, expect } from '@playwright/test';

test('lesson 05 - test4: personal notes', async ({ page }) => {
  await page.goto('https://material.playwrightvn.com/');
  await page.getByRole('link', { name: /Bài học 4: Personal notes/i }).click();

  const notes = [
    { title: 'click', content: 'Ham click dung de thuc hien click vao cac phan tu tren trang web' },
    { title: 'fill', content: 'Ham fill dung de dien van ban vao cac truong input hoac textarea' },
    { title: 'type', content: 'Ham type dung de nhap tung ky tu vao phan tu' },
    { title: 'hover', content: 'Ham hover dung de di chuyen chuot den vi tri phan tu' },
    { title: 'check', content: 'Ham check dung de danh dau checkbox hoac radio button' },
    { title: 'uncheck', content: 'Ham uncheck dung de bo danh dau checkbox' },
    { title: 'selectOption', content: 'Ham selectOption dung de chon option trong the select' },
    { title: 'press', content: 'Ham press dung de mo phong nhan phim nhu Enter Tab Escape' },
    { title: 'dblclick', content: 'Ham dblclick dung de thuc hien double click vao phan tu' },
    { title: 'dragAndDrop', content: 'Ham dragAndDrop dung de keo tha phan tu tu nguon den dich' },
  ];

  for (const note of notes) {
    await page.getByLabel('Title').fill(note.title);
    await page.getByLabel('Content').fill(note.content);
    await page.getByRole('button', { name: /add note/i }).click();
  }

  await page.getByPlaceholder(/search notes/i).fill('một hoặc nhiều');

  await expect(page.getByText(/Total Notes:\s*10/i)).toBeVisible();
});

