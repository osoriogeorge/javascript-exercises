const books = [
  {
    title: "Book",
    author: "Name",
  },
  {
    title: "Book2",
    author: "Name2",
  },
];
const getTheTitles = function () {
  const titlesOfBooks = books.map((book) => book.title);
  console.log(titlesOfBooks);
  return titlesOfBooks;
};

// Do not edit below this line
module.exports = getTheTitles;
