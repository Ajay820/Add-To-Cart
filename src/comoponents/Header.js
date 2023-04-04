import React from 'react'

import { NavLink } from 'react-router-dom'

export const Header = () => {
  return (
    <nav className="flex justify-around m-5 text-xl">
        <NavLink to="/" className="text-white rounded-xl bg-black p-2">Home</NavLink>
        <NavLink to="/cart" className="bg-black rounded-xl text-white p-2">Cart</NavLink>
    </nav>
  )
}
