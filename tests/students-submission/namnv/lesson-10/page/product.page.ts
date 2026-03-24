import { Locator, Page } from '@playwright/test';
import { MaterialBasePage } from './material-base.page';

export class ProductPage extends MaterialBasePage {
  addToCartButtons: Locator;
  cartCount: Locator;
  totalPrice: Locator;

  constructor(page: Page) {
    super(page);
    this.addToCartButtons = page.getByRole('button', { name: /add to cart/i });
    this.cartCount = page.locator('#cart-count');
    this.totalPrice = page.locator('#total-price');
  }

  async addProductByIndex(index: number, quantity: number) {
    for (let i = 0; i < quantity; i++) {
      await this.addToCartButtons.nth(index).click();
    }
  }
}

