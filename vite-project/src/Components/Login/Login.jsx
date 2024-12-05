import React from 'react'
import './Login.css'

import { LiaUserLockSolid } from "react-icons/lia";
import { FaRegUser } from "react-icons/fa";
import { IoKeyOutline } from "react-icons/io5";
import { IoIosArrowRoundForward } from "react-icons/io";


//  import { GoLock } from "react-icons/go";
//  import { AiOutlineMail } from "react-icons/ai";

const Login = () => {
  
  return (
    
    <div className="container-fluid">
        <div className="container d-flex align-items-center justify-content-center">
        <div className="row justify-content-center
         column-gap-lg-5 column-gap-md-5  my-5">
         
        {/* Login Here */}

         <div className="col-md-5 col-10 p-4"style={{backgroundColor:"var(--secondary-bg-color)"}} >

           <form action=""className='formsform' >

           <div className='d-flex'>
               
               <div className='d-flex align-items-center'>
               <LiaUserLockSolid className='me-4' style={{width:"30px",height:"30px",color:"var(--secondary-color)" }}/>
               </div>
                 
               <div>
               <h6 className='fs-5' style={{color:"var(--primary-color)"}} >Login Here</h6>
               
               <p style={{fontSize:"13px",color:"var(--secondary-color)"}}>Your personal data will be used to support your experience throughout this website, to manage access to your account.

               </p>
               </div>
              
           </div>

           <div className='input-container mb-3'>  <FaRegUser className='icon' />
              <input type="text" className=' p-3 logininput  form-control formsinput'
              placeholder='Username / email address' required />
           </div>

           <div className='input-container'>
            <IoKeyOutline className='icon'  />
           <input type="password"className='
           p-3 logininput form-control formsinput'
              placeholder='Password' required />
           </div>
             

           <div className='my-3'>
              <p style={{color:"var(--secondary-color)"}}>Forget Password?</p>
           </div>

           <div>
             <button type='submit' className='rounded-3 loginbuttons   p-3 formsbutton w-100' style={{color:"var(--secondary-color)"}}>Login Now <IoIosArrowRoundForward style={{width:"30px",height:"30px",color:"var(--secondary-color)" }}/></button>
           </div>

           </form>

         </div>
          
          
        </div> 
        </div>
    </div>
  )
}

export default Login







{/* Sign Up*/}

          {/* <div className=" col-md-5 col-10 bg-body-tertiary p-4">

             <div className='d-flex'>
    
            <div className='d-flex align-items-center'>
    <GoLock className='me-4' style={{width:"30px",height:"30px",color:"#171f52" }}/>
      </div>
      
    <div>
    <h6 className='text-primary-emphasis fs-5'>Sign Up</h6>
    <p style={{fontSize:"13px"}}>Your personal data will be used to support your experience throughout this website, to manage access to your account.</p>
    </div>
   
</div>

<div className='input-container'>
    <FaRegUser className='icon'/>
   <input type="text"className='w-100 p-3 signupinput rounded-3'
   placeholder='User name'  required/>
</div>


         <div className='input-container my-3'>
    <AiOutlineMail className='icon'/>
   <input type="email" className='w-100 p-3 signupinput rounded-3 '
   placeholder='Email address' required/>
         </div>

        <div className='input-container'>
    <IoKeyOutline className='icon'/>
   <input type="password" className='w-100 p-3 signupinput rounded-3'
   placeholder='Password' required/>
        </div>


        <div>
   <p className='py-3'>Already Have Account?</p>
        </div>

        <div>
  <button className='rounded-3 signupbuttons text-white border-0 p-3 w-100'>Register Now <IoIosArrowRoundForward style={{width:"30px",height:"30px",color:"white" }}/></button>
        </div>

          </div> */}
