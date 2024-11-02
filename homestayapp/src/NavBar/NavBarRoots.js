import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from '../Common/Home'
import About from './../Common/About';
import Contact from './../Common/Contact';
export default function NavBarRoots() {
  return (
    <div>
        <Routes>
            <Route path='/' Component={Home} />
            <Route path='/About' Component={About} />
            <Route path='/Contact' Component={Contact}/>
        </Routes>
    </div>
  )
}
