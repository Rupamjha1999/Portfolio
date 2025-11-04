import React from 'react'
import Typewriter from '../Component/Typewriter';
import Contact from '../Component/Contact';
import codeimg from '../assets/images/coding.png';
const HomeItem = () => {
  return (
   <>
       <div className="col-lg-5 content" >
          
            <Typewriter text="Hello......" speed={50} />
              <Typewriter text="This is Rupam Jha" speed={100} />
            <Typewriter text="Software Developer" speed={150} />
           
         <img className="codelogo" src={codeimg}/>
        
        </div>
          <div className="col-lg-7  contactCont" >
          
              <Contact/>
        </div>
    </>
  )
}

export default HomeItem
