// Dependencies
import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { MainContext } from '../context/MainContext'

export const PublicRoute = ({ children }) => {
  const { user } = useContext(MainContext)

  return user.logged ? <Navigate to="/" /> : children
}
