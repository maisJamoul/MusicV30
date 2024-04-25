
import * as type from './../types';

export function getSongs(artist){
    return {
        type:type.GET_ARTIST_REQUESTED,
        payload:artist,
    } 
}
export function getSuccess(songs){
    return {
        type:type.GET_ARTIST_SUCCESS,
        songs:songs,
    } 
}
export function getFailed(message){
    return {
        type:type.GET_ARTIST_FAILED,
        message:message,
    } 
}
///////////////////////////////////////////////////
export function getSingleSongRequested(id){
    return {
        type:type.GET_SINGLE_SONG_REQUESTED,
        id:id
    }
}
export function getSingleSongSuccess(song){
    console.log(song)
    return {
        type:type.GET_SINGLE_SONG_SUCCESS,
        song:song,
    }

}
export function getSingleSongFailed(message){
    return {
        type:type.GET_SINGLE_SONG_FAILED,
        message:message,
    }
}