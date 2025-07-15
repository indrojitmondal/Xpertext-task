import React from 'react';
import bannerImage from '../banner.jpg'; // Replace with your image



const Banner = () => {
    return (
        <div>
            <section className="bg-[#e4d3c9] py-16 px-4">
                 <div>
                     <div className='  grid grid-cols-[70%_30%]'> 
                       <div className=' bg-white '>
                         <div className='w-1/2 py-5 px-10'>
                         <h2 className='text-2xl font-bold py-10'>We Create Websites</h2> 
                       <p className=''>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>
                        <p className='py-5'>Using React, NextJS and ExpressJS</p>
                       <button className='btn btn-neutral mt-4'>ViEW PORTFOLIO </button>
                      
                         </div>
                       </div> 
                       <div>

                       </div>
                     </div>
                 </div>
            </section>
        </div>
    );
};

export default Banner;
