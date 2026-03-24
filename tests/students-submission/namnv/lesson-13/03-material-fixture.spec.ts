import { test as base, expect, Page } from '@playwright/test';
import { RegisterPage } from '../lesson-10/page/register.page';
import { ProductPage } from '../lesson-10/page/product.page';
import { TodoPage } from '../lesson-10/page/todo.page';
import { PersonalNotesPage } from '../lesson-10/page/personal-notes.page';

type MaterialFixture = {
  materialPage: Page;
};

const test = base.extend<MaterialFixture>({
  materialPage: async ({ page }, use) => {
    await page.goto('https://material.playwrightvn.com/');
    await expect(page.getByRole('heading', { name: /Tài liệu học automation test/i })).toBeVisible();
    await use(page);
    console.log('End of test');
  },
});

test('refactor test1 with materialPage fixture', async ({ materialPage }) => {
  const registerPage = new RegisterPage(materialPage);
  const username = `namnv_${Date.now()}`;

  await registerPage.gotoRegisterPage();
  await registerPage.fillUsername(username);
  await registerPage.fillEmail(`${username}@mail.com`);
  await registerPage.checkGender('male');
  await materialPage.getByLabel('Biography').fill('Refactor with fixture');
  await registerPage.submitRegister();
  await expect(registerPage.usernameCell).toContainText(username);
});

test('refactor test2 with materialPage fixture', async ({ materialPage }) => {
  const productPage = new ProductPage(materialPage);
  await productPage.gotoProductPage();
  await productPage.addProductByIndex(0, 2);
  await productPage.addProductByIndex(1, 3);
  await productPage.addProductByIndex(2, 1);
  await expect(productPage.cartCount).toHaveText('6');
});

test('refactor test3 with materialPage fixture', async ({ materialPage }) => {
  const todoPage = new TodoPage(materialPage);
  await todoPage.gotoTodoPage();

  for (let i = 1; i <= 20; i++) {
    await todoPage.addTodo(`Todo ${i}`);
  }
  await expect(todoPage.todoItems).toHaveCount(20);
});

test('refactor test4 with materialPage fixture', async ({ materialPage }) => {
  const notesPage = new PersonalNotesPage(materialPage);
  await notesPage.gotoPersonalNotesPage();

  await notesPage.addNote('Fixture note', 'Refactor from lesson 10');
  await notesPage.searchInput.fill('Fixture');
  await expect(notesPage.noteItems.first()).toContainText(/fixture/i);
});

