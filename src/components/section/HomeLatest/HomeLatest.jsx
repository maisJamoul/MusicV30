
import './HomeLatest.css';
import {LatestNews} from '../../../Data/LatestNews'
import {LatestCard} from '../../container/index';
const HomeLatest = () => {
  return (
    <div className='mx-5 HomeLatest position-static'>
      <div className="desc text-center">
        <h1 className='fw-bolder'>Latest News</h1>
        <p className='mx-5 px-5'>
        It is a long established fact that a reader will be distracted by the readable
        content of a page when looking at its layout. The point of using Lorem
        </p>

      </div>
      <div className="row mx-0">
        {LatestNews.map((item)=>{
          return <div className="col-md-4 p-3 " key={item.id}>
            <LatestCard item={item } />
          </div>
        })}
      </div>
    </div>
  )
}

export default HomeLatest
