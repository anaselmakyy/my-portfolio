import React from 'react'

export default function Contact(){
  return (
    <div className='mt-[17%]' id='contact'>
      <h1 className='text-white font-poppins font-bold text-xl md:text-7xl text-center md:text-xl quote'>Feel free to check out my repositories and drop a ⭐ if you find something interesting!</h1>
      <h1 className='text-white font-poppins font-bold text-5xl md:text-7xl text-center mt-[20%] connect'>Let's Connect</h1>
      <div className='bg-white w-[100%] mt-[35%] md:mt-[10%]'>
        <div className="p-[5%]">
        <h1 className='text-black text-center font-poppins font-bold text-4xl md:text-5xl'>Contact :</h1>

        </div>
        <div className='flex flex-col md:flex-row justify-normal'>

        
            <div className=' md:w-[50%] flex justify-center items-center flex-col md:ml-[5%]'>
                {/* DYAL CONTENT */}
                <div className=' flex flex-col md:flex-row items-center  mt-[5%] w-[100%]'>
                    <img src="./email.png" alt="" className='w-[10%] md:w-[7%]'/>
                    <p className='text-black font-poppins font-bold md:text-3xl md:p-[2.5%] text-xl'>anasmakyy@gmail.com</p>
                </div>
                <div className='flex flex-col md:flex-row items-center   mt-[5%] w-[100%]'>
                    <img src="./phone.png" alt="" className='w-[10%] md:w-[7%]'/>
                    <p className='text-black font-poppins font-bold md:text-3xl md:p-[2.5%] text-xl'>+ 212 653-770854</p>
                </div>          
                <div className='flex flex-col md:flex-row items-center  mt-[5%] w-[100%]'>
                    <img src="./location.png" alt="" className='w-[10%] md:w-[7%]'/>
                    <p className='text-black font-poppins font-bold md:text-3xl md:p-[2.5%] text-xl'>Temara, Morocco</p>
                </div>
            </div>
            
            <div className='flex flex-col items-center md:w-[56%] text-center mt-[15%] md:mt-[0%]  realisation' >
            <h1 className='text-black font-poppins font-bold text-4xl'>Realised By :</h1>
            <h1 className='font-poppins font-bold text-6xl text-primary mt-[1%]'>Anas El Maky</h1>
            <h1 className='font-poppins font-bold text-6xl md:text-7xl text-black mt-[1%]'>EA</h1>
            <div className='flex flex-row justify-around md:mt-[10%] mt-[13%]'>

            <a href="https://github.com/anaselmakyy" target='_blank' className='md:w-[8%] w-[16%]'><img src="./github.png" alt=""   className=''/></a>
            <a href="https://www.linkedin.com/in/anas-el-maky-360257262/" target='_blank' className='md:w-[8%] w-[16%]'><img src="./linkedin.png" alt="" className=''/></a>

            </div>
                    
                 
                </div>
            </div>
            <div className='text-center items-center mt-[8%] md:mt-[2%]'>
            <p className=' text-black font-mono font-bold'>© 2024 All Rights Reserved </p>

            </div>

      </div>
      
    </div>
  )
}


