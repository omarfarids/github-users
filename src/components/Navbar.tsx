import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/navbar.css'

const Navbar = () => {



    return (
        <nav className='navbar'>
            <ul className='link-group'>
                <Link to='/'><li className='nav-link'>Home</li></Link>
                <li className='nav-link'><Link to='/history'>History</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar