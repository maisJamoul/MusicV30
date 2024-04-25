import React from 'react'
import './AlbumCard.css'
const AlbumCard = ({item}) => {
  return (
    <div className='m-2'>
      <img src={item.img} alt={item.id}/>
    </div>
  )
}

export default AlbumCard
