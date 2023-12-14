
// npm test CommonJS
// const { template } = require('@babel/core')
// const { getItemsOfCurrentPage, getTotalPages } = require('./lib/paginate.js')
// const products = require('./data/products.js')

// browser ES module
import { getItemsOfCurrentPage, getTotalPages } from './lib/paginate.js'
import { products } from './data/products.js'

function paginateManagement(items, rows) {


return {
  showPageNumbers,
  pageHandler
}
}


// npm test CommonJS
// module.exports = paginateManagement

// browser ES module
export { paginateManagement }
const { showPageNumbers,  pageHandler } =
    paginateManagement(products, 10)
showPageNumbers()
pageHandler()
