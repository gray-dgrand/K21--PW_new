import { Locator, Page } from '@playwright/test';
import { MaterialBasePage } from './material-base.page';

export class RegisterPage extends MaterialBasePage {
  usernameInput: Locator;
  emailInput: Locator;
  maleRadio: Locator;
  femaleRadio: Locator;
  registerButton: Locator;
  usernameCell: Locator;

  constructor(page: Page) {
    super(page);
    this.usernameInput = page.getByLabel('Username');
    this.emailInput = page.getByLabel('Email');
    this.maleRadio = page.getByLabel('Male');
    this.femaleRadio = page.getByLabel('Female');
    this.registerButton = page.getByRole('button', { name: /register/i });
    this.usernameCell = page.locator('#userTable tbody tr td').first();
  }

  async fillUsername(value: string) {
    await this.usernameInput.fill(value);
  }

  async fillEmail(value: string) {
    await this.emailInput.fill(value);
  }

  async checkGender(gender: string) {
    if (gender.toLowerCase() === 'male') await this.maleRadio.check();
    else await this.femaleRadio.check();
  }

  async submitRegister() {
    await this.registerButton.click();
  }
}

