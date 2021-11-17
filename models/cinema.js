const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.filmsByTitle = function () {
  let titles = [];
  this.films.forEach(
    (film) => {
    const title = film.title;
    titles.push(title);
  })
  return titles;
};

Cinema.prototype.findFilmByTitle = function (title) {
  const result = this.films.find((film) => {
    return film.title === title;
  })
  return result;
};

// Cinema.prototype.filterByGenre = function (genre) {
//   const result = this.films.filter((film) => {
//     return film.genre === genre;
//   })
//   return result;
// };

Cinema.prototype.checkForYear = function (year) {
  const result = (film) => film.year === year;
  return this.films.some(result);
};

Cinema.prototype.checkNoFilmsOfYear = function (year) {
  const result = (film) => film.year !== year;
  return this.films.some(result);
};

Cinema.prototype.checkAllFilmsOverLength = function (length) {
  const result = (film) => film.length > length;
  return this.films.every(result);
};

Cinema.prototype.totalRunningTime = function () {
  const total = this.films.reduce((runningTotal, film) => {
  return runningTotal + film.length;
}, 0);
  return total;
};

Cinema.prototype.filterByProperty = function (property, value) {
  const result = this.films.filter((film) => {
    return film[property] === value;
  })
  return result;
};

module.exports = Cinema;



