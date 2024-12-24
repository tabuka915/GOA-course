class Book {
    constructor(id, title, author, genre, price, description) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.price = price;
        this.description = description;
        this.inCollection = false; 
    }
}


class BookStore {
    constructor() {
        this.books = new Map(); 
        this.collection = new Map(); 
    }

    addBookToStore(book) {
        this.books.set(book.id, book);
    }

    addBookToCollection(id) {
        if (this.books.has(id)) {
            const book = this.books.get(id);
            book.inCollection = true;
            this.collection.set(id, book);
        } else {
            console.log('წიგნი ვერ მოიძებნა მაღაზიაში.');
        }
    }

    removeBookFromCollection(id) {
        if (this.collection.has(id)) {
            const book = this.collection.get(id);
            book.inCollection = false;
            this.collection.delete(id);
        } else {
            console.log('წიგნი ვერ მოიძებნა კოლექციაში.');
        }
    }

    searchBooksByTitleOrAuthor(query) {
        const results = [];
        for (const book of this.books.values()) {
            if (book.title.includes(query) || book.author.includes(query)) {
                results.push(book);
            }
        }
        return results;
    }

    filterBooks(filter) {
        const results = [];
        for (const book of this.books.values()) {
            let matches = true;
            for (const key in filter) {
                if (book[key] !== filter[key]) {
                    matches = false;
                    break;
                }
            }
            if (matches) {
                results.push(book);
            }
        }
        return results;
    }

    getCollection() {
        return Array.from(this.collection.values());
    }

    getAllBooks() {
        return Array.from(this.books.values());
    }
}


const bookstore = new BookStore();

const book1 = new Book('1', 'სახელმძღვანელო', 'ავტორი1', 'ჟანრი1', 25, 'აღწერა1');
const book2 = new Book('2', 'სახელმძღვანელო2', 'ავტორი2', 'ჟანრი2', 30, 'აღწერა2');
const book3 = new Book('3', 'სახელმძღვანელო3', 'ავტორი3', 'ჟანრი1', 20, 'აღწერა3');

bookstore.addBookToStore(book1);
bookstore.addBookToStore(book2);
bookstore.addBookToStore(book3);

bookstore.addBookToCollection('1');

console.log("ყველა წიგნი მაღაზიაში:");
console.log(bookstore.getAllBooks());

console.log("ყველა წიგნი კოლექციაში:");
console.log(bookstore.getCollection());

console.log("ძებნა სათაურით 'სახელმძღვანელო':");
console.log(bookstore.searchBooksByTitleOrAuthor('სახელმძღვანელო'));

console.log("ფილტრაცია ჟანრით 'ჟანრი1':");
console.log(bookstore.filterBooks({ genre: 'ჟანრი1' }));

bookstore.removeBookFromCollection('1');
console.log("ყველა წიგნი კოლექციაში წაშლის შემდეგ:");
console.log(bookstore.getCollection());