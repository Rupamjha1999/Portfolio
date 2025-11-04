import React from 'react'

const Project = () => {
  return (
    <div className='row'>
       <div className="card col-sm-5 projcard" style={{width: '18rem',marginTop:'12vh',marginLeft:'9vh'}}>
        
        <div className="card-body">
           <h5 className="card-title">Allottees pay</h5>
            <h6 className="card-title lang">React JS,PHP,MYSQL,HTML,JS,BOOTSTRAP</h6>
          <p className="card-text">  
             Developing CRM Project 
            Integrated RESTful APIs to enhance application functionality.
            Php and MYSQL database used as backend data storage. 
            Using Prototype Methodology
            </p>
          <a href="#" className="btn btn-primary">CRM</a>
        </div>
      </div>
      <div className="card col-sm-5 projcard" style={{width: '18rem',marginTop:'12vh',marginLeft:'9vh'}}>
        
        <div className="card-body">
          <h5 className="card-title">Live and mobile blood bank System(LMBB)</h5>
            <h6 className="card-title lang">PHP,MYSQL,HTML,JS,BOOTSTRAP</h6>
          <p className="card-text"> 
              It is Website which is developed for allocation of Donor to the hospitals depends on the requirement
              of blood in hospital. 
              Fully Backend Automated using TRIGGERS ,PROCEDURES. 
              Frontend Developed Using HTML,CSS,JS,BOOTSTRAP
              Scripting Language-PHP 
              Backend Database MYSQL.</p>
          <a href="#" className="btn btn-primary">E-Commerce</a>
        </div>
      </div>
      <div className="card col-sm-5 projcard" style={{width: '18rem',marginTop:'12vh',marginLeft:'9vh'}}>
        
        <div className="card-body">
          <h5 className="card-title">Canteen Management System (CMS)</h5>
          <h6 className="card-title lang">JAVA,PHP,MYSQL,HTML,JS,BOOTSTRAP,Android</h6>
          <p className="card-text"> 
              
              CMS collects the transaction of canteen Sale and return snacks and updates data in database.
              it works on both online and offline.
              It is a HYBRID Project. 
              Developed in Flutter,MYSQL,PHP.
              </p>
          <a href="#" className="btn btn-primary">Deskstop Application  and<br/> Android App</a>
        </div>
      </div>
      <div className="card col-sm-5 projcard" style={{width: '18rem',marginTop:'12vh',marginLeft:'9vh'}}>
        
         <div className="card-body">
           <h5 className="card-title">Claim Management System</h5>
            <h6 className="card-title lang">PHP,MYSQL,HTML,JS,BOOTSTRAP</h6>
          <p className="card-text">  
 
                    It is a Deskstop Application which is developed to raise employee’s Claim in a organisation.
                    Developed in PHP,MYSQL. 
                    It is developed to manage and track the claim apply by employees. 
                    And the Reimbursement approved by senior Authority.
                    Client name-RLD</p>
          <a href="#" className="btn btn-primary">CRM</a>
        </div>
      </div>
      
    </div>
  )
}

export default Project
