








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

import Carousel from 'react-bootstrap/Carousel';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; 
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade'; 
import { RiDoubleQuotesR } from "react-icons/ri";



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
          className="w-50 form-control bg-transparent  homeform" 
          value={location}
          onChange={handleLocationChange} 
        />
        <button 
          onClick={handleSearch}  // Trigger search and navigate
          className=" px-sm-4 py-sm-2 px-3 py-1 rounded-5 text-white fw-light homebutton text-uppercase" style={{backgroundColor:"transparent"}}
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


   
     
<div className="container-fluid ">

    <div className="container py-md-5 py-4">
        <div className="row  row-gap-md-5 row-gap-4 ">
            <div className="text-center">
                <h3 className="displaytext 
                text-uppercase" style={{color:"#ff7b7b"}}>Tailor-Made Connections, Seamlessly</h3>
            </div>

            <div className="col-lg-6" data-aos="fade-right" >
                 <div>
                 <h6 className='pb-2  text-white '>Your Stitching Needs Met</h6>
                 <p className='displaypara' style={{color:"#c4c4c5"}}>Bridging the gap between talented tailors and customers seeking custom-fit designs and satisfies the customers requirements.</p>
                 </div>
                
                 <img src={Heroimage1} alt="" className='img-fluid  heroimage' style={{border:"4px solid #ff7b7b"}} />
              
            </div>
            <div className="col-lg-6"data-aos="fade-left">
                 <div className=''> 
                 <h6 className='pb-2 text-white'>Discover Local Tailoring Talent</h6>
                 <p className='displaypara' style={{color:"#c4c4c5"}}>Tailors can display their expertise, while customers can easily find the perfect match for their unique stitching requirements.</p>
                 </div>
                <img src={Heroimage2} alt="" className='img-fluid  heroimage w-100' style={{border:"4px solid #ff7b7b"}}/>
            </div>
        </div>
    </div>



    <div className="container py-lg-5 py-md-3">
        <div className="row row-gap-md-5 row-gap-4">
            <div className="text-center">
                <h3 className=" displaytext text-uppercase" style={{color:"#ff7b7b"}}>Who We Are</h3>
            </div>

            <div className="col-lg-6"data-aos="fade-right">
               <div className=''>
               <h6 className='pb-2 text-white'>Connecting Tailors To Customers</h6>
               <p className='displaypara' style={{color:"#c4c4c5"}}>We are dedicated to connecting skilled tailors with customers looking for bespoke clothing solutions.</p>
               </div>
                <img src={Heroimage3} alt="" className='img-fluid  heroimage ' style={{border:"4px solid #ff7b7b"}}/>
            </div>
            <div className="col-lg-6"data-aos="fade-left" >
                <div className=''>
                <h6 className='pb-2 text-white'>Connecting Customers To Tailors</h6>
                <p className='displaypara' style={{color:"#c4c4c5"}}>Our platform makes it easy for customers to find local tailors and for tailors to grow their business.</p>
                </div>
                <img src={Heroimage4} alt="" className='img-fluid  heroimage ' style={{border:"4px solid #ff7b7b"}}/>
            </div>
        </div>
    </div>





  <div className="container pt-md-5 pt-4">
     <div className="row   row-gap-md-5 row-gap-4 align-items-center" >
     <div className="text-center">
                <h3 className=" displaytext text-uppercase" style={{color:"#ff7b7b"}}>How It Works</h3>
            </div>
      <div className="col-lg-6" data-aos="fade-right">
      <h6 className='pb-2' style={{color:"#ff7b7b"}}>Steps for Customers:</h6>
                <ul className='list-unstyled displaypara'>
                    <li className='' ><span className="fw-medium text-white">< IoSearch  style={{color:"#ff7b7b"}}  /> Search for Tailors:</span> <span className=""style={{color:"#c4c4c5"}}>Filter by location, specialty, or ratings.</span></li>
                    <li className='py-2'><span className="fw-medium text-white"><MdConnectWithoutContact  style={{color:"#ff7b7b"}} /> Connect & Discuss:</span> <span className=""style={{color:"#c4c4c5"}}>Share your design ideas and preferences</span>.</li>
                    <li><span className="fw-medium text-white"><GiClothes  style={{color:"#ff7b7b"}} /> Get Your Fit:</span> <span className=""style={{color:"#c4c4c5"}}> Receive high-quality, custom-made clothing.</span></li>
                </ul>
      </div>
      <div className="col-lg-6" data-aos="fade-left">
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


    

  <div className="container py-md-5" >
     <div className="row row-gap-md-5 row-gap-4 align-items-center"  >
      <div className="col-lg-6 order-lg-first order-last" data-aos="fade-right">
      <marquee behavior="" direction="right">
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
      <div className="col-lg-6" data-aos="fade-left" >
      <h6 className='pb-2 'style={{color:"#ff7b7b"}}>Steps for Tailors:</h6>
                <ul className='list-unstyled displaypara'>
                    <li className=""><span className='fw-medium text-white'><CgProfile  style={{color:"#ff7b7b"}}  /> Create Your Profile: </span><span className=""style={{color:"#c4c4c5"}}>Showcase your skills, services, and portfolio.</span></li>
                    <li className='py-2'> <span className="fw-medium text-white"><RiUserReceived2Line  style={{color:"#ff7b7b"}}  /> Receive Requests:</span> <span className=""style={{color:"#c4c4c5"}}>Connect with customers seeking your expertise.</span></li>
                    <li> <span className="fw-medium text-white"><TbBusinessplan  style={{color:"#ff7b7b"}} /> Grow Your Business:</span><span className=""style={{color:"#c4c4c5"}}> Build trust and expand your client base.</span></li>
                </ul>
      </div>
     </div>
  </div>

