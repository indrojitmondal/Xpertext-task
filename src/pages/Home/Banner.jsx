import React from 'react';

const Banner = () => {
    return (
        <div className='bg-[#e4d3c9] pt-80   '>



            <div className='grid grid-cols-[70%_30%] relative '>
                <div className=' bg-white ml-10 '>

                    <div className='  p-5'>
                        <h1 className='text-2xl font-bold '>We Create Websites</h1>
                        <p className='py-4 w-1/2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam sit illum sed inventore. Vitae maiores, veritatis quia eveniet fuga doloribus officiis ullam culpa architecto vero doloremque amet quasi neque corrupti.</p>
                        <p className='py-4'>We are updating</p>
                        <button className='border-2 rounded-xl bg-black text-white px-10 py-5 uppercase'>View Portfolio</button>

                    </div>

                </div>

                <div className=''>
                    <div className=' '>

                        <div className='h-[300px] w-[500px] absolute right-60 -top-20'>
                            <img className='h-full w-full' src="/bg1.jpg" alt="" />
                        </div>



                        <div className='h-[300px] bg-[#C8BBB4] z-20 w-[480px] p-10  absolute -top-36 right-20  grid grid-cols-3'>
                            <img src="/man.png" alt="man" />
                            <img src="/man2.png" alt="man2" />
                            <img className='-rotate-90' src="/pen.png" alt="pen" />

                        </div>

                    </div>

                    <div className='bg-[#F0A901] absolute z-10  -top-60 w-[400px] h-[500px]'>

                    </div>
                </div>

            </div>

        </div>
    );
};

export default Banner;