

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import SearchResults from './Components/SearchResults/SearchResults';
import ResponsiveNavbar from './Components/Navbar/Navbar';
import './App.css'
import One from './Components/One/One';
import { FaFacebookF } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import AboutUs from './Components/AboutUs/AboutUs';
import ContactUs from './Components/ContactUs/ContactUs';
import FAQ from './Components/FAQ/FAQ';

import { FaArrowUp } from "react-icons/fa";
import Terms_Conditions from './Components/Terms_Conditions/Terms_Conditions';
import Login from './Components/Login/Login';
import Partners from './Components/Partner/Partners';


function App() {



  return (
    <>
    <BrowserRouter>
      <ResponsiveNavbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search/:location" element={<SearchResults/>} /> 
        <Route path="/tailor/:name" element={<One/>} />

        <Route path="/partner"  element={<Partners/>} />
        <Route path="/aboutus" element={<AboutUs/>} />
        <Route path="/contactus" element={<ContactUs/>} />
        <Route path="/faq" element={<FAQ/>} />
        <Route path="/terms" element={<Terms_Conditions/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </BrowserRouter>

    <div className="container-fluid uppercontainer" id="scrollTarget"  style={{backgroundColor:"#151515"}}>
        <div className="container">
           <div className="row pt-4 row-gap-5">
             <div className="col-md-6">
             {/* <div className='text-white d-flex gap-3'>
             <FaFacebook    style={{width:"30px",height:"40px",color:""}} />
             <IoLogoWhatsapp style={{width:"30px",height:"40px",color:""}} />

        

             </div> */}
             <div className='text-white d-flex gap-3'>
          {/* Facebook Icon with Square Border */}
          <div className='icon-container'>
            < FaFacebookF style={{ width: "24px", height: "24px", color: "white" }} />
          </div>

          {/* WhatsApp Icon with Square Border */}
          <div className='icon-container'>
            <IoLogoWhatsapp style={{ width: "24px", height: "24px", color: "white" }} />
          </div>
        </div>
             <p className='pt-3 text-white' style={{fontSize:"14px"}}>© Copyright <span className='fw-medium'>TailorsHub</span> All Rights Reserved</p>
             <a href="/terms" className='' style={{fontSize:"14px",color:"#c4c4c5"}}>Terms And Conditions</a>
             </div>
             <div className="col-md-6">
                <form action="" className='footerform'>
                  <div>
                  <input type="tel" placeholder='Enter Your Number'className='w-75  form-control footerinput'/>
                  </div>
                   <div>
                   <input type="email" placeholder='Enter your Email'className='w-75 my-3  form-control footerinput'/>
                   <button type="submit" className='px-4 py-2 rounded-1 border-0 text-uppercase' style={{backgroundColor:"#ff7b7b",color:"white"}}>Submit</button>
                   </div>
                </form>
             </div>

           </div>
          
          
        </div>

    

        {/* <FiArrowUpCircle  className="upper"
          onClick={() => {
           
            window.scrollTo({
              top: 0,
              behavior: 'smooth'
            });
          }}/> */}
          <div className='icon-container upper'>
            <FaArrowUp  style={{ width: "24px", height: "24px", color: "white" }}className="uppe"
          onClick={() => {
           
            window.scrollTo({
              top: 0,
              behavior: 'smooth'
            });
          }}/>
          </div>

    </div>

    </>
  );
}

export default App;