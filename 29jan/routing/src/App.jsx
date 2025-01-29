import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import About from './components/About'
import Insert from './components/Insert'
import Details from './components/Details'
import Dashboard from './components/Dashboard'
import Settings from './components/Settings'
import NoPage from './components/NoPage'

const App = () => {
  return (
    <>
      <Routes>
            <Route path='/' element={<Layout />}>
              <Route index element={ <Home />} />
              <Route path='home' element={ <Home />} />
              <Route path='about' element={ <About />} >
                  <Route path='details' element={ <Details />} />
                  <Route index element={ <Details />} />
                  <Route path='dashboard' element={ <Dashboard />} />
                  <Route path='settings' element={ <Settings />} />
              </Route>
              <Route path='*' element={<NoPage />} />
              <Route path='insert' element={ <Insert />} />
            </Route>
      </Routes>
    </>
  )
}

export default App
