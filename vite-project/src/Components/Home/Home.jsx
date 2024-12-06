import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './Home.css'
import { IoMdArrowForward } from "react-icons/io";
import Tailoringgif from './Tailor2.gif';
import Heroimage1 from './HeroImages/Hero_Image1.jpg';
import Heroimage2 from './HeroImages/Hero_Image2.jpg';
import Heroimage3 from './HeroImages/Hero_Image3.jpg';
import Heroimage4 from './HeroImages/Hero_Image4.jpg';
import aboutus from './HeroImages/AboutUs.png'
import icon1 from './HeroImages/icon1.png';
import icon2 from './HeroImages/icon2.png';
import icon3 from './HeroImages/icon3.png';
import icon4 from './HeroImages/icon4.png';
import icon5 from './HeroImages/icon5.png';
import icon6 from './HeroImages/icon6.png';
import icon7 from './HeroImages/icon7.png';

import { IoSearch } from "react-icons/io5";
import { MdConnectWithoutContact } from "react-icons/md";
import { GiClothes } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { RiUserReceived2Line } from "react-icons/ri";
import { TbBusinessplan } from "react-icons/tb";

import AOS from 'aos';


import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css'; 
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade'; 
import { FaQuoteLeft } from "react-icons/fa6";
import { FaQuoteRight } from "react-icons/fa6";


import { IoMdHappy } from "react-icons/io";
import { BiSupport } from "react-icons/bi";
import { FaRegThumbsUp } from "react-icons/fa";

