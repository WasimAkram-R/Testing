

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

  const handleDelete = (index) => {
    const updatedTestimonials = allTestimonials.filter((_, i) => i !== index);
    setAllTestimonials(updatedTestimonials);
  };

  return (
    <div data-aos="fade-up">
      <h3 style={{ color: '#ff7b7b' }} className='pb-3 displaytext text-uppercase'>
        Customer Testimonials
      </h3>

      {/* Swiper for displaying testimonials */}
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
      </Swiper>

      <h3 style={{ color: '#ff7b7b' }} className='py-md-5 py-4 displaytext text-uppercase'>
        Create Testimonials
      </h3>

      {/* Testimonial Form for New Reviews */}
      <form onSubmit={handleSubmit} className="testimonial-form formsform" >
        <div className="mb-3">
          <label htmlFor="name" className="form-label text-white">Your Name</label>
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
          <label htmlFor="rating" className="form-label text-white">Rating</label>
          <select
            id="rating"
            className="form-select formsinput"
            value={newTestimonial.rating}
            onChange={(e) => setNewTestimonial({ ...newTestimonial, rating: e.target.value })}
            required
          >
            <option value="0">Select Rating</option>
            <option value="1">1 Star</option>
            <option value="2">2 Stars</option>
            <option value="3">3 Stars</option>
            <option value="4">4 Stars</option>
            <option value="5">5 Stars</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="text" className="form-label text-white">Your Testimonial</label>
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

        <button type="submit" className="btn" style={{backgroundColor:"#ff7b7b",color:"white"}}>Submit</button>
      </form>
    </div>
  );
};

export default Testimonials;
