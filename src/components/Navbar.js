import React from 'react'
import logo from '../logoblanco.png'


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark navbar-custom ">
        <div className="container">
        <a className="navbar-brand" href=""> <img className="logo push" src={logo} alt="logo.."/>   </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active animation">
              <a className="nav-link " href="#about">About <span className="sr-only">(current)</span></a>
            </li>
            {/* <li className="nav-item animation">
              <a className="nav-link " href="#work">Experience</a>
            </li> */}
            <li className="nav-item animation">
              <a className="nav-link " href="#work">Work</a>
            </li>
            <li className="nav-item animation">
              <a className="nav-link " href="#">Contact</a>
            </li>
          
          </ul>
        </div>
        </div>
      </nav>
    )
}

export default Navbar
