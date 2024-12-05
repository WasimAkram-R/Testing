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

     <h3 style={{color:"var(--primary-color)"}} className='text-uppercase displaytext'>About</h3>

 
        
{about.map((aboutus, index) => (

      <p key={index} style={{color:"var(--text-color)"}} className='displaypara' >{aboutus}</p>
 
  ))} 

     </div>

    </>
  )
}

export default About 

