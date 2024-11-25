import {BrowserRouter, Route, Routes}  from 'react-router-dom'
import Home from './pages/Home'
import Book from './pages/Book'
import About from './pages/About'
import Contacts from './pages/Contacts'

import './App.css'

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/books' element={<Book />} />
          <Route path='/about' element={<About />} />
          <Route path='/contacts' element={<Contacts />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
