const { template } = require("@babel/core")
const { re } = require("@babel/core/lib/vendor/import-meta-resolve")

class BookStore {
  constructor() {
    this.stores = []
  }

  findBookIndex(isbn) {
    const findBook = this.stores.findIndex((book) => book.isbn === isbn)
    return findBook
  }

  addNewBook(isbn, stocks) {
    if (this.findBookIndex(isbn) === -1) {
      this.stores.push({ isbn: isbn, stocks: stocks })
      return stocks
    }
    return -1
  }

  sellBook(isbn, quantity) {
    const findBook = this.findBookIndex(isbn)
    if (findBook === -1) {
      return -1
    }
    const selectBook = this.stores[findBook]
    if (selectBook.stocks < quantity) {
      return 0
    } selectBook.stocks -= quantity
    return quantity
  }
}

module.exports = BookStore
