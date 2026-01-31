import React, { useState, useRef } from 'react'
import Header from './components/Header'
import BookSearch from './components/BookSearch'
import BookListings from './components/BookListings'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import BookstoreAboutPreview from './components/About'
import AboutUs from './components/About'
import About from './components/About'

const App = () => {
  const [searchFilters, setSearchFilters] = useState(null)
  const booksRef = useRef(null)

  const handleSearch = (filters) => {
    setSearchFilters(filters)
    if (booksRef.current) {
      booksRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div className='w-full overflow-hidden'>
      <ToastContainer />
      <Header />
      <About />
      <BookSearch onSearch={handleSearch} />
      <div ref={booksRef}>
        <BookListings filters={searchFilters} />
      </div>
     <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default App