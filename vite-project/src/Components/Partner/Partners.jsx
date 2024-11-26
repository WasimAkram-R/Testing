import React,{useEffect} from 'react'
import './Partner.css'
import AOS from 'aos';

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
const Partners = () => {

  useEffect(()=>{
    AOS.refresh();
 },[]);
  return (
    <>
     
        

      <div className="overlaydiv">
      <img src={partnerimg1} className='img-fluid overlayimg' alt="" />  


       <div className="content w-100 ">
       <h1 className=''>Expand Your Reach</h1>
       <h1 className='py-2 text-white-50'>Connect Your Tailoring Business with TailorsHub</h1>
         
        {/* <div className='row gap-3 justify-content-center'>
        <div className='col-md-4 col-10 p-md-4 pt-2  glass-effect bg-primary text-white'>
        <p>Grow Your Tailoring Business with a Powerful Online Presence!</p>
        </div>
        <div className='col-md-4 col-10 p-md-4 pt-2 glass-effect bg-danger text-white'>
        <p>Connecting Tailors to Website Owners for Custom Digital Solutions.</p>
        </div>
        </div> */}

       </div>

      </div>



<div className="container-fluid py-lg-5 py-4">
  <div className="container ">

    {/* About TailorsHub Section */}
    <div className="row row-gap-lg-5 row-gap-4 justify-content-around align-items-center">
     <div className='col-lg-5'data-aos="fade-right">
      <div className='d-flex flex-column justify-content-lg-center h-100' >
      <h2 className="pb-2 display-6" style={{color:"#ff7b7b"}}>About TailorsHub:</h2>
      <p style={{color:"#c4c4c5"}}>Are you a tailor looking to showcase your skills to a wider audience? At TailorsHub, we offer an exclusive platform for talented tailors like you to connect with potential clients online. Our website helps you create a strong online presence and attract more customers.</p>
      </div>
     </div>
     <div className="col-lg-5" data-aos="fade-left">
        <img src={partnerimg2} className='img-fluid  w-100' alt="" style={{border:"4px solid #ff7b7b"}}/>
     </div>
    </div>

    </div>
  </div>
    

    <div className="container-fluid ">
    <div className="container">
    {/* Benefits for Tailors Section */}
    <div className="row row-gap-lg-5 row-gap-4 justify-content-around align-items-center">
      <div className="col-lg-5 order-lg-first order-last"data-aos="fade-right">
      <img src={partnerimg2} className='img-fluid  w-100' alt=""style={{border:"4px solid #ff7b7b"}} />
      </div>
      <div className="col-lg-5"data-aos="fade-left">
      <h2 className="pb-2 display-6"style={{color:"#ff7b7b"}}>Benefits For Tailors:</h2>
      <div className="col">
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
    </div>
 
    <div className="container-fluid py-lg-5 py-4" >
  <div className="container ">

    {/* Why Partner With Us Section */}
    <div className="row row-gap-lg-5 row-gap-4 justify-content-around align-items-center">
       <div className="col-lg-5" data-aos="fade-right">
       <h2 className="pb-2 display-6"style={{color:"#ff7b7b"}}>Why Partner With Us?</h2>
      <div className="col">
        <ul className="list-unstyled">
          <li><span className="text-white"><LiaUserFriendsSolid style={{color:"#ff7b7b"}}/> User-Friendly Interface:</span> <span className=''style={{color:"#c4c4c5"}}> An easy-to-use platform tailored to your needs.</span></li>
          <li className="my-2"><span className="text-white"><MdSupportAgent style={{color:"#ff7b7b"}}/> Marketing Support:</span> <span className=''style={{color:"#c4c4c5"}}>Promote your services through targeted campaigns.</span></li>
          <li><span className="text-white"><IoPeopleOutline style={{color:"#ff7b7b"}}/> Tailor-First Focus:</span> <span className=''style={{color:"#c4c4c5"}}>Dedicated features for tailor showcase and customer reviews.</span></li>
          <li className="mt-2"><span className="text-white"><IoNewspaperOutline style={{color:"#ff7b7b"}}/> Take Orders:</span> <span className=''style={{color:"#c4c4c5"}}>Get a professional platform to display your work and take orders.</span></li>
        </ul>
      </div>
       </div>
       <div className="col-lg-5" data-aos="fade-left">
       <img src={partnerimg2} className='img-fluid  w-100' style={{border:"4px solid #ff7b7b"}}alt="" />
       </div>
    </div>
    </div>
    </div>

    <div className="container-fluid ">
    <div className="container ">

    {/* How It Works Section */}
    <div className="row row-gap-lg-5 row-gap-4 justify-content-around">
      <div className="col-lg-5  order-lg-first order-last"data-aos="fade-right">
      <img src={partnerimg2} className='img-fluid  w-100' alt=""style={{border:"4px solid #ff7b7b"}} />
      </div>
      <div className="col-lg-5"data-aos="fade-left">
      <h2 className="pb-2 display-6"style={{color:"#ff7b7b"}}>How It Works:</h2>
      <div className="col">
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
    </div>
  
    <div className="container-fluid py-lg-5 py-4">
    <div className="container ">
    {/* Contact Us Section */}
    <div className="row row-gap-5  justify-content-around align-items-center">
      {/* Left Column: Call to Action */}
      <div className="col-md-5"data-aos="fade-right">
        <h2 className="pb-2 display-6 " style={{color:"#ff7b7b"}}>Contact Us</h2>
        <h6 className="pb-3" style={{color:"#c4c4c5"}}>Ready to collaborate with TailorsHub?</h6>
        <button className=" px-4 py-2 rounded-5 text-uppercase formsbutton"style={{backgroundColor:"transparent",color:"white"}}>Get Started</button>
      </div>

      {/* Right Column: Contact Form */}
      <div className="col-md-5"data-aos="fade-left">
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
