import React from 'react'
import backgroundVideo from '../assets/videos/night.mp4';
import resume from '../assets/images/Rupamjha.pdf';
import '../App.css';
import About from '../Component/About';
import HomeItem from '../Component/HomeItem';
import Project from '../Component/Project';
import Resume from './Resume';



const Home = (props) => {

  return (
     
    <div className="App">
     
       <div className="video-container">
        <video autoPlay loop muted playsInline className="background-video">
          <source src={backgroundVideo} type="video/mp4" />
        </video>

     <div className="row">
        {props.flag === 'h' && <HomeItem/> }
        {props.flag === 'a' &&  <About/> }
        {props.flag === 'p' &&  <Project/> }
      
           
     </div>
        {props.flag === 'r' &&  <Resume pdfUrl={resume} style={{width:'80%'}}/>
 }
        
    </div>
    
      
    </div>
  )
}

export default Home
