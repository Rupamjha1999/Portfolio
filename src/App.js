import logo from './logo.svg';
import './App.css';
import './Component/Header'
import Header from './Component/Header';
import Footer from './Component/Footer';
import Home from './Component/Home';
import About from './Component/About';
import React,{useState} from 'react'




function App() {
   const [flag, setFlag] = useState('h'); 
    function home(){
    
        setFlag('h');
    }
     function about(){
    
         setFlag('a');
    }
     function resume(){
    
         setFlag('r');
    }
     function project(){
    
         setFlag('p');
    }
  return (
    <>
      <Header funcHome={home} funcAbout={about} funcProj={project} funcResume={resume}/>
      <Home flag={flag} />
    
     <Footer/>
    </>
  );
}

export default App;
