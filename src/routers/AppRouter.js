// Dependencies
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// Custom Dependencies
import { Login } from '../components/pages/Login/Login'
import { OtherRoutes } from './OtherRoutes'
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        ></Route>
        <Route
          path="/*"
          element={
            <PrivateRoute>
              <OtherRoutes />
            </PrivateRoute>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  )
}
