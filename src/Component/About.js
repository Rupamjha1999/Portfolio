import React from 'react'
import '../App.css';
import girl from '../assets/images/girl.jpg';
import android from '../assets/images/android.png';
import js from '../assets/images/js.png';
import html from '../assets/images/html.png';
import mysql from '../assets/images/mysql.png';
import react from '../assets/images/react.png';
import bootstrap from '../assets/images/bootstrap.png';
import php from '../assets/images/php.png';

const About = () => {
  return (
    <div class="col-md-10" style={{marginLeft:'10%',marginTop:'20vh',width:'80%'}}>
           <h3 class="dark-color" >About Me</h3>
      <section class="section about-section gray-bg" id="about">
       
            <div class="abtcontainer">
               
                <div class="row align-items-center flex-row-reverse">
                    <div class="col-lg-6">
                        <div class="about-text go-to" >
                           
                            <h6 class="theme-color lead">Software Associate</h6>
                            <h5 className='abttext' style={{ color: 'white' }}>
                               <span>{'\u2192'}</span>  I am a Full Stack Developer working on Backend and frontend
                                I am experienced in multiple programming langauage as well as 
                                Familiar with different databases.
                                </h5>
                                 <h5 className='abttext' style={{ color: 'white' }}>
                                    <span>{'\u2192'}</span> I developed application using React,PHP,JAVA
                                    and Mysql as a backend database

                                 </h5>
                                  <h5 className='abttext' style={{ color: 'white' }}>
                                    <span>{'\u2192'}</span> I developed an app in Android  and i used APIs also
                                    Familiar with AGILE Model  and PROTYPE Model also.
                                 </h5>
                                   <h5 className='abttext' style={{ color: 'white' }}>
                                   <span>{'\u2192'}</span> Worked on Version control system that is Git,github
                                 </h5>
                         
                            
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="about-avatar">
                            <img className="abtimg" src={girl} title="" alt=""/>
                        </div>
                    </div>
                </div>
                <div class="counter">
                    <div class="row">
                        <div class="col-6 col-lg-3">
                            <div class="count-data text-center">
                                  <img className="langlogo" src={android} title="" alt=""/>
                            </div>
                        </div>
                        <div class="col-6 col-lg-3">
                            <div class="count-data text-center">
                                  <img className="langlogo" src={js} title="" alt=""/>
                            </div>
                        </div>
                        <div class="col-6 col-lg-3">
                            <div class="count-data text-center">
                                  <img className="langlogo" src={html} title="" alt=""/>
                            </div>
                        </div>
                        <div class="col-6 col-lg-3">
                            <div class="count-data text-center">
                                  <img className="langlogo" src={mysql} title="" alt=""/>
                            </div>
                        </div>
                         <div class="col-6 col-lg-3">
                            <div class="count-data text-center">
                                  <img className="langlogo" src={react} title="" alt=""/>
                            </div>
                        </div>
                         <div class="col-6 col-lg-3">
                            <div class="count-data text-center">
                                  <img className="langlogo" src={bootstrap} title="" alt=""/>
                            </div>
                        </div>
                        <div class="col-6 col-lg-3">
                            <div class="count-data text-center">
                                  <img className="langlogo" src={php} title="" alt=""/>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default About
