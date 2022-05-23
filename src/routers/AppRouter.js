import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Dashboard } from '../components/pages/Dashboard/Dashboard'
import { Login } from '../components/pages/Login/Login'

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/" element={<Dashboard />}></Route>
      </Routes>
    </BrowserRouter>
  )
}
