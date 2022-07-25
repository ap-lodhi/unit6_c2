import { LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCESS } from "./actionTypes"

const intialState={
    loading:false,
    error:false,
    token:null,
}

export const reducer =(state = intialState, {type, payload})=>{
    switch(type){
        case LOGIN_LOADING:
            return{
                ...state,
                loading:true

            }
            case LOGIN_SUCCESS:
                return{
                   ...state,
                   loading:false,
                   error:false,
                   token:payload
                  }  
           case LOGIN_ERROR:
               return{
                   ...state,
                   loading:false,
                   error:true
               }
            
               default:
                return{...state};                              
    }
}