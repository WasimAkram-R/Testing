import React, { useState } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { FaBars, FaTimes } from 'react-icons/fa'; 
import { IoLogInOutline } from "react-icons/io5";
import {Link} from 'react-router-dom'
import './Navbar.css'
import logo from './T.png'

const ResponsiveNavbar = () => {

    const [expanded, setExpanded] = useState(false); 

    const toggleNavbar = () => setExpanded(!expanded);


  return (
    <> 

<Navbar  expanded={expanded} expand="xl" style={{backgroundColor:"#151515"}} variant="light" sticky="top" className='' >
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
       

          {expanded ? <div className='icons-container'>
            <FaTimes className='' style={{color:"#ff7b7b"}} size={24} />
          </div> : <div className='icons-container' >
          <FaBars size={24} style={{color:"#ff7b7b"}}  />
            </div>}
      
        </Navbar.Toggle>

        <Navbar.Collapse  id="navbar-nav" className=" justify-content-center w-100 text-uppercase" >
          <Nav className="mx-auto">

            <Nav.Link > <Link to="/" className=' text-decoration-none text-white a'>Home</Link></Nav.Link>

            <Nav.Link href="#tailors"><Link to="/partner"className='text-decoration-none text-white a'>Partner With Us </Link></Nav.Link>

            <Nav.Link><Link to="/aboutus" className='text-decoration-none text-white a'>About Us</Link></Nav.Link> 

            <Nav.Link>
            <Link to="/contactus"className='text-decoration-none text-white a'>Contact Us</Link>
            </Nav.Link>

            <Nav.Link>
            <Link to="/faq"className='text-decoration-none text-white a'>FAQ</Link>
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
            <Link to="/login"className='text-decoration-none text-white a text-uppercase'>
             <div className='d-flex align-items-center'>
             <IoLogInOutline className='text-white' style={{width:"30px",height:"30px"}} />
             <span>Login</span>
             </div>
            </Link>
            </Nav.Link> 
          
          </Nav>

          {/* mobile */}
          <Nav className="d-flex d-xl-none justify-content-center">
           

            <Nav.Link>
            <Link to="/login"className='text-decoration-none text-white  text-uppercase'>
            <div className='d-flex align-items-cente pb-3'>
            <div className='a d-flex align-items-center'>
            <span className='text-white text-uppercase'>Login</span>
            <span className=''><IoLogInOutline className='text-white' style={{width:"30px",height:"30px"}} /></span>
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









