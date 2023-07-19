import { GET_REQUEST, GET_SUCCESS } from "./actionType";


const initState={
    isLoading:false,
    data:[],
    isError:false
}


export const reducer = (state=initState,{type,payload}) => {
    switch(type){

       case GET_REQUEST:{
          return {...state,isLoading:true}
       }
       case GET_SUCCESS:{
        return {...state,isLoading:false,data:payload}
       }
      case GET_SUCCESS:{
          return {...state,isError:true,isLoading:false}
      }
      default:{
        return state
      }
    }
};