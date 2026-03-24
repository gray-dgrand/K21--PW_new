import { test as base, expect, BrowserContext, Page } from '@playwright/test';

type TabsFixture = {
  tab1: Page;
  tab2: Page;
};

const test = base.extend<TabsFixture>({
  tab1: async ({ context }, use) => {
    const page = await context.newPage();
    await page.goto('https://material.playwrightvn.com/');
    await use(page);
  },
  tab2: async ({ context }, use) => {
    const page = await context.newPage();
    await page.goto('https://e-commerce-dev.betterbytesvn.com/');
    await use(page);
  },
});

test.describe('Lesson 13 - fixture context tabs', () => {
  test('open 2 tabs in same context', async ({ tab1, tab2 }) => {
    await expect(tab1).toHaveURL(/material\.playwrightvn\.com/);
    await expect(tab2).toHaveURL(/e-commerce-dev\.betterbytesvn\.com/);
  });
});

test.describe('Lesson 13 - fixture browser contexts', () => {
  test('open 2 contexts from browser fixture', async ({ browser }) => {
    const context1: BrowserContext = await browser.newContext();
    const context2: BrowserContext = await browser.newContext();

    const page1 = await context1.newPage();
    const page2 = await context2.newPage();

    await page1.goto('https://material.playwrightvn.com/');
    await page2.goto('https://e-commerce-dev.betterbytesvn.com/');

    await expect(page1).toHaveURL(/material\.playwrightvn\.com/);
    await expect(page2).toHaveURL(/e-commerce-dev\.betterbytesvn\.com/);

    await context1.close();
    await context2.close();
  });
});

