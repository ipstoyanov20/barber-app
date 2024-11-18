import React from 'react'

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-black text-white">
  {/* Left Section */}
  <div className="flex items-center space-x-6">
    <img src="/favicon.ico" alt="Logo" className="h-8 w-8" />
    <a href="#" className="text-lg font-semibold hover:text-red-500">
      Home
    </a>
    <a href="#" className="text-lg font-semibold hover:text-red-500">
      Book
    </a>
  </div>

  {/* Right Section */}
  <div className="flex items-center space-x-6">
    <a href="#" className="text-lg font-semibold hover:text-red-500">
      About Us
    </a>
    <a href="#" className="text-lg font-semibold hover:text-red-500">
      Services
    </a>
    <a href="#" className="text-lg font-semibold hover:text-red-500">
      Contact
    </a>
  </div>
</nav>


  )
}

export default Navbar
