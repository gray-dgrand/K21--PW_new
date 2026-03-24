import { test, expect } from '@playwright/test';
import { ProductPage } from './page/product.page';

test.describe('Lesson 10 - Product with POM', () => {
  test('test2: product page', async ({ page }) => {
    const productPage = new ProductPage(page);

    await productPage.openMaterialPage();
    await productPage.gotoProductPage();

    await productPage.addProductByIndex(0, 2);
    await productPage.addProductByIndex(1, 3);
    await productPage.addProductByIndex(2, 1);

    await expect(productPage.cartCount).toHaveText('6');
    await expect(productPage.totalPrice).toContainText(/\d+/);
  });
});

