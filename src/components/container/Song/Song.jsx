import {useSelector,useDispatch} from "react-redux";
import {useEffect} from 'react'
/////////******** */
import { useParams } from 'react-router';
import {getSingleSongRequested} from './../../../redux/action/action'
const Song = () => {
    ////**************** */
    const {id}=useParams();
    
    const dispatch=useDispatch();
    const song=useSelector((state)=>state.getSong.song);

    useEffect(()=>{
      dispatch(getSingleSongRequested(id));
      console.log(song)
      
    },[dispatch,id])


  return (
    <div className="py-5 bg-danger ">
      <div class="ratio ratio-4x3 ">
        <div className="text-warning d-flex justify-content-center align-items-center">
          <iframe src={song.youtube_url} title="YouTube video" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  )
}

export default Song
  