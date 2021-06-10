import React from 'react';
import top from '../../../images/toppic.png';

const TopSection = () => {
    return (
        <div id="Home"  className="min-h-screen w-screen flex justify-center items-center flex-col-reverse lg:flex-row-reverse"
        style={{ background: 'linear-gradient(to bottom, #F0F4FD, #A1A3BA)', 
      }}
       >

         <div className="mt-5 w-screen constantBox">
           <h1 className="font-black text-5xl">This website mad with Tailwind Css</h1>
           <p class="mt-5">Try to understand this class and documentation</p>
           <button className="bg-green-500 rounded-md p-2 w-32 mt-5">Explore</button>
           

         </div>
         <img  src={top} className="w-96 h-96 lg:ml-12 border-2 border-gray-10 " alt="" />
        
          
        </div>
        
        
    );
};


export default TopSection;
