import React from 'react'
import { Link } from 'react-router-dom'
import './navigation.css'

const Navigation = () => {
  return (
   
<div className='navigation-wrapper'>
    <ul className='navigation-list'>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/countries'>Countries</Link></li>
        <li><Link to='/flags'>Countries Flags</Link></li>
        <li><Link to='/search'>Search</Link></li>
    </ul>

    </div>
  )
}

export default Navigation