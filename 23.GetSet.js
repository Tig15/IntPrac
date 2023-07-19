class BookInfo{
    constructor(title, author){
        this._title = title
        this._author = author
    }

    get title(){
        return this._title.toUpperCase()
    }

    set author(author){
        if(typeof author === "string"){
            this._author = author
        } else{
            console.log("Author must be in String")
        }
    }

    get author(){
        return this._author
    }
}

const book1 = new BookInfo("Train Lost in Loop", "Torto")
const book2 = new BookInfo("The Enigmatic Prism", "44")

console.log(book1.title)
console.log(book1.author)

console.log(book2.title)
console.log(book2.author)