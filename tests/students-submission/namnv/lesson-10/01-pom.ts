import { Locator, Page } from '@playwright/test';

export class MaterialBasePage {
  page: Page;
  xpathRegisterPage: string;
  xpathProductPage: string;
  cssTodoPage: string;
  personalNote: Locator;

  constructor(page: Page) {
    this.page = page;
    this.xpathRegisterPage = "//a[contains(text(),'Bài học 1: Register Page')]";
    this.xpathProductPage = "//a[contains(text(),'Bài học 2: Product page')]";
    this.cssTodoPage = "a:has-text('Bài học 3: Todo page')";
    this.personalNote = page.getByRole('link', { name: /Bài học 4: Personal notes/i });
  }

  async openMaterialPage() {
    await this.page.goto('https://material.playwrightvn.com/');
  }

  async gotoPage(pageName: string) {
    if (pageName.toLowerCase() === 'register') {
      await this.page.locator(this.xpathRegisterPage).click();
      return;
    }
    if (pageName.toLowerCase() === 'product') {
      await this.page.locator(this.xpathProductPage).click();
      return;
    }
    if (pageName.toLowerCase() === 'todo') {
      await this.page.locator(this.cssTodoPage).click();
      return;
    }
    if (pageName.toLowerCase() === 'personal notes') {
      await this.personalNote.click();
      return;
    }
  }
}

export class RegisterPage extends MaterialBasePage {
  xpathUsername: string;
  xpathEmail: string;
  xpathGenderMale: string;
  xpathGenderFemale: string;

  constructor(page: Page) {
    super(page);
    this.xpathUsername = "//input[@id='username']";
    this.xpathEmail = "//input[@id='email']";
    this.xpathGenderMale = "//input[@id='male']";
    this.xpathGenderFemale = "//input[@id='female']";
  }

  async fillUsername(value: string) {
    await this.page.locator(this.xpathUsername).fill(value);
  }

  async fillEmail(value: string) {
    await this.page.locator(this.xpathEmail).fill(value);
  }

  async checkGender(gender: string) {
    if (gender.toLowerCase() === 'male') {
      await this.page.locator(this.xpathGenderMale).check();
    } else {
      await this.page.locator(this.xpathGenderFemale).check();
    }
  }
}

