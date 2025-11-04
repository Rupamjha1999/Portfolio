import React from 'react'

const Header = (props) => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-dark">
        <a class="navbar-brand" href="#">RUPAM JHA</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
           
            </ul>
            <form class="form-inline my-2 my-lg-0">
          
            <button class="btn  my-2 my-sm-0" type="button" onClick={props.funcHome}>HOME</button>
            <button class="btn  my-2 my-sm-0" type="button" onClick={props.funcAbout}>ABOUT</button>
            <button class="btn  my-2 my-sm-0" type="button" onClick={props.funcProj}>PROJECTS</button>
            <button class="btn  my-2 my-sm-0" type="button" onClick={props.funcResume}>RESUME</button>
           
            </form>
        </div>
        </nav>
                
                    
     </div>
  )
}

export default Header
