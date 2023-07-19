import { Route, Routes } from "react-router-dom"
import { Signup } from "../pages/Signup"
import { Addcar } from "../pages/Addcar"
import { NewCar } from "../pages/NewCar"


export const AllRoutes=()=>{
    return <Routes>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/add"  element={<Addcar/>}/>
        <Route path="/newcar"  element={<NewCar/>}/>
    </Routes>
}