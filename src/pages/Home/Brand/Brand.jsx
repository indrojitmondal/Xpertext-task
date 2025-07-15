import React from 'react';
import one from './1.jpg'
import two from './2.jpg'
import three from './3.jpg'

const Brand = () => {
    return (
        <div className='bg-[#e4d3c9] relative py-10 px-10'>
            <div className=' grid grid-cols-1 md:grid-cols-2 '>

                <div>
                    <img src={one} alt="one" />
                    <img className='mt-2' src={two} alt="two" />
                </div>
                <div className='flex justify-center py-20 pl-2'>
                    <img className='' src={three} alt="three" />
                </div>

            </div>

            <div className='bg-black w-96 absolute top-1/3  right-1/3'> 
                <div className=' text-white px-10 '>
                      <h1 className='text-4xl text-center pt-4'>  Brand Values</h1>
                       <p className='py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem libero voluptates et deleniti beatae, dolor id atque nostrum quas ea!</p>
                      <div className='flex justify-center py-5 pb-5' >
                      <button className='border-2 border-white rounded-xl  px-5 py-3'>LEARN MORE</button>
                      </div>
                </div>
            </div>
        </div>
    );
};

export default Brand;