import { Locator, Page } from '@playwright/test';
import { MaterialBasePage } from './material-base.page';

export class PersonalNotesPage extends MaterialBasePage {
  titleInput: Locator;
  contentInput: Locator;
  addNoteButton: Locator;
  searchInput: Locator;
  noteItems: Locator;

  constructor(page: Page) {
    super(page);
    this.titleInput = page.getByLabel('Title');
    this.contentInput = page.getByLabel('Content');
    this.addNoteButton = page.getByRole('button', { name: /add note/i });
    this.searchInput = page.getByPlaceholder(/search notes/i);
    this.noteItems = page.locator('.note-item');
  }

  async addNote(title: string, content: string) {
    await this.titleInput.fill(title);
    await this.contentInput.fill(content);
    await this.addNoteButton.click();
  }
}

