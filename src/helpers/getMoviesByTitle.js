export const getMoviesByTitle = (title = '', movies) => {
  if (title.length === 0) {
    return []
  }

  title = title.toLowerCase()
  return movies.filter((movie) => movie.title.toLowerCase().includes(title))
}
