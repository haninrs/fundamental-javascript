class Product {
    constructor(name){
        this.productName = name
        // this.price = price
    }

}

class Book extends Product {
    constructor (author,page){
        // this.productName
        // this.price
        super('Book') // buat dapet warisan dri product (wajib)  | constructor (name) -> super (name 'book')
        this.author = author
        this.page = page
    }
}

class TereLiye extends Book{
    constructor(title,page){
        super("Tere Liye",page)   // (author,page)super itu pengganti constructor di parent nya
        this.title = title
    }
}

let book1 = new TereLiye("Bumi", 100)
// const 

console.log(book1)
console.log('\n')
// console.log(book2)


console.log(book1 instanceof TereLiye)
console.log(book1 instanceof Book)
console.log(book1 instanceof Product)