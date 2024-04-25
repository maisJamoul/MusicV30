import React from 'react'

const LatestCard = ({item}) => {
  return (
    // <div>
      <div className="card shadow bg-body-tertiary" >
        <img className="card-img-top" src={item.img} alt="Card image cap" />
        <div className="card-body text-start p-4">
          <h5 className="fs-bolder">{item.name}</h5>
          <p className="card-text ">{item.desc}</p>
        </div>
      </div>
    // </div>
  )
}

export default LatestCard
