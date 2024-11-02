import React from 'react'
import { Link } from 'react-router-dom'

export default function MainNavBar() {
  return (
    <div>
      <ul>
        <li><Link to="/" >Home</Link></li>
        <li><Link to="/About" >About</Link></li>
        <li><Link to="/Contact" >Contact</Link></li>
      </ul>
    </div>
  )
}
