import { types } from '../types/types'

export const movieUpdateRating = (data, dispatch) => {
  dispatch({
    type: types.movieUpdateRating,
    payload: data,
  })
}

export const movieLogout = (dispatch) => {
  dispatch({
    type: types.movieLogout,
  })
}
