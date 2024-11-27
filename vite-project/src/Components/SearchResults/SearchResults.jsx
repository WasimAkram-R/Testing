
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';  // Import useNavigate for navigation
import { CiLocationOn } from "react-icons/ci";
import { MdVerifiedUser } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa6";
// import { OverlayTrigger, Tooltip } from 'react-bootstrap';
// import Button from 'react-bootstrap/Button';

import Search from './Search.jpg'
import './Search.css'

const SearchResults = () => {
  const { location } = useParams();  // Get location from the URL
  const [filteredContent, setFilteredContent] = useState([]);
  const navigate = useNavigate();  // Hook for navigation


  useEffect(() => {
    const allContent = [
      { location: 'Madurai', img:Search, content: 'Peter England', address:"ssi, smart city , silaiman-Madurai ", number:"999999999" },
      { location: 'Chennai', img:'https://placehold.co/200', content: 'Zudio' , address:"porur-Madurai ", number:"9045728838"},
      { location: 'Madurai', img:Search, content: 'Crocodile', address:"munichalai, Madurai ", number:"888888888" },
    ];

    const filtered = allContent.filter(item => item.location.toLowerCase() === location.toLowerCase());
    setFilteredContent(filtered);
  }, [location]);

  const handleRowClick = (tailorName) => {
    // Navigate to the One component and pass the tailor's name in the URL
    navigate(`/tailor/${tailorName}`);
  };


  //tooltip

  // const renderTooltip = (props, phoneNumber) => (
  //   <Tooltip id="button-tooltip" {...props}>
  //     {phoneNumber ? phoneNumber : 'Phone number not available'}
  //   </Tooltip>
  // );

  return (
    <>
    
    <div className="container-fluid py-5 ">
     
      <div className='container'>

      <h3 className='pb-5 text-lg-start text-center text-uppercase text-white'>Results for : <span style={{color:"#c4c4c5"}}>{location}</span></h3>

        {filteredContent.length === 0 ? (
          <p className="text-lg-start text-center text-uppercase " style={{color:"#ff7b7b"}}> No tailors found for : {location}</p>
        ) : (
          filteredContent.map((item, index) => (
            <div className="container">
            <div className="row  mb-4   py-3 px-1 rounded-3 align-items-center" style={{backgroundColor:"#151515",boxShadow:"0px 0px 2px gray"}} key={index} onClick={() => handleRowClick(item.content)}>
              <div className="col-lg-2 col-md-3 d-flex justify-content-center">
                <img src={item.img} alt={item.content} className=" img-fluid rounded searchimg"  />
              </div>
              <div className="col-lg-10  col-md-9  text-md-start text-center py-3 py-md-0">
                <h3 style={{color:"#ff7b7b"}}><MdVerifiedUser style={{color:"#ff7b7b"}} /> {item.content}</h3>
                <p className='py-1' style={{color:"#c4c4c5"}}><CiLocationOn style={{color:"#c4c4c5"}}/> {item.address}</p>
                 
                 <button style={{backgroundColor:"transparent",border:0,boxShadow:"0px 0px 2px #ff7b7b"}} className=" me-3 px-4 py-2 rounded-1 text-white " >  <FaWhatsapp size={25} /> {item.number} </button>
            
                 {/* <FaWhatsapp className='' style={{width:"35px",height:"35px",color:"green",backgroundColor:""}} /> */}

                 {/* <OverlayTrigger
                  placement="right"
                  delay={{ show: 250, hide: 400 }}
                  overlay={(props) => renderTooltip(props, item.number)}
                >
                  <FaWhatsappSquare style={{ width: "40px", height: "40px", color: "green", cursor: 'pointer' }} />
                </OverlayTrigger> */}


              </div>
            </div>
            </div>
          ))
        )}

      
        
      </div>

   </div> 






   </>
  );
};

export default SearchResults;
