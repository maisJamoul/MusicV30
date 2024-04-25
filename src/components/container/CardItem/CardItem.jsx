import React from 'react'

const CardItem = ({item}) => {
  return (
    <div>
      <div className="card border border-0 rounded-2" >
        <div className="mx-auto">
          <span className='bg-danger text-white rounded-circle d-flex justify-content-center align-items-center py-4 px-5'>{item.img}</span>
        </div>
        
        <div className="card-body">
          <h5 className="card-title fw-bolder">{item.name}</h5>
          <p className="card-text">{item.desc}</p>
          
        </div>
      </div>
    </div>
  )
}

export default CardItem
