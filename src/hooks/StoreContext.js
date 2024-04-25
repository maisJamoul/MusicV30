import { createContext, useReducer } from "react";
import storeReducer,{initialState} from './reducer.js';

export const StoreContext =createContext();

export const StoreProvider=({children})=>{
    
    const [state,dispatch]=useReducer(storeReducer,initialState)
    //  //////////////////
    const addToBasket=(song)=>{
        const updatedBasket=state.songs;
        updatedBasket.push(song);
        updatePrice(updatedBasket);

        dispatch({
            type:"add",
            payload:updatedBasket
        });
    }
    // //////////////////
    const removeFromBasket=(song)=>{
        const updatedBasket=state.songs.filter((currentsong)=>currentsong.id!==song.id);
        updatePrice(updatedBasket);

        dispatch({
            type:"remove",
            payload:updatedBasket
        });
    }
    // ///////////////////
    const updatePrice=(songs)=>{
        let total=0;
        songs.forEach((product)=>total+=product.price);
        console.log(state.total);
        state.total=total;
        dispatch({
            type:"update price",
            payload:state.total
        });
    }
    // //////////////////
    
        const value={ 
            total:state.total,
            products:state.products,
            addToBasket,
            removeFromBasket
        }

    return <StoreContext.Provider value={value}>
        {children}
    </StoreContext.Provider>
}
