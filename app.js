function filterBooks(...books) {
  const filteredBooks = books.filter(book => book.includes('к'));
  const nonFilteredBooks = books.filter(book => !book.includes('к'));
  console.log('Filtered books:', filteredBooks);
  console.log('Non-filtered books:', nonFilteredBooks);
}

filterBooks('красная шапочка', 'подсознание', 'киберлинг', 'комета', 'клои', 'чудеса', 'лолита')