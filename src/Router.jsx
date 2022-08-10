import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import NavBar from './components/NavBar'
const NavBar = React.lazy(() => import('./components/NavBar'))
const Home = React.lazy(() => import('./pages/Home'))

const AppRouter = () => {
  return (
    <Suspense fallback={<h1>LOADING</h1>}>
      <Router>
          <NavBar />
          <Routes>
              <Route element={<Home />} path="/"/>
          </Routes>
      </Router>
    </Suspense>
  )
}

export default AppRouter