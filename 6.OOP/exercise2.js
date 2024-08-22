// ● Create a program to create transaction

// ● Product Class
// ○ Properties
// ■ Name
// ■ Price

// ● Transaction Class
// ○ Properties
// ■ Total
// ■ Product
// ● All product data
// ● Qty
// ○ Add to cart method → Add product to transaction
// ○ Show total method → Show total current transaction
// ○ Checkout method → Finalize transaction, return transaction data

// ● Product Class
class Product {
  name = "";
  price = 0;

  constructor(name, price) {
    // property (name, price) || panngil class Product(name,price)
    this.name = name;
    this.price = price;
  }
}

// list product
const product1 = new Product("apple", 4000);
const product2 = new Product("orange", 2000);
const product3 = new Product("pinaple", 5000);
const product4 = new Product("kiwi", 3000);
console.log(product1, product2, product3, product4);

// ● Transaction Class
class Transaction {
  #total = 0;
  products = [];

  // ○ Add to cart method → Add product to transaction
  addToCart(product, jumlah) {
    // product ini kita isi dengan product1,product2,product3,product4
    product.qty = jumlah; // add property ke object product (product1, product2, product3 dst)
    this.products.push(product); // products(array) kita push dengan item
  }

  // ○ Show total method → Show total current transaction
  getTotal(total) {
    this.products.forEach((item) => {
      this.#total += item.price * item.qty;
      console.log(`${item.name} : ${item.price} x ${item.qty} = ${item.price * item.qty}`);
    });
    console.log("--------------------------------");
    console.log(`Total : ${this.#total}`);
    console.log("\n");
  }

  // ○ Checkout method → Finalize transaction, return transaction data
  checkOut(money) {
    if (money < this.#total) {
      throw new Error("Uang anda tidak cukup");
    } else {
      console.log(`Cash : ${money}`);
      console.log(`Retrun : ${money - this.#total}`);
      console.log("---------Thank You :)-----------");
    }
    console.log("\n");
  }
}
const transaction1 = new Transaction();
transaction1.addToCart(product1, 2); // jalanin method addToCart
transaction1.addToCart(product2, 4);
transaction1.addToCart(product3, 3);
transaction1.addToCart(product4, 2);
transaction1.getTotal();
transaction1.checkOut(50000);

console.log(transaction1);
