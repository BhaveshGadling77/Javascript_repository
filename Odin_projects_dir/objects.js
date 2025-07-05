class book {
  constructor(title, author, pages, read) {
    if (
      typeof this.title != String ||
      typeof this.author != String ||
      typeof this.pages != Number ||
      typeof this.read != Boolean
    ) {
      throw Error("Please give the valid input !");
    }
    if (!this.target) throw Error("Use this keyword to initialize the object");
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

  info(book) {
    console.log(`The title of Book ${this.title}`);
    console.log(`The author of this Book ${this.author}`);
    console.log(`Number of Pages in this book is ${this.pages}`);
    console.log(`Did you read this book?`);
    console.log(this.read ? `Yes` : `No`);
  }
}
// let myBook = new book("Algorithms To live ", "James Clear", 400, false);
// myBook.info();

function Book(title, author, pages, read) {
  if (
    typeof this.title != String ||
    typeof this.author != String ||
    typeof this.pages != Number ||
    typeof this.read != Boolean
  ) {
    throw Error("Please give the valid input !");
  }
  if (!this.target) throw Error("Use this keyword to initialize the object");
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  let info = function (title, author, pages, read) {
    console.log(`The title of Book ${this.title}`);
    console.log(`The author of this Book ${this.author}`);
    console.log(`Number of Pages in this book is ${this.pages}`);
    console.log(`Did you read this book?`);
    console.log(this.read ? `Yes` : `No`);
  };
}
let myBook = new Book("Algorithms To live ", "James Clear", 400, false);

myBook.info();