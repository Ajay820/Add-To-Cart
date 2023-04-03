import React from 'react'

import { NavLink } from 'react-router-dom'

export const Header = () => {
  return (
    <nav className="flex justify-around m-5 text-xl">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/cart" className="">Cart</NavLink>
    </nav>
  )
}
