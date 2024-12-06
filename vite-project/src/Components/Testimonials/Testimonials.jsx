

// import {React,useEffect} from 'react';


// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css'; 
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import 'swiper/css/effect-fade'; 
// import { FaQuoteLeft } from "react-icons/fa6";
// import { FaQuoteRight } from "react-icons/fa6";
// import AOS from 'aos';
// import './Testimonials.css'


// const Testimonials = ({ testimonials }) => {

//   useEffect(()=>{
//     AOS.refresh();
//  },[]);





//   return (
//     <div data-aos="fade-up">
//       <h3 style={{color:"#ff7b7b"}} className='pb-3 displaytext text-uppercase' >Customer Testimonials</h3>
//       <Swiper
        
//         spaceBetween={20}
//         loop={true}
//         autoplay={{
//           delay: 1000,
//           disableOnInteraction: false,
//         }}
//         pagination={{
//           clickable: true,
//         }}
//         effect="fade"
//         breakpoints={{
//           // When window width is >= 320px (small mobile devices)
//           320: {
//             slidesPerView: 1,  // 1 slide at a time
//           },
//           // When window width is >= 768px (tablet)
//           768: {
//             slidesPerView: 2,  // Show 2 slides at a time
//           },
//           // When window width is >= 1024px (desktop)
//           1024: {
//             slidesPerView: 3,  // Show 3 slides at a time
//           },
//         }}
//       >
//            {testimonials.map((testimonial, index) => (
//         <SwiperSlide key={index} className='testimonialsswiper  p-4' style={{ backgroundColor: "#151515", borderBottom: "5px solid #ff7b7b" }}>
//           <div className="">
          
//             <p className=" displaypara" style={{color:"#c4c4c5"}}><FaQuoteLeft size={35}  style={{color:"#ff7b7b"}}/>  {testimonial.text} <FaQuoteRight size={35}  style={{color:"#ff7b7b"}}/>
//             </p>
            


//             <div className="row align-items-end">
//               <div className="col">
//               <h4 className="testimonial-name text-white">{testimonial.author}</h4>
//               <h6 className="testimonial-name" style={{color:"#ff7b7b"}}>client</h6>
//               </div>

//             </div>

//           </div>
//         </SwiperSlide>

  
// ))}
//       </Swiper> 
    

//       <h3 style={{color:"#ff7b7b"}} className='pb-3 displaytext text-uppercase' >Create Testimonials</h3>

//     </div>
//   );
// };

// export default Testimonials;








