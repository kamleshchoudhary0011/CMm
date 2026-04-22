import React from 'react'
import a from "../EmployeComponent/vite.svg"
const EmProfiles = () => {
  return (
    <>

    <div className='bg-white w-100 rounded-3xl h-fit justify-center items-center md:m-1 sm:m-1 m-1  '>
    
<h1 className='font-bold text-2xl ml-2 '>Profile</h1>
    <div className=' '>
      
      <div className='flex'> 
        
        
      <img src={a}alt="" /> 
      <div>
      <h2 className='text-blue-500 font-bold text-3xl'>kamesh choudhary </h2>
       <p className='text-gray-500'>kamlesh45445@gmail.com</p>
      </div>
        
      </div>
       <div className='mx-14 flex items-center my-10 gap-8'> 

        <button className='border bg-blue-100 rounded-4xl p-2 hover:bg-blue-700 hover:text-white'> Web Develope</button>
        <p className=''> point Apri 01,2020 </p>
       </div>

    </div>

      



    </div>
    


    <div className='flex flex-col  bg-white w-100 rounded-3xl h-fit ' >
     <h1 className='p-2  text-2xl'> Personal Details </h1>
      <hr className='bg-black font-bold  '/>
      <div>

        <form action="" >
          <div className='px-2'>

            <p className="py-2 font-bold "> Full Name </p>
          <h2 type="text" className='bg-gray-300 text-gray-500 w-80 border rounded-md mx-2 mb-2 p-1 '  >
            kamlesh choudhary
          </h2>
          </div>
        
         <div className='px-2'>

            <p className="py-2 font-bold "> Email </p>
          <h2 type="text" className='bg-gray-300 text-gray-500  w-80 border rounded-md mx-2 mb-2 p-1 '  >
            kamlesh788@gmail.com
          </h2>
          </div>
         

          <div className='px-2'>

            <p className="py-2 font-bold "> Full Phone </p>
          <h2 type="text" className='bg-gray-300 text-gray-500  w-80 border rounded-md mx-2 mb-2 p-1 '  >
            8745954854
          </h2>
          </div>



        </form>

      </div>

        
    </div>

      <div className='w-90  m-2 mb-3 bg-white rounded-3xl  flex justify-center items-center py-1 hover:bg-blue-700  hover:text-white'>
        <button>Update Credancials</button>
      </div>
    
    </>
  )
}

export default EmProfiles
