import { test, expect } from '@playwright/test';
import { PersonalNotesPage } from './page/personal-notes.page';

test.describe('Lesson 10 - Personal notes with POM', () => {
  test('test4: personal notes page', async ({ page }) => {
    const notesPage = new PersonalNotesPage(page);

    await notesPage.openMaterialPage();
    await notesPage.gotoPersonalNotesPage();

    for (let i = 1; i <= 10; i++) {
      await notesPage.addNote(
        `Bai bao ${i}`,
        `Noi dung mo ta ngan cho bai bao ${i}. Keyword: hoc automation test.`
      );
    }

    const keyword = 'automation';
    await notesPage.searchInput.fill(keyword);

    const noteCount = await notesPage.noteItems.count();
    for (let i = 0; i < noteCount; i++) {
      await expect(notesPage.noteItems.nth(i)).toContainText(new RegExp(keyword, 'i'));
    }
  });
});

