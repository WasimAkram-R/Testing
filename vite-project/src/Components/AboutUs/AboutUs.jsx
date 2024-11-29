import React,{useEffect} from 'react'
import AOS from 'aos';
import './AboutUs.css'
// import aboutus from './AboutUs.png'
import aboutus1 from './AboutUs1.jpg'
const AboutUs = () => {

  useEffect(()=>{
    AOS.refresh();
 },[]);
  return (
    <>
      
      <div className="container-fluid ">
        <div className="container py-md-5 py-4">
            
          <div className="row  row-gap-md-5  row-gap-4">
            <div className="col-lg-6"data-aos="fade-right">
               <h3 className='displaytext text-uppercase'  style={{color:"#ff7b7b"}}>About Us</h3>
                <p  className='displaypara' style={{color:"#c4c4c5"}}>Welcome to TailorsHub, your one-stop destination for connecting skilled tailors with customers seeking custom-fit clothing and high-quality tailoring services.</p>
                <p className='displaypara'  style={{color:"#c4c4c5"}}>We believe that fashion is more than just trends- it's a way to express individuality and creativity. However, finding the right tailor to bring your vision to life can be challenge. That's where we come in.</p>
            </div>
             <div className="col-lg-6"data-aos="fade-left">
               <img src={aboutus1} className="img-fluid h-100" alt="" style={{border:"4px solid #ff7b7b"}}/>
             </div>
          </div>

        </div>
     


   
        <div className="container py-lg-5 py-3">
            
          <div className="row  row-gap-md-5  row-gap-4">
          <div className="col-lg-6 order-lg-first order-last"data-aos="fade-right">
               <img src={aboutus1} className="img-fluid h-100" alt="" style={{border:"4px solid #ff7b7b"}}/>
             </div>
            <div className="col-lg-6"data-aos="fade-left">
               <h3 className='displaytext text-uppercase'  style={{color:"#ff7b7b"}}>Our Mission</h3>
                <p className='displaypara'  style={{color:"#c4c4c5"}}>Our mission is to empower tailors and customers by fostering meaningful connections. We aim to make tailoring services more accessible, convenient, and transparent while supporting tailors to grow their businesses.</p>
                <p className='displaypara'  style={{color:"#c4c4c5"}}>Our platform bridges the gap between tailors and individuals looking for personalized clothing, aternations, or designs. We make it easy to find the ideal tailor for your needs.</p>
            </div>
           
          </div>

        </div>
      


      


     </div> 
     
    </>
  )
}

export default AboutUs