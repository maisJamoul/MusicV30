import * as type from './../types';
const initialState={
    id:null,
    SName:'',
    song:{},
    message:''
}
export const getSong=(state=initialState,action)=>{
    if (action.type===type.GET_SINGLE_SONG_REQUESTED){
        return{
            ...state,
        }
    }
     if (action.type===type.GET_SINGLE_SONG_SUCCESS){
        return{
            ...state, 
            id:action.id,
            song:action.song,
        }
    }
     if (action.type===type.GET_SINGLE_SONG_FAILED){
        return{
            ...state,
            message:action.message,
        }
    }
    return state;
}