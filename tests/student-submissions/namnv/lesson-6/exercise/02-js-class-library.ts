class Library {
  name: string;
  location: string;
  books: string[];

  constructor(name: string, location: string) {
    this.name = name;
    this.location = location;
    this.books = [];
  }

  addBook(bookTitle: string): void {
    this.books.push(bookTitle);
  }

  findBook(title: string): string {
    const found = this.books.find(
      (book) => book.toLowerCase() === title.toLowerCase()
    );

    return found ? `Found: ${found}` : "Book not found";
  }
}

const library = new Library("City Library", "District 1");
library.addBook("Clean Code");
library.addBook("The Pragmatic Programmer");
console.log(library.findBook("Clean Code"));
console.log(library.findBook("Refactoring"));

