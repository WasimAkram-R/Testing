import React, { useEffect, useState } from 'react';
import './One.css'
import { useParams } from 'react-router-dom';  // Import useParams to capture URL parameters
import Gallery from '../Gallery/Gallery';  // Assuming you have a Gallery component
import Services from '../Services/Services';  // Assuming you have a Services component
import Testimonials from '../Testimonials/Testimonials';  // Assuming you have a Testimonials component
import About from '../About/About';
import peter from './peterengland.jpg'

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

  return (
    <div className="container pb-5">
      {tailorData ? (
      <div className="image-container">
        {/* <img src={tailorData.image} alt={tailorData.name} className="img-fluid w-100" style={{width:"",height:"350px"}} />
          <h2 style={{color:"#32064A"}}>{tailorData.name}</h2>
          <p>{tailorData.description}</p> */}
          
          
          {/* Image with text overlay */}
          <div className="img-wrapper">
            <img src={tailorData.image} alt={tailorData.name} className="img-fluid w-100" />
            <div className="overlay"></div> {/* This is the rgba overlay */}
            <div className="text-overlay">
              <h2 style={{color:"#32064A"}} className='pb-3'>{tailorData.name}</h2>
              <p style={{color:"#E56B1F"}}>{tailorData.description}</p>
            </div>
          </div> 


          {/* Render services, gallery, and testimonials */}
          <About about={tailorData.about}/>
          <Services services={tailorData.services} />
          <Gallery tailorName={tailorData.name} />
          {/* <Testimonals testimonals={tailorData.testimonals} /> */}

          {tailorData.testimonials && tailorData.testimonials.length > 0 ? (
            <Testimonials testimonials={tailorData.testimonials} />
          ) : (
            <p>No testimonials available for this tailor.</p> 
          )}

        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default One;
