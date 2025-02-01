import React from 'react'
import firstLogo from '../../assets/logo.png';

const Navbar = () => {
  return (
    <nav className="bg-white-900 p-4">
    <div className="container mx-auto flex justify-left space-x-8 pl-4">
      <img src={firstLogo} alt="Logo 1" className="h-20 w-auto" />
    </div>
  </nav>
  )
}

export default Navbar