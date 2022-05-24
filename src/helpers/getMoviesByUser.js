export const getMoviesByUser = (userId = 0, movies) => {
  return movies.filter((movie) => movie.userId === userId)
}
