import { Suspense, lazy } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'

// const Home = lazy(() => import('./pages/Home'))
// const About = lazy(() => import('./pages/About'))

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          exact
          element={
            <Suspense fallback={<p>Loading..</p>}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/about"
          exact
          element={
            <Suspense fallback={<p>Loading..</p>}>
              <About />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}