const Home = () => {
  const [location, setLocation] = useState('');  
  const navigate = useNavigate(); 

  const handleLocationChange = (e) => {
    setLocation(e.target.value); 
  };

  const handleSearch = () => {
    if (location) {
      
      navigate(`/search/${location}`);
    }
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
      position: 'relative', 
      zIndex: 1, 
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
      color: 'var(--secondary-color)',
      zIndex: 2,
    }}
  >
    <div className="container">
      <div className="d-flex column-gap-3">
        <input  
          type="text" 
          placeholder="Search city, designs, tailors" 
          className="w-75 form-control bg-transparent  homeform" 
          value={location}
          onChange={handleLocationChange} 
        />
        <button 
          onClick={handleSearch}  
          className=" px-sm-4 py-sm-2 px-3 py-1 rounded-5  fw-light  text-uppercase border-0" style={{backgroundColor:"var(--primary-color)", color: 'var(--secondary-color)'}}
        >
          Search
        </button>
      </div>
      <h1 className="tailorsh1 py-md-4 py-3"style={{color:'var(--primary-color)'}}>Tailors Connect</h1>
      <p className="tailorsp text-white">
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
                <h4 className="displaytext 
                text-uppercase" style={{color:'var(--primary-color)'}}>Tailor-Made Connections, Seamlessly</h4>
            </div>

            <div className="col-lg-6" data-aos="fade-right" >
                 <div>
                 <h6 className='pb-2   'style={{color:'var(--secondary-color)'}}>Your Stitching Needs Met</h6>
                 <p className='displaypara' style={{color:'var(--text-color)'}}>Bridging the gap between talented tailors and customers seeking custom-fit designs and satisfies the customers requirements.</p>
                 </div>
                
                 <img src={Heroimage1} alt="" className='img-fluid  heroimage' style={{border:"4px solid var(--primary-color) "}} />
              
            </div>
            <div className="col-lg-6"data-aos="fade-left">
                 <div className=''> 
                 <h6 className='pb-2'style={{color:'var(--secondary-color)'}}>Discover Local Tailoring Talent</h6>
                 <p className='displaypara' style={{color:'var(--text-color)'}}>Tailors can display their expertise, while customers can easily find the perfect match for their unique stitching requirements.</p>
                 </div>
                <img src={Heroimage2} alt="" className='img-fluid  heroimage w-100' style={{border:"4px solid var(--primary-color)"}}/>
            </div>
        </div>
    </div>



    <div className="container py-lg-5 py-3">
        <div className="row row-gap-md-5 row-gap-4">
            <div className="text-center">
                <h3 className=" displaytext text-uppercase"  style={{color:'var(--primary-color)'}}>Who We Are</h3>
            </div>

            <div className="col-lg-6"data-aos="fade-right">
               <div className=''>
               <h6 className='pb-2 'style={{color:'var(--secondary-color)'}}>Connecting Tailors To Customers</h6>
               <p className='displaypara' style={{color:'var(--text-color)'}}>We are dedicated to connecting skilled tailors with customers looking for bespoke clothing solutions.</p>
               </div>
                <img src={Heroimage3} alt="" className='img-fluid  heroimage ' style={{border:"4px solid var(--primary-color)"}}/>
            </div>
            <div className="col-lg-6"data-aos="fade-left" >
                <div className=''>
                <h6 className='pb-2 'style={{color:'var(--secondary-color)'}}>Connecting Customers To Tailors</h6>
                <p className='displaypara' style={{color:'var(--text-color)'}}>Our platform makes it easy for customers to find local tailors and for tailors to grow their business.</p>
                </div>
                <img src={Heroimage4} alt="" className='img-fluid  heroimage ' style={{border:"4px solid var(--primary-color)"}}/>
            </div>
        </div>
    </div>





  <div className="container pt-md-5 pt-4">
     <div className="row   row-gap-md-5 row-gap-4 align-items-center" >
     <div className="text-center">
                <h3 className=" displaytext text-uppercase" style={{color:'var(--primary-color)'}}>How It Works</h3>
            </div>
      <div className="col-lg-6" data-aos="fade-right">
      <h6 className='pb-2' style={{color:'var(--primary-color)'}}>Steps for Customers:</h6>
                <ul className='list-unstyled displaypara'>
                    <li className='' ><span className="fw-medium" style={{color:'var(--secondary-color)'}}>< IoSearch  style={{color:'var(--primary-color)'}}  /> Search for Tailors:</span> <span className=""style={{color:'var(--text-color)'}}>Filter by location, specialty, or ratings.</span></li>
                    <li className='py-2'><span className="fw-medium " style={{color:'var(--secondary-color)'}}><MdConnectWithoutContact  style={{color:'var(--primary-color)'}} /> Connect & Discuss:</span> <span className=""style={{color:'var(--text-color)'}}>Share your design ideas and preferences</span>.</li>
                    <li><span className="fw-medium " style={{color:'var(--secondary-color)'}}><GiClothes  style={{color:'var(--primary-color)'}} /> Get Your Fit:</span> <span className=""style={{color:'var(--text-color)'}}> Receive high-quality, custom-made clothing.</span></li>
                </ul>
      </div>
      <div className="col-lg-6 pb-3" data-aos="fade-left">
      <marquee behavior="" direction="">
                  <img src={icon1} alt="" />
                  <IoMdArrowForward size={30}style={{color:"var(--text-color)"}}/>
                  <img src={icon2} alt="" />
                  <IoMdArrowForward size={30}style={{color:"var(--text-color)"}}/>
                  <img src={icon3} alt="" />
                  <IoMdArrowForward size={30}style={{color:"var(--text-color)"}}/>
                  <img src={icon4} alt="" />
        </marquee>
      </div>
     </div>
  </div>

  
 

  <div className="container py-md-5" >
     <div className="row row-gap-md-5 row-gap-4 align-items-center"  >
      <div className="col-lg-6 order-lg-first order-last" data-aos="fade-right">
      <marquee behavior="" direction="right">
                  <img src={icon5}  alt="" />
                  <IoMdArrowForward size={30}style={{color:"var(--text-color)"}}/>
                  <img src={icon6} alt="" />
                  <IoMdArrowForward size={30}style={{color:"var(--text-color)"}}/>
                  <img src={icon7} alt="" />
                </marquee>
      </div>
      <div className="col-lg-6" data-aos="fade-left" >
      <h6 className='pb-2 'style={{color:'var(--primary-color)'}}>Steps for Tailors:</h6>
                <ul className='list-unstyled displaypara'>
                    <li className=""><span className='fw-medium ' style={{color:'var(--secondary-color)'}}><CgProfile  style={{color:'var(--primary-color)'}} /> Create Your Profile: </span><span className=""style={{color:'var(--text-color)'}}>Showcase your skills, services, and portfolio.</span></li>
                    <li className='py-2'> <span className="fw-medium " style={{color:'var(--secondary-color)'}}><RiUserReceived2Line  style={{color:'var(--primary-color)'}} /> Receive Requests:</span> <span className=""style={{color:'var(--text-color)'}}>Connect with customers seeking your expertise.</span></li>
                    <li> <span className="fw-medium " style={{color:'var(--secondary-color)'}}><TbBusinessplan  style={{color:'var(--primary-color)'}} /> Grow Your Business:</span><span className=""style={{color:'var(--text-color)'}}> Build trust and expand your client base.</span></li>
                </ul>
      </div>
     </div>
  </div>
 


  <div className="container " >

<div className="row  align-items-center row-gap-md-5  row-gap-4">



  <div className="col-lg-6"data-aos="fade-right">

    <div className="row gy-4">

      <div className="col-lg-6"data-aos="fade-right">
        <div className="d-flex h-100 align-items-center gap-3">
        < IoMdHappy  className=" flex-shrink-0 icon-spin" style={{width:"50px",height:"50px",color:"var(--primary-color)"}}/>
          <div>
            <span style={{fontSize:"50px",  color:"var(--secondary-color)"}}>37+</span>
            <p className='displaypara'  style={{color:"var(--text-color)"}}>Happy Tailors</p>
          </div>
        </div>
      </div>

      <div className="col-lg-6"data-aos="fade-left">
      <div className="d-flex h-100 align-items-center gap-3">
        < IoMdHappy  className="icon-spin flex-shrink-0" style={{width:"50px",height:"50px",color:"var(--primary-color)"}}/>
          <div>
            <span style={{fontSize:"50px",  color:"var(--secondary-color)"}}>75+</span>
            <p className='displaypara'  style={{color:"var(--text-color)"}}>Happy Customers</p>
          </div>
        </div>
      </div>

      <div className="col-lg-6">
      <div className="d-flex h-100 align-items-center gap-3">
        < FaRegThumbsUp  className="icon-spin flex-shrink-0 " style={{width:"45px",height:"50px",color:"var(--primary-color)"}}/>
          <div>
            <span style={{fontSize:"50px",  color:"var(--secondary-color)"}}>113+</span>
            <p className='displaypara'  style={{color:"var(--text-color)"}}>Work Done</p>
          </div>
        </div>
      </div>

      <div className="col-lg-6">
      <div className="d-flex h-100 align-items-center gap-3">
        < BiSupport className="icon-spin flex-shrink-0" style={{width:"50px",height:"50px",color:"var(--primary-color)"}}/>
          <div>
            <span style={{fontSize:"50px",  color:"var(--secondary-color)"}}>24</span>
            <p className='displaypara'   style={{color:"var(--text-color)"}}>Email Support</p>
          </div>
        </div>
      </div>
    
    </div>

  </div>

  <div className="col-lg-6 "data-aos="fade-left">
    <img src={aboutus} alt="" className="img-fluid"/>
  </div>

