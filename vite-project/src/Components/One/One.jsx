import React, { useEffect, useState } from 'react';
import './One.css'
import { useParams } from 'react-router-dom';  
import Gallery from '../Gallery/Gallery';  
import Services from '../Services/Services';  
import Testimonials from '../Testimonials/Testimonials'; 
import About from '../About/About';
import peter from './peterengland.jpg'
import AOS from 'aos';

const One = () => {
  const { name } = useParams();  // Get the tailor's name from the URL
  const [tailorData, setTailorData] = useState(null);

  useEffect(() => {
    // Simulated tailor data with more detailed content
    const allTailors = [
      {
        name: 'Peter England',
        description: 'Bespoke tailoring for all occasions, specializing in formal and casual attire.',

        about:['Welcome to [Tailor Name/Brand], where passion meets craftsmanship. With over [X years] of experience, we specialize in creating bespoke clothing that embodies elegance and individuality. Every piece is made with precision and care to ensure a perfect fit for every occasion.'],
        services: [
          { title: 'Bespoke Tailoring', description: 'Custom-fit suits, dresses, traditional wear, wedding and party wear and modern and casual wear etc.' },
          { title: 'Alternations', description: 'Perfect adjustments for your existing wardrobe.' },
          { title: 'Fabric Consulting', description: 'Helping you select the perfect fabric for your outfit.' },
        ],
        image: peter,
        testimonials: [
          { text: 'The custom shirts I ordered are amazing! They were made with precision and care. I will definitely be returing for more.', author: '[Customer Name]' },
          { text: 'I found the perfect wedding outfit here. The fit and finish were impeccable!.', author: '[Customer Name]' },
          { text: 'I had a wonderful experience with this tailor. The suit fit perfectly, and the attention to detail was impeccable! Highly recommend.', author: '[Customer Name]' },
        ],
      },

      {
        name: 'Zudio',
        description: 'Casual wear and modern tailoring for the everyday man.',
        about:['Welcome to [Tailor Name/Brand], where passion meets craftsmanship. With over [X years] of experience, we specialize in creating bespoke clothing that embodies elegance and individuality. Every piece is made with precision and care to ensure a perfect fit for every occasion.'],
        services: [
          { title: 'Casual Wear', description: 'Affordable and stylish casual wear.' },
          { title: 'Alterations', description: 'Perfect alterations to fit your existing wardrobe.' },
        ],
        image: 'tailorimage2.jpg',
        testimonials: [
          { text: 'Great casual outfits and quick turnaround!', author: 'Michael Lee' },
        ],
      },

      {
        name: 'Crocodile',
        description: 'Premium quality traditional and modern attire for all occasions.',
        about:['Welcome to [Tailor Name/Brand], where passion meets craftsmanship. With over [X years] of experience, we specialize in creating bespoke clothing that embodies elegance and individuality. Every piece is made with precision and care to ensure a perfect fit for every occasion.'],
        services: [
          { title: 'Traditional Wear', description: 'Handcrafted traditional wear with intricate designs.' },
          { title: 'Modern Casuals', description: 'Perfect fitting casuals with a modern touch.' },
        ],
        image: 'tailorimage3.jpg',
        testimonials: [
          { text: 'Great casual outfits and quick turnaround!', author: 'Michael Lee' },
        ],
      },
    ];

    // Find the tailor that matches the name parameter
    const selectedTailor = allTailors.find(t => t.name.toLowerCase() === name.toLowerCase());
    setTailorData(selectedTailor);
  }, [name]);


  useEffect(()=>{
    AOS.refresh();
 },[]);

  return (
   
    <>
   

    <div className="container-fluid pb-5">
      
      {tailorData ? (
        
        <div className="container">        
    

    <div className="row align-items-center row-gap-md-5 row-gap-4">

     <div className="col-lg-6" data-aos="fade-right">
     <img src={tailorData.image} className='img-fluid' alt="" />  
     </div>
     <div className="col-lg-6" data-aos="fade-left">
     <h1 className='fs-4 text-uppercase'style={{color:"#ff7b7b"}}>{tailorData.name}</h1>
     <h1 className='py-2 text-white onetext'>{tailorData.description}</h1>
     </div>
   </div>


        
           <About about={tailorData.about}/>
          <Services services={tailorData.services} />
          <Gallery tailorName={tailorData.name} />
      
          {tailorData.testimonials && tailorData.testimonials.length > 0 ? (
            <Testimonials testimonials={tailorData.testimonials} />
          ) : (
            <h1 className='fs-4 text-uppercase'style={{color:"#ff7b7b"}}>No testimonials available for this tailor.</h1> 
          )}

        </div>

      ) : (
        <h1 className='fs-4 text-uppercase'style={{color:"#ff7b7b"}}>Loading...</h1>
      )}
    </div>

    </>
  );
};

export default One;


    {/* <div className="img-wrapper">
            <img src={tailorData.image} alt={tailorData.name} className="img-fluid w-100" />
            <div className="overlay"></div> 
            <div className="text-overlay">
              <h2 style={{color:"#32064A"}} className='pb-3'>{tailorData.name}</h2>
              <p style={{color:"#E56B1F"}}>{tailorData.description}</p>
            </div>
          </div>  */}