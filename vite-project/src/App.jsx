

import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import SearchResults from './Components/SearchResults/SearchResults';
import ResponsiveNavbar from './Components/Navbar/Navbar';
import './App.css'
import One from './Components/One/One';
import AboutUs from './Components/AboutUs/AboutUs';
import ContactUs from './Components/ContactUs/ContactUs';
import FAQ from './Components/FAQ/FAQ';
import Terms_Conditions from './Components/Terms_Conditions/Terms_Conditions';
import Login from './Components/Login/Login';
import Partners from './Components/Partner/Partners';
import Policy from './Components/Policy/Policy';
import Footer from './Components/Footer/Footer';


function App() {



  return (
    <>
    {/* <BrowserRouter> */}
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
        <Route path="/policy" element={<Policy/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    {/* </BrowserRouter> */}

     <Footer/>
    </>
  );
}

export default App;