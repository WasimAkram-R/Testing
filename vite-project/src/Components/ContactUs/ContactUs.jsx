import React,{useEffect} from 'react'
import AOS from 'aos';
const ContactUs = () => {

  useEffect(()=>{
    AOS.refresh();
 },[]);

  return (
    <>
    
   
    <div className="container-fluid py-lg-5 py-4">
      <div className="container">
      <div className="row row-gap-lg-5  row-gap-4">
   <div className="col-md-6"data-aos="fade-right">
     <div className='h-100 justify-content-center d-flex flex-column'>
     <h2 className='pb-2 display-6' style={{color:"#ff7b7b"}}>Contact Us</h2>
     <h6 className='pb-2' style={{color:"#c4c4c5"}}>Ready to collaborate with TailorsHub?</h6>
     <div>
     <button className=" px-4 py-2 rounded-5 text-uppercase formsbutton"style={{backgroundColor:"transparent",color:"white"}}>Get Started</button>
     </div>
     </div>
   </div>

   <div className="col-md-6"data-aos="fade-left">
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
            <button type="submit" className="border-0 text-uppercase px-4 py-2 rounded" style={{backgroundColor:"#ff7b7b",color:"white"}}>Submit</button>
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