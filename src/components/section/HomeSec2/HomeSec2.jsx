import React from 'react'

import './HomeSec2.css'
const HomeSec2 = () => {
  return (
    <div className="row mx-0 HomeSec py-5">

      <div className="col-md-6 HomeSec1">

      </div>

      <div className="col-md-6 HomeSec2  bg-danger mt-md-3 mb-md-3 py-5 d-flex justify-content-center align-items-center">
       
        <div className="HomeSec2-text ">
          <h1 className='text-white fs-lg-1 fs-md-3 fw-bolder'>MEET OUR MUSIC STARS</h1>
          <p className="text-white fs-lg-5 fs-md-6">
            It is a long established fact that a reader will be distracted by the readable
            content of a page when looking at its layout. The point of using Lorem
          </p>
          <button className="py-md-2 px-md-3 border-0 bg-white text-danger">Read More</button>
        </div>
      
      </div>
    </div> 
  )
}

export default HomeSec2
