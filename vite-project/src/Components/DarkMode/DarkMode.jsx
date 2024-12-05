// import React from "react";
// import { ReactComponent as Sun } from "./Sun.svg";
// import { ReactComponent as Moon } from "./Moon.svg";
// import "./DarkMode.css";

// const DarkMode = () => {
//     return (
//         <div className='dark_mode'>
//             <input
//                 className='dark_mode_input'
//                 type='checkbox'
//                 id='darkmode-toggle'
//             />
//             <label className='dark_mode_label'  htmlFor='darkmode-toggle'>
//                  <Sun />
//                 <Moon /> 
//             </label>
//         </div>
//     );
// };

// export default DarkMode;




import React from "react";
import Sun from "./Sun.svg";
import Moon from "./Moon.svg";
import "./DarkMode.css";

const DarkMode = () => {

 const setDarkMode=()=>{
    document.querySelector("body").setAttribute('data-theme','dark')
 }

 const setLightMode=()=>{
    document.querySelector("body").setAttribute('data-theme','light')
 }

const toggleTheme=(e)=>{
    if (e.target.checked) setLightMode();
    else setDarkMode()
}

    return (
        <div className='dark_mode'>
            <input
                className='dark_mode_input'
                type='checkbox'
                id='darkmode-toggle'
                onChange={toggleTheme}
            />
         <label className="dark_mode_label" htmlFor="darkmode-toggle">
        <img src={Sun} alt="Sun" className="sun" />
        <img src={Moon} alt="Moon" className="moon"/>
    </label> 
        </div>
    );
};

export default DarkMode;

