import React from 'react'
import './Footer.css';
import logo from './../../../images/white-logo.png'
function Footer() {
  return (<>
    <div className="row foot text-start px-5 pt-5 lh-lg text-white bg-dark">
      <div className="col-md-4">
      <h5>Contact Us</h5>
        <ul className="">
            <li >
                <a href="#">104 New York , USA</a>
            </li>
            <li>
                <a href="#">Phone : ( +71 5896547 )</a>
            </li>
            <li>
                <a href="#">Email : demo@email.com</a>
            </li>
            
        </ul>
      </div>
      
      <div className="col-md-4">
        <h5>Useful Links</h5>
        <ul>
            <li>
                <a href="#">Home Page</a>
            </li>
            <li>
                <a href="#">About us</a>
            </li>
            <li>
                <a href="#">Contact Us</a>
            </li>
        </ul>
      </div>
      <div className="col-md-4">
        <h5>Help Information</h5>
        <ul>
            <li>
                <a href="#">Help</a>
            </li>
            <li>
                <a href="#">FAQ's</a>
            </li>
            
        </ul>
      </div>
      <div className='p-3'>
        <hr />

      </div>
    </div>
    <div className="text-light pb-5 text-white bg-dark d-flex justify-content-center align-items-center">
        Copyright © 2024 My Music. All Rights Reserved.
    </div>
  </>
  )
}

export default Footer
