import React from 'react';
import bg from './bg2.jpg'
const Experience = () => {
    return (
        <div style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height: '600px',
            width: '100%'
        }}>

            <div className='px-10 '>


                <div className='pt-40'>
                    <h2 className='text-4xl font-bold'>Crafting Digital <br /> Experiences</h2>
                    <p className='py-3'>Join the elite ranks of sustained value creators</p>
                    <button className='border-2 mt-3 bg-black text-white rounded-xl px-5 py-3'>CONTACT US</button>

                </div>

            </div>

        </div>
    );
};

export default Experience;