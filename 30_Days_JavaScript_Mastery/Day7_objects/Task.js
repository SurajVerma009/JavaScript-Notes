// Day 7 : Objects

// Task/Activities :

// Activity 1 : Object Creation and Access

// Task 1 : Create an object representing a book with properties like title, author, and year, and log the object to the console.

// Task 2 : Access and log the title and author properties of the book object.


// Task 1 Solution : 

const Book = {
    title: "Science",
    author: "Suraj Verma",
    year: "2021"
}

console.log(Book);


// Task 2 Solution : 

console.log(Book.title);

console.log(Book.author);


// *****************************************************************************************

// Activity 2 : Object Methods

// Task 3 : Add a method to the book object that returns a string with the books title and author, and log the result of calling this method.

// Task 4 : Add a method to the book object that takes a parameter (year) and updates the books year property, then log the updated object.


// Task 3 Solution : 

let Book2 = {
    title: "English",
    author: "Suraj Seth",
    printme: function () {
        console.log(`The title of this book is ${this.title} and author is ${this.author}`);
    }
}

Book2.printme()


// Task 4 Solution : 

let book3 = {
    Age: 1997,
    ageUpdate: function (y) {
        this.Age = y
    }
}

book3.ageUpdate(1999)

console.log(book3.Age);


// ****************************************************************************************

// Activity 3 : Nested Objects

// Task 5 : Create a nested object representing a library with properties like name and books (an array of books objects), and log the library object to the console.

// Task 6 : Access and log the name of the library and the titles of all the books in the library.


// Task 5 Solution : 

const library = {
    name: "City Library",
    books: [
        {
            title: "To Kill a Mockingbird",
            author: "Harper Lee",
            yearPublished: 1960
        },
        {
            title: "1984",
            author: "George Orwell",
            yearPublished: 1949
        },
        {
            title: "The Great Gatsby",
            author: "F. Scott Fitzgerald",
            yearPublished: 1925
        }
    ]
};

console.log(library);


// Task 6 Solution : 

console.log(library.name);

for (let i = 0; i < library.books.length; i++) {
    console.log(library.books[i].title);
}


// **************************************************************************************

// Activity 4 : The this Keyword

// Task 7 : Add a method to the book object that uses the this keyword to return a string with the books title and year, and log the result of calling this method.


// Task 7 Solution : 

let thisObj = {
    title : "The Great Gatsby",
    yearPublished: 1925,
    printing : function () {
        console.log(`The title of book is ${this.title} and year is ${this. yearPublished}`);
    }
}

thisObj.printing()


// ******************************************************************************************

// Activity 5 : Object Iteration

// Task 8 : Use a for...in loops to iterate over the properties of the book object and log each property and its value.

// Task 9 : Use Object.keys and Object.values methods to log all the keys and values of the book object.


// Task 8 Solution : 

let anotherBook = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    yearPublished: 1960
}

for (const key in anotherBook) {
   console.log(`${key} : ${anotherBook[key]}`);
}


// Task 9 Solution : 

let anotherBook2 = {
    title: "1984",
    author: "George Orwell",
    yearPublished: 1949
}

console.log(`Keys : ${Object.keys(anotherBook2)}`);

console.log(`Values : ${Object.values(anotherBook2)}`);