import React from 'react';

const Banner = () => {
    return (
        <div className='bg-[#e4d3c9] py-24   '>

            <div className='grid grid-cols-1 md:grid-cols-[60%_40%]'>
                <div className=' bg-white ml-10 '>

                    <div className='w-1/2  p-5'>
                    <h1 className='text-2xl font-bold '>We Create Websites</h1>
                     <p className='py-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam sit illum sed inventore. Vitae maiores, veritatis quia eveniet fuga doloribus officiis ullam culpa architecto vero doloremque amet quasi neque corrupti.</p>
                     <p className='py-4'>We are updating</p>
                     <button className='border-2 rounded-xl bg-black text-white px-10 py-5 uppercase'>View Portfolio</button>
                    
                    </div>

                </div>

                <div>

                    <div>
                        <img src="/bg1.jpg" alt="" />
                    </div>
    
                    
            
                    <div> 
                        <img src="/man.png" alt="man" /> 
                        <img src="/man2.png" alt="man2" />
                    <img className='-rotate-90'  src="/pen.png" alt="pen" />
                
                    </div>
                
                </div>

            </div>

        </div>
    );
};

export default Banner;