
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';  // Import useNavigate for navigation
import { CiLocationOn } from "react-icons/ci";
import { MdVerifiedUser } from "react-icons/md";
import { FaWhatsappSquare } from "react-icons/fa";

// import { OverlayTrigger, Tooltip } from 'react-bootstrap';
// import Button from 'react-bootstrap/Button';


const SearchResults = () => {
  const { location } = useParams();  // Get location from the URL
  const [filteredContent, setFilteredContent] = useState([]);
  const navigate = useNavigate();  // Hook for navigation


  useEffect(() => {
    const allContent = [
      { location: 'Madurai', img:'https://placehold.co/200', content: 'Peter England', address:"ssi, smart city , silaiman-Madurai ", number:"999999999" },
      { location: 'Chennai', img:'https://placehold.co/200', content: 'Zudio' , address:"porur-Madurai ", number:"9045728838"},
      { location: 'Madurai', img:'https://placehold.co/200', content: 'Crocodile', address:"munichalai, Madurai ", number:"888888888" },
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
    <div className="container py-5">
      <h3 className='pb-5 text-lg-start text-center'>Results for : {location}</h3>
      <div className='container'>
        {filteredContent.length === 0 ? (
          <p>No tailors found for {location}</p>
        ) : (
          filteredContent.map((item, index) => (
            <div className="row mb-5 row-md-gap-4 border p-3 rounded-3 w-100 h-100" key={index} onClick={() => handleRowClick(item.content)}>
              <div className="col-md-2 d-flex  justify-content-center">
                <img src={item.img} alt={item.content} className="img-fluid" />
              </div>
              <div className="col-md-6 text-md-start text-center pt-5 pt-md-0">
                <h3 style={{color:"#32064A"}}><MdVerifiedUser style={{color:"green"}} /> {item.content}</h3>
                <p style={{color:"#E56B1F"}}><CiLocationOn /> {item.address}</p>
                <button style={{backgroundColor:"#E42C6A"}} className="border-0 me-3 px-4 py-2 rounded-1 text-white">{item.number} </button>
                 < FaWhatsappSquare style={{width:"40px",height:"40px",color:"green"}} />

                 {/* <OverlayTrigger
                  placement="right"
                  delay={{ show: 250, hide: 400 }}
                  overlay={(props) => renderTooltip(props, item.number)}
                >
                  <FaWhatsappSquare style={{ width: "40px", height: "40px", color: "green", cursor: 'pointer' }} />
                </OverlayTrigger> */}


              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default SearchResults;
