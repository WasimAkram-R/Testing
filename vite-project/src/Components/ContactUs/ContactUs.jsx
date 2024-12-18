import React,{useEffect} from 'react'
import AOS from 'aos';
import { useNavigate } from 'react-router-dom'; 
const ContactUs = () => {

  
  useEffect(()=>{
    AOS.refresh();
  },[]);
  
  const navigate = useNavigate(); 
  const handleGetStartedClick = () => {
    navigate('/login');
  };

  return (
    <>
    
   
    <div className="container-fluid py-md-5 py-4">
      <div className="container">
      <div className="row row-gap-md-5  row-gap-4">
   <div className="col-lg-6"data-aos="fade-right">
     <div className='h-100 justify-content-center d-flex flex-column'>
     <h2 className='pb-2 displaytext' style={{color:"var(--primary-color)"}}>Contact Us</h2>
     <p className='pb-2 displaypara' style={{color:"var(--text-color)"}} >Ready to collaborate with TailorsHub?</p>
     <div>
     <button className=" px-4 py-2 rounded-5 text-uppercase formsbutton"style={{backgroundColor:"transparent",color:"var(--secondary-color)"}}onClick={handleGetStartedClick}>Get Started</button>
     </div>
     </div>
   </div>

   <div className="col-lg-6"data-aos="fade-left">
   <form className="formsform">
          <div className="mb-3">
            <input type="text" placeholder="Enter Your Name" className="form-control p-3 formsinput" />
          </div>

          <div className="mb-3">
            <input type="email" placeholder="Enter Your Email" className="form-control p-3 formsinput" />
          </div>

          <div className="mb-3">
            <input type="tel" placeholder="Enter Your Number" className="form-control p-3 formsinput" />
          </div>

          <div className="mb-3">
            <textarea placeholder="Type Your Message/Inquiry Here" className="form-control p-3 formsinput" rows={5}></textarea>
          </div>

          <div className="d-flex justify-content-center">
            <button type="submit" className="border-0 text-uppercase px-4 py-2 rounded" style={{backgroundColor:"var(--primary-color)",color:"var(--secondary-color)"}}>Submit</button>
          </div>
        </form>

   </div>
   </div>
    </div>
    </div>
    
    </>
  )
}

export default ContactUs