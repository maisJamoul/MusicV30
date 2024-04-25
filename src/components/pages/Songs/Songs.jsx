import {useSelector,useDispatch} from "react-redux";
import {useEffect,useState} from 'react';
import {Link} from 'react-router-dom'
import { getSongs } from '../../../redux/action/action';

const Songs = () => {
  const [artist,setArtist]=useState('');
  const [name,setName]=useState('');

  const song=useSelector((state)=>state.getSong.song);


  const dispatch=useDispatch();
  const songs=useSelector((state)=>state.searchReducers.songs);

  useEffect(()=>{
    dispatch(getSongs(artist));
    
  },[dispatch,artist])

  const handleChange=(e)=>{
    e.preventDefault();
    setName(e.target.value);
    }

  const handleClick=(e)=>{
    e.preventDefault();
    setArtist(name);
    setName('');
    console.log(songs);
  }





  return (
    <div className="bg-dark border border-top border-danger border-3">
      <div className="container">
        
          <form className="p-5 d-flex flex-row justify-content-center align-items-center"  >
            <input  onChange={(e)=>handleChange(e)} className="form-control  rounded-0 rounded-start " style={{width:"300px"}} type="text" placeholder="Artist" aria-label=" input example" />
            <button className="btn btn-danger rounded-0 rounded-end" onClick={(e)=>handleClick(e)} >
              <i className="fs-6 fw-bolder bi bi-search"></i>
            </button>
          </form>
          <div className="row mx-0 py-5">

          { songs ?  songs.map((item)=>{
              return(
                <> 
                <div className="col-md-4  p-3 d-flex justify-content-center align-items-center" key={item.result.id}>
                  <div className="card" >
                    <img className="card-img-top m-auto"  src={item.result.song_art_image_url} alt={item.result.full_title} />
                    <div className="card-body">
                      <h5 className="card-title">{item.result.id}  </h5>
                      <p className="card-text fs-6">{item.result.title}</p>
                      <Link to={`/songs/${item.result.id}`}   className="btn btn-dark btn-sm">Watch it</Link>
                    </div>
                  </div>
                  {/* <Song item={item.result} /> */}
                </div>
                </>
              )
            })
            : console.log("there are not songs")
          }

          </div>
          
        </div>
      </div>
  )
}

export default Songs
