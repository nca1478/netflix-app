import { movieList } from '../data/data'

export const getMoviesByTitle = (title = '') => {
  if (title.length === 0) {
    return []
  }

  title = title.toLowerCase()
  return movieList.filter((movie) => movie.title.toLowerCase().includes(title))
}
