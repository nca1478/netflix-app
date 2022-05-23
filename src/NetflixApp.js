import React, { useReducer } from 'react'
import { MainContext } from './context/MainContext'
import { authReducer } from './reducers/authReducer'
import { combineReducers } from './reducers/combineReducers'
import { AppRouter } from './routers/AppRouter'

const init = () => {
  return {
    user: JSON.parse(localStorage.getItem('user')) || { logged: false },
  }
}

export const NetflixApp = () => {
  const [{ user }, dispatch] = useReducer(
    combineReducers({
      user: authReducer,
    }),
    [],
    init
  )

  return (
    <MainContext.Provider value={{ user, dispatch }}>
      <AppRouter />
    </MainContext.Provider>
  )
}