import { React, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; 
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade'; 
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa6';
import AOS from 'aos';
import './Testimonials.css';
import { Row, Col, Button } from 'react-bootstrap'; 
import { CiStar } from "react-icons/ci";
const Testimonials = ({ testimonials }) => {
  const [newTestimonial, setNewTestimonial] = useState({
    name: '',
    rating: 0,
    text: '',
  });

  const [allTestimonials, setAllTestimonials] = useState(testimonials);

  useEffect(() => {
    AOS.refresh();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add the new testimonial to the list
    if (newTestimonial.name && newTestimonial.text) {
      setAllTestimonials([
        ...allTestimonials,
        {
          text: newTestimonial.text,
          author: newTestimonial.name,
          rating: newTestimonial.rating,
        },
      ]);
      // Reset form
      setNewTestimonial({ name: '', rating: 0, text: '' });
    }
  };

  // const handleDelete = (index) => {
  //   const updatedTestimonials = allTestimonials.filter((_, i) => i !== index);
  //   setAllTestimonials(updatedTestimonials);
  // };

  
  return (
    <div data-aos="fade-up">
   
   
      <h4 style={{ color: 'var(--primary-color)' }} className='pb-4  text-uppercase'>
        Create Testimonials
      </h4>

      {/* Testimonial Form for New Reviews */}
      <form onSubmit={handleSubmit} className="testimonial-form formsform" >
        <div className="mb-3">
          <label htmlFor="name" className="form-label "style={{ color: 'var(--secondary-color)' }}>Your Name</label>
          <input
            type="text"
            id="name"
            className="form-control  formsinput"
            placeholder="Enter your name"
            value={newTestimonial.name}
            onChange={(e) => setNewTestimonial({ ...newTestimonial, name: e.target.value })}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="rating" className="form-label "style={{ color: 'var(--secondary-color)' }}>Rating</label>
          <select
            id="rating"
            className="form-select formsinput"
            value={newTestimonial.rating}
            onChange={(e) => setNewTestimonial({ ...newTestimonial, rating: e.target.value })}
            required
          >
            <option value="0" className=''>Select Rating</option>
            <option value="1">1 Star</option>
            <option value="2">2 Stars</option>
            <option value="3">3 Stars</option>
            <option value="4">4 Stars</option>
            <option value="5">5 Stars</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="text" className="form-label "style={{ color: 'var(--secondary-color)' }}>Your Testimonial</label>
          <textarea
            id="text"
            className="form-control formsinput"
            rows="4"
            placeholder="Write your testimonial here"
            value={newTestimonial.text}
            onChange={(e) => setNewTestimonial({ ...newTestimonial, text: e.target.value })}
            required
          ></textarea>
        </div>

        <button type="submit" className="btn" style={{backgroundColor:"var(--primary-color)",color:"var(--secondary-color)"}}>Submit</button>
      </form>



      <h3 style={{ color: 'var(--primary-color)' }} className='py-md-5 py-4 displaytext text-uppercase'>
        Customer Testimonials
      </h3>

  
   

{/* <Swiper
  spaceBetween={0}
  loop={true}
  autoplay={{
    delay: 1000,
    disableOnInteraction: false,
  }}
  pagination={{
    clickable: true,
  }}
  effect="fade"
  slidesPerView={1}
  breakpoints={{
    // Adjust slidesPerView and spaceBetween for different screen sizes
    640: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
  }}
>
        {allTestimonials.map((testimonial, index) => (
          <SwiperSlide key={index} className='testimonialsswiper p-4' style={{ backgroundColor: '#151515', borderBottom: '5px solid #ff7b7b' }}>
            <div>
              <p className="displaypara" style={{ color: '#c4c4c5' }}>
                <FaQuoteLeft size={35} style={{ color: '#ff7b7b' }} />  
                {testimonial.text} 
                <FaQuoteRight size={35} style={{ color: '#ff7b7b' }} />
              </p>
              <div className="row align-items-end">
                <div className="col">
                  <h5 className="testimonial-name text-white">{testimonial.author}</h5>
                  <h6 className="testimonial-name" style={{ color: '#ff7b7b' }}>client</h6>
                </div>
                <div className="">
                  <button 
                    className="btn formsbutton text-white" 
                    onClick={() => handleDelete(index)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper> */}

{/* <Swiper
  spaceBetween={0}
  loop={true}
  autoplay={{
    delay: 1000,
    disableOnInteraction: false,
  }}
  pagination={{
    clickable: true,
  }}
  effect="fade"
  slidesPerView={1} // Ensures only 1 slide is visible at a time
  breakpoints={{
    640: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
  }}
>
  {allTestimonials.map((testimonial, index) => (
    <SwiperSlide
      key={index}
      className="testimonialsswiper p-4"
      style={{
        backgroundColor: '#151515',
        borderBottom: '5px solid #ff7b7b',
        padding: '20px', // Ensures padding is there for mobile/desktop responsiveness
        display: 'flex', // Centers the content vertically and horizontally
        alignItems: 'center', // Centers the content vertically
        justifyContent: 'center', // Centers the content horizontally
      }}
    >
      <div>
        <p className="displaypara" style={{ color: '#c4c4c5' }}>
          <FaQuoteLeft size={35} style={{ color: '#ff7b7b' }} />
          {testimonial.text}
          <FaQuoteRight size={35} style={{ color: '#ff7b7b' }} />
        </p>
        <div className="row align-items-end">
          <div className="col">
            <h5 className="testimonial-name text-white">{testimonial.author}</h5>
            <h6 className="testimonial-name" style={{ color: '#ff7b7b' }}>
              client
            </h6>
          </div>
          <div>
            <button
              className="btn formsbutton text-white"
              onClick={() => handleDelete(index)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </SwiperSlide>
  ))}
</Swiper> */}


<Row>
        {allTestimonials.map((testimonial, index) => (
          <Col xs={12} key={index} className="mb-4">
            <div
              className="testimonialsswiper p-4"
              style={{
                backgroundColor: 'var(--secondary-bg-color)',
                borderBottom: '5px solid var(--primary-color)',
                padding: '20px', 
                display: 'flex',
                flexDirection: 'column', 
                justifyContent: 'center', 
              }}
            >
              <div>
                <div className="row align-items-end">
                  <div className="col">
                    <div className="d-flex align-items-center column-gap-4">
                      <img src="https://placehold.co/60" className='rounded-circle' alt="" />
                     <h5 className="testimonial-name " style={{color:"white"}}>{testimonial.author}</h5>
                    </div>
                  </div>
                    <h5 className="pt-3" style={{color:"var(--primary-color)"}} ><CiStar /><CiStar /><CiStar /><CiStar /><CiStar /></h5>
                  {/* <div>
                    <Button
                      variant="danger"
                      onClick={() => handleDelete(index)}
                      className="text-white"
                    >
                      Delete
                    </Button>
                  </div> */}
                </div>
                <p className="displaypara" style={{ color: 'var(--text-color)' }}>
                  {/* <FaQuoteLeft size={35} style={{ color: '#ff7b7b' }} /> */}
                  {testimonial.text}
                  {/* <FaQuoteRight size={35} style={{ color: '#ff7b7b' }} /> */}
                </p>
              </div>

            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Testimonials;
