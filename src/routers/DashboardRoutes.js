import { Route, Routes } from 'react-router-dom'
import { Dashboard } from '../components/pages/Dashboard/Dashboard'
import { MoviesAnioPage } from '../components/pages/Movies/Anio'
import { SearchPage } from '../components/pages/Movies/Search'
import { MoviesTopsPage } from '../components/pages/Movies/Tops'
import { MoviesUserPage } from '../components/pages/Movies/User'

export const DashboardRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/user" element={<MoviesUserPage />} />
        <Route path="/anio" element={<MoviesAnioPage />} />
        <Route path="/tops" element={<MoviesTopsPage />} />
      </Routes>
    </>
  )
}
