import { Locator, Page } from '@playwright/test';
import { MaterialBasePage } from './material-base.page';

export class TodoPage extends MaterialBasePage {
  todoInput: Locator;
  addButton: Locator;
  todoItems: Locator;

  constructor(page: Page) {
    super(page);
    this.todoInput = page.getByPlaceholder(/add a new todo/i);
    this.addButton = page.getByRole('button', { name: /add/i });
    this.todoItems = page.locator('.todo-item');
  }

  async addTodo(text: string) {
    await this.todoInput.fill(text);
    await this.addButton.click();
  }

  todoItemByText(text: string) {
    return this.page.locator('.todo-item', { hasText: text });
  }
}

