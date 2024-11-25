// import React from 'react';
// import Carousel from 'react-bootstrap/Carousel';

// const Testimonals = ({ testimonals }) => {
//   return (
//     <div>
//       <h3>Customer Testimonals</h3>

//         {/* // <div key={index} className="testimonal">
//         //   <p>"{testimonal.text}"</p>
//         //   <p><strong>- {testimonal.author}</strong></p> 
//         // </div>*/}


// <Carousel className='pt-5'>
//       {testimonals.map((testimonal, index) => (
// <Carousel.Item interval={1000}  key={index}>
        

// <div className="d-flex justify-content-center">
//    <img
//          className="d-block w-25 rounded-circle"
//          src="https://via.placeholder.com/100"
//          alt=""
//          style={{ maxWidth: '100px', marginRight: '20px' }}
//        />
//    <div>
//    <p style={{fontSize:"15px"}}>{testimonal.text}</p>
//    <h6>{testimonal.author}</h6>
//    </div>

// </div>
// </Carousel.Item>
//  ))}
// </Carousel>


     
//     </div>
//   );
// };

// export default Testimonals;




import React from 'react';
import Carousel from 'react-bootstrap/Carousel';


const Testimonials = ({ testimonials }) => {
  return (
    <div>
      <h3 style={{color:"#32064A"}} >Customer Testimonials</h3>

      {/* Single Carousel Component with all items inside */}
      <Carousel className="pt-5">
        {testimonials.map((testimonial, index) => (
          <Carousel.Item interval={1000} key={index}>
            <div className="d-flex justify-content-center align-items-center">
              {/* Testimonial Image */}
              <img
                className="d-block w-25 rounded-circle"
                src="https://via.placeholder.com/100"
                alt=""
                style={{ maxWidth: '100px', marginRight: '20px' }}
              />
              {/* Testimonial Text and Author */}
              <div>
                <p style={{ fontSize: '15px', maxWidth: '400px',color:"#E56B1F" }}>
                  "{testimonial.text}"
                </p>
                <h6 style={{color:"#32064A"}} >{testimonial.author}</h6>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
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
