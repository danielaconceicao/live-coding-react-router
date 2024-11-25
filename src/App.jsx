import {BrowserRouter, Route, Routes}  from 'react-router-dom'
import Home from './pages/Home'
import Book from './pages/Book'
import About from './pages/About'
import Contacts from './pages/Contacts'

import './App.css'
import DefaultLayout from './pages/DefaultLayout'

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout/>}>
            <Route path='/' element={<Home />} />
            <Route path='/books' element={<Book />} />
            <Route path='/about' element={<About />} />
            <Route path='/contacts' element={<Contacts />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
