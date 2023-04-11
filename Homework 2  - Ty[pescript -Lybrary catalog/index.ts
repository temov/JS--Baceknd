console.log("Library_app")

interface Book{

    title:string,
    author:Author
}

interface Author{

    firstName:string,
    lastName:string
}

interface Ilibrary {

    addBook(book:Book):void,
    removeBook(title: string): void,
    listBooks(): void
}

class Library implements Ilibrary {

    private books:Book[] = [];

    addBook(book: Book): void {

        this.books.push(book);
        
    }
    removeBook(title: string): void {

        {

        this.books.filter(book=>book.title !== title)
        }
        
    }
    listBooks(): void {
        this.books.forEach(book=>{

            console.log(`Book title is:${book.title}, Author name is:${book.author.firstName} ${book.author.lastName}`);
        })
    }
}