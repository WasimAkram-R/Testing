import React from 'react'

const About = ({about}) => {
  return (
    <>
    

     <div className='py-3'>

     <h3 style={{color:"#32064A"}}>About</h3>

 
        
{about.map((aboutus, index) => (

      <p key={index}>{aboutus}</p>
 
  ))} 

     </div>

    
     
    </>
  )
}

export default About