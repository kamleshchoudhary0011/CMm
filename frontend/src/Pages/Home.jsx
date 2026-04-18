import React, { useState } from 'react'
import {GiHamburgerMenu} from "react-icons/gi"
import SideBar from "../Layout/SideBar"
import {useDispatch , useSelector} from "react-redux"
import EmployeDashboard from "../componets/EmployeComponent/EmployeDashboard"
import EmAttendance from "../componets/EmployeComponent/EmAttendance"
import EmLives from "../componets/EmployeComponent/EmLives"
import EmMyTask from "../componets/EmployeComponent/EmMyTask"
import EmProfiles from "../componets/EmployeComponent/EmProfiles"





const Home = () => {
 const Dispatch = useDispatch()
 const {isAuthenticated , user} = useSelector(state=>state.auth);
  const [isSidebarOPen , SetisSidebarOpen ] = useState(false);

  const [selectedComponent , setSelectedComponent] = useState("");

    
  
   

  return (
    <>
    <div className='relative md:pl-64 flex min-h-screen bg-gray-300' >
 
 <div className='md:hidden z-10 absolute right-6 top-4 sm:top-6 flex justify-center items-center bg-black rounded-md h-9 w-9 text-white '>

   
<GiHamburgerMenu className='text-2xl' onClick={(()=>SetisSidebarOpen(!isSidebarOPen))}/>
 </div>
      <SideBar isSidebarOPen={isSidebarOPen} 
       setSelectedComponent={setSelectedComponent}
       SetisSidebarOpen={SetisSidebarOpen}   />



        {

        (()=>{
          switch(selectedComponent){
         
            case "Dashboard":{

              switch(user?.role){
                case "User":
                  return 

              }
            }



          }
        })()
       }


    </div>
    
    </>
  )
}

export default Home
