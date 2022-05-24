import { Route, Routes } from 'react-router-dom'
import { Dashboard } from '../components/pages/Dashboard/Dashboard'
import { SearchPage } from '../components/pages/Movies/Search'

export const DashboardRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </>
  )
}
