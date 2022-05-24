// Dependencies
import React, { useEffect, useReducer } from 'react'

// Custom Dependencies
import { combineReducers } from './reducers/combineReducers'
import { movieReducer } from './reducers/movieReducer'
import { authReducer } from './reducers/authReducer'
import { MainContext } from './context/MainContext'
import { AppRouter } from './routers/AppRouter'
import { movieList } from './data/data'

const init = () => {
  return {
    user: JSON.parse(localStorage.getItem('user')) || { logged: false },
    movies: JSON.parse(localStorage.getItem('movies')) || movieList,
  }
}

export const NetflixApp = () => {
  const [{ user, movies }, dispatch] = useReducer(
    combineReducers({
      movies: movieReducer,
      user: authReducer,
    }),
    [],
    init
  )

  useEffect(() => {
    if (!user) return

    localStorage.setItem('user', JSON.stringify(user))
  }, [user])

  useEffect(() => {
    if (!movies) return

    localStorage.setItem('movies', JSON.stringify(movies))
  }, [movies])

  return (
    <MainContext.Provider value={{ user, movies, dispatch }}>
      <AppRouter />
    </MainContext.Provider>
  )
}
