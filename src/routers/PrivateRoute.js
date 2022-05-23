import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { MainContext } from '../context/MainContext'

export const PrivateRoute = ({ children }) => {
  const { user } = useContext(MainContext)

  return user.logged ? children : <Navigate to="/login" />
}
