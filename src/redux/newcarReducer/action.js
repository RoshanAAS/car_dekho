import axios from "axios"
import { baseUrl } from "../../api"
import { GET_REQUEST, GET_SUCCESS } from "./actionType"



  export const getcard=(param)=>(dispatch)=>{
         dispatch({type:GET_REQUEST})
        axios(`${baseUrl}/oem/cars/paginate`,param)
        .then((res)=>{
            dispatch({type:GET_SUCCESS,payload:res.data})
            console.log(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
  }