function shelfBook(book, shelf) {
  if (shelf.length === 3) return shelf
  return shelf.unshift(book)
}

function unshelfBook(title, shelf) {
  return shelf.filter(book => book.title !== title)
}

function listTitles(shelf) {
  return shelf.map(book => book.title).join(', ')
}

function searchShelf(shelf, title) {
  return shelf.some(book => book.title === title)
}

module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};