export const getMoviesByRating = (rating = 0, movies) => {
  return movies.filter((movie) => movie.rating === rating)
}
