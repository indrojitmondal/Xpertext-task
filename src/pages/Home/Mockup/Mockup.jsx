import React from 'react';
import one from './1.jpg'
import bg from './bg.jpg'
import l1 from './l1.png'
import l2 from './l2.png'
const Mockup = () => {
    return (
        <div  className=' grid grid-cols-1 md:grid-cols-2' style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height: 'auto',
            width: '100%'
        }} >
          
          <div className=''>
                <div className='ml-20 mb-4  mt-24'>
                    <img src={l1} alt="" />
                </div>
                <div className='mb-20'>
                    <img src={l2} alt="" />
                </div>
          </div>

          <div className='flex justify-center items-center '>
          <div className='space-y-5 mr-20 '>
                <div className='bg-white px-10 py-5 text-black'> 
                   <h1 className='text-lg font-bold'>Branding Strategy</h1>
                   <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa tempore neque sit? Eligendi accusantium, non itaque porro magnam dolorum rerum consequatur excepturi deleniti. Eligendi doloremque mollitia quas a qui sunt ab? Porro rem molestias earum atque nostrum distinctio sunt ipsa, laborum quisquam minus impedit error reprehenderit consequuntur culpa doloremque animi.</p>
                
                </div>
                <div className='bg-white px-10 py-5 text-black'> 
                   <h1 className='text-lg font-bold'>Designing Logs</h1>
                   <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa tempore neque sit? Eligendi accusantium, non itaque porro magnam dolorum rerum consequatur excepturi deleniti. Eligendi doloremque mollitia quas a qui sunt ab? Porro rem molestias earum atque nostrum distinctio sunt ipsa, laborum quisquam minus impedit error reprehenderit consequuntur culpa doloremque animi.</p>
                
                </div>
                <div className='bg-white px-10 py-5 text-black'> 
                   <h1 className='text-lg font-bold'>Brand Identity</h1>
                   <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa tempore neque sit? Eligendi accusantium, non itaque porro magnam dolorum rerum consequatur excepturi deleniti. Eligendi doloremque mollitia quas a qui sunt ab? Porro rem molestias earum atque nostrum distinctio sunt ipsa, laborum quisquam minus impedit error reprehenderit consequuntur culpa doloremque animi.</p>
                
                </div>
                
          </div>
          </div>

            
             
        </div>
    );
};

export default Mockup;