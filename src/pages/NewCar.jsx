
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getcard } from "../redux/newcarReducer/action"
import "./newcar.css"
import { Carcard } from "../components/Carcard"
import { useLocation, useSearchParams } from "react-router-dom"
export const NewCar=()=>{

    const [searchParams]=useSearchParams()
   const {data}=useSelector((store)=> store.newcarReducer)

   const dispatch=useDispatch()

   const location =useLocation()

   
 
   const paramObj = {
 
     params: {
        titl:searchParams.get('titl'),
        location:searchParams.getAll('loaction')
       },
     };
     

   
   useEffect(()=>{
      dispatch(getcard(paramObj))
   },[location.key])
    return <div className="main_container">
        
         {
            data?.map((el)=> <Carcard {...el}/> )
         }
        
    </div>
}