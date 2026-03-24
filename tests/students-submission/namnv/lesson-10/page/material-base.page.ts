import { Locator, Page } from '@playwright/test';

export class MaterialBasePage {
  page: Page;
  registerPageLink: Locator;
  productPageLink: Locator;
  todoPageLink: Locator;
  personalNotesLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.registerPageLink = page.getByRole('link', { name: /Bài học 1: Register Page/i });
    this.productPageLink = page.getByRole('link', { name: /Bài học 2: Product page/i });
    this.todoPageLink = page.getByRole('link', { name: /Bài học 3: Todo page/i });
    this.personalNotesLink = page.getByRole('link', { name: /Bài học 4: Personal notes/i });
  }

  async openMaterialPage() {
    await this.page.goto('https://material.playwrightvn.com/');
  }

  async gotoRegisterPage() {
    await this.registerPageLink.click();
  }

  async gotoProductPage() {
    await this.productPageLink.click();
  }

  async gotoTodoPage() {
    await this.todoPageLink.click();
  }

  async gotoPersonalNotesPage() {
    await this.personalNotesLink.click();
  }
}