</div>


<div className="container-fluid pb-md-5 pb-4 " data-aos="fade-up">
    
        <div className="text-center">
                <h3 className=" displaytext text-uppercase pb-4" style={{color:"#ff7b7b"}}>Testimonials</h3>
            </div>

       <Swiper
        spaceBetween={20}
        loop={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        effect="fade"
        breakpoints={{
          // When window width is >= 320px (small mobile devices)
          320: {
            slidesPerView: 1,  // 1 slide at a time
          },
          // When window width is >= 768px (tablet)
          768: {
            slidesPerView: 2,  // Show 2 slides at a time
          },
          // When window width is >= 1024px (desktop)
          1024: {
            slidesPerView: 3,  // Show 3 slides at a time
          },
        }}
      >
         
        <SwiperSlide className=' p-4' style={{ backgroundColor: "#151515", borderBottom: "5px solid #ff7b7b" }}>
          <div className="testimonial">
          
            <p className="testimonial-text displaypara" style={{color:"#c4c4c5"}}>
             The tailor was extremely professional, and I could see their dedication to perfecting every detail. The quality of my custom suit exceeded all expectations. 
            </p>
            


            <div className="row align-items-end">
              <div className="col-8">
              <h4 className="testimonial-name text-white">Customer 1</h4>
              <h6 className="testimonial-name" style={{color:"#ff7b7b"}}>client</h6>
              </div>
              <div className="col-4">
              <RiDoubleQuotesR size={80}  style={{color:"#ff7b7b"}}/>
              </div>
            </div>

          </div>
        </SwiperSlide>

        

       
        <SwiperSlide className='p-4' style={{ backgroundColor: "#151515", borderBottom: "5px solid #ff7b7b" }}>
          <div className="testimonial">
         
            <p style={{color:"#c4c4c5"}}className="testimonial-text displaypara">
              The best experience I’ve had with custom clothing. The attention to detail and the fit were perfect. I feel so confident every time I wear my new suit. Highly recommend!
            </p>
            
         
            <div className="row align-items-end">
              <div className="col-8">
              <h4 className="testimonial-name text-white">Customer 2</h4>
              <h6 className="testimonial-name" style={{color:"#ff7b7b"}}>client</h6>
              </div>
              <div className="col-4">
              <RiDoubleQuotesR size={80}  style={{color:"#ff7b7b"}}/>
              </div>
            </div>


          </div>
        </SwiperSlide>

     
        <SwiperSlide className=' p-4' style={{ backgroundColor: "#151515", borderBottom: "5px solid #ff7b7b" }}>
          <div className="testimonial">
   
            <p style={{color:"#c4c4c5"}}className="testimonial-text displaypara">
            I’ve always struggled with finding clothes that fit me properly, but after connecting with a tailor, everything changed. The tailor was so patient, taking time to understand my preferences and suggesting the best style for my body.
            </p>
            
          
            <div className="row align-items-end">
              <div className="col-8">
              <h4 className="testimonial-name text-white">Customer 3</h4>
              <h6 className="testimonial-name" style={{color:"#ff7b7b"}}>client</h6>
              </div>
              <div className="col-4">
              <RiDoubleQuotesR size={80}  style={{color:"#ff7b7b"}}/>
              </div>
            </div>


          </div>
        </SwiperSlide>

 
        <SwiperSlide className='p-4' style={{ backgroundColor: "#151515", borderBottom: "5px solid #ff7b7b" }}>
          <div className="testimonial">
    
            <p style={{color:"#c4c4c5"}}className="testimonial-text displaypara">
            I’ve been looking for a reliable tailor for years, and I finally found one! The process was simple, and the tailor took the time to understand my specific measurements and preferences. 
            </p>
           
          
            <div className="row align-items-end">
              <div className="col-8">
              <h4 className="testimonial-name text-white">Customer 4</h4>
              <h6 className="testimonial-name" style={{color:"#ff7b7b"}}>client</h6>
              </div>
              <div className="col-4">
              <RiDoubleQuotesR size={80}  style={{color:"#ff7b7b"}}/>
              </div>
            </div>


          </div>
        </SwiperSlide>

      </Swiper> 
 


</div>



    </>
  );
};

export default Home;




