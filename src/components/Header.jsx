import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='container'>
        <ul className='flex gap-4'>
            <li><Link to="/">All</Link></li>
            <li><Link to="/category">Category</Link></li>
            <li><Link to="/technology">Technology</Link></li>
        </ul>
    </div>
  )
}

export default Header