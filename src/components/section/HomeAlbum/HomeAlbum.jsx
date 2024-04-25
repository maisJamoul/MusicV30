
import {AlbumCard} from './../../../components/container/index'
import './HomeAlbum.css'
import {AlbumItems} from '../../../Data/AlbumItems'

const HomeAlbum = () => {
  return (
    <div className="my-5">

      <div className="desc text-center">

        <h1 className='fw-bolder'>ALBUMS-BOX</h1>
        <p className='fs-5'>
        It is a long established fact that a reader will be distracted by the readable
        content of a page when looking at its layout. The point of using Lorem
        </p>

      </div>

      <div className="row mx-3  Album gx-5">
        {AlbumItems.map((item)=>{return <div className='col-md-6 p-3' key={item.id}>
          <AlbumCard item={item} />
        </div>}
        )}
          
      </div>

    </div> 
  )
}

export default HomeAlbum
