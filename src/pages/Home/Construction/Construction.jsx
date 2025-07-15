import React from 'react';
import one from './1.png'
const Construction = () => {
    return (
        <div className='bg-[#FEB801] grid grid-cols-1 md:grid-cols-2'>

            <div>
                <img src={one} alt="" />
            </div>

           <div className='flex justify-center items-center'>
           <div>
                 <h2 className='text-4xl p-5 font-bold text-white'>Construction and <br /> renovation projects</h2>

                  <p className='p-5 text-white py-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, provident! Culpa non temporibus consequuntur nam voluptates perspiciatis, vitae voluptatibus molestiae quidem. At error sit nesciunt, qui perspiciatis earum, sequi est eaque praesentium asperiores id quos illum mollitia minima eius. Quas tempora atque aut, earum sit nobis maxime aperiam similique non deleniti beatae eaque dicta nesciunt nostrum dolores iure. Reiciendis ipsam iste sed a adipisci accusamus necessitatibus cupiditate non vitae nobis nostrum minima mollitia, expedita officiis beatae, veritatis nemo magnam dolores consectetur laborum doloremque maxime in? Corporis at ipsa placeat, eius deleniti adipisci dolorem ducimus incidunt voluptates porro eligendi nam totam.</p>
                  
                  <button className='border-2 border-white text-white rounded-xl px-10 p-4 ml-4 mb-5 '>CONTACT US</button>
           
            </div>
           </div>

           

        </div>
    );
};

export default Construction;