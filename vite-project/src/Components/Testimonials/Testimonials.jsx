

import {React,useEffect} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; 
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade'; 
import { FaQuoteLeft } from "react-icons/fa6";
import { FaQuoteRight } from "react-icons/fa6";
import AOS from 'aos';

const Testimonials = ({ testimonials }) => {

  useEffect(()=>{
    AOS.refresh();
 },[]);

  return (
    <div data-aos="fade-up">
      <h3 style={{color:"#ff7b7b"}} className='pb-3 displaytext text-uppercase' >Customer Testimonials</h3>
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
           {testimonials.map((testimonial, index) => (
        <SwiperSlide key={index} className=' p-4' style={{ backgroundColor: "#151515", borderBottom: "5px solid #ff7b7b" }}>
          <div className="">
          
            <p className=" displaypara" style={{color:"#c4c4c5"}}><FaQuoteLeft size={35}  style={{color:"#ff7b7b"}}/>  {testimonial.text} <FaQuoteRight size={35}  style={{color:"#ff7b7b"}}/>
            </p>
            


            <div className="row align-items-end">
              <div className="col">
              <h4 className="testimonial-name text-white">{testimonial.author}</h4>
              <h6 className="testimonial-name" style={{color:"#ff7b7b"}}>client</h6>
              </div>

            </div>

          </div>
        </SwiperSlide>

  
))}
      </Swiper> 


    </div>
  );
};

export default Testimonials;






{/* <Carousel.Item interval={1000}>
<div className="d-flex justify-content-center">
   <img
         className="d-block w-25 rounded-circle"
         src="https://via.placeholder.com/100"
         alt=""
         style={{ maxWidth: '100px', marginRight: '20px' }}
       />
   <div>
   <p style={{fontSize:"15px"}}></p>
   <h6></h6>
   </div>

</div>
</Carousel.Item>

<Carousel.Item interval={1000}>
<div className="d-flex justify-content-center">
   <img
         className="d-block w-25 rounded-circle"
         src="https://via.placeholder.com/100"
         alt=""
         style={{ maxWidth: '100px', marginRight: '20px' }}
       />
   <div>
   <p style={{fontSize:"15px"}}></p>
   <h6></h6>
   </div>

</div>
</Carousel.Item> */}
