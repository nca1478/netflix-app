import { types } from '../types/types'

const initialState = {
  movies: [],
}

export const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.movieLogout:
      return { ...initialState }

    default:
      return state
  }
}
