import React from 'react';
import { FaRegHandPointRight } from "react-icons/fa";

const Services = ({ services }) => {
  return (
    <div className='py-3'>
      <h3 style={{color:"#32064A"}}>Services</h3>
      <ul >
        {services.map((service, index) => (
          <li key={index} className='list-unstyled'>
            <h5 style={{color:"#E56B1F"}}><FaRegHandPointRight /> {service.title}</h5>
            <p>{service.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Services;
