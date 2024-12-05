
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; 
import { CiLocationOn } from "react-icons/ci";
import { MdVerifiedUser } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa6";
import { IoMdStar } from "react-icons/io";
import { MdFavoriteBorder } from "react-icons/md";

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
        { location: 'Madurai', img:Search, content: 'Suxus', 
          star: '4.2', ratings:'21',
          address:"Anna Nagar, Madurai ",
          tags:["Tailors for Men","Custom Suits & Shirts","Custom Jeans & Pants"], number:"7777777777" },
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
    
    <div className="container-fluid pb-5">
     
      <div className='container'>

      <h6 className='py-3 text-lg-start text-center text-uppercase ' style={{color:"var(--secondary-color)"}}>Results for : <span style={{color:"var(--text-color)"}}>{location}</span></h6>

        {filteredContent.length === 0 ? (
          <p className="text-lg-start text-center text-uppercase " style={{color:"var(--primary-color)"}}> No tailors found for : {location}</p>
        ) : (
          filteredContent.map((item, index) => (
            <div className="container">

            <div data-aos="fade-up" className="row  mb-3  py-1 rounded-3 align-items-center" style={{backgroundColor:"var(--secondary-bg-color)",boxShadow:"0px 0px 2px gray"}} key={index} >

              <div className="col-lg-2 col-md-4 d-flex justify-content-center">
                <img src={item.img} alt={item.content} className=" img-fluid rounded searchimg" onClick={() => handleImageClick(item.content)} />
              </div>

              <div className="col-lg-10 col-md-8 py-3 py-md-0">

              <div className='d-sm-flex  align-items-center  justify-content-between'>

              <h4 style={{color:"var(--primary-color)"}} onClick={() => handleImageClick(item.content)}><MdVerifiedUser style={{color:"var(--primary-color)"}} /> {item.content}</h4>
             
              {/* <p  className='d-sm-none '> <MdFavoriteBorder size={23} style={{color:"#ff7b7b"}}/></p> */}


              <div className='d-flex column-gap-2  pb-2'>
                 <button className='border-0 rounded px-1' style={{backgroundColor:"green",color:"white",   display: "flex", 
               justifyContent: "center", 
               alignItems: "center"}}> {item.star} <IoMdStar/>
               </button>          <span style={{color:"var(--text-color)"}}>{item.ratings} Ratings</span> 
                </div>
               

              </div>

   
                {/* <div className='d-flex column-gap-2  pb-2'>
                 <button className='border-0 rounded px-1' style={{backgroundColor:"green",color:"white",   display: "flex", 
               justifyContent: "center", 
               alignItems: "center"}}> {item.star} <IoMdStar/>
               </button>          <span style={{color:"#c4c4c5"}}>{item.ratings} Ratings</span> 
                </div> */}


            {/* <div> */}
            <p  className='' style={{color:"var(--secondary-color)",fontSize:"14px"}}><CiLocationOn style={{color:"var(--secondary-color)"}}/> {item.address}
            </p>
            {/* </div> */}
                 
           
                 <div className="row">
                      <div className="col ">
                        {item.tags.map((tag, tagIndex) => (
                          <button 
                            key={tagIndex} 
                            className="bg-transparent border-0 me-3 mb-3" 
                            style={{ color: "var(--text-color)", fontSize: "12px",padding:"3px", boxShadow:"0px 0px 2px gray"}}>
                            {tag}
                          </button>
                        ))}
                      </div>
                    </div> 


 <div className='d-flex  justify-content-between'>
   
<div>
<button
  style={{
    backgroundColor: "transparent",
    border: 0,
    boxShadow: "0px 0px 2px var(--primary-color)",
    fontSize: "14px",
    color:"var(--secondary-color)"
  }}
  className="px-2 py-1 rounded-1  whatsappbutton" 
>
  <FaWhatsapp size={20} /> {item.number}
</button>

<button
  style={{
    backgroundColor: "transparent",
    border: 0,
    boxShadow: "0px 0px 2px var(--primary-color)",
    fontSize: "14px",
     color:"var(--secondary-color)"
  }}
  className="px-2 py-1 rounded-1  enquirybutton"
>
  SEND ENQUIRY
</button>

<button
  style={{
    backgroundColor: "transparent",
    border: 0,
    boxShadow: "0px 0px 2px var(--primary-color)",
    fontSize: "14px",
     color:"var(--secondary-color)"
  }}
  className="px-2 py-1 rounded-1 "
>
  CONNECT
</button>  
</div> 

<p  className=''> <MdFavoriteBorder size={23} style={{color:"var(--primary-color)"}}/></p>
  
  </div>              
                
 
         
    

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












