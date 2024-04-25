import * as type from './../types';

const state1={
    artist:'',
    message:'',
    songs:[],
    loading:false,
    error:false,
}

export  const searchReducers=(state=state1,action)=>{
     
    if (action.type===type.GET_ARTIST_SUCCESS){
        return {state,
                songs:action.songs,
                loading:true}
    }
    if (action.type===type.GET_ARTIST_FAILED){
        return {state, 
                error:true,
                message:action.message,
        }
    }
    //   if (action.type===type.GET_ARTIST_REQUESTED){
    //     return {
    //         ...state, 
    //     }
    // }
    return state;
}