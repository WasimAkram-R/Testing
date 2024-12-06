import React from 'react'
import './Footer.css'
import { FaFacebookF } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaArrowUp } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
const Footer = () => {
  
    const navigate=useNavigate('')


  return (
    <div className="container-fluid uppercontainer " id="scrollTarget"  style={{backgroundColor:"var(--secondary-bg-color)"}}>
    <div className="container">
       <div className="row py-4 row-gap-4">
         <div className="col-md-6">

         <div className=' d-flex gap-3' style={{color: "var(--secondary-color)"}} >

      {/* Facebook Icon with Square Border */}
      <div className='icon-container'>
        < FaFacebookF style={{ width: "24px", height: "24px", color: "white" }} />
      </div>  

      {/* WhatsApp Icon with Square Border */}
      <div className='icon-container'>
        <IoLogoWhatsapp style={{ width: "24px", height: "24px", color: "white" }} />
      </div>
    </div>
     
      <div className=''>
      <p className='pt-3 '  style={{fontSize:"14px",color: "white" }}>Copyright @ 2024 <span className='fw-medium'>TailorsHub.</span> All rights reserved.</p>
         <button  onClick={() => navigate('/terms')} className='bg-transparent border-0 text-decoration-underline' style={{fontSize:"14px",color:"var(--text-color"}}>Terms And Conditions</button><br />
         <button  onClick={() => navigate('/policy')} className='bg-transparent border-0 text-decoration-underline' style={{fontSize:"14px",color:"var(--text-color"}}>Privacy And Policy</button>
         </div>
      </div>

         <div className="col-md-6 ">
       
            <h6 className=''style={{color:"white"}}>EMAIL : <span style={{color:"var(--text-color"}}>abc@gmail.com</span></h6>
            <h6 className=' py-1'style={{color:"white"}}>NUMBER : <span style={{color:"var(--text-color"}}>XXXXXXXXXX</span></h6>
            <h6 className=''style={{color:"white"}}>ADDRESS : <span style={{color:"var(--text-color"}}>Silaiman,Madurai</span></h6>
         </div>

       </div>
      
      
    </div>



      <div className='icon-container upper'>
        <FaArrowUp  style={{ width: "24px", height: "24px", color: "white" }}className=""
      onClick={() => {
       
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }}/>
      </div>

</div>
  )
}

export default Footer