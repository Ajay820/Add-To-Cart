import React from 'react'

import { Header } from './comoponents/Header'

import { Router } from "./Allroutes/Router"

export const App = () => {
  return (
    <div>
        <Header />
        <Router />   
    </div>
  )
}
