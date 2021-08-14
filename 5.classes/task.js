
class PrintEditionItem {

    _state = 100
    type = null

    constructor(name, releaseDate, pagesCount) {
        this.name = name
        this.releaseDate = releaseDate
        this.pagesCount = pagesCount
    }

    set state(value) {
        this._state = Math.min(Math.max(value, 0), 100)
    }

    get state() {
        return this._state
    }

    fix() {
        this.state *= 1.5
    }
}

class Magazine extends PrintEditionItem {

    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = 'magazine'
    }
}

class Book extends PrintEditionItem {

    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = 'book'
        this.author = author
    }
}

class NovelBook extends Book {

    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'novel'
    }
}

class FantasticBook extends Book {

    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'fantastic'
    }
}

class DetectiveBook extends Book {

    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'detective'
    }
}

class Library {

    books = []

    constructor(name) {
        this.name = name
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book)
        }
    }

    findBookBy(type, value) {
        let book = this.books.find((e) => e[type] === value)
        return book == undefined ? null : book
    }

    giveBookByName(name) {
        let index = this.books.findIndex((e) => e.name === name)
        if (index == -1) return null;
        let book = this.books[index]
        this.books.splice(index, 1)
        return book
    }

}

class Subject {
    constructor(name, mark) {
        this.name = name
        this.mark = mark
    }
}

class Student {

    constructor(name, gender, age) {
        this.name = name
        this.gender = gender
        this.age = age
        this.subjects = []
    }

    addMark(mark, subject) {
        if (this.subjects === undefined) {this.subjects = []}
        this.subjects.push(new Subject(subject, mark))
    }

    getAverageBySubject(subjectName) {
        let subjects = this.subjects.filter((e) => e.name === subjectName)
        if (subjects.length == 0) return 0;
        let sum = 0;
        for (let e of subjects) sum += e.mark;
        return sum / subjects.length;
    }

    getAverage() {
        let sum = 0;
        for (let e of this.subjects) sum += e.mark;
        return sum / this.subjects.length;
    }

    exclude(reason) {
        delete this.subjects
        this.excluded = reason
    }

}