import React,{ useState,useEffect } from 'react';
import image1 from './Tailor_Image1.jpg';
import image2 from './Tailor_Image2.jpg';
import image3 from './Tailor_Image3.jpg';
import AOS from 'aos';


const Gallery = ({ tailorName }) => {
  // Gallery images categorized by type
  const galleryImages = {
 
        'Peter England': {
      'Traditional Outfits': [image1, image1, image1],
      'Wedding Wear': [image2, image2, image2],
      'Casual Wear': [image3, image3, image3],
    },
    'Zudio': ['image4.jpg', 'image5.jpg', 'image6.jpg'],
    'Crocodile': [ image1, 'image8.jpg', 'image9.jpg'],
  };

  useEffect(()=>{
    AOS.refresh();
 },[]);

  return (
    <div className='py-4'>
      <h3 style={{color:"var(--primary-color)"}} className='pb-4 displaytext text-uppercase'>Gallery</h3>

      {/* Row 1: Traditional Outfits */}
      {tailorName === 'Peter England' && (
        <div>
          <h5 className='pb-2' style={{color:"var(--secondary-color)"}}>Traditional Outfits</h5>
          <div className="row row-gap-5" data-aos="fade-up">
            {galleryImages[tailorName]['Traditional Outfits'].map((img, index) => (
              <div className="col-md-4"  key={index}>
                <img src={img} alt={`Traditional Outfit ${index + 1}`} className="img-fluid rounded-4" />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Row 2: Wedding Wear */}
      {tailorName === 'Peter England' && (
        <div className='pt-5'>
          <h5 className='pb-2' style={{color:"var(--secondary-color)"}}>Wedding Wear</h5>
          <div className="row row-gap-5" data-aos="fade-up">
            {galleryImages[tailorName]['Wedding Wear'].map((img, index) => (
              <div className="col-md-4" key={index}>
                <img src={img} alt={`Wedding Wear ${index + 1}`} className="img-fluid rounded-4" />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Row 3: Casual Wear */}
      {tailorName === 'Peter England' && (
        <div className='py-5'>
          <h5 className='pb-2' style={{color:"var(--secondary-color)"}}>Casual Wear</h5>
          <div className="row row-gap-5" data-aos="fade-up">
            {galleryImages[tailorName]['Casual Wear'].map((img, index) => (
              <div className="col-md-4" key={index}>
                <img src={img} alt={`Casual Wear ${index + 1}`} className="img-fluid rounded-4" />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* If the tailor is not 'Peter England', show generic images */}
      {tailorName !== 'Peter England' && (
        <div>
          <div className="row" data-aos="fade-up">
            {galleryImages[tailorName]?.map((img, index) => (
              <div className="col-md-4" key={index}>
                <img src={img} alt={`Gallery ${index + 1}`} className="img-fluid rounded-4" />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
