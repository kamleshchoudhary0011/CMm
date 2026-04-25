import React from 'react'
import a from "../assets/react.svg"
import {useDispatch , useSelector} from "react-redux"


const SideBar = ({isSidebarOPen,setSelectedComponent,
       SetisSidebarOpen}) => {


  const Dispatch = useDispatch();

  const {isAuthenticated , user} = useSelector(state=> state.auth)

  return (
  <>
  <aside className={`${isSidebarOPen ?  "left-0" : " -left-full"} z-10 transition-all duration-900 md:relative md:left-0 flex w-40 bg-gray-100 flex-col h-full  `}
  style={{position:"fixed"}}>

   <div className='flex px-4 py-1 my-5'>
    <img width="30px" src={a} alt="" />
    <span className='font-3xl'>Manager</span>
   </div>
<hr />
<hr />
<hr />
<nav className='flex-1 px-4 space-y-2'>
  
   <button className='w-36    bg-transparent rounded-md hover:cursor-pointer flex iten-center' onClick={()=>setSelectedComponent("Dashboard")}>
    <img width="18px" height="15px" className=' mx-2' src={a} alt="logo" />
   <span> Dashboard</span>
  </button>

  {

    isAuthenticated && user?.role === "Employe" &&(

      <>
      
      

   <button className='w-36    bg-transparent rounded-md hover:cursor-pointer flex iten-center' onClick={()=>setSelectedComponent("Emattendance")}>
    <img width="18px" height="15px" className=' mx-2' src={a} alt="logo" />
   <span> Emattendance</span>
  </button>


   <button className='w-36    bg-transparent rounded-md hover:cursor-pointer flex iten-center' onClick={()=>setSelectedComponent("EmLives")}>
    <img width="18px" height="15px" className=' mx-2' src={a} alt="logo" />
   <span> EmLives</span>
  </button>

   <button className='w-36    bg-transparent rounded-md hover:cursor-pointer flex iten-center' onClick={()=>setSelectedComponent("EmMyTask")}>
    <img width="18px" height="15px" className=' mx-2' src={a} alt="logo" />
   <span> EmMyTask</span>
  </button>


   <button className='w-36    bg-transparent rounded-md hover:cursor-pointer flex iten-center' onClick={()=>setSelectedComponent("EmProfiles")}>
    <img width="18px" height="15px" className=' mx-2' src={a} alt="logo" />
   <span>EmProfiles</span>
  </button>



      
      </>
    )
  }



    {/* hr Components */}

{
  isAuthenticated && user?.role === "HR" &&(

    <> 
    
    
   <button className='w-36    bg-transparent rounded-md hover:cursor-pointer flex iten-center' onClick={()=>setSelectedComponent("hrAttendance")}>
    <img width="18px" height="15px" className=' mx-2' src={a} alt="logo" />
   <span> Attendance</span>
  </button>
    
   <button className='w-36    bg-transparent rounded-md hover:cursor-pointer flex iten-center' onClick={()=>setSelectedComponent("hrAttendancess")}>
    <img width="18px" height="15px" className=' mx-2' src={a} alt="logo" />
   <span> Attendancess</span>
  </button>
    
   <button className='w-36    bg-transparent rounded-md hover:cursor-pointer flex iten-center' onClick={()=>setSelectedComponent("hrEmploye")}>
    <img width="18px" height="15px" className=' mx-2' src={a} alt="logo" />
   <span> Employe</span>
  </button>
    
   <button className='w-36    bg-transparent rounded-md hover:cursor-pointer flex iten-center' onClick={()=>setSelectedComponent("hrLives")}>
    <img width="18px" height="15px" className=' mx-2' src={a} alt="logo" />
   <span> Lives</span>
  </button>
   <button className='w-36    bg-transparent rounded-md hover:cursor-pointer flex iten-center' onClick={()=>setSelectedComponent("hrPayrole")}>
    <img width="18px" height="15px" className=' mx-2' src={a} alt="logo" />
   <span> PayRole</span>
  </button>
    
     
    </>
  )
} 


{/* {
  isAuthenticated && user?.role === "Manager" &&(
<> */}

<button className='w-36    bg-transparent rounded-md hover:cursor-pointer flex iten-center' onClick={()=>setSelectedComponent("MrProject")}>
    <img width="18px" height="15px" className=' mx-2' src={a} alt="logo" />
   <span> Project</span>
  </button>


<button className='w-36    bg-transparent rounded-md hover:cursor-pointer flex iten-center' onClick={()=>setSelectedComponent("MrReport")}>
    <img width="18px" height="15px" className=' mx-2' src={a} alt="logo" />
   <span>Report</span>
  </button>

<button className='w-36    bg-transparent rounded-md hover:cursor-pointer flex iten-center' onClick={()=>setSelectedComponent("MrSetting")}>
    <img width="18px" height="15px" className=' mx-2' src={a} alt="logo" />
   <span>Setting</span>
  </button>
<button className='w-36    bg-transparent rounded-md hover:cursor-pointer flex iten-center' onClick={()=>setSelectedComponent("MrTeam")}>
    <img width="18px" height="15px" className=' mx-2' src={a} alt="logo" />
   <span>Team</span>
  </button>
    
{/* </>

  )
} */}


</nav>

  </aside>
  
  </>
  )
}

export default SideBar
