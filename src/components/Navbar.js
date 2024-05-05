import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
      <Link to='/signup'>Sign up</Link>
      <Link to='/login'>Log in</Link>
    </div>
  )
}

export default Navbar