</div>

</div>



<div className="py-md-5 py-4 container" data-aos="fade-up">
    
        <div className="text-center">
                <h3 className=" displaytext text-uppercase pb-4" style={{color:"var(--primary-color)"}}>Testimonials</h3>
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
        type: 'bullets',
      }}
      navigation={true}
      // modules={[Navigation, Pagination]} 
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
      <SwiperSlide className="p-4 homeswiper" style={{ backgroundColor: "var(--secondary-bg-color)", borderBottom: "5px solid var(--primary-color)",borderRadius:"10px" }}>
        <div className="testimonial">
          <p
            className='testimonial-text displaypara '
            style={{ color: "var(--text-color)" }}
          >
            <FaQuoteLeft size={35} style={{ color: "var(--primary-color)" }} />
            The tailor was extremely professional, I could see their dedication to perfecting every detail. The quality of my custom suit exceeded all expectations.
            <FaQuoteRight size={35} style={{ color: "var(--primary-color)" }} />
          </p>
          <div className="row align-items-end">
            <div className="col">
              <h4 className=" " style={{color:"white"}}>Customer 1</h4>
              <h6 className="" style={{ color: "var(--primary-color)" }}>client</h6>
            </div>
          </div>
    
        </div>
      </SwiperSlide>

      <SwiperSlide className="p-4 homeswiper" style={{ backgroundColor: "var(--secondary-bg-color)", borderBottom: "5px solid var(--primary-color)" ,borderRadius:"10px"}}>
        <div className="testimonial">
          <p
            className='testimonial-text displaypara '
            style={{ color: "var(--text-color)" }}
          >
            <FaQuoteLeft size={35} style={{ color: "var(--primary-color)" }} />
            The best experience I’ve had with custom clothing. The attention to detail and the fit were perfect. I feel so confident every time I wear my new suit. Highly recommend!
            <FaQuoteRight size={35} style={{ color: "var(--primary-color)" }} />
          </p>
          <div className="row align-items-end">
            <div className="col">
              <h4 className=" "style={{color:"white"}}>Customer 2</h4>
              <h6 className="" style={{ color: "var(--primary-color)" }}>client</h6>
            </div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide className="p-4 homeswiper" style={{ backgroundColor: "var(--secondary-bg-color)", borderBottom: "5px solid var(--primary-color)" ,borderRadius:"10px"}}>
        <div className="testimonial">
          <p
            className=' displaypara testimonial-text'
            style={{ color: "var(--text-color)" }}
          >
            <FaQuoteLeft size={35} style={{ color: "var(--primary-color)" }} />
            I’ve always struggled with finding clothes that fit me properly, but after connecting with a tailor, everything changed. The tailor was so patient, taking time to understand my preferences and suggesting the best style for my body.
            <FaQuoteRight size={35} style={{ color: "var(--primary-color)" }} />
          </p>
          <div className="row align-items-end">
            <div className="col">
              <h4 className=""style={{color:"white"}}>Customer 3</h4>
              <h6 className="" style={{ color: "var(--primary-color)" }}>client</h6>
            </div>
          </div>
  
        </div>
      </SwiperSlide>

      <SwiperSlide className="p-4 homeswiper" style={{ backgroundColor: "var(--secondary-bg-color)", borderBottom: "5px solid var(--primary-color)",borderRadius:"10px" }}>
        <div className="testimonial">
          <p
            className='testimonial-text displaypara '
            style={{ color: "var(--text-color)" }}
          >
            <FaQuoteLeft size={35} style={{ color: "var(--primary-color)" }} />
            I’ve been looking for a reliable tailor for years, and I finally found one! The process was simple, and the tailor took the time to understand my specific measurements and preferences.
            <FaQuoteRight size={35} style={{ color: "var(--primary-color)" }} />
          </p>
          <div className="row align-items-end">
            <div className="col">
              <h4 className=""style={{color:"white"}}>Customer 4</h4>
              <h6 className="" style={{ color: "var(--primary-color)" }}>client</h6>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper> 





</div>


</div>

    </>
  );
};

export default Home;




