export const initialState={
    total:0,
    songs:[]
}
const storeReducer=(state,action)=>{
    switch (action.type){
        case "add":
                return{
                ...state,
                songs:action.payload
            }
   
        case "remove":
            return{
            ...state,
            songs:action.payload 
        }

        case "update":
            return{
            ...state,
            total:action.payload
        }

        default: return state;    
    }
} 
export default storeReducer;