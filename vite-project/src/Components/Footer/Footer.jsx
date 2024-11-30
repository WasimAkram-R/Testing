import React from 'react'
import './Footer.css'
import { FaFacebookF } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaArrowUp } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
const Footer = () => {
  
    const navigate=useNavigate('')


  return (
    <div className="container-fluid uppercontainer " id="scrollTarget"  style={{backgroundColor:"#151515"}}>
    <div className="container">
       <div className="row py-4 row-gap-4">
         <div className="col-md-6">

         <div className='text-white d-flex gap-3'>

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
      <p className='pt-3 text-white' style={{fontSize:"14px"}}>Copyright @ 2024 <span className='fw-medium'>TailorsHub.</span> All rights reserved.</p>
         <button  onClick={() => navigate('/terms')} className='bg-transparent border-0 text-decoration-underline' style={{fontSize:"14px",color:"#c4c4c5"}}>Terms And Conditions</button><br />
         <button  onClick={() => navigate('/policy')} className='bg-transparent border-0 text-decoration-underline' style={{fontSize:"14px",color:"#c4c4c5"}}>Privacy And Policy</button>
         </div>
      </div>

         <div className="col-md-6 ">
            {/* <form action="" className='footerform'>
              <div>
              <input type="tel" placeholder='Enter Your Number'className='w-75  form-control footerinput'/>
              </div>
               <div>
               <input type="email" placeholder='Enter your Email'className='w-75 my-3  form-control footerinput'/>
               <button type="submit" className='px-4 py-2 rounded-1 border-0 text-uppercase' style={{backgroundColor:"#ff7b7b",color:"white"}}>Submit</button>
               </div>
            </form> */}
            <h6 className='text-white'>EMAIL : <span style={{color:"#c4c4c5"}}>abc@gmail.com</span></h6>
            <h6 className='text-white py-1'>NUMBER : <span style={{color:"#c4c4c5"}}>XXXXXXXXXX</span></h6>
            <h6 className='text-white'>ADDRESS : <span style={{color:"#c4c4c5"}}>Silaiman,Madurai</span></h6>
         </div>

       </div>
      
      
    </div>



    {/* <FiArrowUpCircle  className="upper"
      onClick={() => {
       
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }}/> */}
      <div className='icon-container upper'>
        <FaArrowUp  style={{ width: "24px", height: "24px", color: "white" }}className="uppe"
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