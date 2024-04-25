import React from 'react'
import './HomeHero.css';

const HomeHero=()=> {
  return (
    <>
    <div className="Hero py-5 position-static d-flex flex-column justify-content-center align-items-center">
      <h1 className="fs-1 text-white fw-bolder">
      Mp3
      </h1>
      <p className="pt-2 px-4 bg-danger text-bold fs-2 text-white">The Perfect Music</p>
      <h2 className="fs-2 text-white fw-bolder">Welcome To The Music</h2>
      <p className="px-5 fs-5 text-white text-center">Lorem ipsum dolor sit amet consec tetur adipiscing elit elit at felis 
        lacinia nec et est aptent taciti sociosqu ad litora torquent per 
        conubia nostra
      </p>
      <button className="px-4  py-2 fs-md-3 bg-white text-danger ">Download</button>
    </div>
    </>
  )
}

export default HomeHero
