import React,{useEffect} from 'react'
import Accordion from 'react-bootstrap/Accordion';
import AOS from 'aos';
import { PiMaskHappyBold } from "react-icons/pi";
const FAQ = () => {

  useEffect(()=>{
    AOS.refresh();
 },[]);

  return (
    <>

  
<div className="container-fluid py-md-5 py-4"  >
     <div className="container">

<h1 className='displaytext' style={{color:"var(--primary-color)"}}>FAQ</h1>


<h3 className='pt-md-5 pt-4 pb-3  text-uppercase ' style={{color:"var(--secondary-color)"}}>For Customers <PiMaskHappyBold style={{color:"var(--primary-color)"}} /></h3> 


<Accordion data-aos="fade-right" >
<Accordion.Item eventKey="0" >
<Accordion.Header>1. How can I find a tailor through the platform?</Accordion.Header>
<Accordion.Body style={{ backgroundColor: 'black', color: 'white' }}>
Search for tailors by location, specialty, or design style. Each tailor's profile showcases their work, services, and reviews to help you make an informed choice.
</Accordion.Body>
</Accordion.Item>

<Accordion.Item eventKey="1" className='my-4'>
<Accordion.Header>2. Can I request a custom design?</Accordion.Header>
<Accordion.Body style={{ backgroundColor: 'black', color: 'white' }}>
Yes, you can communicate directly with the tailor to discuss your ideas, share design references, and create a custom outfit that fits your vision.
</Accordion.Body>
</Accordion.Item>

<Accordion.Item eventKey="2">
<Accordion.Header>3. How do I know if a tailor is reliable?</Accordion.Header>
<Accordion.Body style={{ backgroundColor: 'black', color: 'white' }}>
Check their profile for customer reviews, ratings and samples of their past work. Reliable tailors often have detailed profiles and positive testimonials.
</Accordion.Body>
</Accordion.Item>

<Accordion.Item eventKey="3" className='my-4'>
<Accordion.Header>4. What if the outfit doesn't fit or meet my expectations?</Accordion.Header>
<Accordion.Body style={{ backgroundColor: 'black', color: 'white' }}>
Most tailors offer alteration services and a consultation to
ensure the final product meets your expectations.
</Accordion.Body>
</Accordion.Item>

<Accordion.Item eventKey="4">
<Accordion.Header>5. How much does a custom outfit cost?</Accordion.Header>
<Accordion.Body style={{ backgroundColor: 'black', color: 'white' }}>
Costs vary based on fabric, design complexity and the tailors
expertise. You can request quotes from multiple tailors to compare prices.
</Accordion.Body>
</Accordion.Item>



</Accordion>



<h3 className='pt-md-5 pt-4 pb-3  text-uppercase 'style={{color:"var(--secondary-color)"}}>For Tailors <PiMaskHappyBold style={{color:"var(--primary-color)"}} /></h3>




<Accordion data-aos="fade-left">

<Accordion.Item eventKey="0">
  <Accordion.Header>1. Why do I need a website for my tailoring business?</Accordion.Header>
  <Accordion.Body style={{ backgroundColor: 'black', color: 'white' }}>
   A website helps showcase your work, attract more customers, and manage bookings or inquiries online. It gives your business a professional image and makes you accessible to large audience.
  </Accordion.Body>
</Accordion.Item>

<Accordion.Item eventKey="1" className='my-4'>
  <Accordion.Header>2. What is the purpose of connecting tailors with website owners?</Accordion.Header>
  <Accordion.Body style={{ backgroundColor: 'black', color: 'white' }}>
  This platform helps website owners (who run clothing, fashion, or e-commerce businesses) find skilled tailors to handle custom clothing orders, alterations, or special requests. It creates a space where tailors can showcase their skills to attract potential business partnerships.
  </Accordion.Body>
</Accordion.Item>


<Accordion.Item eventKey="2">
  <Accordion.Header>3. How do website owners find tailors on the platform? </Accordion.Header>
  <Accordion.Body style={{ backgroundColor: 'black', color: 'white' }}>
  Website owners can browse through a curated list of qualified tailors based on expertise, location, and customer ratings. They can view the tailor's profile, portfolio, and services offered to make an informed decision.
  </Accordion.Body>
</Accordion.Item>

<Accordion.Item eventKey="3" className='my-4'>
  <Accordion.Header>4. Can website owners negotiate prices with tailors?</Accordion.Header>
  <Accordion.Body style={{ backgroundColor: 'black', color: 'white' }}>
  Yes, website owners can communicate directly with tailors to discuss pricing, services, and project timelines. Tailors may offer custom rates based on the specific needs of the business.
  </Accordion.Body>
</Accordion.Item>

<Accordion.Item eventKey="4">
  <Accordion.Header>5. What criteria should website owners consider when selecting a tailor?</Accordion.Header>
  <Accordion.Body style={{ backgroundColor: 'black', color: 'white' }}>Website owners should consider factors like the tailor’s experience, areas of expertise (e.g., alterations, custom designs, embroidery), reviews from other businesses, pricing, and location. It's also helpful to view the tailor’s portfolio for previous work.
  </Accordion.Body>
</Accordion.Item>

<Accordion.Item eventKey="5" className='my-4'>
  <Accordion.Header>6. How can website owners ensure quality work from tailors? </Accordion.Header>
  <Accordion.Body style={{ backgroundColor: 'black', color: 'white' }}>Website owners can review ratings, testimonials, and portfolios to assess the tailor’s expertise. They can also start with smaller projects to evaluate the tailor’s quality before committing to large orders.
  </Accordion.Body>
</Accordion.Item>

<Accordion.Item eventKey="6">
  <Accordion.Header>7. Are there any fees for website owners to connect with tailors?</Accordion.Header>
  <Accordion.Body  style={{ backgroundColor: 'black', color: 'white' }}>The platform may charge a subscription fee or a small commission for each successful match or transaction. Detailed pricing structures will be available when you sign up.
  </Accordion.Body>
</Accordion.Item>

</Accordion>







</div>
     </div>


    </>
  )
}

export default FAQ