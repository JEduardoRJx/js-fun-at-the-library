function createTitle(title) {
  return `The ${title}`
}

function buildMainCharacter(name, age, pronouns) {
  return {
    name,
    age,
    pronouns
  }
}

function saveReview(review, reviews) {
  if (reviews.includes(review)) {
    return reviews
  }
  return reviews.push(review)
}

function calculatePageCount(title) {
  const titleLength = title.length
  return titleLength * 20
}

function writeBook(bookTitle, bookCharacter, genre) {
  const pageCount = calculatePageCount(bookTitle)
  return {
    title: bookTitle,
    mainCharacter: bookCharacter,
    pageCount,
    genre
  }
}

function editBook(book) {
  const newPageCount = book.pageCount * 0.75
  book.pageCount = newPageCount
  return {
    ...book
  }
}

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}