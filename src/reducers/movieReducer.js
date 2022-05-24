import { types } from '../types/types'

const initialState = {
  movies: [],
}

export const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.movieUpdateRating:
      return state.map((movie) =>
        movie.id === action.payload.id
          ? {
              ...movie,
              rating: action.payload.newRating,
              userId: action.payload.userIdLogged,
              edit: false,
            }
          : movie
      )

    case types.movieLogout:
      return { ...initialState }

    default:
      return state
  }
}
