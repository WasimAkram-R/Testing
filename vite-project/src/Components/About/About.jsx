import { useEffect } from 'react';
import React from 'react'
import AOS from 'aos';

const About = ({about}) => {

  useEffect(()=>{
    AOS.refresh();
 },[]);

  return (
    <>
    

     <div className='py-4' data-aos="fade-up">

     <h3 style={{color:"#ff7b7b"}} className='text-uppercase displaytext'>About</h3>

 
        
{about.map((aboutus, index) => (

      <p key={index} style={{color:"#c4c4c5"}} className='displaypara' >{aboutus}</p>
 
  ))} 

     </div>

    </>
  )
}

export default About