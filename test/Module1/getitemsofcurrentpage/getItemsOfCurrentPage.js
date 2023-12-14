const { template } = require("@babel/core")

function getItemsOfCurrentPage(allItems, currentPage, rowsPerPage) {
  if (allItems === null || allItems === undefined) {
    return undefined
  } else if (allItems.length === 0) {
    return []
  } else if (rowsPerPage <= 0) {
    return allItems
  } else if (currentPage <= 0) {
    return allItems
  }
  
}
module.exports = getItemsOfCurrentPage
