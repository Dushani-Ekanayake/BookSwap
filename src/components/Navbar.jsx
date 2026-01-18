import React, { useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import SignIn from './Auth/SignIn'
import SignUp from './Auth/SignUp'

const Navbar = () => {
  const [_showMobileMenu, _setShowMobileMenu] = useState(false)
  const [showSignIn, setShowSignIn] = useState(false)
  const [showSignUp, setShowSignUp] = useState(false)

  useEffect(() => {
    if (_showMobileMenu) {
      document.body.style.overflow = 'hidden' // stop scroll the webpage
    } else {
      document.body.style.overflow = 'auto' // allow again scroll the webpage
    }
    return () => {
      document.body.style.overflow = 'auto' // cleanup function to reset overflow when component unmounts
    }
  }, [_showMobileMenu])

  const handleSwitchToSignUp = () => {
    setShowSignIn(false)
    setShowSignUp(true)
  }

  const handleSwitchToSignIn = () => {
    setShowSignUp(false)
    setShowSignIn(true)
  }

  return (
    <>
      <div className='absolute top-0 left-0 w-full z-10'>
        <div className='container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent'>
          <img src={assets.logo} alt="logo" />
          <ul className='hidden md:flex gap-7 text-white'>
            <a href="#Header" className='cursor-pointer hover:text-gray-400'>Home</a>
            <a href="#About" className='cursor-pointer hover:text-gray-400'>About</a>
            <a href="#Projects" className='cursor-pointer hover:text-gray-400'>Project</a>
            <a href="#Testimonails" className='cursor-pointer hover:text-gray-400'>Testimonails</a>
          </ul>
          <button 
            onClick={() => setShowSignUp(true)}
            className='hidden md:block bg-white px-8 py-2 rounded-full hover:bg-gray-100 transition'
          >
            Sign up
          </button>
          <img 
            onClick={() => _setShowMobileMenu(true)} 
            src={assets.menu_icon} 
            className='md:hidden w-7 cursor-pointer' 
            alt="menu" 
          />
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${_showMobileMenu ? 'fixed w-full' : 'h-0 w-0'} right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}>
          <div className='flex justify-end p-6 cursor-pointer'>
            <img 
              onClick={() => _setShowMobileMenu(false)} 
              src={assets.cross_icon} 
              className='w-6' 
              alt="close" 
            />
          </div>
          <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
            <a onClick={() => _setShowMobileMenu(false)} href="#Header" className='px-4 py-2 rounded-full inline-block'>Home</a>
            <a onClick={() => _setShowMobileMenu(false)} href="#About" className='px-4 py-2 rounded-full inline-block'>About</a>
            <a onClick={() => _setShowMobileMenu(false)} href="#Projects" className='px-4 py-2 rounded-full inline-block'>Project</a>
            <a onClick={() => _setShowMobileMenu(false)} href="#Testimonails" className='px-4 py-2 rounded-full inline-block'>Testimonials</a>
          </ul>
          <button 
            onClick={() => {
              _setShowMobileMenu(false)
              setShowSignUp(true)
            }}
            className='mt-6 mx-auto block bg-blue-500 text-white px-8 py-2 rounded-full hover:bg-blue-600 transition'
          >
            Sign up
          </button>
        </div>
      </div>

      {/* Auth Modals */}
      {showSignIn && (
        <SignIn 
          onClose={() => setShowSignIn(false)} 
          onSwitchToSignUp={handleSwitchToSignUp}
        />
      )}
      {showSignUp && (
        <SignUp 
          onClose={() => setShowSignUp(false)} 
          onSwitchToSignIn={handleSwitchToSignIn}
        />
      )}
    </>
  )
}

export default Navbar