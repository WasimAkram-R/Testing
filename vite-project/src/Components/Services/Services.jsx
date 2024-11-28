import {React,useEffect} from 'react';
import { FaRegHandPointRight } from "react-icons/fa";
import AOS from 'aos';

const Services = ({ services }) => {

  useEffect(()=>{
    AOS.refresh();
 },[]);
  return (
    <div className=''data-aos="fade-up">
      <h3 style={{color:"#ff7b7b"}} className='text-uppercase displaytext' >Services</h3>
      <ul className='pt-2' >
        {services.map((service, index) => (
          <li key={index} className='list-unstyled'>
            <h5 style={{color:"white"}}><FaRegHandPointRight /> {service.title}</h5>
            <p className='displaypara' style={{color:"#c4c4c5"}}>{service.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Services;
