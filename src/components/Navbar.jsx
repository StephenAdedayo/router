import React from 'react'
import { Link } from 'react-router-dom'



const Navbar = () => {
  return (
   <nav className='w-full fixed top-0 right-0 left-0 p-5 '>
    <div className='flex justify-between items center'>
     <img src="" alt="" />

       <ul className='space-x-10 flex'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/testimonials">Testimonials</Link></li>
        <li><Link to="/contact">Contact</Link></li>
    

       </ul>

<div className='space-x-5'>
       <button><Link to="/login">Login</Link></button>
       <button><Link to="/register">Register</Link></button>
       </div>
    </div>


   </nav>
  )
}

export default Navbar
