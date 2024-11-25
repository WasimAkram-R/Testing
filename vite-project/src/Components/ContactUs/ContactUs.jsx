import React from 'react'

const ContactUs = () => {
  return (
    <>
    
   
    <div className="container-fluid py-5">
      <div className="container">
      <div className="row row-gap-5 ">
   <div className="col-md-6">
     <div className='h-100 justify-content-center d-flex flex-column'>
     <h2 className='pb-2 display-6' style={{color:"orangered"}}>Contact Us</h2>
     <h6 className='pb-2'>Ready to collaborate with TailorsHub?</h6>
     <div>
     <button className="btn btn-primary px-4 py-2 rounded-5 border-0">Get Started</button>
     </div>
     </div>
   </div>

   <div className="col-md-6">
   <form className="">
          <div className="mb-3">
            <input type="text" placeholder="Enter Your Name" className="form-control p-3" />
          </div>

          <div className="mb-3">
            <input type="email" placeholder="Enter Your Email" className="form-control p-3" />
          </div>

          <div className="mb-3">
            <input type="tel" placeholder="Enter Your Number" className="form-control p-3" />
          </div>

          <div className="mb-3">
            <textarea placeholder="Type Your Message/Inquiry Here" className="form-control p-3" rows={5}></textarea>
          </div>

          <div className="d-flex justify-content-center">
            <button type="submit" className="btn btn-success">Submit</button>
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