import React, { useState } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { FaBars, FaTimes } from 'react-icons/fa'; 
import { IoLogInOutline } from "react-icons/io5";
import {Link} from 'react-router-dom'
import './Navbar.css'
import logo from './T.png'
import DarkMode from '../DarkMode/DarkMode';

const ResponsiveNavbar = () => {

    const [expanded, setExpanded] = useState(false); 

    const toggleNavbar = () => setExpanded(!expanded);


  return (
    <> 

<Navbar  expanded={expanded} expand="xl" style={{backgroundColor:"var(--secondary-bg-color)"}} variant="light" sticky="top" className='' >
      <Container>
       <Navbar.Brand className=''>
        <img src={logo} alt="" className='img-fluid width' />
        </Navbar.Brand> 

        {/* Center Navigation Links */}
        <Navbar.Toggle 
           style={{outline:"none",boxShadow:"none",border:"none"}}
          aria-controls="navbar-nav"
          onClick={toggleNavbar} // Toggle function on click
          className="d-xl-none" // Only show on mobile (hidden on large screens)
        >
         
         <div className='d-flex align-items-center column-gap-2'>

          <div className=''> 
          <DarkMode/>
          </div>
          
          <div>
          {expanded ? <div className='icons-container'>
            <FaTimes className='' style={{color:"var(--primary-color)"}} size={24} />
          </div> : <div className='icons-container' >
          <FaBars size={24} style={{color:"var(--primary-color)"}}  />
            </div>}
        
          </div>
          
          </div>
        </Navbar.Toggle>

        <Navbar.Collapse  id="navbar-nav" className=" justify-content-center w-100 text-uppercase" >
          <Nav className="mx-auto">

            <Nav.Link > <Link to="/" className=' text-decoration-none  a' style={{color:"var(--secondary-color)"}}>Home</Link></Nav.Link>

            <Nav.Link href="#tailors"><Link to="/partner"className='text-decoration-none  a' style={{color:"var(--secondary-color)"}}>Partner With Us </Link></Nav.Link>

            <Nav.Link><Link to="/aboutus" className='text-decoration-none  a' style={{color:"var(--secondary-color)"}}>About Us</Link></Nav.Link> 

            <Nav.Link>
            <Link to="/contactus"className='text-decoration-none  a' style={{color:"var(--secondary-color)"}}>Contact Us</Link>
            </Nav.Link>

            <Nav.Link>
            <Link to="/faq"className='text-decoration-none  a' style={{color:"var(--secondary-color)"}}>FAQ</Link>
            </Nav.Link> 
            
          </Nav>
        </Navbar.Collapse>

        {/* Login/Register buttons, positioned on the right for large screens, center for small */}
        <Navbar.Collapse className="justify-content-end">
          <Nav className="d-none d-xl-flex">
            {/* <div className='d-flex justify-content-center align-items-center'>
            <IoLogInOutline className='' style={{width:"30px",height:"30px",color:"#ff7b7b"}} />
            <span className='text-uppercase' style={{color:"white"}}>Login</span>
            </div> */}
            
            {/* Laptop */}            
            <Nav.Link>
            <Link to="/login"className='text-decoration-none  a text-uppercase'style={{color:"var(--secondary-color)"}} >
             <div className='d-flex align-items-center'>
             <IoLogInOutline className='' style={{width:"30px",height:"30px",color:"var(--secondary-color)"}} />
             <span>Login</span>
             </div>
            </Link>
            </Nav.Link> 
          
          <div>
          <DarkMode/>

          </div>
          </Nav>


          {/* mobile */}
          <Nav className="d-flex d-xl-none justify-content-center">
           

            <Nav.Link>
            <Link to="/login"className='text-decoration-none   text-uppercase'style={{color:"var(--secondary-color)"}} >
            <div className='d-flex  pb-3'>
            <div className='a d-flex align-items-center'>
            <span className=' text-uppercase'style={{color:"var(--secondary-color)"}} >Login</span>
            <span className=''><IoLogInOutline className='' style={{width:"30px",height:"30px",color:"var(--secondary-color)"}} /></span>
            </div>
            </div>
            </Link>
            </Nav.Link> 
      

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </>
  )
}

export default ResponsiveNavbar









