import { test, expect } from '@playwright/test';
import { TodoPage } from './page/todo.page';

test.describe('Lesson 10 - Todo with POM', () => {
  test('test3: todo page', async ({ page }) => {
    const todoPage = new TodoPage(page);

    await todoPage.openMaterialPage();
    await todoPage.gotoTodoPage();

    for (let i = 1; i <= 100; i++) {
      await todoPage.addTodo(`Todo ${i}`);
    }

    for (let i = 1; i <= 100; i += 2) {
      await todoPage
        .todoItemByText(`Todo ${i}`)
        .getByRole('button', { name: /delete/i })
        .click();
    }

    await expect(todoPage.todoItems).toHaveCount(50);
    await expect(todoPage.todoItemByText('Todo 90')).toBeVisible();
    await expect(todoPage.todoItemByText('Todo 21')).toHaveCount(0);
  });
});

