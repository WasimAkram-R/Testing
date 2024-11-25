








import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';  // To navigate programmatically
import './Home.css'
import { IoMdArrowForward } from "react-icons/io";
// import Tailoring from './Tailoring.mp4';
import Tailoringgif from './Tailor2.gif';
import Heroimage1 from './HeroImages/Hero_Image1.jpg';
import Heroimage2 from './HeroImages/Hero_Image2.jpg';
import Heroimage3 from './HeroImages/Hero_Image3.jpg';
import Heroimage4 from './HeroImages/Hero_Image4.jpg';
import Heroimage5 from './HeroImages/Hero_Image5.jpg';
import Heroimage6 from './HeroImages/Hero_Image6.jpg';
import Heroimage7 from './HeroImages/Hero_Image7.png';
import Heroimage8 from './HeroImages/Hero_Image8.png';
import Heroimage9 from './HeroImages/Hero_Image9.png';
import icon1 from './HeroImages/icon1.png';

import { IoSearch } from "react-icons/io5";
import { MdConnectWithoutContact } from "react-icons/md";
import { GiClothes } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { RiUserReceived2Line } from "react-icons/ri";
import { TbBusinessplan } from "react-icons/tb";

import AOS from 'aos';

const Home = () => {
  const [location, setLocation] = useState('');  // State to hold location input
  const navigate = useNavigate();  // Hook to programmatically navigate

  const handleLocationChange = (e) => {
    setLocation(e.target.value);  // Update location state on input change
  };

  const handleSearch = () => {
    if (location) {
      // Navigate to another page/component and pass location as a URL parameter
      navigate(`/search/${location}`);
    }
  };

 

  const glassStyle = {
    borderRadius: '10px',
    padding: '15px'
  };

  useEffect(()=>{
     AOS.refresh();
  },[]);

  return (
    <>



    <div style={{ position: 'relative', width: '100%' }}>

{/* Image and overlay (background section) */}
<div style={{ position: 'relative', width: '100%', height: 'auto' }}>
  <img 
    src={Tailoringgif} 
    alt="Tailoring" 
    className="tailored img-fluid" 
    style={{
      width: '100%',
      height: 'auto',
      position: 'relative', // Image stays as background
      zIndex: 1, // Ensure the image is in the background
    }} 
  />

  {/* Overlay above the image */}
  <div 
    className="transparent-bg" 
    style={{
      position: 'absolute',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'white',
      zIndex: 2, // Overlay sits above the image
    }}
  >
    <div className="container">
      <div className="d-flex column-gap-3">
        <input  
          type="text" 
          placeholder="Enter Location" 
          className="w-50 form-control bg-transparent border-2 forms" 
          value={location}
          onChange={handleLocationChange} 
        />
        <button 
          onClick={handleSearch}  // Trigger search and navigate
          className="border-0  px-sm-4 py-sm-2 px-3 py-1 rounded-5 text-white fw-light" style={{backgroundColor:"#ff7b7b"}}
        >
          Search
        </button>
      </div>
      <h1 className="tailorsh1 py-md-4 py-3"style={{color:"#ff7b7b"}}>Tailors Connect</h1>
      <p className="tailorsp">
        Connecting skilled tailors with customers who value quality, style, and convenience.
      </p>
    </div>
  </div>
</div>



</div>


   
     
<div className="container-fluid py-5">
    <div className="container">
        <div className="row justify-content-around row-gap-5 ">
            <div className="text-center">
                <h2 className="display-6" style={{color:"#ff7b7b"}}>Tailor-Made Connections, Seamlessly</h2>
            </div>

            <div className="col-lg-5" data-aos="fade-right" >
                 <div className=''>
                 <h5 className='pb-2 text-white'>Your Stitching Needs Met</h5>
                 <p style={{color:"#c4c4c5"}}>Bridging the gap between talented tailors and customers seeking custom-fit designs and satisfies the customers requirements.</p>
                 </div>
                
                 <img src={Heroimage1} alt="" className='img-fluid  heroimage' style={{border:"4px solid #ff7b7b"}} />
              
            </div>
            <div className="col-lg-5"data-aos="fade-left">
                 <div className=''> 
                 <h5 className='pb-2 text-white'>Discover Local Tailoring Talent</h5>
                 <p style={{color:"#c4c4c5"}}>Tailors can display their expertise, while customers can easily find the perfect match for their unique stitching requirements.</p>
                 </div>
                <img src={Heroimage2} alt="" className='img-fluid  heroimage w-100' style={{border:"4px solid #ff7b7b"}}/>
            </div>
        </div>
    </div>
</div>

<div className="container-fluid py-5">
    <div className="container">
        <div className="row justify-content-around row-gap-5 ">
            <div className="text-center">
                <h2 className=" display-6" style={{color:"#ff7b7b"}}>Who We Are</h2>
            </div>

            <div className="col-lg-5"data-aos="fade-right">
               <div className=''>
               <h5 className='pb-2 text-white'>Connecting Tailors To Customers</h5>
               <p style={{color:"#c4c4c5"}}>We are dedicated to connecting skilled tailors with customers looking for bespoke clothing solutions.</p>
               </div>
                <img src={Heroimage3} alt="" className='img-fluid  heroimage ' style={{border:"4px solid #ff7b7b"}}/>
            </div>
            <div className="col-lg-5"data-aos="fade-left" >
                <div className=''>
                <h5 className='pb-2 text-white'>Connecting Customers To Tailors</h5>
                <p style={{color:"#c4c4c5"}}>Our platform makes it easy for customers to find local tailors and for tailors to grow their business.</p>
                </div>
                <img src={Heroimage4} alt="" className='img-fluid  heroimage ' style={{border:"4px solid #ff7b7b"}}/>
            </div>
        </div>
    </div>
</div>



<div className="container-fluid py-5">
  <div className="container">
     <div className="row justify-content-around row-gap-5" >
     <div className="text-center">
                <h2 className=" display-6" style={{color:"#ff7b7b"}}>How It Works</h2>
            </div>
      <div className="col-lg-5" data-aos="fade-up">
      <h5 className='pb-2' style={{color:"#ff7b7b"}}>Steps for Customers:</h5>
                <ul className='list-unstyled'>
                    <li className='' ><span className="fw-medium text-white">< IoSearch  style={{color:"#ff7b7b"}}  /> Search for Tailors:</span> <span className=""style={{color:"#c4c4c5"}}>Filter by location, specialty, or ratings.</span></li>
                    <li className='py-2'><span className="fw-medium text-white"><MdConnectWithoutContact  style={{color:"#ff7b7b"}} /> Connect & Discuss:</span> <span className=""style={{color:"#c4c4c5"}}>Share your design ideas and preferences</span>.</li>
                    <li><span className="fw-medium text-white"><GiClothes  style={{color:"#ff7b7b"}} /> Get Your Fit:</span> <span className=""style={{color:"#c4c4c5"}}> Receive high-quality, custom-made clothing.</span></li>
                </ul>
      </div>
      <div className="col-lg-5" data-aos="fade-up">
      <marquee behavior="" direction="">
                  <img src={icon1} alt="" />
                  <IoMdArrowForward size={30}style={{color:"#ff7b7b"}}/>
                  <img src={icon1} alt="" />
                  <IoMdArrowForward size={30}style={{color:"#ff7b7b"}}/>
                  <img src={icon1} alt="" />
                  <IoMdArrowForward size={30}style={{color:"#ff7b7b"}}/>
                  <img src={icon1} alt="" />
        </marquee>
      </div>
     </div>
  </div>
</div>

    
<div className="container-fluid py-5">
  <div className="container" >
     <div className="row justify-content-around row-gap-5"  >
      <div className="col-lg-5 order-lg-first order-last" data-aos="fade-up">
      <marquee behavior="" direction="">
                  <img src={icon1} alt="" />
                  <IoMdArrowForward size={30}style={{color:"#ff7b7b"}}/>
                  <img src={icon1} alt="" />
                  <IoMdArrowForward size={30}style={{color:"#ff7b7b"}}/>
                  <img src={icon1} alt="" />
                  <IoMdArrowForward size={30}style={{color:"#ff7b7b"}}/>
                  <img src={icon1} alt="" />
                  <IoMdArrowForward size={30}style={{color:"#ff7b7b"}}/>
                  <img src={icon1} alt="" />
                </marquee>
      </div>
      <div className="col-lg-5" data-aos="fade-up" >
      <h5 className='pb-2 'style={{color:"#ff7b7b"}}>Steps for Tailors:</h5>
                <ul className='list-unstyled'>
                    <li className=""><span className='fw-medium text-white'><CgProfile  style={{color:"#ff7b7b"}}  /> Create Your Profile: </span><span className=""style={{color:"#c4c4c5"}}>Showcase your skills, services, and portfolio.</span></li>
                    <li className='py-2'> <span className="fw-medium text-white"><RiUserReceived2Line  style={{color:"#ff7b7b"}}  /> Receive Requests:</span> <span className=""style={{color:"#c4c4c5"}}>Connect with customers seeking your expertise.</span></li>
                    <li> <span className="fw-medium text-white"><TbBusinessplan  style={{color:"#ff7b7b"}} /> Grow Your Business:</span><span className=""style={{color:"#c4c4c5"}}> Build trust and expand your client base.</span></li>
                </ul>
      </div>
     </div>
  </div>
</div>
    


    </>
  );
};

export default Home;




