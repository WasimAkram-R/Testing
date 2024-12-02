
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; 
import { CiLocationOn } from "react-icons/ci";
import { MdVerifiedUser } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa6";
import { IoMdStar } from "react-icons/io";

import Search from './Search.jpg'
import './Search.css'
import AOS from 'aos';

const SearchResults = () => {
  const { location } = useParams();  // Get location from the URL
  const [filteredContent, setFilteredContent] = useState([]);
  const navigate = useNavigate();  // Hook for navigation


  useEffect(() => {
    const allContent = [
      { location: 'Madurai', img:Search, content: 'Peter England', star: '4.5', ratings:'12',address:"ssi, smart city , silaiman-Madurai ",
        tags:["Tailors for Men","Measurement at Home","Materials pickup and drop"],
        number:"999999999" },
      { location: 'Chennai', img:'https://placehold.co/200', content: 'Zudio' , 
        star: '4.7', ratings:'15',
        address:"porur - Chennai ", 
        tags:["Tailors for Both","Uniform Tailoring","Same Day Tailoring"], 
        number:"9045728838"},
      { location: 'Madurai', img:Search, content: 'Crocodile', 
        star: '4.2', ratings:'21',
        address:"munichalai, Madurai ",
        tags:["Tailors for Women","Alternations","Bridal Tailoring"], number:"888888888" },
    ];

    const filtered = allContent.filter(item => item.location.toLowerCase() === location.toLowerCase());
    setFilteredContent(filtered);
  }, [location]);

  const handleImageClick = (tailorName) => {
    navigate(`/tailor/${tailorName}`);
  };





  useEffect(()=>{
    AOS.refresh();
 },[]);

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

            <div data-aos="fade-up" className="row  mb-4   py-3 px-1 rounded-3 align-items-center" style={{backgroundColor:"#151515",boxShadow:"0px 0px 2px gray"}} key={index} >

              <div className="col-lg-3 col-md-5 d-flex justify-content-center">
                <img src={item.img} alt={item.content} className=" img-fluid rounded searchimg" onClick={() => handleImageClick(item.content)} />
              </div>

              <div className="col-lg-9 col-md-7 py-3 py-md-0">
                <h3 style={{color:"#ff7b7b"}} onClick={() => handleImageClick(item.content)}><MdVerifiedUser style={{color:"#ff7b7b"}} /> {item.content}</h3>

   
                <div className='d-flex column-gap-2  pb-2'>
                 <button className='border-0 rounded px-1' style={{backgroundColor:"green",color:"white",   display: "flex", 
               justifyContent: "center", 
               alignItems: "center"}}> {item.star} <IoMdStar/>
               </button>          <span style={{color:"#c4c4c5"}}>{item.ratings} Ratings</span> 
                </div>


            {/* <div> */}
            <p className='' style={{color:"white"}}><CiLocationOn style={{color:"white"}}/> {item.address}
            </p>
            {/* </div> */}
                 
           
                 <div className="row">
                      <div className="col ">
                        {item.tags.map((tag, tagIndex) => (
                          <button 
                            key={tagIndex} 
                            className="bg-transparent border-0 me-3 mb-3" 
                            style={{ color: "#c4c4c5", fontSize: "13px",padding:"3px", boxShadow:"0px 0px 2px gray"}}>
                            {tag}
                          </button>
                        ))}
                      </div>
                    </div> 


               
                {/* <button style={{backgroundColor:"transparent",border:0,boxShadow:"0px 0px 2px #ff7b7b",fontSize:"15px"}} className=" px-2 py-1 rounded-1 text-white " >  <FaWhatsapp size={20} /> {item.number} </button>

<button style={{backgroundColor:"transparent",border:0,boxShadow:"0px 0px 2px #ff7b7b",fontSize:"15px"}} className="  px-2 py-1 rounded-1 text-white " > SEND ENQUIRY </button>

<button style={{backgroundColor:"transparent",border:0,boxShadow:"0px 0px 2px #ff7b7b",fontSize:"15px"}} className="  px-2 py-1 rounded-1 text-white " > CONNECT </button> */}

         
<button
  style={{
    backgroundColor: "transparent",
    border: 0,
    boxShadow: "0px 0px 2px #ff7b7b",
    fontSize: "15px",
  }}
  className="px-2 py-1 rounded-1 text-white"
>
  <FaWhatsapp size={20} /> {item.number}
</button>

<button
  style={{
    backgroundColor: "transparent",
    border: 0,
    boxShadow: "0px 0px 2px #ff7b7b",
    fontSize: "15px",
    // Add margin here
  }}
  className="px-2 py-1 rounded-1 text-white enquirybutton"
>
  SEND ENQUIRY
</button>

<button
  style={{
    backgroundColor: "transparent",
    border: 0,
    boxShadow: "0px 0px 2px #ff7b7b",
    fontSize: "15px",
  }}
  className="px-2 py-1 rounded-1 text-white"
>
  CONNECT
</button>



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












