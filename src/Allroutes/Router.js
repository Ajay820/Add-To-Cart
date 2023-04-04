import { Home } from "../pages/Home";

import { Cart } from "../pages/Cart";

import { Routes,Route } from "react-router-dom";

import React from 'react'

export const Router = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
    </Routes>
  )
}
