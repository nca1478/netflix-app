export const getMoviesByYear = (year = 0, movies) => {
  return movies.filter((movie) => movie.year === year)
}
