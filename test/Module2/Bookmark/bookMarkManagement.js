const { template } = require("@babel/core")
const { re } = require("@babel/core/lib/vendor/import-meta-resolve")

class BookMark {
  constructor(isbn, totalPages = 0) {
    this.isbn = isbn
    this.totalPages = totalPages
    this.bookMarks = []
  }
  addBookMark(pageNumber) {
    if (pageNumber > 1 && pageNumber < this.totalPages) {
      this.bookMarks.push(pageNumber)
      return this.bookMarks.length
    } 
    return this.bookMarks.length
  }

  removeBookMark(pageNumber) {
      if(this.bookMarks.includes(pageNumber)){
        this.bookMarks = this.bookMarks.filter(a => a != pageNumber)
        return pageNumber
      } 
  }

  goToFirstBookMark() {
    if (this.bookMarks.length != 0) {
      return this.bookMarks[0]
    }
  }
  goToLastBookMark() {
    if (this.bookMarks.length != 0) {
      return this.bookMarks[this.bookMarks.length - 1]
    }
  }
  getBookMarks() {
    return this.bookMarks
  }
}

module.exports = BookMark
