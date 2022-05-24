// Dependencies
import { Route, Routes } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

// Custom Dependencies
import { Footer } from '../components/common/Footer'
import { MainNavbar } from '../components/common/MainNavbar'
import { Showcase } from '../components/common/Showcase'
import { HomePage } from '../components/pages/Home/Home'
import { MoviesAnioPage } from '../components/pages/Movies/Anio'
import { SearchPage } from '../components/pages/Movies/Search'
import { MoviesTopsPage } from '../components/pages/Movies/Tops'
import { MoviesUserPage } from '../components/pages/Movies/User'
import { NotFound } from '../components/pages/NotFound/NotFound'

export const OtherRoutes = () => {
  const location = useLocation()

  return (
    <div className="bg-dark d-flex flex-column min-vh-100">
      <MainNavbar />
      {location.pathname === '/' && <Showcase />}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/user" element={<MoviesUserPage />} />
        <Route path="/anio" element={<MoviesAnioPage />} />
        <Route path="/tops" element={<MoviesTopsPage />} />
        <Route exact path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}
