import React, { useState } from 'react'
import {GiHamburgerMenu} from "react-icons/gi"
import SideBar from "../Layout/SideBar"
import {useDispatch , useSelector} from "react-redux"
import EmployeDashboard from "../componets/EmployeComponent/EmployeDashboard"
import EmAttendance from "../componets/EmployeComponent/EmAttendance"
import EmLives from "../componets/EmployeComponent/EmLives"
import EmMyTask from "../componets/EmployeComponent/EmMyTask"
import EmProfiles from "../componets/EmployeComponent/EmProfiles"
// <<<<<<< HEAD
import EmLivesa from '../componets/EmployeComponent/EmLives.jsx' 
// =======

import MrDashbord from "../componets/ManegarComponent/MrDashbord"
import MrProject from "../componets/ManegarComponent/MrProject"
import MrReports from "../componets/ManegarComponent/MrReports"
import MrSetting from "../componets/ManegarComponent/MrSetting"
import MrTeam from "../componets/ManegarComponent/MrTeam"
// >>>>>>> 4963b1f14cec869f703545cc75660611a9baa0b4

import HrAttendance from "../componets/HrComponent/HrAttendance"
import HrAttendanceses from "../componets/HrComponent/HrAttendanceses"
import HrDashbord from "../componets/HrComponent/HrDashbord"
import HrEmployes from "../componets/HrComponent/HrEmployes"
import HrLives from "../componets/HrComponent/HrLives"
import HrPayrole from "../componets/HrComponent/HrPayrole"


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
                case "Employe":
                  return <EmployeDashboard/>;

                  case " Manager" :
                    return <MrDashbord/>;

                    case "Hr":
                      return<HrDashbord/>;

                      default:
                        return<div> No dashbord found</div>
              }


            }

            case "Emattendance":
              // if(user?.role==="Employe"){
                return <EmAttendance/>
              // }
              break;
            case "EmLives":
              // if(user?.role === "Employe"){
                 return <EmLives/>
                
              // }
              break;

               case "EmMyTask":
                // if(user?.role === "Employe"){
                  return <EmMyTask/>
                // }
                break;


                case "EmProfiles":
                  // if(user?.role === "Employe"){
                    return<EmProfiles/>
                  // }
                  break;

  
  
  



            

          }
        })()
       }


    </div> 
    
   
    {/* <EmLivesa /> */}
   
    </>
  )
}

export default Home
