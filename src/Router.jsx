import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/Home'

const AppRouter = () => {
  return (
    <Router>
        <NavBar />
        <Routes>
            <Route element={<Home />} path="/"/>
        </Routes>
    </Router>
  )
}

export default AppRouter