import { put, call, takeEvery} from 'redux-saga/effects';
import * as type from './../types';

// Songs
 const   FetchData=async(artist)=>await fetch(`https://genius-song-lyrics1.p.rapidapi.com/search/?q=${artist}&per_page=10&page=1`, {
        'method': 'GET',
        'headers': { 
            'X-RapidAPI-Key': '981d198685mshbb851988c650ac2p1c126cjsn8d9d73a9f308',
            'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com'
        }
    })
    .then(response => response.json())
.catch((error) => {throw error})



function* fetchArtists(action){  
    try{
        if(action.payload!==''){
            const response= yield call(FetchData,action.payload); 
                yield put({type:type.GET_ARTIST_SUCCESS,songs:response.hits//   .   *** */
            });
                console.log('songs ',response)
        }
     }
     catch (e) {
        yield put({type:type.GET_ARTIST_FAILED,message:'Result not found'})
        console.log(e.message)
    } 
}

/****************************************************************/

//  SingleSong
const fetchSingleData=async(id)=>await fetch(`https://genius-song-lyrics1.p.rapidapi.com/song/details/?id=${id}`, {
	'method': 'GET',
	'headers': {
        'X-RapidAPI-Key': '981d198685mshbb851988c650ac2p1c126cjsn8d9d73a9f308',
		'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com'
	}
}).then(response => response.json())
.catch((error) => {throw error})
	

function* fetchSingleSong(action){
    try { 
        const response =yield call(fetchSingleData,action.id);
        yield put({type:type.GET_SINGLE_SONG_SUCCESS,song:response.song});
        console.log("single song ",response)
    }catch (e){
        yield put({type:type.GET_SINGLE_SONG_FAILED,message:'Result not found'});
        console.log("single song error",e);
    }
}
/****************************************************/
function* songsSaga(){
    yield takeEvery(type.GET_ARTIST_REQUESTED,fetchArtists);
    yield takeEvery(type.GET_SINGLE_SONG_REQUESTED,fetchSingleSong);
}
export default songsSaga;

