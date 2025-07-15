import React from 'react';
import bg from './bg1.jpg'
const Contact = () => {
    return (
        <div className='bg-[#DCCEC5] grid grid-cols-1 md:grid-cols-[40%_60%] pl-10 py-28'>

          
            <div className='bg-white p-10'>
                <h2 className='text-4xl font-bold uppercase'>Contact US</h2>
                <p className='py-5'> We’re dedicated to helping businesses grow by providing innovative digital solutions tailored to their needs. Whether you're a startup or an established company, we’re here to boost your online presence, engage your audience, and drive results. Let us turn your ideas into reality and elevate your brand to new heights! </p>

                <div className="divider  "></div>

                <div className='flex  items-center'>
                    <div>


                        <h2 className="text-lg text-center font-bold">
                            Phone:{' '}
                            <span className="text-sm font-medium underline decoration-[#DCCEC5] underline-offset-4">
                                1 (232) 252 55 22
                            </span>
                        </h2>

                        <h2 className="text-lg font-bold">
                            Location: <span className="text-sm font-medium ">
                                75 Street Sample, WI 63025
                            </span>
                        </h2>

                        <h2 className="text-lg text-center font-bold">
                            Mail:{' '}
                            <span className="text-sm font-medium underline decoration-[#DCCEC5] underline-offset-4">
                                template@sample.com
                            </span>
                        </h2>
                    </div>
                </div>

            </div>
           

            <div>
                <img src={bg} className=' ' alt="" />
            </div>



        </div>
    );
};

export default Contact;