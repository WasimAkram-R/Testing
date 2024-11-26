import React,{useEffect} from 'react'
import AOS from 'aos';
import './AboutUs.css'
import { IoMdHappy } from "react-icons/io";
import { BiSupport } from "react-icons/bi";
import { FaRegThumbsUp } from "react-icons/fa";

import aboutus from './AboutUs.png'
import aboutus1 from './AboutUs1.jpg'
const AboutUs = () => {

  useEffect(()=>{
    AOS.refresh();
 },[]);
  return (
    <>
      
      <div className="container-fluid py-lg-5 py-4">
        <div className="container">
            
          <div className="row justify-content-around row-gap-lg-5  row-gap-4">
            <div className="col-lg-5"data-aos="fade-right">
               <h2 style={{color:"#ff7b7b"}}>About Us</h2>
                <p  style={{color:"#c4c4c5"}}>Welcome to TailorsHub, your one-stop destination for connecting skilled tailors with customers seeking custom-fit clothing and high-quality tailoring services.</p>
                <p style={{color:"#c4c4c5"}}>We believe that fashion is more than just trends- it's a way to express individuality and creativity. However, finding the right tailor to bring your vision to life can be challenge. That's where we come in.</p>
            </div>
             <div className="col-lg-5"data-aos="fade-left">
               <img src={aboutus1} className="img-fluid h-100" alt="" style={{border:"4px solid #ff7b7b"}}/>
             </div>
          </div>

        </div>
      </div>


      <div className="container-fluid ">
        <div className="container">
            
          <div className="row justify-content-around  row-gap-lg-5  row-gap-4">
          <div className="col-lg-5 order-lg-first order-last"data-aos="fade-right">
               <img src={aboutus1} className="img-fluid h-100" alt="" style={{border:"4px solid #ff7b7b"}}/>
             </div>
            <div className="col-lg-5"data-aos="fade-left">
               <h2 style={{color:"#ff7b7b"}}>Our Mission</h2>
                <p  style={{color:"#c4c4c5"}}>Our mission is to empower tailors and customers by fostering meaningful connections. We aim to make tailoring services more accessible, convenient, and transparent while supporting tailors to grow their businesses.</p>
                <p  style={{color:"#c4c4c5"}}>Our platform bridges the gap between tailors and individuals looking for personalized clothing, aternations, or designs. We make it easy to find the ideal tailor for your needs.</p>
            </div>
           
          </div>

        </div>
      </div>


       <div className="container-fluid py-lg-5 py-4">
     <div className="container" >

<div className="row justify-content-around align-items-center row-gap-lg-5  row-gap-4">



  <div className="col-lg-5"data-aos="fade-right">

    <div className="row gy-4">

      <div className="col-lg-6"data-aos="fade-right">
        <div className="d-flex h-100 align-items-center gap-3">
        < IoMdHappy  className=" flex-shrink-0 icon-spin" style={{width:"50px",height:"50px",color:"#ff7b7b"}}/>
          <div>
            <span style={{fontSize:"50px",  color:"white"}}>10+</span>
            <p  style={{color:"#c4c4c5"}}>Happy Tailors</p>
          </div>
        </div>
      </div>

      <div className="col-lg-6"data-aos="fade-left">
      <div className="d-flex h-100 align-items-center gap-3">
        < IoMdHappy  className="icon-spin flex-shrink-0" style={{width:"50px",height:"50px",color:"#ff7b7b"}}/>
          <div>
            <span style={{fontSize:"50px",  color:"white"}}>20+</span>
            <p  style={{color:"#c4c4c5"}}>Happy Customers</p>
          </div>
        </div>
      </div>

      <div className="col-lg-6">
      <div className="d-flex h-100 align-items-center gap-3">
        < FaRegThumbsUp  className="icon-spin flex-shrink-0 " style={{width:"45px",height:"50px",color:"#ff7b7b"}}/>
          <div>
            <span style={{fontSize:"50px",  color:"white"}}>40+</span>
            <p  style={{color:"#c4c4c5"}}>Work Done</p>
          </div>
        </div>
      </div>

      <div className="col-lg-6">
      <div className="d-flex h-100 align-items-center gap-3">
        < BiSupport className="icon-spin flex-shrink-0" style={{width:"50px",height:"50px",color:"#ff7b7b"}}/>
          <div>
            <span style={{fontSize:"50px",  color:"white"}}>24</span>
            <p  style={{color:"#c4c4c5"}}>Hours Support</p>
          </div>
        </div>
      </div>
    
    </div>

  </div>

  <div className="col-lg-5 "data-aos="fade-left">
    <img src={aboutus} alt="" className="img-fluid"/>
  </div>

</div>

</div>
     </div> 
    </>
  )
}

export default AboutUs