import React,{useEffect} from 'react'
import './Partner.css'
import AOS from 'aos';
import { useNavigate } from 'react-router-dom';

import partnerimg1 from './Partner1.png'
import partnerimg2 from './Partner2.png'
// styl={{backgroundColor:"#f8f0fb"}}

import { TbBusinessplan } from "react-icons/tb";
import { MdOutlinePhone } from "react-icons/md";
import { MdOutlineVisibility } from "react-icons/md";
import { SiCodesignal } from "react-icons/si";
import { CgWebsite } from "react-icons/cg";
import { LiaUserFriendsSolid } from "react-icons/lia";
import { MdSupportAgent } from "react-icons/md";
import { IoPeopleOutline } from "react-icons/io5";
import { IoNewspaperOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { RiShakeHandsLine } from "react-icons/ri";


import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; 
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade'; 


const Partners = () => {

  useEffect(()=>{
    AOS.refresh();
 },[]);

 const navigate= useNavigate()

 const handleGetStartedClick=()=>{
   navigate('/login')
 }
  return (
    <>
     
        

      {/* <div className="overlaydiv">
      <img src={partnerimg1} className='img-fluid overlayimg' alt="" />  


       <div className="content w-100 ">
       <h1 className=''style={{color:"#ff7b7b"}}>PARTNER WITH US!</h1>
       <h1 className='py-2 text-white'>Connect Your Tailoring Business with TailorsHub</h1>
        
       </div>

      </div> */}


<div className="container-fluid">

   <div className="container">
   <div className="row align-items-center row-gap-md-5 row-gap-4">
     <div className="col-lg-6" data-aos="fade-right">
     <img src={partnerimg1} className='img-fluid ' alt="" />  
     </div>
     <div className="col-lg-6" data-aos="fade-left">
     <h1 className='fs-4'style={{color:"#ff7b7b"}}>PARTNER WITH US!</h1>
     <h1 className='py-2 text-white partnertext'>Connect Your Tailoring Business with TailorsHub</h1>
     </div>
   </div>
   </div>

  
    <div  className='pt-md-5 pt-3 container'>
    <Swiper
       data-aos="fade-up"
        
        spaceBetween={20}
        loop={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        effect="fade"
        breakpoints={{
          
          320: {
            slidesPerView: 1,
          },
          
          768: {
            slidesPerView: 2, 
          },
          
          1024: {
            slidesPerView: 3,  
          },
        }}
      >

<SwiperSlide className=' p-4 partnerswiper' style={{ backgroundColor: "#151515", borderTop: "5px solid #ff7b7b" }}>
          <div className="testimonial">
          <h6 className='text-white displaypara'>1. Partner with Us</h6>
            <p className="displaypara" style={{color:"#c4c4c5"}}>
            Join our platform to showcase your tailoring skills to a wider audience.
            </p>
            
          </div>
        </SwiperSlide>

        <SwiperSlide className=' p-4 partnerswiper' style={{ backgroundColor: "#151515", borderTop: "5px solid #ff7b7b" }}>
          <div className="testimonial ">
          <h6  className='text-white displaypara'>2. Customers Finds You</h6>
            <p style={{color:"#c4c4c5"}}className=" displaypara">
            Customers easily find tailors based on  their needs.
            </p>

          </div>
        </SwiperSlide>

        <SwiperSlide className=' p-4 partnerswiper' style={{ backgroundColor: "#151515", borderTop: "5px solid #ff7b7b" }}>
          <div className="testimonial">
          <h6 className='text-white displaypara'>3. Expand Your Business</h6>
            <p className=" displaypara" style={{color:"#c4c4c5"}}>
            Get access to more customers and grow your tailoring business seamlessly.
            </p>
            
          </div>
        </SwiperSlide>

        
         
        <SwiperSlide className=' p-4 partnerswiper' style={{ backgroundColor: "#151515", borderTop: "5px solid #ff7b7b" }}>
          <div className="testimonial">
          <h6 className='text-white displaypara'>4. Boost Your Earnings</h6>
            <p className=" displaypara" style={{color:"#c4c4c5"}}>
             Earn more by partnering with us and tapping into our vast network of clients.
            </p>
            
          </div>
        </SwiperSlide>
       
      
      </Swiper>
    </div>
   
       


  <div className="container py-md-5 py-3">

    {/* About TailorsHub Section */}
    <div className="row row-gap-md-5 row-gap-4">
     <div className='col-lg-6'data-aos="fade-right">
      <div className=' ' >
      <h3 className="pb-2 text-uppercase displaytext" style={{color:"#ff7b7b"}}>About TailorsHub:</h3>
      <p style={{color:"#c4c4c5"}} className='displaypara' >Are you a tailor looking to showcase your skills to a wider audience? At TailorsHub, we offer an exclusive platform for talented tailors like you to connect with potential clients online. Our website helps you create a strong online presence and attract more customers.</p>
      </div>
     </div>
     <div className="col-lg-6" data-aos="fade-left">
        <img src={partnerimg2} className='img-fluid  w-100 h-100' alt="" style={{border:"4px solid #ff7b7b"}}/>
     </div>
    </div>

    </div>


    

   
    <div className="container py-lg-5 py-3">
    {/* Benefits for Tailors Section */}
    <div className="row row-gap-md-5 row-gap-4 ">
      <div className="col-lg-6 order-lg-first order-last"data-aos="fade-right">
      <img src={partnerimg2} className='img-fluid  w-100 h-100' alt=""style={{border:"4px solid #ff7b7b"}} />
      </div>
      <div className="col-lg-6"data-aos="fade-left">
      <h3 className="pb-2 text-uppercase  displaytext"style={{color:"#ff7b7b"}}>Benefits For Tailors:</h3>
      <div className="col displaypara">
        <ul className="list-unstyled">
          <li><span className="text-white"><SiCodesignal style={{color:"#ff7b7b"}}/> Showcase Your Design:</span> <span className=''style={{color:"#c4c4c5"}}>Display your best designs and creations to a growing audience.</span></li>
          <li className="my-2"><span className=" text-white"><MdOutlineVisibility style={{color:"#ff7b7b"}}/> Gain Visibility:</span><span className=''style={{color:"#c4c4c5"}}> Reach customers in your locality and beyond.</span> </li>
          <li><span className=" text-white"><MdOutlinePhone style={{color:"#ff7b7b"}}/> Easy Communication:</span> <span className=''style={{color:"#c4c4c5"}}>Receive inquiries and collaborate with clients effortlessly.</span></li>
          <li className="my-2"><span className=" text-white"><TbBusinessplan  style={{color:"#ff7b7b"}} />  Business Growth:</span> <span className=''style={{color:"#c4c4c5"}}> Increase your customer base and grow your revenue.</span></li>
          <li><span className="text-white"><CgWebsite style={{color:"#ff7b7b"}}/> Custom Websites:</span> <span className=''style={{color:"#c4c4c5"}}>Designed specifically to highlight your skills and services.</span></li>
        </ul>
      </div>
      </div>
    </div>
    </div>


  <div className="container py-md-5 py-4">

    {/* Why Partner With Us Section */}
    <div className="row row-gap-md-5 row-gap-4 ">
       <div className="col-lg-6" data-aos="fade-right">
       <h3 className="pb-2 text-uppercase  displaytext"style={{color:"#ff7b7b"}}>Why Partner With Us?</h3>
      <div className="col displaypara">
        <ul className="list-unstyled">
          <li><span className="text-white"><LiaUserFriendsSolid style={{color:"#ff7b7b"}}/> User-Friendly Interface:</span> <span className=''style={{color:"#c4c4c5"}}> An easy-to-use platform tailored to your needs.</span></li>
          <li className="my-2"><span className="text-white"><MdSupportAgent style={{color:"#ff7b7b"}}/> Marketing Support:</span> <span className=''style={{color:"#c4c4c5"}}>Promote your services through targeted campaigns.</span></li>
          <li><span className="text-white"><IoPeopleOutline style={{color:"#ff7b7b"}}/> Tailor-First Focus:</span> <span className=''style={{color:"#c4c4c5"}}>Dedicated features for tailor showcase and customer reviews.</span></li>
          <li className="mt-2"><span className="text-white"><IoNewspaperOutline style={{color:"#ff7b7b"}}/> Take Orders:</span> <span className=''style={{color:"#c4c4c5"}}>Get a professional platform to display your work and take orders.</span></li>
        </ul>
      </div>
       </div>
       <div className="col-lg-6" data-aos="fade-left">
       <img src={partnerimg2} className='img-fluid  w-100 h-100' style={{border:"4px solid #ff7b7b"}}alt="" />
       </div>
    </div>
    </div>


   
    <div className="container py-lg-5 py-3">

    {/* How It Works Section */}
    <div className="row row-gap-md-5 row-gap-4 ">
      <div className="col-lg-6  order-lg-first order-last"data-aos="fade-right">
      <img src={partnerimg2} className='img-fluid  w-100 h-100' alt=""style={{border:"4px solid #ff7b7b"}} />
      </div>
      <div className="col-lg-6"data-aos="fade-left">
      <h3 className="pb-2 displaytext text-uppercase "style={{color:"#ff7b7b"}}>How It Works:</h3>
      <div className="col displaypara">
        <ul className="list-unstyled">
          <li><span className="text-white">< CgProfile style={{color:"#ff7b7b"}} /> Tailors Profiles:</span> <span className=''style={{color:"#c4c4c5"}}>Tailors login and share their needs for an online presence to TailorsHub platform.</span></li>
          <li className="my-2"><span className="text-white"><CgWebsite style={{color:"#ff7b7b"}} /> Website Owners:</span> <span className=''style={{color:"#c4c4c5"}}>Explore tailor profiles and pitch your services.</span></li>
          <li><span className="text-white"><RiShakeHandsLine style={{color:"#ff7b7b"}} /> Collaborate:</span> <span className=''style={{color:"#c4c4c5"}}>Create custom websites that align with the tailor's vision and business goals.</span></li>
          <li className="mt-2"><span className="text-white"><MdOutlineVisibility style={{color:"#ff7b7b"}}/> Gain Visibility:</span> <span className=''style={{color:"#c4c4c5"}}>Reach customers in your locality and beyond, and take orders.</span></li>
        </ul>
      </div>
      </div>
    </div>
    </div>

  

    <div className="container py-md-5 py-4">
    {/* Contact Us Section */}
    <div className="row row-gap-md-5 row-gap-4  align-items-center">
      {/* Left Column: Call to Action */}
      <div className="col-lg-6"data-aos="fade-right">
        <h3 className="pb-2 displaytext text-uppercase " style={{color:"#ff7b7b"}}>Contact Us</h3>
        <p className="pb-3 displaypara" style={{color:"#c4c4c5"}}>Ready to collaborate with TailorsHub?</p>
        <button className=" px-4 py-2 rounded-5 text-uppercase formsbutton"style={{backgroundColor:"transparent",color:"white"}}
        onClick={handleGetStartedClick}>Get Started</button>
      </div>

      {/* Right Column: Contact Form */}
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
            <button type="submit" className="border-0 text-uppercase px-4 py-2 rounded " style={{backgroundColor:"#ff7b7b",color:"white"}}>Submit</button>
          </div>
        </form>
      </div>
    </div>
  </div>

    
  </div>


    </>
  )
}

export default Partners
